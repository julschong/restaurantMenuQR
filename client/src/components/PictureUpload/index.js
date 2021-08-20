import { useState } from 'react';
import ImageUploader from 'react-images-upload';
import { AiOutlineClose } from 'react-icons/ai';

import './PictureUpload.scss';

const PictureUpload = (props) => {
    const [pictures, setPictures] = useState([]);
    const [pictureURL, setPictureURL] = useState(props.imgSrc);

    const onDrop = (picture) => {
        setPictures([...pictures, picture]);
        // console.log(picture);
        setPictureURL(URL.createObjectURL(picture[0]));
    };

    return (
        <div className="image-upload-container">
            {!pictureURL ? (
                <ImageUploader
                    {...props}
                    withIcon={false}
                    onChange={onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    withPreview
                    label=""
                    buttonText="Choose image"
                    className="uploader-plugin"
                />
            ) : (
                <>
                    <button
                        className="close-button"
                        onClick={() => {
                            if (
                                window.confirm(
                                    'do you want to remove the image?'
                                )
                            ) {
                                setPictureURL(null);
                            }
                        }}
                    >
                        <AiOutlineClose />
                    </button>
                    <img src={pictureURL} alt="dish" />
                </>
            )}
        </div>
    );
};

export default PictureUpload;
