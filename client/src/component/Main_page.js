import React from 'react';

const MainPage = () => {
    const [, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    return (
        <div>
            <button onClick={}>close</button>
            <div>E-mail:</div>
            <form>
                <input type="email" />
            </form>
            <div>Password:</div>
            <form>
                <input type="password" />
                <button onClick={loginState}>Get in!</button>
            </form>
        </div>
    )
}

export default MainPage;