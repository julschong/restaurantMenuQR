import { Image } from '@chakra-ui/image';
import { useState } from 'react';
import ImageUploader from 'react-images-upload';

const ImageUpload = () => {
    const [pictures, setPictures] = useState([]);
    const [dataURL, setURL] = useState([]);

    const onDrop = (pictureFiles, pictureDataURLs) => {
        setPictures(pictureFiles);
        setURL(pictureDataURLs);
    };

    return (
        <>
            <ImageUploader
                withIcon={true}
                buttonText="Choose images"
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif', '.jfif']}
                maxFileSize={5242880}
            />
            {dataURL.map((el, i) => (
                <Image src={el} key={`${pictures[i].name}${i}`} />
            ))}
        </>
    );
};

export default ImageUpload;
