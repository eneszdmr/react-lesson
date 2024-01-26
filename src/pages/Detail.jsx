import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { mydata } from "./Home";

const Detail = () => {
  const { id } = useParams();
  const [getData, setGetData] = useState(null);
  const location = useLocation();

  console.log(location," loca");
  useEffect(() => {
    if (id) {
      setGetData(mydata.find((data) => data.id == id));
    }
  }, [id]);

  return (
    <div>
      <h3>{location?.pathname}</h3>
      <div>{getData?.name}</div>
      <div>{getData?.description}</div>
    </div>
  );
};

export default Detail;
