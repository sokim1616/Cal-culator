import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { Tab, TabBar } from '@rmwc/tabs'
import '@rmwc/tabs/styles';

const Header = (setSendRequest) => {
    return (
        <div>
            <header>
                <TabBar>
                    <Tab onClick={() => setSendRequest} >Home</Tab>
                    <Tab onClick={() => setSendRequest} >Summary</Tab>
                    <Tab>Calculator</Tab>
                    <Tab>Solution</Tab>
                </TabBar>
            </header>
        </div>
    )
}

export default Header;