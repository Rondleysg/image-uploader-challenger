import IUser from "../../../interfaces/IUser";
import http from "../WsConfig";

async function editPhotoUser(user: IUser, img: File): Promise<string> {
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
            console.log(result);

            return result.data.response.user.profilePicture;
        })
        .catch((err) => {
            console.log(err);

            if (err.response.status === 400) {
                return "This email already exists.";
            } else {
                return "An error has occurred! try again.";
            }
        });
}

export default editPhotoUser;
