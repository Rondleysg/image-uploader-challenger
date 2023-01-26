import IUser from "../../../interfaces/IUser";
import http from "../WsConfig";
import getUserByToken from "./GetUserByToken";

async function loginUser(email: string, password: string): Promise<IUser | string> {
    const formData = {
        email: email,
        password: password,
    };

    const result = await http
        .request({
            url: "user/login",
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: formData,
        })
        .then(async (result) => {
            const user = await getUserByToken(result.data.response.token);
            return user;
        })
        .catch((err) => {
            return err.response.data.response;
        });

    console.log(result);

    return result;
}

export default loginUser;
