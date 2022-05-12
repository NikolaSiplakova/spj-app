import antlr4 from "antlr4";
import SpjPlainCalculatorVisitor from "../antlr_files/SpjPlainCalculatorVisitor";
import SpjLexer from "../antlr_files/SpjLexer";
import SpjParser from "../antlr_files/SpjParser";
import SpjCalculatorVisitor from "../antlr_files/SpjCalculatorVisitor";

export const getPlainCalculator = () => new SpjPlainCalculatorVisitor()

export const getMyCalculator = (inputValues) =>  new SpjCalculatorVisitor(inputValues);

export const getSyntaxTree = (inputProgram) => {
	const chars = new antlr4.InputStream(inputProgram);
  	const lexer = new SpjLexer(chars);
  	lexer.strictMode = false;
  	const tokens = new antlr4.CommonTokenStream(lexer);
  	const parser = new SpjParser(tokens);
  	
	return  parser.prog();
}