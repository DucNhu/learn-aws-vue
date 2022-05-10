import { DataStore } from "aws-amplify";

export class DataStoreService {
  async create(data: any) {
    try {
      await DataStore.save(data);
    } catch (error) {
      console.log(error);
    }
  }

  async edit(model: any, data: any) {
    try {
      const original = await DataStore.query(model, data.id);
      console.log(original);
      await DataStore.save(
        model.copyOf(original, (update: any) => {
          console.log(update);
          update.name = data.name;
          update.Description = data.Description;
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  get(model: any) {
    try {
      return DataStore.query(model);
    } catch (error) {
      console.log(error);
    }
  }

  obserQuery(model: any, predicates?: any, sort?: any) {
    try {
      return DataStore.observeQuery(model, predicates, sort);
    } catch (error) {
      console.log(error);
    }
  }
}
export const dataStoreService: any = new DataStoreService();
