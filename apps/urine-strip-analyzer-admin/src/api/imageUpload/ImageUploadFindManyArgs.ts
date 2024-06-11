import { ImageUploadWhereInput } from "./ImageUploadWhereInput";
import { ImageUploadOrderByInput } from "./ImageUploadOrderByInput";

export type ImageUploadFindManyArgs = {
  where?: ImageUploadWhereInput;
  orderBy?: Array<ImageUploadOrderByInput>;
  skip?: number;
  take?: number;
};
