import { RoverPosition } from "../../databases/typeorm/entities";
import { RoverPositionController } from "../../databases/typeorm/repositories";
import { RoverHeadingDirections } from "../../types/rover";

export async function mountAndSaveRoverPosition(
    posX: number,
    posY: number,
    head: RoverHeadingDirections,
): Promise<RoverPosition> {
    const position = new RoverPosition();

    position.xCoordinate = posX;
    position.yCoordinate = posY;
    position.head = head;

    return RoverPositionController.save(position);
}
