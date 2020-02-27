import React from "react";
class search extends React.Component {
  state = {
    text: ""
  };
  onChange(e) {
    this.setState({ text: e.target.value });
    // console.log("123");
  }
  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please Enter Something", "light");
    }
    else {
      // console.log(this.state.text)
      this.props.searchUser(this.state.text);
      this.setState({ text: "" });
    }
  };
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="search"
            value={this.state.text}
            onChange={this.onChange.bind(this)}
          ></input>
          <input
            type="submit"
            value="submit"
            className="btn btn-dark btn-block"
          ></input>
        </form>
        {this.props.showClear && (
          <input
            type="button"
            className="btn btn-ligth btn-block"
            value="Clear"
            onClick={this.props.clearUsers}
          ></input>
        )}
      </div>
    );
  }
}
export default search;

