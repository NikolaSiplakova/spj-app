export const inputTexts = [
  /********************  IF  ********************/
  // x->0   y->12

  //0 - assign - 12, 0, s3
  "x := x + y; y := y - x; y := y * x;",

  //1 - assign - 12, 0, s3
  "x := x + y; y := x - y; x := x - y;",

  //2 - assign - 12, 12, s1
  "x:=y;",

  /********************  IF  ********************/
  // x->0   y->12

  //3	- sequence in else - 24, 0, s2
  "if x>y then (x:=y; y:=17;) else (x:=y+y; y:=17-17;);",

  //4	- sequence in then - 12, 24, s2
  "if x<y then (x:=y; y:=y+x;) else (x:=y+y; y:=y-x;);",

  //5	- sequence with one statement - 24, 12, s1
  "if x>y then (x:=y;) else (x:=y+y;);",

  //6 - assignment in else - 24, 12, s1
  "if x>y then y:=y+x; else x:=y+y;;",

  //7 - assignemnt in then - 0, 12, s1
  "if x<y then y:=y+x; else x:=y+y;;",

  //8	- skip in else - 0, 12, s0
  "if x>y then x:=y+y; else skip;;",

  //9	- skip in then - 0, 12, s0
  "if x<y then skip; else x:=y+y;;",

  //10 - if in else - 0, 0, s1
  "if x>y then x:=y-x; else if x>y then x:=y; else y:=x;;;",

  //11 - if in then - 0, 0, s1
  "if x<y then if x>y then x:=y; else y:=x;; else x:=y-x;;",

  //12	- if; if; - 24, 12, s2
  "if x<y then x:=y; else x:=y+y;; if x>y then y:=17; else x:=y+x;;",

  //13	x->10 y->10 s1
  "if (x<y) then x:=y-x; else if x>y then x:=y; else y:=x;;;",

  /********************  WHILE  ********************/

  //14 - do assign - 12, 12, s1
  "while x<2 do x:=x+y;;",

  //15 - do assign in parentheses - 12, 12, s1
  "while x<2 do (x:=x+y;);",

  //16 - do 2 assigns in parentheses - 12, 21, s2
  "while x<2 do (x:=x+y; y:=x+9;);",

  //17 - do assign + if - 15, 12, s2
  "while x<2 do (x:=x+y; if y<x then x:=x+2; else x:=x+3;;);",

  //18 - immediate skip - 0, 12, s0
  "while x>2 do (x:=x+y; if y<x then x:=x+2; else x:=x+3;;);",

  //19	- AND
  "if x<y∧x<5 then (x:=y;) else (x:=y+y;);",

  //20	- OR
  "if x>y∨x>5 then (x:=y;) else (x:=y+y;);",

  //21	- NEG
  "if ¬(x<=y-12) then (x:=y;) else (x:=y+y;);",

  /********************  SPJ  ********************/

  //22 x=128 y=48 -> 16, 16, s4
  "while ¬(x=y) do if y<=x then x:=x-y; else y:=y-x;;;",

  //23 x=4 y=0 -> 1, 24, s7
  "y:=1; while ¬(x=1) do (y:=y*x; x:=x-1;);",

  //24 x=0 y=0 a=3 b=3 -> 9, 9, 6, 3, s8
  "x:=a+b; y:=a*b; while ¬(y<=a+b) do (a:=a+1; x:=a+b;);",

  //25 x=7 y=2 a=0 -> 1, 2, 64, s13
  "a:=1; while ¬(x=1) do (a:=a*y; x:=x-1;);",

  //26 x=5 y=10 a=0 b=0 -> 1, 2, 64, s13
  "if y<=x then if a<=x then b:=x; else b:=a; else if a<=y then b:=y else b:=a; ",

  /********************  FOR  ********************/

  //27 x=1 y=3 a=9 -> 3, 7, 4, s5
  "for x:=1; to 3 do (y:=y+2; a:=y-3;);",

  //28 x=1 y=3
  "y:=2; while x>y do (x:=x-1; y:=2;); x:=18;",

  //29 x=4 y=2
  "if x>=y then while x>2 do x:=x-1;; else y:=45;;",

  /******************** REPEAT ********************/
  "repeat x:=x+2; until x>8",
]
