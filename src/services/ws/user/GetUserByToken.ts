import IUser from "../../../interfaces/IUser";
import http from "../WsConfig";

async function getUserByToken(token: string): Promise<IUser> {
    return http
        .request({
            url: "user/byToken",
            method: "GET",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Bearer ${token}`,
            },
        })
        .then((result) => {
            const {
                _id: id,
                username,
                email,
                profilePicture,
                bio = "",
                phone = "",
            } = result.data.response;
            return {
                id,
                username,
                email,
                profilePicture,
                bio,
                phone,
                token: token,
            };
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
}

export default getUserByToken;
