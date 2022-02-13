import useGame from 'hooks/useGame';
import { Header } from 'ophelia/mobile/components';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ContainerMain,
  ContainerCameraIcon,
  ButtonIcon,
  ContainerTextInput,
  InputText,
  Image,
  ButtonCreatePlayer,
  ContainerButtonCreatePlayer,
} from './styles';
import React, { useEffect, useState } from 'react';

export default function AddPlayer() {
  const navigation = useNavigation();
  const { user, setUser, players, setPlayer, loading } = useGame();

  const [hasBeenAdd, setHasBeenAdd] = useState(false);

  const renderTakePicture = () => (
    <ContainerCameraIcon>
      <ButtonIcon
        icon="camera-plus"
        size={84}
        onPress={() => navigation.navigate('Camera', { page: 'AddPlayer' })}
      />
    </ContainerCameraIcon>
  );

  const renderPicture = () => <Image source={{ uri: user.src }} size={88} />;

  const handlePressAddPlayer = async () => {
    const { name, src } = user;

    const player = {
      id: players.length || 0,
      name,
      src: src || `${name[0]}${name[1]}`,
      isTextPicture: !src,
    };

    const newPlayers = [...players, player];

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

  return (
    <Container>
      <Header title="Adicionar jogador" />

      <ContainerMain>
        {user.src ? renderPicture() : renderTakePicture()}
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
          onPress={handlePressAddPlayer}
          mode="contained"
          disabled={user.name ? false : true}
          loading={loading}
        >
          Criar personagem
        </ButtonCreatePlayer>
      </ContainerButtonCreatePlayer>
    </Container>
  );
}
