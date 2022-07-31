import React from 'react';
import '../../App.css';
import { Button } from '../Button';

export default function Products() {
  return <h1 className='products'>
  <div className='contact' id='contact'>
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
  </h1>;
}
