import React, { useState, useEffect } from "react";
import "@rmwc/button/styles";
import { Button } from "@rmwc/button";

const Selectbutton = ({ selectDWM }) => {
  const [dwmIsOpen, setDwmIsOpen] = useState({
    daily: true,
    weekly: false,
    monthly: false,
  });

  const btnClicked = (dwm, dwmStatus) => {
    if (!dwmStatus) {
      setDwmIsOpen((prevState) => {
        {
          return { ...prevState, [dwm]: false };
        }
      });
    }
  };
  
  useEffect(() => {
    selectDWM(dwmIsOpen);
  }, [dwmIsOpen]);
  return (
    <div className='button'>
      {dwmIsOpen.daily ? (
        <Button
          onClick={(e) => {
            btnClicked(e.target.nextSibling.textContent, dwmIsOpen.daily);
          }}
          raised
        >
          daily
        </Button>
      ) : (
        <Button
          onClick={() =>
            setDwmIsOpen({ daily: true, weekly: false, monthly: false })
          }
          outlined
        >
          daily
        </Button>
      )}
      {dwmIsOpen.weekly ? (
        <Button
          onClick={(e) => {
            btnClicked(e.target.nextSibling.textContent, dwmIsOpen.weekly);
          }}
          raised
        >
          weekly
        </Button>
      ) : (
        <Button
          onClick={() =>
            setDwmIsOpen({ daily: false, weekly: true, monthly: false })
          }
          outlined
        >
          weekly
        </Button>
      )}
      {dwmIsOpen.monthly ? (
        <Button
          onClick={(e) => {
            btnClicked(e.target.nextSibling.textContent, dwmIsOpen.month);
          }}
          raised
        >
          monthly
        </Button>
      ) : (
        <Button
          onClick={() =>
            setDwmIsOpen({ daily: false, weekly: false, monthly: true })
          }
          outlined
        >
          monthly
        </Button>
      )}
    </div>
  );
};

export default Selectbutton;
