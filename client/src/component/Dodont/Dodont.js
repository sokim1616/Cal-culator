import React, { useEffect } from "react";
import "@rmwc/list/styles";
// 해당하는 부분 import 해오기
import { List, CollapsibleList, SimpleListItem } from "@rmwc/list";
import "./Dodont.css";

const DoDont = ({ setCurrentPageIndex }) => {
  // 각 테이블들에 대한 useState 지정해주기
  // const [] = React.useState();
  // axios로 데이터 가져와서 그 정보에 맞는 추천해주기
  useEffect(() => {
    setCurrentPageIndex(4);
  }, []);

  return (
    <center>
      <List className='list'>
        <div>
          Click on each box to see what you are recommended to eat, to avoid
          eating, and to do.
        </div>
        <CollapsibleList
          handle={<SimpleListItem className='head1' text='What to eat' />}
          onOpen={() => console.log("open")}
          onClose={() => console.log("close")}
        >
          <SimpleListItem text='Water' />
          <SimpleListItem text='Avocado' />
          <SimpleListItem text='Olives' />
        </CollapsibleList>

        <CollapsibleList
          handle={<SimpleListItem className='head2' text='What NOT to eat' />}
        >
          <SimpleListItem text='Flour' />
          <SimpleListItem text='Pizza' />
          <SimpleListItem text='Coke' />
        </CollapsibleList>

        <CollapsibleList
          handle={<SimpleListItem className='head3' text='What to do' />}
        >
          <SimpleListItem text='Walk 20 mins a day' />
          <SimpleListItem text='Squat 200 times a day' />
        </CollapsibleList>
      </List>
    </center>
  );
};

export default DoDont;
