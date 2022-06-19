import React, { useState } from "react";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";

import { ReportForm, ReportSelect, ReportWrapper } from "./Report.style";

const Report = () => {
    const [reportInput, setReportInput] = useState({
        kind: "",
        located_at: "",
        feature: "",
        status: "",
        sex: "",
        major_province: "",
        minor_province: "",
        last_datetime_of_notice: "",
        img: "",
    });
    const {
        kind,
        located_at,
        feature,
        status,
        sex,
        major_province,
        minor_province,
        last_datetime_of_notice,
        img,
    } = reportInput;

    const handleSubmit = (e) => {
        e.preventDefault();

        axios({
            method: "post",
            url: "/api/animals/v2",
            data: { img },
            params: {
                kind,
                located_at,
                feature,
                status,
                sex,
                major_province,
                minor_province,
                last_datetime_of_notice,
            },
        })
            .then((res) => {
                toast.success("성공적으로 등록되었습니다.");
            })
            .catch((err) => {
                toast.error("등록에 실패하였습니다.");
            });
    };

    const onChangeValue = (e) => {
        const { value, name } = e.target;
        setReportInput({
            ...reportInput,
            [name]: value,
        });
    };

    return (
        <ReportWrapper elevation={8} className="report">
            <div>잃어버린 동물의 정보를 입력하세요:</div>
            <ReportForm className="reportForm" onSubmit={handleSubmit}>
                <ReportSelect
                    label="종류"
                    id="kind"
                    name="kind"
                    value={kind}
                    variant="standard"
                    type="text"
                    onChange={onChangeValue}
                >
                    <MenuItem value={"dog"}>개</MenuItem>
                    <MenuItem value={"cat"}>고양이</MenuItem>
                    <MenuItem value={"else"}>기타</MenuItem>
                </ReportSelect>
                <TextField
                    label="특이사항"
                    id="feature"
                    name="feature"
                    value={feature}
                    variant="outlined"
                    type="text"
                    onChange={onChangeValue}
                />
                <Select
                    label="성별"
                    id="sex"
                    name="sex"
                    value={sex}
                    variant="standard"
                    type="text"
                    onChange={onChangeValue}
                >
                    <MenuItem value={"female"}>암컷</MenuItem>
                    <MenuItem value={"male"}>수컷</MenuItem>
                </Select>
                <Select
                    label="시도"
                    id="major_province"
                    name="major_province"
                    value={major_province}
                    variant="standard"
                    type="text"
                    onChange={onChangeValue}
                >
                    <MenuItem value={"seoul"}>서울</MenuItem>
                    <MenuItem value={"busan"}>부산</MenuItem>
                </Select>
                <Select
                    label="시도"
                    id="minor_province"
                    name="minor_province"
                    value={minor_province}
                    variant="standard"
                    type="text"
                    onChange={onChangeValue}
                >
                    <MenuItem value={"seoul"}>서울</MenuItem>
                    <MenuItem value={"busan"}>부산</MenuItem>
                </Select>
                <Button variant="outlined" component="label">
                    Upload File
                    <input
                        accept="image/*"
                        type="file"
                        hidden
                        id="img"
                        name="img"
                        value={img}
                        onChange={onChangeValue}
                    />
                </Button>
                Selected: {img}
                <Button
                    className="reportButton"
                    type="submit"
                    variant="contained"
                    disabled={!kind}
                >
                    submit
                </Button>
            </ReportForm>
        </ReportWrapper>
    );
};

export default Report;
