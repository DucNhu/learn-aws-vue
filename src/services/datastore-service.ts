import { DataStore } from "aws-amplify";

export class DataStoreService {
  get(model: any) {
    try {
      return DataStore.query(model);
    } catch (error) {
      console.log(error);
    }
  }
}
export const dataStoreService = new DataStoreService();
