﻿/// <reference path='../definitions/references.d.ts' />
var Spirograph;
(function (Spirograph) {
    (function (Shapes) {
        'use strict';

        var RingGearRotater = (function () {
            function RingGearRotater(ringGearOptions) {
                this._teethBuffer = 2;
                this._ringGearOptions = ringGearOptions;
            }
            RingGearRotater.prototype.rotate = function (gearOptions, mouseAngleAsDegrees, holeOptions, toothOffset) {
                var radius = this._ringGearOptions.innerRadius - gearOptions.radius - this._teethBuffer;
                var gearX = radius * Math.cos(Spirograph.Utility.toRadians(mouseAngleAsDegrees)) + Spirograph.getSvgCenterX();
                var gearY = -1 * radius * Math.sin(Spirograph.Utility.toRadians(mouseAngleAsDegrees)) + Spirograph.getSvgCenterY();
                var gearRotation = 360 * (((mouseAngleAsDegrees / 360) * 2 * Math.PI * this._ringGearOptions.innerRadius) / (2 * Math.PI * gearOptions.radius));
                gearRotation -= mouseAngleAsDegrees;

                gearRotation += toothOffset * (-360 / gearOptions.toothCount);

                var penXModifer = holeOptions.positionRadius * Math.cos(Spirograph.Utility.toRadians(holeOptions.angle) + Spirograph.Utility.toRadians(gearRotation));
                var penYModifier = holeOptions.positionRadius * Math.sin(Spirograph.Utility.toRadians(holeOptions.angle) + Spirograph.Utility.toRadians(gearRotation));

                return {
                    x: gearX,
                    y: gearY,
                    angle: gearRotation,
                    penX: gearX + penXModifer,
                    penY: gearY + penYModifier
                };
            };
            return RingGearRotater;
        })();
        Shapes.RingGearRotater = RingGearRotater;
    })(Spirograph.Shapes || (Spirograph.Shapes = {}));
    var Shapes = Spirograph.Shapes;
})(Spirograph || (Spirograph = {}));
//# sourceMappingURL=RingGearRotater.js.map
