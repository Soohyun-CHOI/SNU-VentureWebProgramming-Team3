import React, {useState} from "react";
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
import {ReportForm, ReportWrapper} from "./Report.style";
import {useNavigate} from "react-router-dom";
import "../../styles/Report/Report.css";

const Report = () => {
    const navigate = useNavigate();
    const [reportInput, setReportInput] = useState({
        kind: "",
        located_at: "",
        feature: "",
        status: "",
        sex: "",
        major_province: "",
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
        last_datetime_of_notice,
        file,
    } = reportInput;

    const cities = [
        "서울특별시",
        "부산광역시",
        "대구광역시",
        "인천광역시",
        "광주광역시",
        "대전광역시 ",
        "세종특별자치시",
        "울산광역시",
        "경기도",
        "강원도",
        "충청북도",
        "충청남도",
        "전라북도",
        "전라남도",
        "경상북도",
        "경상남도",
        "제주특별자치도",
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        bodyFormData.append("file", file);
        axios({
            method: "post",
            url: "/api/animals/v2",
            headers: {"Content-Type": "multipart/form-data"},
            data: bodyFormData,
            params: {
                kind,
                located_at,
                feature,
                status,
                sex,
                major_province,
                last_datetime_of_notice,
            },
        })
            .then((res) => {
                toast.success("성공적으로 등록되었습니다.");
                navigate("/lost");
            })
            .catch((err) => {
                const msg = err.response.data.detail
                    ? err.response.data.detail[0].msg
                    : "";
                toast.error("등록에 실패하였습니다." + msg);
            });
    };

    const onChangeValue = (e) => {
        const {value, name} = e.target;
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
        <div id="report">
            <div className="title">분실신고</div>
            <ReportWrapper elevation={8}>
                <ReportForm className="reportForm" onSubmit={handleSubmit}>
                    <FormControl fullWidth className="form-control">
                        <InputLabel className="input-label">품종</InputLabel>
                        <Select
                            id="kind"
                            name="kind"
                            value={kind}
                            variant="standard"
                            type="text"
                            onChange={onChangeValue}
                        >
                            <MenuItem value="개">개</MenuItem>
                            <MenuItem value="고양이">고양이</MenuItem>
                            <MenuItem value="기타">기타</MenuItem>
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
                        className="form-control"
                    />
                    <FormControl fullWidth className="form-control">
                        <InputLabel className="input-label">성별</InputLabel>
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
                    <FormControl fullWidth className="form-control">
                        <InputLabel className="input-label">분실지역</InputLabel>
                        <Select
                            id="major_province"
                            name="major_province"
                            value={major_province}
                            variant="standard"
                            type="text"
                            onChange={onChangeValue}
                        >
                            {cities.map((city) => (
                                <MenuItem value={city} key={city}>
                                    {city}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button variant="outlined" component="label" className="img-upload">
                        사진 업로드
                        <input
                            accept="image/*"
                            type="file"
                            hidden
                            onChange={onChangeImg}
                        />
                    </Button>
                    <img src={reportInput.img} alt=""/>
                    <Button
                        className="submit"
                        type="submit"
                        variant="contained"
                        disabled={
                            !kind ||
                            !feature ||
                            !sex ||
                            !major_province ||
                            !file
                        }
                    >
                        분실신고 등록하기
                    </Button>
                </ReportForm>
            </ReportWrapper>
        </div>
    );
};

export default Report;
