// imports
[expression]: import + `Identifier-1, ..Identifier-n` | `*` + from + `import_name`
[rules]: - both import_name and identifier names must exist
         - import_name cannot be called more than one at a time (avoid multiple imports)

// identifiers

// properties/keys
[expression]: &

// Structs:
[description]: act like a data-sets, own properties, and can be extended from other built-in structs
[expression]: declare + Identifier + ?(extends + Identifier) { ... }
[rules]: - Duplicate structs/properties are not allowed
         - Cannot be empty, at least one property key/value must be declared
         - An extended struct cannot have the same identifier name as the one declared for the struct name

declare MyPopup extends Popup {
    text: "Hi this is a pop-up struct"
    type: Popup.ALERT
}

// Events
[description]: Are called when they're triggered depending on each context

on room join (player): // can be both: [all players/player]
    whisper "Howdy !" to &player
    send new Popup(MyPopup) to &player
