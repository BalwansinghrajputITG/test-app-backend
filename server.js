const app = require("./src/index");
const mongoConnect = require("./src/db/db");
mongoConnect();


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
