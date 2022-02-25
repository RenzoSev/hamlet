import React from 'react';
import { Gamepad, GitHub, Group, Linkedin } from 'ophelia/mobile/icons';
import { Linking, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  ButtonTextIcon,
  Header,
  Container,
  ButtonContact,
} from 'ophelia/mobile/components';
import getStyles, {
  ContainerTitleAndButtons,
  ContainerTitle,
  MainTitle,
  ContainerButton,
} from './styles';

export default function Home() {
  const navigation = useNavigation();

  const styles = getStyles();

  const handleContact = (url: string) =>
    Linking.openURL(url).catch((err) => {
      console.error(`Failed to opening page because: ${err}`);
      alert('Failed to open page');
    });
  const handleMovePage = (page: string) => navigation.navigate(page);

  function renderContainerButton() {
    const buttonTextIconStyle = { container: styles.buttonPage };
    const containerContactStyle = styles.containerContacts;

    return (
      <ContainerButton>
        <View>
          <ButtonTextIcon
            text="Jogar"
            Icon={Gamepad}
            onPressIcon={() => handleMovePage('PlayPlayers')}
            style={buttonTextIconStyle}
          />

          <ButtonTextIcon
            text="Jogadores"
            Icon={Group}
            onPressIcon={() => handleMovePage('LibPlayers')}
            style={buttonTextIconStyle}
          />
        </View>

        <View style={containerContactStyle}>
          <ButtonContact
            Icon={Linkedin}
            url="https://www.linkedin.com/in/renzo-sevilha/"
          />
          <ButtonContact Icon={GitHub} url="https://github.com/RenzoSev" />
        </View>
      </ContainerButton>
    );
  }

  return (
    <>
      <Header title={'Home'} />
      <Container>
        <ContainerTitleAndButtons>
          <ContainerTitle>
            <MainTitle>Hamlet</MainTitle>
          </ContainerTitle>

          {renderContainerButton()}
        </ContainerTitleAndButtons>
      </Container>
    </>
  );
}
