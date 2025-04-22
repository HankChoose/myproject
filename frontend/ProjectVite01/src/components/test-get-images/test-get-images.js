"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const classnames_1 = __importDefault(require("classnames"));
const test_get_images_module_scss_1 = __importDefault(require("./test-get-images.module.scss"));
const react_1 = __importStar(require("react"));
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
    return (<div className={(0, classnames_1.default)(test_get_images_module_scss_1.default.root, className)}>
            
            <div className={test_get_images_module_scss_1.default.thumbnailContainer}>
                <img src={imageData} alt="Preview" 
    //onMouseEnter={() => handleThumbnailHover(imageData)}
    style={{
            maxWidth: '90%',
            maxHeight: '90%',
            cursor: 'pointer',
        }} onClick={() => handleThumbnailClick(imageData)}/>
            </div>

            {selectedImage && (<div 
        //onMouseLeave={handleThumbnailLeave}
        className={test_get_images_module_scss_1.default.largeImageContainer}>
                    <img src={imageData} alt="Selected Image" style={{
                maxWidth: '100%',
                maxHeight: '100%',
                cursor: 'pointer',
            }} onClick={handleLargePictureClose}/>
                    <div className={test_get_images_module_scss_1.default.fileInfoContainer}>
                        click image to close
                    </div>
                      
                </div>)}

        </div>);
};
exports.TestGetImages = TestGetImages;
