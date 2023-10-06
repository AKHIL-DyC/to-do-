import { Schema } from "mongoose";
import mongoose from "mongoose";

const topicSchema=new Schema(
    {
        title:String,
        description:String,
    },
    {
        timestamps:true,
    }
);
const Topic=mongoose.models.Topic||mongoose.model("Topic",topicSchema);
export default Topic;