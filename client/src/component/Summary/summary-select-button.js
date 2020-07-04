import React, { useState } from "react";
import "@rmwc/button/styles";
import { Button } from "@rmwc/button";

const Selectbutton = () => {
  const [dwmIsOpen, setDwmIsOpen] = useState({
    daily: true,
    weekly: false,
    monthly: false,
  });
  return (
    <div className='button'>
      {dwmIsOpen.daily ? (
        <Button
          onClick={() => {
            if (!dwmIsOpen.daily) {
              setDwmIsOpen((prevState) => {
                {
                  return { ...prevState, daily: false };
                }
              });
            }
          }}
          label='Daily'
          raised
        />
      ) : (
        <Button
          onClick={() =>
            setDwmIsOpen({ daily: true, weekly: false, monthly: false })
          }
          label='Daily'
          outlined
        />
      )}
      {dwmIsOpen.weekly ? (
        <Button
          onClick={() => {
            if (!dwmIsOpen.weekly) {
              setDwmIsOpen((prevState) => {
                return { ...prevState, weekly: false };
              });
            }
          }}
          name='weekly'
          label='Weekly'
          raised
        />
      ) : (
        <Button
          onClick={() =>
            setDwmIsOpen({ daily: false, weekly: true, monthly: false })
          }
          label='Weekly'
          outlined
        />
      )}
      {dwmIsOpen.monthly ? (
        <Button
          onClick={() => {
            if (!dwmIsOpen.monthly) {
              setDwmIsOpen((prevState) => {
                return { ...prevState, monthly: false };
              });
            }
          }}
          label='Monthly'
          raised
        />
      ) : (
        <Button
          onClick={() =>
            setDwmIsOpen({ daily: false, weekly: false, monthly: true })
          }
          label='Monthly'
          outlined
        />
      )}
    </div>
  );
};

export default Selectbutton;
