<template>
  <div class="hello">
    <h1 id="h1">{{ msg }}</h1>

    <v-data-table
      :headers="headers"
      :items="listData"
      sort-by="calories"
      class="elevation-1 container"
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
                        v-model="untitledModel.name"
                        label="Name"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="untitledModel.Description"
                        label="Description"
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
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from "vue-property-decorator";
import { HelloViewModel } from "./HelloWorld-viewmodel";

import { UntitledModel } from "@/aws/models";
import { dataStoreService } from "@/services/datastore-service";
import { Predicates } from "aws-amplify";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Provide() vm = new HelloViewModel();
  listData: UntitledModel[] = [];

  dialog = false;
  dialogDelete = false;
  editedID: string | null | undefined = "";

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
      text: "Description",
      align: "start",
      sortable: false,
      value: "Description",
    },
    {
      text: "updatedAt",
      align: "start",
      sortable: false,
      value: "updatedAt",
    },
    {
      text: "_version",
      align: "center",
      sortable: false,
      value: "_version",
    },
    { text: "Actions", value: "actions", sortable: false },
  ];
  untitledModel: any = {};

  mounted() {
    this.Fget();
  }

  Fget() {
    dataStoreService
      .obserQuery(UntitledModel, Predicates.ALL, {
        sort: (s: any) => s.createdAt("DESCENDING"),
      })
      .subscribe((result: any) => {
        this.listData = result.items;
      });
  }

  save() {
    if (this.editedID == "") {
      const data = new UntitledModel({
        name: this.untitledModel.name,
        Description: this.untitledModel.Description,
      });
      dataStoreService.create(data);
      this.closeDialog();
    } else {
      dataStoreService.edit(UntitledModel, this.untitledModel);
      this.closeDialog();
    }
  }

  // Table
  get formTitle() {
    return this.editedID == "" ? "Create new" : "Edit '" + this.editedID + "'";
  }

  editItem(item: UntitledModel) {
    this.editedID = item.name;
    this.untitledModel = Object.assign({}, item);

    this.dialog = true;
  }

  deleteItem(item: UntitledModel) {
    this.editedID = item.name;
    this.untitledModel = Object.assign({}, item);

    this.dialogDelete = true;
  }

  deleteItemConfirm() {
    dataStoreService.delete(UntitledModel, this.untitledModel);
    this.closeDialog();
  }

  closeDialog() {
    this.dialog = false;
    this.dialogDelete = false;
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
