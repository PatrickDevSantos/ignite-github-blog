import { formatDistanceToNow, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Container, Title, Time, Content } from "./styles";

export type Issue = {
  id: number;
  title: string;
  body: string;
  number: number;
  comments: number;
  html_url: string;
  user: {
    login: string;
  },
  created_at: string;
}

type CardProps = {
  data: Issue;
}

export function Card({ data }: CardProps) {
  return (
    <Container to={`/issue/${data.number}`} state={{ issue: data }} >
      <header>
        <Title>{data.title}</Title>
        <Time>{formatDistanceToNow(parseISO(data.created_at), { locale: ptBR, addSuffix: true })}</Time>
      </header>
      <Content>
        {data.body.substring(0, 180)}
      </Content>
    </Container >
  )
}
