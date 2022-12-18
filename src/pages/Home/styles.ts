import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
`

export const Profile = styled.div`
  display: flex;
  background-color: ${(props => props.theme["base-profile"])};
  border-radius: 10px;
  padding: 2.25rem 2.85rem;
  gap: 2.25rem;
  margin-top: 2.875rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .header {
      display: flex;
      justify-content: space-between;

      h2 {
        font-size: 1.75rem;
        color: ${props => props.theme["base-title"]};
      }

      a {
        font-size: 0.78rem;
        font-weight: 700;
        color: ${props => props.theme.blue};
        text-decoration: none;
      }
    }
  }

  span {
    font-size: 1.15rem;
    
  }

  .links {
    display: flex;
    gap: 1.5rem;

    span{
      display: flex;
      align-items: center;
      font-size: 1rem;
      color: ${props => props.theme["base-subtitle"]};
      text-decoration: none;
      gap: .5rem;
    }
  }
`

export const Issues = styled.div`
  padding-bottom: 5rem;
  width: 100%;

  .search-content{
    display: flex;
    flex-direction: column;

    margin-top: 4.5rem;
    margin-bottom: 3rem;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span:nth-child(1){
        font-size: 1.125rem;
        font-weight: 700;
        color: ${props => props.theme['base-subtitle']};
      }

      span:nth-child(2){
        font-size: 0.875.rem;
        color: ${props => props.theme['base-span']};
      }
    }

    input {
      height: 50px;
      border: 1px solid ${props => props.theme['base-boder']};
      border-radius: 6px;
      background: ${props => props.theme['base-input']};
      padding-left: 1rem;
      margin-top: 0.75rem;
      color: ${props => props.theme['base-text']};
      outline: none;
      font-family: 'Nunito', sans-serif;

      &:focus {
        border: 1px solid ${props => props.theme.blue};
      }

      &::placeholder {
        color: ${props => props.theme['base-label']};
        font-family: 'Nunito', sans-serif;
      }
    }
  }
`

export const IssueList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`