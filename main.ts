IoTCube.LoRa_Join(
eBool.enable,
eBool.enable,
10,
8
)
OLED.init(128, 64)
basic.showIcon(IconNames.Yes)
loops.everyInterval(5000, function () {
    OLED.writeStringNewLine("Lichtstärke: " + input.lightLevel())
    if (IoTCube.getStatus(eSTATUS_MASK.JOINED)) {
        basic.showIcon(IconNames.SmallHeart)
        IoTCube.addAnalogInput(input.lightLevel(), 1)
        IoTCube.addAnalogInput(input.soundLevel(), 2)
        IoTCube.SendBuffer(IoTCube.getCayenne())
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.No)
    }
})
