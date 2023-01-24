import IUser from "../../../interfaces/IUser";
import http from "../WsConfig";

async function loginUser(email: string, password: string): Promise<IUser> {
    const formData = {
        email: email,
        password: password,
    };

    return http
        .request({
            url: "user",
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: JSON.stringify(formData),
        })
        .then((result) => {
            console.log(result);
            return {
                id: result.data.response.id,
                username: result.data.response.username,
                email: result.data.response.email,
                profilePicture: result.data.response.profilePicture,
            };
        })
        .catch((err) => {
            throw err;
        });
}

export default loginUser;
