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
    const [imageUrls, setImageUrls] = useState<string[]>([]);

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
            }

            setImageUrls(urls);
        } catch (error) {
            console.error('Error fetching image data:', error);
        }
    }
    
    
    return <div className={classNames(styles.root, className)}>
    <div>
        {imageUrls.map((imageUrl, index) => (
                <div key={index}>
                    <img src={imageUrl} alt={`Preview ${index}`} />
                    {/* Other elements to display file information */}
                </div>
            ))}
    </div>
    
    
    </div>;
};
