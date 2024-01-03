
export interface ImageInfo {
  file: File;
  fileName: string;
  fileSize: number;
  filePreviewUrl: string;
  rotation?: number; // 可选的 rotation 属性
}

export const updateApplytype = (applytype: string) => ({
  type: "UPDATE_APPLYTYPE",
  payload: applytype
});

export const updateRequirements = (requirements: string) => ({
  type: "UPDATE_REQUIREMENTS",
  payload: requirements
});

export const addImage = (imageInfo:ImageInfo) => ({
  type: 'ADD_IMAGE',
  payload: { ...imageInfo},
});

export const resetImages = () => ({
  type: 'RESET_IMAGES',
});

export const moveImage = (startIndex:number, endIndex:number) => ({
  type: 'MOVE_IMAGE',
  payload: { startIndex, endIndex },
});

export const removeImage = (index: number) => ({
  type: 'REMOVE_IMAGE',
  payload: index,
});

export const rotateImage = (index: number) => ({
  type: 'ROTATE_IMAGE',
  payload: index,
});