serial.redirectToUSB()
basic.forever(function () {
    serial.writeValue("x", sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.MicroSeconds
    ))
    if (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.MicroSeconds
    ) < 900) {
        if (sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.MicroSeconds
        ) < 300) {
            robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Orange))
        } else if (sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.MicroSeconds
        ) >= 300) {
            robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Blue))
        } else if (sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.MicroSeconds
        ) < 600) {
            robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Blue))
        } else if (sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.MicroSeconds
        ) >= 600) {
            robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Black))
        }
    } else {
        robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
