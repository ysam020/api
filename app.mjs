import connectDB from "./connectDb.mjs";
import configureApp from "./appConfig.mjs";
import UserModel from "./userModel.mjs";
const app = configureApp();

connectDB().then((mongooseConnection) => {
  app.get("/", async (req, res) => {
    const users = await UserModel.find({});
    res.send(users);
  });

  app.listen(9000, () => {
    console.log(`BE started at port 9000`);
  });
});
