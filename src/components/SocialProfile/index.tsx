import style from "./socialProfile.module.scss";
import { ReactComponent as GithubLogo } from "../../assets/imgs/Github.svg";
import { ReactComponent as GoogleLogo } from "../../assets/imgs/Google.svg";
import { ReactComponent as FacebookLogo } from "../../assets/imgs/Facebook.svg";
import { ReactComponent as TwitterLogo } from "../../assets/imgs/Twitter.svg";

interface SocialProfileProps {
    children: React.ReactNode;
}

const SocialProfile = ({ children }: SocialProfileProps) => {
    return (
        <div className={style.socialProfile}>
            <h2>or continue with these social profile</h2>
            <div className={style.socialLogos}>
                <GoogleLogo />
                <FacebookLogo />
                <TwitterLogo />
                <GithubLogo />
            </div>
            <h2>{children}</h2>
        </div>
    );
};

export default SocialProfile;
