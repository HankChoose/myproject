import classNames from 'classnames';
import styles from './test-get-images.module.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export interface TestGetImagesProps {
    className?: string;
   
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestGetImages: React.FC<TestGetImagesProps> = ({ className }: TestGetImagesProps) => {
    const [imageData, setImageData] = useState<string | null>(null);
    const imageInfo = '20240108_070912__20210715144345_image_1.jpg';
    useEffect(() => {
        const fetchImageData = async () => {
            try {
                const response = await axios.get(`/api/get_image/${imageInfo}`, {
                    responseType: 'arraybuffer',
                });

                const base64Image = btoa(
                    new Uint8Array(response.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ''
                    )
                );

                const imageDataUrl = `data:image/jpeg;base64,${base64Image}`;
                setImageData(imageDataUrl);
            } catch (error) {
                console.error('Error fetching image data:', error);
            }
        };

        fetchImageData();
    }, [imageInfo]);

    return (
        <div className={classNames(styles.root, className)}>
            {imageData && <img src={imageData!} alt="Image" />}
        </div>
    );
};
