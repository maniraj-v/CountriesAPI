import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Borders({borders=[]}){

  const [borderList, setBorderList] = useState([]);

  useEffect(()=>{
    debugger;
    const bordersWithFullName = [];
    borders.forEach((border, index) => {
      const url = `https://restcountries.com/v3.1/alpha/${border}`
      const getBorder = async(url) =>{

        const response = await axios.get(url)
        return response.data[0].name.common
      }
      bordersWithFullName[index] = getBorder(url)
      // 
    })
    console.log(borders, bordersWithFullName)
    // resolve array of promises
    const temp = [];
    // Promise.all(bordersWithFullName).then(resp => temp[0] = resp)
    console.log(borders, bordersWithFullName, temp)
    if(bordersWithFullName.length){
      Promise.all(bordersWithFullName).then(resp => setBorderList(resp))
    }
  }, [borders])

  console.log('child render');

  if(borders.length <=0){
    return null
  }
  return (
    <div className='border-container'>
        {borderList.map((border, index)=>{
          return <Link to={`/${border}`} key={index}>
              {border}
            </Link>
        })}
    </div>
  );
}