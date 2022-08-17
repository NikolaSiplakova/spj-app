grammar Spj ;

/*
 * Parser Rules
 */
prog	: 	s EOF
		;

s	:	par
	|	seq
	|	stat
	;

/* statement, (statement), (statement, statement)*/
ifWhileS	:	par
			|	stat
			;

par		:	LPar stat RPar
		|	LPar seq RPar
		;

seq		: 	statDelimit (statDelimit)+
		;

statDelimit	:	stat Delimit	
			;

stat	:	assignment							#AssignStat
		|	Skip								#SkipStat
		|	IF b THEN ifWhileS ELSE ifWhileS	#IfStat
		|	WHILE b DO ifWhileS					#WhileStat
		|	FOR assignment TO Num DO ifWhileS	#ForStat
		|	REPEAT ifWhileS UNTIL b				#RepeatStat
		;

assignment	:	Var Assign e
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
