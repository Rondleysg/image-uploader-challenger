import style from "./headerUnplashPage.module.scss";
import { ReactComponent as Logo } from "../../../assets/imgs/devchallenges.svg";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import classNames from "classnames";
import UserInfo from "../../../components/UserInfo";
import { Link, NavLink } from "react-router-dom";

interface HeaderUnplashPageProps {
    onClickButton: () => void;
    setTextSearch: React.Dispatch<React.SetStateAction<string>>;
    signed: boolean;
}

const HeaderUnplashPage = ({ onClickButton, setTextSearch, signed }: HeaderUnplashPageProps) => {
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
                {signed ? (
                    <>
                        <Button onClick={onClickButton} className="btn-unplashhome" btnFor="">
                            Add a photo
                        </Button>

                        <UserInfo currentTabProfile="" />
                    </>
                ) : (
                    <NavLink to={"/authenticate"}>
                        <Button className="btn-unplashhome" btnFor="">
                            Login
                        </Button>
                    </NavLink>
                )}
            </div>
        </header>
    );
};

export default HeaderUnplashPage;
