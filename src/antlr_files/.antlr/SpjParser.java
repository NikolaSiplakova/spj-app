// Generated from /Users/nikolka/Desktop/spj-app/src/antlr_files/Spj.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SpjParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, UNTIL=3, REPEAT=4, TO=5, FOR=6, DO=7, WHILE=8, ELSE=9, 
		THEN=10, IF=11, NEG=12, AND=13, OR=14, GT=15, GE=16, LT=17, LE=18, NEQ=19, 
		EQ=20, MOD=21, DIV=22, MUL=23, SUB=24, ADD=25, RPar=26, LPar=27, Skip=28, 
		Assign=29, Delimit=30, Var=31, Num=32, WS=33;
	public static final int
		RULE_prog = 0, RULE_s = 1, RULE_ifWhileS = 2, RULE_par = 3, RULE_seq = 4, 
		RULE_statDelimit = 5, RULE_stat = 6, RULE_assignment = 7, RULE_b = 8, 
		RULE_e = 9, RULE_relOp = 10, RULE_mathOpPriority = 11, RULE_mathOp = 12, 
		RULE_bool = 13;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "s", "ifWhileS", "par", "seq", "statDelimit", "stat", "assignment", 
			"b", "e", "relOp", "mathOpPriority", "mathOp", "bool"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'true'", "'false'", "'until'", "'repeat'", "'to'", "'for'", "'do'", 
			"'while'", "'else'", "'then'", "'if'", "'\u00AC'", "'\u2227'", "'\u2228'", 
			"'>'", "'>='", "'<'", "'<='", "'!='", "'='", "'mod'", "'div'", "'*'", 
			"'-'", "'+'", "')'", "'('", "'skip'", "':='", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "UNTIL", "REPEAT", "TO", "FOR", "DO", "WHILE", "ELSE", 
			"THEN", "IF", "NEG", "AND", "OR", "GT", "GE", "LT", "LE", "NEQ", "EQ", 
			"MOD", "DIV", "MUL", "SUB", "ADD", "RPar", "LPar", "Skip", "Assign", 
			"Delimit", "Var", "Num", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Spj.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public SpjParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgContext extends ParserRuleContext {
		public SContext s() {
			return getRuleContext(SContext.class,0);
		}
		public TerminalNode EOF() { return getToken(SpjParser.EOF, 0); }
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(28);
			s();
			setState(29);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SContext extends ParserRuleContext {
		public ParContext par() {
			return getRuleContext(ParContext.class,0);
		}
		public SeqContext seq() {
			return getRuleContext(SeqContext.class,0);
		}
		public StatContext stat() {
			return getRuleContext(StatContext.class,0);
		}
		public SContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_s; }
	}

	public final SContext s() throws RecognitionException {
		SContext _localctx = new SContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_s);
		try {
			setState(34);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(31);
				par();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(32);
				seq();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(33);
				stat();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfWhileSContext extends ParserRuleContext {
		public ParContext par() {
			return getRuleContext(ParContext.class,0);
		}
		public StatContext stat() {
			return getRuleContext(StatContext.class,0);
		}
		public IfWhileSContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifWhileS; }
	}

	public final IfWhileSContext ifWhileS() throws RecognitionException {
		IfWhileSContext _localctx = new IfWhileSContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_ifWhileS);
		try {
			setState(38);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LPar:
				enterOuterAlt(_localctx, 1);
				{
				setState(36);
				par();
				}
				break;
			case REPEAT:
			case FOR:
			case WHILE:
			case IF:
			case Skip:
			case Var:
				enterOuterAlt(_localctx, 2);
				{
				setState(37);
				stat();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParContext extends ParserRuleContext {
		public TerminalNode LPar() { return getToken(SpjParser.LPar, 0); }
		public SeqContext seq() {
			return getRuleContext(SeqContext.class,0);
		}
		public TerminalNode RPar() { return getToken(SpjParser.RPar, 0); }
		public ParContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_par; }
	}

	public final ParContext par() throws RecognitionException {
		ParContext _localctx = new ParContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_par);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			match(LPar);
			setState(41);
			seq();
			setState(42);
			match(RPar);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SeqContext extends ParserRuleContext {
		public List<StatDelimitContext> statDelimit() {
			return getRuleContexts(StatDelimitContext.class);
		}
		public StatDelimitContext statDelimit(int i) {
			return getRuleContext(StatDelimitContext.class,i);
		}
		public SeqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_seq; }
	}

	public final SeqContext seq() throws RecognitionException {
		SeqContext _localctx = new SeqContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_seq);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(44);
			statDelimit();
			setState(46); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(45);
				statDelimit();
				}
				}
				setState(48); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << REPEAT) | (1L << FOR) | (1L << WHILE) | (1L << IF) | (1L << Skip) | (1L << Var))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatDelimitContext extends ParserRuleContext {
		public StatContext stat() {
			return getRuleContext(StatContext.class,0);
		}
		public TerminalNode Delimit() { return getToken(SpjParser.Delimit, 0); }
		public StatDelimitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statDelimit; }
	}

	public final StatDelimitContext statDelimit() throws RecognitionException {
		StatDelimitContext _localctx = new StatDelimitContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_statDelimit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(50);
			stat();
			setState(51);
			match(Delimit);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatContext extends ParserRuleContext {
		public StatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stat; }
	 
		public StatContext() { }
		public void copyFrom(StatContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class RepeatStatContext extends StatContext {
		public TerminalNode REPEAT() { return getToken(SpjParser.REPEAT, 0); }
		public IfWhileSContext ifWhileS() {
			return getRuleContext(IfWhileSContext.class,0);
		}
		public TerminalNode UNTIL() { return getToken(SpjParser.UNTIL, 0); }
		public BContext b() {
			return getRuleContext(BContext.class,0);
		}
		public RepeatStatContext(StatContext ctx) { copyFrom(ctx); }
	}
	public static class ForStatContext extends StatContext {
		public TerminalNode FOR() { return getToken(SpjParser.FOR, 0); }
		public AssignmentContext assignment() {
			return getRuleContext(AssignmentContext.class,0);
		}
		public TerminalNode TO() { return getToken(SpjParser.TO, 0); }
		public TerminalNode Num() { return getToken(SpjParser.Num, 0); }
		public TerminalNode DO() { return getToken(SpjParser.DO, 0); }
		public IfWhileSContext ifWhileS() {
			return getRuleContext(IfWhileSContext.class,0);
		}
		public ForStatContext(StatContext ctx) { copyFrom(ctx); }
	}
	public static class AssignStatContext extends StatContext {
		public AssignmentContext assignment() {
			return getRuleContext(AssignmentContext.class,0);
		}
		public AssignStatContext(StatContext ctx) { copyFrom(ctx); }
	}
	public static class IfStatContext extends StatContext {
		public TerminalNode IF() { return getToken(SpjParser.IF, 0); }
		public BContext b() {
			return getRuleContext(BContext.class,0);
		}
		public TerminalNode THEN() { return getToken(SpjParser.THEN, 0); }
		public List<IfWhileSContext> ifWhileS() {
			return getRuleContexts(IfWhileSContext.class);
		}
		public IfWhileSContext ifWhileS(int i) {
			return getRuleContext(IfWhileSContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(SpjParser.ELSE, 0); }
		public IfStatContext(StatContext ctx) { copyFrom(ctx); }
	}
	public static class SkipStatContext extends StatContext {
		public TerminalNode Skip() { return getToken(SpjParser.Skip, 0); }
		public SkipStatContext(StatContext ctx) { copyFrom(ctx); }
	}
	public static class WhileStatContext extends StatContext {
		public TerminalNode WHILE() { return getToken(SpjParser.WHILE, 0); }
		public BContext b() {
			return getRuleContext(BContext.class,0);
		}
		public TerminalNode DO() { return getToken(SpjParser.DO, 0); }
		public IfWhileSContext ifWhileS() {
			return getRuleContext(IfWhileSContext.class,0);
		}
		public WhileStatContext(StatContext ctx) { copyFrom(ctx); }
	}

	public final StatContext stat() throws RecognitionException {
		StatContext _localctx = new StatContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_stat);
		try {
			setState(79);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Var:
				_localctx = new AssignStatContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(53);
				assignment();
				}
				break;
			case Skip:
				_localctx = new SkipStatContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(54);
				match(Skip);
				}
				break;
			case IF:
				_localctx = new IfStatContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(55);
				match(IF);
				setState(56);
				b(0);
				setState(57);
				match(THEN);
				setState(58);
				ifWhileS();
				setState(59);
				match(ELSE);
				setState(60);
				ifWhileS();
				}
				break;
			case WHILE:
				_localctx = new WhileStatContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(62);
				match(WHILE);
				setState(63);
				b(0);
				setState(64);
				match(DO);
				setState(65);
				ifWhileS();
				}
				break;
			case FOR:
				_localctx = new ForStatContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(67);
				match(FOR);
				setState(68);
				assignment();
				setState(69);
				match(TO);
				setState(70);
				match(Num);
				setState(71);
				match(DO);
				setState(72);
				ifWhileS();
				}
				break;
			case REPEAT:
				_localctx = new RepeatStatContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(74);
				match(REPEAT);
				setState(75);
				ifWhileS();
				setState(76);
				match(UNTIL);
				setState(77);
				b(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentContext extends ParserRuleContext {
		public TerminalNode Var() { return getToken(SpjParser.Var, 0); }
		public TerminalNode Assign() { return getToken(SpjParser.Assign, 0); }
		public EContext e() {
			return getRuleContext(EContext.class,0);
		}
		public AssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment; }
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_assignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(81);
			match(Var);
			setState(82);
			match(Assign);
			setState(83);
			e(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BContext extends ParserRuleContext {
		public BContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_b; }
	 
		public BContext() { }
		public void copyFrom(BContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class NegBoolContext extends BContext {
		public TerminalNode NEG() { return getToken(SpjParser.NEG, 0); }
		public TerminalNode LPar() { return getToken(SpjParser.LPar, 0); }
		public BContext b() {
			return getRuleContext(BContext.class,0);
		}
		public TerminalNode RPar() { return getToken(SpjParser.RPar, 0); }
		public NegBoolContext(BContext ctx) { copyFrom(ctx); }
	}
	public static class TrueFalseBoolContext extends BContext {
		public BoolContext bool() {
			return getRuleContext(BoolContext.class,0);
		}
		public TrueFalseBoolContext(BContext ctx) { copyFrom(ctx); }
	}
	public static class ParBoolContext extends BContext {
		public TerminalNode LPar() { return getToken(SpjParser.LPar, 0); }
		public BContext b() {
			return getRuleContext(BContext.class,0);
		}
		public TerminalNode RPar() { return getToken(SpjParser.RPar, 0); }
		public ParBoolContext(BContext ctx) { copyFrom(ctx); }
	}
	public static class RelOpBoolContext extends BContext {
		public List<EContext> e() {
			return getRuleContexts(EContext.class);
		}
		public EContext e(int i) {
			return getRuleContext(EContext.class,i);
		}
		public RelOpContext relOp() {
			return getRuleContext(RelOpContext.class,0);
		}
		public RelOpBoolContext(BContext ctx) { copyFrom(ctx); }
	}
	public static class OrBoolContext extends BContext {
		public List<BContext> b() {
			return getRuleContexts(BContext.class);
		}
		public BContext b(int i) {
			return getRuleContext(BContext.class,i);
		}
		public TerminalNode OR() { return getToken(SpjParser.OR, 0); }
		public OrBoolContext(BContext ctx) { copyFrom(ctx); }
	}
	public static class AndBoolContext extends BContext {
		public List<BContext> b() {
			return getRuleContexts(BContext.class);
		}
		public BContext b(int i) {
			return getRuleContext(BContext.class,i);
		}
		public TerminalNode AND() { return getToken(SpjParser.AND, 0); }
		public AndBoolContext(BContext ctx) { copyFrom(ctx); }
	}

	public final BContext b() throws RecognitionException {
		return b(0);
	}

	private BContext b(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		BContext _localctx = new BContext(_ctx, _parentState);
		BContext _prevctx = _localctx;
		int _startState = 16;
		enterRecursionRule(_localctx, 16, RULE_b, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(100);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				{
				_localctx = new TrueFalseBoolContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(86);
				bool();
				}
				break;
			case 2:
				{
				_localctx = new RelOpBoolContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(87);
				e(0);
				setState(88);
				relOp();
				setState(89);
				e(0);
				}
				break;
			case 3:
				{
				_localctx = new NegBoolContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(91);
				match(NEG);
				setState(92);
				match(LPar);
				setState(93);
				b(0);
				setState(94);
				match(RPar);
				}
				break;
			case 4:
				{
				_localctx = new ParBoolContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(96);
				match(LPar);
				setState(97);
				b(0);
				setState(98);
				match(RPar);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(110);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(108);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
					case 1:
						{
						_localctx = new AndBoolContext(new BContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_b);
						setState(102);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(103);
						match(AND);
						setState(104);
						b(4);
						}
						break;
					case 2:
						{
						_localctx = new OrBoolContext(new BContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_b);
						setState(105);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(106);
						match(OR);
						setState(107);
						b(3);
						}
						break;
					}
					} 
				}
				setState(112);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class EContext extends ParserRuleContext {
		public EContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_e; }
	 
		public EContext() { }
		public void copyFrom(EContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class MathOpExprContext extends EContext {
		public List<EContext> e() {
			return getRuleContexts(EContext.class);
		}
		public EContext e(int i) {
			return getRuleContext(EContext.class,i);
		}
		public MathOpContext mathOp() {
			return getRuleContext(MathOpContext.class,0);
		}
		public MathOpExprContext(EContext ctx) { copyFrom(ctx); }
	}
	public static class NumExprContext extends EContext {
		public TerminalNode Num() { return getToken(SpjParser.Num, 0); }
		public NumExprContext(EContext ctx) { copyFrom(ctx); }
	}
	public static class ParExprContext extends EContext {
		public TerminalNode LPar() { return getToken(SpjParser.LPar, 0); }
		public EContext e() {
			return getRuleContext(EContext.class,0);
		}
		public TerminalNode RPar() { return getToken(SpjParser.RPar, 0); }
		public ParExprContext(EContext ctx) { copyFrom(ctx); }
	}
	public static class VarExprContext extends EContext {
		public TerminalNode Var() { return getToken(SpjParser.Var, 0); }
		public VarExprContext(EContext ctx) { copyFrom(ctx); }
	}
	public static class MathOpPriorExprContext extends EContext {
		public List<EContext> e() {
			return getRuleContexts(EContext.class);
		}
		public EContext e(int i) {
			return getRuleContext(EContext.class,i);
		}
		public MathOpPriorityContext mathOpPriority() {
			return getRuleContext(MathOpPriorityContext.class,0);
		}
		public MathOpPriorExprContext(EContext ctx) { copyFrom(ctx); }
	}

	public final EContext e() throws RecognitionException {
		return e(0);
	}

	private EContext e(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		EContext _localctx = new EContext(_ctx, _parentState);
		EContext _prevctx = _localctx;
		int _startState = 18;
		enterRecursionRule(_localctx, 18, RULE_e, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Num:
				{
				_localctx = new NumExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(114);
				match(Num);
				}
				break;
			case Var:
				{
				_localctx = new VarExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(115);
				match(Var);
				}
				break;
			case LPar:
				{
				_localctx = new ParExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(116);
				match(LPar);
				setState(117);
				e(0);
				setState(118);
				match(RPar);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(132);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(130);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
					case 1:
						{
						_localctx = new MathOpPriorExprContext(new EContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_e);
						setState(122);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(123);
						mathOpPriority();
						setState(124);
						e(3);
						}
						break;
					case 2:
						{
						_localctx = new MathOpExprContext(new EContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_e);
						setState(126);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(127);
						mathOp();
						setState(128);
						e(2);
						}
						break;
					}
					} 
				}
				setState(134);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class RelOpContext extends ParserRuleContext {
		public TerminalNode EQ() { return getToken(SpjParser.EQ, 0); }
		public TerminalNode NEQ() { return getToken(SpjParser.NEQ, 0); }
		public TerminalNode GT() { return getToken(SpjParser.GT, 0); }
		public TerminalNode GE() { return getToken(SpjParser.GE, 0); }
		public TerminalNode LT() { return getToken(SpjParser.LT, 0); }
		public TerminalNode LE() { return getToken(SpjParser.LE, 0); }
		public RelOpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relOp; }
	}

	public final RelOpContext relOp() throws RecognitionException {
		RelOpContext _localctx = new RelOpContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_relOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << GT) | (1L << GE) | (1L << LT) | (1L << LE) | (1L << NEQ) | (1L << EQ))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MathOpPriorityContext extends ParserRuleContext {
		public TerminalNode MUL() { return getToken(SpjParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(SpjParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(SpjParser.MOD, 0); }
		public MathOpPriorityContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mathOpPriority; }
	}

	public final MathOpPriorityContext mathOpPriority() throws RecognitionException {
		MathOpPriorityContext _localctx = new MathOpPriorityContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_mathOpPriority);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(137);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MOD) | (1L << DIV) | (1L << MUL))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MathOpContext extends ParserRuleContext {
		public TerminalNode SUB() { return getToken(SpjParser.SUB, 0); }
		public TerminalNode ADD() { return getToken(SpjParser.ADD, 0); }
		public MathOpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mathOp; }
	}

	public final MathOpContext mathOp() throws RecognitionException {
		MathOpContext _localctx = new MathOpContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_mathOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(139);
			_la = _input.LA(1);
			if ( !(_la==SUB || _la==ADD) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BoolContext extends ParserRuleContext {
		public BoolContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bool; }
	}

	public final BoolContext bool() throws RecognitionException {
		BoolContext _localctx = new BoolContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_bool);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(141);
			_la = _input.LA(1);
			if ( !(_la==T__0 || _la==T__1) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 8:
			return b_sempred((BContext)_localctx, predIndex);
		case 9:
			return e_sempred((EContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean b_sempred(BContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 3);
		case 1:
			return precpred(_ctx, 2);
		}
		return true;
	}
	private boolean e_sempred(EContext _localctx, int predIndex) {
		switch (predIndex) {
		case 2:
			return precpred(_ctx, 2);
		case 3:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3#\u0092\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\3\2\3\2\3\2\3\3\3\3\3\3\5\3%\n"+
		"\3\3\4\3\4\5\4)\n\4\3\5\3\5\3\5\3\5\3\6\3\6\6\6\61\n\6\r\6\16\6\62\3\7"+
		"\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\bR\n\b\3\t\3\t\3\t\3\t\3"+
		"\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\5\ng\n\n\3"+
		"\n\3\n\3\n\3\n\3\n\3\n\7\no\n\n\f\n\16\nr\13\n\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\5\13{\n\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\7\13\u0085"+
		"\n\13\f\13\16\13\u0088\13\13\3\f\3\f\3\r\3\r\3\16\3\16\3\17\3\17\3\17"+
		"\2\4\22\24\20\2\4\6\b\n\f\16\20\22\24\26\30\32\34\2\6\3\2\21\26\3\2\27"+
		"\31\3\2\32\33\3\2\3\4\2\u0095\2\36\3\2\2\2\4$\3\2\2\2\6(\3\2\2\2\b*\3"+
		"\2\2\2\n.\3\2\2\2\f\64\3\2\2\2\16Q\3\2\2\2\20S\3\2\2\2\22f\3\2\2\2\24"+
		"z\3\2\2\2\26\u0089\3\2\2\2\30\u008b\3\2\2\2\32\u008d\3\2\2\2\34\u008f"+
		"\3\2\2\2\36\37\5\4\3\2\37 \7\2\2\3 \3\3\2\2\2!%\5\b\5\2\"%\5\n\6\2#%\5"+
		"\16\b\2$!\3\2\2\2$\"\3\2\2\2$#\3\2\2\2%\5\3\2\2\2&)\5\b\5\2\')\5\16\b"+
		"\2(&\3\2\2\2(\'\3\2\2\2)\7\3\2\2\2*+\7\35\2\2+,\5\n\6\2,-\7\34\2\2-\t"+
		"\3\2\2\2.\60\5\f\7\2/\61\5\f\7\2\60/\3\2\2\2\61\62\3\2\2\2\62\60\3\2\2"+
		"\2\62\63\3\2\2\2\63\13\3\2\2\2\64\65\5\16\b\2\65\66\7 \2\2\66\r\3\2\2"+
		"\2\67R\5\20\t\28R\7\36\2\29:\7\r\2\2:;\5\22\n\2;<\7\f\2\2<=\5\6\4\2=>"+
		"\7\13\2\2>?\5\6\4\2?R\3\2\2\2@A\7\n\2\2AB\5\22\n\2BC\7\t\2\2CD\5\6\4\2"+
		"DR\3\2\2\2EF\7\b\2\2FG\5\20\t\2GH\7\7\2\2HI\7\"\2\2IJ\7\t\2\2JK\5\6\4"+
		"\2KR\3\2\2\2LM\7\6\2\2MN\5\6\4\2NO\7\5\2\2OP\5\22\n\2PR\3\2\2\2Q\67\3"+
		"\2\2\2Q8\3\2\2\2Q9\3\2\2\2Q@\3\2\2\2QE\3\2\2\2QL\3\2\2\2R\17\3\2\2\2S"+
		"T\7!\2\2TU\7\37\2\2UV\5\24\13\2V\21\3\2\2\2WX\b\n\1\2Xg\5\34\17\2YZ\5"+
		"\24\13\2Z[\5\26\f\2[\\\5\24\13\2\\g\3\2\2\2]^\7\16\2\2^_\7\35\2\2_`\5"+
		"\22\n\2`a\7\34\2\2ag\3\2\2\2bc\7\35\2\2cd\5\22\n\2de\7\34\2\2eg\3\2\2"+
		"\2fW\3\2\2\2fY\3\2\2\2f]\3\2\2\2fb\3\2\2\2gp\3\2\2\2hi\f\5\2\2ij\7\17"+
		"\2\2jo\5\22\n\6kl\f\4\2\2lm\7\20\2\2mo\5\22\n\5nh\3\2\2\2nk\3\2\2\2or"+
		"\3\2\2\2pn\3\2\2\2pq\3\2\2\2q\23\3\2\2\2rp\3\2\2\2st\b\13\1\2t{\7\"\2"+
		"\2u{\7!\2\2vw\7\35\2\2wx\5\24\13\2xy\7\34\2\2y{\3\2\2\2zs\3\2\2\2zu\3"+
		"\2\2\2zv\3\2\2\2{\u0086\3\2\2\2|}\f\4\2\2}~\5\30\r\2~\177\5\24\13\5\177"+
		"\u0085\3\2\2\2\u0080\u0081\f\3\2\2\u0081\u0082\5\32\16\2\u0082\u0083\5"+
		"\24\13\4\u0083\u0085\3\2\2\2\u0084|\3\2\2\2\u0084\u0080\3\2\2\2\u0085"+
		"\u0088\3\2\2\2\u0086\u0084\3\2\2\2\u0086\u0087\3\2\2\2\u0087\25\3\2\2"+
		"\2\u0088\u0086\3\2\2\2\u0089\u008a\t\2\2\2\u008a\27\3\2\2\2\u008b\u008c"+
		"\t\3\2\2\u008c\31\3\2\2\2\u008d\u008e\t\4\2\2\u008e\33\3\2\2\2\u008f\u0090"+
		"\t\5\2\2\u0090\35\3\2\2\2\f$(\62Qfnpz\u0084\u0086";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}