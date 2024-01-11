import classNames from 'classnames';
import styles from './test-get-images-arrays.module.scss';
import { saveAs } from 'file-saver';
import axios from 'axios';
import React, { useRef, useState, Component, ChangeEvent, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../constants';

import { MdDelete } from 'react-icons/md';
import { FaArrowRotateRight } from 'react-icons/fa6';
import { LuExpand } from 'react-icons/lu';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

export interface TestGetImagesArraysProps {
    className?: string;
    fileNames: string[]; // Array of filenames to fetch
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestGetImagesArrays = ({ className, fileNames }: TestGetImagesArraysProps) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleSetMianImage = (index: number) => {
        //dispatch(setMainImage(index));
        console.log('index:', index);
       
    };

    const handleRemoveImage = (index: number) => {
        //dispatch(removeImage(index));
    };

    const handleRotateImage = (index: number, degrees: number) => {
        //dispatch(rotateImage(index, degrees));
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
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + imageFiles.length) % imageFiles.length);
    };

    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imageFiles.length);
    };

    const handleApplytypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        //dispatch(updateApplytype(e.target.value));
        console.log('Applytype is:', e.target.value);
    };
    
    const imageUrls: string[] = [];
    const imageFiles: File[] = [];
    
    useEffect(() => {
        const fetchData = async () => {
            try {
             
                // Use Promise.all to fetch images in parallel
                const responses = await Promise.all(
                    fileNames.map(async (fileName, i) => {
                        const response = await axios.get(`${baseUrl}/get-image/${i + 1}/`, {
                            responseType: 'arraybuffer',
                        });
                        return { fileName, data: response.data };
                    })
                );

                responses.forEach((item) => {
                    const base64Image = btoa(
                        new Uint8Array(item.data).reduce(
                            (data, byte) => data + String.fromCharCode(byte),
                            ''
                        )
                    );

                    const imageDataUrl = `data:image/jpeg;base64,${base64Image}`;
                    imageUrls.push(imageDataUrl);

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
                    const file = new File([blob], item.fileName, { type: 'image/jpeg' });
                    imageFiles.push(file);
                });

                // Now, you have an array of image URLs (imageUrls) and an array of File objects (imageFiles)
                // You can do further processing or save the File objects as needed

                // For example, save the first image file using FileSaver.js
                //saveAs(imageFiles[0], 'first_image.jpg');
            } catch (error) {
                console.error('Error fetching image data:', error);
            }
        };

        // Call the fetchData function
        fetchData();
    }, [fileNames]);

    return <div className={classNames(styles.root, className)}>
        <div>
                    <ul className={styles.imageGrid}>
                        {imageFiles.map((image: any, index) => (
                            <li key={index}>
                                {image.filePreviewUrl !== null ? (
                                    <div className={styles.thumbnailContainer}>
                                        <img
                                            src={imageUrls[index]}
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
                                            src={imageUrls[selectedImageIndex]!}
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
    
    
    </div>;
};
