// models.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface Item {
  nome: string;
  quantidade: number;
}

export interface User extends Document {
  id: string;
  userName: string;
  email: string;
  password: string;
  itens?: Item[];
}

const ItemSchema = new Schema<Item>({
  nome: { type: String, required: true },
  quantidade: { type: Number, default: 0 },
});

const UserSchema = new Schema<User>({
  id: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  itens: { type: [ItemSchema] },
});

export const UserModel = mongoose.model<User>('User', UserSchema);
