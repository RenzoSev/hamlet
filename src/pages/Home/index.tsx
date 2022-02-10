import React from 'react';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from 'ophelia/components';
import { Config as ConfigIcon } from 'ophelia/icons';
import {
  Container,
  ContainerTitleAndButtons,
  ContainerTitle,
  MainTitle,
  ContainerButton,
  ButtonOptions,
  ContainerOptions,
  ContainerContacts,
  ButtonContacts,
} from './styles';

export default function Home() {
  const navigation = useNavigation();

  const handleContact = (url: string) =>
    Linking.openURL(url).catch((err) => {
      console.error(`Failed to opening page because: ${err}`);
      alert('Failed to open page');
    });

  const handleMovePage = (page: string) => navigation.navigate(page);

  const onPressConfigIcon = () => alert('Configuração');

  return (
    <Container>
      {/* <Header>
        <HeaderText title="Home" />
        <HeaderAction icon="cog" onPress={() => alert('Configuração!')} />
      </Header> */}

      <Header
        title={'Home'}
        Icon={ConfigIcon}
        onPressIcon={onPressConfigIcon}
      />

      <ContainerTitleAndButtons>
        <ContainerTitle>
          <MainTitle>Hamlet</MainTitle>
        </ContainerTitle>

        <ContainerButton>
          <ContainerOptions>
            <ButtonOptions
              icon="gamepad"
              mode="contained"
              onPress={() => handleMovePage('PlayPlayers')}
            >
              Jogar
            </ButtonOptions>

            <ButtonOptions
              icon="account-multiple"
              mode="contained"
              onPress={() => handleMovePage('LibPlayers')}
            >
              Jogadores
            </ButtonOptions>
          </ContainerOptions>

          <ContainerContacts>
            <ButtonContacts
              icon="linkedin"
              size={42}
              onPress={() =>
                handleContact('https://www.linkedin.com/in/renzo-sevilha/')
              }
            />
            <ButtonContacts
              icon="github"
              size={42}
              onPress={() => handleContact('https://github.com/RenzoSev')}
            />
          </ContainerContacts>
        </ContainerButton>
      </ContainerTitleAndButtons>
    </Container>
  );
}
