import { Table, Button } from "antd";
import React from "react";
import appService from "../../services/appService";
import authService from "../../services/authService";

class ShowAllForms extends React.Component {
  columns = [];
  state = {
    data: []
  };
  // data = [
  //   {
  //     key: "1",
  //     name: "فرم ثبت نام دانشجو",
  //     number: 1
  //   },
  //   {
  //     key: "2",
  //     name: "فرم انتخاب واحد",
  //     number: 2
  //   },
  //   {
  //     key: "3",
  //     name: "فرم حذف و اضافه",
  //     number: 3
  //   },
  //   {
  //     key: "4",
  //     name: "فرم حذف و اضافه",
  //     number: 4
  //   },
  //   {
  //     key: "5",
  //     name: "فرم حذف و اضافه",
  //     number: 5
  //   },
  //   {
  //     key: "6",
  //     name: "فرم حذف و اضافه",
  //     number: 6
  //   },
  //   {
  //     key: "7",
  //     name: "فرم حذف و اضافه",
  //     number: 7
  //   },
  //   {
  //     key: "8",
  //     name: "فرم حذف و اضافه",
  //     number: 8
  //   },
  //   {
  //     key: "9",
  //     name: "فرم حذف و اضافه",
  //     number: 9
  //   },
  //   {
  //     key: "10",
  //     name: "فرم حذف و اضافه",
  //     number: 10
  //   },
  //   {
  //     key: "11",
  //     name: "فرم حذف و اضافه",
  //     number: 11
  //   },
  //   {
  //     key: "12",
  //     name: "فرم حذف و اضافه",
  //     number: 12
  //   }
  // ];
  componentDidMount() {
    const service = new appService();
    service.getAllForms().then(res => {
      let data = res.data.forms.sort((a, b) => {
        if (a.number < b.number) {
          return 1;
        }
        if (a.number > b.number) {
          return -1;
        }
        return 0;
      });
      this.setState({ data: data });
    });
  }

  headerFixer = () => {
    this.columns = [
      {
        title: (
          <span style={{ color: "#006bd7" }}>
            {this.props.direc === "rtl" ? "شماره فرم" : "form number"}
          </span>
        ),
        dataIndex: "number",
        key: "number",
        width: "15%",
        align: "center",

        render: text => <span style={{ color: "#001529" }}>{text}</span>
      },
      {
        title: (
          <span style={{ color: "#006bd7" }}>
            {this.props.direc === "rtl" ? "نام فرم" : "form name"}
          </span>
        ),
        dataIndex: "name",
        key: "name",
        width: "70%",
        align: "center",
        render: text => <span style={{ color: "#001529" }}>{text}</span>
      },
      {
        title: (
          <span style={{ color: "#006bd7" }}>
            {this.props.direc === "rtl" ? "عملیات" : "َAction"}
          </span>
        ),
        width: "15%",
        align: "center",
        key: "action",
        render: (text, record) => (
          <span>
            <Button type="primary" onClick={() => this.handleShow(record.key)}>
              {this.rolebasedButtonCreater()}
            </Button>
          </span>
        )
      }
    ];
  };
  rolebasedButtonCreater() {
    const authServices = new authService();

    if (authServices.getRole() === "fieldAgent") {
      return this.props.direc === "rtl" ? "پر کردن" : "fill";
    } else {
      //control center
      return this.props.direc === "rtl" ? "مشاهده" : "show";
    }
  }

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
            ? "مشاهده تمام فرم های موجود"
            : "Showing all forms"}
        </h3>
        <Table
          columns={this.columns}
          dataSource={this.state.data}
          style={{
            backgroundColor: "white"
          }}
          bordered="true"
          tableLayout="auto"
          size="middle"
        />
      </div>
    );
    // return <Table columns={this.columns} dataSource={this.data} />;
  }
  handleShow(id) {
    this.props.history.push("/ShowSpeceficForm/" + id);
  }
}

export default ShowAllForms;
