import { storageService } from "@/services/storage-service";

export class TestStorageViewmodel {
  value;
  async readFile(file) {
    console.log(file);
    this.value = file;
  }

  async putFile() {
    try {
      const date = new Date();
      storageService
        .putFile("avatars/" + this.value.name, this.value)
        .then((result) => {
          console.log(result);
        });
    } catch (error) {
      console.log(error);
    }
  }
}
