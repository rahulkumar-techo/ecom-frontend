import React from "react";
import { Link } from "react-router-dom";
import Selector from "./Selector";

function Layer1() {


    const items1 =["English","hindi","punjabi","Russian"];
    const items2=["USD","IND","RUb",]

  return (
    <div>
      <div className=" flex item-center justify-around py-1">
        <Link><small>Offer zone comming here</small> </Link>
        <div className=" flex items-center gap-3">
          <Link to={`https://mail.google.com/mail/`} className=" hidden sm:block">
            {" "}
           <small> rahulkumar7250883289@gmail.com</small>
          </Link>
        {/* selector for Language */}
        <Selector items={items1} defaultval={"Lang"}/>
        {/* Currency */}
        <Selector items={items2} defaultval={"Curr"}/>
        </div>
      </div>
    </div>
  );
}

export default Layer1;
