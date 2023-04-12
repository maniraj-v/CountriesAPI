import { useEffect, useState } from "react";

export default function Languages({languages={}}) {

  const [languageList, setLanguageList] = useState([]);
  useEffect(()=>{
    setLanguageList(Object.values(languages))
  }, [languages])

  console.log('child render lang')
  return (
    <span>
        {languageList.map((language, index)=>{
          return <span key={index}>
              {language}
              {languageList.length -1 !== index ? ', ' : ''}
            </span>
        })}
    </span>
  );
}