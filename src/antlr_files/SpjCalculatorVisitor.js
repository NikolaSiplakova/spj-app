import { MATH_OPERATIONS } from "../constants/mathOperations"
import { RELATIONAL_OPERATIONS } from "../constants/relationalOperations"
import { STATEMENT_TYPES } from "../constants/statementTypes"

import SpjVisitor from "./SpjVisitor"
import SpjParser from "./SpjParser"
import _ from "lodash"

export default class SpjCalculatorVisitor extends SpjVisitor {
  constructor(inputValues) {
    super()
    this.inputValues = inputValues
    this.variables = [...this.inputValues]
  }

  nodes = []
  statements = []
  state = 0
  variablesNames = []

  updatedVariablesValues = (varName, value) => {
    this.variables = this.variables.map((variable) => {
      if (variable.varName === varName) {
        variable = { ...variable, value: value }
      }
      return variable
    })
    return this.variables
  }

  setComputationStep = (
    printout,
    state,
    hasStateChanged = false,
    variables
  ) => {
    const computationStep = {
      printout,
      state,
      hasStateChanged,
      variables,
    }

    this.nodes.push(computationStep)
  }

  // PROG ;
  visitProg(ctx) {
    this.setComputationStep(ctx.getText(), 0, true, [...this.inputValues])

    this.visitChildren(ctx)[0].map((child) => this.statements.push(child))

    const allStatements = [...this.statements]

    this.nodes = this.nodes.map((statementStep, index) => {
      if (index === 0) {
        return { ...statementStep }
      }

      const substats =
        allStatements[0] === undefined ? [] : allStatements[0].substats
      allStatements.shift()

      allStatements.unshift(...substats) //tu musi prist array
      const getPrintout = () => {
        if (allStatements.length === 0) {
          return null
        }

        const allStatementTexts = allStatements.map(
          (statement) => statement.text
        )

        return allStatementTexts.join(" ")
      }

      return { ...statementStep, printout: getPrintout() }
    })

    return
  }

  visitS(ctx) {
    return this.visitChildren(ctx)
  }

  visitIfWhileS(ctx) {
    return this.visitChildren(ctx)
  }

  visitSeq(ctx) {
    const statements = this.visitChildren(ctx)
    statements.shift() //remove left brace
    statements.pop() //remove right brace
    return statements //array
  }

  // STATEMENTS var := mathExpr ;
  visitAssignStat(ctx) {
    return this.visitChildren(ctx)[0]
  }

  visitSkipStat(ctx) {
    this.setComputationStep(null, this.state, false, [...this.variables])
    return {
      text: "skip",
      substats: [],
      type: STATEMENT_TYPES.SKIP,
    }
  }

  visitIfStat(ctx) {
    this.setComputationStep(null, this.state, false, [...this.variables])

    if (ctx.start.type === SpjParser.WHILE) {
      const boolValue = this.visit(ctx.children[1])
      const text = ctx.children.map((child) => child.getText())
      const ifString = `if ${ctx.children[1].getText()} then (${text.join(
        " "
      )} ${ctx.getText()}) else skip`

      const getDoStatements = () => {
        if (ctx.children[3].children[0].ruleIndex === SpjParser.RULE_seq) {
          const doStatements = this.visit(ctx.children[3])
          return doStatements[0]
        } else {
          const doStatements = this.visit(ctx.children[3])
          return doStatements
        }
      }

      return {
        text: ifString,
        substats:
          boolValue === true
            ? [...getDoStatements(), this.visitWhileStat(ctx)]
            : [this.visitSkipStat(ctx)],
        type: STATEMENT_TYPES.IF,
      }
    }

    if (ctx.start.type === SpjParser.REPEAT) {
      const text = ctx.children.map((child) => child.getText())
      const ifString = `if ${ctx.children[3].getText()} then skip else ${text.join(
        " "
      )}`

      const boolValue = this.visit(ctx.children[3])

      return {
        text: ifString,
        substats:
          boolValue === true
            ? [this.visitSkipStat(ctx)]
            : [this.visitRepeatStat(ctx)],
        type: STATEMENT_TYPES.IF,
      }
    }

    if (ctx.start.type === SpjParser.FOR) {
      const boolValue = this.visit(ctx.children[1])

      const assignment = ctx.children[1]
      const lowerBoundry = assignment.children[2].getText()
      const lowerBoundryVar = assignment.children[0].getText()
      const upperBoundry = ctx.children[3].getText()

      const ifString = `if ¬ (${lowerBoundryVar} = ${upperBoundry}) then (${ctx.children[5].getText()}; ${ctx.getText()}) else skip`
      const getDoStatements = () => {
        if (ctx.children[3].children[0].ruleIndex === SpjParser.RULE_seq) {
          const doStatements = this.visit(ctx.children[5])
          return doStatements[0]
        } else {
          const doStatements = this.visit(ctx.children[5])
          return doStatements
        }
      }

      return {
        text: ifString,
        substats:
          boolValue === true
            ? [...getDoStatements(), this.visitForStat(ctx)]
            : [this.visitSkipStat(ctx)],
        type: STATEMENT_TYPES.IF,
      }
    }

    //elseStatements = sequence / statement
    const getThenStatements = () => {
      if (ctx.children[3].children[0].ruleIndex === SpjParser.RULE_seq) {
        const thenStatements = this.visit(ctx.children[3])
        return thenStatements[0]
      } else {
        const thenStatements = this.visit(ctx.children[3])
        return thenStatements
      }
    }

    //elseStatements = sequence / statement
    const getElseStatements = () => {
      if (ctx.children[5].children[0].ruleIndex === SpjParser.RULE_seq) {
        const elseStatements = this.visit(ctx.children[5])
        return elseStatements[0]
      }

      const elseStatements = this.visit(ctx.children[5])
      return elseStatements
    }
    const boolValue = this.visit(ctx.children[1])

    const text = ctx.children.map((child) => child.getText())

    return {
      text: text.join(" "),
      substats: boolValue === true ? getThenStatements() : getElseStatements(),
      type: STATEMENT_TYPES.IF,
    }
  }

  visitWhileStat(ctx) {
    this.setComputationStep(null, this.state, false, [...this.variables])

    return {
      text: ctx.getText(),
      substats: [this.visitIfStat(ctx)],
      type: STATEMENT_TYPES.WHILE,
    }
  }

  visitForStat(ctx) {
    this.setComputationStep(null, this.state, false, [...this.variables])

    return {
      text: ctx.getText(),
      substats: [this.visitIfStat(ctx)],
      type: STATEMENT_TYPES.FOR,
    }
  }

  visitRepeatStat(ctx) {
    this.setComputationStep(null, this.state, false, [...this.variables])

    const getRepeatStatements = () => {
      if (ctx.children[1].children[0].ruleIndex === SpjParser.RULE_seq) {
        const repeatStatements = this.visit(ctx.children[1])
        return repeatStatements[0]
      } else {
        const repeatStatements = this.visit(ctx.children[1])
        return repeatStatements
      }
    }

    const text = ctx.children.map((child) => child.getText())

    return {
      text: text.join(" "),
      substats: [...getRepeatStatements(), this.visitIfStat(ctx)],
      type: STATEMENT_TYPES.REPEAT,
    }
  }

  visitAssignment(ctx) {
    const text = ctx.children.map((child) => child.getText())

    const varToAssign = ctx.children[0].getText()
    const valueToAssign = this.visitChildren(ctx)[2]
    this.state++

    this.setComputationStep(null, this.state, true, [
      ...this.updatedVariablesValues(varToAssign, valueToAssign),
    ])

    return { text: text.join(" "), substats: [], type: STATEMENT_TYPES.ASSIGN }
  }

  // BOOL
  visitNegBool(ctx) {
    const boolExpression = this.visitChildren(ctx)[2]
    return !boolExpression
  }

  visitTrueFalseBool(ctx) {
    return this.visitChildren(ctx)
  }

  visitParBool(ctx) {
    const parBoolStatement = this.visitChildren(ctx)
    parBoolStatement.pop()
    parBoolStatement.shift()
    return parBoolStatement[0]
  }

  // ( x < y )
  visitRelOpBool(ctx) {
    const expressionParts = this.visitChildren(ctx)

    const firstOperand = expressionParts[0]
    const operationType = expressionParts[1]
    const secondOperand = expressionParts[2]

    if (operationType === RELATIONAL_OPERATIONS.EQ) {
      return firstOperand === secondOperand
    }

    if (operationType === RELATIONAL_OPERATIONS.NEQ) {
      return firstOperand !== secondOperand
    }

    if (operationType === RELATIONAL_OPERATIONS.LT) {
      return firstOperand < secondOperand
    }

    if (operationType === RELATIONAL_OPERATIONS.LE) {
      return firstOperand < secondOperand || firstOperand === secondOperand
    }

    if (operationType === RELATIONAL_OPERATIONS.GT) {
      return firstOperand > secondOperand
    }

    if (operationType === RELATIONAL_OPERATIONS.GE) {
      return firstOperand > secondOperand || firstOperand === secondOperand
    }

    return
  }

  visitOrBool(ctx) {
    const expressionParts = this.visitChildren(ctx)

    const firstBoolExpression = expressionParts[0]
    const secondBoolExpression = expressionParts[2]

    if (firstBoolExpression === true || secondBoolExpression === true) {
      return true
    }

    return false
  }

  visitAndBool(ctx) {
    const expressionParts = this.visitChildren(ctx)

    const firstBoolExpression = expressionParts[0]
    const secondBoolExpression = expressionParts[2]

    if (firstBoolExpression === true && secondBoolExpression === true) {
      return true
    }

    return false
  }

  // ARITHMETIC EXPRESSIONS
  visitNumExpr(ctx) {
    return Number(ctx.getText())
  }

  visitVarExpr(ctx) {
    const varToReturn = this.variables.find(
      (variable) => variable.varName === ctx.getText()
    )
    this.variablesNames.push(varToReturn.varName)
    return Number(varToReturn.value)
  }

  visitMathOpPriorExpr(ctx) {
    const expressionParts = this.visitChildren(ctx)

    const firstOperand = expressionParts[0]
    const operationType = expressionParts[1]
    const secondOperand = expressionParts[2]

    let result = 0

    if (operationType === MATH_OPERATIONS.MUL) {
      result = firstOperand * secondOperand
    }

    if (operationType === MATH_OPERATIONS.DIV) {
      result = firstOperand / secondOperand
    }

    if (operationType === MATH_OPERATIONS.MOD) {
      result = firstOperand % secondOperand
    }

    return Math.round((result + Number.EPSILON) * 100) / 100
  }

  visitMathOpExpr(ctx) {
    const expressionParts = this.visitChildren(ctx)
    const firstOperand = expressionParts[0]
    const operationType = expressionParts[1]
    const secondOperand = expressionParts[2]

    let result = 0

    if (operationType === MATH_OPERATIONS.ADD) {
      result = firstOperand + secondOperand
    }

    if (operationType === MATH_OPERATIONS.SUB) {
      result = firstOperand - secondOperand
    }

    return Math.round((result + Number.EPSILON) * 100) / 100
  }

  visitParExpr(ctx) {
    const statements = this.visitChildren(ctx)
    statements.shift() //remove left brace
    statements.pop() //remove right brace
    return statements
  }

  //relational operations > >= < <= =
  visitRelOp(ctx) {
    return ctx.getText()
  }

  //mathematical operations + - * / mod
  visitMathOp(ctx) {
    return ctx.getText()
  }

  visitMathOpPriority(ctx) {
    return ctx.getText()
  }

  // Visit a parse tree produced by SpjParser#bool.
  visitBool(ctx) {
    return this.visitChildren(ctx)
  }

  getNodes() {
    return this.nodes
  }

  getVariables() {
    const uniqVariables = _.uniq(this.variablesNames)
    const uniqVariablesInObj = uniqVariables.map((uniqVar) => {
      return {
        varName: uniqVar,
        value: 0,
      }
    })
    return uniqVariablesInObj
  }
}
