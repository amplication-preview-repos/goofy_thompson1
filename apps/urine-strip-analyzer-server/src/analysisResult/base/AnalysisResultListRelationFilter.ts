/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AnalysisResultWhereInput } from "./AnalysisResultWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AnalysisResultListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AnalysisResultWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalysisResultWhereInput)
  @IsOptional()
  @Field(() => AnalysisResultWhereInput, {
    nullable: true,
  })
  every?: AnalysisResultWhereInput;

  @ApiProperty({
    required: false,
    type: () => AnalysisResultWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalysisResultWhereInput)
  @IsOptional()
  @Field(() => AnalysisResultWhereInput, {
    nullable: true,
  })
  some?: AnalysisResultWhereInput;

  @ApiProperty({
    required: false,
    type: () => AnalysisResultWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalysisResultWhereInput)
  @IsOptional()
  @Field(() => AnalysisResultWhereInput, {
    nullable: true,
  })
  none?: AnalysisResultWhereInput;
}
export { AnalysisResultListRelationFilter as AnalysisResultListRelationFilter };
