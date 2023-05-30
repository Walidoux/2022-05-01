import { readFile } from 'node:fs'
import { extname } from 'node:path'

import type { IToken } from 'chevrotain'
import { EmbeddedActionsParser } from 'chevrotain'

import { pRetroLexer, pRetroSyntax, pRetroTokens } from './lexer'
import type { SupportedFileExts } from './types'
import { EventsList } from './utils'
import { RetroEvent } from './RetroEvent'

// PARSER: Only recognizes the language and not output any data structure (yet).

// Defines the grammar using the parsing DSL
class pRetroParser extends EmbeddedActionsParser {
  constructor() {
    // Defines the parser's vocab
    super(pRetroTokens)

    this.RULE('room', () => {
      this.OPTION(() => this.SUBRULE(this['eventStatement']))
      this.OPTION2(() => this.SUBRULE(this['structStatement']))
    })

    this.RULE('eventStatement', () => {
      const EventToken = this.CONSUME(pRetroSyntax.Event)
      const EventParamTokens: IToken[] = []

      this.OPTION(() => {
        this.CONSUME(pRetroSyntax.LParent)
        this.AT_LEAST_ONE_SEP({
          SEP: pRetroSyntax.Comma,
          DEF: () => EventParamTokens.push(this.CONSUME(pRetroSyntax.Identifier))
        })
        this.CONSUME(pRetroSyntax.RParent)
      })

      this.CONSUME(pRetroSyntax.Colon)

      return this.ACTION(() => {
        const EventBuilder = EventsList.find((event) => event.name === EventToken.image) as (typeof EventsList)[number]

        const EventParams = {}
        EventParamTokens.forEach((param) => {
          if (!EventBuilder.params.includes(param.image))
            throw new Error(`Cannot recognize "${param.image}" parameter inside of "${EventBuilder.name}" event`)
          else return (EventParams[param.image] = null)
        })

        const Event = new RetroEvent({ name: EventBuilder.name, params: EventParams })
        return console.log(Event._events)
      })
    })

    this.RULE('structStatement', () => {
      this.CONSUME(pRetroSyntax.Declare)
      this.CONSUME(pRetroSyntax.Identifier)
      this.OPTION(() => {
        this.CONSUME(pRetroSyntax.Extends)
        this.CONSUME2(pRetroSyntax.Identifier)
      })

      this.CONSUME(pRetroSyntax.LCurly)
      this.SUBRULE(this['keyValuePair'])
      this.CONSUME(pRetroSyntax.RCurly)
    })

    this.RULE('keyValuePair', () => {
      this.CONSUME(pRetroSyntax.Identifier)
      this.CONSUME(pRetroSyntax.Colon)
      this.SUBRULE(this['keyValue'])
    })

    this.RULE('keyValue', () => {
      return this.OR([
        { ALT: () => this.CONSUME(pRetroSyntax.True) },
        { ALT: () => this.CONSUME(pRetroSyntax.False) },
        { ALT: () => this.CONSUME(pRetroSyntax.StringLiteral) },
        { ALT: () => this.CONSUME(pRetroSyntax.NumberLiteral) }
      ])
    })

    // Creates the inner grammar representation and performes static checks on the grammar.
    this.performSelfAnalysis()
  }
}

export const InterpRetro = {
  tokens: pRetroTokens,
  parser: pRetroParser,

  parse: (ctx: string, fileExt: string) => {
    const lexerOutput = pRetroLexer.tokenize(ctx)
    const parser = new pRetroParser()
    let cst: undefined

    // setting a new input will RESET the parser instance's state.
    parser.input = lexerOutput.tokens

    const fileExtName = extname(fileExt) as SupportedFileExts

    // any top level rule may be used as an entry point
    if (fileExtName === '.room') {
      // @ts-expect-error
      cst = parser.room()
    } else if (fileExtName === '.retro') {
      // @ts-expect-error
      cst = parser.retro()
    } else {
      throw new Error("Can't recognize file extension")
    }

    return {
      cst,
      lexErrors: lexerOutput.errors,
      parseErrors: parser.errors
    }
  }
}

const filePath = './language/input.room'
readFile(filePath, 'utf8', (_, data) => {
  console.log(InterpRetro.parse(data, filePath))
})
