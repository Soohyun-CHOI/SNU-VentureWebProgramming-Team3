import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const LostAnimalList = () => {
    const [lostList, setlostList] = useState([]);
    console.log(lostList);

    const getList = (num = 5) => {
        axios
            .get("/api/animals/v2", { params: { num: num } })
            .then((res) => {
                setlostList(res.data.animals);
            })
            .catch((err) => {
                toast.error(
                    "등록에 실패하였습니다." + err.response.data.detail[0].type
                );
            });
    };

    useEffect(getList, []);

    return (
        <div>
            {lostList?.map((lostAnimal) => (
                <div key={lostAnimal.created_at}>
                    <img
                        src={lostAnimal.image_url}
                        alt=""
                        height={"200px"}
                        width={"200px"}
                    />
                    <div>
                        <div>{lostAnimal.created_at}</div>
                        <div>{lostAnimal.feature}</div>
                        <div>{lostAnimal.kind}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LostAnimalList;
