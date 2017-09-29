import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
//import {Router, IndexRoute, hashHistory, Route} from 'react-router';
import {Switch, BrowserRouter, Route } from 'react-router-dom';

import myTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {
  indigo500, cyan700, red500, grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack, purple500, greenA200, green500, pinkA200
} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MainNavigator from './components/MainNavigator';
import Profile from './pages/Profile';
import ListPage from './pages/ListPage';

    // This replaces the textColor value on the palette
    // and then update the keys for each component that depends on it.
    // More on Colors: http://www.material-ui.com/#/customization/colors
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: red500,
        accent1Color: pinkA200,
      },

    });


// Detecta se é dispositivo móvel

let isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      if (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows() != null) {
        return true;
      }
    },
    models: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    },
  };
  

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();




class App extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      isMobile: isMobile.any(),
      drawerOpen: !isMobile.any(),
    };

    
  }
  
  
  handleToggle = () => this.setState({drawerOpen: !this.state.drawerOpen});
  
  // retirei as declarações dos componentes de dentro do render
  // para que a lista de cidades não seja carregada toda vez que clicar no drawer
  c_profile = () => (
    <Profile toggleDrawer={this.handleToggle} />
  )
  
  c_list = () => (
    <ListPage toggleDrawer={this.handleToggle} />
  )
  
  render() {
    

    
    return (
            <BrowserRouter>
      <div className={(this.state.drawerOpen ? "menu-open-true App" : "menu-open-false App") + ' ' + (this.state.isMobile ? "is-mobile" : "is-not-mobile")}>
      { this.props.children }


        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="wrapper">
              <Switch>
                <Route path="/profile" component={this.c_profile}></Route>
                <Route path="/list" component={this.c_list}></Route>
              </Switch>

            <MainNavigator width="260" open={this.state.drawerOpen} />
            



            <div id="main-content">
            </div>

          </div>
      </MuiThemeProvider>
    </div>
            </BrowserRouter>
    );
  }
}

export default App;
