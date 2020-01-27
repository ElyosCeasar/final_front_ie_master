import React, { Component } from "react";
import { CSVLink, CSVDownload } from "react-csv";
import {
  Table,
  Button,
  Progress,
  Modal,
  Input,
  DatePicker,
  InputNumber,
  Select,
  notification
} from "antd";
import answerService from "../../services/answerService";
import appService from "../../services/appService";
import areaService from "../../services/areaService";
const { Option } = Select;
class ShowDashbordForSpeceficForm extends Component {
  state = {
    percent: 0,
    data: [],
    ElementValues: [],
    visible: false
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
        render: text => <span style={{ color: "#001529" }}>{text}</span>
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
          {typeof this.state.form !== "undefined"
            ? " " + this.state.form.title + " "
            : ""}
        </h3>
        <div
          style={{
            backgroundColor: "white",

            marginBottom: "20px",
            padding: 10
          }}
        >
          {this.props.direc === "rtl"
            ? "درصد پاسخ‌های این فرم به کل پاسخ‌ها"
            : "this form answers per all answers"}

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
          <Button
            style={{ marginRight: "5px", marginLeft: "10px" }}
            type="primary"
            icon="search"
            onClick={this.showModal}
          >
            {this.props.direc === "rtl" ? "جست‌ و‌ جو" : "search"}
          </Button>
          <CSVLink data={this.state.data}>
            <Button type="primary">
              {this.props.direc === "rtl" ? "گرفتن خروجی csv" : "export csv"}
            </Button>
          </CSVLink>
          <Modal
            title={this.props.direc === "rtl" ? "جست‌ و‌ جو" : "search"}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            {this.getSearchItem()}
          </Modal>
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

            marginBottom: "20px",
            marginTop: "20px",
            padding: 10
          }}
        >
          {this.getFooter()}
        </div>
      </div>
    );
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
      // console.log("per", res);
      this.setState({ percent: res.data });
    });
  }
  async getData() {
    if (typeof this.state.form !== "undefined") {
      console.log("s1", this.state.formAnswerArray);
      //  console.log("s2", this.state.form.title);
      const areaServices = new areaService();
      const answers = this.state.formAnswerArray;
      const form = this.state.form.fields;
      const data = [];
      const columnTypes = [];
      for (let j = 0; j < form.length; j++) {
        columnTypes.push(form[j].type);
      }

      for (let i = 0; i < answers.length; i++) {
        const row = {};

        for (let j = 0; j < form.length; j++) {
          if (columnTypes[j] === "Location") {
            row[form[j].name] = this.props.direc === "rtl" ? "نقشه" : "map";

            if (answers[i].fields[j].answer.length > 0) {
              await areaServices
                .getAllAreasNameForPoligon(answers[i].fields[j].answer)
                .then(data => {
                  console.log("x24", data);
                  row.area = data.data.join();
                });
            } else {
              row.area = "ندارد";
            }
          } else row[form[j].name] = answers[i].fields[j].answer;
        }
        row.username = answers[i].username;
        row.time = answers[i].time;
        row._id = answers[i]._id;
        data.push(row);
      }

      this.setState({ data: data, columnTypes: columnTypes });
      // setTimeout(() => {
      //   this.setState({ data: data, columnTypes: columnTypes });
      //   setTimeout(() => {
      //     //retry
      //     this.setState({ data: data, columnTypes: columnTypes });
      //   }, 1200);
      // }, 800);

      // this.data = data;
    }
  }
  handleShow(answerId) {
    this.props.history.push("/ShowSpeceficFormForManager/" + answerId);
  }
  //start footer part
  getFooter() {
    let res = [];
    if (typeof this.state.form !== "undefined") {
      const NumberOfNumberColumns = this.FindAllNumbersOfColumnNumbers();
      for (let i = 0; i < NumberOfNumberColumns.length; i++) {
        res.push(this.createSumOfColumn(NumberOfNumberColumns[i]));
      }
    }
    return res;
  }
  FindAllNumbersOfColumnNumbers() {
    let res = [];
    for (let i = 0; i < this.state.form.fields.length; i++) {
      if (this.state.form.fields[i].type === "Number") {
        res.push(i);
      }
    }
    return res;
  }
  createSumOfColumn(i) {
    return (
      <div>
        <span>
          <b>{this.state.form.fields[i].title}</b>
        </span>
        {" " + ":" + " "}
        <span style={{ color: "#006bd7" }}>{this.getSumColumn(i)}</span>
      </div>
    );
  }
  getSumColumn(index) {
    const answers = this.state.formAnswerArray;
    let sum = 0;
    for (let i = 0; i < answers.length; i++) {
      sum += answers[i].fields[index].answer;
    }
    return sum;
  }
  //end footer
  //start modal part
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    console.log("zio" + this.state.ElementValues);
    const searchItem = [];
    for (let i = 0; i < this.state.form.fields.length; i++) {
      const row = {};
      row.type = this.state.form.fields[i].type;
      row.name = this.state.form.fields[i].name;
      if (row.type !== "Location") row.value = this.state.ElementValues[i];
      else
        row.value = {
          lat: this.state.ElementValues[i].substring(
            0,
            this.state.ElementValues[i].lastIndexOf("|")
          ),
          lng: this.state.ElementValues[i].substring(
            this.state.ElementValues[i].lastIndexOf("|") + 1
          )
        };
      console.log("ppp", row.value);
      searchItem.push(row);
    }

    const formId = this.props.match.params.id;
    const aservice = new answerService();
    aservice
      .filterAnswersForGrid(searchItem, formId)
      .then(res => {
        console.log("filter", res);
        this.setState({
          formAnswerArray: res.data
        });
      })
      .finally(() => {
        this.getData();
        this.setState({
          visible: false
        });
      });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  getSearchItem() {
    let res = [];
    let ElementValues = [...this.state.ElementValues];
    if (typeof this.state.form !== "undefined") {
      for (let i = 0; i < this.state.form.fields.length; i++) {
        console.log("lala", this.state.form.fields);
        if (this.state.form.fields[i].type === "Location") {
          res.push(
            this.buildItemMap(this.state.form.fields[i], i, ElementValues[i])
          );
        } else if (this.state.form.fields[i].type === "Date") {
          //for now
          // res.push(
          //   this.buildItemDate(this.state.form.fields[i], i, ElementValues[i])
          // );
        } else if (this.state.form.fields[i].type === "Number") {
          res.push(
            this.buildItemNumber(this.state.form.fields[i], i, ElementValues[i])
          );
        } else {
          res.push(
            this.buildItemNotSpecial(
              this.state.form.fields[i],
              i,
              ElementValues[i]
            )
          );
        }
      }
      // res.push(this.buildItemLastPart(this.state.form));
    }
    return res;
  }
  buildItemNotSpecial(row, i, ElementValue) {
    return (
      <div>
        <span>{row.title} :</span>
        <Input
          value={ElementValue}
          itemId={i}
          key={i}
          onChange={this.inputOnChangeHandeler}
        ></Input>
      </div>
    );
  }
  buildItemDate(row, i, ElementValue) {
    return (
      <div>
        <span>{row.title} :</span>
        <DatePicker
          id={"xdate" + i}
          style={{ display: "block", width: "100%" }}
          value={ElementValue}
          defaultValue={0}
          itemId={i}
          key={i}
          onChange={e => this.DatePickerOnChangeHandeler(e, i)}
        ></DatePicker>
      </div>
    );
  }
  buildItemMap(row, i, ElementValue) {
    return (
      <div>
        <span>
          {row.title} (لطفا با فرمت زیر نقطه‌ی مورد نظر را وارد کنید):
        </span>
        <Input
          value={ElementValue}
          itemId={i}
          placeholder="lng|lat"
          key={i}
          onChange={this.inputOnChangeHandeler}
        ></Input>
      </div>
    );
  }
  buildItemNumber(row, i, ElementValue) {
    return (
      <div>
        <span>{row.title} :</span>
        <InputNumber
          style={{ display: "block", width: "100%" }}
          value={ElementValue}
          itemId={i}
          key={i}
          onChange={e => this.inputNumberOnChangeHandeler(e, i)}
        ></InputNumber>
      </div>
    );
  }
  inputOnChangeHandeler = e => {
    //itemid is also index of ElementValues
    // console.log(e.target.value);

    let ElementValues = [...this.state.ElementValues];
    ElementValues[e.target.getAttribute("itemId")] = e.target.value; //can also get i directly like others
    this.setState({ ElementValues: ElementValues });
  };
  inputNumberOnChangeHandeler = (e, i) => {
    // console.log(e);
    let ElementValues = [...this.state.ElementValues];
    ElementValues[i] = e;
    this.setState({ ElementValues: ElementValues });
  };
  DatePickerOnChangeHandeler = (e, i) => {
    // console.log(e._d, i);
    let ElementValues = [...this.state.ElementValues];
    ElementValues[i] = e._d;
    this.setState({ ElementValues: ElementValues });
  };

  //end modal part
}

export default ShowDashbordForSpeceficForm;
