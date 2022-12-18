import axios from "axios";
import { appConfig } from "../../../config";

interface InitPlateauOpt {
  posX: number;
  posY: number;
}

interface InitPlateauResponse {
  initializedPlateau: {
    id: string;
    xCoordinate: number;
    yCoordinate: number;
  };
  error?: {
    message: string;
  };
}

export function initPlateau(data: InitPlateauOpt) {
  return axios.post<InitPlateauResponse>(
    `${appConfig.api.url}/plateau/initialize`,
    data
  );
}
