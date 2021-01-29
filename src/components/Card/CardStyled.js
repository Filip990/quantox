import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  height: 250px;
  padding: 32px;
  border-radius: 16px;
  background: #35a7ff;
`;

export const Chip = styled.img``;

export const Logo = styled.img``;

export const CardNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  font-family: 'Courier New', sans-serif;
`;

export const CardHolder = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  margin-right: auto;
`;

export const ExpirationDate = styled.div`
  font-size: 1.25rem;
`;
