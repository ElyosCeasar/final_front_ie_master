import React, { Component } from "react";
import { CSVLink, CSVDownload } from "react-csv";
import { Table, Button, Progress } from "antd";
import answerService from "../../services/answerService";
import appService from "../../services/appService";
class ShowDashbordForSpeceficForm extends Component {
  state = {
    percent: 0,
    data: []
  };
  columns = [];

  componentDidMount() {
    const id = this.props.match.params.id;
    const aservice = new answerService();
    const service = new appService();
    service
      .getSpeceficFormById(id)
      .then(res =>
        aservice
          .getAllAnswersByFormId(id)
          .then(res2 =>
            this.setState({ formAnswerArray: res2.data, form: res.data.form })
          )
      );
    this.getPercent(id);
    this.getData();
    const idOfInterval = setInterval(() => {
      if (this.state.data.length === 0) {
        this.getData();
      } else {
        clearInterval(idOfInterval);
      }
    }, 1000);
  }

  headerFixer = () => {
    const partFirst = [
      {
        title: (
          <span style={{ color: "#006bd7" }}>
            {this.props.direc === "rtl" ? "ناحیه" : "area"}
          </span>
        ),
        dataIndex: "area",
        key: "area",
        width: 100,
        align: "center",
        render: text => <span style={{ color: "#001529" }}>59</span>
      }
    ];
    const partMiddle = this.getMiddlePart();
    const partLast = [
      {
        title: (
          <span style={{ color: "#006bd7" }}>
            {this.props.direc === "rtl" ? "نام کاربری" : "username"}
          </span>
        ),
        dataIndex: "username",
        key: "username",
        width: 150,
        align: "center",

        render: text => <span style={{ color: "#001529" }}>{text}</span>
      },
      {
        title: (
          <span style={{ color: "#006bd7" }}>
            {this.props.direc === "rtl" ? "تاریخ ارسال" : "time"}
          </span>
        ),
        dataIndex: "time",
        key: "time",
        width: 100,
        align: "center",

        render: text => <span style={{ color: "#001529" }}>{text}</span>
      },
      {
        title: (
          <span style={{ color: "#006bd7" }}>
            {this.props.direc === "rtl" ? "عملیات" : "َAction"}
          </span>
        ),
        width: 100,
        align: "center",
        key: "action",
        render: (text, record) => (
          <span>
            <Button type="primary" onClick={() => this.handleShow(record._id)}>
              {this.props.direc === "rtl" ? "مشاهده" : "show"}
            </Button>
          </span>
        )
      }
    ];

    this.columns = [...partFirst, ...partMiddle, ...partLast];
  };
  render() {
    this.headerFixer();

    return (
      <div
        style={{
          textAlign: this.props.direc === "rtl" ? "right" : "left"
        }}
      >
        <h3 style={{ color: "white", marginRight: "3px", marginLeft: "3px" }}>
          {this.props.direc === "rtl"
            ? "داشبرد فرم بحران"
            : "disaster dashboard"}
          {/* {
            this.state.f
            } */}
        </h3>
        <div
          style={{
            backgroundColor: "white",

            marginBottom: "20px",
            padding: 10
          }}
        >
          درصد پاسخ‌های این فرم به کل پاسخ‌ها
          <Progress
            style={{ paddingRight: "8px", paddingLeft: "20px" }}
            type="circle"
            percent={this.state.percent}
            status="normal"
          />
        </div>
        <div
          style={{
            backgroundColor: "white",
            marginBottom: "20px",
            marginTop: "20px",
            padding: 10
          }}
        >
          <CSVLink data={this.state.data}>
            <Button type="primary">گرفتن خروجی csv</Button>
          </CSVLink>
          {/* <CSVLink data={this.state.data}>Download me</CSVLink> */}

          <Table
            columns={this.columns}
            dataSource={this.state.data}
            style={{
              backgroundColor: "white",
              marginTop: "10px"
            }}
            bordered="true"
            tableLayout="auto"
            size="middle"
          />
        </div>
        <div
          style={{
            backgroundColor: "white",
            height: "100px",
            marginBottom: "20px",
            marginTop: "20px",
            padding: 10
          }}
        ></div>
      </div>
    );
  }
  getCsv() {
    alert("not implimented");
  }
  getMiddlePart() {
    let res = [];
    if (typeof this.state.form !== "undefined") {
      for (let i = 0; i < this.state.form.fields.length; i++) {
        const newItem = {
          title: (
            <span style={{ color: "#006bd7" }}>
              {this.state.form.fields[i].title}
            </span>
          ),
          dataIndex: this.state.form.fields[i].name,
          key: this.state.form.fields[i].name,
          width: 150,
          align: "center",

          render: text => <span style={{ color: "#001529" }}>{text}</span>
        };
        res.push(newItem);
      }
    }
    return res;
  }
  getPercent(id) {
    const aservice = new answerService();
    aservice.getAnswerStatesticByFormId(id).then(res => {
      console.log("per", res);
      this.setState({ percent: res.data });
    });
  }
  getData() {
    if (typeof this.state.form !== "undefined") {
      // console.log("s1", this.state.formAnswerArray);
      console.log("s2", this.state.form.fields);
      const answers = this.state.formAnswerArray;
      const form = this.state.form.fields;
      const data = [];
      for (let i = 0; i < answers.length; i++) {
        const row = {};
        row.area = 51;
        for (let j = 0; j < form.length; j++) {
          row[form[j].name] = answers[i].fields[j].answer;
        }
        row.username = answers[i].username;
        row.time = answers[i].time;
        data.push(row);
      }
      console.log("x86", data);
      this.setState({ data: data });
      // this.data = data;
    }
  }
}

export default ShowDashbordForSpeceficForm;
