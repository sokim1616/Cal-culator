import React from "react";
import Modal from "react-modal";
import "./About.css";

const customStyles = {
    content: {
        position: "fixed",
        top: "60%",
        left: "50%",
        width: "800px",
        height: "540px",
        transform: "translate(-50%,-50%)",
        overflow: "none",
        border: "0px",
    },
};

const AboutApp = ({ appModalOpen, closeAppModal }) => {
    return (
        <div>
            <Modal
                isOpen={appModalOpen}
                onRequestClose={closeAppModal}
                style={customStyles}
            >
                <div className='wrapper'>
                    <div className='form-wrapper'>
                        <h2 className='title'>WHAT IS CAL-CULATOR?</h2>
                        {/* <form onSubmit={handleSubmit} noValidate> */}
                        <div className='divider2'></div>
                        <div className='desc'>Cal-culator is a web application that caculates your daily food intake.</div>
                        <ul className='desc'>Some of its features are:
                            <li>it create an archive to visualize your calorie intake history</li>
                            <li>it recommends a diet plan based on your nutrition status</li>
                        </ul>
                        <div className='divider2'></div>
                        <div className='choikyung'>
                            <div>
                                <div className='hwaejang' htmlFor='hwaejang'><center>회장</center></div>
                                <div>
                                    {/* <img src={philip} /> */}
                                    <div className='desc'>Name: PHILLIP CHOI</div>
                                    <div className='desc'>Position: Full-stack</div>
                                </div>
                            </div>
                            <div>
                                <div className='gongjangjang' htmlFor='gongjangjang'><center>공장장</center></div>
                                <div>
                                    {/* <img src={douhyun} /> */}
                                    <div className='desc'>Name: D.H KYUNG</div>
                                    <div className='desc'>Position: Front-end</div>
                                </div>
                            </div>
                        </div>
                        <div className='divider2'></div>

                        <div className='kims'>
                            <div>
                                <div className='bujang' htmlFor='bujang'><center>부장</center></div>
                                <div>
                                    {/* <img src={junseob} /> */}
                                    <div className='desc'>Name: JUNSEOB KIM</div>
                                    <div className='desc'>Position: Full-stack</div>
                                </div>
                            </div>
                            <div>
                                <div className='employee' htmlFor='employee'><center>사원</center></div>
                                <div>
                                    {/* <img src={sohyun} /> */}
                                    <div className='desc'>Name: SOHYUN KIM</div>
                                    <div className='desc'>Position: Front-end</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div >
    )
}

export default AboutApp;