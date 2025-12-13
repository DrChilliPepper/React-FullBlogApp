import React from 'react'
import { IKImage } from 'imagekitio-react'

const Image = ({ src, className = "", w, h, alt }) => {
    if (src?.startsWith("http")) {
        return (
            <img
                src={src}
                className={className}
                alt={alt}
                width={w}
                height={h}
                loading="lazy"
            />
        );
    }

    return (
        <IKImage
            urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
            path={src}
            loading="lazy"
            className={className}
            alt={alt}
            transformation={[
                {
                    width: w,
                    height: h,
                    crop: "maintain_ratio",
                    focus: "auto",
                }
            ]}
            lqip={{ active: true, quality: 20 }}
        />
    );
};

export default Image;
