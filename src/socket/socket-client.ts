import { OnModuleInit } from "@nestjs/common";
import fetch from "cross-fetch";
import { json } from "node:stream/consumers";
export class SocketClient implements OnModuleInit {
  onModuleInit() {
    this.registerConsumerEvents();
  }
  public registerConsumerEvents() {
    const { Spot } = require("@binance/connector");
    const client = new Spot("", "", {
      wsURL: "wss://testnet.binancefuture.com",
    });
    const callbacks = {
      open: () => client.logger.log("open"),
      close: () => client.logger.log("closed"),
      message: (dataBinance) => SaveData(dataBinance),
    };
    const KlineCandlestick = client.combinedStreams(
      "btcusdt@kline_1m",
      callbacks
    );
    function SaveData(dataBinance) {
      const AllData = JSON.parse(dataBinance);
      const dataJson = JSON.stringify(AllData.data);
      const finalData = { data: dataJson };
      console.log(finalData);
      const response = fetch("http://localhost:3000/binance", {
        method: "POST",
        body: JSON.stringify(finalData),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
}
