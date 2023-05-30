# Examples

```cs

// entity: furni|pet|player|bot
// can be both: [all players/player]

teleport {entity} to {entity}
move {mobi(s)} to {x}, {y}, {z} // could be entity's position
make {entity} sit/lay
broadcast "my message"
whisper "my message" to {entity}
show new Popup(MyPopup) to {player}
spawn new WebView(MyWebView) at {x}, {y}, {z}
push { key: value } to MyWebView
send "my message" by {entity}
give $ID_ITEM to {entity} by {entity}
effect {player} with $ID_ENABLE
wait 3 seconds
```
