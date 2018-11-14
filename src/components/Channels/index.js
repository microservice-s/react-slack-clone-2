import React, { Component } from 'react';
import { Menu, Icon, Modal, Form, Input, Button } from 'semantic-ui-react';

export default class Channels extends Component {
  state={
    channels: [],
    channelName: '',
    channelDetails: '',
    isModalOpen: false
  }

  openModal = () => this.setState({isModalOpen: true});

  closeModal = () => this.setState({isModalOpen: false});

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  });

  render() {
    const {channels, isModalOpen} = this.state;
    return (
      <React.Fragment>
      <Menu.Menu style={{ paddingBottom: '2em'}}>
        <Menu.Item>
          <span>
            <Icon name="exchange" /> CHANNELS{" "}
          </span>
          ({channels.length}) <Icon name="add" onClick={this.openModal}/>
        </Menu.Item>
        {/* channels */}

        {/* modal to add channels */}
        <Modal basic open={isModalOpen} onClose={this.closeModal}>
          <Modal.Header>Add Channel</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <Input 
                  fluid
                  label="Name of Channel"
                  name="channelName"
                  onChange={this.handleChange}
                />
              </Form.Field>

              <Form.Field>
                <Input 
                  fluid
                  label="About the Channel"
                  name="channelDetails"
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Modal.Actions>
                <Button color="green" inverted>
                  <Icon name="checkmark" /> Add
                </Button>
                <Button color="red" inverted onClick={this.closeModal}>
                  <Icon name="remove" /> Cancel
                </Button>
              </Modal.Actions>
            </Form>
          </Modal.Content>
        </Modal>
      </Menu.Menu>
      </React.Fragment>
    )
  }
}
