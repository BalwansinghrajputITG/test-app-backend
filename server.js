
const app1 = require("./src");

app1.listen(3000,()=>{ 
    
    console.log("site is started http://localhost:3000");
})

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

