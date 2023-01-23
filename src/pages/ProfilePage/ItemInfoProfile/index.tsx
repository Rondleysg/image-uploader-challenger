import Line from "../Line";
import style from "./itemInfoProfile.module.scss";

interface ItemInfoProfileProps {
    keyItem: string;
    value?: string;
    children?: React.ReactNode;
    line?: boolean;
}

const ItemInfoProfile = ({ keyItem, value, children, line }: ItemInfoProfileProps) => {
    return (
        <>
            <div className={style.item}>
                <div className={style.itemKey}>
                    <h6>{keyItem}</h6>
                </div>
                <div className={style.itemValue}>{value ? <h5>{value}</h5> : children}</div>
            </div>
            {line && <Line />}
        </>
    );
};

export default ItemInfoProfile;
