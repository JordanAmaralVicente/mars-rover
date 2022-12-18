import axios from "axios";
import { appConfig } from "../../../config";
import { RoverHeadingDirections, RoverPosition } from "../../../types/rover";

interface InitRoverOpt {
  posX: number;
  posY: number;
  head: RoverHeadingDirections;
  plateauId: string;
}

interface InitRoverResponse {
  id: string;
  startPosition: RoverPosition;
  error?: {
    message: string;
  };
}

export function initRover(data: InitRoverOpt) {
  return axios.put<InitRoverResponse>(`${appConfig.api.url}/rover/init`, data);
}
