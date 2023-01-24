import http from "../WsConfig";

async function editPhotoUser(id: string, img: File): Promise<string> {
    const formData = new FormData();

    formData.append("id", id);
    formData.append("profilePicture", img);
    console.log(formData);

    return http
        .request({
            url: "user",
            method: "PUT",
            headers: { "Content-Type": "multipart/form-data" },
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

export default editPhotoUser;
