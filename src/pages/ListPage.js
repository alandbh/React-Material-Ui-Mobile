import React, { Component } from 'react';

import Axios from 'axios';


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


import ListContainer from '../components/ListContainer';


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





class ListPage extends Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            listMonumentos: []
        };
        
      
    }

    
componentWillMount() {
        
    let component = this;
    Axios.get('http://alanvasconcelos.com/projetos/vd_admin/wp-json/wp/v2/monumentos/')
    .then(function (response) {

   //console.log(response.data.length);
    
    
    // In case of success
    
    if(response.status == 200) {

        const monumentos = response.data;

        console.log(monumentos.length);
        console.log('estado');
        console.log(component.state.listMonumentos.length);

        if(component.state.listMonumentos.length === 0) {
            //const arrMonumentos = this.state.listMonumentos;
            component.setState({
              listMonumentos: monumentos,
              loaded: true,
              success: true,
            });
        } 
    


    } else { // In case of fail
        
        // component.setState({
        //   showError: 'showError',
        //   loaded: true,
        // });
    }

    })
     // In case of network error
    .catch(function (error) {  
        // console.log('network ' + error);
    });


}



  //handleToggle = () => this.setState({drawerOpen: !this.state.drawerOpen});


  
// Getting posts content



    



render() {
    console.log('-->>' + this.state.listMonumentos);

   
    
    return (
        
        <div className="component-container">

              <AppBar
                title="ListPage itens"
                iconElementLeft={<IconButton><i className="material-icons">keyboard_backspace</i></IconButton>}
                iconElementRight={<IconButton onTouchTap={this.props.toggleDrawer}> <i className="material-icons">menu</i> </IconButton>}
                />

                

  
                <Card zDepth={1}>
                  <CardText>
                  <RaisedButton label="Primary" primary={true} onClick={this.getContent} />

                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <ListContainer listContent={this.state.listMonumentos} />
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

export default ListPage;
