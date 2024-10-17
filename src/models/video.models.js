import mongoose, {Schema} from mongoose;
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema = new Schema({
id: {
type: String
},
videoFile: {
type: String,  //cloudinari url
required: true
},
thumbnail: {
  type: String,
  required: true
},
title: {
  type: String,
  required: true
},
description: {
  type: String,
  required: true
},
duration: {
  type: Number,   // cloudinari 
  required: true
},
viwes: {
  type: Number,
  default: 0
},
isPublished: {
  type: Boolean,
  default: true
},
owner: {
  type: Schema.types.objectId,
  ref: "User"
}
}, {Timestamp: true})

videoSchema

export const Video = mongoose.model('Video', videoSchema)