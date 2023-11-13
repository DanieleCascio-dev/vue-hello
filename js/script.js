const { createApp } = Vue;
console.log(createApp);

const app = createApp({
  data() {
    return {
      text: "Hello Vue!",
      img: "edgar-castrejon.jpg",
      fontSize: " ",
    };
  },
  methods: {
    changeFontSize: function () {
      if (this.fontSize === " ") {
        this.fontSize = "f-small";
      } else if (this.fontSize === "f-small") {
        this.fontSize = "f-mid";
      } else if (this.fontSize === "f-mid") {
        this.fontSize = "f-big";
      } else {
        this.fontSize = " ";
      }
    },
  },
});

app.mount("#app");
