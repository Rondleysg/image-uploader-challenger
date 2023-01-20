import style from "./loading.module.scss";

interface LoadingProps {
    title: string;
}

const Loading = ({ title }: LoadingProps) => {
    return (
        <div className={style.loading}>
            <h1>{title}</h1>
            <div className={style.progressBar}>
                <div className={style.progress}></div>
            </div>
        </div>
    );
};

export default Loading;
