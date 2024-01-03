const MAX_IMAGES = 3;

const initialState2 = {
  applytype: "",
  requirements: "",
  uploadedImages: [],
};

// 定义 action 类型
type MyAction = {
  type: string;
  payload: any; // 你可以根据需要指定更具体的类型
};

const userInfo2Reducer = (state = initialState2, action: MyAction) => {
  switch (action.type) { 

    case "UPDATE_APPLYTYPE":
      return { ...state, applytype: action.payload };
    
    case "UPDATE_REQUIREMENTS":
      return { ...state, requirements: action.payload };
    
    case 'ADD_IMAGE':
      
      // Check if the maximum number of images has been reached
      if (state.uploadedImages.length >= 3) {
        // If limit reached, do not add the new image
        return state;
      }

      // If not at the limit, add the new image to the array
      return {
        ...state,
        //uploadedImages: [...state.uploadedImages, action.payload],
        uploadedImages: [...state.uploadedImages, action.payload].slice(0, MAX_IMAGES),
      };
    
    case 'RESET_IMAGES':
      return {
        ...state,
        uploadedImages: [],
      };
    
    case 'MOVE_IMAGE':
      const { startIndex, endIndex } = action.payload;
      const uploadedImages = [...state.uploadedImages];
      const [removed] = uploadedImages.splice(startIndex, 1);
      uploadedImages.splice(endIndex, 0, removed);
      return { ...state, uploadedImages };

    case 'REMOVE_IMAGE':
      return {
        ...state,
        uploadedImages: state.uploadedImages.filter((_, index) => index !== action.payload),
      };
    /*
    case 'ROTATE_IMAGE':
      return {
        ...state,
        uploadedImages: state.uploadedImages.map((image, index) =>
          index === action.payload ? { ...image, rotation: (image.rotation || 0) + 90 } : image
        ),
      };
    */
    default:
      return state;
  }
};

export default userInfo2Reducer;