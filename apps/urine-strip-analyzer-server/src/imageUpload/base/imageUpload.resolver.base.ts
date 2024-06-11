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
import { ImageUpload } from "./ImageUpload";
import { ImageUploadCountArgs } from "./ImageUploadCountArgs";
import { ImageUploadFindManyArgs } from "./ImageUploadFindManyArgs";
import { ImageUploadFindUniqueArgs } from "./ImageUploadFindUniqueArgs";
import { DeleteImageUploadArgs } from "./DeleteImageUploadArgs";
import { ImageUploadService } from "../imageUpload.service";
@graphql.Resolver(() => ImageUpload)
export class ImageUploadResolverBase {
  constructor(protected readonly service: ImageUploadService) {}

  async _imageUploadsMeta(
    @graphql.Args() args: ImageUploadCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ImageUpload])
  async imageUploads(
    @graphql.Args() args: ImageUploadFindManyArgs
  ): Promise<ImageUpload[]> {
    return this.service.imageUploads(args);
  }

  @graphql.Query(() => ImageUpload, { nullable: true })
  async imageUpload(
    @graphql.Args() args: ImageUploadFindUniqueArgs
  ): Promise<ImageUpload | null> {
    const result = await this.service.imageUpload(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ImageUpload)
  async deleteImageUpload(
    @graphql.Args() args: DeleteImageUploadArgs
  ): Promise<ImageUpload | null> {
    try {
      return await this.service.deleteImageUpload(args);
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
