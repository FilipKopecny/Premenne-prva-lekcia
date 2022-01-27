input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        serial.writeLine("" + (postupnost))
        postupnost += 2
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        if (0 == text.compare("aaa")) {
            serial.writeLine("bbb")
        } else {
            serial.writeLine(text)
        }
        text = "" + text + "a"
    }
})
let text = ""
let postupnost = 0
postupnost = 1
text = "a"
