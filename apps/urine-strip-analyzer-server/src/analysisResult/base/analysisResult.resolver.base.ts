/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AnalysisResult } from "./AnalysisResult";
import { AnalysisResultCountArgs } from "./AnalysisResultCountArgs";
import { AnalysisResultFindManyArgs } from "./AnalysisResultFindManyArgs";
import { AnalysisResultFindUniqueArgs } from "./AnalysisResultFindUniqueArgs";
import { DeleteAnalysisResultArgs } from "./DeleteAnalysisResultArgs";
import { AnalysisResultService } from "../analysisResult.service";
@graphql.Resolver(() => AnalysisResult)
export class AnalysisResultResolverBase {
  constructor(protected readonly service: AnalysisResultService) {}

  async _analysisResultsMeta(
    @graphql.Args() args: AnalysisResultCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AnalysisResult])
  async analysisResults(
    @graphql.Args() args: AnalysisResultFindManyArgs
  ): Promise<AnalysisResult[]> {
    return this.service.analysisResults(args);
  }

  @graphql.Query(() => AnalysisResult, { nullable: true })
  async analysisResult(
    @graphql.Args() args: AnalysisResultFindUniqueArgs
  ): Promise<AnalysisResult | null> {
    const result = await this.service.analysisResult(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AnalysisResult)
  async deleteAnalysisResult(
    @graphql.Args() args: DeleteAnalysisResultArgs
  ): Promise<AnalysisResult | null> {
    try {
      return await this.service.deleteAnalysisResult(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
