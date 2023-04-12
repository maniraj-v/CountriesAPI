import styled from "styled-components";
import { HiSearch } from "react-icons/hi";
import CountryList from "./CountryList";
import { useCallback, useState } from "react";

export default function Home() {
  const [region, setRegion] = useState("africa");
  const [country, setCountry] = useState("");
  const changeFilter = (e) => {
    // console.log(e.target.name, e.target.value);
    const tempRegion = e.target.value.toLowerCase();
    setRegion(tempRegion);
    console.log(tempRegion);
  };

  console.log(country);
  return (
    <Wrapper>
      <form className="search-form">
        <div className="search-bar">
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Search for a country..."
          />
          <span className="search-icon">
            <HiSearch />
          </span>
        </div>
        <div className="filter-checkbox">
          <select value={region} onChange={changeFilter}>
            <option value="all">All regions</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="africa">Africa</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </form>
      <CountryList region={region} country={country} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  form {
    display: flex;
    flex-direction: column;
  }
  .search-form {
    margin: 1.5rem 1rem;
  }

  .search-bar {
    position: relative;
  }

  .search-icon {
    position: absolute;
    top: 0.8rem;
    left: 0.8rem;
  }

  .search-icon svg {
    font-size: 1.5rem;
  }

  input {
    min-height: 3rem;
    background-color: hsl(209, 23%, 22%);
    padding: 1rem;
    padding-left: 3.5rem;
    border-radius: 0.25rem;
    color: #fff;
    width: 100%;
    border: none;
    outline: none;
    font-size: 1.2rem;
    font: inherit;
  }

  input::placeholder {
    color: #fff;
  }

  .filter-checkbox {
    margin-top: 2rem;
    width: 50%;
  }

  select {
    background-color: hsl(209, 23%, 22%);
    width: 90%;
    color: #fff;
    padding: 1rem;
    border: none;
    outline: none;
  }
  select option {
    /* font: 20px; */
    /* height: 5rem; */
    font-size: 1rem;
  }

  @media (min-width: 1000px) {
    .search-form {
      display: grid;
      grid-template-columns: 500px 250px;
      align-items: center;
      justify-content: space-between;
      margin: 1.5rem 3rem;
    }
    .filter-checkbox {
      margin-top: 0rem;
      width: 100%;
    }
  }
`;
