import React from 'react';
import './Home.css'
import { Form, Input, Checkbox, Button, Layout } from 'element-react';

import 'element-theme-default';

class Home extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
          form: {
            voucher_number: '',
            name_full: '',
            contact_number: '',
            check: []
          }
        };
      }
      
      onSubmit(e) {
        e.preventDefault();
      }
      
      onChange(key, value) {
        this.state.form[key] = value;
        this.forceUpdate();
      }

      
    render() {
      return (
        <div>
          <Layout.Row>
            <Layout.Col span={10} offset={12} style={{ marginTop: '30vh'}}>
              <Form className="en-US" model={this.state.form} labelWidth="120" labelPosition="top" onSubmit={this.onSubmit.bind(this)}>
                <Form.Item label="Voucher No.">
                    <Input value={this.state.form.voucher_number} onChange={this.onChange.bind(this, 'voucher_number')}></Input>
                </Form.Item>
                
                <Form.Item label="Full Name">
                    <Input value={this.state.form.name_full} onChange={this.onChange.bind(this, 'name_full')}></Input>
                </Form.Item>
                
                <Form.Item label="Contact No.">
                    <Input value={this.state.form.contact_number} onChange={this.onChange.bind(this, 'contact_number')}></Input>
                </Form.Item>

                <Form.Item>
                    <Checkbox.Group onChange={this.onChange.bind(this, 'check')}>
                        <Checkbox label="Yes, I agree with Terms & Conditions applied" name="check"></Checkbox>
                    </Checkbox.Group>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" nativeType="submit">Play Game</Button>
                </Form.Item>
              </Form>
            </Layout.Col>
          </Layout.Row>
        </div>
      );
    }
  }

export default Home;
