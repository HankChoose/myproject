import classNames from 'classnames';
import styles from './test-get-images-arrays.module.scss';
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
export const TestGetImagesArrays = ({ className,fileNames }: TestGetImagesArraysProps) => {
    
    const imageUrls: string[] = [];
    const imageFiles: File[] = [];
    useEffect(() => {
        
        fetchData();
    }, [fileNames]);

    const fetchData = async () => {
        try {
        

        // Fetch multiple images (in this example, fetching 3 images)
        for (let i = 0; i < fileNames.length; i++) {
            const response = await axios.get(`${baseUrl}/get-image/${fileNames}`, {
                responseType: 'arraybuffer',
            });

            const base64Image = btoa(
                new Uint8Array(response.data).reduce(
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

            // Create a File object with a unique name for each image
            const fileName = `image_${i}.jpg`;
            const file = new File([blob], fileName, { type: 'image/jpeg' });
            imageFiles.push(file);
        }

        // Now, you have an array of image URLs (imageUrls) and an array of File objects (imageFiles)
        // You can do further processing or save the File objects as needed

        // For example, save the first image file using FileSaver.js
        //saveAs(imageFiles[0], 'first_image.jpg');
        } catch (error) {
            console.error('Error fetching image data:', error);
        }
    }
    
    
    return <div className={classNames(styles.root, className)}>
    <div>
        {imageFiles.map((image, index) => (
            <div key={index}>
                <img src={imageUrls[index]} alt={`Preview ${index}`} />
                {/* 其他显示文件信息的元素 */}
            </div>
        ))}
    </div>
    
    
    </div>;
};
