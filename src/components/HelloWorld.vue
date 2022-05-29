<template>
  <div class="hello">
    <h1 id="h1">{{ msg }}</h1>
    <v-data-table
      :headers="headers"
      :items="listData"
      class="elevation-1 container my-5"
      disable-pagination
      hide-default-footer
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>UntitledModel</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
                @click="editedID = ''"
              >
                New Item
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">
                  {{ formTitle }}
                </span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row class="justify-center">
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="UntitledModel.name"
                        label="Name"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="UntitledModel.description"
                        label="description"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDialog">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save()"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDialog"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small class="mx-2" @click="deleteItem(item)">
          mdi-delete
        </v-icon>
        <v-icon small @click="getTest(item.id)"> mdi-eye </v-icon>
      </template>
    </v-data-table>

    <v-data-table
      :headers="headerTableDetail"
      :items="getGrapqlData"
      v-if="getGrapqlData.length != 0"
      class="elevation-1 container my-5"
      disable-pagination
      hide-default-footer
    ></v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { dataStoreService } from "@/services/datastore-service";
import { Auth, Predicates } from "aws-amplify";
import { UntitledModel } from "@/aws/models";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  listData: UntitledModel[] = [];
  dialog = false;
  dialogDelete = false;
  editedID = "";

  headers = [
    {
      text: "id",
      align: "start",
      sortable: false,
      value: "id",
    },
    {
      text: "name",
      align: "start",
      sortable: false,
      value: "name",
    },
    {
      text: "description",
      align: "start",
      sortable: false,
      value: "description",
    },
    {
      text: "_version",
      align: "center",
      sortable: false,
      value: "_version",
    },
    { text: "Actions", align: "center", value: "actions", sortable: false },
  ];
  headerTableDetail = [
    {
      text: "id",
      align: "start",
      sortable: false,
      value: "id",
    },
    {
      text: "content",
      align: "start",
      sortable: false,
      value: "content",
    },
    {
      text: "_version",
      align: "center",
      sortable: false,
      value: "_version",
    },
    {
      text: "UntitledModelID",
      align: "center",
      sortable: false,
      value: "UntitledModelID",
    },
  ];
  UntitledModel: any = {};
  getGrapqlData: any = [];
  subscribes: any = [];
  userId;
  mounted() {
    Auth.currentUserInfo().then((result) => {
      this.userId = result.attributes.sub;
    });

    this.getData();
  }
  // getTest(id: string) {
  //   dataStoreService
  //     .getGrapql(UntitledFkModelsQuery, { id: id })
  //     .then((result: any) => {
  //       const untitledFkModels =
  //         result.data.listUntitledModels.items[0].UntitledFkModels;
  //       if (!untitledFkModels.length)
  //         this.getGrapqlData = untitledFkModels.items;
  //       else this.getGrapqlData = [];
  //     });
  // }
  getData() {
    //     dataStoreService
    //       .grapql(
    //         `query MyQuery {
    //   listUntitledModels {
    //     items {
    //       id
    //       _deleted
    //       name
    //       description
    //       _version
    //     }
    //   }
    // }`
    //       )
    //       .then((result: any) => {
    //         this.listData = result.data.listUntitledModels.items;
    //         // const untitledFkModels = result.data.listUntitledModels.items;
    //         // console.log(untitledFkModels);

    //         // if (!untitledFkModels.length) this.getGrapqlData = untitledFkModels;
    //         // else this.getGrapqlData = [];
    //       });
    dataStoreService
      .obserQuery(UntitledModel, Predicates.ALL, {
        sort: (s: any) => s.createdAt("DESCENDING"),
      })
      .subscribe((result) => {
        console.log(result);

        this.listData = result.items;
      });
  }
  save() {
    if (this.editedID == "") {
      const data = new UntitledModel({
        name: this.UntitledModel.name,
        description: this.UntitledModel.description,
      });
      dataStoreService.create(data);
      this.closeDialog();
    } else {
      dataStoreService.edit(UntitledModel, this.UntitledModel);
      this.closeDialog();
    }
  }

  Table;
  get formTitle() {
    return this.editedID == "" ? "Create new" : "Edit '" + this.editedID + "'";
  }

  editItem(item: UntitledModel) {
    console.log("edit");
    this.editedID = item.name;
    this.UntitledModel = Object.assign({}, item);
    this.dialog = true;
  }

  deleteItem(item: UntitledModel) {
    this.editedID = item.name;
    this.UntitledModel = Object.assign({}, item);
    this.dialogDelete = true;
  }

  deleteItemConfirm() {
    dataStoreService.delete(UntitledModel, this.UntitledModel);
    this.closeDialog();
  }

  closeDialog() {
    this.dialog = false;
    this.dialogDelete = false;
  }

  beforeDestroy() {
    if (!this.subscribes.length)
      this.subscribes.forEach((e: any) => {
        e.unsubscribe();
        console.log("1");
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
