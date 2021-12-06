import { Settings } from './models';

export interface SettingsState {
  settings: Settings;
}

export const initialState: SettingsState = {
  settings: {
    theme: 'default-theme',
    language: 'pt-br'
  }
};