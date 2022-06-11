import { StoragePutConfig } from "@aws-amplify/storage";
import { Storage } from "aws-amplify";

export class StorageService {
  async putFile(nameFile: string, objFile: object, config?: any) {
    try {
      return await Storage.put(nameFile, objFile, config);
    } catch (error) {
      console.log(error);
    }
  }

  async getFile(nameFile: string, config?: any) {
    try {
      return await Storage.get(nameFile, config);
    } catch (error) {
      console.log(error);
    }
  }

  async removeFile(nameFile: string, config?: any): Promise<any> {
    try {
      return await Storage.get(nameFile, config);
    } catch (error) {
      console.log(error);
    }
  }
}

export const storageService = new StorageService();
