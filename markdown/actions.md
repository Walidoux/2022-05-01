# Examples

```cs

// can be both: [all players/player]

teleport {entity} to {entity}
move {mobi(s)} to {x}, {y}, {z} // could be entity's position
make {entity} sit/lay/danse // or any actions
broadcast "my message"
whisper "my message" to {entity}
show new Popup(MyPopup) to {player}
spawn new WebView(MyWebView) at {x}, {y}, {z}
push { key: value } to MyWebView
send "my message" by {entity}
give $ID_ITEM|$CODE_BAGE to {entity} by {entity}
effect {player} with $ID_ENABLE
freeze {entity} for 10 seconds
unfreeze {entity}
kick player due to "my message"
cancel event
wait 3 seconds
stop // for timestamps, acts like a preventDefault() event handler
```

// change mobi state (interaction) like a double click
change $mobi(s) state(s) by 4 times
reset $mobi(s) state(s) to initial(position|direction|interaction)

// change speed of rollers
set rollers speed to 2
