import connectDB from "./connectDb.mjs";
import configureApp from "./appConfig.mjs";

const app = configureApp();

connectDB().then((mongooseConnection) => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(9000, () => {
    console.log(`BE started at port 9000`);
  });
});
