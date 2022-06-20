import React, {useState} from "react";
import "../../styles/AnimalTest.css"
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab"
import questions from './TestData';
import results from './TestResult'

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
        console.log('start');
        document.getElementById('start-button').innerText='시작함';
    }
    const handleAnswer1 = () => {
        if (questions[qNum-1]["att1"] === "E") setEI(EI+1);
        if (questions[qNum-1]["att1"] === "S") setSN(SN+1);
        if (questions[qNum-1]["att1"] === "F") setFT(FT+1);
        if (questions[qNum-1]["att1"] === "J") setJP(JP+1);

        handleAnswer2();
    }
    const handleAnswer2 = () => {
        if (qNum < 12) {
            setQNum(qNum+1);
            console.log(`question ${qNum+1}`);
        } else if (qNum === 12) {
            setQNum(qNum+1);
            let mbti = "";
            mbti = EI>=2 ? "E" : "I";
            mbti += SN>=2 ? "S" : "N";
            mbti += FT>=2 ? "F" : "T";
            mbti += JP>=2 ? "J" : "P";
            setResult(mbti);
            //result page
            setResult(results.find(e => e["mbti"] === mbti));
        }
    }

    const Q = () => (
        <div className="box">
            <div className="question">{questions[qNum-1]["q"]}</div>
            <Fab variant="extended" size="large" className="answer" onClick={handleAnswer1}>{questions[qNum-1]["ans1"]}</Fab>
            <Fab variant="extended" size="large" className="answer" onClick={handleAnswer2}>{questions[qNum-1]["ans2"]}</Fab>
        </div>
    )
    const Result = () => (
        <div className="box">
            <p>너의 영혼의 반려동물은(는) {result["animal"]}!</p>
            <p>{result["description"]}</p>
            <Button id="reset-button" variant="outlined">다시 해보기</Button>
        </div>
    )

    return (
        <div id="animalti">
            <section>
                <h1>나의 반쪽 반려동물은 누굴까? 동물TI!</h1>
                {showStart ? <Button id="start-button" variant="outlined" onClick={start}>시작하기</Button> : null}
            </section>
            <section>
                {qNum>0&&qNum<13 ? <Q/> : null}
            </section>
            <section>
                {result ? <Result/> : null}
            </section>


        </div>
    )
}

export default AnimalTest;