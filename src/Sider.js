import React, {Component,} from 'react';
import SiderModal from "./Sider Modal";
import {Button} from 'reactstrap';

class Sider extends Component {
    state = {
        modalTrueFalse: false,
    }
    toggle = () => {
        this.setState({modalTrueFalse: !this.state.modalTrueFalse})
    }
    userClicked =(user)=>{
     this.props.selectUser(user)
    }
    render() {
        const {selectedUser} = this.props
        return (
            <div className={"Sider p-2"}>
                <Button onClick={this.toggle} modalAdd={this.modalAdd} className={"btn btn-dark w-100 "}>Add
                    user</Button>
                <SiderModal pushUser={this.props.pushUser} toggle={this.toggle} state={this.state}/>
                <hr/>
               <ul className={"list-group"}>
                   {this.props.users.map((item, index) => {
                       return <li  onClick={()=>this.userClicked(item)} key={index} className={`list-group-item ${selectedUser.id===item.id ? "active":" "} ` }>{item.firstName + " "+ item.lastName}</li>

                   })}
               </ul>
            </div>

        );
    }
}

export default Sider;