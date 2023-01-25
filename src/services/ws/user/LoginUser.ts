import IUser from "../../../interfaces/IUser";
import http from "../WsConfig";
import getUserByToken from "./GetUserByToken";

async function loginUser(email: string, password: string): Promise<IUser | string> {
    const formData = {
        email: email,
        password: password,
    };

    const token = await http
        .request({
            url: "user/login",
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: formData,
        })
        .then((result) => {
            return result.data.response.token;
        })
        .catch((err) => {
            return err.response.data.response;
        });

    return await getUserByToken(token);
}

export default loginUser;
