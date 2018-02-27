import React from "react"
import ReactDOMServer from 'react-dom/server'
import {AppRegistry} from 'react-native'


exports.replaceRenderer = ({
                             bodyComponent,
                             replaceBodyHTMLString,
                             setHeadComponents,
                           }) => {

  // See https://github.com/necolas/react-native-web/blob/master/website/guides/getting-started.md#server-side-rendering
  class App extends React.Component {
    render() {
      return bodyComponent;
    }
  }

  AppRegistry.registerComponent('App', () => App)
  const {element, getStyleElement} = AppRegistry.getApplication('App');

  const html = ReactDOMServer.renderToString(element);
  const styleElement = getStyleElement();

  replaceBodyHTMLString(html);
  setHeadComponents([
    styleElement,
  ]);

};