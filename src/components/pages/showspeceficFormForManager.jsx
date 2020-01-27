import React, { Component } from "react";
import answerService from "../../services/answerService";
import appService from "../../services/appService";
import MapUnchangeComponent from "../reuseable/mapUnchangeComponent";
import {
  Button,
  Input,
  InputNumber,
  DatePicker,
  Select,
  notification
} from "antd";
import MapComponent from "../reuseable/mapComponent";
const { Option } = Select;
class ShowSpeceficFormForManager extends Component {
  firstTimeForSetState = true;
  state = {
    form: {},
    ElementValues: [],
    data: [],
    body: "",
    formTitle: "",
    testloc: [
      { lat: 35.74874138089811, lng: 51.33087158203125 },
      { lat: 35.62381451392674, lng: 51.383056640625 },
      { lat: 35.71752800693265, lng: 51.43524169921875 }
    ]
  };

  componentDidMount() {
    this.generateFormData();
  }

  render() {
    return (
      <div
        style={{
          textAlign: this.props.direc === "rtl" ? "right" : "left"
        }}
      >
        <h3 style={{ color: "white", marginRight: "20px", marginLeft: "20px" }}>
          {this.props.direc === "rtl" ? "مشاهده‌ی فرم" : "Show form"}
        </h3>
        <div
          style={{
            backgroundColor: "white",
            margin: "20px",

            padding: 10
          }}
        >
          {/* <h4>{this.state.form.title}</h4> */}
          <h3>
            {this.props.direc === "rtl" ? " نام فرم:" : "form name: "}{" "}
            {this.state.formTitle}
          </h3>
          {this.state.body}
          {/* <div
            style={{
              marginTop: "20px",
              display: "block",
              height: "300px",
              marginBottom: "40px"
            }}
          >
            <MapUnchangeComponent
              points={this.state.testloc}
            ></MapUnchangeComponent>
          </div> */}
        </div>
      </div>
    );
  }
  generateFormData() {
    const answerId = this.props.match.params.id;
    const aservice = new answerService();
    const service = new appService();
    aservice.getById(answerId).then(res => {
      //   this.setState({ formAnswer: res2.data, form: res.data.form })
      const answer = res.data;
      service.getSpeceficFormById(answer.formId).then(res2 => {
        const form = res2.data.form;
        const data = [];
        for (let i = 0; i < form.fields.length; i++) {
          const row = {};
          row.type = form.fields[i].type;
          row.title = form.fields[i].title;
          row.value = answer.fields[i].answer;
          data.push(row);
        }
        //  {type , title,value}
        // console.log("form", form);
        // console.log("answer", answer);
        // console.log("data", data);
        this.setState({
          form: form,
          answer: answer,
          data: data,
          body: this.generateBody(data),
          formTitle: form.title
        });
      });
    });
  }
  generateBody(data) {
    const res = [];

    if (data.length > 0) {
      data.forEach(element => {
        if (element.type !== "Location") {
          res.push(this.getElementNotMap(element));
        } else {
          res.push(this.getElementMap(element));
        }
      });
    }
    return res;
  }
  getElementNotMap(row) {
    return (
      <div>
        <b>{row.title}</b>
        {" " + ":" + " "}
        {row.value}
      </div>
    );
  }
  getElementMap(row) {
    const points = [];
    for (let i = 0; i < row.value.length; i++) {
      const point = { lat: row.value[i].lat, lng: row.value[i].lng };
      points.push(point);
    }
    return (
      <div
        style={{
          marginTop: "20px",
          display: "block",
          height: "300px",
          marginBottom: "40px"
        }}
      >
        <b>{row.title}</b>
        {" " + ":" + " "}
        <MapUnchangeComponent points={points}></MapUnchangeComponent>
      </div>
    );
  }
}

export default ShowSpeceficFormForManager;
