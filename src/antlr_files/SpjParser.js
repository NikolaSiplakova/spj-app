// Generated from Spj.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SpjListener from './SpjListener.js';
import SpjVisitor from './SpjVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003#\u0098\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003%",
    "\n\u0003\u0003\u0004\u0003\u0004\u0005\u0004)\n\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u00053\n\u0005\u0003\u0006\u0003\u0006\u0006\u00067\n\u0006",
    "\r\u0006\u000e\u00068\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bX\n\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0005\nm\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007",
    "\nu\n\n\f\n\u000e\nx\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u0081\n\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0007\u000b\u008b\n\u000b\f\u000b\u000e\u000b",
    "\u008e\u000b\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0002\u0004\u0012\u0014\u0010",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c",
    "\u0002\u0006\u0003\u0002\u0011\u0016\u0003\u0002\u0017\u0019\u0003\u0002",
    "\u001a\u001b\u0003\u0002\u0003\u0004\u0002\u009c\u0002\u001e\u0003\u0002",
    "\u0002\u0002\u0004$\u0003\u0002\u0002\u0002\u0006(\u0003\u0002\u0002",
    "\u0002\b2\u0003\u0002\u0002\u0002\n4\u0003\u0002\u0002\u0002\f:\u0003",
    "\u0002\u0002\u0002\u000eW\u0003\u0002\u0002\u0002\u0010Y\u0003\u0002",
    "\u0002\u0002\u0012l\u0003\u0002\u0002\u0002\u0014\u0080\u0003\u0002",
    "\u0002\u0002\u0016\u008f\u0003\u0002\u0002\u0002\u0018\u0091\u0003\u0002",
    "\u0002\u0002\u001a\u0093\u0003\u0002\u0002\u0002\u001c\u0095\u0003\u0002",
    "\u0002\u0002\u001e\u001f\u0005\u0004\u0003\u0002\u001f \u0007\u0002",
    "\u0002\u0003 \u0003\u0003\u0002\u0002\u0002!%\u0005\b\u0005\u0002\"",
    "%\u0005\n\u0006\u0002#%\u0005\u000e\b\u0002$!\u0003\u0002\u0002\u0002",
    "$\"\u0003\u0002\u0002\u0002$#\u0003\u0002\u0002\u0002%\u0005\u0003\u0002",
    "\u0002\u0002&)\u0005\b\u0005\u0002\')\u0005\u000e\b\u0002(&\u0003\u0002",
    "\u0002\u0002(\'\u0003\u0002\u0002\u0002)\u0007\u0003\u0002\u0002\u0002",
    "*+\u0007\u001d\u0002\u0002+,\u0005\u000e\b\u0002,-\u0007\u001c\u0002",
    "\u0002-3\u0003\u0002\u0002\u0002./\u0007\u001d\u0002\u0002/0\u0005\n",
    "\u0006\u000201\u0007\u001c\u0002\u000213\u0003\u0002\u0002\u00022*\u0003",
    "\u0002\u0002\u00022.\u0003\u0002\u0002\u00023\t\u0003\u0002\u0002\u0002",
    "46\u0005\f\u0007\u000257\u0005\f\u0007\u000265\u0003\u0002\u0002\u0002",
    "78\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u000289\u0003\u0002\u0002",
    "\u00029\u000b\u0003\u0002\u0002\u0002:;\u0005\u000e\b\u0002;<\u0007",
    " \u0002\u0002<\r\u0003\u0002\u0002\u0002=X\u0005\u0010\t\u0002>X\u0007",
    "\u001e\u0002\u0002?@\u0007\r\u0002\u0002@A\u0005\u0012\n\u0002AB\u0007",
    "\f\u0002\u0002BC\u0005\u0006\u0004\u0002CD\u0007\u000b\u0002\u0002D",
    "E\u0005\u0006\u0004\u0002EX\u0003\u0002\u0002\u0002FG\u0007\n\u0002",
    "\u0002GH\u0005\u0012\n\u0002HI\u0007\t\u0002\u0002IJ\u0005\u0006\u0004",
    "\u0002JX\u0003\u0002\u0002\u0002KL\u0007\b\u0002\u0002LM\u0005\u0010",
    "\t\u0002MN\u0007\u0007\u0002\u0002NO\u0007\"\u0002\u0002OP\u0007\t\u0002",
    "\u0002PQ\u0005\u0006\u0004\u0002QX\u0003\u0002\u0002\u0002RS\u0007\u0006",
    "\u0002\u0002ST\u0005\u0006\u0004\u0002TU\u0007\u0005\u0002\u0002UV\u0005",
    "\u0012\n\u0002VX\u0003\u0002\u0002\u0002W=\u0003\u0002\u0002\u0002W",
    ">\u0003\u0002\u0002\u0002W?\u0003\u0002\u0002\u0002WF\u0003\u0002\u0002",
    "\u0002WK\u0003\u0002\u0002\u0002WR\u0003\u0002\u0002\u0002X\u000f\u0003",
    "\u0002\u0002\u0002YZ\u0007!\u0002\u0002Z[\u0007\u001f\u0002\u0002[\\",
    "\u0005\u0014\u000b\u0002\\\u0011\u0003\u0002\u0002\u0002]^\b\n\u0001",
    "\u0002^m\u0005\u001c\u000f\u0002_`\u0005\u0014\u000b\u0002`a\u0005\u0016",
    "\f\u0002ab\u0005\u0014\u000b\u0002bm\u0003\u0002\u0002\u0002cd\u0007",
    "\u000e\u0002\u0002de\u0007\u001d\u0002\u0002ef\u0005\u0012\n\u0002f",
    "g\u0007\u001c\u0002\u0002gm\u0003\u0002\u0002\u0002hi\u0007\u001d\u0002",
    "\u0002ij\u0005\u0012\n\u0002jk\u0007\u001c\u0002\u0002km\u0003\u0002",
    "\u0002\u0002l]\u0003\u0002\u0002\u0002l_\u0003\u0002\u0002\u0002lc\u0003",
    "\u0002\u0002\u0002lh\u0003\u0002\u0002\u0002mv\u0003\u0002\u0002\u0002",
    "no\f\u0005\u0002\u0002op\u0007\u000f\u0002\u0002pu\u0005\u0012\n\u0006",
    "qr\f\u0004\u0002\u0002rs\u0007\u0010\u0002\u0002su\u0005\u0012\n\u0005",
    "tn\u0003\u0002\u0002\u0002tq\u0003\u0002\u0002\u0002ux\u0003\u0002\u0002",
    "\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002w\u0013\u0003",
    "\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002yz\b\u000b\u0001\u0002z",
    "\u0081\u0007\"\u0002\u0002{\u0081\u0007!\u0002\u0002|}\u0007\u001d\u0002",
    "\u0002}~\u0005\u0014\u000b\u0002~\u007f\u0007\u001c\u0002\u0002\u007f",
    "\u0081\u0003\u0002\u0002\u0002\u0080y\u0003\u0002\u0002\u0002\u0080",
    "{\u0003\u0002\u0002\u0002\u0080|\u0003\u0002\u0002\u0002\u0081\u008c",
    "\u0003\u0002\u0002\u0002\u0082\u0083\f\u0004\u0002\u0002\u0083\u0084",
    "\u0005\u0018\r\u0002\u0084\u0085\u0005\u0014\u000b\u0005\u0085\u008b",
    "\u0003\u0002\u0002\u0002\u0086\u0087\f\u0003\u0002\u0002\u0087\u0088",
    "\u0005\u001a\u000e\u0002\u0088\u0089\u0005\u0014\u000b\u0004\u0089\u008b",
    "\u0003\u0002\u0002\u0002\u008a\u0082\u0003\u0002\u0002\u0002\u008a\u0086",
    "\u0003\u0002\u0002\u0002\u008b\u008e\u0003\u0002\u0002\u0002\u008c\u008a",
    "\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u0015",
    "\u0003\u0002\u0002\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008f\u0090",
    "\t\u0002\u0002\u0002\u0090\u0017\u0003\u0002\u0002\u0002\u0091\u0092",
    "\t\u0003\u0002\u0002\u0092\u0019\u0003\u0002\u0002\u0002\u0093\u0094",
    "\t\u0004\u0002\u0002\u0094\u001b\u0003\u0002\u0002\u0002\u0095\u0096",
    "\t\u0005\u0002\u0002\u0096\u001d\u0003\u0002\u0002\u0002\r$(28Wltv\u0080",
    "\u008a\u008c"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class SpjParser extends antlr4.Parser {

    static grammarFileName = "Spj.g4";
    static literalNames = [ null, "'true'", "'false'", "'until'", "'repeat'", 
                            "'to'", "'for'", "'do'", "'while'", "'else'", 
                            "'then'", "'if'", "'\u00AC'", "'\u2227'", "'\u2228'", 
                            "'>'", "'>='", "'<'", "'<='", "'!='", "'='", 
                            "'mod'", "'div'", "'*'", "'-'", "'+'", "')'", 
                            "'('", "'skip'", "':='", "';'" ];
    static symbolicNames = [ null, null, null, "UNTIL", "REPEAT", "TO", 
                             "FOR", "DO", "WHILE", "ELSE", "THEN", "IF", 
                             "NEG", "AND", "OR", "GT", "GE", "LT", "LE", 
                             "NEQ", "EQ", "MOD", "DIV", "MUL", "SUB", "ADD", 
                             "RPar", "LPar", "Skip", "Assign", "Delimit", 
                             "Var", "Num", "WS" ];
    static ruleNames = [ "prog", "s", "ifWhileS", "par", "seq", "statDelimit", 
                         "stat", "assignment", "b", "e", "relOp", "mathOpPriority", 
                         "mathOp", "bool" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SpjParser.ruleNames;
        this.literalNames = SpjParser.literalNames;
        this.symbolicNames = SpjParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 8:
    	    		return this.b_sempred(localctx, predIndex);
    	case 9:
    	    		return this.e_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    b_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 3);
    		case 1:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    e_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 2);
    		case 3:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SpjParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.s();
	        this.state = 29;
	        this.match(SpjParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	s() {
	    let localctx = new SContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SpjParser.RULE_s);
	    try {
	        this.state = 34;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 31;
	            this.par();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 32;
	            this.seq();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 33;
	            this.stat();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifWhileS() {
	    let localctx = new IfWhileSContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SpjParser.RULE_ifWhileS);
	    try {
	        this.state = 38;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SpjParser.LPar:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 36;
	            this.par();
	            break;
	        case SpjParser.REPEAT:
	        case SpjParser.FOR:
	        case SpjParser.WHILE:
	        case SpjParser.IF:
	        case SpjParser.Skip:
	        case SpjParser.Var:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 37;
	            this.stat();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	par() {
	    let localctx = new ParContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SpjParser.RULE_par);
	    try {
	        this.state = 48;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.match(SpjParser.LPar);
	            this.state = 41;
	            this.stat();
	            this.state = 42;
	            this.match(SpjParser.RPar);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 44;
	            this.match(SpjParser.LPar);
	            this.state = 45;
	            this.seq();
	            this.state = 46;
	            this.match(SpjParser.RPar);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	seq() {
	    let localctx = new SeqContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SpjParser.RULE_seq);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.statDelimit();
	        this.state = 52; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 51;
	            this.statDelimit();
	            this.state = 54; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SpjParser.REPEAT) | (1 << SpjParser.FOR) | (1 << SpjParser.WHILE) | (1 << SpjParser.IF) | (1 << SpjParser.Skip) | (1 << SpjParser.Var))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statDelimit() {
	    let localctx = new StatDelimitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SpjParser.RULE_statDelimit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.stat();
	        this.state = 57;
	        this.match(SpjParser.Delimit);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SpjParser.RULE_stat);
	    try {
	        this.state = 85;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SpjParser.Var:
	            localctx = new AssignStatContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 59;
	            this.assignment();
	            break;
	        case SpjParser.Skip:
	            localctx = new SkipStatContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 60;
	            this.match(SpjParser.Skip);
	            break;
	        case SpjParser.IF:
	            localctx = new IfStatContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 61;
	            this.match(SpjParser.IF);
	            this.state = 62;
	            this.b(0);
	            this.state = 63;
	            this.match(SpjParser.THEN);
	            this.state = 64;
	            this.ifWhileS();
	            this.state = 65;
	            this.match(SpjParser.ELSE);
	            this.state = 66;
	            this.ifWhileS();
	            break;
	        case SpjParser.WHILE:
	            localctx = new WhileStatContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 68;
	            this.match(SpjParser.WHILE);
	            this.state = 69;
	            this.b(0);
	            this.state = 70;
	            this.match(SpjParser.DO);
	            this.state = 71;
	            this.ifWhileS();
	            break;
	        case SpjParser.FOR:
	            localctx = new ForStatContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 73;
	            this.match(SpjParser.FOR);
	            this.state = 74;
	            this.assignment();
	            this.state = 75;
	            this.match(SpjParser.TO);
	            this.state = 76;
	            this.match(SpjParser.Num);
	            this.state = 77;
	            this.match(SpjParser.DO);
	            this.state = 78;
	            this.ifWhileS();
	            break;
	        case SpjParser.REPEAT:
	            localctx = new RepeatStatContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 80;
	            this.match(SpjParser.REPEAT);
	            this.state = 81;
	            this.ifWhileS();
	            this.state = 82;
	            this.match(SpjParser.UNTIL);
	            this.state = 83;
	            this.b(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SpjParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(SpjParser.Var);
	        this.state = 88;
	        this.match(SpjParser.Assign);
	        this.state = 89;
	        this.e(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	b(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new BContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, SpjParser.RULE_b, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new TrueFalseBoolContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 92;
	            this.bool();
	            break;

	        case 2:
	            localctx = new RelOpBoolContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 93;
	            this.e(0);
	            this.state = 94;
	            this.relOp();
	            this.state = 95;
	            this.e(0);
	            break;

	        case 3:
	            localctx = new NegBoolContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 97;
	            this.match(SpjParser.NEG);
	            this.state = 98;
	            this.match(SpjParser.LPar);
	            this.state = 99;
	            this.b(0);
	            this.state = 100;
	            this.match(SpjParser.RPar);
	            break;

	        case 4:
	            localctx = new ParBoolContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 102;
	            this.match(SpjParser.LPar);
	            this.state = 103;
	            this.b(0);
	            this.state = 104;
	            this.match(SpjParser.RPar);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 116;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 114;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AndBoolContext(this, new BContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SpjParser.RULE_b);
	                    this.state = 108;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 109;
	                    this.match(SpjParser.AND);
	                    this.state = 110;
	                    this.b(4);
	                    break;

	                case 2:
	                    localctx = new OrBoolContext(this, new BContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SpjParser.RULE_b);
	                    this.state = 111;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 112;
	                    this.match(SpjParser.OR);
	                    this.state = 113;
	                    this.b(3);
	                    break;

	                } 
	            }
	            this.state = 118;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	e(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new EContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, SpjParser.RULE_e, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SpjParser.Num:
	            localctx = new NumExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 120;
	            this.match(SpjParser.Num);
	            break;
	        case SpjParser.Var:
	            localctx = new VarExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 121;
	            this.match(SpjParser.Var);
	            break;
	        case SpjParser.LPar:
	            localctx = new ParExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 122;
	            this.match(SpjParser.LPar);
	            this.state = 123;
	            this.e(0);
	            this.state = 124;
	            this.match(SpjParser.RPar);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 138;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 136;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MathOpPriorExprContext(this, new EContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SpjParser.RULE_e);
	                    this.state = 128;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 129;
	                    this.mathOpPriority();
	                    this.state = 130;
	                    this.e(3);
	                    break;

	                case 2:
	                    localctx = new MathOpExprContext(this, new EContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SpjParser.RULE_e);
	                    this.state = 132;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 133;
	                    this.mathOp();
	                    this.state = 134;
	                    this.e(2);
	                    break;

	                } 
	            }
	            this.state = 140;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	relOp() {
	    let localctx = new RelOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SpjParser.RULE_relOp);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SpjParser.GT) | (1 << SpjParser.GE) | (1 << SpjParser.LT) | (1 << SpjParser.LE) | (1 << SpjParser.NEQ) | (1 << SpjParser.EQ))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mathOpPriority() {
	    let localctx = new MathOpPriorityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SpjParser.RULE_mathOpPriority);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SpjParser.MOD) | (1 << SpjParser.DIV) | (1 << SpjParser.MUL))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mathOp() {
	    let localctx = new MathOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, SpjParser.RULE_mathOp);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        _la = this._input.LA(1);
	        if(!(_la===SpjParser.SUB || _la===SpjParser.ADD)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bool() {
	    let localctx = new BoolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, SpjParser.RULE_bool);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        _la = this._input.LA(1);
	        if(!(_la===SpjParser.T__0 || _la===SpjParser.T__1)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SpjParser.EOF = antlr4.Token.EOF;
SpjParser.T__0 = 1;
SpjParser.T__1 = 2;
SpjParser.UNTIL = 3;
SpjParser.REPEAT = 4;
SpjParser.TO = 5;
SpjParser.FOR = 6;
SpjParser.DO = 7;
SpjParser.WHILE = 8;
SpjParser.ELSE = 9;
SpjParser.THEN = 10;
SpjParser.IF = 11;
SpjParser.NEG = 12;
SpjParser.AND = 13;
SpjParser.OR = 14;
SpjParser.GT = 15;
SpjParser.GE = 16;
SpjParser.LT = 17;
SpjParser.LE = 18;
SpjParser.NEQ = 19;
SpjParser.EQ = 20;
SpjParser.MOD = 21;
SpjParser.DIV = 22;
SpjParser.MUL = 23;
SpjParser.SUB = 24;
SpjParser.ADD = 25;
SpjParser.RPar = 26;
SpjParser.LPar = 27;
SpjParser.Skip = 28;
SpjParser.Assign = 29;
SpjParser.Delimit = 30;
SpjParser.Var = 31;
SpjParser.Num = 32;
SpjParser.WS = 33;

SpjParser.RULE_prog = 0;
SpjParser.RULE_s = 1;
SpjParser.RULE_ifWhileS = 2;
SpjParser.RULE_par = 3;
SpjParser.RULE_seq = 4;
SpjParser.RULE_statDelimit = 5;
SpjParser.RULE_stat = 6;
SpjParser.RULE_assignment = 7;
SpjParser.RULE_b = 8;
SpjParser.RULE_e = 9;
SpjParser.RULE_relOp = 10;
SpjParser.RULE_mathOpPriority = 11;
SpjParser.RULE_mathOp = 12;
SpjParser.RULE_bool = 13;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpjParser.RULE_prog;
    }

	s() {
	    return this.getTypedRuleContext(SContext,0);
	};

	EOF() {
	    return this.getToken(SpjParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpjParser.RULE_s;
    }

	par() {
	    return this.getTypedRuleContext(ParContext,0);
	};

	seq() {
	    return this.getTypedRuleContext(SeqContext,0);
	};

	stat() {
	    return this.getTypedRuleContext(StatContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterS(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitS(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitS(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfWhileSContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpjParser.RULE_ifWhileS;
    }

	par() {
	    return this.getTypedRuleContext(ParContext,0);
	};

	stat() {
	    return this.getTypedRuleContext(StatContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterIfWhileS(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitIfWhileS(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitIfWhileS(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpjParser.RULE_par;
    }

	LPar() {
	    return this.getToken(SpjParser.LPar, 0);
	};

	stat() {
	    return this.getTypedRuleContext(StatContext,0);
	};

	RPar() {
	    return this.getToken(SpjParser.RPar, 0);
	};

	seq() {
	    return this.getTypedRuleContext(SeqContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterPar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitPar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitPar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeqContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpjParser.RULE_seq;
    }

	statDelimit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatDelimitContext);
	    } else {
	        return this.getTypedRuleContext(StatDelimitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterSeq(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitSeq(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitSeq(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatDelimitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpjParser.RULE_statDelimit;
    }

	stat() {
	    return this.getTypedRuleContext(StatContext,0);
	};

	Delimit() {
	    return this.getToken(SpjParser.Delimit, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterStatDelimit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitStatDelimit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitStatDelimit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpjParser.RULE_stat;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class RepeatStatContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	REPEAT() {
	    return this.getToken(SpjParser.REPEAT, 0);
	};

	ifWhileS() {
	    return this.getTypedRuleContext(IfWhileSContext,0);
	};

	UNTIL() {
	    return this.getToken(SpjParser.UNTIL, 0);
	};

	b() {
	    return this.getTypedRuleContext(BContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterRepeatStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitRepeatStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitRepeatStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SpjParser.RepeatStatContext = RepeatStatContext;

class ForStatContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FOR() {
	    return this.getToken(SpjParser.FOR, 0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	TO() {
	    return this.getToken(SpjParser.TO, 0);
	};

	Num() {
	    return this.getToken(SpjParser.Num, 0);
	};

	DO() {
	    return this.getToken(SpjParser.DO, 0);
	};

	ifWhileS() {
	    return this.getTypedRuleContext(IfWhileSContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterForStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitForStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitForStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SpjParser.ForStatContext = ForStatContext;

class AssignStatContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterAssignStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitAssignStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitAssignStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SpjParser.AssignStatContext = AssignStatContext;

class IfStatContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IF() {
	    return this.getToken(SpjParser.IF, 0);
	};

	b() {
	    return this.getTypedRuleContext(BContext,0);
	};

	THEN() {
	    return this.getToken(SpjParser.THEN, 0);
	};

	ifWhileS = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IfWhileSContext);
	    } else {
	        return this.getTypedRuleContext(IfWhileSContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(SpjParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterIfStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitIfStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitIfStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SpjParser.IfStatContext = IfStatContext;

class SkipStatContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Skip() {
	    return this.getToken(SpjParser.Skip, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterSkipStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitSkipStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitSkipStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SpjParser.SkipStatContext = SkipStatContext;

class WhileStatContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	WHILE() {
	    return this.getToken(SpjParser.WHILE, 0);
	};

	b() {
	    return this.getTypedRuleContext(BContext,0);
	};

	DO() {
	    return this.getToken(SpjParser.DO, 0);
	};

	ifWhileS() {
	    return this.getTypedRuleContext(IfWhileSContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterWhileStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitWhileStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitWhileStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SpjParser.WhileStatContext = WhileStatContext;

class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpjParser.RULE_assignment;
    }

	Var() {
	    return this.getToken(SpjParser.Var, 0);
	};

	Assign() {
	    return this.getToken(SpjParser.Assign, 0);
	};

	e() {
	    return this.getTypedRuleContext(EContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitAssignment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpjParser.RULE_b;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NegBoolContext extends BContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NEG() {
	    return this.getToken(SpjParser.NEG, 0);
	};

	LPar() {
	    return this.getToken(SpjParser.LPar, 0);
	};

	b() {
	    return this.getTypedRuleContext(BContext,0);
	};

	RPar() {
	    return this.getToken(SpjParser.RPar, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterNegBool(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitNegBool(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitNegBool(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SpjParser.NegBoolContext = NegBoolContext;

class TrueFalseBoolContext extends BContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	bool() {
	    return this.getTypedRuleContext(BoolContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterTrueFalseBool(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitTrueFalseBool(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitTrueFalseBool(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SpjParser.TrueFalseBoolContext = TrueFalseBoolContext;

class ParBoolContext extends BContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPar() {
	    return this.getToken(SpjParser.LPar, 0);
	};

	b() {
	    return this.getTypedRuleContext(BContext,0);
	};

	RPar() {
	    return this.getToken(SpjParser.RPar, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterParBool(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitParBool(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitParBool(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SpjParser.ParBoolContext = ParBoolContext;

class RelOpBoolContext extends BContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	e = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EContext);
	    } else {
	        return this.getTypedRuleContext(EContext,i);
	    }
	};

	relOp() {
	    return this.getTypedRuleContext(RelOpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterRelOpBool(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitRelOpBool(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitRelOpBool(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SpjParser.RelOpBoolContext = RelOpBoolContext;

class OrBoolContext extends BContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	b = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BContext);
	    } else {
	        return this.getTypedRuleContext(BContext,i);
	    }
	};

	OR() {
	    return this.getToken(SpjParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterOrBool(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitOrBool(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitOrBool(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SpjParser.OrBoolContext = OrBoolContext;

class AndBoolContext extends BContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	b = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BContext);
	    } else {
	        return this.getTypedRuleContext(BContext,i);
	    }
	};

	AND() {
	    return this.getToken(SpjParser.AND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterAndBool(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitAndBool(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitAndBool(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SpjParser.AndBoolContext = AndBoolContext;

class EContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpjParser.RULE_e;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class MathOpExprContext extends EContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	e = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EContext);
	    } else {
	        return this.getTypedRuleContext(EContext,i);
	    }
	};

	mathOp() {
	    return this.getTypedRuleContext(MathOpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterMathOpExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitMathOpExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitMathOpExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SpjParser.MathOpExprContext = MathOpExprContext;

class NumExprContext extends EContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Num() {
	    return this.getToken(SpjParser.Num, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterNumExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitNumExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitNumExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SpjParser.NumExprContext = NumExprContext;

class ParExprContext extends EContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPar() {
	    return this.getToken(SpjParser.LPar, 0);
	};

	e() {
	    return this.getTypedRuleContext(EContext,0);
	};

	RPar() {
	    return this.getToken(SpjParser.RPar, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterParExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitParExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitParExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SpjParser.ParExprContext = ParExprContext;

class VarExprContext extends EContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Var() {
	    return this.getToken(SpjParser.Var, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterVarExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitVarExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitVarExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SpjParser.VarExprContext = VarExprContext;

class MathOpPriorExprContext extends EContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	e = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EContext);
	    } else {
	        return this.getTypedRuleContext(EContext,i);
	    }
	};

	mathOpPriority() {
	    return this.getTypedRuleContext(MathOpPriorityContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterMathOpPriorExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitMathOpPriorExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitMathOpPriorExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SpjParser.MathOpPriorExprContext = MathOpPriorExprContext;

class RelOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpjParser.RULE_relOp;
    }

	EQ() {
	    return this.getToken(SpjParser.EQ, 0);
	};

	NEQ() {
	    return this.getToken(SpjParser.NEQ, 0);
	};

	GT() {
	    return this.getToken(SpjParser.GT, 0);
	};

	GE() {
	    return this.getToken(SpjParser.GE, 0);
	};

	LT() {
	    return this.getToken(SpjParser.LT, 0);
	};

	LE() {
	    return this.getToken(SpjParser.LE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterRelOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitRelOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitRelOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MathOpPriorityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpjParser.RULE_mathOpPriority;
    }

	MUL() {
	    return this.getToken(SpjParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(SpjParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(SpjParser.MOD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterMathOpPriority(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitMathOpPriority(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitMathOpPriority(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MathOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpjParser.RULE_mathOp;
    }

	SUB() {
	    return this.getToken(SpjParser.SUB, 0);
	};

	ADD() {
	    return this.getToken(SpjParser.ADD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterMathOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitMathOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitMathOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BoolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpjParser.RULE_bool;
    }


	enterRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.enterBool(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpjListener ) {
	        listener.exitBool(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitBool(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SpjParser.ProgContext = ProgContext; 
SpjParser.SContext = SContext; 
SpjParser.IfWhileSContext = IfWhileSContext; 
SpjParser.ParContext = ParContext; 
SpjParser.SeqContext = SeqContext; 
SpjParser.StatDelimitContext = StatDelimitContext; 
SpjParser.StatContext = StatContext; 
SpjParser.AssignmentContext = AssignmentContext; 
SpjParser.BContext = BContext; 
SpjParser.EContext = EContext; 
SpjParser.RelOpContext = RelOpContext; 
SpjParser.MathOpPriorityContext = MathOpPriorityContext; 
SpjParser.MathOpContext = MathOpContext; 
SpjParser.BoolContext = BoolContext; 
