import React from 'react'
import { Card,Divider } from 'semantic-ui-react'
import styled from 'styled-components'


const StyledCard = styled(Card)`
  &&& {
    background-color: transparent;
   } 
   
`;

const StyledCardContent = styled(Card.Content)`
  && {
    color : white;
   } 
   &:hover {
    color: black;
  }
`;

const Blog = () => (
  <Card.Group>
    <StyledCard href='https://medium.com/@tarini.chandrashekhar/the-magic-chalice-a-comprehensive-guide-on-menstrual-cups-7da66187e5b5'>
      <StyledCardContent>
       <h5>The Magic Chalice — A comprehensive guide on menstrual cups </h5>
        <Divider />
        <h7>2019</h7>
        </StyledCardContent>
    </StyledCard>

    <StyledCard href='https://medium.com/@tarini.chandrashekhar/elixir-of-the-mortals-bdb89f59ed8c'>
      <StyledCardContent>
       <h5>Elixir of the Mortals</h5>
        <Divider />
        <h7>2019</h7>
        </StyledCardContent>
    </StyledCard>
    
    <StyledCard href='https://medium.com/@tarini.chandrashekhar/a-weaver-of-stories-my-grandfather-1a10eaf8e2bf'>
      <StyledCardContent>
       <h5>A Weaver of Stories — my grandfather</h5>
        <Divider />
        <h7>2019</h7>
        </StyledCardContent>
    </StyledCard>
  </Card.Group>
)

export default Blog