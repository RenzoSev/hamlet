import React from 'react';
import useGame from 'hooks/useGame';
import { Group } from 'ophelia/mobile/icons';
import { Header } from 'ophelia/mobile/components';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ContainerPlayers,
  TouchablePlayer,
  ContainerPlayer,
  ImagePlayer,
  ImageTextPlayer,
  TextPlayer,
} from './styles';

export default function PlayPlayers() {
  const { players } = useGame();
  const navigation = useNavigation();

  const handleMovePage = () => navigation.navigate('LibPlayers');

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

  return (
    <Container>
      <Header
        title="Jogadores"
        Icon={Group}
        onPressGenericAction={handleMovePage}
      />
      {!!players.length && renderPlayers()}
    </Container>
  );
}
