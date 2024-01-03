
export interface ImageInfo {
  file: File;
  fileName: string;
  fileSize: number;
  filePreviewUrl: string;
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
  payload: { ...imageInfo },
});

export const resetImages = () => ({
  type: 'RESET_IMAGES',
});

export const moveImage = (startIndex:number, endIndex:number) => ({
  type: 'MOVE_IMAGE',
  payload: { startIndex, endIndex },
});