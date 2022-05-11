import {
  PersistentModel,
  PersistentModelConstructor,
  ProducerModelPredicate,
  ProducerPaginationInput,
  SubscriptionMessage,
} from "@aws-amplify/datastore";
import { DataStore } from "aws-amplify";
import Observable from "zen-observable-ts";

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
      await DataStore.save(
        model.copyOf(original, (object: any) => {
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

  async delete(model: any, data: any) {
    const original = await DataStore.query(model, data.id);
    return await DataStore.delete(original!);
  }

  async get(model: any) {
    try {
      return await DataStore.query(model);
    } catch (error) {
      console.log(error);
    }
  }

  obserQuery<T extends PersistentModel>(
    modelConstructor: PersistentModelConstructor<T>,
    criteria?: ProducerModelPredicate<T>,
    pagination?: ProducerPaginationInput<T>
  ): Observable<SubscriptionMessage<T>> | undefined {
    try {
      return DataStore.observeQuery(modelConstructor, criteria, pagination);
    } catch (error) {
      //
    }
  }
}
export const dataStoreService: any = new DataStoreService();
