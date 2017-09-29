import React, { Component } from 'react';


class ListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        
        };
        
      
    }


  render() {
      const itensArr = this.props.listContent;
      const itens = itensArr.map(
        function(nome, key) {
            return (
              <li key={key} id={key}>
                <b>{nome.title.rendered}</b>
                <hr />
                <img src={nome.acf.imagem_de_capa.sizes.thumbnail} />
                <p>{nome.acf.descricao}</p>
              </li>        
            );
          }
    )
    return (
        <div>
      <ul className="list-item">        
          {itens}
      </ul>
      </div>
    );
  }
}

export default ListContainer;
