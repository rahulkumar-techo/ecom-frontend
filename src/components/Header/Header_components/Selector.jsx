import React, { useState } from "react";

function Selector({ items, defaultval }) {

  const [getval,setval]=useState('');
  const selectorValue = (e) => {
    console.log(e.target.value);
    setval(e.target.value)
  };

  return (
    <select
      className="select select-bordered select-xs w-full max-w-xs"
      onChange={selectorValue}
      value={getval}
    >
      <option disabled value={defaultval}>
        {defaultval}
      </option>
      {items.map((item, i) => {
        return <option key={i}>{item}</option>;
      })}
    </select>
  );
}

export default Selector;
