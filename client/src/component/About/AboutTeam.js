import React from "react";
import Modal from "react-modal";
import "./AboutThisApp.css";
import philip from "./image/philip.jpg";
import jjun from "./image/jjun.jpg";
import douhyun from "./image/douhyun.jpg";
import ren from "./image/ren.jpg";
import junseob from "./image/junseob.jpg";
import mozzi from "./image/mozzi.jpg";
import sohyun from "./image/sohyun.jpg";
import mika from "./image/mika.jpg";

const customStyles = {
    content: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: "50%",
        left: "75%",
        width: "800px",
        height: "540px",
        transform: "translate(-50%,-50%)",
        overflow: "none",
        border: "0px",
        backgroundColor: "rgba(255, 255, 255, 0)",
    },
};

const AboutTeam = ({ teamModalOpen, closeTeamModal }) => {
    //state에 담아서 덮어씌워주기
    // isLogin 디폴트는 pet (true) -> 누르면 false로 바뀌고 사람으로 바뀌도록

    //state에 담아서 덮어씌워주기
    // isLogin 디폴트는 pet (true) -> 누르면 false로 바뀌고 사람으로 바뀌도록

    const [isHwaejang, setIsHwaejang] = React.useState(false)
    const changeHwaejang = () => {
        setIsHwaejang(!isHwaejang)
    }
    const [isGongjangjang, setIsGongjangjang] = React.useState(false)
    const changeGongjangjang = () => {
        setIsGongjangjang(!isGongjangjang)
    }
    const [isBujang, setIsBujang] = React.useState(false)
    const changeBujang = () => {
        setIsBujang(!isBujang)
    }
    const [isIntern, setIsIntern] = React.useState(false)
    const changeIntern = () => {
        setIsIntern(!isIntern)
    }

    return (
        <div>
            <Modal
                isOpen={teamModalOpen}
                onRequestClose={closeTeamModal}
                style={customStyles}
            >
                <div className='wrapper'>
                    <div className='form-wrapper'>
                        <h1 className='title'>MEMBERS OF HELL-THY</h1>
                        {/* <form onSubmit={handleSubmit} noValidate> */}
                        <div className='divider2'></div>
                        <div className='desc'>Hell-thy is a compound word that describes how much we care about your health, and how much hell of a time & effort we spent while making this application. Meet our crews!</div>
                        <br></br>
                        <div className='divider2'></div>
                        <div className='choikyung'>
                            <div>
                                <div className='hwaejang' htmlFor='hwaejang'><center>회장</center></div>
                                <div>
                                    <img src={
                                        isHwaejang ? philip : jjun
                                    } onClick={changeHwaejang} />
                                    <div className='desc'>PHILLIP CHOI</div>
                                    <div className='desc'>Full-stack</div>
                                </div>
                            </div>
                            <div>
                                <div className='gongjangjang' htmlFor='gongjangjang'><center>공장장</center></div>
                                <div>
                                    <img src={
                                        isGongjangjang ? douhyun : ren
                                    } onClick={changeGongjangjang} />
                                    <div className='desc'>D.H KYUNG</div>
                                    <div className='desc'>Front-end</div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className='divider2'></div>

                        <div className='kims'>
                            <div>
                                <div className='bujang' htmlFor='bujang'><center>부장</center></div>
                                <div>
                                    <img src={
                                        isBujang ? junseob : mozzi
                                    } onClick={changeBujang} />
                                    <div className='desc'>JUNSEOB KIM</div>
                                    <div className='desc'>Full-stack</div>
                                </div>
                            </div>
                            <div>
                                <div className='intern' htmlFor='intern'><center>인턴</center></div>
                                <div>
                                    <img src={
                                        isIntern ? sohyun : mika
                                    } onClick={changeIntern} />
                                    <div className='desc'>SOHYUN KIM</div>
                                    <div className='desc'>Front-end</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div >
    )
}

export default AboutTeam;
