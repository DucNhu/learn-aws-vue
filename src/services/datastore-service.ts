import {
  ObserveQueryOptions,
  PersistentModel,
  PersistentModelConstructor,
  ProducerModelPredicate,
} from "@aws-amplify/datastore";

import { API, DataStore, graphqlOperation } from "aws-amplify";

export class DataStoreService {
  async create(data: any) {
    try {
      await DataStore.save(data);
    } catch (error) {
      console.log(error);
    }
  }

  async edit<T extends PersistentModel>(
    modelConstructor: PersistentModelConstructor<T>,
    data: any
  ) {
    try {
      const original = await DataStore.query(modelConstructor, data.id);
      await DataStore.save(
        modelConstructor.copyOf(original!, (object: any) => {
          for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
              object[key] = data[key];
            }
          }
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  async delete<T extends PersistentModel>(
    modelConstructor: PersistentModelConstructor<T>,
    data: any
  ) {
    const original = await DataStore.query(modelConstructor, data.id);
    return await DataStore.delete(original!);
  }

  async get<T extends PersistentModel>(
    modelConstructor: PersistentModelConstructor<T>,
    criteria?: ProducerModelPredicate<T>
  ) {
    try {
      return await DataStore.query(modelConstructor, criteria);
    } catch (error) {
      console.log(error);
    }
  }

  getGrapql(query: string, variable?: object) {
    try {
      return API.graphql(graphqlOperation(query, variable));
    } catch (error) {
      console.log(error);
    }
  }

  obserQuery<T extends PersistentModel>(
    modelConstructor: PersistentModelConstructor<T>,
    criteria?: ProducerModelPredicate<T>,
    sort?: ObserveQueryOptions<T>
  ) {
    try {
      return DataStore.observeQuery(modelConstructor, criteria, sort);
    } catch (error) {
      //
    }
  }
}
export const dataStoreService: any = new DataStoreService();
