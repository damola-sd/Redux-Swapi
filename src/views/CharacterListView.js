import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchCharacters } from "../actions/index";

class CharacterListView extends React.Component {
 

  componentDidMount() {
    // call our action
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <h3> Fetching Characters, Please wait</h3>
    } 

    if (this.props.error) {
      return <h3>{this.props.error}</h3>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  };
};

export default connect(
  mapStateToProps,
  { fetchCharacters }
)(CharacterListView);