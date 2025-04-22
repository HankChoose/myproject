"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const MAX_IMAGES = 3;
const initialState2 = {
    applytype: "",
    requirements: "",
    uploadedImages: [],
    mainImageId: 0,
};
const userInfo2Reducer = (state = initialState2, action) => {
    var _a;
    switch (action.type) {
        case "UPDATE_APPLYTYPE":
            return Object.assign(Object.assign({}, state), { applytype: action.payload });
        case "UPDATE_REQUIREMENTS":
            return Object.assign(Object.assign({}, state), { requirements: action.payload });
        case 'ADD_IMAGE':
            // Check if the maximum number of images has been reached
            /*
            if (state.uploadedImages.length >= 3) {
              //If limit reached, do not add the new image
              return state;
            }
            */
            // If not at the limit, add the new image to the array
            return Object.assign(Object.assign({}, state), { uploadedImages: [...state.uploadedImages, action.payload] });
        case 'RESET_IMAGES':
            return Object.assign(Object.assign({}, state), { uploadedImages: [] });
        case 'MOVE_IMAGE':
            const { startIndex, endIndex } = action.payload;
            const uploadedImages = [...state.uploadedImages];
            const [removed] = uploadedImages.splice(startIndex, 1);
            uploadedImages.splice(endIndex, 0, removed);
            return Object.assign(Object.assign({}, state), { uploadedImages });
        case 'REMOVE_IMAGE':
            return Object.assign(Object.assign({}, state), { uploadedImages: state.uploadedImages.filter((_, index) => index !== action.payload) });
        case 'ROTATE_IMAGE':
            const { index, degrees } = action.payload;
            const rotatedImages = [...state.uploadedImages];
            const currentRotation = ((_a = rotatedImages[index]) === null || _a === void 0 ? void 0 : _a.rotation) || 0; // 处理 undefined
            rotatedImages[index] = Object.assign(Object.assign({}, rotatedImages[index]), { rotation: (currentRotation + degrees) % 360 });
            return Object.assign(Object.assign({}, state), { uploadedImages: rotatedImages });
        case 'SET_MAIN_IMAGE':
            return Object.assign(Object.assign({}, state), { mainImageId: action.payload });
        default:
            return state;
    }
};
exports.default = userInfo2Reducer;
