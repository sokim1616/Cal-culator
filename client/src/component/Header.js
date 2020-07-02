import React from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { Tab, TabBar } from '@rmwc/tabs'
import '@rmwc/tabs/styles';

const Header = ({ changeTab }) => {
    return (
        <div>
            <header>
                <TabBar>
                    <Tab onInteraction={changeTab}>Home</Tab>
                    {/* <Tab onInteraction><Route path='./component/Home/Home' />Home</Tab> */}
                    <Tab>Summary</Tab>
                    <Tab>Calculator</Tab>
                    <Tab>Solution</Tab>
                </TabBar>
            </header>
        </div>
    )
}

export default Header;