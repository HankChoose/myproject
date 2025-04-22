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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserApply2 = void 0;
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
const react_1 = __importStar(require("react"));
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
    return (<div className={(0, classnames_1.default)(user_apply_2_module_scss_1.default.root, className)}>
            <div className={(0, classnames_1.default)(user_apply_2_module_scss_1.default.flowImage2)}></div>
            <div className={user_apply_2_module_scss_1.default.FromArea}>
                <div className={(0, classnames_1.default)(user_apply_2_module_scss_1.default.FormRow)}> </div>
                <div className={(0, classnames_1.default)(user_apply_2_module_scss_1.default.FormRow)}>
                    <react_bootstrap_1.Form.Select aria-label="Default select example" value={userInfo2.applytype} className={(0, classnames_1.default)(user_apply_2_module_scss_1.default.Input)} onChange={handleApplytypeChange}>
                        <option value="AWS">AWS</option>
                        <option value="Cloud">Cloud</option>
                        <option value="Django">Django</option>
                        <option value="Docker">Docker</option>
                        <option value="Flask">Flask</option>
                        <option value="FastAPI">FastAPI</option>
                        <option value="Flutter">Flutter</option>
                        <option value="Linux">Linux</option>
                        <option value="Nodejs">Nodejs</option>
                        <option value="NoSQL">NoSQL</option>
                        <option value="REST">REST</option>
                        <option value="React">React</option>
                        <option value="Ruby">Ruby</option>
                        <option value="SQL">SQL</option>
                        <option value="SpringBoot">SpringBoot</option>
                        <option value="Unix">Unix</option>
                        <option value="WebProgramming">WebProgramming</option>
                        <option value="Others">Others</option>

                       
                    </react_bootstrap_1.Form.Select>
                </div>
                <div className={(0, classnames_1.default)(user_apply_2_module_scss_1.default.FormRowSmall)}></div>
                <h4>Uploaded Images:</h4>
                <div className={(0, classnames_1.default)(user_apply_2_module_scss_1.default.FormRow)}>
                </div>
                <div>
                    <ul className={user_apply_2_module_scss_1.default.imageGrid}>
                        {userInfo2.uploadedImages.map((image, index) => (<li key={index}>
                                {image.filePreviewUrl !== null ? (<div className={index === mainImageIndex ? user_apply_2_module_scss_1.default.thumbnailContainerMain : user_apply_2_module_scss_1.default.thumbnailContainer}>
                                        <img src={image.filePreviewUrl} alt="Preview" 
            //onMouseEnter={() => handleThumbnailHover(image.filePreviewUrl)}
            style={{
                    maxWidth: '90%',
                    maxHeight: '90%',
                    cursor: 'pointer',
                    transform: `rotate(${(image.rotation * Math.PI) / 180}rad)`,
                }} onClick={() => handleThumbnailClick(image.filePreviewUrl)}/>
                                    </div>) : (<div className={(0, classnames_1.default)(user_apply_2_module_scss_1.default.myImage)}></div>)}

                                {selectedImage && (<div onMouseLeave={handleThumbnailLeave} className={user_apply_2_module_scss_1.default.largeImageContainer}>
                                        <img src={userInfo2.uploadedImages[selectedImageIndex].filePreviewUrl} alt="Selected Image" style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    cursor: 'pointer',
                    transform: `rotate(${image.rotation}deg)`,
                }} onClick={handleLargePictureClose}/>
                                       
                                         <div className={user_apply_2_module_scss_1.default.navigationArrows}>
                                            <fa_1.FaArrowLeft onClick={handlePrevImage}/>
                                            <fa_1.FaArrowRight onClick={handleNextImage}/>
                                        </div>
                                        <div className={user_apply_2_module_scss_1.default.largeImageButtons}>
                                        <button className={user_apply_2_module_scss_1.default.buttonStyle} onClick={() => handleRotateLargeImage(index, 90)}> 
                                            <fa6_1.FaArrowRotateRight />
                                        </button>
                                        <button className={user_apply_2_module_scss_1.default.buttonStyle} onClick={handleLargePictureClose}>
                                            <io_1.IoMdClose />
                                        </button>
                                        
                                    </div>
                                    </div>)}

                                <div className={user_apply_2_module_scss_1.default.buttonsContainer}>
                                    <div className={user_apply_2_module_scss_1.default.thumbnailIcon}>
                                        <ai_1.AiFillHome title="Set to mian picture" onClick={() => handleSetMianImage(index)}/>
                                    </div>
                                    <div className={user_apply_2_module_scss_1.default.thumbnailIcon}>
                                        <md_1.MdDelete title="Remove the picture" onClick={() => handleRemoveImage(index)}/>
                                    </div>
                                    <div className={user_apply_2_module_scss_1.default.thumbnailIcon}>
                                        <fa6_1.FaArrowRotateRight title="Rotate Image 90 degrees" onClick={() => handleRotateImage(index, 90)}/>
                                    </div>
                                    <div className={user_apply_2_module_scss_1.default.thumbnailIcon}>
                                        <lu_1.LuExpand title="Enlarge image" onClick={() => handleThumbnailClick(image.filePreviewUrl)}/>
                                    </div>

                                </div>

                                <div className={user_apply_2_module_scss_1.default.fileInfoContainer}>
                                    <div style={{ fontSize: '0.7em' }}>
                                    File Name: {image.fileName}
                                    <br />
                                    File Size: {image.fileSize / 1048576} MB
                                    {/* You can also display other properties as needed */}
                                     </div>
                                </div>
                            </li>))}
                    </ul>
                </div>
                <div>
                    <input type="file" accept=".png, .jpg, .jpeg, .gif, .bmp, .tiff, .tif, .svg" onChange={handleFileChange}/>
                </div>
                <div className={(0, classnames_1.default)(user_apply_2_module_scss_1.default.FormRow)}><span className={(0, classnames_1.default)(user_apply_2_module_scss_1.default.uploadHintText)}>{uploadHint}</span></div>
                <div className={(0, classnames_1.default)(user_apply_2_module_scss_1.default.FormRow)}> </div>
                <div className={(0, classnames_1.default)(user_apply_2_module_scss_1.default.FormRow)}>
                    <react_bootstrap_1.Form.Control as="textarea" ref={textareaRef} rows={3} placeholder="Content" value={userInfo2.requirements} onChange={handleRequirementsChange} className={inputClassName}/>
                  
                </div>
                <div className={(0, classnames_1.default)(user_apply_2_module_scss_1.default.FormRow)}>
                  {textInput === '' && <p className={(0, classnames_1.default)(user_apply_2_module_scss_1.default.RequirementErrorMessage)}>{requirementErrorMessage}</p>}
                </div>

                <div className={(0, classnames_1.default)(user_apply_2_module_scss_1.default.FormRow)}> </div>
                <div className={(0, classnames_1.default)(user_apply_2_module_scss_1.default.FormRow)}>
                    <react_router_dom_1.Link to="/react/userapply">
                        <react_bootstrap_1.Button variant="primary">Previous page</react_bootstrap_1.Button>
                    </react_router_dom_1.Link>
                    <react_router_dom_1.Link to="/react/userapply3" onClick={handleNextPageClick}>
                        <react_bootstrap_1.Button variant="primary">Next page</react_bootstrap_1.Button>
                    </react_router_dom_1.Link>
                </div>
            </div>
        </div>);
};
exports.UserApply2 = UserApply2;
