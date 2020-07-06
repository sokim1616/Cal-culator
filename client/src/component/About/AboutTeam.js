import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Card, CardPrimaryAction, CardMedia, CardMediaContent, CardActions, CardActionIcon, CardActionIcons } from '@rmwc/card'
import '@rmwc/card/styles'
import { Typography } from '@rmwc/typography'
import '@rmwc/typography/styles'

const AboutTeam = ({ flipped, flipCard }) => {
    return (
        <Card style={{ width: '12.5rem' }}>
            <CardPrimaryAction>
                <CardMedia
                    square
                    style={{
                        backgroundImage: 'url(images/backgrounds/mb-bg-fb-06.png)'
                    }}
                >
                    <CardMediaContent>
                        <Typography
                            use="subtitle2"
                            tag="div"
                            theme="textPrimaryOnDark"
                            style={{
                                padding: '0.5rem 1rem',
                                backgroundImage:
                                    'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 100%)',
                                bottom: '0',
                                left: '0',
                                right: '0',
                                position: 'absolute'
                            }}
                        >
                            Vacation Photos
            </Typography>
                    </CardMediaContent>
                </CardMedia>
            </CardPrimaryAction>
            <CardActions>
                <CardActionIcons>
                    <CardActionIcon onIcon="favorite" icon="favorite_border" />
                    <CardActionIcon icon="bookmark_border" />
                    <CardActionIcon icon="share" />
                </CardActionIcons>
            </CardActions>
        </Card>
    )
}

export default AboutTeam;