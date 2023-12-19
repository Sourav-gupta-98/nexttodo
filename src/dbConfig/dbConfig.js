import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI);
    const Connection = mongoose.connection;
    Connection.on("connected", () => {
      console.log("MongoDB connected Successfully!");
    });

    Connection.on("error", (err) => {
      console.log("MongoDB ERROR " + err);
    });
  } catch (error) {
    console.log("Something goes wrong");
    console.log(error);
  }
}
