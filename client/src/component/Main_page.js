import React from 'react';

const MainPage = () => {
    return (
        <div>
            <button>close</button>
            <div>E-mail:</div>
            <form>
                <input type="email" />
            </form>
            <div>Password:</div>
            <form>
                <input type="password" />
                <button>Get in!</button>
            </form>
        </div>
    )
}

export default MainPage;