import React from 'react';
import '@rmwc/textfield/styles';
import { TextField } from '@rmwc/textfield'

const Search = () => {
    return (
        <div>
            <div>
                <center>
                    <TextField label="standard..." />
                </center>
            </div>
            <div>
                <center>
                    <TextField fullwidth placeholder="니가 처! 먹은거 많이 입력하는 곳...." />
                </center>
            </div>
            <div>
                <center>
                    <TextField outlined label="니가 처! 먹은거 입력하는 곳...." />
                </center>
            </div>
        </div>
    )
}

export default Search;