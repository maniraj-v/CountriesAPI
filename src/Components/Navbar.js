import {MdDarkMode} from 'react-icons/md'
import styled from 'styled-components'

export default function Navbar() {
  return (
    <Wrapper>
      <h3>
        Where in the world?
      </h3>
      <div className='mode'>
        <span>
          <MdDarkMode />
        </span>
        <span>
          Dark Mode
        </span>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 1rem;
  background-color: hsl(209, 23%, 22%);
  font-weight: bold;
  .mode svg{
    margin-right: 0.5rem;
  }

`