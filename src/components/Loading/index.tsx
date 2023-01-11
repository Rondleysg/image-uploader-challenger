import "./Loading.css";

const Loading = () => {
    return (
        <div className="loading">
            <h1>Uploading...</h1>
            <div className="indeterminate-progress-bar">
                <div className="indeterminate-progress-bar__progress"></div>
            </div>
        </div>
    );
};

export default Loading;
