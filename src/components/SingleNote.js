import React from 'react'
import { connect } from 'react-redux'
import { Segment, Header, Grid  } from 'semantic-ui-react';


const SingleNote = ({id, name }) => (
  <Grid.Column width={4}>
    <Segment inverted color='blue'>
      <Header>  </Header>
        <Segment basic> { name } </Segment>
    </Segment>
 </Grid.Column>
)

export default connect()(SingleNote);
