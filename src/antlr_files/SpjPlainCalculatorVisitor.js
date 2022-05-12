import SpjVisitor from "./SpjVisitor"
import _ from "lodash"

export default class SpjPlainCalculatorVisitor extends SpjVisitor {
  constructor() {
    super()
  }

  variablesNames = []

  // Visit a parse tree produced by SpjParser#prog.
  visitProg(ctx) {
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#s.
  visitS(ctx) {
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#ifWhileS.
  visitIfWhileS(ctx) {
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#seq.
  visitSeq(ctx) {
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#AssignStat.
  visitAssignStat(ctx) {
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#SkipStat.
  visitSkipStat(ctx) {
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#IfStat.
  visitIfStat(ctx) {
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#WhileStat.
  visitWhileStat(ctx) {
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#ForStat.
  visitForStat(ctx) {
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#assignment.
  visitAssignment(ctx) {
    this.variablesNames.push(ctx.children[0].getText())
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#NegBool.
  visitNegBool(ctx) {
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#TrueFalseBool.
  visitTrueFalseBool(ctx) {
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#ParBool.
  visitParBool(ctx) {
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#RelOpBool.
  visitRelOpBool(ctx) {
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#OrBool.
  visitOrBool(ctx) {
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#AndBool.
  visitAndBool(ctx) {
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#MathOpExpr.
  visitMathOpExpr(ctx) {
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#NumExpr.
  visitNumExpr(ctx) {
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#ParExpr.
  visitParExpr(ctx) {
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#VarExpr.
  visitVarExpr(ctx) {
    // const varToReturn = this.variables.find(
    //   (variable) => variable.varName === ctx.getText()
    // );
    this.variablesNames.push(ctx.getText())
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#relOp.
  visitRelOp(ctx) {
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#mathOp.
  visitMathOp(ctx) {
    return this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SpjParser#bool.
  visitBool(ctx) {
    return this.visitChildren(ctx)
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
