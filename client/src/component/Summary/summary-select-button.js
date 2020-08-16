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
        return { ...prevState, [dwm]: false };
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
          // style={{ backgroundColor: "#f38181" }}
          raised
        >
          daily
        </Button>
      ) : (
        <Button
          onClick={() =>
            setDwmIsOpen({ daily: true, weekly: false, monthly: false })
          }
          // style={{ color: "#f38181" }}
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
          // style={{ backgroundColor: "#f38181" }}
          raised
        >
          weekly
        </Button>
      ) : (
        <Button
          onClick={() =>
            setDwmIsOpen({ daily: false, weekly: true, monthly: false })
          }
          // style={{ color: "#f38181" }}
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
          // style={{ backgroundColor: "#f38181" }}
          raised
        >
          monthly
        </Button>
      ) : (
        <Button
          onClick={() =>
            setDwmIsOpen({ daily: false, weekly: false, monthly: true })
          }
          // style={{ color: "#f38181" }}
          outlined
        >
          monthly
        </Button>
      )}
    </div>
  );
};

export default Selectbutton;
