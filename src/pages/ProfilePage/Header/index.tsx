import classNames from "classnames";
import style from "./header.module.scss";
import { ReactComponent as Logo } from "../../../assets/imgs/devchallenges.svg";
import UserInfo from "../../../components/UserInfo";
import { Link } from "react-router-dom";
import IUser from "../../../interfaces/IUser";

interface HeaderProfilePageProps {
    currentTabProfile: string;
    user: IUser;
}

const HeaderProfilePage = ({ currentTabProfile, user }: HeaderProfilePageProps) => {
    return (
        <header className={classNames(style.header)}>
            <div className={classNames(style.divFlexCenter)}>
                <Link to="/">
                    <Logo width={235} />
                </Link>
            </div>
            <div className={classNames(style.divFlexCenter)}>
                <UserInfo user={user} currentTabProfile={currentTabProfile} />
            </div>
        </header>
    );
};

export default HeaderProfilePage;
