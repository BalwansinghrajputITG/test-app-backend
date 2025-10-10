<<<<<<< HEAD
=======
const app = require("./src/index");

app.listen(3000, () => {
  console.log("site is started http://localhost:3000");
});
>>>>>>> 0503c31695b4569f6477ca51b7764a33cb15ea06

const mongoConnect = require("./src/db/db");
const errorHandler = require("./src/middleWare/errorHandler");
const app = require('./src/index')
mongoConnect();

const PORT = 3000;

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
<<<<<<< HEAD
})
=======
});
>>>>>>> 0503c31695b4569f6477ca51b7764a33cb15ea06
