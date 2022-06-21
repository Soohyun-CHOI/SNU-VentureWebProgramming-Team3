import axios from "axios";

export const url = "http://52.78.82.160:8080/";
export const serviceKey = "2iMjfKPEFNf5jFdmjPVbUD2zEKKMUkhDD4Que6sG5rdKCjVJoQS5TzstW8ZpC9iAe1jUw8hR3h8MlxMDZQwEsw==";

export const getAnimals = async (setAnimals) => {
    try {
        const data = await axios.get("/abandonmentPublic", {
            params: {
                serviceKey: serviceKey,
                _type: "json"
            }
        });
        setAnimals(data.data.response.body.items.item);
    } catch (e) {
        console.log(e);
    }
}
