import React from 'react'
import { Card, Icon, Image, Divider } from 'semantic-ui-react'
import HasiToPhasi from './HasiToPhasi.jpeg'
import LaheLahe from './LaheLahe.jpeg'
import Sanity from './Sanity.jpeg';
import WomensMedley from './WomensMedley.jpg'

const Events = () => (
  
  <div class= "panel margin_event" data-color="orange">
    <Card.Group stackable>
        <Card>
            <Image src={WomensMedley} wrapped ui={false} />
            <Card.Content>
                <Card.Header>Women's Day Medley</Card.Header>
                    <Card.Meta>8th March 2020</Card.Meta>
                    <Card.Description>
                        An hour of storytelling and games for kids of all ages
                    </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='location arrow' />
                Artkhoj, J.P Nagar
            </Card.Content>
        </Card>
        <Card>
            <Image src={Sanity} wrapped ui={false} />
            <Card.Content>
                <Card.Header>Sanity is Over Rated</Card.Header>
                    <Card.Meta>22nd Feb 2020</Card.Meta>
                    <Card.Description>
                        An hour of storytelling and games for kids of all ages
                    </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='location arrow' />
                IIIT Bangalore
            </Card.Content>
        </Card>
        <Card>
            <Image src="https://live.staticflickr.com/65535/49651500521_25af580679_z.jpg" wrapped ui={false} />
            <Card.Content>
                <Card.Header>Alakh Niranjan</Card.Header>
                    <Card.Meta>2nd Feb 2020</Card.Meta>
                    <Card.Description>
                        An hour of storytelling and games for kids of all ages
                    </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='location arrow' />
                Amrutha Sparkling Nest
            </Card.Content>
        </Card>
        <Card>
        <Image src={HasiToPhasi} wrapped ui={false} />
        <Card.Content>
            <Card.Header>Hasi To Phasi</Card.Header>
                <Card.Meta>1st Feb 2020</Card.Meta>
                <Card.Description>
                    An interactive session to explore the marriage of humour with poetry, filled with fun activities and dubious games
                </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Icon name='location arrow' />
            Atta Galatta, Koramangala
        </Card.Content>
    </Card>
     
    <Card>
        <Image src={LaheLahe} wrapped ui={false} />
        <Card.Content>
            <Card.Header>LOL Se Troll Tak</Card.Header>
                <Card.Meta>22nd Dec 2019</Card.Meta>
                <Card.Description>
                    A comedy show collabration by four independent Bangalore comics
                </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Icon name='location arrow' />
            Lahe Lage, Indira Nagar
        </Card.Content>
    </Card>
    </Card.Group>
   
  </div>

  
)

export default Events