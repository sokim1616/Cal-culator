import React, { useState, useEffect } from "react";
import "@rmwc/list/styles";
import { List, CollapsibleList, SimpleListItem } from "@rmwc/list";
import "./Dodont.scss";
import axios from "axios";
import formatDay from "../helperFunction/formatDay";
import requiredNutrients from "../helperFunction/requiredNutrients";
import ck from "./img/ck.png";
import salad from "./img/salad.png";
import ham from "./img/hamber.png";
import bro from "./img/bro.png";

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
    <List className='list'>
      <span className='head1'>
        <CollapsibleList
          handle={<SimpleListItem text='What to eat' />}
          onOpen={() => console.log("open")}
          onClose={() => console.log("close")}
        >
          {whatToEat.map((food, idx) => {
            return (
              <React.Fragment key={idx}>
                <SimpleListItem className='body1' text={food.title} />
                <img
                  className='img__ok'
                  src={require(`./img/${food.image}`)}
                  alt='foodImage'
                  style={{ width: "50%", height: "50%" }}
                />
              </React.Fragment>
            );
          })}
        </CollapsibleList>
      </span>
      <hr className='center__line'></hr>
      <div className='dodont__img'>
        <img className='ck' src={ck} />
        <img className='salad' src={salad} />
        <img className='bro' src={bro} />
        <img className='ham' src={ham} />
      </div>
      <span className='head2'>
        <CollapsibleList handle={<SimpleListItem text='What NOT to eat' />}>
          {whatNotToEat.map((food, idx) => {
            return (
              <React.Fragment key={idx}>
                <SimpleListItem className='body2' text={food.title} />
                <img
                  className='img__not'
                  src={require(`./img/${food.image}`)}
                  alt='foodImage'
                  style={{ width: "50%", height: "50%" }}
                />
              </React.Fragment>
            );
          })}
        </CollapsibleList>
      </span>
    </List>
  );
};

export default DoDont;
