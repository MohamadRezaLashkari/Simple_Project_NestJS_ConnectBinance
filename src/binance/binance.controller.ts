import {
  Controller,
  Body,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from "@nestjs/common";
import { BinanceService } from "./binance.service";
import { CreateBinanceDto } from "src/dto/create.binance.dto";
import { response } from "express";
@Controller("binance")
export class BinanceController {
  constructor(private readonly binanceService: BinanceService) {}
  @Post()
  async createBinance(
    @Res() response,
    @Body() createbinancedto: CreateBinanceDto
  ) {
    try {
      const newbinance = await this.binanceService.createBinance(
        createbinancedto
      );
      return response.status(HttpStatus.CREATED).json({
        message: "Binance has been created successfully!",
        newbinance,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: "Error Binance not Created !",
        err: "Bad Request",
      });
    }
  }
  @Get()
  async getBinance(@Res() response) {
    try {
      const binanceData = await this.binanceService.getAllBinances();
    
      return response.status(HttpStatus.OK).json({
        message: "All Binance Data found Successfuly",
        binanceData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
