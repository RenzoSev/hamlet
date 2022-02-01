import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Header,
  HeaderText,
  HeaderAction,
  ContainerPlayers,
  TouchablePlayer,
  ContainerPlayer,
  ImagePlayer,
  ImageTextPlayer,
  TextPlayer,
} from './styles';
import useGame from 'hooks/useGame';

export default function PlayPlayers() {
  const { players } = useGame();

  const navigation = useNavigation();

  const handleMovePage = (page: string) => navigation.navigate(page);

  const renderPlayers = () => {
    return (
      <ContainerPlayers>
        {players.map((player) => (
          <TouchablePlayer key={player.id}>
            <ContainerPlayer>
              {player.isTextPicture ? (
                <ImageTextPlayer size={61} label={player.src} />
              ) : (
                <ImagePlayer source={{ uri: player.src }} size={61} />
              )}
              
              <TextPlayer>{player.name}</TextPlayer>
            </ContainerPlayer>
          </TouchablePlayer>
        ))}
      </ContainerPlayers>
    );
  };

  const renderEmptyPlayers

  return (
    <Container>
      <Header>
        <HeaderText title="Jogadores" />
        <HeaderAction
          icon="account-multiple"
          onPress={() => handleMovePage('LibPlayers')}
        />
      </Header>

      {!!players.length && renderPlayers()}
    </Container>
  );
}
