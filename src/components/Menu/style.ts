import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .action__buttom {
    background-color: #5555;
    border: 1px solid #555;
    border-radius: 15px;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    padding: 10px 20px;
    margin: 0 5px;
  }

  .action__buttom:hover {
    box-shadow: 0 0 0.6rem #333;
  }
`;