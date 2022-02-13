import styled from 'styled-components/native';
import { Camera as ExpoCamera } from 'expo-camera';
import { IconButton, Title } from 'react-native-paper';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

export const MainContainerCamera = styled.View`
  height: 70%;
`;

export const Camera = styled(ExpoCamera)`
  flex: 1;
`;

export const FlipButton = styled(IconButton)`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

export const TitleFlip = styled(Title)``;

export const PhotoButton = styled(IconButton)`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
