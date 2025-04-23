"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestGetImages = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const test_get_images_module_scss_1 = __importDefault(require("./test-get-images.module.scss"));
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../../constants");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestGetImages = ({ className, imageInfo }) => {
    const [imageData, setImageData] = (0, react_1.useState)(null);
    const [selectedImage, setSelectedImage] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const fetchImageData = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${constants_1.baseUrl}/get-image/${imageInfo}/`, {
                    responseType: 'arraybuffer',
                });
                const base64Image = btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
                const imageDataUrl = `data:image/jpeg;base64,${base64Image}`;
                setImageData(imageDataUrl);
            }
            catch (error) {
                console.error('Error fetching image data:', error);
            }
        });
        fetchImageData();
    }, [imageInfo]);
    const handleThumbnailClick = (image) => {
    };
    const handleThumbnailHover = (image) => {
        setSelectedImage(image);
        console.log('handleThumbnailHover0000:');
    };
    const handleThumbnailLeave = () => {
        setSelectedImage(null);
        console.log('handleThumbnailLeave11111:');
    };
    const handleLargePictureClose = () => {
        setSelectedImage(null);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(test_get_images_module_scss_1.default.root, className), children: [(0, jsx_runtime_1.jsx)("div", { className: test_get_images_module_scss_1.default.thumbnailContainer, children: (0, jsx_runtime_1.jsx)("img", { src: imageData, alt: "Preview", 
                    //onMouseEnter={() => handleThumbnailHover(imageData)}
                    style: {
                        maxWidth: '90%',
                        maxHeight: '90%',
                        cursor: 'pointer',
                    }, onClick: () => handleThumbnailClick(imageData) }) }), selectedImage && ((0, jsx_runtime_1.jsxs)("div", { 
                //onMouseLeave={handleThumbnailLeave}
                className: test_get_images_module_scss_1.default.largeImageContainer, children: [(0, jsx_runtime_1.jsx)("img", { src: imageData, alt: "Selected Image", style: {
                            maxWidth: '100%',
                            maxHeight: '100%',
                            cursor: 'pointer',
                        }, onClick: handleLargePictureClose }), (0, jsx_runtime_1.jsx)("div", { className: test_get_images_module_scss_1.default.fileInfoContainer, children: "click image to close" })] }))] }));
};
exports.TestGetImages = TestGetImages;
