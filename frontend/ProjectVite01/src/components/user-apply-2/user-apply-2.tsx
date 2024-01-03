import classNames from 'classnames';
import styles from './user-apply-2.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form }from 'react-bootstrap';

import { useSelector, useDispatch , connect } from "react-redux";
import { addImage,resetImages,removeImage, rotateImage,updateApplytype, updateRequirements } from "../../actions/userInfo2Actions";

import axios from "axios";
import React, { useRef, useState, Component, ChangeEvent } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

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
        uploadedImages:[];
    };
};


/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserApply2 = ({ className}: UserApply2Props) => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const userInfo = useSelector((state:RootState) => state.userInfo);
    const userInfo2 = useSelector((state: RootState2) => state.userInfo2);

    console.log("userInfo-1:",userInfo);
    console.log("userInfo2-1:",userInfo2);

    const dispatch = useDispatch();
   
    const handleApplytypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(updateApplytype(e.target.value));
        console.log("Applytype is:", e.target.value);
    }

    const handleRequirementsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateRequirements(e.target.value));
        console.log("Requirements is:", e.target.value);
    };

    userInfo2.applytype="React";

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files && files.length > 0) {
            const file = files[0];

            // 检查文件大小
            const maxSize = 3 * 1024 * 1024; // 3MB
            // 检查文件类型
            const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/bmp', 'image/tiff', 'image/tif', 'image/svg'];
            
            if (!allowedTypes.includes(file.type)) {
                alert('Please select a valid image file bmp,gif,png,svg,tif/tiff or jpeg/jpg');
                return;

            }else if (file.size > maxSize){
                alert('File size cannot more than 3MB');
                //setPreviewUrl(null);
                //setSelectedFile(null);
                return;
            }else{

                // 读取文件并生成缩略图
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewUrl(reader.result as string);
                    console.log("previewUrlpreviewUrlpreviewUrlpreviewUr000000:",previewUrl);
                    console.log("reader.result as string000000:",reader.result as string);
                
                    const imageInfo = {
                        file,
                        fileName: file.name,
                        fileSize: file.size,
                        filePreviewUrl:reader.result as string,
                    };

                    //dispatch(resetImages());
                    dispatch(addImage(imageInfo));
                    console.log("imageInfo is:", imageInfo);
                    console.log("userInfo2-01:",userInfo2);
                    console.log("userInfo2-02:",userInfo2);
                };

                reader.readAsDataURL(file);
                setSelectedFile(file);
                console.log("previewUrlpreviewUrlpreviewUrlpreviewUrl1111:",previewUrl);
                console.log("reader.result as string11111:",reader.result as string);
                
            }

        } else {
            setPreviewUrl(null);
            setSelectedFile(null);
        }
    };

    const handleRemoveImage = (index: number) => {
        dispatch(removeImage(index));
    };

    const handleRotateImage = (index: number) => {
        dispatch(rotateImage(index));
    };

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
            .then(response => response.json())
            .then(data => {
            // 处理上传成功的响应
            console.log('Upload successful:', data);
            })
            .catch(error => {
            // 处理上传失败的情况
            console.error('Upload failed:', error);
            });
        }
    };

    return <div className={classNames(styles.root, className)}>
        <div className={classNames(styles.flowImage2)}></div>
        <div className={styles.FromArea}>
            <div className={classNames(styles.FormRow)}> </div>
                <div className={classNames(styles.FormRow)}>
                    
                    <Form.Select 
                        aria-label="Default select example"
                        value={userInfo2.applytype} 
                        className={classNames(styles.Input)} 
                        onChange={handleApplytypeChange}>
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
                <ul>
                    {userInfo2.uploadedImages.map((image:any, index) => (
                    <li key={index}>
                         {image.filePreviewUrl !== null ? (
                            <img
                                src={image.filePreviewUrl}
                                alt="Preview"
                                style={{ maxWidth: '100%', maxHeight: '200px' }}
                            />
                        ) : (
                            <div className={classNames(styles.myImage)}></div>
                        )}
                        <button onClick={() => handleRemoveImage(index)}>Remove</button>
                        <button onClick={() => handleRotateImage(index)}>Rotate</button>
                        <br />
                        <strong>File Name:</strong> {image.fileName}
                        <br />
                        <strong>File Size:</strong> {image.fileSize/1048576} MB
                        {/* You can also display other properties as needed */}
                        
                    </li>
                    ))}
                </ul>
            </div>
            <div>
                 <h3>Uploaded Images</h3> <input type="file" accept=".png, .jpg, .jpeg, .gif, .bmp, .tiff, .tif, .svg"  onChange={handleFileChange} />
            </div>
            <div className={classNames(styles.FormRow)}> </div>
            <div className={classNames(styles.FormRow)}> </div>
            <div className={classNames(styles.FormRow)}>
              <Form.Control as="textarea" rows={3} placeholder="Requirements" value={userInfo2.requirements} onChange={handleRequirementsChange} />
            </div>
            <div className={classNames(styles.FormRow)}> </div>
            <div className={classNames(styles.FormRow)}> </div>
             <div className={classNames(styles.FormRow)}> 
               <Link to="/react/userapply3"><Button variant="primary">Next page</Button></Link> 
               <Link to="/react/userapply"><Button variant="primary">Previous page</Button></Link>    
            </div>         
          
        </div>

    </div>;
};
