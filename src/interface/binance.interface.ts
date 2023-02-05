import { Document } from "mongoose";
export interface IBinance extends Document {
  readonly data:string;
  
}
