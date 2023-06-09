import { Lexer, createToken } from 'chevrotain'

import { EventsList, TimeUnits } from './utils'

// Defining Token Definitions

const Identifier = createToken({ name: 'Identifier', pattern: /[A-Za-z]\w*/ })

const Declare = createToken({ name: 'Declare', pattern: /declare/, longer_alt: Identifier })
const Extends = createToken({ name: 'Extends', pattern: /extends/, longer_alt: Identifier })
const OnEvent = createToken({ name: 'OnEvent', pattern: new RegExp(`(${EventsList.map((event) => event.name).join('|')})`) })
const EveryEvent = createToken({ name: 'EveryEvent', pattern: new RegExp(`(every ([0-9]+(?:\\.[0-9]+)?) (${TimeUnits.join('|')})s?)`) })

const LCurly = createToken({ name: 'LCurly', pattern: /{/ })
const RCurly = createToken({ name: 'RCurly', pattern: /}/ })
const LSquare = createToken({ name: 'LSquare', pattern: /\[/ })
const RSquare = createToken({ name: 'RSquare', pattern: /]/ })
const LParent = createToken({ name: 'LParent', pattern: /\(/ })
const RParent = createToken({ name: 'RParent', pattern: /\)/ })
const Comma = createToken({ name: 'Comma', pattern: /,/ })
const Colon = createToken({ name: 'Colon', pattern: /:/ })

const True = createToken({ name: 'True', pattern: /true/ })
const False = createToken({ name: 'False', pattern: /false/ })
const StringLiteral = createToken({
  name: 'StringLiteral',
  pattern: /"(?:[^"\\]|\\(?:["/\\bfnrtv]|u[\dA-Fa-f]{4}))*"/
})
const NumberLiteral = createToken({ name: 'NumberLiteral', pattern: /-?(0|[1-9]\d*)(\.\d+)?([Ee][+-]?\d+)?/ })

const WhiteSpace = createToken({ name: 'WhiteSpace', pattern: /[\t\n\r ]+/, group: Lexer.SKIPPED })

/* const Comment = createToken({
    name: "Comment",
    pattern: /\/\*[^*]*\*+([^/*][^*]*\*+})*\//,
    group: Lexer.SKIPPED,
    line_breaks: true
}) */

export const pRetroTokens = [
  WhiteSpace,

  NumberLiteral,
  StringLiteral,
  LCurly,
  RCurly,
  LSquare,
  RSquare,
  LParent,
  RParent,
  Comma,
  Colon,
  True,
  False,

  Declare,
  Extends,
  OnEvent,
  EveryEvent,
  Identifier
]

export const pRetroLexer = new Lexer(pRetroTokens)
export const pRetroSyntax = {
  Identifier,
  Declare,
  Extends,
  Comma,
  Colon,
  LCurly,
  RCurly,
  LParent,
  RParent,
  StringLiteral,
  NumberLiteral,
  OnEvent,
  EveryEvent,
  True,
  False
}
