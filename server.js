

const mongoConnect = require("./src/db/db");
const errorHandler = require("./src/middleWare/errorHandler");
const app = require('./src/index')
mongoConnect();

const PORT = 3000;

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});

