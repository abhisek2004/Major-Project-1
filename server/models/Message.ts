// server/src/models/Message.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IMessage extends Document {
  sender: mongoose.Types.ObjectId; // Reference to User
  receiver: mongoose.Types.ObjectId; // Reference to User
  content: string;
  attachment?: {
    name: string;
    size: string;
    type: string;
    url: string; // Cloud storage URL if implemented
  };
  read: boolean;
  timestamp: Date;
}

const MessageSchema: Schema<IMessage> = new Schema(
  {
    sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    attachment: {
      name: { type: String },
      size: { type: String },
      type: { type: String },
      url: { type: String },
    },
    read: { type: Boolean, default: false },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Index for efficient querying by participants and time
MessageSchema.index({ sender: 1, receiver: 1, timestamp: -1 });

export default mongoose.model<IMessage>('Message', MessageSchema);