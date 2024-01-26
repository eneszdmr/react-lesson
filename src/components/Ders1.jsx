import React, { useState } from "react";
import Berkant from "./Berkant";

const Ders1 = () => {
  const [sayac, setSayac] = useState(0);

  const deneme = "props testi denemesi";
  const clicked = () => {
    console.log("sen tıkladın !");
  };

  const array = [
    { name: "ali first", id: 0 },
    { name: "ahmet second", id: 1 },
    { name: "mehmet third", id: 2 },
  ];

  return (
    <div>
      <Berkant props={deneme} />

      <button onClick={clicked}>Button</button>

      {array.map((item, id) => (
        <div key={id}>{item.name}</div>
      ))}
      <div>counter : {sayac}</div>
      <button onClick={() => setSayac(sayac + 1)}>arttir</button>
    </div>
  );
};

export default Ders1;
