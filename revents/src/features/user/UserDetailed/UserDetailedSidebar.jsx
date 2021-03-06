import React from 'react';
import { Segment, Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const UserDetailedSidebar = ({ isCurrentUser, profile}) => {
  return (
    <Grid.Column width={4}>
      <Segment>
        {isCurrentUser ? (
          <Button
            as={Link}
            to='/settings'
            color='teal'
            fluid
            basic
            content='Edit Profile'
          />
        ) : (
          <Button color='teal' fluid basic content={profile.displayName} />
        )}
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedSidebar;