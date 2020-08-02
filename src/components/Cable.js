import React, { Fragment } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';

const Cable = ({ conversations, handleReceivedMessage }) => (
  <Fragment>
    {conversations.map((conversation) => (
      <ActionCableConsumer
        key={conversation.id}
        channel={{
          channel: 'MessagesChannel',
          conversation: conversation.id,
        }}
        onReceived={handleReceivedMessage}
      />
    ))}
  </Fragment>
);

export default Cable;
