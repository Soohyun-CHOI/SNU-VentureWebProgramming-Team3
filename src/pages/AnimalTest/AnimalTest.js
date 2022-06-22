import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../../styles/AnimalTest/AnimalTest.css";
import Banner from "../Common/Banner";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import questions from './TestData';
import results from './TestResult';

const AnimalTest = () => {
    const [showStart, setShowStart] = useState(true);
    const [qNum, setQNum] = useState(0);
    const [EI, setEI] = useState(0);
    const [SN, setSN] = useState(0);
    const [FT, setFT] = useState(0);
    const [JP, setJP] = useState(0);
    const [result, setResult] = useState('');

    const start = () => {
        setShowStart(false);
        setQNum(1);
        document.getElementById('start-button').innerText = '시작함';
    }
    const handleAnswer1 = () => {
        if (questions[qNum - 1]["att1"] === "E") setEI(EI + 1);
        if (questions[qNum - 1]["att1"] === "S") setSN(SN + 1);
        if (questions[qNum - 1]["att1"] === "F") setFT(FT + 1);
        if (questions[qNum - 1]["att1"] === "J") setJP(JP + 1);

        handleAnswer2();
    }
    const handleAnswer2 = () => {
        if (qNum < 12) {
            setQNum(qNum + 1);
            console.log(`question ${qNum + 1}`);
        } else if (qNum === 12) {
            setQNum(qNum + 1);
            let mbti = "";
            mbti = EI >= 2 ? "E" : "I";
            mbti += SN >= 2 ? "S" : "N";
            mbti += FT >= 2 ? "F" : "T";
            mbti += JP >= 2 ? "J" : "P";
            setResult(mbti);
            //result page
            setResult(results.find(e => e["mbti"] === mbti));
        }
    }
    const restart = () => {
        setShowStart(true);
        setResult('');
        setQNum(0);
        setEI(0);
        setSN(0);
        setFT(0);
        setJP(0);
    }
    let navigate = useNavigate();
    const routeChangeToDogs = () => {
        let path = "/animals/dogs";
        navigate(path);
    }
    const routeChangeToCats = () => {
        let path = "/animals/cats";
        navigate(path);
    }

    const Q = () => (
        <div className="box">
            <div className="question">{questions[qNum - 1]["q"]}</div>
            <button className="answer" onClick={handleAnswer1}>{questions[qNum - 1]["ans1"]}</button>
            <button className="answer" onClick={handleAnswer2}>{questions[qNum - 1]["ans2"]}</button>
        </div>
    )
    const Result = () => (
        <div className="box">
            <div className="question">너의 영혼의 반려동물은 {result["animal"]}!</div>
            <img src={require(`./img/${result["mbti"]}.png`)} alt="Profile"/>
            <div className="text">{result["description"]}</div>
            <div className="result-buttons">
                <button
                    className="type"
                    onClick={result["type"] === "dog" ? routeChangeToDogs : routeChangeToCats}>
                    {result["type"] === "dog" ? "유기견" : "유기묘"} 보러가기
                </button>
                <button onClick={restart} className="restart">다시 해보기</button>
            </div>

        </div>
    )

    return (
        <div id="animalti">
            <Banner title="AnimalTI"/>
            <div className="animalti-contents-box">
                <div className="title">🐕나의 반쪽 반려동물은 누굴까? 동물TI!🐈</div>
                {showStart ? <button className="start-button" onClick={start}>시작하기</button> : null}
            </div>
            <section>
                {qNum > 0 && qNum < 13 ? <Q/> : null}
            </section>
            <section>
                {result ? <Result/> : null}
            </section>


        </div>
    )
}

export default AnimalTest;