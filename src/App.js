import React, {Component} from 'react';
import Sider from "./Sider";
import Content from "./Content";

import 'bootstrap/dist/css/bootstrap.css';
import "./index.css"

class App extends Component {
    state = {
        users: [],
        selectedUser: "",
        messages: [],
        history: []
    }
    sendMessage = (fromID, toID, text) => {
        let date = new Date();
        let message = {fromID, toID, text, date: date.getHours() + ":" + date.getMinutes()}
        let a = this.state.messages
        a.push(message)
        this.setState({messages: a})
        localStorage.setItem("messages", JSON.stringify(a))
        this.getMessageHistory(this.state.selectedUser)
    }
    pushUser = (firstName, lastName, phone) => {
        let a = this.state.users
        a.push({id: a.length, firstName: firstName, lastName: lastName, phone: phone})
        this.setState({users: a})
        localStorage.setItem("users", JSON.stringify(a))
    }
    selectUser = (user) => {
        this.setState({selectedUser: user})
        localStorage.setItem("selectedUser", JSON.stringify(user))
        this.getMessageHistory(user)

    }
    getMessageHistory = (user) => {
        console.log(user)
        let messages = localStorage.getItem("messages")
        if (messages) {
            let messagesParse = JSON.parse(messages)
            let history = messagesParse.filter((item) => item.fromID === 3 && item.toID === user.id || item.fromID === user.id && item.toID === 3)
            this.setState({history})
        }


    }


    componentDidMount() {
        const userstring = localStorage.getItem("users");
        if (userstring) {
            let userArray = JSON.parse(userstring)
            this.setState({users: userArray})
        }
        const selectedUser = localStorage.getItem("selectedUser")
        if (selectedUser) {
            let selectedUserParse = JSON.parse((selectedUser))
            this.setState({selectedUser: selectedUserParse})
            this.getMessageHistory(selectedUserParse)
        }
        const messages = localStorage.getItem("messages")
        if (messages) {
            let messagesParse = JSON.parse(messages)
            this.setState({messages: messagesParse})
        }
    }


    render() {
        return (
            <div className={"container-fluid"}>
                <div className="row">
                    <div className="col-3 p-0 ">
                        <Sider users={this.state.users} pushUser={this.pushUser} selectUser={this.selectUser}
                               selectedUser={this.state.selectedUser}/>
                    </div>
                    <div className="col-9 p-0 ">
                        <Content history={this.state.history} selectedUser={this.state.selectedUser}
                                 sendMessage={this.sendMessage}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;