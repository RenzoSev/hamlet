import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import Header from '../../components/Header';

import useGame from 'hooks/useGame';
import usePlayers from 'hooks/usePlayers';

import Player from 'types/Player';

import {
  Container,
  // ContainerEmptyPlayers,
  // TextEmptyPlayers,
  // ContainerTextEmptyPlayers,
  // ContainerButtonAddPlayer,
  // ButtonAddPlayer,
  ContainerMain,
  // ContainerPlayers,
  // ContainerPlayer,
  // TextPlayers,
  // ImagePlayer,
  // ImageTextPlayer,
  // TouchablePlayer,
  Portal,
  Dialog,
  ContainerButtonDialog,
  ButtonDialog,
} from './styles';

const INITIAL_USER = { id: 0, name: '', src: '' } as Player;

export default function LibPlayers() {
  const { players, setPlayer, dialogUser, setDialogUser } = useGame();
  const { renderPlayers, renderButtonAddPlayer } = usePlayers();
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const deletePlayer = () => {
    const filteredPlayers = players.filter(
      (player) => player.id !== dialogUser.id
    );

    setPlayer(filteredPlayers);
    setVisible(false);
    setDialogUser(INITIAL_USER);
  };

  const editPlayer = () => {
    setVisible(false);
    navigation.navigate('EditPlayer', {});
  };

  const handleLongPress = (dialogUser: Player) => {
    setVisible(true);
    setDialogUser(dialogUser);
  };

  const renderDialogWhenVisible = () => (
    <Portal>
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <Dialog.Title>O que você deseja fazer? 🤔</Dialog.Title>

        <Dialog.Content>
          <ContainerButtonDialog>
            <ButtonDialog icon="delete" mode="contained" onPress={deletePlayer}>
              {`Deletar ${dialogUser.name}`}
            </ButtonDialog>
          </ContainerButtonDialog>

          <ContainerButtonDialog>
            <ButtonDialog icon="pencil" mode="contained" onPress={editPlayer}>
              {`Editar ${dialogUser.name}`}
            </ButtonDialog>
          </ContainerButtonDialog>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );

  return (
    <Container>
      <Header title="Biblioteca de Jogadores" />

      <ContainerMain>
        {renderDialogWhenVisible()}

        {renderPlayers(handleLongPress)}

        {renderButtonAddPlayer()}
      </ContainerMain>
    </Container>
  );
}
