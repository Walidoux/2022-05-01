# Examples

Those events will be triggered/emitted when:

```csharp
on first join: // user joins the room for the first time
on room enter/leave: // user joins/leaves the room
on region enter/leave: // user enters/leaves a region
on tile click: // user releases a click on a tile
on vehicle enter: // user (i.e) rides a horse
on sit:
on lay:
on talk: // user sends a message and the avatar moves his head
on move: // user moves around the room

every 2 seconds:
every hour:
every 10 minutes:
```

## Rules

- They're two types of events: Triggers / Timestamps

- ✅ an event must exist inside of pre-existing list of events
- ✅ only lower case characters are allowed
- ✅ events have params, they are optional, but have to match their own events, otherwise throw an error of inexisting param(s)
- ✅ only digits/floats are allow for timestamps <!-- needs review -->
