# Creating a script language for Habbo Retro development

We'd be able to interact with any room/entity/objects/badges/GUIS.
The UI cannot be changed through the script language.
We're going to get rid of wireds and replace all of them with a retro-GUI,
which can be either opened by the owner's room, the staff, or by simply giving permissions

The language will handle both the hotel code `myscript.retro` and room code `myscript.room` but separately

## Features

- [ ] Single-line and block comments
- [ ] `Lexer.SPIKKED` -> `\r\n\f` Newline characters -> line feed, carriage return, and form feed, respectively
- [ ] BinaryOperators
- [ ] [IntelliSense](https://code.visualstudio.com/docs/editor/intellisense), hovers and validators using VSCode extenders

## VSCode extensions Yo Generator Guide

- `package.json` - this is the manifest file in which you declare your language support and define the location of the grammar file that has been copied into your extension.
- `syntaxes/retro.tmLanguage.json` - this is the Text mate grammar file that is used for tokenization.
- `language-configuration.json` - this is the language configuration, defining the tokens that are used for comments and brackets.

### Get up and running straight away

- Make sure the language configuration settings in `language-configuration.json` are accurate.
- Press `F5` to open a new window with your extension loaded.
- Create a new file with a file name suffix matching your language.
- Verify that syntax highlighting works and that the language configuration settings are working.

### Using the extension

- To start using your extension with Visual Studio Code copy it into the `<user home>/.vscode/extensions` folder and restart Code.
- To share your extension with the world, read on <https://code.visualstudio.com/docs> about publishing an extension.

## [How the interpreter works](https://walid-projects.notion.site/PL-Retro-Development-32f26246266047a5b8c174388f69f688)

## Resources

- [I don't really know at this point](https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json)
- <https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/themes/OneDark-Pro-darker.json>
- <https://github.com/vuejs/language-tools/blob/master/packages/vscode-vue/syntaxes/vue.tmLanguage.json>
- [VSCode - Syntax Highlight Guide](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)
- [Chevrontain playground](https://chevrotain.io/playground/)
- [Grammars' Lexers examples](https://github.com/Chevrotain/chevrotain/tree/master/examples/grammars)
- [Lexer - Keywords vs Identifiers](https://github.com/chevrotain/chevrotain/blob/master/examples/lexer/keywords_vs_identifiers/keywords_vs_identifiers.js)
