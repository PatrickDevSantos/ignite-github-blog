import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

export const IssueInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props => props.theme["base-profile"])};
  border-radius: 10px;
  padding: 2.25rem 2.85rem;
  margin-top: 2.875rem;
  width: 100%;

  .header {
     display: flex;
     justify-content: space-between;
     align-items: center;

     a {
      text-decoration: none;
      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: 700;
      color: ${props => props.theme.blue};
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1.25rem;
     }     
  }

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${props => props.theme["base-title"]};      
  }

  .links {
    display: flex;
    gap: 1.5rem;
    margin-top: 0.5rem;

    a{
      display: flex;
      align-items: center;
      font-size: 1rem;
      color: ${props => props.theme["base-subtitle"]};
      text-decoration: none;
      gap: .5rem;  
    }    
  }
`;

export const IssueContent = styled.div`
  padding: 2.5rem 2rem;
  font-size: 1rem;
  color: ${props => props.theme["base-text"]};
`