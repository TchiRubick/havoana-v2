import React from "react";
import Objects from "./Objects";
import raisin from "../image/raisin.jpg"

const objt = [
  {name: 'Raisin', prix: 45666, barcode: 185554545, qtt: 17, cost: 19566, img: raisin}, 
  {name: 'Raisin', prix: 45666, barcode: 185554545, qtt: 17, cost: 19566, img: raisin},
  
];

const Object: React.FC = () => {

  const renderObjects = objt.map((list) => (
    <div key={list.name}>
      <Objects
        name = {list.name}
        prix={list.prix}
        barcode = {list.barcode}
        qtt = {list.qtt}
        cost = {list.cost}
        image={list.img}
      />
    </div>
  ))

  return(
    <div>
      {renderObjects}
    </div>
  );
};

export default Object;