import { AppController } from "./app.controller";
import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import {MongooseModule} from "@nestjs/mongoose"
import { BinanceSchema } from "./schema/binance.schema";
import { BinanceService } from './binance/binance.service';
import { SocketClient } from "./socket/socket-client";
import { BinanceController } from './binance/binance.controller';
@Module({
  imports: [SocketClient,
    MongooseModule.forRoot('mongodb://localhost:27017',{dbName:"binance_db"}),
    MongooseModule.forFeature([{name:'Binance', schema:BinanceSchema}])
  ],
  controllers:[AppController, BinanceController],
  providers:[AppService, BinanceService],
})
export class AppModule {}
