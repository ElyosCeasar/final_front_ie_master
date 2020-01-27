import React from "react";
import "./App.css";
import NavBar from "./components/commons/navbar";
import ShowAllForms from "./components/pages/showAllForms";
import { Row, Col } from "antd";
import { Route, Switch } from "react-router-dom";
import ShowSpeceficForm from "./components/pages/showSpeceficForm";
import StartPage from "./components/pages/startPage";
import { Form } from "antd";
import authService from "./services/authService";
import ShowDashbordForSpeceficForm from "./components/pages/showDashbordForSpeceficForm";
import ShowSpeceficFormForManager from "./components/pages/showspeceficFormForManager";

class App extends React.Component {
  state = {
    smallSize: false,
    isNavbarButtonClicked: false,
    direc: "rtl",
    formCreaterState: {
      title: "Form",
      Elements: [],
      lastId: 0
    }
  };
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    const resizeRes = window.innerWidth <= 780;
    if (!resizeRes) {
      this.setState({ isNavbarButtonClicked: false });
    }
    this.setState({ smallSize: resizeRes });
  }
  render() {
    const { smallSize } = this.state;
    const authServices = new authService();
    if (authServices.isTokenExist() && !authServices.checkIfTokenIsExpired()) {
      authServices.logUserOutInExpirtim();
      if (smallSize) {
        return (
          <div style={{ direction: this.state.direc }}>{this.BigView()}</div>
        );
      } else {
        return (
          <div style={{ direction: this.state.direc }}>{this.smallView()}</div>
        );
      }
    } else {
      const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
        StartPage
      );
      return (
        <WrappedNormalLoginForm />
        //  <StartPage  />
      );
    }
  }

  smallView = () => {
    const { direc } = this.state;
    if (direc === "rtl") {
      return (
        <div className="App">
          <Row>
            <Col span={this.state.isNavbarButtonClicked ? 22 : 20}>
              <div style={{ margin: "20px" }}>
                {/* <ShowAllForms></ShowAllForms> */}
                <Switch>
                  <Route
                    path="/ShowAllForms"
                    render={props => (
                      <ShowAllForms direc={this.state.direc} {...props} />
                    )}
                  />
                  <Route
                    path="/ShowSpeceficForm/:id"
                    render={props => (
                      <ShowSpeceficForm direc={this.state.direc} {...props} />
                    )}
                  />

                  <Route
                    path="/ShowDashbordForSpeceficForm/:id"
                    render={props => (
                      <ShowDashbordForSpeceficForm
                        direc={this.state.direc}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/ShowSpeceficFormForManager/:id"
                    render={props => (
                      <ShowSpeceficFormForManager
                        direc={this.state.direc}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/"
                    render={props => (
                      <ShowAllForms direc={this.state.direc} {...props} />
                    )}
                  />
                </Switch>
              </div>
            </Col>
            <Col span={this.state.isNavbarButtonClicked ? 2 : 4}>
              <NavBar
                smallSize="false"
                direc={this.state.direc}
                onDirectChange={this.directHandler}
                isNavbarButtonClicked={this.navbarButtonResizeViewClickHandler}
              ></NavBar>
            </Col>
          </Row>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Row>
            <Col span={this.state.isNavbarButtonClicked ? 2 : 4}>
              <NavBar
                smallSize="false"
                direc={this.state.direc}
                onDirectChange={this.directHandler}
                isNavbarButtonClicked={this.navbarButtonResizeViewClickHandler}
              ></NavBar>
            </Col>
            <Col span={this.state.isNavbarButtonClicked ? 22 : 20}>
              <div style={{ margin: "20px" }}>
                {/* <ShowAllForms></ShowAllForms> */}
                <Switch>
                  <Route
                    path="/ShowAllForms"
                    render={props => (
                      <ShowAllForms direc={this.state.direc} {...props} />
                    )}
                  />

                  <Route
                    path="/ShowSpeceficForm/:id"
                    render={props => (
                      <ShowSpeceficForm direc={this.state.direc} {...props} />
                    )}
                  />
                  <Route
                    path="/ShowDashbordForSpeceficForm/:id"
                    render={props => (
                      <ShowDashbordForSpeceficForm
                        direc={this.state.direc}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/ShowSpeceficFormForManager/:id"
                    render={props => (
                      <ShowSpeceficFormForManager
                        direc={this.state.direc}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/"
                    render={props => (
                      <ShowAllForms direc={this.state.direc} {...props} />
                    )}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </div>
      );
    }
  };
  BigView = () => {
    return (
      <div className="App">
        <Col>
          <Row style={{ zIndex: "1" }}>
            <NavBar
              smallSize="true"
              direc={this.state.direc}
              onDirectChange={this.directHandler}
            ></NavBar>
          </Row>
          <Row style={{ zIndex: "0" }}>
            {/* <ShowAllForms></ShowAllForms> */}
            <Switch>
              <Route
                path="/ShowAllForms"
                render={props => (
                  <ShowAllForms direc={this.state.direc} {...props} />
                )}
              />
              <Route
                path="/ShowSpeceficForm/:id"
                render={props => (
                  <ShowSpeceficForm direc={this.state.direc} {...props} />
                )}
              />
              <Route
                path="/ShowDashbordForSpeceficForm/:id"
                render={props => (
                  <ShowDashbordForSpeceficForm
                    direc={this.state.direc}
                    {...props}
                  />
                )}
              />
              <Route
                path="/ShowSpeceficFormForManager/:id"
                render={props => (
                  <ShowSpeceficFormForManager
                    direc={this.state.direc}
                    {...props}
                  />
                )}
              />
              <Route
                path="/"
                render={props => (
                  <ShowAllForms direc={this.state.direc} {...props} />
                )}
              />
            </Switch>
          </Row>
        </Col>
      </div>
    );
  };

  navbarButtonResizeViewClickHandler = () => {
    this.setState({ isNavbarButtonClicked: !this.state.isNavbarButtonClicked });
  };
  directHandler = () => {
    const res = this.state.direc === "rtl" ? "ltr" : "rtl";
    this.setState({ isNavbarButtonClicked: false });
    this.setState({ direc: res });
  };
  formCreaterStateFixHandeler = st => {
    // console.log(st);
    this.setState({ formCreaterState: st });
  };
}

export default App;
