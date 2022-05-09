<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <pre>
      {{ listData }}
    </pre>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from "vue-property-decorator";
import { HelloViewModel } from "./HelloWorld-viewmodel";

import { UntitledModel } from "@/aws/models";
import { dataStoreService } from "@/services/datastore-service";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Provide() vm = new HelloViewModel();
  listData: UntitledModel[] = [];
  mounted() {
    this.Fget();
  }
  Fget() {
    dataStoreService.get(UntitledModel).then((result: any) => {
      this.listData = result;
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
