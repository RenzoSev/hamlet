import styled from 'styled-components/native';
import { Title, Avatar } from 'react-native-paper';
import {
  SharedHeader,
  SharedHeaderText,
  SharedHeaderAction,
} from 'shared/elements/Header';

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Header = styled(SharedHeader)``;

export const HeaderText = styled(SharedHeaderText)``;

export const HeaderAction = styled(SharedHeaderAction)``;

export const ContainerPlayers = styled.View`
  flex: 1;
  background-color: red;
`;

export const TouchablePlayer = styled.TouchableOpacity``;

export const ContainerPlayer = styled.View``;

export const ImagePlayer = styled(Avatar.Image)`
  margin-right: 14px;
`;

export const ImageTextPlayer = styled(Avatar.Text)`
  margin-right: 14px;
`;

export const TextPlayer = styled(Title)``;