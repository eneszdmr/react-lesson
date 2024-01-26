import React from "react";
import { useNavigate } from "react-router-dom";

export const mydata = [
  { name: "telefon", description: "her türlü telefon modeli vardır", id: 1 },
  { name: "televizon", description: "4k televziyon modelleri", id: 2 },
  { name: "iphone", description: "iphone 15 pro max", id: 3 },
  {
    name: "derslik",
    description: "en güzel derslik 4a sınıfı meslek lisesi",
    id: 4,
  },
  { name: "kitaplik", description: "kütüphane millet ve ya milli ", id: 5 },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {
      mydata.map((item, id) => (
        <div
          onClick={()=> navigate(`detail/${item.id}`)}
          style={{ marginBottom: "10px", cursor: "pointer" }}
          key={id}
        >
          <div >{item.name}</div>
        </div>
      ))
      }
    </div>
  );
};

export default Home;
