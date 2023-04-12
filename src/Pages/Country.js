import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Languages from "../Components/Languages";
import Currencies from "../Components/Currencies";
import Borders from "../Components/Borders";

export default function Country() {
  debugger;
  const { countryName } = useParams();
  // console.log(countryName)
  const [loading, setLoading] = useState(false);
  const [countryData, setCountryData] = useState("");
  const {
    name,
    capital,
    region,
    subregion,
    population,
    currencies,
    languages,
    borders,
    tld,
    flags
  } = countryData;
  const flag = flags?.svg || flags?.png;
  const nativeName =
    name && name.nativeName && Object.values(name.nativeName)[0].common;
  useEffect(() => {
    const getCountry = async () => {
      setLoading(true);
      let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
      const response = await axios.get(url);
      setCountryData(response.data[0]);
      setLoading(false);
      // console.log(response.data[0]);
    };
    getCountry();
  }, [countryName]);

  if (loading) {
    return <section>Loading...</section>;
  }

  return (
    <Wrapper>
      <div className="back-to-home">
        <Link to="/">{"<-- Back"}</Link>
      </div>
      <article>
        <div className="image-container">
          <img src={flag} alt={countryName} />
        </div>
        <div>
          <header>
            <h3>{countryName}</h3>
          </header>
          <section className="info-section">
            <div className="main-info">
              <p>
                Native Name :<span>{nativeName}</span>
              </p>
              <p>
                Population :<span>{population}</span>
              </p>
              <p>
                Region :<span>{region}</span>
              </p>
              <p>
                Sub Region :<span>{subregion}</span>
              </p>
              <p>
                Capital :<span>{capital}</span>
              </p>
            </div>
            <div className="other-info">
              <p>
                Top Level Domain :
                <span style={{ textTransform: "lowercase" }}>
                  {tld && tld[0]}
                </span>
              </p>
              <p>
                Currencies :
                <Currencies currencies={currencies} />
              </p>
              <p>
                Languages :
                <Languages languages={languages} />
              </p>
            </div>
          </section>
          <footer>
            <p className="border-title">Border Countries : </p>
            <Borders borders={borders} />
          </footer>
        </div>
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 2rem;
  text-transform: capitalize;
  background-color: hsl(207, 26%, 17%);
  article {
    display: grid;
    grid-template-columns: 1fr;
  }
  h3 {
    margin-bottom: 1rem;
  }
  div > p {
    margin-bottom: 0.5rem;
    /* font-size: 14px; */
  }
  p > span {
    margin-left: 0.2rem;
    opacity: 0.7;
  }
  .main-info,
  .other-info {
    margin-bottom: 2.5rem;
  }
  img {
    width: 24rem;
    height: 15rem;
    display: block;
    margin: 3rem 0rem;
    object-fit: cover;
  }

  .info-section {
    display: grid;
    grid-template-columns: 1fr;
  }
  .border-container {
    margin: 0.8rem;
    display: flex;
    flex-wrap: wrap;
  }

  .border-container a {
    margin-bottom: 1rem;
  }

  .border-container a,
  .back-to-home a {
    padding: 0.3rem 2rem;
    margin-right: 0.5rem;
    text-decoration: none;
    color: #fff;
    opacity: 0.7;
    background-color: hsl(209, 23%, 22%);
    /* font-size: 14px; */
  }
  @media (min-width: 1000px) {
    padding: 4rem;
    img {
      width: 20rem;
      height: 14rem;
    }
    h3 {
      font-size: 2rem;
    }
    article {
      grid-template-columns: 1fr 2fr;
      /* justify-content: center; */
      align-items: center;
    }
    .image-container {
      /* justify-self: center; */
      margin-right: 10rem;
    }
    .info-section {
      grid-template-columns: 350px 400px;
    }

    footer {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }

    footer > p {
      margin-right: 0.5rem;
    }
    .border-container {
      margin-top: 1rem;
    }
  }
`;
