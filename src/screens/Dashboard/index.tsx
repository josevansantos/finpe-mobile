import React from "react";
import { HighlightCard } from "../../components/HighlightCard";



import {
  Container,
  Header,
  UserInfo,
  User,
  UserName,
  Photo,
  UserGreeting,
  UserWrapper,
  Icon,
  HighlightCards,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: `https://avatars.githubusercontent.com/u/44148461?v=4` }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Josevan</UserName>
            </User>
          </UserInfo>
          <Icon name='power' />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  )
}