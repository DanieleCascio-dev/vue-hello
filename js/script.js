const { createApp } = Vue;
console.log(createApp);

const app = createApp({
  data() {
    return {
      text: "",
    };
  },
});

app.mount("#app");
