
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
  <Card onClick={onClick}>
    <Card.Content>
   	 <Image floated='left' src={image} size='tiny' />
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in {created_at}</span>
      </Card.Meta>
      <Card.Meta>
        <a>
        <Icon name='user' />
        {followers} Followers
      </a>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default User;