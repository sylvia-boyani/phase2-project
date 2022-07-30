import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from "./Button";

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out My EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/madaascar2.jpg'
              text='Explore Madagascar with its beautiful baobab trees'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/madapeople.jpg'
              text='Travel through the Roads of Magagascar and explore it culture and people'
              label='Culture'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/seychells1.jpeg'
              text='Enjoy in-house comforts with indoors heated swimming pool🏊🏼‍♀️🏊🏼‍♀️'
              label='Relation'
              path='/services'
            />
            <CardItem
              src='images/seychels2.jpg'
              text='Walk on its sandy clean beaches of Seychells and experience its beautiful sunset🌄'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/sychells3.jpeg'
              text='Experience Luxury and comfort like no other🍴'
              label='Luxery'
              path='/sign-up'
            />

            
          </ul>
        </div>
      </div>

      <div className='cards__container2'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/italy2.jpeg'
              text='Let us go to Italy 🤩'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/Itlay4.jpg'
              text='Travel through the Streets of Italy🛣️'
              label='Culture'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/japan1.jpg'
              text='Japan here we come!!🥳🥳'
              label='Relation'
              path='/services'
            />
            <CardItem
              src='images/japan2.jpg'
              text='Visit the most beautiful places of japan🥰🥰🥰'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/japan3.jpg'
              text='Experience the nature and japans beautiful trees'
              label='Luxery'
              path='/sign-up'
            />

            
          </ul>
        </div>
      </div>

      <div className='contact'>
        <h1>CONTACT ME</h1>
      <p className='footer-subscription-text'>
          You can write me an email any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
             <input
              className='footer-input'
              name='name'
              type='text'
              placeholder='Your Name Please?'
            />
            <Button buttonStyle='btn--outline'>Submit</Button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Cards;
