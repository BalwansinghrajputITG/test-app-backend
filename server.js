const app = require("./src/index");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
