import styled from "styled-components";

type ContainerProps = {
  done: boolean;
  selected: boolean;
}

export const Container = styled.div(({ done, selected }: ContainerProps) => (
  `
  display: fles;
  background-color: #20212C;
  padding: 10px;
  border-radius: 10px;
  margin: 5px 0;
  align-items: center;

  input {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }

  label {
    color: #eee;
    user-select: none;
    text-decoration: ${done ? 'line-through' : selected ? 'underline' : 'initial'};
  }
`
));