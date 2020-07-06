import React, { useState, useEffect } from "react";
import "@rmwc/list/styles";
// 해당하는 부분 import 해오기
import { List, CollapsibleList, SimpleListItem } from "@rmwc/list";
import "./Dodont.css";
import axios from "axios";
import formatDay from "../helperFunction/formatDay";
import requiredNutrients from "../helperFunction/requiredNutrients";
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

const DoDont = ({ setCurrentPageIndex }) => {
  const [date] = useState(formatDay(yesterday));
  const [whatToEat, setWhatToEat] = useState([]);

  useEffect(() => {
    setCurrentPageIndex(4);
  }, []);

  useEffect(() => {
    axios
      .post(
        "http://localhost:4000/user/infoDay",
        { date },
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((result) => {
        if (typeof requiredNutrients(result.data) === "string") {
          setWhatToEat(["Aren't you hungry? Eat whatever you want!"]);
        } else {
          result.forEach((item) => {
            axios.get("");
          });
        }
      });
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
          {whatToEat.map((food) => {
            return <SimpleListItem />;
          })}
          {/* <SimpleListItem text='Water' />
          <SimpleListItem text='Avocado' />
          <SimpleListItem text='Olives' /> */}
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
