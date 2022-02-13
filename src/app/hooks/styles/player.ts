import styled from 'styled-components/native';
import { Avatar, IconButton, Title } from 'react-native-paper';

export const ContainerEmptyPlayers = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerTextEmptyPlayers = styled.View`
  align-items: center;
`;

export const TextEmptyPlayers = styled(Title)``;

export const ContainerPlayers = styled.View`
  flex: 1;
  padding: 0px 8px;
`;

export const TouchablePlayer = styled.TouchableOpacity``;

export const ContainerPlayer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 18px;
`;

export const TextPlayers = styled(Title)`
  font-size: 18px;
`;

export const ImagePlayer = styled(Avatar.Image)`
  margin-right: 14px;
`;

export const ImageTextPlayer = styled(Avatar.Text)`
  margin-right: 14px;
`;

export const ContainerButtonAddPlayer = styled.View`
  align-items: flex-end;
`;

export const ButtonAddPlayer = styled(IconButton)``;
