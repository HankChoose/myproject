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
exports.TestGetImagesArrays = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const test_get_images_arrays_module_scss_1 = __importDefault(require("./test-get-images-arrays.module.scss"));
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const constants_1 = require("../../constants");
const file_saver_1 = require("file-saver");
const fa6_1 = require("react-icons/fa6");
const lu_1 = require("react-icons/lu");
const fa_1 = require("react-icons/fa");
const io_1 = require("react-icons/io");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestGetImagesArrays = ({ className, fileNames }) => {
    const [images, setImages] = (0, react_1.useState)([]);
    const [selectedImage, setSelectedImage] = (0, react_1.useState)(null);
    const [selectedImageIndex, setSelectedImageIndex] = (0, react_1.useState)(0);
    const imageFiles = [];
    (0, react_1.useEffect)(() => {
        fetchData();
    }, [fileNames]);
    const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const imagePromises = fileNames.map((fileName, index) => __awaiter(void 0, void 0, void 0, function* () {
                const response = yield axios_1.default.get(`${constants_1.baseUrl}/get-image/${fileName}/`, {
                    responseType: 'arraybuffer',
                });
                const base64Image = btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
                const imageDataUrl = `data:image/jpeg;base64,${base64Image}`;
                // Convert base64 to a Blob
                const byteCharacters = atob(base64Image);
                const byteArrays = [];
                for (let offset = 0; offset < byteCharacters.length; offset += 512) {
                    const slice = byteCharacters.slice(offset, offset + 512);
                    const byteNumbers = new Array(slice.length);
                    for (let i = 0; i < slice.length; i++) {
                        byteNumbers[i] = slice.charCodeAt(i);
                    }
                    const byteArray = new Uint8Array(byteNumbers);
                    byteArrays.push(byteArray);
                }
                const blob = new Blob(byteArrays, { type: 'image/jpeg' });
                // Create a File object with the specified name
                const file = new File([blob], fileName, { type: 'image/jpeg' });
                return {
                    id: index,
                    src: imageDataUrl,
                    file: file,
                    rotation: 0,
                };
            }));
            const loadedImages = yield Promise.all(imagePromises);
            setImages(loadedImages);
            console.log('setImages');
            loadedImages.forEach((value, key) => {
                console.log('loadedImages[' + key + ']', value);
            });
        }
        catch (error) {
            console.error('Error fetching image data:', error);
        }
    });
    const handleSetMianImage = (index) => {
        //dispatch(setMainImage(index));
        console.log('index:', index);
    };
    const handleRemoveImage = (index) => {
        //dispatch(removeImage(index));
    };
    /*
    const handleRotateImage = () => {
        // 每次点击按钮旋转90度
        setRotation((prevRotation) => prevRotation + 90);
        images.forEach((value, key) => {
            console.log('images['+key+']', value);
        });
    };
    */
    const handleRotateLargeImage = () => {
        if (selectedImage) {
            setSelectedImage(Object.assign(Object.assign({}, selectedImage), { rotation: (selectedImage.rotation || 0) + 90 }));
        }
    };
    const handleRotateImage = (index) => {
        images.forEach((value, key) => {
            console.log('images[' + key + ']', value);
        });
        setImages((prevImages) => prevImages.map((image, i) => i === index ? Object.assign(Object.assign({}, image), { rotation: image.rotation + 90 }) : image));
    };
    const handleThumbnailHover = (image) => {
        setSelectedImage(image);
        console.log('handleThumbnailHover0000:');
    };
    const handleThumbnailLeave = () => {
        setSelectedImage(null);
        console.log('handleThumbnailLeave11111:');
    };
    const handleThumbnailClick = (image, index) => {
        setSelectedImage(image);
        setSelectedImageIndex(index);
    };
    const handleLargePictureClose = () => {
        setSelectedImage(null);
    };
    const handlePrevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        /*
        // 更新大图选择角度
        const prevImage = images[selectedImageIndex];
        setSelectedImage({
            ...prevImage,
            rotation: prevImage.rotation || 0,
        });
        */
    };
    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        /*
        // 更新大图选择角度
        const nextImage = images[selectedImageIndex];
        setSelectedImage({
            ...nextImage,
            rotation: nextImage.rotation || 0,
        });
        */
    };
    const handleSaveAs = (image) => {
        console.log('handleSaveAs0000:');
        (0, file_saver_1.saveAs)(image, 'zyy_dowloadfile.jpg');
    };
    const handleApplytypeChange = (e) => {
        //dispatch(updateApplytype(e.target.value));
        console.log('Applytype is:', e.target.value);
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(test_get_images_arrays_module_scss_1.default.root, className), children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("ul", { className: test_get_images_arrays_module_scss_1.default.imageGrid, children: images.map((image, index) => ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("div", { className: test_get_images_arrays_module_scss_1.default.thumbnailContainer, children: (0, jsx_runtime_1.jsx)("img", { src: image.src, alt: "Preview", 
                                //onMouseEnter={() => handleThumbnailHover(image.filePreviewUrl)}
                                style: {
                                    maxWidth: '90%',
                                    maxHeight: '90%',
                                    cursor: 'pointer',
                                    transform: `rotate(${(image.rotation * Math.PI) / 180}rad)`,
                                }, onClick: () => handleThumbnailClick(image, index) }) }), selectedImage && ((0, jsx_runtime_1.jsxs)("div", { 
                            //onMouseLeave={handleThumbnailLeave}
                            className: test_get_images_arrays_module_scss_1.default.largeImageContainer, children: [(0, jsx_runtime_1.jsx)("img", { src: images[selectedImageIndex].src, alt: "Selected Image", style: {
                                        maxWidth: '80%',
                                        maxHeight: '80%',
                                        cursor: 'pointer',
                                        transform: `rotate(${selectedImage.rotation}deg)`,
                                    }, onClick: handleLargePictureClose }), (0, jsx_runtime_1.jsxs)("div", { className: test_get_images_arrays_module_scss_1.default.navigationArrows, children: [(0, jsx_runtime_1.jsx)(fa_1.FaArrowLeft, { onClick: handlePrevImage }), (0, jsx_runtime_1.jsx)(fa_1.FaArrowRight, { onClick: handleNextImage })] }), (0, jsx_runtime_1.jsxs)("div", { className: test_get_images_arrays_module_scss_1.default.largeImageButtons, children: [(0, jsx_runtime_1.jsx)("button", { className: test_get_images_arrays_module_scss_1.default.buttonStyle, onClick: handleRotateLargeImage, children: (0, jsx_runtime_1.jsx)(fa6_1.FaArrowRotateRight, {}) }), (0, jsx_runtime_1.jsx)("button", { className: test_get_images_arrays_module_scss_1.default.buttonStyle, onClick: handleLargePictureClose, children: (0, jsx_runtime_1.jsx)(io_1.IoMdClose, {}) })] })] })), (0, jsx_runtime_1.jsxs)("div", { className: test_get_images_arrays_module_scss_1.default.buttonsContainer, children: [(0, jsx_runtime_1.jsx)("div", { className: test_get_images_arrays_module_scss_1.default.thumbnailIcon, children: (0, jsx_runtime_1.jsx)(io_1.IoMdDownload, { title: "Download", onClick: () => handleSaveAs(image.file) }) }), (0, jsx_runtime_1.jsx)("div", { className: test_get_images_arrays_module_scss_1.default.thumbnailIcon, children: (0, jsx_runtime_1.jsx)(fa6_1.FaArrowRotateRight, { title: "Rotate Image 90 degrees", onClick: () => handleRotateImage(index) }) }), (0, jsx_runtime_1.jsx)("div", { className: test_get_images_arrays_module_scss_1.default.thumbnailIcon, children: (0, jsx_runtime_1.jsx)(lu_1.LuExpand, { title: "Enlarge image", onClick: () => handleThumbnailClick(image, index) }) })] })] }, index))) }) }) }));
};
exports.TestGetImagesArrays = TestGetImagesArrays;
