import classNames from 'classnames';
import styles from './test-get-images-arrays.module.scss';
import axios from 'axios';
import React, { useRef, useState, Component, ChangeEvent, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../constants';
import { saveAs } from 'file-saver';
import { MdDelete } from 'react-icons/md';
import { FaArrowRotateRight } from 'react-icons/fa6';
import { LuExpand } from 'react-icons/lu';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';

export interface TestGetImagesArraysProps {
    className?: string;
    fileNames: string[]; // Array of filenames to fetch
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestGetImagesArrays = ({ className, fileNames }: TestGetImagesArraysProps) => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const imageFiles: File[] = [];
    useEffect(() => {
        fetchData();
    }, [fileNames]);

    const fetchData = async () => {
        try {
            const urls: string[] = [];

            for (const fileName of fileNames) {
                const response = await axios.get(`${baseUrl}/get-image/${fileName}/`, {
                    responseType: 'arraybuffer',
                });

                const base64Image = btoa(
                    new Uint8Array(response.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ''
                    )
                );

                const imageDataUrl = `data:image/jpeg;base64,${base64Image}`;
                urls.push(imageDataUrl);

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
                imageFiles.push(file);
            }

            setImageUrls(urls);

            // For example, save the first image file using FileSaver.js
            saveAs(imageFiles[0], 'first_image.jpg');
        } catch (error) {
            console.error('Error fetching image data:', error);
        }
    };

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
        setSelectedImageIndex(
            (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
        );
    };

    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };

    const handleApplytypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        //dispatch(updateApplytype(e.target.value));
        console.log('Applytype is:', e.target.value);
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <ul className={styles.imageGrid}>
                    {imageUrls.map((imageUrl, index) => (
                        <li key={index}>
                            <div className={styles.thumbnailContainer}>
                                <img
                                    src={imageUrl}
                                    alt="Preview"
                                    //onMouseEnter={() => handleThumbnailHover(image.filePreviewUrl)}
                                    style={{
                                        maxWidth: '90%',
                                        maxHeight: '90%',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => handleThumbnailClick(imageUrl)}
                                />
                            </div>
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
                                        }}
                                        onClick={handleLargePictureClose}
                                    />
                                    <div className={styles.fileInfoContainer}>click image to close</div>
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
                                        onClick={() => handleThumbnailClick(imageUrl)}
                                    />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
