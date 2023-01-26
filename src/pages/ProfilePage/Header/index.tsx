import classNames from "classnames";
import style from "./header.module.scss";
import { ReactComponent as Logo } from "../../../assets/imgs/devchallenges.svg";
import UserInfo from "../../../components/UserInfo";
import { Link } from "react-router-dom";

interface HeaderProfilePageProps {
    currentTabProfile: string;
}

const HeaderProfilePage = ({ currentTabProfile }: HeaderProfilePageProps) => {
    return (
        <header className={classNames(style.header)}>
            <div className={classNames(style.divFlexCenter)}>
                <Link to="/">
                    <Logo width={235} />
                </Link>
            </div>
            <div className={classNames(style.divFlexCenter)}>
                <UserInfo currentTabProfile={currentTabProfile} />
            </div>
        </header>
    );
};

export default HeaderProfilePage;
