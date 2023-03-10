import IUser from "../../../interfaces/IUser";
import http from "../WsConfig";

async function editPhotoUser(user: IUser, img: File): Promise<string | number> {
    const formData = new FormData();

    formData.append("id", user.id);
    formData.append("image", img);

    return http
        .request({
            url: "user",
            method: "PUT",
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${user.token}`,
            },
            data: formData,
        })
        .then((result) => {
            return result.status;
        })
        .catch((err) => {
            if (err.response.status === 400) {
                return "This email already exists.";
            } else {
                return "An error has occurred! try again.";
            }
        });
}

export default editPhotoUser;
