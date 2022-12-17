import axios from "axios";
import { appConfig } from "../../../config";

interface InitRoverOpt {
  posX: number;
  posY: number;
  head: "N" | "S" | "E" | "W";
  movements: string;
  plateauId: string;
}

interface InitRoverResponse {
  currentPosition: {
    head: "N" | "S" | "E" | "W";
    id: string;
    xCoordinate: number;
    yCoordinate: number;
  };
}

export function initAndMoveRover(data: InitRoverOpt) {
  return axios.post<InitRoverResponse>(`${appConfig.api.url}/rover/`, data);
}
