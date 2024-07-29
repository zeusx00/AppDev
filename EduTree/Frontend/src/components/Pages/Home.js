import React from "react";
import './Home.css';

// Import your images
import heroImg from '../../assets/finaleduu.png';
import lunges from '../../assets/11702521.png';
import yoga from '../../assets/book_open-removebg-preview.png';
import ex from '../../assets/cap-removebg-preview.png';
import trainer from '../../assets/Teacher-Vector-Illustration-removebg-preview.png';

export const Home = () => {
  return (
    <div>
      {/* Section 1: Hero Section */}
      <section id='hero'>
        <div className="container">
          <div className="hero__wrapper">
            <div className="hero__content">
              <br/>
              <br/>
              <h2 className='section__title'>
                Education is the pillar of a <span className="highlights">Bright</span> Future
              </h2>
              <br></br>
              <p>
                Proper education is incredibly vital for a bright future.<br/>
                Ensuring that education is available to everyone regardless of who they are and where they are from goes a long way in improving the future of the world!
              </p>
              {/* <div className="hero__btns">
                <button className='register__btn'>Get Started</button>
                <button className='watch_btn'>
                  <span><i className="ri-play-fill"></i></span>Watch Video
                </button>
              </div> */}
            </div>
            <div className='hero__img'>
              <div className="hero__img-wrapper">
                <div className="box-01">
                  <div className="box-02">
                    <div className="box-03">
                      <div className="box__img">
                        <img src={heroImg} alt="Exercise" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="heart__rate">
                  <h5>Heart Rate</h5>
                  <span><i className="ri-heart-pulse-fill"></i></span>
                  <h6>100 BPM</h6>
                </div> */}
                {/* <div className="gym__location">
                  <span><i className="ri-map-pin-2-fill"></i></span>
                  <h5>Find our gym centers near you</h5>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Benefits of Exercise */}
      <section>
      <div className="container exercise__top">
        <h2 className="section__title">The necessity for <span className="highlights">Education</span></h2>
        <p>Education is vital for a person to navigate through life ,<br/> and improve themselves to be better people.</p>
        <div className="exercise__wrapper">
          {[{
            img: lunges,
            title: 'Job oppurtunities',
            desc: 'The pursuit for education brings with it tons of job oppurtunities.'
          }, {
            img: yoga,
            title: 'Improved intellect',
            desc: 'A proper education proves to be useful in developing intellect and common sense '
          }, {
            img: ex,
            title: 'Navigating through life',
            desc: 'Getting educated can make life and work easier for you in numerous ways!'
          }].map(({ img, title, desc }, index) => (
            <div key={index} className="exercise__item" data-aos-duration="1500" data-aos="zoom-in">
              <span className="exercise__icon"><img src={img} alt={title} /></span>
              <div className="exercise__content">
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Section 3: Subscription Plans */}
      <section id='membership'>
        <div className="container">
          <div className="pricing__top">
            <h2 className="section__title">Premium <span className="highlights">Subscription</span> plan</h2>
            <p>EduTree is a popular e-learning app that offers a premium subscription service.<br />The premium version includes advanced progress tracking, customized course selection, and exclusive content.</p>
          </div>

          <div className="pricing__wrapper">
            <div className="pricing__item" data-aos-duration="1500" data-aos="fade-up">
              <div className="pricing__card-top">
                <h2 className=''>Regular Member</h2>
                <h2 className="pricing">$9.99 <span>/month</span></h2>
              </div>

              <div className="services">
                <ul>
                  <li>Unlimited access to the App</li>
                  <li>Customer support</li>
                  <li>Personal trainer</li>
                  <li>Personalised material</li>
                  <li>Demo online classes</li>
                </ul>

                <button className='register__btn'>Buy Now</button>
              </div>
            </div>

            <div className="pricing__item pricing__item-02" data-aos-duration="1500" data-aos="fade-up">
              <div className="pricing__card-top">
                <h2 className=''>Gold Member</h2>
                <h2 className="pricing">$79.99 <span>/year</span></h2>
              </div>

              <div className="services">
                <ul>
                  <li>Unlimited access to the App</li>
                  <li>Customer support</li>
                  <li>Personal trainer</li>
                  <li>Personal material</li>
                  <li>Free online classes</li>
                  <li>Free access to our edu centres</li>
                </ul>

                <button className='register__btn'>Buy Now</button>
              </div>
            </div>

            <div className="pricing__item" data-aos-duration="1500" data-aos="fade-up">
              <div className="pricing__card-top">
                <h2 className=''>Standard Member</h2>
                <h2 className="pricing">$49.99 <span>/year</span></h2>
              </div>

              <div className="services">
                <ul>
                  <li>Unlimited access to the App</li>
                  <li>Customer support</li>
                  <li>Personal trainer</li>
                  <li>Personalised material</li>
                  <li>Free online classes</li>
                </ul>
                <button className='register__btn'>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action */}
      <section id='call-to-action'>
        <div className="container">
          <div className="start__wrapper">
            <div className="start__img" style={{ width: '50%', maxWidth: '400px' }}>
              <img src={trainer} alt="Personal Trainer" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="start__content">
              <h2 className="section__title">
                Ready to pursue your <span className="highlights">Dream?</span>
              </h2>
              <p>
                Remember, it's important to start slowly and gradually increase the duration of your study routine. Consult us as your academic advisors before starting any new courses. Good luck, and enjoy the journey with us towards a smarter you!
              </p>
              <button className="register__btn"><a href="/login">Get Started</a></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
