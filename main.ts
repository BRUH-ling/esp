radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == randint(0, 10)) {
        radio.sendValue("YES", 1)
    } else {
        radio.sendValue("NO", 0)
    }
})
input.onButtonPressed(Button.A, function () {
    Fard += 1
    basic.showNumber(Fard)
})
input.onButtonPressed(Button.B, function () {
    Fard += -1
    basic.showNumber(Fard)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(Fard)
})
radio.onReceivedValue(function (name, value) {
    if (value == 1) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.clearScreen()
        basic.showString("YES")
        basic.pause(1000)
        control.reset()
    } else {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        basic.clearScreen()
        basic.showString("NO")
        LIFE += -1
    }
})
let Fard = 0
let LIFE = 4
radio.setGroup(1)
Fard = 0
basic.forever(function () {
    if (LIFE == 0) {
        basic.clearScreen()
        basic.showString("GAME OVER")
        basic.pause(1000)
        control.reset()
    }
})
