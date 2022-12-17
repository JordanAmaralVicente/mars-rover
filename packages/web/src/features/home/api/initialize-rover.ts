import axios from "axios";
import { appConfig } from "../../../config";
import { RoverHeadingDirections, RoverPosition } from "../../../types/rover";

interface InitRoverOpt {
  posX: number;
  posY: number;
  head: RoverHeadingDirections;
  movements: string;
  plateauId: string;
}

interface InitRoverResponse {
  currentPosition: RoverPosition;
  error?: {
    message: string;
  };
}

export function initAndMoveRover(data: InitRoverOpt) {
  return axios.post<InitRoverResponse>(`${appConfig.api.url}/rover/`, data);
}
