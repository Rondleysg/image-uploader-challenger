import style from "./headerUnplashPage.module.scss";
import { ReactComponent as Logo } from "../../../assets/imgs/devchallenges.svg";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import classNames from "classnames";
import UserInfo from "../../../components/UserInfo";
import { Link } from "react-router-dom";
import IUser from "../../../interfaces/IUser";

interface HeaderUnplashPageProps {
    onClickButton: () => void;
    setTextSearch: React.Dispatch<React.SetStateAction<string>>;
    user: IUser;
}

const HeaderUnplashPage = ({ onClickButton, setTextSearch, user }: HeaderUnplashPageProps) => {
    return (
        <header className={classNames(style.header)}>
            <div className={classNames(style.divFlexCenter)}>
                <Link to="/">
                    <Logo width={235} />
                </Link>
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
            <div className={classNames(style.divFlexCenter)}>
                <Button onClick={onClickButton} className="btn-unplashhome" btnFor="">
                    Add a photo
                </Button>
                <UserInfo user={user} currentTabProfile="" />
            </div>
        </header>
    );
};

export default HeaderUnplashPage;
