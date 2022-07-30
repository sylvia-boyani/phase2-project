import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
      <video src='/videos/vd.mp4' autoPlay loop muted />
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.linkedin.com/in/sylvia-boyani-7130a6196?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqX9lOZrLQA6J%2FMEbsJqyfA%3D%3D' target="_blank" real="noopener noreferrer">
              linkedIn</a>

              <a href='https://github.com/sylvia-boyani' target="_blank" real="noopener noreferrer">
              GitHub</a>

              <a href='https://www.instagram.com/boyani_sylvia/' target="_blank" real="noopener noreferrer">
              Instagram</a>

              <a href='https://twitter.com/BoyaniSylvia' target="_blank" real="noopener noreferrer">
              Twitter</a>
            
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Sly Advs
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TRVL © 2020</small>
          <div class='social-icons'>
          <a
              href="https://www.linkedin.com/in/sylvia-boyani-7130a6196?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqX9lOZrLQA6J%2FMEbsJqyfA%3D%3D"
              target='_blank'
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin-square"></i>
            </a>

            <a
              href="https://www.instagram.com/boyani_sylvia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram"></i>
            </a>

            <a
              href="https://twitter.com/BoyaniSylvia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-twitter"></i>
            </a>

            <a
          href="https://github.com/sylvia-boyani" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github-square"></i>
        </a>          
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
