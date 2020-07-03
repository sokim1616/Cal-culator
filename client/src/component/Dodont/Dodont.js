import React from 'react';
import '@rmwc/list/styles';
// 해당하는 부분 import 해오기
import { List, CollapsibleList, SimpleListItem } from '@rmwc/list';
import './Dodont.css'



const DoDont = () => {

    // 각 테이블들에 대한 useState 지정해주기
    //const [] = React.useState();

    return (
        <List>
            <CollapsibleList
                handle={
                    <SimpleListItem
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
                    <SimpleListItem
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
                    <SimpleListItem
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

        // <div>
        //     <div className='whattoeat'>
        //         <header className='header1'>What to eat</header>
        //         <SimpleDataTable
        //             getRowProps={row => {
        //                 return row[1] > 100 ? { activated: true } : {};
        //             }}
        //             getCellProps={(cell, index, isHead) => {
        //                 const props = { isNumeric: index > 0, style: undefined };

        //                 return !isHead && index === 2 && !cell.includes('$')
        //                     ? { ...props, style: { color: 'red' } }
        //                     : props;
        //             }}
        //             headers={[['Nutrition in Need', 'Food to Consume']]}
        //             data={[
        //                 ['Cookies', '$12.40'],
        //                 ['Pizza', '$10.43'],
        //                 ['Icecream', '1.43'],
        //                 ['Candy', '$22.45'],
        //                 ['Cakes', '$215.05'],
        //                 ['Muffins', '$5.97']
        //             ]}
        //         />
        //     </div>
        //     <div className='whatnottoeat'>
        //         <header className='header1'>What NOT to eat</header>
        //         <SimpleDataTable
        //             getRowProps={row => {
        //                 return row[1] > 100 ? { activated: true } : {};
        //             }}
        //             getCellProps={(cell, index, isHead) => {
        //                 const props = { isNumeric: index > 0, style: undefined };

        //                 return !isHead && index === 2 && !cell.includes('$')
        //                     ? { ...props, style: { color: 'red' } }
        //                     : props;
        //             }}
        //             headers={[['Exceeding Nutrition', 'Food to Avoid']]}
        //             data={[
        //                 ['Cookies', '$12.40'],
        //                 ['Pizza', '$10.43'],
        //                 ['Icecream', '1.43'],
        //                 ['Candy', '$22.45'],
        //                 ['Cakes', '$215.05'],
        //                 ['Muffins', '$5.97']
        //             ]}
        //         />
        //     </div>
        //     <div className='whattodo'>
        //         <header className='header1'>What to do</header>
        //         <SimpleDataTable
        //             getRowProps={row => {
        //                 return row[1] > 100 ? { activated: true } : {};
        //             }}
        //             getCellProps={(cell, index, isHead) => {
        //                 const props = { isNumeric: index > 0, style: undefined };

        //                 return !isHead && index === 2 && !cell.includes('$')
        //                     ? { ...props, style: { color: 'red' } }
        //                     : props;
        //             }}
        //             headers={[['Level of your health', 'Exercise to be done']]}
        //             data={[
        //                 ['Cookies', 25, '$12.40'],
        //                 ['Pizza', 11, '$10.43'],
        //                 ['Icecream', 3, '1.43'],
        //                 ['Candy', 72, '$22.45'],
        //                 ['Cakes', 101, '$215.05'],
        //                 ['Muffins', 3, '$5.97']
        //             ]}
        //         />
        //     </div>
        // </div>
    )
}

export default DoDont;

