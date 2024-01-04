import classNames from 'classnames';
import styles from './user-apply-2.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch, connect } from 'react-redux';
import {
    addImage,
    setMainImage,
    resetImages,
    removeImage,
    rotateImage,
    updateApplytype,
    updateRequirements,
} from '../../actions/userInfo2Actions';

import { MdDelete } from 'react-icons/md';
import { FaArrowRotateRight } from 'react-icons/fa6';
import { LuExpand } from 'react-icons/lu';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

import axios from 'axios';
import React, { useRef, useState, Component, ChangeEvent, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

import imageSize from 'image-size';

export interface UserApply2Props {
    className?: string;
    //callbackFunction?: (data: string) => void; // 定义回调函数类型
}

type RootState = {
    userInfo: {
        name: string;
        email: string;
    };
};

type RootState2 = {
    userInfo2: {
        applytype: string;
        requirements: string;
        uploadedImages: {
            file: null | File;
            fileName: string;
            fileSize: number;
            filePreviewUrl: null | string;
            rotation: number;
        }[];
        mainImageId: number;
    };
};

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserApply2 = ({ className }: UserApply2Props) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);


    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const userInfo = useSelector((state: RootState) => state.userInfo);
    const userInfo2 = useSelector((state: RootState2) => state.userInfo2);

    console.log('userInfo-1:', userInfo);
    console.log('userInfo2-1:', userInfo2);

    const dispatch = useDispatch();
    const mainImageIndex = useSelector((state: RootState2) => state.userInfo2.mainImageId);

    if (userInfo2.applytype === null || userInfo2.applytype === '') {
        userInfo2.applytype = 'React';
        console.log('Applytype set to:', 'React');
    } else {
        console.log('Applytype has value is:', userInfo2.applytype);
    }

    const handleSetMianImage = (index: number) => {
        dispatch(setMainImage(index));
        console.log('index:', index);
        console.log('mainImageIndex:', mainImageIndex);
    };

    const handleRemoveImage = (index: number) => {
        dispatch(removeImage(index));
    };

    const handleRotateImage = (index: number, degrees: number) => {
        dispatch(rotateImage(index, degrees));
        console.log('index:', index, 'degrees:', degrees);
    };

    const handleThumbnailHover = (image: any) => {
        setSelectedImage(image);
        console.log('handleThumbnailHover0000:');
    };

    const handleThumbnailLeave = () => {
        setSelectedImage(null);
        console.log('handleThumbnailLeave11111:');
    };

    const handleThumbnailClick = (image: any) => {
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

    const handleApplytypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(updateApplytype(e.target.value));
        console.log('Applytype is:', e.target.value);
    };

    const handleRequirementsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateRequirements(e.target.value));
        console.log('Requirements is:', e.target.value);
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
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
            } else if (file.size > maxSize) {
                alert('File size cannot more than 3MB');
                event.target.value = '';
                //setPreviewUrl(null);
                //setSelectedFile(null);
                return;
            } else {
                // 读取文件并生成缩略图
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewUrl(reader.result as string);
                    console.log('previewUrlpreviewUrlpreviewUrlpreviewUr000000:', previewUrl);
                    console.log('reader.result as string000000:', reader.result as string);

                    const imageInfo = {
                        file,
                        fileName: file.name,
                        fileSize: file.size,
                        filePreviewUrl: reader.result as string,
                    };

                    const isDefaultPlaceholder = userInfo2.uploadedImages.some(
                        (placeholder) =>
                            placeholder.file === null && placeholder.filePreviewUrl === null
                    );
                    console.log('isDefaultPlaceholder:', isDefaultPlaceholder);

                    // 检查已上传的图片数量是否超过3张
                    const uploadedImagesCount = userInfo2.uploadedImages.filter(
                        (image) => image.file !== null || image.filePreviewUrl !== null
                    ).length;
                    if (uploadedImagesCount >= 3) {
                        // 提示用户删除一张图片以腾出空间
                        alert('已上传的图片数量已超过3张,请删除一张图片以腾出空间');
                        return;
                    }

                    if (!isDefaultPlaceholder) {
                        // 执行上传操作，将新图片添加到 uploadedImages 数组
                        dispatch(addImage(imageInfo)); // 这里假设你使用了Redux来管理状态，addImage 是一个 action creator
                    } else {
                        // 提示用户选择有效的图片，因为新上传的图片是默认占位图片
                        alert('无法添加更多图片或新图片不符合条件');
                    }

                    console.log('imageInfo is:', imageInfo);
                    console.log('userInfo2-01:', userInfo2);
                    console.log('userInfo2-02:', userInfo2);
                };

                reader.readAsDataURL(file);
                setSelectedFile(file);
                console.log('previewUrlpreviewUrlpreviewUrlpreviewUrl1111:', previewUrl);
                console.log('reader.result as string11111:', reader.result as string);
            }
        } else {
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
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames(styles.flowImage2)}></div>
            <div className={styles.FromArea}>
                <div className={classNames(styles.FormRow)}> </div>
                <div className={classNames(styles.FormRow)}>
                    <Form.Select
                        aria-label="Default select example"
                        value={userInfo2.applytype}
                        className={classNames(styles.Input)}
                        onChange={handleApplytypeChange}
                    >
                        <option value="Django">Django</option>
                        <option value="Flask">Flask</option>
                        <option value="FastAPI">FastAPI</option>
                        <option value="Flutter">Flutter</option>
                        <option value="React">React</option>
                        <option value="SpringBoot">SpringBoot</option>
                        <option value="Web">Web</option>
                    </Form.Select>
                </div>
                <div className={classNames(styles.FormRow)}></div>

                <div>
                    <ul className={styles.imageGrid}>
                        {userInfo2.uploadedImages.map((image: any, index) => (
                            <li key={index}>
                                {image.filePreviewUrl !== null ? (
                                    <div className={index === mainImageIndex ? styles.thumbnailContainerMain:styles.thumbnailContainer}>
                                        <img
                                            src={image.filePreviewUrl}
                                            alt="Preview"
                                            //onMouseEnter={() => handleThumbnailHover(image.filePreviewUrl)}
                                            style={{
                                                maxWidth: '90%',
                                                maxHeight: '90%',
                                                cursor: 'pointer',
                                                transform: `rotate(${
                                                    (image.rotation * Math.PI) / 180
                                                }rad)`,
                                            }}
                                            onClick={() =>
                                                handleThumbnailClick(image.filePreviewUrl)
                                            }
                                        />
                                    </div>
                                ) : (
                                    <div className={classNames(styles.myImage)}></div>
                                )}

                                {selectedImage && (
                                    <div
                                        onMouseLeave={handleThumbnailLeave}
                                        className={styles.largeImageContainer}
                                    >
                                        <img
                                            src={userInfo2.uploadedImages[selectedImageIndex]!.filePreviewUrl!}
                                            alt="Selected Image"
                                            style={{
                                                maxWidth: '100%',
                                                maxHeight: '100%',
                                                cursor: 'pointer',
                                                transform: `rotate(${image.rotation}deg)`,
                                            }}
                                            onClick={handleLargePictureClose}
                                        />
                                        <div className={styles.fileInfoContainer}>
                                            click image to close
                                        </div>
                                         <div className={styles.navigationArrows}>
                                            <FaArrowLeft onClick={handlePrevImage} />
                                            <FaArrowRight onClick={handleNextImage} />
                                        </div>
                                    </div>
                                )}

                                <div className={styles.buttonsContainer}>
                                    <div className={styles.thumbnailIcon}>
                                        <AiFillHome
                                            title="Set to mian picture"
                                            onClick={() => handleSetMianImage(index)}
                                        />
                                    </div>
                                    <div className={styles.thumbnailIcon}>
                                        <MdDelete
                                            title="Remove the picture"
                                            onClick={() => handleRemoveImage(index)}
                                        />
                                    </div>
                                    <div className={styles.thumbnailIcon}>
                                        <FaArrowRotateRight
                                        title="Rotate Image 90 degrees" 
                                        onClick={() => handleRotateImage(index, 90)}
                                    />
                                    </div>
                                    <div className={styles.thumbnailIcon}>
                                        <LuExpand 
                                            title="Enlarge image"
                                            onClick={() => handleThumbnailClick(image.filePreviewUrl)}
                                        />
                                    </div>

                                </div>

                                <div className={styles.fileInfoContainer}>
                                    <div style={{ fontSize: '0.7em' }}>
                                    File Name: {image.fileName}
                                    <br />
                                    File Size: {image.fileSize / 1048576} MB
                                    {/* You can also display other properties as needed */}
                                     </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Uploaded Images</h3>
                    <input
                        type="file"
                        accept=".png, .jpg, .jpeg, .gif, .bmp, .tiff, .tif, .svg"
                        onChange={handleFileChange}
                    />
                </div>
                <div className={classNames(styles.FormRow)}> </div>
                <div className={classNames(styles.FormRow)}> </div>
                <div className={classNames(styles.FormRow)}>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Requirements"
                        value={userInfo2.requirements}
                        onChange={handleRequirementsChange}
                    />
                </div>
                <div className={classNames(styles.FormRow)}> </div>
                <div className={classNames(styles.FormRow)}> </div>
                <div className={classNames(styles.FormRow)}>
                    <Link to="/react/userapply">
                        <Button variant="primary">Previous page</Button>
                    </Link>
                    <Link to="/react/userapply3">
                        <Button variant="primary">Next page</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
