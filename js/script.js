const { createApp } = Vue;
console.log(createApp);

const app = createApp({
  data() {
    return {
      text: "Hello Vue!",
      img: "edgar-castrejon.jpg",
    };
  },
});

app.mount("#app");
