import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setMyData(data);
      setLoading(false);
    };

    getData();
  }, []);
  console.log(myData);

  return loading ? (
    <div>Loading....</div>
  ) : (
    <div>
      {myData?.map((data, i) => (
        <div
          key={i}
          onClick={() => navigate(`detail/${data?.id}`)}
          style={{ marginBottom: "20px", width:'max-content', cursor:'pointer', border:'solid'}}
        >
          <div>{data.title}</div>
          <img src={data.image} style={{ width: "150px" }} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Home;
