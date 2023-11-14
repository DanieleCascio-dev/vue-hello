const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      awesome: true,
      myNumber: -3,
      names: ["luca", "daniele", "maria"],
      /* names: [], */
      students: {
        name: "Pippo",
        lastName: "Bianchi",
        age: 26,
      },
      studentsArray: [
        {
          name: "daniele",
          lastName: "cascio",
          age: 27,
        },
        {
          name: "marco",
          lastName: "bianchi",
          age: 28,
        },
        {
          name: "piero",
          lastName: "rossi",
          age: 26,
        },
      ],
    };
  },
  methods: {},
}).mount("#app");
