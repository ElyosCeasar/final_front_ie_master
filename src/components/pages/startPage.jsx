import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import authService from "../../services/authService";
class StartPage extends Component {
  state = {
    smallSize: false
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const authServices = new authService();
        authServices.login(values);
      }
    });
  };
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    const resizeRes = window.innerWidth <= 850;
    console.log("is small", resizeRes);
    this.setState({ smallSize: resizeRes });
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div
        style={{
          position: this.state.smallSize == true ? "relative" : "fixed",
          backgroundColor: "#001529",
          width: this.state.smallSize == true ? "92%" : "40%",
          height: "300px",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: "auto"
        }}
      >
        <div
          style={{
            marginLeft: "50px",
            marginRight: "50px",
            marginTop: "30px"
          }}
        >
          <h2
            style={{
              color: "white",
              textAlign: "center"
            }}
          >
            نرم افزار مدیریت بحران
          </h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  {
                    required: true,
                    message: "لطفا نام کاربری خود را وارد کنید"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  autoFocus
                  placeholder="نام کاربری"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "لطفا رمز خود را وارد کنید" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="کلمه‌ی عبور"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{
                  width: "60%",
                  margin: "0 auto",
                  display: "block",
                  marginTop: "20px"
                }}
              >
                ورود
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default StartPage;
