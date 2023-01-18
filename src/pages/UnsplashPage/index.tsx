import classNames from "classnames";
import { useState, useEffect } from "react";
import IPhoto from "../../interfaces/IPhoto";
import http from "../../services/ws/WsConfig";
import HeaderUnplashPage from "./Header";
import ImagesContentUnsplash from "./ImagesContent";
import style from "./Unsplash.module.scss";

type photoReq = {
    _id: string;
    link: string;
    publicID: string;
    subtitle?: string;
};

const UnsplashPage = () => {
    const [images, setImages] = useState<IPhoto[]>([]);

    const getImages = async () => {
        http.get("images")
            .then((result) => {
                const imagesList: IPhoto[] = result.data.response.map((element: photoReq) => {
                    return {
                        id: element._id,
                        link: element.link,
                        publicID: element.publicID,
                        subtitle: element.subtitle ? element.subtitle : "",
                    };
                });
                setImages(imagesList);
            })
            .catch((err) => {
                throw err;
            });
    };

    useEffect(() => {
        getImages();
    }, []);

    return (
        <div className={classNames(style.unsplashpage, style)}>
            <>
                <HeaderUnplashPage />
                <ImagesContentUnsplash images={images} />
            </>
        </div>
    );
};

export default UnsplashPage;
