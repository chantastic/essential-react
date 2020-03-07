import React from "react";
import ReactDOM from "react-dom";


const fetchPokemon = id => 
fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}/`
  ).then(res => res.json());



class Pokemon extends React.Component {
  constructor() {
    super();
    this.state = { character: null };
  }
  componentDidMount() {
    fetchPokemon(this.props.id).then(data => 
      this.setState({ character: data })
    );
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    fetchPokemon(nextProps.id).then(data =>
       this.setState({ character: data })
    );
  }

    render() {
      return this.state.character ? (
      <div>
        <h3>{this.state.character.name}</h3>
        <ul>
          {this.state.character.abilities.map(ability => (
            <li key={ability.ability.name}>
            {ability.ability.name}
            </li>
          ))}
        </ul>
      </div>
       ) : (
        <div>Loading...</div>
       );
    }
  }

class IdPager extends React.Component{
  constructor() {
    super();
    this.state = { id: 1 };
  }

  render() {     
    return(
      <div>
        <h1>{this.state.id}</h1>
        <button
          type="button"
          onClick={() =>
            this.setState(prevState => ({
              id: prevState - 1
            }))}
        >
          Previous
          </button>

          <button 
            type="button" 
            onClick={() => 
            this.setState(prevState => ({ 
              id: prevState + 1
            }))} 
            >
            Next         
          </button>

            <this.props.component id={this.state.id} />
      </div>
    );
  }
}


ReactDOM.render(
  <IdPager component={Pokemon} />, 
  document.getElementById("root")
);
