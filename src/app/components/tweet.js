
import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Tweet = ({
		created_at,
		text
	}) => (
  <Card style={{fontSize: '10px'}}>
    <Card.Content>
      <Card.Description>
        {text}
      </Card.Description>
      <Card.Meta>
        <span className='date'>{created_at}</span>
      </Card.Meta>
    </Card.Content>
  </Card>
)

export default Tweet;