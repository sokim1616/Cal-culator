import React from 'react';
import '@rmwc/button/styles';
import { Button } from '@rmwc/button';

const Selectbutton = () => {
    return (
        <div className="button">
  <Button label="Daily" raised />
  <Button label="Weekly" raised />
  <Button label="Monthly" raised />
</div>
    )
}

export default Selectbutton;