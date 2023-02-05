import {IsString , IsEmpty} from "class-validator";
export class CreateBinanceDto {
  @IsString()
  readonly data: string;
}
