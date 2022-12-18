import { useEffect, useState } from 'react'
import { Profile, Container, IssueList, Issues } from "./styles";
import { FaGithub, FaBuilding, FaUserFriends, FaExternalLinkAlt } from "react-icons/fa";

import logo from '../../assets/logo.svg';
import { Card, Issue } from "../../components/Card";
import { api } from '../../api';
import { LoadingIssues } from '../../components/LoadingIssues';

type User = {
  name: string;
  avatar_url: string;
  bio: string;
  login: string;
  followers: number;
  company: string;
}

export function Home() {
  const [user, setUser] = useState<User>({} as User)
  const [loading, setLoding] = useState(true)
  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(() => {
    async function load() {
      const { data: userData } = await api.get(`/users/PatrickDevSantos`)
      setUser(userData)

      const { data: postsData } = await api.get(`/search/issues?q=repo:PatrickDevSantos/ignite-github-blog`)
      setIssues(postsData.items)

      setLoding(false)
    }

    load()
  }, [])

  let timeSearch: ReturnType<typeof setTimeout>
  function searchIssue(text: string) {
    if (timeSearch) {
      clearTimeout(timeSearch)
    }

    timeSearch = setTimeout(async () => {
      setLoding(true)
      const { data: postsData } = await api.get(`/search/issues?q=${text}repo:PatrickDevSantos/ignite-github-blog`)
      setIssues(postsData.items)
      setLoding(false)
    }, 500)
  }

  return (
    <Container>
      <img src={logo} alt="Github Blog" />
      <Profile>
        <img src={user.avatar_url} alt="" />
        <div className="info">
          <div className="header">
            <h2>{user.name}</h2>
            <a href={`https://github.com/${user.login}`} target="_blank"><FaExternalLinkAlt size={12} /> GITHUB <FaExternalLinkAlt size={12} /></a>
          </div>
          <span>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</span>
          <div className="links">
            <span><FaGithub size={18} /> {user.login}</span>
            <span><FaBuilding size={18} /> {user.company}</span>
            <span><FaUserFriends size={18} /> {user.followers} Seguidores</span>
          </div>
        </div>
      </Profile>
      <Issues>
        <div className="search-content">
          <div className="header">
            <span>Publicações</span>
            <span>{issues.length} publicações</span>
          </div>
          <input type="text" placeholder="Buscar conteúdo" onChange={e => searchIssue(e.target.value)} />
        </div>
        <IssueList>
          {loading ? <LoadingIssues /> : issues.map(item => <Card key={item.id} data={item} />)}
        </IssueList>
      </Issues>
    </Container>
  )
}