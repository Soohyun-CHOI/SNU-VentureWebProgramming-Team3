import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";

import "./Report.css";

const Report = () => {
    const [reportInput, setReportInput] = useState({
        animal_name: "",
        img: "",
    });
    const { animal_name, img } = reportInput;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hi");
        axios({
            method: "post",
            url: "/api1/animals",
            data: { img },
            params: { animal_name },
        })
            .then((res) => {
                toast.success("성공적으로 등록되었습니다.");
            })
            .catch((err) => {
                toast.error("등록에 실패하였습니다.");
            });
    };

    const onChange = (e) => {
        const { value, name } = e.target;
        setReportInput({
            ...reportInput,
            [name]: value,
        });
    };

    return (
        <div id="report">
            <div>잃어버린 동물의 이름과 사진을 입력하세요:</div>
            <form className="reportForm" onSubmit={handleSubmit}>
                <TextField
                    label="name of animal"
                    id="animal_name"
                    name="animal_name"
                    placeholder="choco"
                    value={animal_name}
                    variant="outlined"
                    type="text"
                    onChange={onChange}
                />
                <Button variant="outlined" component="label">
                    Upload File
                    <input
                        accept="image/*"
                        type="file"
                        hidden
                        id="img"
                        name="img"
                        value={img}
                        onChange={onChange}
                    />
                </Button>
                Selected: {img}
                <Button
                    className="reportButton"
                    type="submit"
                    variant="contained"
                    disabled={!animal_name}
                >
                    submit
                </Button>
            </form>
        </div>
    );
};

export default Report;
