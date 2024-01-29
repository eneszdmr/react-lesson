import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [singleData, setSingleData] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setSingleData(data);
    };
    getData();
  }, [id]);

  console.log(singleData);

  return (
    <div>
        <div style={{ marginBottom: "20px", cursor: "pointer" }}>
          <div> {singleData?.title}</div>
        </div>
        <img src={singleData?.image} alt="" style={{ width: "150px" }} />
        <div>{singleData?.description}</div>
        <div>{singleData?.price}</div>
        <div>{singleData?.category}</div>
    </div>
  );
};

export default Detail;
