import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaCalendarDay, FaComment } from "react-icons/fa";
import { Issue as IssueType } from "../../components/Card";
import { Container, IssueContent, IssueInfo } from "./styles";
import { useParams, Link, useLocation } from 'react-router-dom'
import { api } from "../../api";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from 'date-fns/locale'
import { parseISO } from "date-fns/esm";

export function Issue() {
  const [issue, setIssue] = useState<IssueType>(() => {
    const props = useLocation()
    return props.state.issue
  })

  return (
    <Container>
      <IssueInfo>
        <div className="header">
          <Link to="/"><FaChevronLeft size={12} />Voltar</Link>
          <a href={issue.html_url} target="_blank">Ver no github <FaExternalLinkAlt size={12} /></a>
        </div>
        <h1>{issue.title}</h1>
        <div className="links">
          <a href=""><FaGithub size={18} /> {issue.user?.login}</a>
          <a href=""><FaCalendarDay size={18} /> {formatDistanceToNow(parseISO(issue.created_at), { locale: ptBR, addSuffix: true })}</a>
          <a href=""><FaComment size={18} /> {issue.comments} Comentários</a>
        </div>
      </IssueInfo>
      <IssueContent>
        {issue.body}
      </IssueContent>
    </Container>
  )
}