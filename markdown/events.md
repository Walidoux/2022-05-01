# Examples

They're two types of events: Triggeres / Timestamps
Those events will be triggered/emitted when:

```cs

// Triggeres
on first join: // user joins the room for the first time
on room enter/leave: // user joins/leaves the room
on region enter/leave: // user enters/leaves a region
on tile click: // user releases a click on a tile
on tile hold: // user holds his click on a tile
on tile release: // user releases a click on a tile
on vehicle enter: // user (i.e) rides a horse
on change position: // (i.e) when looking at someone or by moving (8 existing positions)
on sit: // user sits down
on lay: // user lays down
on talk: // user sent a message
on move: // user moves around the room
on stalk: // user clicks on an another user
on $mobi(s) click: // user clicks on a mobi
on user stands on $mobi(s):
on user leaves $mobi(s):

// Timestamps
every 2 seconds:
every hour:
every 10 minutes:
```

## Rules

- ✅ an event must exist inside of pre-existing list of events
- ✅ only lower case characters are allowed
- ✅ events have params, they are optional, but have to match their own events, otherwise throw an error of inexisting param(s)
- ✅ only digits/floats are allow for timestamps *(♻️ needs review)*
