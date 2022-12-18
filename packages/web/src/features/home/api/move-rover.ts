import axios from "axios";
import { appConfig } from "../../../config";
import { RoverPosition } from "../../../types/rover";

interface InitRoverOpt {
  movements: string;
  roverId: string;
}

interface InitRoverResponse {
  currentPosition: RoverPosition;
  error?: {
    message: string;
  };
}

export function moveRover(data: InitRoverOpt) {
  return axios.post<InitRoverResponse>(`${appConfig.api.url}/rover/move`, data);
}
