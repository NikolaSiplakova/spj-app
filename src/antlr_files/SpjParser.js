// Generated from Spj.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SpjVisitor from './SpjVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003#\u0098\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0006\u0003",
    "\u001f\n\u0003\r\u0003\u000e\u0003 \u0005\u0003#\n\u0003\u0003\u0004",
    "\u0003\u0004\u0005\u0004\'\n\u0004\u0003\u0005\u0003\u0005\u0006\u0005",
    "+\n\u0005\r\u0005\u000e\u0005,\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u00064\n\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006=",
    "\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006D\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006M\n\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006T\n\u0006",
    "\u0005\u0006V\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007\\\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0005\bm\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007",
    "\bu\n\b\f\b\u000e\bx\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0005\t\u0081\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0007\t\u008b\n\t\f\t\u000e\t\u008e\u000b",
    "\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0002\u0004\u000e\u0010\u000e\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u0002\u0006\u0003\u0002\u0011\u0016\u0003",
    "\u0002\u0017\u0019\u0003\u0002\u001a\u001b\u0003\u0002\u0003\u0004\u0002",
    "\u00a3\u0002\u001a\u0003\u0002\u0002\u0002\u0004\"\u0003\u0002\u0002",
    "\u0002\u0006&\u0003\u0002\u0002\u0002\b(\u0003\u0002\u0002\u0002\nU",
    "\u0003\u0002\u0002\u0002\fW\u0003\u0002\u0002\u0002\u000el\u0003\u0002",
    "\u0002\u0002\u0010\u0080\u0003\u0002\u0002\u0002\u0012\u008f\u0003\u0002",
    "\u0002\u0002\u0014\u0091\u0003\u0002\u0002\u0002\u0016\u0093\u0003\u0002",
    "\u0002\u0002\u0018\u0095\u0003\u0002\u0002\u0002\u001a\u001b\u0005\u0004",
    "\u0003\u0002\u001b\u0003\u0003\u0002\u0002\u0002\u001c#\u0005\b\u0005",
    "\u0002\u001d\u001f\u0005\n\u0006\u0002\u001e\u001d\u0003\u0002\u0002",
    "\u0002\u001f \u0003\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002",
    " !\u0003\u0002\u0002\u0002!#\u0003\u0002\u0002\u0002\"\u001c\u0003\u0002",
    "\u0002\u0002\"\u001e\u0003\u0002\u0002\u0002#\u0005\u0003\u0002\u0002",
    "\u0002$\'\u0005\b\u0005\u0002%\'\u0005\n\u0006\u0002&$\u0003\u0002\u0002",
    "\u0002&%\u0003\u0002\u0002\u0002\'\u0007\u0003\u0002\u0002\u0002(*\u0007",
    "\u001d\u0002\u0002)+\u0005\n\u0006\u0002*)\u0003\u0002\u0002\u0002+",
    ",\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002",
    "\u0002-.\u0003\u0002\u0002\u0002./\u0007\u001c\u0002\u0002/\t\u0003",
    "\u0002\u0002\u00020V\u0005\f\u0007\u000213\u0007\u001e\u0002\u00022",
    "4\u0007 \u0002\u000232\u0003\u0002\u0002\u000234\u0003\u0002\u0002\u0002",
    "4V\u0003\u0002\u0002\u000256\u0007\r\u0002\u000267\u0005\u000e\b\u0002",
    "78\u0007\f\u0002\u000289\u0005\u0006\u0004\u00029:\u0007\u000b\u0002",
    "\u0002:<\u0005\u0006\u0004\u0002;=\u0007 \u0002\u0002<;\u0003\u0002",
    "\u0002\u0002<=\u0003\u0002\u0002\u0002=V\u0003\u0002\u0002\u0002>?\u0007",
    "\n\u0002\u0002?@\u0005\u000e\b\u0002@A\u0007\t\u0002\u0002AC\u0005\u0006",
    "\u0004\u0002BD\u0007 \u0002\u0002CB\u0003\u0002\u0002\u0002CD\u0003",
    "\u0002\u0002\u0002DV\u0003\u0002\u0002\u0002EF\u0007\b\u0002\u0002F",
    "G\u0005\f\u0007\u0002GH\u0007\u0007\u0002\u0002HI\u0007\"\u0002\u0002",
    "IJ\u0007\t\u0002\u0002JL\u0005\u0006\u0004\u0002KM\u0007 \u0002\u0002",
    "LK\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002MV\u0003\u0002\u0002",
    "\u0002NO\u0007\u0006\u0002\u0002OP\u0005\u0006\u0004\u0002PQ\u0007\u0005",
    "\u0002\u0002QS\u0005\u000e\b\u0002RT\u0007 \u0002\u0002SR\u0003\u0002",
    "\u0002\u0002ST\u0003\u0002\u0002\u0002TV\u0003\u0002\u0002\u0002U0\u0003",
    "\u0002\u0002\u0002U1\u0003\u0002\u0002\u0002U5\u0003\u0002\u0002\u0002",
    "U>\u0003\u0002\u0002\u0002UE\u0003\u0002\u0002\u0002UN\u0003\u0002\u0002",
    "\u0002V\u000b\u0003\u0002\u0002\u0002WX\u0007!\u0002\u0002XY\u0007\u001f",
    "\u0002\u0002Y[\u0005\u0010\t\u0002Z\\\u0007 \u0002\u0002[Z\u0003\u0002",
    "\u0002\u0002[\\\u0003\u0002\u0002\u0002\\\r\u0003\u0002\u0002\u0002",
    "]^\b\b\u0001\u0002^m\u0005\u0018\r\u0002_`\u0005\u0010\t\u0002`a\u0005",
    "\u0012\n\u0002ab\u0005\u0010\t\u0002bm\u0003\u0002\u0002\u0002cd\u0007",
    "\u000e\u0002\u0002de\u0007\u001d\u0002\u0002ef\u0005\u000e\b\u0002f",
    "g\u0007\u001c\u0002\u0002gm\u0003\u0002\u0002\u0002hi\u0007\u001d\u0002",
    "\u0002ij\u0005\u000e\b\u0002jk\u0007\u001c\u0002\u0002km\u0003\u0002",
    "\u0002\u0002l]\u0003\u0002\u0002\u0002l_\u0003\u0002\u0002\u0002lc\u0003",
    "\u0002\u0002\u0002lh\u0003\u0002\u0002\u0002mv\u0003\u0002\u0002\u0002",
    "no\f\u0005\u0002\u0002op\u0007\u000f\u0002\u0002pu\u0005\u000e\b\u0006",
    "qr\f\u0004\u0002\u0002rs\u0007\u0010\u0002\u0002su\u0005\u000e\b\u0005",
    "tn\u0003\u0002\u0002\u0002tq\u0003\u0002\u0002\u0002ux\u0003\u0002\u0002",
    "\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002w\u000f\u0003",
    "\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002yz\b\t\u0001\u0002z\u0081",
    "\u0007\"\u0002\u0002{\u0081\u0007!\u0002\u0002|}\u0007\u001d\u0002\u0002",
    "}~\u0005\u0010\t\u0002~\u007f\u0007\u001c\u0002\u0002\u007f\u0081\u0003",
    "\u0002\u0002\u0002\u0080y\u0003\u0002\u0002\u0002\u0080{\u0003\u0002",
    "\u0002\u0002\u0080|\u0003\u0002\u0002\u0002\u0081\u008c\u0003\u0002",
    "\u0002\u0002\u0082\u0083\f\u0004\u0002\u0002\u0083\u0084\u0005\u0014",
    "\u000b\u0002\u0084\u0085\u0005\u0010\t\u0005\u0085\u008b\u0003\u0002",
    "\u0002\u0002\u0086\u0087\f\u0003\u0002\u0002\u0087\u0088\u0005\u0016",
    "\f\u0002\u0088\u0089\u0005\u0010\t\u0004\u0089\u008b\u0003\u0002\u0002",
    "\u0002\u008a\u0082\u0003\u0002\u0002\u0002\u008a\u0086\u0003\u0002\u0002",
    "\u0002\u008b\u008e\u0003\u0002\u0002\u0002\u008c\u008a\u0003\u0002\u0002",
    "\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u0011\u0003\u0002\u0002",
    "\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008f\u0090\t\u0002\u0002",
    "\u0002\u0090\u0013\u0003\u0002\u0002\u0002\u0091\u0092\t\u0003\u0002",
    "\u0002\u0092\u0015\u0003\u0002\u0002\u0002\u0093\u0094\t\u0004\u0002",
    "\u0002\u0094\u0017\u0003\u0002\u0002\u0002\u0095\u0096\t\u0005\u0002",
    "\u0002\u0096\u0019\u0003\u0002\u0002\u0002\u0013 \"&,3<CLSU[ltv\u0080",
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
    static ruleNames = [ "prog", "s", "ifWhileS", "seq", "stat", "assignment", 
                         "b", "e", "relOp", "mathOpPriority", "mathOp", 
                         "bool" ];

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
    	case 6:
    	    		return this.b_sempred(localctx, predIndex);
    	case 7:
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
	        this.state = 24;
	        this.s();
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
	    var _la = 0; // Token type
	    try {
	        this.state = 32;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SpjParser.LPar:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 26;
	            this.seq();
	            break;
	        case SpjParser.REPEAT:
	        case SpjParser.FOR:
	        case SpjParser.WHILE:
	        case SpjParser.IF:
	        case SpjParser.Skip:
	        case SpjParser.Var:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 28; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 27;
	                this.stat();
	                this.state = 30; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SpjParser.REPEAT) | (1 << SpjParser.FOR) | (1 << SpjParser.WHILE) | (1 << SpjParser.IF) | (1 << SpjParser.Skip) | (1 << SpjParser.Var))) !== 0));
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



	ifWhileS() {
	    let localctx = new IfWhileSContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SpjParser.RULE_ifWhileS);
	    try {
	        this.state = 36;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SpjParser.LPar:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.seq();
	            break;
	        case SpjParser.REPEAT:
	        case SpjParser.FOR:
	        case SpjParser.WHILE:
	        case SpjParser.IF:
	        case SpjParser.Skip:
	        case SpjParser.Var:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
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



	seq() {
	    let localctx = new SeqContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SpjParser.RULE_seq);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(SpjParser.LPar);
	        this.state = 40; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 39;
	            this.stat();
	            this.state = 42; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SpjParser.REPEAT) | (1 << SpjParser.FOR) | (1 << SpjParser.WHILE) | (1 << SpjParser.IF) | (1 << SpjParser.Skip) | (1 << SpjParser.Var))) !== 0));
	        this.state = 44;
	        this.match(SpjParser.RPar);
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
	    this.enterRule(localctx, 8, SpjParser.RULE_stat);
	    try {
	        this.state = 83;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SpjParser.Var:
	            localctx = new AssignStatContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 46;
	            this.assignment();
	            break;
	        case SpjParser.Skip:
	            localctx = new SkipStatContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 47;
	            this.match(SpjParser.Skip);
	            this.state = 49;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 48;
	                this.match(SpjParser.Delimit);

	            }
	            break;
	        case SpjParser.IF:
	            localctx = new IfStatContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 51;
	            this.match(SpjParser.IF);
	            this.state = 52;
	            this.b(0);
	            this.state = 53;
	            this.match(SpjParser.THEN);
	            this.state = 54;
	            this.ifWhileS();
	            this.state = 55;
	            this.match(SpjParser.ELSE);
	            this.state = 56;
	            this.ifWhileS();
	            this.state = 58;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	            if(la_===1) {
	                this.state = 57;
	                this.match(SpjParser.Delimit);

	            }
	            break;
	        case SpjParser.WHILE:
	            localctx = new WhileStatContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 60;
	            this.match(SpjParser.WHILE);
	            this.state = 61;
	            this.b(0);
	            this.state = 62;
	            this.match(SpjParser.DO);
	            this.state = 63;
	            this.ifWhileS();
	            this.state = 65;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	            if(la_===1) {
	                this.state = 64;
	                this.match(SpjParser.Delimit);

	            }
	            break;
	        case SpjParser.FOR:
	            localctx = new ForStatContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 67;
	            this.match(SpjParser.FOR);
	            this.state = 68;
	            this.assignment();
	            this.state = 69;
	            this.match(SpjParser.TO);
	            this.state = 70;
	            this.match(SpjParser.Num);
	            this.state = 71;
	            this.match(SpjParser.DO);
	            this.state = 72;
	            this.ifWhileS();
	            this.state = 74;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	            if(la_===1) {
	                this.state = 73;
	                this.match(SpjParser.Delimit);

	            }
	            break;
	        case SpjParser.REPEAT:
	            localctx = new RepeatStatContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 76;
	            this.match(SpjParser.REPEAT);
	            this.state = 77;
	            this.ifWhileS();
	            this.state = 78;
	            this.match(SpjParser.UNTIL);
	            this.state = 79;
	            this.b(0);
	            this.state = 81;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	            if(la_===1) {
	                this.state = 80;
	                this.match(SpjParser.Delimit);

	            }
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
	    this.enterRule(localctx, 10, SpjParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(SpjParser.Var);
	        this.state = 86;
	        this.match(SpjParser.Assign);
	        this.state = 87;
	        this.e(0);
	        this.state = 89;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 88;
	            this.match(SpjParser.Delimit);

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


	b(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new BContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, SpjParser.RULE_b, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
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
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 114;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
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
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, SpjParser.RULE_e, _p);
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
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 136;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
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
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
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
	    this.enterRule(localctx, 16, SpjParser.RULE_relOp);
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
	    this.enterRule(localctx, 18, SpjParser.RULE_mathOpPriority);
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
	    this.enterRule(localctx, 20, SpjParser.RULE_mathOp);
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
	    this.enterRule(localctx, 22, SpjParser.RULE_bool);
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
SpjParser.RULE_seq = 3;
SpjParser.RULE_stat = 4;
SpjParser.RULE_assignment = 5;
SpjParser.RULE_b = 6;
SpjParser.RULE_e = 7;
SpjParser.RULE_relOp = 8;
SpjParser.RULE_mathOpPriority = 9;
SpjParser.RULE_mathOp = 10;
SpjParser.RULE_bool = 11;

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

	seq() {
	    return this.getTypedRuleContext(SeqContext,0);
	};

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

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

	seq() {
	    return this.getTypedRuleContext(SeqContext,0);
	};

	stat() {
	    return this.getTypedRuleContext(StatContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitIfWhileS(this);
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

	LPar() {
	    return this.getToken(SpjParser.LPar, 0);
	};

	RPar() {
	    return this.getToken(SpjParser.RPar, 0);
	};

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof SpjVisitor ) {
	        return visitor.visitSeq(this);
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

	Delimit() {
	    return this.getToken(SpjParser.Delimit, 0);
	};

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

	Delimit() {
	    return this.getToken(SpjParser.Delimit, 0);
	};

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

	Delimit() {
	    return this.getToken(SpjParser.Delimit, 0);
	};

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

	Delimit() {
	    return this.getToken(SpjParser.Delimit, 0);
	};

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

	Delimit() {
	    return this.getToken(SpjParser.Delimit, 0);
	};

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

	Delimit() {
	    return this.getToken(SpjParser.Delimit, 0);
	};

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
SpjParser.SeqContext = SeqContext; 
SpjParser.StatContext = StatContext; 
SpjParser.AssignmentContext = AssignmentContext; 
SpjParser.BContext = BContext; 
SpjParser.EContext = EContext; 
SpjParser.RelOpContext = RelOpContext; 
SpjParser.MathOpPriorityContext = MathOpPriorityContext; 
SpjParser.MathOpContext = MathOpContext; 
SpjParser.BoolContext = BoolContext; 
