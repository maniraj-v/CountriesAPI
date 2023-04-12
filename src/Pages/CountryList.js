// https://restcountries.com/#api-endpoints-v3-all
// https://restcountries.com/v3.1/all
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function CountryList({ region, country }) {
  const [loading, setLoading] = useState(false);
  const [countryList, setCountryList] = useState([
    {
      name: "",
      capital: "",
      region: "",
      population: ""
    }
  ]);

  useEffect(() => {
    const getCountryList = async () => {
      let url;
      if (country) {
        url = `https://restcountries.com/v3.1/name/${country}`;
      } else if (region === "all") {
        url = "https://restcountries.com/v3.1/all";
      } else {
        console.log("here");
        url = `https://restcountries.com/v3.1/region/${region}`;
      }
      setLoading(true);
      const response = await axios.get(url);
      setCountryList(response.data);
      setLoading(false);
    };
    getCountryList();
  }, [country, region]);

  if (loading) {
    return <article>Loading ...</article>;
  }
  debugger;
  return (
    <Wrapper>
      {countryList.map((country, index) => {
        const { name, capital, region, population, flags } = country;
        // console.log({name, capital, region, population})
        const countryName = name.common || "";
        const flag = flags?.svg || flags?.png;
        // console.log(flags?.svg)
        return (
          <Link
            to={`/${countryName.toLowerCase()}`}
            key={index}
            className="country"
          >
            <header>
              <img src={flag} alt={countryName} />
            </header>
            <footer>
              <h3>{countryName}</h3>
              <p>
                {" "}
                Population : <span>{population}</span>
              </p>
              <p>
                {" "}
                Region : <span>{region}</span>
              </p>
              <p>
                {" "}
                Capital :{" "}
                <span>{Array.isArray(capital) ? capital[0] : capital}</span>
              </p>
            </footer>
          </Link>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.article`
  margin: 2rem 3rem;
  width: 20rem;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;
  a {
    text-decoration: none;
    font: inherit;
    color: #fff;
  }

  header {
    width: 20rem;
    height: 12rem;
  }
  header img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  footer {
    padding: 1rem 1.2rem 2.5rem 1.2rem;
    background-color: hsl(209, 23%, 22%);
  }
  footer h3 {
    margin-bottom: 0.8rem;
    font-weight: bolder;
    font-size: 1.3rem;
  }

  footer p {
    font-size: 1rem;
  }
  footer p > span {
    opacity: 0.7;
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
    row-gap: 2rem;

    article,
    header {
      width: 17rem;
      height: 10rem;
    }

    footer h3 {
      font-size: 1rem;
    }
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
