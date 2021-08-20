import { useState } from 'react';
import ImageUploader from 'react-images-upload';

const PictureUpload = (props) => {
    const [pictures, setPictures] = useState([]);
    const [pictureURL, setPictureURL] = useState('');

    const onDrop = (picture) => {
        setPictures([...pictures, picture]);
        // console.log(picture);
        setPictureURL(URL.createObjectURL(picture[0]));
    };

    return (
        <>
            {pictures.length === 0 ? (
                <ImageUploader
                    {...props}
                    withIcon={false}
                    onChange={onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    withPreview
                    label=""
                />
            ) : (
                <img src={pictureURL} alt="dish" />
            )}
        </>
    );
};

export default PictureUpload;
