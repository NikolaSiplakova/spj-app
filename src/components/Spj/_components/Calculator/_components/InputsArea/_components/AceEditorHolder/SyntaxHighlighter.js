import "brace/mode/text"

export class CustomHighlightRules extends window.ace.acequire(
  "ace/mode/text_highlight_rules"
).TextHighlightRules {
  constructor() {
    super()

    var keywordMapper = this.createKeywordMapper(
      {
        "variable.other": "true false",
        "keyword.control": "if then else repeat until for to do while",
        "keyword.operator": "mod div",
        "string.doouble": "skip",
      },
      "text",
      true,
      " "
    )

    this.$rules = {
      start: [
        {
          token: "support.class",
          regex: "!=|<=|>=|=|<|>|∨|∧|¬|\\|",
        },
        {
          token: "paren",
          regex: ":=",
        },
        {
          token: "keyword.operator",
          regex: "\\*|\\-|\\+|\\|",
        },
        { token: "constant.numeric", regex: "[0-9]+([.][0-9]+)?\\b" },
        { token: keywordMapper, regex: "[a-zA-Z]+" },
      ],
    }
  }
}

export default class SyntaxHighlighter extends window.ace.acequire(
  "ace/mode/text"
).Mode {
  constructor() {
    super()
    this.HighlightRules = CustomHighlightRules
  }
}
