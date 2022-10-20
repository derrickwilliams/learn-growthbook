import { AppRegistry } from 'react-native';
import { Provider as PaperProvider, MD3LightTheme as defaultTheme } from 'react-native-paper';
import { expo as appJson } from './app.json'
import MainApp from './src/App';

const appTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: 'tomato'
  }
};

export default function App() {
  return (
    <PaperProvider theme={appTheme}>
      <MainApp />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appJson.name, () => App);
