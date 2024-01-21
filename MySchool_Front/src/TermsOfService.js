import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

function TermsOfService() {
    return (
      <div className="container vh-100" style={{ backgroundColor: '#ffff' }}>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{ borderRadius: '25px' }}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-10 col-xl-10">
              <div className="container">
                  <h2 className="mb-2">Terms of Service</h2>

                  <p>
                      Welcome to MySchool! These terms of service govern your use of our services, including our website, mobile applications, and any other related services provided by MySchool.
                  </p>

                  <h4>1. Acceptance of Terms</h4>
                  <p>
                      By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Service.
                  </p>

                  <h4>2. User Conduct</h4>
                  <p>
                      You agree to abide by all applicable local, state, national, and international laws and regulations in your use of the Service. You also agree not to:
                      <ul>
                          <li>Violate any laws or regulations.</li>
                          <li>Interfere with or disrupt the Service or servers or networks connected to the Service.</li>
                          <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
                          <li>Collect or store personal data about other users without their consent.</li>
                      </ul>
                  </p>
                  <h4>3. Changes to Terms</h4>
                  <p>
                      MySchool reserves the right to modify or revise these Terms at any time. We will notify you of any changes by posting the updated Terms on this page. Continued use of the Service after any such changes shall constitute your consent to such changes.
                  </p>

                  <p className="mt-4">
                      If you have any questions about these Terms, please contact us at <b>support@myschool.com</b>.
                  </p>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
    );
}

export default TermsOfService;
