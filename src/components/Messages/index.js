import React, { Component } from 'react'
import { Segment, Comment } from 'semantic-ui-react'
import MessagesHeader from './MessagesHeader'
import MessageForm from './MessageForm'

export default class Messages extends Component {
  render() {
    return (
      <React.Fragment>
        <MessagesHeader />
        <Segment>
          <Comment.Group className="messages">
            {/* messages */}
          </Comment.Group>
        </Segment>

        <MessageForm />
      </React.Fragment>
    )
  }
}
