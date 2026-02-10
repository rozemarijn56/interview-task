import { WatchEventPlayload } from "../Types/type";

export interface User {
  id: number;
  name: string;
  watched40?: WatchEventPlayload[];
  finished?: WatchEventPlayload[];
}
