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

                    </div>
                </div>
            </Modal>
        </div >
    )
}

export default AboutApp;