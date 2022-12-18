import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  padding: 2rem;
  background-color: ${props => props.theme['base-post']};
  border-radius: 10px;
  text-decoration: none;

  display: flex;
  flex-direction: column;

  header{
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
`
export const Title = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
  color: ${props => props.theme['base-title']}
`

export const Time = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme['base-span']};
  
  &::first-letter {
    text-transform: uppercase;
  }
`

export const Content = styled.span`
  font-size: 1rem;
  color: ${props => props.theme['base-text']};
  margin-top: 1.25rem;
`