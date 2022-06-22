import axios from "axios";

export const url = "http://3.34.253.236:8080/";
export const serviceKey = "2iMjfKPEFNf5jFdmjPVbUD2zEKKMUkhDD4Que6sG5rdKCjVJoQS5TzstW8ZpC9iAe1jUw8hR3h8MlxMDZQwEsw==";

export const getAnimals = async (setFunction, upkind) => {
    try {
        const data = await axios.get("/abandonmentPublic", {
            params: {
                serviceKey: serviceKey,
                _type: "json",
                numOfRows: 20,
                upkind: upkind === "dogs" ? "417000" : (upkind === "cats" ? "422400" : null)
            }
        });
        setFunction(data.data.response.body.items.item);
    } catch (e) {
        console.log(e);
    }
}
