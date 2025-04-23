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
exports.TestGetImages2 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const test_get_images_2_module_scss_1 = __importDefault(require("./test-get-images-2.module.scss"));
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../../constants");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestGetImages2 = ({ className }) => {
    const [imageData, setImageData] = (0, react_1.useState)(null);
    //const imageInfo = '20240108_070912__20210715144349_image_2.jpg';
    const imageInfo = '20240110_055037_CELPIP1_image_2.jpg';
    (0, react_1.useEffect)(() => {
    }, [imageInfo]);
    // Assume fetchAllImageData is defined as in the previous response
    const fetchImageData = (imageInfo) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const api_url = `${constants_1.baseUrl}/get-image/${imageInfo}/`;
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
    fetchImageData(imageInfo);
    const handleThumbnailClick = (image) => {
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(test_get_images_2_module_scss_1.default.root, className), children: (0, jsx_runtime_1.jsx)("div", { className: test_get_images_2_module_scss_1.default.thumbnailContainer, children: (0, jsx_runtime_1.jsx)("img", { src: imageData, alt: "Preview", 
                //onMouseEnter={() => handleThumbnailHover(image.filePreviewUrl)}
                style: {
                    maxWidth: '90%',
                    maxHeight: '90%',
                    cursor: 'pointer',
                }, onClick: () => handleThumbnailClick(imageData) }) }) }));
};
exports.TestGetImages2 = TestGetImages2;
