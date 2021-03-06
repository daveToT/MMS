import React, { Component } from 'react';
import { Form, Input } from "antd";

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange = (event) => { this.setState({ value: event.target.value }) }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item label="角色名称">
                    {
                        getFieldDecorator('roleName', {
                            rules: [{ required: true, message: 'Please input your role!' }]
                        })(<Input onChange={this.handleChange} />)
                    }
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create()(AddForm);