import { ImageUpload as TImageUpload } from "../api/imageUpload/ImageUpload";

export const IMAGEUPLOAD_TITLE_FIELD = "id";

export const ImageUploadTitle = (record: TImageUpload): string => {
  return record.id?.toString() || String(record.id);
};
