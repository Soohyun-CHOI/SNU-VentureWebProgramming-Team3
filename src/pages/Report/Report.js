import React, { useState } from "react";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";

import { ReportForm, ReportWrapper } from "./Report.style";

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
        file: null,
        img: "",
    });
    const bodyFormData = new FormData();

    const {
        kind,
        located_at,
        feature,
        status,
        sex,
        major_province,
        minor_province,
        last_datetime_of_notice,
        file,
    } = reportInput;

    const handleSubmit = (e) => {
        e.preventDefault();

        bodyFormData.append("file", file);
        axios({
            method: "post",
            url: "/api/animals/v2",
            headers: { "Content-Type": "multipart/form-data" },
            data: bodyFormData,
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
                const msg = err.response.data.detail
                    ? err.response.data.detail[0].msg
                    : "";
                toast.error("등록에 실패하였습니다." + msg);
            });
    };

    const onChangeValue = (e) => {
        const { value, name } = e.target;
        setReportInput({
            ...reportInput,
            [name]: value,
        });
    };

    const onChangeImg = (e) => {
        console.log(e.target);
        if (e.target.files && e.target.files[0]) {
            setReportInput({
                ...reportInput,
                file: e.target.files[0],
                img: URL.createObjectURL(e.target.files[0]),
            });
        }
    };

    return (
        <ReportWrapper elevation={8} className="report">
            <div>잃어버린 동물의 정보를 입력하세요:</div>
            <ReportForm className="reportForm" onSubmit={handleSubmit}>
                <FormControl fullWidth>
                    <InputLabel>종류</InputLabel>
                    <Select
                        id="kind"
                        name="kind"
                        value={kind}
                        variant="standard"
                        type="text"
                        onChange={onChangeValue}
                    >
                        <MenuItem value={"개"}>개</MenuItem>
                        <MenuItem value={"고양이"}>고양이</MenuItem>
                        <MenuItem value={"기타"}>기타</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    label="특이사항"
                    id="feature"
                    name="feature"
                    value={feature}
                    variant="outlined"
                    type="text"
                    onChange={onChangeValue}
                />
                <FormControl fullWidth>
                    <InputLabel>성별</InputLabel>
                    <Select
                        id="sex"
                        name="sex"
                        value={sex}
                        variant="standard"
                        type="text"
                        onChange={onChangeValue}
                    >
                        <MenuItem value={"암컷"}>암컷</MenuItem>
                        <MenuItem value={"수컷"}>수컷</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel>도시</InputLabel>
                    <Select
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
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel>도시</InputLabel>
                    <Select
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
                </FormControl>
                <Button variant="outlined" component="label">
                    Upload File
                    <input
                        accept="image/*"
                        type="file"
                        hidden
                        onChange={onChangeImg}
                    />
                </Button>
                <img src={reportInput.img} alt="" />
                <Button
                    className="reportButton"
                    type="submit"
                    variant="contained"
                    disabled={
                        !kind ||
                        !feature ||
                        !sex ||
                        !major_province ||
                        !minor_province ||
                        !file
                    }
                >
                    submit
                </Button>
            </ReportForm>
        </ReportWrapper>
    );
};

export default Report;
