import mongoose ,{Schema, Document} from "mongoose";

interface User extends Document {
    username: string;
    email:String;
    password:String;
    blogs: mongoose.Types.ObjectId[]
}

const userSchema = new Schema<User>({
  username: {
    type: String,
    required: [true, "username must reuired"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
  ],
},{
    timestamps:true
}
); 

const userModel =  mongoose.model<User>('User', userSchema);
export default userModel;