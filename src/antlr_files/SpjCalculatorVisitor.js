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

  setComputationStep = (printout, state, variables, changedVariable = null) => {
    const computationStep = {
      printout,
      state,
      variables,
      changedVariable,
    }

    this.nodes.push(computationStep)
  }

  textttKeywords = [
    "if",
    "then",
    "else",
    "while",
    "do",
    "skip",
    "repeat",
    "until",
  ]
  convertToLatex = (keyword) => {
    if (this.textttKeywords.includes(keyword)) {
      return `\\texttt{${keyword}}`
    }

    return keyword
  }

  processSequence = (sequence) => {
    console.log("process seq")
    // console.log("sequence")
    // console.log(sequence)
    const text = sequence // [ StatDelimit | Stat ]
      .map((statement) => {
        // console.log("statement")
        // console.log(statement)

        if (statement.ruleIndex === SpjParser.RULE_statDelimit) {
          const statementParts = statement.children[0].children.map((part) => {
            // console.log("statDelimit part")
            // console.log(part)
            if (part.ruleIndex === undefined) {
              //terminaly
              // console.log("terminal")
              return this.convertToLatex(part.getText())
            }

            if (
              //zatvorkovane ifWhileS
              part.ruleIndex === SpjParser.RULE_ifWhileS &&
              part.children[0]?.ruleIndex === SpjParser.RULE_par
            ) {
              // console.log("parentheses")
              return this.processSequence(part.children[0].children[1].children)
            }

            // console.log("something else")
            return this.convertToLatex(part.getText())
          })

          return `${statementParts.join(" \\ ")};`
        }

        // console.log("not statDelimit")

        return this.convertToLatex(statement.getText())
      })

    // console.log(text)
    // console.log("----------------------------------------------")

    return `(${text.join(" \\ ")})`
  }

  // PROG ;
  visitProg(ctx) {
    // [ SContext, <EOF>]
    this.visitChildren(ctx)[0].map((child) => this.statements.push(child))

    const mainStatements = [...this.statements]

    const mainStatementsPrintout = mainStatements.map((printout) => {
      return {
        oneStatementPrintout: printout.janeStatements,
        statementType: printout.type,
      }
    })

    this.nodes = this.nodes.map((statementStep, index) => {
      if (index === 0) {
        return {
          ...statementStep,
          printout: mainStatementsPrintout,
        }
      }

      const substats =
        mainStatements[0] === undefined ? [] : mainStatements[0].substats
      mainStatements.shift()
      mainStatements.unshift(...substats) //tu musi prist array

      const getPrintout = () => {
        if (mainStatements.length === 0) {
          return null
        }

        const allStatementTexts = mainStatements.map((statement) => {
          return {
            oneStatementPrintout: statement.janeStatements,
            statementType: statement.type,
          }
        })

        return allStatementTexts
      }

      const newPrintout = getPrintout()

      return {
        ...statementStep,
        printout: newPrintout,
      }
    })

    return
  }

  // children: [ParContext] || [SeqContext] || [Stat]
  // visit:       array     ||    array     || object
  visitS(ctx) {
    const sChildren = this.visitChildren(ctx)[0]

    if (
      ctx.children[0].ruleIndex === SpjParser.RULE_par ||
      ctx.children[0].ruleIndex === SpjParser.RULE_seq
    ) {
      return sChildren
    }

    return [sChildren]
  }

  visitIfWhileS(ctx) {
    return this.visitChildren(ctx)
  }

  visitPar(ctx) {
    const statements = this.visitChildren(ctx)

    if (ctx.children[1].ruleIndex === SpjParser.RULE_seq) {
      return statements[1]
    } //seq vracia array

    return [statements[1]]
  }

  visitStatDelimit(ctx) {
    return this.visitChildren(ctx)[0]
  }

  visitSeq(ctx) {
    return this.visitChildren(ctx)
  }

  visitAssignStat(ctx) {
    return this.visitChildren(ctx)[0]
  }

  visitSkipStat(ctx) {
    this.setComputationStep(null, this.state, [...this.variables])
    return {
      janeStatements: [{ text: "\\texttt{skip}", type: null }],
      substats: [],
      type: STATEMENT_TYPES.SKIP,
    }
  }

  visitIfStat(ctx) {
    this.setComputationStep(null, this.state, [...this.variables])

    if (ctx.start.type === SpjParser.WHILE) {
      const boolValue = this.visit(ctx.children[1])
      const boolCondition = ctx.children[1].getText()
      //[ while, condition, do, doStatements ]
      const whileSentence = ctx.children.map((child) =>
        this.convertToLatex(child.getText())
      )

      //while sentence
      const processDoStatements = () => {
        if (ctx.children[3].children[0].ruleIndex === SpjParser.RULE_par) {
          return this.processSequence(
            ctx.children[3].children[0].children[1].children //do
          )
        } else {
          const doStatements = ctx.children[3].children[0].children.map(
            (child) => this.convertToLatex(child.getText())
          )

          return doStatements.join(" \\ ")
        }
      }

      whileSentence[3] = processDoStatements()

      //do statements without first parentheses
      let doStatements = processDoStatements()

      if (doStatements[0] === "(") {
        doStatements = doStatements.slice(1)
      }

      if (doStatements[doStatements.length - 1] === ")") {
        doStatements = doStatements.slice(0, -1)
      } else {
        doStatements += ";"
      }

      const ifStringParts = [
        {
          text: `\\texttt{if} \\ ${boolCondition} \\ \\texttt{then}`,
          type: null,
        },
        {
          text: `\\bigl( \\ ${doStatements} \\ ${whileSentence.join(
            " \\ "
          )}; \\ \\bigl)`,
          type: STATEMENT_TYPES.THEN_ELSE,
        },
        {
          text: "\\texttt{else}",
          type: null,
        },
        {
          text: "\\texttt{skip}",
          type: STATEMENT_TYPES.THEN_ELSE,
        },
      ]

      const getDoStatements = () => {
        if (ctx.children[3].children[0].ruleIndex === SpjParser.RULE_par) {
          const doStatements = this.visit(ctx.children[3])
          return doStatements[0]
        } else {
          const doStatements = this.visit(ctx.children[3])
          return doStatements
        }
      }

      return {
        janeStatements: ifStringParts,
        substats:
          boolValue === true
            ? [...getDoStatements(), this.visitWhileStat(ctx)]
            : [this.visitSkipStat(ctx)],
        type: STATEMENT_TYPES.IF,
      }
    }

    if (ctx.start.type === SpjParser.REPEAT) {
      const boolValue = this.visit(ctx.children[3])
      const boolCondition = ctx.children[3].getText()

      const repeatSentence = ctx.children.map((child) =>
        this.convertToLatex(child.getText())
      )

      const processRepeatStatements = () => {
        if (ctx.children[1].children[0].ruleIndex === SpjParser.RULE_par) {
          return this.processSequence(
            ctx.children[1].children[0].children[1].children //repeat
          )
        } else {
          const repeatStatements = ctx.children[3].children[0].children.map(
            (child) => this.convertToLatex(child.getText())
          )

          return repeatStatements.join(" \\ ")
        }
      }

      repeatSentence[1] = processRepeatStatements()

      const ifString = [
        {
          text: `\\texttt{if} \\ ${boolCondition} \\ \\texttt{then}`,
          type: null,
        },
        {
          text: "\\texttt{skip}",
          type: STATEMENT_TYPES.THEN_ELSE,
        },
        {
          text: "\\texttt{else}",
          type: null,
        },
        {
          text: `${repeatSentence.join(" \\ ")}`,
          type: STATEMENT_TYPES.THEN_ELSE,
        },
      ]

      return {
        janeStatements: ifString,
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

      const ifString = `if ¬ (${lowerBoundryVar} = ${upperBoundry}) then (${ctx.children[5].getText()} ${ctx.getText()}) else skip`
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
      if (ctx.children[3].children[0].ruleIndex === SpjParser.RULE_par) {
        const thenStatements = this.visit(ctx.children[3])
        return thenStatements[0]
      }

      const thenStatements = this.visit(ctx.children[3])
      return thenStatements
    }

    //elseStatements = sequence / statement
    const getElseStatements = () => {
      if (ctx.children[5].children[0].ruleIndex === SpjParser.RULE_par) {
        const elseStatements = this.visit(ctx.children[5])
        return elseStatements[0]
      }

      const elseStatements = this.visit(ctx.children[5])
      return elseStatements
    }

    const boolValue = this.visit(ctx.children[1])

    // [ if, condition, then, ifWhileStat, else, ifWhileStat ]
    const statementParts = ctx.children.map((child, index) => {
      return {
        text: this.convertToLatex(child.getText()),
        type: index === 3 || index === 5 ? STATEMENT_TYPES.THEN_ELSE : null,
      }
    })

    //then
    if (ctx.children[3].children[0]?.ruleIndex === SpjParser.RULE_par) {
      statementParts[3].text = this.processSequence(
        ctx.children[3].children[0].children[1].children
      )
    } else {
      const thenStatementsText = ctx.children[3].children[0].children.map(
        (child) => this.convertToLatex(child.getText())
      )
      statementParts[3].text = thenStatementsText.join(" \\ ")
    }

    //else
    if (ctx.children[5].children[0]?.ruleIndex === SpjParser.RULE_par) {
      statementParts[5].text = this.processSequence(
        ctx.children[5].children[0].children[1].children
      )
    } else {
      const elseStatementsText = ctx.children[5].children[0].children.map(
        (child) => this.convertToLatex(child.getText())
      )

      statementParts[5].text = elseStatementsText.join(" \\ ")
    }

    return {
      janeStatements: statementParts,
      substats: boolValue === true ? getThenStatements() : getElseStatements(),
      type: STATEMENT_TYPES.IF,
    }
  }

  visitWhileStat(ctx) {
    this.setComputationStep(null, this.state, [...this.variables])
    // [ while, condition, do, statements ]
    const whileSentence = ctx.children.map((child, index) => {
      return { text: this.convertToLatex(child.getText()), type: null }
    })

    const processDoStatements = () => {
      if (ctx.children[3].children[0].ruleIndex === SpjParser.RULE_par) {
        return {
          text: this.processSequence(
            ctx.children[3].children[0].children[1].children //do
          ),
          type: STATEMENT_TYPES.DO,
        }
      } else {
        const doStatements = ctx.children[3].children[0].children.map((child) =>
          this.convertToLatex(child.getText())
        )

        return { text: doStatements.join(" \\ "), type: STATEMENT_TYPES.DO }
      }
    }

    //[ ( , statements, ) ] || [statementPart, statementPart]
    whileSentence[3] = processDoStatements()

    return {
      janeStatements: whileSentence,
      substats: [this.visitIfStat(ctx)],
      type: STATEMENT_TYPES.WHILE,
    }
  }

  visitForStat(ctx) {
    this.setComputationStep(null, this.state, [...this.variables])

    return {
      janeStatements: [
        {
          text: ctx.getText(),
          type: STATEMENT_TYPES.FOR,
        },
      ],
      substats: [this.visitIfStat(ctx)],
      type: STATEMENT_TYPES.FOR,
    }
  }

  visitRepeatStat(ctx) {
    this.setComputationStep(null, this.state, [...this.variables])

    const getRepeatStatements = () => {
      if (ctx.children[1].children[0].ruleIndex === SpjParser.RULE_par) {
        const repeatStatements = this.visit(ctx.children[1])
        return repeatStatements[0]
      } else {
        const repeatStatements = this.visit(ctx.children[1])
        return repeatStatements
      }
    }

    const repeatStatementText = ctx.children.map((child, index) => {
      return { text: this.convertToLatex(child.getText()), type: null }
    })

    const processRepeatStatements = () => {
      if (ctx.children[1].children[0].ruleIndex === SpjParser.RULE_par) {
        return {
          text: this.processSequence(
            ctx.children[1].children[0].children[1].children //repeat
          ),
          type: STATEMENT_TYPES.DO,
        }
      } else {
        const repeatStatements = ctx.children[1].children[0].children.map(
          (child) => this.convertToLatex(child.getText())
        )

        return { text: repeatStatements.join(" \\ "), type: STATEMENT_TYPES.DO }
      }
    }

    repeatStatementText[1] = processRepeatStatements()

    return {
      janeStatements: repeatStatementText,
      substats: [...getRepeatStatements(), this.visitIfStat(ctx)],
      type: STATEMENT_TYPES.REPEAT,
    }
  }

  visitAssignment(ctx) {
    const assignmentParts = ctx.children.map((child) => child.getText())

    const assignmentVar = ctx.children[0].getText()
    const assignmentValue = this.visitChildren(ctx)[2]

    this.updatedVariablesValues(assignmentVar, assignmentValue)
    this.setComputationStep(
      null,
      this.state,
      [...this.variables],
      `${assignmentVar} \\mapsto ${assignmentValue}`
    )
    this.state++

    return {
      janeStatements: [
        {
          text: assignmentParts.join(" "),
          type: null, //null because of highlighting
        },
      ],
      substats: [],
      type: STATEMENT_TYPES.ASSIGN,
    }
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
