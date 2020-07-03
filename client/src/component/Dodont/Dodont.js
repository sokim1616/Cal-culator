import React from 'react';
import '@rmwc/data-table/styles';
// 해당하는 부분 import 해오기
import { SimpleDataTable } from '@rmwc/data-table';
import './Dodont.css'



const DoDont = () => {

    // 각 테이블들에 대한 useState 지정해주기
    //const [] = React.useState();

    return (
        <div>
            <span className='whattoeat'>
                <header className='header1'>What to eat</header>
                <SimpleDataTable
                    getRowProps={row => {
                        return row[1] > 100 ? { activated: true } : {};
                    }}
                    getCellProps={(cell, index, isHead) => {
                        const props = { isNumeric: index > 0, style: undefined };

                        return !isHead && index === 2 && !cell.includes('$')
                            ? { ...props, style: { color: 'red' } }
                            : props;
                    }}
                    headers={[['Item', 'Quantity', 'Value']]}
                    data={[
                        ['Cookies', 25, '$12.40'],
                        ['Pizza', 11, '$10.43'],
                        ['Icecream', 3, '1.43'],
                        ['Candy', 72, '$22.45'],
                        ['Cakes', 101, '$215.05'],
                        ['Muffins', 3, '$5.97']
                    ]}
                />
            </span>
            <div className='whatnottoeat'>
                <header className='header1'>What NOT to eat</header>
                <SimpleDataTable
                    getRowProps={row => {
                        return row[1] > 100 ? { activated: true } : {};
                    }}
                    getCellProps={(cell, index, isHead) => {
                        const props = { isNumeric: index > 0, style: undefined };

                        return !isHead && index === 2 && !cell.includes('$')
                            ? { ...props, style: { color: 'red' } }
                            : props;
                    }}
                    headers={[['Item', 'Quantity', 'Value']]}
                    data={[
                        ['Cookies', 25, '$12.40'],
                        ['Pizza', 11, '$10.43'],
                        ['Icecream', 3, '1.43'],
                        ['Candy', 72, '$22.45'],
                        ['Cakes', 101, '$215.05'],
                        ['Muffins', 3, '$5.97']
                    ]}
                />
            </div>
            <div className='whatnottoeat'>
                <header className='header1'>What NOT to eat</header>
                <SimpleDataTable
                    getRowProps={row => {
                        return row[1] > 100 ? { activated: true } : {};
                    }}
                    getCellProps={(cell, index, isHead) => {
                        const props = { isNumeric: index > 0, style: undefined };

                        return !isHead && index === 2 && !cell.includes('$')
                            ? { ...props, style: { color: 'red' } }
                            : props;
                    }}
                    headers={[['Item', 'Quantity', 'Value']]}
                    data={[
                        ['Cookies', 25, '$12.40'],
                        ['Pizza', 11, '$10.43'],
                        ['Icecream', 3, '1.43'],
                        ['Candy', 72, '$22.45'],
                        ['Cakes', 101, '$215.05'],
                        ['Muffins', 3, '$5.97']
                    ]}
                />
            </div>
        </div>
    )
}

export default DoDont;

