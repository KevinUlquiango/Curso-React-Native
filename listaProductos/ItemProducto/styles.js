import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex-direction: row;
  border-color: #000;
  border-width: 1px;
  border-radius: 10px;
  background-color: #f7d572;
  margin-bottom: 10px;
  padding: 10px;
`;

export const WraperIndex = styled.View`
  flex: 2;
  justify-content: center;
`;

export const WrapperProduct = styled.View`
  flex: 4;
  flex-direction: column;
`;

export const WrapperCost = styled.Text`
  flex: 2;
`;

export const WrapperButton = styled.View`
  flex-direction: row;
  flex: 7;
`;
