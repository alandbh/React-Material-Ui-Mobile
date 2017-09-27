import React, { Component } from 'react';


import logo from './logo.svg';
import photo from './images/photo.jpg';

//import './App.css';
import './css/flexboxgrid.css';
import './components/css/materialize.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

import myTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {
  indigo500, cyan700, red500, grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack, purple500, greenA200, green500, pinkA200
} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

import MainNavigator from './components/MainNavigator';


import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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

const iconStyles = {
  marginRight: 24,
};

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const stylePaperContent = {
  minHeight: 150, padding: 20
};

const stylePaperPhoto = {
  minHeight: 150,
  overflow: 'hidden',
};


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      isMobile: isMobile.any(),
      drawerOpen: !isMobile.any(),
    };
  }

  handleToggle = () => this.setState({drawerOpen: !this.state.drawerOpen});



  render() {
    return (
      <div className={(this.state.drawerOpen ? "menu-open-true App" : "menu-open-false App") + ' ' + (this.state.isMobile ? "is-mobile" : "is-not-mobile")}>


        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="wrapper">
            <MainNavigator width="260" open={this.state.drawerOpen} />



            <div id="main-content">

              <AppBar
                title="Highest page title"
                style={{background: 'transparent'}}
                iconElementLeft={<IconButton><i className="material-icons">keyboard_backspace</i></IconButton>}
                iconElementRight={<IconButton onTouchTap={this.handleToggle}> <i className="material-icons">menu</i> </IconButton>}
                />

              <Card
                style={{
                      marginTop: '-4em',
                }}
                zDepth={20}
                >

                  <CardMedia
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                    overlayContentStyle={{background: purple500}}
                    style={{}}
                  >
                  <img
                  src={photo}
                  alt="Foto de perfil" className="img-responsive"
                  style={{}}
                  />
                  </CardMedia>
                  <FloatingActionButton secondary={true} style={{ marginTop: '-30px', float: 'right', marginRight: '2em'}}>
                    <ContentAdd color={indigo500} />
                  </FloatingActionButton>
                  <CardTitle title="Card title" subtitle="Card subtitle" />


                </Card>

                <Card zDepth={1}>
                  <CardText>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <p>
                      promDonec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </p>
                    <p>
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                      promDonec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    </p>
                    <p>
                      promDonec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </p>
                    <p>
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                      promDonec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    </p>
                  </CardText>
                </Card>






            </div>

      </div>
      </MuiThemeProvider>
    </div>
    );
  }
}

export default App;
