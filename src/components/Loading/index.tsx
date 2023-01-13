import style from "./Loading.module.scss";

const Loading = () => {
    return (
        <div className={style.loading}>
            <h1>Uploading...</h1>
            <div className={style["indeterminate-progress-bar"]}>
                <div className={style["indeterminate-progress-bar__progress"]}></div>
            </div>
        </div>
    );
};

export default Loading;
