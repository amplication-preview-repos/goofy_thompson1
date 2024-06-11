import * as graphql from "@nestjs/graphql";
import { ImageUploadResolverBase } from "./base/imageUpload.resolver.base";
import { ImageUpload } from "./base/ImageUpload";
import { ImageUploadService } from "./imageUpload.service";

@graphql.Resolver(() => ImageUpload)
export class ImageUploadResolver extends ImageUploadResolverBase {
  constructor(protected readonly service: ImageUploadService) {
    super(service);
  }
}
