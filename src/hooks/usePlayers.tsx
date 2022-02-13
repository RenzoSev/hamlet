import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import useGame from './useGame';

import {
  ButtonAddPlayer,
  ContainerPlayers,
  ImagePlayer,
  ImageTextPlayer,
  TextPlayers,
  ContainerButtonAddPlayer,
  ContainerEmptyPlayers,
  ContainerPlayer,
  ContainerTextEmptyPlayers,
  TextEmptyPlayers,
  TouchablePlayer,
} from './styles/player';
import Player from 'types/Player';

export default function usePlayers() {
  const { players } = useGame();
  const navigation = useNavigation();

  const renderWhenThereIsPlayers = (
    handleLongPress: (player: Player) => void
  ) => (
    <ContainerPlayers>
      {players.map((player) => (
        <TouchablePlayer
          key={player.id}
          onLongPress={() => handleLongPress(player)}
          onPress={() => handleLongPress(player)}
        >
          <ContainerPlayer>
            {player.isTextPicture ? (
              <ImageTextPlayer size={61} label={player.src} />
            ) : (
              <ImagePlayer source={{ uri: player.src }} size={61} />
            )}
            <TextPlayers>{player.name}</TextPlayers>
          </ContainerPlayer>
        </TouchablePlayer>
      ))}
    </ContainerPlayers>
  );

  const renderWhenEmptyPlayers = () => (
    <ContainerEmptyPlayers>
      <MaterialIcons name="groups" size={84} color="#00000042" />

      <ContainerTextEmptyPlayers>
        <TextEmptyPlayers>Não tem ninguém para jogar! 😥</TextEmptyPlayers>
        <TextEmptyPlayers>Vamos adicionar alguém? 😎</TextEmptyPlayers>
      </ContainerTextEmptyPlayers>
    </ContainerEmptyPlayers>
  );

  const renderPlayers = (handleLongPress: (player: Player) => void) => {
    if (players.length > 0) {
      return renderWhenThereIsPlayers(handleLongPress);
    }

    return renderWhenEmptyPlayers();
  };

  const renderButtonAddPlayer = () => (
    <ContainerButtonAddPlayer>
      <ButtonAddPlayer
        icon="account-plus"
        size={32}
        onPress={() => navigation.navigate('AddPlayer', {})}
      />
    </ContainerButtonAddPlayer>
  );

  return {
    players,
    renderButtonAddPlayer,
    renderPlayers,
    renderWhenEmptyPlayers,
    renderWhenThereIsPlayers,
  };
}
