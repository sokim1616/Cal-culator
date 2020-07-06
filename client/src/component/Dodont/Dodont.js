import React from 'react';
import '@rmwc/list/styles';
// 해당하는 부분 import 해오기
import { List, CollapsibleList, SimpleListItem } from '@rmwc/list';
import './Dodont.css'



const DoDont = () => {

    // 각 테이블들에 대한 useState 지정해주기
    //const [] = React.useState();

    return (
        <center>
            <List className='list'>
                <CollapsibleList
                    handle={
                        <SimpleListItem className='head1'
                            text="What to eat"
                        // graphic="favorite"
                        // metaIcon="chevron_right"
                        />
                    }
                    onOpen={() => console.log('open')}
                    onClose={() => console.log('close')}
                >
                    <SimpleListItem text="Water" />
                    <SimpleListItem text="Avocado" />
                    <SimpleListItem text="Olives" />
                </CollapsibleList>

                <CollapsibleList
                    handle={
                        <SimpleListItem className='head2'
                            text="What NOT to eat"
                        // graphic="local_pizza"
                        // metaIcon="chevron_right"
                        />
                    }
                >
                    <SimpleListItem text="Flour" />
                    <SimpleListItem text="Pizza" />
                    <SimpleListItem text="Coke" />
                </CollapsibleList>

                <CollapsibleList
                    handle={
                        <SimpleListItem className='head3'
                            text="What to do"
                        // graphic="star"
                        // metaIcon="chevron_right"
                        />
                    }
                >
                    <SimpleListItem text="Walk 20 mins a day" />
                    <SimpleListItem text="Squat 200 times a day" />
                </CollapsibleList>
            </List>
        </center>
    )
}

export default DoDont;

