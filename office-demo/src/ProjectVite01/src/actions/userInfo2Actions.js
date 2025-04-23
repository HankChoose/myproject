"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateImage = exports.setMainImage = exports.removeImage = exports.moveImage = exports.resetImages = exports.addImage = exports.updateRequirements = exports.updateApplytype = void 0;
const updateApplytype = (applytype) => ({
    type: "UPDATE_APPLYTYPE",
    payload: applytype
});
exports.updateApplytype = updateApplytype;
const updateRequirements = (requirements) => ({
    type: "UPDATE_REQUIREMENTS",
    payload: requirements
});
exports.updateRequirements = updateRequirements;
const addImage = (imageInfo) => ({
    type: 'ADD_IMAGE',
    payload: Object.assign({}, imageInfo),
});
exports.addImage = addImage;
const resetImages = () => ({
    type: 'RESET_IMAGES',
});
exports.resetImages = resetImages;
const moveImage = (startIndex, endIndex) => ({
    type: 'MOVE_IMAGE',
    payload: { startIndex, endIndex },
});
exports.moveImage = moveImage;
const removeImage = (index) => ({
    type: 'REMOVE_IMAGE',
    payload: index,
});
exports.removeImage = removeImage;
const setMainImage = (index) => ({
    type: 'SET_MAIN_IMAGE',
    payload: index,
});
exports.setMainImage = setMainImage;
const rotateImage = (index, degrees) => {
    return {
        type: 'ROTATE_IMAGE',
        payload: {
            index,
            degrees,
        },
    };
};
exports.rotateImage = rotateImage;
