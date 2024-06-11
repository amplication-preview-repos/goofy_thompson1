/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ImageUploadService } from "../imageUpload.service";
import { ImageUploadCreateInput } from "./ImageUploadCreateInput";
import { ImageUpload } from "./ImageUpload";
import { ImageUploadFindManyArgs } from "./ImageUploadFindManyArgs";
import { ImageUploadWhereUniqueInput } from "./ImageUploadWhereUniqueInput";
import { ImageUploadUpdateInput } from "./ImageUploadUpdateInput";

export class ImageUploadControllerBase {
  constructor(protected readonly service: ImageUploadService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ImageUpload })
  async createImageUpload(
    @common.Body() data: ImageUploadCreateInput
  ): Promise<ImageUpload> {
    return await this.service.createImageUpload({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ImageUpload] })
  @ApiNestedQuery(ImageUploadFindManyArgs)
  async imageUploads(@common.Req() request: Request): Promise<ImageUpload[]> {
    const args = plainToClass(ImageUploadFindManyArgs, request.query);
    return this.service.imageUploads({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ImageUpload })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async imageUpload(
    @common.Param() params: ImageUploadWhereUniqueInput
  ): Promise<ImageUpload | null> {
    const result = await this.service.imageUpload({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ImageUpload })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateImageUpload(
    @common.Param() params: ImageUploadWhereUniqueInput,
    @common.Body() data: ImageUploadUpdateInput
  ): Promise<ImageUpload | null> {
    try {
      return await this.service.updateImageUpload({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ImageUpload })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteImageUpload(
    @common.Param() params: ImageUploadWhereUniqueInput
  ): Promise<ImageUpload | null> {
    try {
      return await this.service.deleteImageUpload({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
