import IPhoto from "../../../interfaces/IPhoto";
import IUser from "../../../interfaces/IUser";
import http from "../WsConfig";

async function uploadImage(img: File, subtitle: string, user: IUser): Promise<IPhoto> {
    const formData = new FormData();

    formData.append("image", img);
    formData.append("subtitle", subtitle);

    return http
        .request({
            url: "images",
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${user.token}`,
            },
            data: formData,
        })
        .then((result) => {
            const { id, link } = result.data.response;
            return { id: id, link: link };
        })
        .catch((err) => {
            throw err;
        });
}

export default uploadImage;
