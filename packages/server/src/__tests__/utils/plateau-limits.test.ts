import { Plateau, RoverPosition } from "../../databases/typeorm/entities";
import { isRoverOutOfBound } from "../../utils";

describe("isRoverOutOfBound()", () => {
    it("should return that rover is out of bound when Y coordinate is negative", () => {
        const fakePosition = new RoverPosition();
        fakePosition.yCoordinate = -1;

        const direction = "yCoordinate";

        const fakePlateau = new Plateau();
        fakePlateau.yCoordinate = 10;
        fakePlateau.xCoordinate = 10;

        const result = isRoverOutOfBound(fakePosition, direction, fakePlateau);

        expect(result).toBeTruthy();
    });

    it("should return that rover is out of bound when X coordinate is negative", () => {
        const fakePosition = new RoverPosition();
        fakePosition.xCoordinate = -1;

        const direction = "xCoordinate";

        const fakePlateau = new Plateau();
        fakePlateau.yCoordinate = 10;
        fakePlateau.xCoordinate = 10;

        const result = isRoverOutOfBound(fakePosition, direction, fakePlateau);

        expect(result).toBeTruthy();
    });

    it("should return that rover is in the limits of the plateau", () => {
        const fakePosition = new RoverPosition();
        fakePosition.yCoordinate = 1;
        fakePosition.xCoordinate = 1;

        const fakePlateau = new Plateau();
        fakePlateau.yCoordinate = 10;
        fakePlateau.xCoordinate = 10;

        const resultY = isRoverOutOfBound(
            fakePosition,
            "yCoordinate",
            fakePlateau,
        );
        const resultX = isRoverOutOfBound(
            fakePosition,
            "xCoordinate",
            fakePlateau,
        );

        expect(resultY).toBeFalsy();
        expect(resultX).toBeFalsy();
    });

    it("should return that rover is out of bound when rover position is greater than the plateau limits", () => {
        const fakePosition = new RoverPosition();
        fakePosition.yCoordinate = 10;
        fakePosition.xCoordinate = 10;

        const fakePlateau = new Plateau();
        fakePlateau.yCoordinate = 5;
        fakePlateau.xCoordinate = 5;

        const resultY = isRoverOutOfBound(
            fakePosition,
            "yCoordinate",
            fakePlateau,
        );
        const resultX = isRoverOutOfBound(
            fakePosition,
            "xCoordinate",
            fakePlateau,
        );

        expect(resultY).toBeTruthy();
        expect(resultX).toBeTruthy();
    });
});
