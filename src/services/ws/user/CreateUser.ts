import IUser from "../../../interfaces/IUser";
import http from "../WsConfig";

async function createUser(email: string, password: string): Promise<IUser | string> {
    const formData = {
        username: email,
        email: email,
        password: password,
    };

    return http
        .request({
            url: "user",
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: formData,
        })
        .then((result) => {
            return {
                id: result.data.response.id,
                username: result.data.response.username,
                email: result.data.response.email,
                profilePicture: result.data.response.profilePicture,
                token: result.data.response.token,
            };
        })
        .catch((err) => {
            if (err.response.status === 400) {
                return "This email already exists.";
            } else {
                return "An error has occurred! try again.";
            }
        });
}

export default createUser;
