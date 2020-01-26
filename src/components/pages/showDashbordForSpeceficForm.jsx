import React, { Component } from "react";
import { Table, Button, Progress } from "antd";
import answerService from "../../services/answerService";
import appService from "../../services/appService";
class ShowDashbordForSpeceficForm extends Component {
  state = {
    formAnswerArray: []
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
            percent={100}
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
          <Button type="primary" onClick={this.getCsv}>
            گرفتن خروجی csv
          </Button>
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
    console.log("s7", this.state);
    if (typeof this.state.form !== "undefined")
      console.log("s6", this.state.form.fields[0]);
    let res = [];
    if (typeof this.state.form !== "undefined")
      for (let i = 0; i < this.state.form.fields.length; i++) {
        const newItem = {
          title: (
            <span style={{ color: "#006bd7" }}>
              {this.state.form.fields[i].title}
            </span>
          ),
          dataIndex: "time",
          key: "time",
          width: 150,
          align: "center",

          render: text => <span style={{ color: "#001529" }}>{text}</span>
        };
        res.push(newItem);
      }
    return res;
  }
}

export default ShowDashbordForSpeceficForm;
