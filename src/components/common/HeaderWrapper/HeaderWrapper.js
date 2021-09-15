import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import * as s from './HeaderWrapper.styles';
import { ToolButton } from '../../../ui';
import { setThemeMode } from '../../../store/ui';

const HeaderWrapper = props => {
  const { theme } = useSelector(state => state?.ui);

  const dispatch = useDispatch();

  return (
    <s.HeaderContainer>
      <s.TitleContainer>{props.titleJSX}</s.TitleContainer>

      <s.ToolbarContainer>
        {props.children}
        <ToolButton
          icon="Moon"
          rounded="left"
          selected={theme.mode === 'dark'}
          action={() => dispatch(setThemeMode('dark'))}
        />
        <ToolButton
          icon="Sun"
          rounded="right"
          selected={theme.mode === 'light'}
          action={() => dispatch(setThemeMode('light'))}
        />
      </s.ToolbarContainer>
    </s.HeaderContainer>
  );
};

export default HeaderWrapper;
