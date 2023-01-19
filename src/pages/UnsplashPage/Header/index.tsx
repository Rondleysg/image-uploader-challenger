import style from "./HeaderUnplashPage.module.scss";
import { ReactComponent as Logo } from "../../../assets/imgs/unsplashPage/my_unsplash_logo.svg";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import classNames from "classnames";

interface HeaderUnplashPageProps {
    onClickButton: () => void;
    setTextSearch: React.Dispatch<React.SetStateAction<string>>;
}

const HeaderUnplashPage = ({ onClickButton, setTextSearch }: HeaderUnplashPageProps) => {
    return (
        <header className={classNames(style.header)}>
            <div className={classNames(style.divLogoAndSearch)}>
                <Logo />
                <Input
                    onChange={(event) => setTextSearch(event.target.value)}
                    id="inputSearchImagesByName"
                    type="text"
                    placeHolder="Search by name"
                >
                    <span style={{ color: "#BDBDBD" }} className="material-symbols-outlined">
                        search
                    </span>
                </Input>
            </div>
            <Button onClick={onClickButton} className="btn-unplashhome" btnFor="">
                Add a photo
            </Button>
        </header>
    );
};

export default HeaderUnplashPage;
