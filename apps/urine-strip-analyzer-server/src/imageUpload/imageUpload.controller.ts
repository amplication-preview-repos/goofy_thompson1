import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ImageUploadService } from "./imageUpload.service";
import { ImageUploadControllerBase } from "./base/imageUpload.controller.base";

@swagger.ApiTags("imageUploads")
@common.Controller("imageUploads")
export class ImageUploadController extends ImageUploadControllerBase {
  constructor(protected readonly service: ImageUploadService) {
    super(service);
  }
}
