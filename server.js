const app = require("./src/index");
const mongoConnect = require("./src/db/db");
const errorHandler = require("./src/middleWare/errorHandler");
mongoConnect();

const PORT = 3000;

app.use("/question", require("./src/routes/questionRouter"));
mongoConnect();

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
