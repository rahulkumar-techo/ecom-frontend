import React, { useState } from "react";

function Selector({ items, defaultval,className }) {


  const [getval,setval]=useState('');
  const selectorValue = (e) => {
    console.log(e.target.value);
    setval(e.target.value)
  };

  return (
    <select
      className={`${className} select select-bordered select-xs w-full max-w-xs text-black`}
      onChange={selectorValue}
      value={getval}
    >
      <option  value={defaultval}>
        {defaultval}
      </option>
      {items.map((item, i) => {
        return <option key={i}>{item}</option>;
      })}
    </select>
  );
}

export default Selector;
