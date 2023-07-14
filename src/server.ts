import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`Database connected successfully`);

    app.listen(config.port, () => {
      console.log(`Example app listed at port ${config.port}`);
    });
  } catch (err) {
    console.log(`Failed to connect the database`, err);
  }
}

bootstrap();
