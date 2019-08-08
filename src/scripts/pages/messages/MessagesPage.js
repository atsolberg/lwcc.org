import React from 'react';
import MessagesProvider from '../../state-providers/messages/MessagesProvider';
import Button from '../../components/button';

function MessagesPage() {
  return (
    <MessagesProvider>
      <Button variant="primary" size="lg">
        RSVP
      </Button>
      <div>Some Text here</div>
    </MessagesProvider>
  );
}

export default MessagesPage;
