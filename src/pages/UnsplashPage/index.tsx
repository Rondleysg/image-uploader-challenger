import classNames from "classnames";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import IPhoto from "../../interfaces/IPhoto";
import http from "../../services/ws/WsConfig";
import TabComponentUploadImage from "../UploadImagePage";
import HeaderUnplashPage from "./Header";
import ImagesContentUnsplash from "./ImagesContent";
import style from "./unsplash.module.scss";

type photoReq = {
    _id: string;
    link: string;
    publicID: string;
    subtitle?: string;
};

const UnsplashPage = () => {
    const [images, setImages] = useState<IPhoto[]>([]);
    const [visibility, setVisibility] = useState(false);
    const [textSearch, setTextSearch] = useState("");

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
                setImages(imagesList.reverse());
            })
            .catch((err) => {
                throw err;
            });
    };

    useEffect(() => {
        getImages();
    }, []);

    useEffect(() => {
        const body = document.querySelector("body");
        if (visibility) {
            body?.classList.add("bodyInUpload");
            window.scrollTo({
                top: 0,
            });
        } else {
            body?.classList.remove("bodyInUpload");
        }
    }, [visibility]);

    return (
        <div className={classNames(style.unsplashpage, style)}>
            <>
                <HeaderUnplashPage
                    setTextSearch={setTextSearch}
                    onClickButton={() => setVisibility(true)}
                />
                {images.length < 1 ? (
                    <Loading title="Loading..." />
                ) : textSearch !== "" ? (
                    <ImagesContentUnsplash
                        images={images.filter((image) =>
                            image.subtitle?.toLowerCase().includes(textSearch.toLowerCase())
                        )}
                        setImages={setImages}
                    />
                ) : (
                    <ImagesContentUnsplash images={images} setImages={setImages} />
                )}
                {visibility && (
                    <TabComponentUploadImage
                        onClose={() => {
                            setVisibility(false);
                        }}
                        images={images}
                        setImages={setImages}
                    />
                )}
            </>
        </div>
    );
};

export default UnsplashPage;
