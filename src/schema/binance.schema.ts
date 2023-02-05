import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema()
export class Binance {
  @Prop()
  data: string;
}
export const BinanceSchema = SchemaFactory.createForClass(Binance);
