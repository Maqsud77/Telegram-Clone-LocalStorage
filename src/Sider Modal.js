import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Form, Button, Label, Input, FormGroup} from 'reactstrap';

class SiderModal extends Component {

    saveForm = (event) => {
        event.preventDefault();
        let firstName = event.target[0].value
        let lastName = event.target[1].value
        let phone = event.target[2].value
        this.props.pushUser(firstName,lastName,phone)
        this.props.toggle()
    }

    render() {
        const {modalTrueFalse}=this.props.state
        const {toggle}=this.props
        return (
            <div>
                <Modal isOpen={modalTrueFalse} toggle={toggle}>
                    <ModalHeader>
                        Add User
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.saveForm} id={"addUser"}>
                            <FormGroup>
                                <Label for="firstName">FirstName</Label>
                                <Input type="text" name="firstName" id="firstName" placeholder="FirstName"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="lastName">LastName</Label>
                                <Input type="text" name="lastName" id="lastName" placeholder="LastName"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="phoneNumber">PhoneNumber</Label>
                                <Input type="number" name="lastName" id="phoneNumber" placeholder="PhoneNumber"/>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button className={"btn btn-success"} form={"addUser"}   >Save</Button>
                        <Button className={"btn btn-danger"} onClick={toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default SiderModal;