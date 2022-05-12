grammar Spj ;

/*
 * Parser Rules
 */
prog	: 	s
		;

s	:	seq
	|	stat+
	;

/* statement, (statement), (statement, statement)*/
ifWhileS	:	seq
			|	stat
			;

seq		:	LPar stat+ RPar
		;

stat	:	assignment									#AssignStat
		|	Skip Delimit?								#SkipStat
		|	IF b THEN ifWhileS ELSE ifWhileS Delimit?	#IfStat
		|	WHILE b DO ifWhileS Delimit?				#WhileStat
		|	FOR assignment TO Num DO ifWhileS Delimit?	#ForStat
		|	REPEAT ifWhileS UNTIL b	Delimit?			#RepeatStat
		;

assignment	:	Var Assign e Delimit?
			;

b	:	bool				#TrueFalseBool
	|	e relOp e			#RelOpBool	
	|	NEG LPar b RPar		#NegBool
	|	b AND b				#AndBool
	|	b OR b				#OrBool
	|	LPar b RPar			#ParBool
	;

e	:	Num						#NumExpr
	|	Var						#VarExpr
	|	LPar e RPar				#ParExpr
	|	e mathOpPriority e		#MathOpPriorExpr
	|	e mathOp e				#MathOpExpr
    ;

relOp	:	EQ
		|	NEQ
		|	GT
		|	GE
		|	LT
		| 	LE
		;	

mathOpPriority	:	MUL
				|	DIV
				|	MOD
				;

mathOp	:	SUB
		|	ADD
		;
  
bool	:	'true'
		|	'false'
		;
    
/*
 * Lexer Rules
 */

UNTIL	:	'until'	;
REPEAT	: 	'repeat';

TO	: 	'to'  ;
FOR	:	'for' ;

DO	:	'do' ;
WHILE	:	'while' ;

ELSE 	: 	'else' ;
THEN	:	'then' ;
IF	:	'if' ;

NEG	: 	'¬' ;
AND	: 	'∧' ;
OR	: 	'∨' ;

GT	:	'>' ;
GE	:	'>=' ;
LT	:	'<' ;
LE	:	'<=' ;
NEQ	:	'!=' ;
EQ	: 	'=' ;

MOD	:	'mod';
DIV	:	'div' ;
MUL	: 	'*' ;
SUB	:	'-' ;
ADD	: 	'+' ; 

RPar	: 	')';
LPar	: 	'(';
Skip	:	'skip' ;
Assign	: 	':=' ;
Delimit	:	';' ;
Var 	: 	[a-zA-Z]+ ;
Num 	: 	[0-9]+([.][0-9]+)? ;
WS	: 	[ \t\r\n]+ -> skip ;
