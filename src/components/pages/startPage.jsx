import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
class StartPage extends Component {
  state = {};
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        localStorage.setItem(
          this.props.tokenName,
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSb2xlIjoiZmllbGRBZ2VudCIsInVzZXJuYW1lIjoiSm9obiBEb2UiLCJleHAiOjE1Nzk4MTQ1MDUwfQ.7nBllYKIYHoJDvuJvagxVviyFshKCSo51A7ptkI-JgI"
        );
        window.location.reload();
        // this.props.needsReRenderAfterLogin();
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div
        style={{
          position: "absolute",
          backgroundColor: "#001529",
          width: "50%",
          height: "300px",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: "auto",
          maxWidth: "100%",
          maxHeight: "100%",
          overflow: "auto"
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
