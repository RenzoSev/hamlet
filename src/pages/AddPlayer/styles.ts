import styled from 'styled-components/native';
import { IconButton, TextInput, Avatar, Button } from 'react-native-paper';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerMain = styled.View`
  align-items: center;
  padding: 24px 12px;
`;

export const ContainerCameraIcon = styled.View`
  background-color: red;
  padding: 12px;
  border-radius: 999999px;
  opacity: 0.5;
  margin-bottom: 42px;
`;

export const ButtonIcon = styled(IconButton)``;

export const ContainerTextInput = styled.View`
  align-items: center;
`;

export const InputText = styled(TextInput)`
  width: 75%;
`;

export const Image = styled(Avatar.Image)``;

export const ContainerButtonCreatePlayer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ButtonCreatePlayer = styled(Button)`
  width: 60%;
`;
