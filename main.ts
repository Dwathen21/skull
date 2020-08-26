basic.showIcon(IconNames.Skull)
basic.showAnimation(`
. . . . .
. . . . .
. . # . .
. . . . .
. . . . .
`)
basic.showNumber(0)
basic.showIcon(IconNames.Happy)
basic.pause(1000)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    basic.showIcon(IconNames.Skull)
})


