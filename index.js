/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './src/js/main/Main';

AppRegistry.registerComponent(appName, () => Main);
