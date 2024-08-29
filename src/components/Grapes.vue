<template>
  <v-container fluid>
    <div id="gjs"></div>
  </v-container>
</template>

<script>
import grapes from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import addVBtnBlock from "@/assets/grapesjs-blocks/v-btn-block"; // Adjust the path as necessary
import addAnotherBlock from "@/assets/grapesjs-blocks/another-block"; // Adjust the path as necessary

export default {
  name: "Grapes",
  props: {
    msg: String,
  },

  mounted() {
    grapes.plugins.add("components-vue", (editor, options) => {
      // Add individual blocks
      addVBtnBlock(editor);
      addAnotherBlock(editor);
      // Add more blocks as needed
    });

    grapes.init({
      container: "#gjs",
      plugins: ["components-vue"],
      canvas: {
        styles: ["https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css"],
      },
      showDevices: false, // hide devices
    });
  },
};
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
