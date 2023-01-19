import classNames from "classnames";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import IPhoto from "../../../interfaces/IPhoto";
import http from "../../../services/ws/WsConfig";
import style from "./ImagesContent.module.scss";

interface ImagesContentUnsplashProps {
    images: IPhoto[];
    setImages: React.Dispatch<React.SetStateAction<IPhoto[]>>;
}

const ImagesContentUnsplash = ({ images, setImages }: ImagesContentUnsplashProps) => {
    const showSubtitle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.currentTarget.children[1].classList.remove(style.hidden, style.visuallyhidden);
        event.currentTarget.children[2].classList.remove(style.hidden, style.visuallyhidden);
    };

    const hiddenSubtitle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.currentTarget.children[1].classList.add(style.hidden, style.visuallyhidden);
        event.currentTarget.children[2].classList.add(style.hidden, style.visuallyhidden);
    };

    const deleteImage = (id: string) => {
        http.delete(`images/${id}`);
        setImages(images.filter((photo) => photo.id !== id));
    };

    return (
        <ResponsiveMasonry
            className={style.content}
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
            <Masonry gutter="2.8rem">
                {images.map((element) => {
                    return (
                        <figure
                            key={element.id}
                            onMouseOver={showSubtitle}
                            onMouseLeave={hiddenSubtitle}
                            className={style.figure}
                        >
                            <img
                                className={classNames(style.img)}
                                src={element.link}
                                alt={element.subtitle}
                            />
                            <figcaption
                                className={classNames(
                                    style.subtitle,
                                    style.hidden,
                                    style.visuallyhidden
                                )}
                            >
                                {element.subtitle}
                            </figcaption>
                            <figcaption
                                className={classNames(
                                    style.btnDelete,
                                    style.hidden,
                                    style.visuallyhidden
                                )}
                            >
                                <button
                                    onClick={() => {
                                        deleteImage(element.id);
                                    }}
                                >
                                    delete
                                </button>
                            </figcaption>
                        </figure>
                    );
                })}
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default ImagesContentUnsplash;
