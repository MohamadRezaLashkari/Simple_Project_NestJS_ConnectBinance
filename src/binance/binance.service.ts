import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { IBinance } from "src/interface/binance.interface";
import { CreateBinanceDto } from "src/dto/create.binance.dto";
import { Model } from "mongoose";
import { json } from "stream/consumers";
const util = require("util");
@Injectable()
export class BinanceService {
  constructor(@InjectModel("Binance") private binanceModel: Model<IBinance>) {}
  async createBinance(createsdtdto: CreateBinanceDto): Promise<IBinance> {
    const newbinance = await new this.binanceModel(createsdtdto);
    return newbinance.save();
  }
  async getAllBinances() {
    const binanceData = await this.binanceModel.find();
    if (!binanceData || binanceData.length == 0) {
      throw new NotFoundException("Binance data not found !");
    }
    return binanceData;
  }
}
