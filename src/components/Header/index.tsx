import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Header as StyledHeader,
  HeaderBackAction,
  HeaderText,
  HeaderAction,
} from './styles';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const navigate = useNavigation();

  return (
    <StyledHeader>
      <HeaderBackAction onPress={() => navigate.goBack()} />
      <HeaderText title={title} />
      <HeaderAction icon="cog" onPress={() => navigate.goBack()} />
    </StyledHeader>
  );
}
