import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.DATABASE_CON as string);
    console.log(`database connected succesfully ${mongoose.connection.host}`)
  } catch (error: any) {
    console.log(`mongosse connection error ${error}`);
  }
};
export default connectDB;
