import React from 'react';
import logo from './logo.svg';
import './HomePage.css';
import $ from 'jquery';
import IntroDiv from './IntroDiv.js'
import Events from './Events'
import Footer from './Footer'
import Blog from './Blog'
import Contact from './Contact'
import Demo4 from './Collage'
import { Divider, Image } from 'semantic-ui-react';

$(window).scroll(function() {
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();

function HomePage() {
  return (
    <div>
      {/* <StickyExampleAdjacentContext /> */}
    {/* <TopButtonStack/>   */}
    <IntroDiv />
    <div class="panel_header">
      <h2>Events</h2>
      <Divider />
    </div>
    <Events />
    <div class="panel_header">
      <h2>Blogs</h2>
      <Divider />
    </div>
    <div class="panel" data-color="blue">
      <Blog />
    </div>
    <div class="panel_header" >
      <h2>LIGHTS, CAMERA, STAGE!</h2>
      <Divider />
    </div>
    <div class="panel" data-color="light-blue">
      <Demo4/>
    </div>
    <div class="panel_header">
      <h2>Follow My Content</h2>
      <Divider />
    </div>
    <div class="panel" data-color="pink">
        <Image
          src="https://live.staticflickr.com/65535/49556161186_b2954379c0_z.jpg"
          as='a'
          size='medium'
          href='https://www.instagram.com/beentherepunthat/'
          target='_blank'
          rounded
        />
        <Image
          src="https://live.staticflickr.com/65535/49652172227_c1a69c3075_z.jpg"
          as='a'
          size='medium'
          href='https://www.instagram.com/p/B9Ol7b8INEc/?igshid=hxzrqdhyfy85'
          target='_blank'
          rounded
        />
        <Image
          src="https://live.staticflickr.com/65535/49556164911_0f8380b228_z.jpg"
          as='a'
          size='medium'
          href='https://www.instagram.com/laalipooli/'
          target='_blank'
          rounded
        />
    </div>

    <div class="panel" data-color="dark-pink">
       <Contact />
    </div>
    <Footer />
      
    </div>
  );
}

export default HomePage;
