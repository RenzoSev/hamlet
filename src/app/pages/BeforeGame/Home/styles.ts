import { Theme } from 'ophelia/theme';
import { StyleSheet } from 'react-native';
import { Title, Button, IconButton } from 'react-native-paper';
import {
  SharedHeader,
  SharedHeaderText,
  SharedHeaderAction,
} from 'shared/elements/Header';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #feeacc;
`;

export const Header = styled(SharedHeader)``;

export const HeaderText = styled(SharedHeaderText)``;

export const HeaderAction = styled(SharedHeaderAction)``;

export const ContainerTitleAndButtons = styled.View`
  flex: 1;
  padding: 36px 18px;
  justify-content: space-between;
`;

export const ContainerTitle = styled.View`
  align-items: center;
`;

export const MainTitle = styled(Title)`
  font-size: 28px;
  letter-spacing: 1px;
`;

export const ContainerButton = styled.View`
  height: 68%;
  justify-content: space-around;
  align-items: center;
`;

export const ContainerOptions = styled.View`
  align-items: center;
`;

export const ButtonOptions = styled(Button)`
  width: 60%;
  margin-bottom: 12px;
  background-color: #490912;
`;

export const ContainerContacts = styled.View`
  flex-direction: row;
`;

export const ButtonContacts = styled(IconButton)``;

export interface HomeStyle {}

const getStyles = (theme?: Theme, style?: HomeStyle) =>
  StyleSheet.create({
    buttonPage: {
      marginBottom: 16,
    },
    containerContacts: {
      flexDirection: "row",
      alignItems: "center"
    },
  });

export default getStyles;
