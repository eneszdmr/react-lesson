import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mydata } from "./Home";

const About = () => {
  const { id } = useParams();
  const [datam, setDatam] = useState(null)

  useEffect(() => {
    if (id) {
      setDatam(mydata.find((dt) => dt.id === id));
    }
  }, [id])

  console.log(datam.id)

  const redirect = () => {
    window.location = "/";
  };
  return (
    <div>
      <button onClick={redirect}>Geri Dön</button>
      <div>{datam?.id}</div>
      <div></div>
    </div>
  );
};

export default About;
