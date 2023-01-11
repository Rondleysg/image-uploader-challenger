import { urlApi } from "./WsConfig";

type resImg = {
    response: string;
};

async function uploadImage(img: File): Promise<string> {
    const url = urlApi;

    const formData = new FormData();

    formData.append("image", img);

    const res = await fetch(`${url}images`, {
        method: "POST",
        body: formData,
    });

    const resJson: resImg = await res.json();
    const linkImg = resJson.response;
    console.log(resJson);

    return linkImg;
}

export default uploadImage;
