import React from "react";
import Modal from "react-modal";
import { Card, CardPrimaryAction, CardMedia, CardMediaContent, CardActions, CardActionIcon, CardActionIcons } from '@rmwc/card'
import '@rmwc/card/styles'
import { Typography } from '@rmwc/typography'
import '@rmwc/typography/styles'
import philip from './image/philip.jpg'
import junseob from './image/junseob.jpg'
import sohyun from './image/sohyun.jpg'

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

const AboutTeam = ({ teamModalOpen, closeTeamModal }) => {
    return (
        <div>
            <Modal
                isOpen={teamModalOpen}
                onRequestClose={closeTeamModal}
                style={customStyles}
            >
                <div className='wrapper'>
                    <div className='form-wrapper'>
                        <h2 className='title'>MEMBERS OF HELL-THY</h2>
                        {/* <form onSubmit={handleSubmit} noValidate> */}
                        <div className='choikyung'>
                            <div>
                                <label htmlFor='hwaejang'>회장</label>
                            </div>
                            <div>
                                <img src={philip} />
                            </div>
                            <div>
                                <label htmlFor='gongjangjang'>공장장</label>
                            </div>
                            <div>
                                <img src={sohyun} />
                            </div>
                        </div>
                        <div className='kims'>
                            <div>
                                <label htmlFor='bujang'>부장</label>
                            </div>
                            <div>
                                <img src={junseob} />
                            </div>
                            <div>
                                <label htmlFor='employee'>직원</label>
                            </div>
                            <div>
                                <img src={sohyun} />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

        </div>
        // <Card style={{ width: '12.5rem' }}>
        //     <CardPrimaryAction>
        //         <CardMedia
        //             square
        //             style={{
        //                 backgroundImage: 'url(images/backgrounds/mb-bg-fb-06.png)'
        //             }}
        //         >
        //             <CardMediaContent>
        //                 <Typography
        //                     use="subtitle2"
        //                     tag="div"
        //                     theme="textPrimaryOnDark"
        //                     style={{
        //                         padding: '0.5rem 1rem',
        //                         backgroundImage:
        //                             'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 100%)',
        //                         bottom: '0',
        //                         left: '0',
        //                         right: '0',
        //                         position: 'absolute'
        //                     }}
        //                 >
        //                     Vacation Photos
        //     </Typography>
        //             </CardMediaContent>
        //         </CardMedia>
        //     </CardPrimaryAction>
        //     <CardActions>
        //         <CardActionIcons>
        //             <CardActionIcon onIcon="favorite" icon="favorite_border" />
        //             <CardActionIcon icon="bookmark_border" />
        //             <CardActionIcon icon="share" />
        //         </CardActionIcons>
        //     </CardActions>
        // </Card>
    )
}

export default AboutTeam;