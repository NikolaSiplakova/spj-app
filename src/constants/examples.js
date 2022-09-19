export const EXAMPLES = [
  {
    specialType: "mocnina",
    equation: "a:=1; while ¬(x=1) do (a:=a*y; x:=x-1;);",
    initialValues: [
      { varName: "x", value: 7 },
      { varName: "y", value: 2 },
      { varName: "a", value: 0 },
    ],
  },
  {
    specialType: "hľadanie maxima",
    equation: `if y<=x then 
        if a<=x then max:=x else max:=a 
            else 
        if a<=y then max:=y else max:=a `,
    initialValues: [
      { varName: "x", value: 5 },
      { varName: "y", value: 10 },
      { varName: "a", value: 0 },
      { varName: "max", value: 0 },
    ],
  },
  {
    specialType: "faktoriál",
    equation: "y:=1; while ¬(x=1) do (y:=y*x; x:=x-1;);",
    initialValues: [
      { varName: "y", value: 0 },
      { varName: "x", value: 4 },
    ],
  },
]
