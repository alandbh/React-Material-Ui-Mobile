import React, { Component } from 'react';


import photo from '../images/photo.jpg';

//import './App.css';
import '../css/flexboxgrid.css';

import {
  indigo500, cyan700, red500, grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack, purple500, greenA200, green500, pinkA200
} from 'material-ui/styles/colors';

import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';




const iconStyles = {
  marginRight: 24,
};



const stylePaperContent = {
  minHeight: 150, padding: 20
};

const stylePaperPhoto = {
  minHeight: 150,
  overflow: 'hidden',
};


class Profile extends Component {


  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  //handleToggle = () => this.setState({drawerOpen: !this.state.drawerOpen});



  render() {
    return (

            <div className="component-container">

              <AppBar
                title="Highest page title"
                style={{background: 'transparent'}}
                iconElementLeft={<IconButton><i className="material-icons">keyboard_backspace</i></IconButton>}
                iconElementRight={<IconButton onTouchTap={this.props.toggleDrawer}> <i className="material-icons">menu</i> </IconButton>}
                />

              <Card
                style={{
                      marginTop: '-4em',
                }}
                zDepth={5}
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

    );
  }
}

export default Profile;
