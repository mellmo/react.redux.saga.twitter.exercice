
import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const User = ({
		image,
		title,
		created_at,
		description,
    followers,
    onClick
	}) => (
  <Card onClick={onClick} style={{fontSize: '10px'}}>
    <Card.Content>
   	 <Image floated='left' src={image} size='tiny' />
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in {created_at}</span>
      </Card.Meta>
      <Card.Meta>
        <span>
          <Icon name='user' />
          {followers} Followers
        </span>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default User;