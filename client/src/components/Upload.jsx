import React from 'react'
import { toast } from 'react-toastify'
import { IKContext, IKUpload } from 'imagekitio-react'
import { useRef } from 'react';

const authenticator = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/posts/upload-auth`);
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        const { signature, expire, token } = data;
        return { signature, expire, token };
    } catch (error) {
        throw new Error(`Authentication request failed: ${error.message}`)
    }
}

const Upload = ({ children, type, setProgress, setData }) => {

    const ref = useRef(null)

    const handleFileSelect = (e) => {
        const files = Array.from(e.target.files);

        if (files.length === 0) return;

        const maxSize = type === "video"
            ? 300 * 1024 * 1024
            : 50 * 1024 * 1024;
        const hasTooLargeFile = files.some(file => file.size > maxSize);

        if (hasTooLargeFile) {
            const tooLargeFile = files.find(file => file.size > maxSize);
            toast.error(
                `${tooLargeFile.name} is too large! Max allowed: ${type === "video" ? "300MB" : "20MB"
                }.`
            );
            e.target.value = "";
            return;
        }
    };

    const onError = (err) => {
        console.log(err)
        toast.error("Image upload failed!")
    }
    const onSuccess = (res) => {
        console.log(res)
        setData(res.url)
    }
    const onUploadProgress = (progress) => {
        console.log(progress)
        setProgress(Math.round((progress.loaded / progress.total) * 100))
    }
    return (
        <IKContext
            publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
            urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
            authenticator={authenticator}>
            <IKUpload
                multiple={false}
                useUniqueFileName
                onError={onError}
                onSuccess={onSuccess}
                onUploadProgress={onUploadProgress}
                className='hidden'
                ref={ref}
                onChange={handleFileSelect}
                accept={`${type}/*`}
            />
            <div className='cursor-pointer' onClick={() => ref.current.click()}>
                {children}
            </div>
        </IKContext>
    )
}

export default Upload
