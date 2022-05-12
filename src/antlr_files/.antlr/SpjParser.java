// Generated from /Users/nikolka/Desktop/dp-app/src/antlr_files/Spj.g4 by ANTLR 4.8
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
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, UNTIL=3, REPEAT=4, TO=5, FOR=6, DO=7, WHILE=8, ELSE=9, 
		THEN=10, IF=11, NEG=12, AND=13, OR=14, GT=15, GE=16, LT=17, LE=18, NEQ=19, 
		EQ=20, MOD=21, DIV=22, MUL=23, SUB=24, ADD=25, RPar=26, LPar=27, Skip=28, 
		Assign=29, Delimit=30, Var=31, Num=32, WS=33;
	public static final int
		RULE_prog = 0, RULE_s = 1, RULE_ifWhileS = 2, RULE_seq = 3, RULE_stat = 4, 
		RULE_assignment = 5, RULE_b = 6, RULE_e = 7, RULE_relOp = 8, RULE_mathOpPriority = 9, 
		RULE_mathOp = 10, RULE_bool = 11;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "s", "ifWhileS", "seq", "stat", "assignment", "b", "e", "relOp", 
			"mathOpPriority", "mathOp", "bool"
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
			setState(24);
			s();
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
		public SeqContext seq() {
			return getRuleContext(SeqContext.class,0);
		}
		public List<StatContext> stat() {
			return getRuleContexts(StatContext.class);
		}
		public StatContext stat(int i) {
			return getRuleContext(StatContext.class,i);
		}
		public SContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_s; }
	}

	public final SContext s() throws RecognitionException {
		SContext _localctx = new SContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_s);
		int _la;
		try {
			setState(32);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LPar:
				enterOuterAlt(_localctx, 1);
				{
				setState(26);
				seq();
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
				setState(28); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(27);
					stat();
					}
					}
					setState(30); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << REPEAT) | (1L << FOR) | (1L << WHILE) | (1L << IF) | (1L << Skip) | (1L << Var))) != 0) );
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

	public static class IfWhileSContext extends ParserRuleContext {
		public SeqContext seq() {
			return getRuleContext(SeqContext.class,0);
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
			setState(36);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LPar:
				enterOuterAlt(_localctx, 1);
				{
				setState(34);
				seq();
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
				setState(35);
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

	public static class SeqContext extends ParserRuleContext {
		public TerminalNode LPar() { return getToken(SpjParser.LPar, 0); }
		public TerminalNode RPar() { return getToken(SpjParser.RPar, 0); }
		public List<StatContext> stat() {
			return getRuleContexts(StatContext.class);
		}
		public StatContext stat(int i) {
			return getRuleContext(StatContext.class,i);
		}
		public SeqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_seq; }
	}

	public final SeqContext seq() throws RecognitionException {
		SeqContext _localctx = new SeqContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_seq);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			match(LPar);
			setState(40); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(39);
				stat();
				}
				}
				setState(42); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << REPEAT) | (1L << FOR) | (1L << WHILE) | (1L << IF) | (1L << Skip) | (1L << Var))) != 0) );
			setState(44);
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
		public TerminalNode Delimit() { return getToken(SpjParser.Delimit, 0); }
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
		public TerminalNode Delimit() { return getToken(SpjParser.Delimit, 0); }
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
		public TerminalNode Delimit() { return getToken(SpjParser.Delimit, 0); }
		public IfStatContext(StatContext ctx) { copyFrom(ctx); }
	}
	public static class SkipStatContext extends StatContext {
		public TerminalNode Skip() { return getToken(SpjParser.Skip, 0); }
		public TerminalNode Delimit() { return getToken(SpjParser.Delimit, 0); }
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
		public TerminalNode Delimit() { return getToken(SpjParser.Delimit, 0); }
		public WhileStatContext(StatContext ctx) { copyFrom(ctx); }
	}

	public final StatContext stat() throws RecognitionException {
		StatContext _localctx = new StatContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_stat);
		try {
			setState(83);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Var:
				_localctx = new AssignStatContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(46);
				assignment();
				}
				break;
			case Skip:
				_localctx = new SkipStatContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(47);
				match(Skip);
				setState(49);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
				case 1:
					{
					setState(48);
					match(Delimit);
					}
					break;
				}
				}
				break;
			case IF:
				_localctx = new IfStatContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(51);
				match(IF);
				setState(52);
				b(0);
				setState(53);
				match(THEN);
				setState(54);
				ifWhileS();
				setState(55);
				match(ELSE);
				setState(56);
				ifWhileS();
				setState(58);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
				case 1:
					{
					setState(57);
					match(Delimit);
					}
					break;
				}
				}
				break;
			case WHILE:
				_localctx = new WhileStatContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(60);
				match(WHILE);
				setState(61);
				b(0);
				setState(62);
				match(DO);
				setState(63);
				ifWhileS();
				setState(65);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
				case 1:
					{
					setState(64);
					match(Delimit);
					}
					break;
				}
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
				setState(74);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
				case 1:
					{
					setState(73);
					match(Delimit);
					}
					break;
				}
				}
				break;
			case REPEAT:
				_localctx = new RepeatStatContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(76);
				match(REPEAT);
				setState(77);
				ifWhileS();
				setState(78);
				match(UNTIL);
				setState(79);
				b(0);
				setState(81);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
				case 1:
					{
					setState(80);
					match(Delimit);
					}
					break;
				}
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
		public TerminalNode Delimit() { return getToken(SpjParser.Delimit, 0); }
		public AssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment; }
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_assignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			match(Var);
			setState(86);
			match(Assign);
			setState(87);
			e(0);
			setState(89);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				setState(88);
				match(Delimit);
				}
				break;
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
		int _startState = 12;
		enterRecursionRule(_localctx, 12, RULE_b, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(106);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				{
				_localctx = new TrueFalseBoolContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(92);
				bool();
				}
				break;
			case 2:
				{
				_localctx = new RelOpBoolContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(93);
				e(0);
				setState(94);
				relOp();
				setState(95);
				e(0);
				}
				break;
			case 3:
				{
				_localctx = new NegBoolContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(97);
				match(NEG);
				setState(98);
				match(LPar);
				setState(99);
				b(0);
				setState(100);
				match(RPar);
				}
				break;
			case 4:
				{
				_localctx = new ParBoolContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(102);
				match(LPar);
				setState(103);
				b(0);
				setState(104);
				match(RPar);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(116);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(114);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
					case 1:
						{
						_localctx = new AndBoolContext(new BContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_b);
						setState(108);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(109);
						match(AND);
						setState(110);
						b(4);
						}
						break;
					case 2:
						{
						_localctx = new OrBoolContext(new BContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_b);
						setState(111);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(112);
						match(OR);
						setState(113);
						b(3);
						}
						break;
					}
					} 
				}
				setState(118);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
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
		int _startState = 14;
		enterRecursionRule(_localctx, 14, RULE_e, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(126);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Num:
				{
				_localctx = new NumExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(120);
				match(Num);
				}
				break;
			case Var:
				{
				_localctx = new VarExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(121);
				match(Var);
				}
				break;
			case LPar:
				{
				_localctx = new ParExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(122);
				match(LPar);
				setState(123);
				e(0);
				setState(124);
				match(RPar);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(138);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(136);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
					case 1:
						{
						_localctx = new MathOpPriorExprContext(new EContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_e);
						setState(128);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(129);
						mathOpPriority();
						setState(130);
						e(3);
						}
						break;
					case 2:
						{
						_localctx = new MathOpExprContext(new EContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_e);
						setState(132);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(133);
						mathOp();
						setState(134);
						e(2);
						}
						break;
					}
					} 
				}
				setState(140);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
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
		enterRule(_localctx, 16, RULE_relOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(141);
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
		enterRule(_localctx, 18, RULE_mathOpPriority);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(143);
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
		enterRule(_localctx, 20, RULE_mathOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145);
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
		enterRule(_localctx, 22, RULE_bool);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(147);
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
		case 6:
			return b_sempred((BContext)_localctx, predIndex);
		case 7:
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3#\u0098\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\3\2\3\2\3\3\3\3\6\3\37\n\3\r\3\16\3 \5\3#\n\3\3\4"+
		"\3\4\5\4\'\n\4\3\5\3\5\6\5+\n\5\r\5\16\5,\3\5\3\5\3\6\3\6\3\6\5\6\64\n"+
		"\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6=\n\6\3\6\3\6\3\6\3\6\3\6\5\6D\n\6\3"+
		"\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6M\n\6\3\6\3\6\3\6\3\6\3\6\5\6T\n\6\5\6V"+
		"\n\6\3\7\3\7\3\7\3\7\5\7\\\n\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\5\bm\n\b\3\b\3\b\3\b\3\b\3\b\3\b\7\bu\n\b\f\b\16"+
		"\bx\13\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\t\u0081\n\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\7\t\u008b\n\t\f\t\16\t\u008e\13\t\3\n\3\n\3\13\3\13\3\f\3"+
		"\f\3\r\3\r\3\r\2\4\16\20\16\2\4\6\b\n\f\16\20\22\24\26\30\2\6\3\2\21\26"+
		"\3\2\27\31\3\2\32\33\3\2\3\4\2\u00a3\2\32\3\2\2\2\4\"\3\2\2\2\6&\3\2\2"+
		"\2\b(\3\2\2\2\nU\3\2\2\2\fW\3\2\2\2\16l\3\2\2\2\20\u0080\3\2\2\2\22\u008f"+
		"\3\2\2\2\24\u0091\3\2\2\2\26\u0093\3\2\2\2\30\u0095\3\2\2\2\32\33\5\4"+
		"\3\2\33\3\3\2\2\2\34#\5\b\5\2\35\37\5\n\6\2\36\35\3\2\2\2\37 \3\2\2\2"+
		" \36\3\2\2\2 !\3\2\2\2!#\3\2\2\2\"\34\3\2\2\2\"\36\3\2\2\2#\5\3\2\2\2"+
		"$\'\5\b\5\2%\'\5\n\6\2&$\3\2\2\2&%\3\2\2\2\'\7\3\2\2\2(*\7\35\2\2)+\5"+
		"\n\6\2*)\3\2\2\2+,\3\2\2\2,*\3\2\2\2,-\3\2\2\2-.\3\2\2\2./\7\34\2\2/\t"+
		"\3\2\2\2\60V\5\f\7\2\61\63\7\36\2\2\62\64\7 \2\2\63\62\3\2\2\2\63\64\3"+
		"\2\2\2\64V\3\2\2\2\65\66\7\r\2\2\66\67\5\16\b\2\678\7\f\2\289\5\6\4\2"+
		"9:\7\13\2\2:<\5\6\4\2;=\7 \2\2<;\3\2\2\2<=\3\2\2\2=V\3\2\2\2>?\7\n\2\2"+
		"?@\5\16\b\2@A\7\t\2\2AC\5\6\4\2BD\7 \2\2CB\3\2\2\2CD\3\2\2\2DV\3\2\2\2"+
		"EF\7\b\2\2FG\5\f\7\2GH\7\7\2\2HI\7\"\2\2IJ\7\t\2\2JL\5\6\4\2KM\7 \2\2"+
		"LK\3\2\2\2LM\3\2\2\2MV\3\2\2\2NO\7\6\2\2OP\5\6\4\2PQ\7\5\2\2QS\5\16\b"+
		"\2RT\7 \2\2SR\3\2\2\2ST\3\2\2\2TV\3\2\2\2U\60\3\2\2\2U\61\3\2\2\2U\65"+
		"\3\2\2\2U>\3\2\2\2UE\3\2\2\2UN\3\2\2\2V\13\3\2\2\2WX\7!\2\2XY\7\37\2\2"+
		"Y[\5\20\t\2Z\\\7 \2\2[Z\3\2\2\2[\\\3\2\2\2\\\r\3\2\2\2]^\b\b\1\2^m\5\30"+
		"\r\2_`\5\20\t\2`a\5\22\n\2ab\5\20\t\2bm\3\2\2\2cd\7\16\2\2de\7\35\2\2"+
		"ef\5\16\b\2fg\7\34\2\2gm\3\2\2\2hi\7\35\2\2ij\5\16\b\2jk\7\34\2\2km\3"+
		"\2\2\2l]\3\2\2\2l_\3\2\2\2lc\3\2\2\2lh\3\2\2\2mv\3\2\2\2no\f\5\2\2op\7"+
		"\17\2\2pu\5\16\b\6qr\f\4\2\2rs\7\20\2\2su\5\16\b\5tn\3\2\2\2tq\3\2\2\2"+
		"ux\3\2\2\2vt\3\2\2\2vw\3\2\2\2w\17\3\2\2\2xv\3\2\2\2yz\b\t\1\2z\u0081"+
		"\7\"\2\2{\u0081\7!\2\2|}\7\35\2\2}~\5\20\t\2~\177\7\34\2\2\177\u0081\3"+
		"\2\2\2\u0080y\3\2\2\2\u0080{\3\2\2\2\u0080|\3\2\2\2\u0081\u008c\3\2\2"+
		"\2\u0082\u0083\f\4\2\2\u0083\u0084\5\24\13\2\u0084\u0085\5\20\t\5\u0085"+
		"\u008b\3\2\2\2\u0086\u0087\f\3\2\2\u0087\u0088\5\26\f\2\u0088\u0089\5"+
		"\20\t\4\u0089\u008b\3\2\2\2\u008a\u0082\3\2\2\2\u008a\u0086\3\2\2\2\u008b"+
		"\u008e\3\2\2\2\u008c\u008a\3\2\2\2\u008c\u008d\3\2\2\2\u008d\21\3\2\2"+
		"\2\u008e\u008c\3\2\2\2\u008f\u0090\t\2\2\2\u0090\23\3\2\2\2\u0091\u0092"+
		"\t\3\2\2\u0092\25\3\2\2\2\u0093\u0094\t\4\2\2\u0094\27\3\2\2\2\u0095\u0096"+
		"\t\5\2\2\u0096\31\3\2\2\2\23 \"&,\63<CLSU[ltv\u0080\u008a\u008c";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}