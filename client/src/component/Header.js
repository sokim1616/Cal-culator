import React from 'react';
import { Tab, TabBar} from '@rmwc/tabs'
import '@rmwc/tabs/styles';



const Header = () => {
    return(
        <div>
            <header>
                <TabBar>
                    <Tab>Home</Tab>
                    <Tab>Summary</Tab>
                    <Tab>Calculator</Tab>
                    <Tab>Solution</Tab>
                </TabBar>
            </header>
        </div>
    )
}

export default Header;