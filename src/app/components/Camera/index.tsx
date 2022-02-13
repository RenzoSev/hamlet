import React, { useState, useEffect, useRef } from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import useGame from 'hooks/useGame';
import {
  Container,
  FlipButton,
  Camera,
  TitleFlip,
  PhotoButton,
  MainContainerCamera,
} from './styles';

export default function ViewCamera() {
  const camRef = useRef(null);

  const navigation = useNavigation();
  const { params }: RouteProp<{ params: { page: string } }> = useRoute();

  const { setUser, user } = useGame();

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <MainContainerCamera />;
  }

  if (hasPermission === false) {
    return <TitleFlip>No access to camera</TitleFlip>;
  }

  const takePicture = async () => {
    if (camRef) {
      const data = (await camRef.current.takePictureAsync()) as { uri: string };

      setUser({ ...user, src: data.uri });

      navigation.navigate(params.page, {});
    }
  };

  return (
    <Container>
      <MainContainerCamera>
        <Camera type={type} style={{ flex: 1 }} ref={camRef} />
      </MainContainerCamera>

      <FlipButton
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}
        icon="flip-horizontal"
        size={44}
        color="#FFFFFF"
      />

      <PhotoButton
        icon="camera"
        color="#FFFFFF"
        size={42}
        onPress={takePicture}
      />
    </Container>
  );
}
