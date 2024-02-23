import React from 'react';
import image_2 from './images/image_2.jpg';
import './css/ionicons.min.css';
import './css/flaticon.css';
const Footer = () => {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker"></span>
                    <span className="text">28 Nentori, Pristina</span>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-phone"></span>
                      <span className="text">+383 43 905 854</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-envelope"></span>
                      <span className="text">support@myschool.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
           
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="Home">
                    <span className="ion-ios-arrow-round-forward mr-2"></span>Home
                  </a>
                </li>
                <li>
                  <a href="Courses">
                    <span className="ion-ios-arrow-round-forward mr-2"></span>Courses
                  </a>
                </li>
                <li>
                  <a href="Teachers">
                    <span className="ion-ios-arrow-round-forward mr-2"></span>Teachers
                  </a>
                </li>
                <li>
                  <a href="Pricing">
                    <span className="ion-ios-arrow-round-forward mr-2"></span>Pricing
                  </a>
                </li>
                <li>
                  <a href="Contact">
                    <span className="ion-ios-arrow-round-forward mr-2"></span>Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2">Subscribe Us!</h2>
              <form action="#" className="subscribe-form">
                <div className="form-group">
                  <input type="text" className="form-control mb-2 text-center" placeholder="Enter email address" />
                  <input type="submit" value="Subscribe" className="form-control submit px-3"/>
                </div>
              </form>
            </div>
        
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
