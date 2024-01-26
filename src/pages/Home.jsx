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

  return (
    loading ? <div>Loading....</div> :
    <div>
      {
        myData?.map((data,i) => (
          <div key={i}>
            <div>
              {data.title}
            </div>
            <img src={data.image} />

          </div>
        ) )
      }

    </div>
  )
};

export default Home;
