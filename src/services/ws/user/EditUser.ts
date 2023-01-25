import IUser from "../../../interfaces/IUser";
import http from "../WsConfig";

async function editUser(newUser: IUser, oldUser: IUser, newPassword: string): Promise<string> {
    const formData = new FormData();

    formData.append("id", newUser.id);

    if (newPassword !== "") {
        formData.append("password", newPassword);
    }

    if (newUser.email !== oldUser.email) {
        formData.append("email", newUser.email);
    }

    formData.append("bio", newUser.bio ? newUser.bio : "");
    formData.append("phone", newUser.phone ? newUser.phone : "");
    formData.append("profilePicture", newUser.profilePicture);
    formData.append("username", newUser.username);

    return http
        .request({
            url: "user",
            method: "PUT",
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${oldUser.token}`,
            },
            data: formData,
        })
        .then((result) => {
            return result.data.message;
        })
        .catch((err) => {
            if (err.response.status === 400) {
                return "This email already exists.";
            } else {
                return "An error has occurred! try again.";
            }
        });
}

export default editUser;
