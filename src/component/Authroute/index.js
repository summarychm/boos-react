import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "../../redux/user.redux";

@withRouter
@connect(state => state.user, { loadData })
class AuthRoute extends React.PureComponent {
  componentDidMount() {
    const publicList = ["/login", "/register"];
    const pathUrl = this.props.location.pathname;
    //现在的url地址,非login进行跳转
    if (publicList.indexOf(pathUrl) > -1) {
      return null;
    }
    //获取用户信息
    axios.get("/user/info").then(res => {
      let { status, data } = res;
      const { history } = this.props;
      if (status === 200 && data.code === "0") {
        this.props.loadData(res.data.data);

        // console.log("当前state为", this.props);
        // //用户的type是boss还是牛人
        // if (this.props.type) {
        //   this.props.type === "boss"
        //     ? history.push("genius")
        //     : history.push("boss");
        // }
        
        //用户是否已经完善了个人信息
      } else history.push("/login"); //登录失败或未登录
    });
  }

  render() {
    return null;
  }
}

export default AuthRoute;
