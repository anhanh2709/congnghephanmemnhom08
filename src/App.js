import "./App.css";
import "./App.scss";
import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Alert } from "bootstrap-4-react";
import { connect } from "react-redux";
import Home from "./Pages/Home";
import MovieDetail from "./Pages/MovieDetail";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Header from "./Layout/Header";
import { createAction } from "./Redux/Actions/createAction";
import { FETCH_CREDENTIALS } from "./Redux/Types/UserType";
import HomeTemplate from "./Templates/HomeTemplate/HomeTemplate";
import ShowTimes from "./Pages/ShowTimes";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Fragment>
            <Switch>
              <HomeTemplate exact path="/" Component={Home} />
              <HomeTemplate exact path="/home" Component={Home} />
              <HomeTemplate
                exact
                path="/movieDetail/:maPhim"
                Component={MovieDetail}
              />
              <Route
                exact
                path="/showTimes/:maLichChieu"
                component={ShowTimes}
              />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }

  getCredentialFromLocal = () => {
    const credentialsStore = localStorage.getItem("userLogin");
    if (credentialsStore) {
      this.props.dispatch(
        createAction(FETCH_CREDENTIALS, JSON.parse(credentialsStore))
      );
    }
  };

  componentDidMount = () => {
    this.getCredentialFromLocal();
  };
}

export default connect()(App);
