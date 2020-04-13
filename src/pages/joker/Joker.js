import React, { Component } from "react";
import { connect } from "react-redux";
import { thunkFetchData } from "./duck";
class Joker extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    const { data } = this.props;
    return (
      <div className="App">
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.joke}</li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state.joker.data,
    isLoading: state.joker.isLoading
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(thunkFetchData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Joker);
