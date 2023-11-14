const { createApp } = Vue;
console.log(createApp);

const app = createApp({
  data() {
    return {
      text: "Hello Vue!",
      img: "edgar-castrejon.jpg",
      fontSize: " ",
      imgClass: "",
      squareRounded: false,
      suqareBlue: true,
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
    addBorder: function () {
      this.imgClass =
        this.imgClass === ""
          ? (this.imgClass = "border")
          : (this.imgClass = "");
    },
    makeRounded: function () {
      this.squareRounded = !this.squareRounded; //Toggle
    },
    changeColor: function () {
      this.suqareBlue = !this.suqareBlue;
    },
  },
});

app.mount("#app");
