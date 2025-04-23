"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserApply2 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const user_apply_2_module_scss_1 = __importDefault(require("./user-apply-2.module.scss"));
require("bootstrap/dist/css/bootstrap.min.css");
const react_bootstrap_1 = require("react-bootstrap");
const react_redux_1 = require("react-redux");
const io_1 = require("react-icons/io");
const userInfo2Actions_1 = require("../../actions/userInfo2Actions");
const md_1 = require("react-icons/md");
const fa6_1 = require("react-icons/fa6");
const lu_1 = require("react-icons/lu");
const fa_1 = require("react-icons/fa");
const ai_1 = require("react-icons/ai");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const UserApply2 = ({ className }) => {
    const [selectedFile, setSelectedFile] = (0, react_1.useState)(null);
    const [selectedImage, setSelectedImage] = (0, react_1.useState)(null);
    const [selectedImageIndex, setSelectedImageIndex] = (0, react_1.useState)(0);
    const [textInput, setTextInput] = (0, react_1.useState)('');
    const [previewUrl, setPreviewUrl] = (0, react_1.useState)(null);
    const userInfo = (0, react_redux_1.useSelector)((state) => state.userInfo);
    const userInfo2 = (0, react_redux_1.useSelector)((state) => state.userInfo2);
    const uploadHint = "Can upload 3 pictures and type bmp,gif,png,svg,jpeg/jpg,each less than 3 MB.";
    const requirementErrorMessage = "Between 10 and 20000 characters.";
    console.log('userInfo-1:', userInfo);
    console.log('userInfo2-1:', userInfo2);
    const dispatch = (0, react_redux_1.useDispatch)();
    const mainImageIndex = (0, react_redux_1.useSelector)((state) => state.userInfo2.mainImageId);
    const textareaRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        // 在组件挂载后，通过引用获取 textarea 的值
        if (textareaRef.current) {
            const currentText = textareaRef.current.value;
            setTextInput(currentText);
            console.log('Current text in textarea:', currentText);
        }
    }, []); // 注意：这里的空数组表示仅在组件挂载时执行
    if (userInfo2.applytype === null || userInfo2.applytype === '') {
        userInfo2.applytype = 'React';
        console.log('Applytype set to:', 'React');
    }
    else {
        console.log('Applytype has value is:', userInfo2.applytype);
    }
    const handleSetMianImage = (index) => {
        dispatch((0, userInfo2Actions_1.setMainImage)(index));
        console.log('index:', index);
        console.log('mainImageIndex:', mainImageIndex);
    };
    const handleRemoveImage = (index) => {
        dispatch((0, userInfo2Actions_1.removeImage)(index));
    };
    const handleRotateLargeImage = (index, degrees) => {
        if (selectedImage) {
            dispatch((0, userInfo2Actions_1.rotateImage)(index, degrees));
            console.log('index:', index, 'degrees:', degrees);
        }
    };
    const handleRotateImage = (index, degrees) => {
        dispatch((0, userInfo2Actions_1.rotateImage)(index, degrees));
        console.log('index:', index, 'degrees:', degrees);
    };
    const handleThumbnailHover = (image) => {
        setSelectedImage(image);
        console.log('handleThumbnailHover0000:');
    };
    const handleThumbnailLeave = () => {
        setSelectedImage(null);
        console.log('handleThumbnailLeave11111:');
    };
    const handleThumbnailClick = (image) => {
        setSelectedImage(image);
    };
    const handleLargePictureClose = () => {
        setSelectedImage(null);
    };
    const handlePrevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + userInfo2.uploadedImages.length) % userInfo2.uploadedImages.length);
    };
    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % userInfo2.uploadedImages.length);
    };
    const handleApplytypeChange = (e) => {
        dispatch((0, userInfo2Actions_1.updateApplytype)(e.target.value));
        console.log('Applytype is:', e.target.value);
    };
    const handleRequirementsChange = (e) => {
        console.log('Requirements is:', e.target.value);
        const newValue = e.target.value;
        console.log('Requirements newValue is:', newValue);
        dispatch((0, userInfo2Actions_1.updateRequirements)(e.target.value));
        // 在这里进行字符数和特殊字符串的检查
        if (newValue.length >= 10 && newValue.length <= 20000) {
            setTextInput(newValue);
            console.log('Requirements textInput0 is:', newValue);
            //localStorage.setItem('previousText', newValue);
        }
        else {
            setTextInput("");
            console.log('Requirements textInput1 is:', "");
        }
        // 根据输入是否为空动态设置CSS类
    };
    const inputClassName = textInput === '' ? 'RequirementError' : '';
    const handleNextPageClick = (event) => {
        if (textInput !== '') {
            // 在这里可以进行其他处理，如果需要的话
            console.log('Navigation allowed');
        }
        else {
            // 如果输入为空，阻止导航，并进行一些处理，例如显示错误消息
            event.preventDefault();
            alert(requirementErrorMessage);
            console.log('Navigation not allowed - input is empty');
        }
    };
    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            // 检查文件大小
            const maxSize = 3 * 1024 * 1024; // 3MB
            // 检查文件类型
            const allowedTypes = [
                'image/png',
                'image/jpg',
                'image/jpeg',
                'image/gif',
                'image/bmp',
                'image/tiff',
                'image/tif',
                'image/svg',
            ];
            if (!allowedTypes.includes(file.type)) {
                alert('Please select a valid image file bmp,gif,png,svg,tif/tiff or jpeg/jpg');
                return;
            }
            else if (file.size > maxSize) {
                alert('File size cannot more than 3MB');
                event.target.value = '';
                //setPreviewUrl(null);
                //setSelectedFile(null);
                return;
            }
            else {
                // 读取文件并生成缩略图
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewUrl(reader.result);
                    console.log('previewUrlpreviewUrlpreviewUrlpreviewUr000000:', previewUrl);
                    console.log('reader.result as string000000:', reader.result);
                    const imageInfo = {
                        file,
                        fileName: file.name,
                        fileSize: file.size,
                        filePreviewUrl: reader.result,
                    };
                    // 检查已上传的图片数量是否超过3张
                    const uploadedImagesCount = userInfo2.uploadedImages.filter((image) => image.file !== null || image.filePreviewUrl !== null).length;
                    if (uploadedImagesCount >= 3) {
                        // 提示用户删除一张图片以腾出空间
                        alert('The number of pictures cannot exceed 3. Please delete any picture and upload a new picture.');
                        return;
                    }
                    dispatch((0, userInfo2Actions_1.addImage)(imageInfo)); // 这里假设你使用了Redux来管理状态，addImage 是一个 action creator
                    console.log('imageInfo is:', imageInfo);
                    console.log('userInfo2-01:', userInfo2);
                    console.log('userInfo2-02:', userInfo2);
                };
                reader.readAsDataURL(file);
                setSelectedFile(file);
                console.log('previewUrlpreviewUrlpreviewUrlpreviewUrl1111:', previewUrl);
                console.log('reader.result as string11111:', reader.result);
            }
        }
        else {
            setPreviewUrl(null);
            setSelectedFile(null);
        }
    };
    /*
    const handleUpload = () => {
        // 在这里执行上传逻辑，例如使用fetch或axios发送文件到服务器

        // 以下是一个简单的示例，使用FormData对象
        if (selectedFile) {
            const formData = new FormData();
            formData.append('image', selectedFile);

            // 发送POST请求
            fetch('https://example.com/upload', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    // 处理上传成功的响应
                    console.log('Upload successful:', data);
                })
                .catch((error) => {
                    // 处理上传失败的情况
                    console.error('Upload failed:', error);
                });
        }
    };
    */
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(user_apply_2_module_scss_1.default.root, className), children: [(0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(user_apply_2_module_scss_1.default.flowImage2) }), (0, jsx_runtime_1.jsxs)("div", { className: user_apply_2_module_scss_1.default.FromArea, children: [(0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(user_apply_2_module_scss_1.default.FormRow), children: " " }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(user_apply_2_module_scss_1.default.FormRow), children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Select, { "aria-label": "Default select example", value: userInfo2.applytype, className: (0, classnames_1.default)(user_apply_2_module_scss_1.default.Input), onChange: handleApplytypeChange, children: [(0, jsx_runtime_1.jsx)("option", { value: "AWS", children: "AWS" }), (0, jsx_runtime_1.jsx)("option", { value: "Cloud", children: "Cloud" }), (0, jsx_runtime_1.jsx)("option", { value: "Django", children: "Django" }), (0, jsx_runtime_1.jsx)("option", { value: "Docker", children: "Docker" }), (0, jsx_runtime_1.jsx)("option", { value: "Flask", children: "Flask" }), (0, jsx_runtime_1.jsx)("option", { value: "FastAPI", children: "FastAPI" }), (0, jsx_runtime_1.jsx)("option", { value: "Flutter", children: "Flutter" }), (0, jsx_runtime_1.jsx)("option", { value: "Linux", children: "Linux" }), (0, jsx_runtime_1.jsx)("option", { value: "Nodejs", children: "Nodejs" }), (0, jsx_runtime_1.jsx)("option", { value: "NoSQL", children: "NoSQL" }), (0, jsx_runtime_1.jsx)("option", { value: "REST", children: "REST" }), (0, jsx_runtime_1.jsx)("option", { value: "React", children: "React" }), (0, jsx_runtime_1.jsx)("option", { value: "Ruby", children: "Ruby" }), (0, jsx_runtime_1.jsx)("option", { value: "SQL", children: "SQL" }), (0, jsx_runtime_1.jsx)("option", { value: "SpringBoot", children: "SpringBoot" }), (0, jsx_runtime_1.jsx)("option", { value: "Unix", children: "Unix" }), (0, jsx_runtime_1.jsx)("option", { value: "WebProgramming", children: "WebProgramming" }), (0, jsx_runtime_1.jsx)("option", { value: "Others", children: "Others" })] }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(user_apply_2_module_scss_1.default.FormRowSmall) }), (0, jsx_runtime_1.jsx)("h4", { children: "Uploaded Images:" }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(user_apply_2_module_scss_1.default.FormRow) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("ul", { className: user_apply_2_module_scss_1.default.imageGrid, children: userInfo2.uploadedImages.map((image, index) => ((0, jsx_runtime_1.jsxs)("li", { children: [image.filePreviewUrl !== null ? ((0, jsx_runtime_1.jsx)("div", { className: index === mainImageIndex ? user_apply_2_module_scss_1.default.thumbnailContainerMain : user_apply_2_module_scss_1.default.thumbnailContainer, children: (0, jsx_runtime_1.jsx)("img", { src: image.filePreviewUrl, alt: "Preview", 
                                            //onMouseEnter={() => handleThumbnailHover(image.filePreviewUrl)}
                                            style: {
                                                maxWidth: '90%',
                                                maxHeight: '90%',
                                                cursor: 'pointer',
                                                transform: `rotate(${(image.rotation * Math.PI) / 180}rad)`,
                                            }, onClick: () => handleThumbnailClick(image.filePreviewUrl) }) })) : ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(user_apply_2_module_scss_1.default.myImage) })), selectedImage && ((0, jsx_runtime_1.jsxs)("div", { onMouseLeave: handleThumbnailLeave, className: user_apply_2_module_scss_1.default.largeImageContainer, children: [(0, jsx_runtime_1.jsx)("img", { src: userInfo2.uploadedImages[selectedImageIndex].filePreviewUrl, alt: "Selected Image", style: {
                                                    maxWidth: '100%',
                                                    maxHeight: '100%',
                                                    cursor: 'pointer',
                                                    transform: `rotate(${image.rotation}deg)`,
                                                }, onClick: handleLargePictureClose }), (0, jsx_runtime_1.jsxs)("div", { className: user_apply_2_module_scss_1.default.navigationArrows, children: [(0, jsx_runtime_1.jsx)(fa_1.FaArrowLeft, { onClick: handlePrevImage }), (0, jsx_runtime_1.jsx)(fa_1.FaArrowRight, { onClick: handleNextImage })] }), (0, jsx_runtime_1.jsxs)("div", { className: user_apply_2_module_scss_1.default.largeImageButtons, children: [(0, jsx_runtime_1.jsx)("button", { className: user_apply_2_module_scss_1.default.buttonStyle, onClick: () => handleRotateLargeImage(index, 90), children: (0, jsx_runtime_1.jsx)(fa6_1.FaArrowRotateRight, {}) }), (0, jsx_runtime_1.jsx)("button", { className: user_apply_2_module_scss_1.default.buttonStyle, onClick: handleLargePictureClose, children: (0, jsx_runtime_1.jsx)(io_1.IoMdClose, {}) })] })] })), (0, jsx_runtime_1.jsxs)("div", { className: user_apply_2_module_scss_1.default.buttonsContainer, children: [(0, jsx_runtime_1.jsx)("div", { className: user_apply_2_module_scss_1.default.thumbnailIcon, children: (0, jsx_runtime_1.jsx)(ai_1.AiFillHome, { title: "Set to mian picture", onClick: () => handleSetMianImage(index) }) }), (0, jsx_runtime_1.jsx)("div", { className: user_apply_2_module_scss_1.default.thumbnailIcon, children: (0, jsx_runtime_1.jsx)(md_1.MdDelete, { title: "Remove the picture", onClick: () => handleRemoveImage(index) }) }), (0, jsx_runtime_1.jsx)("div", { className: user_apply_2_module_scss_1.default.thumbnailIcon, children: (0, jsx_runtime_1.jsx)(fa6_1.FaArrowRotateRight, { title: "Rotate Image 90 degrees", onClick: () => handleRotateImage(index, 90) }) }), (0, jsx_runtime_1.jsx)("div", { className: user_apply_2_module_scss_1.default.thumbnailIcon, children: (0, jsx_runtime_1.jsx)(lu_1.LuExpand, { title: "Enlarge image", onClick: () => handleThumbnailClick(image.filePreviewUrl) }) })] }), (0, jsx_runtime_1.jsx)("div", { className: user_apply_2_module_scss_1.default.fileInfoContainer, children: (0, jsx_runtime_1.jsxs)("div", { style: { fontSize: '0.7em' }, children: ["File Name: ", image.fileName, (0, jsx_runtime_1.jsx)("br", {}), "File Size: ", image.fileSize / 1048576, " MB"] }) })] }, index))) }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("input", { type: "file", accept: ".png, .jpg, .jpeg, .gif, .bmp, .tiff, .tif, .svg", onChange: handleFileChange }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(user_apply_2_module_scss_1.default.FormRow), children: (0, jsx_runtime_1.jsx)("span", { className: (0, classnames_1.default)(user_apply_2_module_scss_1.default.uploadHintText), children: uploadHint }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(user_apply_2_module_scss_1.default.FormRow), children: " " }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(user_apply_2_module_scss_1.default.FormRow), children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { as: "textarea", ref: textareaRef, rows: 3, placeholder: "Content", value: userInfo2.requirements, onChange: handleRequirementsChange, className: inputClassName }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(user_apply_2_module_scss_1.default.FormRow), children: textInput === '' && (0, jsx_runtime_1.jsx)("p", { className: (0, classnames_1.default)(user_apply_2_module_scss_1.default.RequirementErrorMessage), children: requirementErrorMessage }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(user_apply_2_module_scss_1.default.FormRow), children: " " }), (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(user_apply_2_module_scss_1.default.FormRow), children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/userapply", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "primary", children: "Previous page" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/userapply3", onClick: handleNextPageClick, children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "primary", children: "Next page" }) })] })] })] }));
};
exports.UserApply2 = UserApply2;
