import http from "./WsConfig";

async function uploadImage(img: File): Promise<string> {
    const formData = new FormData();

    formData.append("image", img);

    return http
        .request({
            url: "images",
            method: "POST",
            headers: { "Content-Type": "multipart/form-data" },
            data: formData,
        })
        .then((result) => {
            return result.data.response;
        })
        .catch((err) => {
            throw err;
        });
}

export default uploadImage;
