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
  Transactions,
  Title,
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
        <HighlightCard type="up" title='Entradas' amount='R$ 17.000,00' lastTransaction="Três dias" />
        <HighlightCard type="down" title='Saídas' amount='R$ 17.000,00' lastTransaction="Três dias" />
        <HighlightCard type="total" title='Total' amount='R$ 17.000,00' lastTransaction="Três dias" />

      </HighlightCards>

      <Transactions>
        <Title>
          Listagem
        </Title>
      </Transactions>

    </Container>
  )
}