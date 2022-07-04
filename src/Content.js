import React, {Component} from 'react';
import {Input} from "reactstrap";

class Content extends Component {
    state = {
        inputValue: ""
    }
    changeMessageInput = (event) => {
        this.setState({inputValue: event.target.value})
    }
   sendMessage=()=>{
        let fromID=3
       let toID =this.props.selectedUser.id
       let text = this.state.inputValue
       this.props.sendMessage(fromID,toID,text)
       this.setState({inputValue:""})
   }
    render() {
        const {selectedUser,history} = this.props
        return (
            selectedUser ? <div className={"content"}>
                <div className="row m-0 ">
                    <div className="col-12 header py-4 px-3">
                        <h1>{selectedUser.firstName + " " + selectedUser.lastName + " " + selectedUser.phone}</h1>
                    </div>
                </div>
                <div className="row bg-info m-0 history">
                    <div className="col-12">
                        {
                            history.map((item,index)=><div  key={index} className={"my-1 "}>
                                <div className={`message ${item.fromID===3 ? "offset-10":"fromID"}`}>
                                    {item.text}
                                    <span className={"date"}> {item.date}</span>
                                </div>
                            </div>)
                        }
                    </div>

                </div>
                <div className="row m-0">
                    <div className="col-12 input d-flex p-0 m-0">
                        <Input type="text" value={this.state.inputValue} onChange={this.changeMessageInput}/>
                        <button onClick={this.sendMessage} className={"btn btn-success send"}>Send</button>
                    </div>
                </div>
            </div> : " "


        );
    }
}

export default Content;