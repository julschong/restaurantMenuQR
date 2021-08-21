import React, { useState, useCallback, useRef, useEffect } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const ImageUpload = ({ setImgURL, saving }) => {
    const [upImg, setUpImg] = useState();
    const imgRef = useRef(null);
    const previewCanvasRef = useRef(null);
    const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 1 });
    const [completedCrop, setCompletedCrop] = useState(null);
    const [uploadComplete, setUploadComplete] = useState(false);

    useEffect(() => {
        if (saving) {
            generateDownload(
                previewCanvasRef.current,
                completedCrop,
                setUploadComplete,
                setUpImg,
                setImgURL
            );
        }
    }, [saving, completedCrop, setImgURL]);

    const onSelectFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => setUpImg(reader.result));
            reader.readAsDataURL(e.target.files[0]);
            console.log(e.target.files[0]);
        }
    };

    const onLoad = useCallback((img) => {
        imgRef.current = img;
    }, []);

    useEffect(() => {
        if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
            return;
        }

        const image = imgRef.current;
        const canvas = previewCanvasRef.current;
        const crop = completedCrop;

        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        const ctx = canvas.getContext('2d');
        const pixelRatio = window.devicePixelRatio;

        canvas.width = crop.width * pixelRatio * scaleX;
        canvas.height = crop.height * pixelRatio * scaleY;

        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = 'high';

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width * scaleX,
            crop.height * scaleY
        );
    }, [completedCrop]);

    return (
        <div className="App">
            <div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={onSelectFile}
                    style={{ display: uploadComplete && 'none' }}
                />
            </div>
            {uploadComplete ? (
                <img src={upImg} alt="cropped-img" width={200} />
            ) : (
                <ReactCrop
                    src={upImg}
                    onImageLoaded={onLoad}
                    crop={crop}
                    onChange={(c) => setCrop(c)}
                    onComplete={(c) => setCompletedCrop(c)}
                    style={{ width: 200 }}
                />
            )}

            {!uploadComplete && (
                <div style={{ display: 'none' }}>
                    <canvas
                        ref={previewCanvasRef}
                        // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
                        style={{
                            width: Math.round(completedCrop?.width ?? 0),
                            height: Math.round(completedCrop?.height ?? 0)
                        }}
                    />
                </div>
            )}
        </div>
    );
};

function generateDownload(
    canvas,
    crop,
    setUploadComplete,
    setUpImg,
    setImgURL
) {
    if (!crop || !canvas) {
        return;
    }

    canvas.toBlob(
        (blob) => {
            const previewUrl = window.URL.createObjectURL(blob);

            // const anchor = document.createElement('a');
            // anchor.download = 'cropPreview.png';
            // anchor.href = URL.createObjectURL(blob);
            // anchor.click();
            setUploadComplete(true);
            setUpImg(previewUrl);
            console.log(previewUrl);
            setImgURL(previewUrl);
        },
        'image/png',
        1
    );
}

export default ImageUpload;
