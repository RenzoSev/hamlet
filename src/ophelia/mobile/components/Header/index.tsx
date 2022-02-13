import getStyles from './styles';
import OpheliaComponent from '../Component';
import React from 'react';
import { TouchableIcon } from '../';
import useTheme from '../../../hooks/useTheme';
import { useNavigation } from '@react-navigation/core';
import { Back, Config } from '../../icons';
import { SafeAreaView, View, Text } from 'react-native';

export interface HeaderProps {
  title: string;
  hasGoBack?: boolean;
  Icon?: React.ElementType;
  onPressGenericAction?: () => void;
}

const Header: OpheliaComponent<HeaderProps> = ({
  title,
  Icon,
  onPressGenericAction,
  hasGoBack,
}) => {
  const navigate = useNavigation();
  const { theme } = useTheme();

  const styles = getStyles(theme);

  function renderBackAction() {
    if (!hasGoBack) return;

    const onPressBack = () => navigate.goBack();
    return <TouchableIcon onPressIcon={onPressBack} Icon={Back} />;
  }

  function renderText() {
    return (
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    );
  }

  function renderDefaultAction() {
    if (Icon) return;
    const onPressConfigIcon = () => alert('Configuração');
    return <TouchableIcon onPressIcon={onPressConfigIcon} Icon={Config} />;
  }

  function renderGenericAction() {
    if (!Icon || !onPressGenericAction) return;
    return <TouchableIcon onPressIcon={onPressGenericAction} Icon={Icon} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerActions}>
        {renderBackAction()}
        {renderText()}
        {renderDefaultAction()}
        {renderGenericAction()}
      </View>
    </SafeAreaView>
  );
};

export default Header;
