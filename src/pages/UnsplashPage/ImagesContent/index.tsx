import classNames from "classnames";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import IPhoto from "../../../interfaces/IPhoto";
import style from "./ImagesContent.module.scss";

interface ImagesContentUnsplashProps {
    images: IPhoto[];
}

const ImagesContentUnsplash = ({ images }: ImagesContentUnsplashProps) => {
    const showSubtitle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.currentTarget.children[1].classList.remove(style.hidden);
        event.currentTarget.children[1].classList.remove(style.visuallyhidden);
    };

    const hiddenSubtitle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.currentTarget.children[1].classList.add(style.hidden);
        event.currentTarget.children[1].classList.add(style.visuallyhidden);
    };

    return (
        <ResponsiveMasonry
            className={style.content}
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
            <Masonry gutter="2.8rem">
                {images.map((element) => {
                    return (
                        <div
                            key={element.publicID}
                            onMouseOver={showSubtitle}
                            onMouseLeave={hiddenSubtitle}
                        >
                            <img
                                className={classNames(style.img)}
                                src={element.link}
                                alt={element.subtitle}
                            />
                            <p
                                className={classNames(
                                    style.subtitle,
                                    style.hidden,
                                    style.visuallyhidden
                                )}
                            >
                                {element.subtitle}
                            </p>
                        </div>
                    );
                })}
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default ImagesContentUnsplash;
