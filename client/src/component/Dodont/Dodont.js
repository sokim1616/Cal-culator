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
  // const [date] = useState(formatDay(yesterday));
  const [whatToEat, setWhatToEat] = useState([]);
  const [whatNotToEat, setWhatNotToEat] = useState([]);

  useEffect(() => {
    setCurrentPageIndex(4);
  }, []);

  useEffect(() => {
    axios
      .post(
        "http://13.209.47.155:4000/user/infoDay",
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
          setWhatToEat([
            {
              title: "Aren't you hungry? Eat whatever you want!",
              image: `baby.jpg`,
            },
          ]);
          setWhatNotToEat([
            {
              title: "Probably not these...",
              image: `veges.jpg`,
            },
          ]);
        } else {
          const threeNonNeededNutrients = requiredNutrients(
            result.data,
            "dontNeed"
          );
          const threeNeededNutrients = requiredNutrients(result.data, "inNeed");

          threeNonNeededNutrients.forEach((nutrient) => {
            setWhatNotToEat((prevState) => [
              ...prevState,
              {
                title: nutrient[0],
                image: `${nutrient[0]}.jpg`,
              },
            ]);
          });
          threeNeededNutrients.forEach((nutrient) => {
            setWhatToEat((prevState) => [
              ...prevState,
              {
                title: nutrient[0],
                image: `${nutrient[0]}.jpg`,
              },
            ]);
          });
          // threeNonNeededNutrients.forEach((nutrient) => {
          //   axios
          //     .get("http://localhost:4000/food/findmaxnutrient", {
          //       params: {
          //         nutrient: nutrient[0],
          //       },
          //     })
          //     .then((result) => {
          //       setWhatNotToEat((prevState) => [...prevState, result.data]);
          //     });
          // });

          // threeNeededNutrients.forEach((nutrient) => {
          //   axios
          //     .get("http://localhost:4000/food/findmaxnutrient", {
          //       params: {
          //         nutrient: nutrient[0],
          //       },
          //     })
          //     .then((result) => {
          //       setWhatToEat((prevState) => [...prevState, result.data]);
          //     });
          // });
        }
      });
  }, []);

  return (
    <center>
      <List className='list'>
        <CollapsibleList
          handle={<SimpleListItem className='head1' text='What to eat' />}
          onOpen={() => console.log("open")}
          onClose={() => console.log("close")}
        >
          {whatToEat.map((food, idx) => {
            return (
              <React.Fragment key={idx}>
                <SimpleListItem text={food.title} />
                <img
                  src={require(`./img/${food.image}`)}
                  alt='foodImage'
                  style={{ width: "50%", height: "50%" }}
                />
              </React.Fragment>
            );
          })}
        </CollapsibleList>

        <CollapsibleList
          handle={<SimpleListItem className='head2' text='What NOT to eat' />}
        >
          {whatNotToEat.map((food, idx) => {
            return (
              <React.Fragment key={idx}>
                <SimpleListItem text={food.title} />
                <img
                  src={require(`./img/${food.image}`)}
                  alt='foodImage'
                  style={{ width: "50%", height: "50%" }}
                />
              </React.Fragment>
            );
          })}
          {/* <SimpleListItem text='Flour' />
          <SimpleListItem text='Pizza' />
          <SimpleListItem text='Coke' /> */}
        </CollapsibleList>

        {/* <CollapsibleList
          handle={<SimpleListItem className='head3' text='What to do' />}
        >
          <SimpleListItem text='Walk 20 mins a day' />
          <SimpleListItem text='Squat 200 times a day' />
        </CollapsibleList> */}
      </List>
    </center>
  );
};

export default DoDont;
