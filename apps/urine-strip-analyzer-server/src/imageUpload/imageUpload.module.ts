import { Module } from "@nestjs/common";
import { ImageUploadModuleBase } from "./base/imageUpload.module.base";
import { ImageUploadService } from "./imageUpload.service";
import { ImageUploadController } from "./imageUpload.controller";
import { ImageUploadResolver } from "./imageUpload.resolver";

@Module({
  imports: [ImageUploadModuleBase],
  controllers: [ImageUploadController],
  providers: [ImageUploadService, ImageUploadResolver],
  exports: [ImageUploadService],
})
export class ImageUploadModule {}
