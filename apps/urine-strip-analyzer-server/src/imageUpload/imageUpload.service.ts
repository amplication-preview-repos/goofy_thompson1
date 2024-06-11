import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ImageUploadServiceBase } from "./base/imageUpload.service.base";

@Injectable()
export class ImageUploadService extends ImageUploadServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
