import { Rover } from "../../../databases/typeorm/entities";
import { RoverHeadingDirections } from "../../../types";
import createInitRover from "../../../usecases/rover/init-rover";
import {
    mockPlateauController,
    mockMountAndSaveRover,
    mockMountAndSaveRoverPosition,
    PLATEAU_EXISTENT_ID,
} from "../../mocks";

describe("[USECASES] - Rover", () => {
    describe("creatInitRover()", () => {
        it("should create a rover", async () => {
            const fakePosX = 0;
            const fakePosY = 0;
            const fakeHead = RoverHeadingDirections.NORTH;

            const initRover = createInitRover({
                mountAndSaveRover: mockMountAndSaveRover,
                mountAndSaveRoverPosition: mockMountAndSaveRoverPosition,
                plateauController: mockPlateauController,
            });

            const initializedRover = await initRover(
                PLATEAU_EXISTENT_ID,
                fakePosX,
                fakePosY,
                fakeHead,
            );

            expect(initializedRover?.error).toBeUndefined();

            const parsedRover = initializedRover as Rover;
            const { currentPosition, startPosition } = parsedRover;

            expect(parsedRover.id).toBeDefined();
            expect(startPosition).toStrictEqual(currentPosition);
            expect(parsedRover.plateau.id).toBe(PLATEAU_EXISTENT_ID);
        });

        it("should not create a rover when coordinates are negative", async () => {
            const fakePosX = -1;
            const fakePosY = -1;
            const fakeHead = RoverHeadingDirections.NORTH;

            const initRover = createInitRover({
                mountAndSaveRover: mockMountAndSaveRover,
                mountAndSaveRoverPosition: mockMountAndSaveRoverPosition,
                plateauController: mockPlateauController,
            });

            const initializedRover = await initRover(
                PLATEAU_EXISTENT_ID,
                fakePosX,
                fakePosY,
                fakeHead,
            );

            expect(initializedRover.error).toBeDefined();
            expect(initializedRover.error.message).toBe(
                "x and y should be valid",
            );
        });

        it("should not create a rover when plateau doesn't exist", async () => {
            const fakePosX = 0;
            const fakePosY = 0;
            const fakeHead = RoverHeadingDirections.NORTH;
            const fakeUnexistentPlateu = "foo";

            const initRover = createInitRover({
                mountAndSaveRover: mockMountAndSaveRover,
                mountAndSaveRoverPosition: mockMountAndSaveRoverPosition,
                plateauController: mockPlateauController,
            });

            const initializedRover = await initRover(
                fakeUnexistentPlateu,
                fakePosX,
                fakePosY,
                fakeHead,
            );

            expect(initializedRover.error).toBeDefined();
            expect(initializedRover.error.message).toBe(
                "Plateau doesn't exist!",
            );
        });

        it("should not create a rover has landed out of bound", async () => {
            const fakePosX = 99;
            const fakePosY = 99;
            const fakeHead = RoverHeadingDirections.NORTH;

            const initRover = createInitRover({
                mountAndSaveRover: mockMountAndSaveRover,
                mountAndSaveRoverPosition: mockMountAndSaveRoverPosition,
                plateauController: mockPlateauController,
            });

            const initializedRover = await initRover(
                PLATEAU_EXISTENT_ID,
                fakePosX,
                fakePosY,
                fakeHead,
            );

            expect(initializedRover.error).toBeDefined();
            expect(initializedRover.error.message).toBe(
                "The Rover Landind position is out of bound",
            );
        });
    });
});
