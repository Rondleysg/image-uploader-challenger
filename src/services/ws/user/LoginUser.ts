import IUser from "../../../interfaces/IUser";
import http from "../WsConfig";

async function loginUser(email: string, password: string): Promise<IUser | string> {
    const formData = {
        email: email,
        password: password,
    };

    return http
        .request({
            url: "user/login",
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: formData,
        })
        .then((result) => {
            console.log(result);

            return {
                id: result.data.response.user.userID,
                username: result.data.response.username,
                email: result.data.response.email,
                profilePicture: result.data.response.profilePicture,
                token: result.data.response.token,
            };
        })
        .catch((err) => {
            return err.response.data.response;
        });
}

export default loginUser;
