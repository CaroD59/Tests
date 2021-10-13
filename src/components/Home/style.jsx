import styled from 'styled-components';

const Style = styled.div`
  .TEST {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      background-color: #bcbce5;
      width: 100vw;
      h1 {
        text-align: center;
        font-size: 100px;
        letter-spacing: 1em;
        font-weight: bold;
        color: white;
        text-shadow: #fc0 1px 0 10px;
      }
    }
    .listTests {
      ul {
        li {
          padding-top: 50px;
          a {
            letter-spacing: 1em;
            text-decoration: none;
            color: red;
          }
        }
      }
    }
  }
`;
export default Style;
