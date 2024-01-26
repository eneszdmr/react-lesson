import React, { useEffect, useState } from 'react'

const Testler = () => {
    const [data,setData] = useState({users : []});
    useEffect(() =>{

        const fetchData = async () => {
            try {
                const sonuc = await fetch('https://dummyjson.com/users');
                const mydata = await sonuc.json();
                
                setData(mydata);
               
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    },[]);




  return (

    <div>
        <h1 style={{textAlign:"center"}}>Başlık</h1>
        <ul style={{fontFamily:'Times New Roman'}}>
        {data.users.map((user, index) => (
          <li key={index}>
            <h2>First Name : {user.firstName}</h2>
            <h3>Last Name: {user.lastName}</h3>
          
          </li>
          
        ))}
        </ul>
    </div>
  )
}

export default Testler