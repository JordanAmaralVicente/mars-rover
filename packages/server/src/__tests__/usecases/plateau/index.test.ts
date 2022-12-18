import createInitPlateau from "../../../usecases/plateau/init-plateau";
import { mockPlateauController } from "../../mocks";

describe("[USECASES] - createInitPlateau", () => {
    it("should create a plateau", async () => {
        const initPlateau = createInitPlateau({
            plateauController: mockPlateauController,
        });

        const fakePosX = 10;
        const fakePosY = 12;

        const plateau = await initPlateau(fakePosX, fakePosY);

        expect(plateau).toBeDefined();
        expect(plateau.xCoordinate).toBe(fakePosX);
        expect(plateau.yCoordinate).toBe(fakePosY);
        expect(plateau.id).toBeDefined();
    });
});
