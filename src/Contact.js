import React from 'react'
import { Input, Form, TextArea, Divider, Button } from 'semantic-ui-react'

const Contact = () => (
    <div>
         <h2>Hell-Yo?</h2>
         <div>
            <p> Should the spirit move you, or you feel we could collaborate on any piece of orchestrated insanity, hit me up, and I promise I'll reply without getting distracted more then twice since that's the best one can do these days. </p>
         </div>
         
        <Divider />
    
        <Form action = "https://formspree.io/xlelewrk" method = "POST">
        <Input name="_replyto" fluid placeholder='Email' />
        <Divider />
            <TextArea name="message" placeholder='Message' />
            <Divider />
            <Button type="submit">Send Message</Button>
        </Form>
        <Divider />
        
    </div>
  
)

export default Contact