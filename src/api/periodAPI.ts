import axios from "axios";
import { PeriodData } from "../PeriodData";

export const getPeriodData = async (): Promise<PeriodData[]> => {
  const response = await axios.get<PeriodData[]>("http://localhost:5173/");
  return response.data;
};
