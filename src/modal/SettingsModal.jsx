import { useDispatch, useSelector } from 'react-redux';
import { setLocale, Translate } from 'react-redux-i18n';
import React, { useState } from 'react';
import { APP_LANG_EN, APP_LANG_RU } from '../constants/appConstants';
import {
  Grid, Switch, Group, InputSelect, InputText,
} from '../ui';
import ModalWrapper from './ModalWrapper';
import { setThemeMode } from '../store/ui';

const SettingsModal = props => {
  const title = 'app.settings';

  const onSubmitHandler = e => {
    e.preventDefault();
  };

  const buttons = (
    <>
      <button onClick={() => props.closeAction()}>
        <Translate value="buttons.close" />
      </button>
    </>
  );

  const dispatch = useDispatch();
  const { theme } = useSelector(state => state?.ui);
  const darkMode = theme.mode === 'dark';

  const [loc, setLoc] = useState(JSON.parse(localStorage.getItem('locale')) || 'en');

  const onChangeWorkRootHandler = () => {};
  const onChangeLanguageHandler = e => {
    const locale = e.target.value;
    setLoc(locale);
    dispatch(setLocale(locale));
    localStorage.setItem('locale', JSON.stringify(locale));
  };

  const languages = [APP_LANG_EN, APP_LANG_RU];

  return (
    <>
      <ModalWrapper
        isOpen={props.isOpen}
        type="type2"
        size="lg"
        title={title}
        buttons={buttons}
        closeAction={props.closeAction}
        onSubmitHandler={onSubmitHandler}
      >
        <Grid cols="auto" width="100%" gap={15} textAlign="left">
          <Group label={<Translate value="app.mainSettings" />}>
            <Grid cols="max-content auto max-content">
              <InputText
                label={<Translate value="app.workRoot" />}
                width="200px"
                value={'\\\\san2\\ARRAY 1\\Disk L\\work2'}
                onChange={onChangeWorkRootHandler}
              />
              <button>
                <Translate value="buttons.browse" />
              </button>
            </Grid>
          </Group>
          <Group label={<Translate value="app.appearance" />}>
            <Grid cols="max-content auto">
              <InputSelect
                label={<Translate value="app.language" />}
                options={languages}
                value={loc}
                onChange={onChangeLanguageHandler}
              />

              <Switch
                label={<Translate value="app.darkTheme" />}
                checked={darkMode}
                onChange={() => dispatch(setThemeMode(darkMode ? 'light' : 'dark'))}
              />
            </Grid>
          </Group>
        </Grid>
      </ModalWrapper>
    </>
  );
};

export default SettingsModal;
