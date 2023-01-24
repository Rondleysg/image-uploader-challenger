import IPhoto from "../../../interfaces/IPhoto";
import http from "../WsConfig";

async function uploadImage(img: File, subtitle: string): Promise<IPhoto> {
    const formData = new FormData();

    formData.append("image", img);
    formData.append("subtitle", subtitle);

    return http
        .request({
            url: "images",
            method: "POST",
            headers: { "Content-Type": "multipart/form-data" },
            data: formData,
        })
        .then((result) => {
            return { id: result.data.response.id, link: result.data.response.imageLink };
        })
        .catch((err) => {
            throw err;
        });
}

export default uploadImage;
