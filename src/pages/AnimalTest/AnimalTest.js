import React, {useState} from "react";
import "../../styles/AnimalTest.css"
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab"

const AnimalTest = () => {
    const questions = [
        {
            "q": "1. 새로운 환경에서 일하게 되었을 때",
            "ans1": "새로운 환경에 금세 적응한다.",
            "att1": "E",
            "ans2": "누군가 나에게 다가와주길 바란다.",
            "att2": "I",
        },
        {
            "q": "2. 누군간 이 적막을 깨야 한다!",
            "ans1": "아무도 말 안하니 내가 해야겠다.",
            "att1": "E",
            "ans2": "누군간 말하겠지..",
            "att2": "I",
        },
        {
            "q": "3. 제주도로 여행을 간다고?",
            "ans1": "그렇다면 도착해서 이거하고 그 다음엔 여기..",
            "att1": "J",
            "ans2": "너무 좋아 일단 가보자!",
            "att2": "P",
        },
        {
            "q": "4. 원하던 곳으로 떠날 기회가 왔다.",
            "ans1": "두고 가야 할 사람들이 많은 걸..",
            "att1": "S",
            "ans2": "말해 뭐해, 가자!",
            "att2": "N",
        },
        {
            "q": "5. 영화보러 가자며 갑자기 영화표를 들고 찾아온 친구",
            "ans1": "엥 갑자기? 지금?",
            "att1": "J",
            "ans2": "영화? 가자가자~",
            "att2": "P",
        },
        {
            "q": "6. 친구: 나 저번에 설입에서 길 가다가 진님 봤잖아.",
            "ans1": "나: 대박(진짜 대박 신기해하는 중)",
            "att1": "F",
            "ans2": "나: 대박(어 그렇구나..)",
            "att2": "T",
        },
        {
            "q": "7. 길가다 갖고 싶던 물건을 발견했다!",
            "ans1": "와 이게 여깄네 하고 지나감",
            "att1": "S",
            "ans2": "와 운명이야 사버려",
            "att2": "N",
        },
        {
            "q": "8. 생각한 것만큼 성과가 나오지 않았을 때",
            "ans1": "괜찮아 그래도 열심히 했잖아",
            "att1": "F",
            "ans2": "성과를 거두지 못한 나 자신에 화가 남",
            "att2": "T",
        },
        {
            "q": "9. ???: 하, 요새 취업 준비 중인데 힘들다",
            "ans1": "요즘 취직 진짜 어렵다던데 힘들겠다",
            "att1": "F",
            "ans2": "어디 어디 넣었는데?",
            "att2": "T",
        },
        {
            "q": "10. 오랜만에 만난 동창들",
            "ans1": "아니 내가 요즘 말이야....",
            "att1": "E",
            "ans2": "조용히 이야기 듣는 중...",
            "att2": "I",
        },
        {
            "q": "11. 새로 도전하고 싶은 일이 생겼다.",
            "ans1": "한 번도 해보지 않은 일인데 잘 할 수 있을까?",
            "att1": "S",
            "ans2": "갈겨! 가보자고!",
            "att2": "N",
        },
        {
            "q": "12. 다음 주가 중요한 시험일 때",
            "ans1": "오늘은 이 공부, 내일은 저 공부 해야겠다.",
            "att1": "J",
            "ans2": "일주일? 내일부터 해~(LOL 접속)",
            "att2": "P",
        },
    ];
    const [showStart, setShowStart] = useState(true);
    const [qNum, setQNum] = useState(0);
    const [EI, setEI] = useState(0);
    const [SN, setSN] = useState(0);
    const [FT, setFT] = useState(0);
    const [JP, setJP] = useState(0);

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
            let mbti = "";
            mbti = EI>=2 ? "E" : "I";
            mbti += SN>=2 ? "S" : "N";
            mbti += FT>=2 ? "F" : "T";
            mbti += JP>=2 ? "J" : "P";
            console.log(mbti);
            //result page
        }
    }

    const Q = () => (
        <div className="question-box">
            <div className="question">{questions[qNum-1]["q"]}</div>
            <Fab variant="extended" size="large" className="answer" onClick={handleAnswer1}>{questions[qNum-1]["ans1"]}</Fab>
            <Fab variant="extended" size="large" className="answer" onClick={handleAnswer2}>{questions[qNum-1]["ans2"]}</Fab>
        </div>
    )

    return (
        <div id="test">
            <section>
                <h1>나의 반쪽 반려동물 테스트</h1>
                {showStart ? <Button id="start-button" variant="outlined" onClick={start}>시작하기</Button> : null}
            </section>
            <section>
                <div></div>
                {qNum>0 ? <Q/> : null}
            </section>


        </div>
    )
}



// class Question {
//
// }

export default AnimalTest;