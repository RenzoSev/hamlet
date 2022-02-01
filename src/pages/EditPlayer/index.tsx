import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import useGame from 'hooks/useGame';
import Header from '../../components/Header';
import {
  Container,
  ContainerMain,
  ContainerCameraIcon,
  ImageOldPlayer,
  ContainerTextInput,
  InputText,
  Image,
  ButtonCreatePlayer,
  ContainerButtonCreatePlayer,
} from './styles';

export default function EditPlayer() {
  const navigation = useNavigation();
  const { user, setUser, players, setPlayer, loading, dialogUser } = useGame();

  const [hasBeenAdd, setHasBeenAdd] = useState(false);

  const renderOldPlayerPicture = () => (
    <ContainerCameraIcon>
      <ImageOldPlayer
        onPress={() => navigation.navigate('Camera', { page: 'EditPlayer' })}
      >
        <Image source={{ uri: dialogUser.src }} size={88} />
      </ImageOldPlayer>
    </ContainerCameraIcon>
  );

  const renderNewPlayerPicture = () => (
    <Image source={{ uri: user.src }} size={88} />
  );

  const handlePressEditPlayer = async () => {
    const { name, src } = user;

    const player = {
      id: dialogUser.id,
      name,
      src: src || dialogUser.src,
    };

    const newPlayers = players
      .filter((player) => player.id !== dialogUser.id)
      .concat(player);

    setPlayer(newPlayers);
    setHasBeenAdd(true);
  };

  useEffect(() => {
    if (!loading && hasBeenAdd) {
      setHasBeenAdd(false);

      navigation.navigate('LibPlayers', {});

      setUser({ id: 0, name: '', src: '' });
    }
  }, [loading, hasBeenAdd]);

  useEffect(() => {
    setUser({ ...user, name: dialogUser.name });
  }, []);

  return (
    <Container>
      <Header title="Adicionar jogador" />

      <ContainerMain>
        {user.src ? renderNewPlayerPicture() : renderOldPlayerPicture()}
      </ContainerMain>

      <ContainerTextInput>
        <InputText
          label="Digite seu nome"
          value={user.name}
          mode="outlined"
          onChangeText={(name) => setUser({ ...user, name })}
        />
      </ContainerTextInput>

      <ContainerButtonCreatePlayer>
        <ButtonCreatePlayer
          icon="account-plus"
          onPress={handlePressEditPlayer}
          mode="contained"
          disabled={user.name ? false : true}
          loading={loading}
        >
          Editar personagem
        </ButtonCreatePlayer>
      </ContainerButtonCreatePlayer>
    </Container>
  );
}
