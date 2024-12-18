'use client';
import '../register/page.css';
import React, { useState } from 'react';

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    type: '',
    country: '',
    state: '',
    city: '',
  });

  // Updated handleChange function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="container">
      <div className="register-card">
        <div className="white">
          <div className="strap"></div>
        </div>
        <div className="registration">
          <h2>Register</h2>
          {step === 1 && (
            <div className="step">
              <h3>User Info</h3>
              <div className="First">
                <h4>First Name</h4>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="Last">
                <h4>Last Name</h4>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="emai">
                <h4>Email</h4>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mobil">
                <h4>Mobile No.</h4>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="buttons">
                <button onClick={nextStep}>Next</button>
                <button>Cancel</button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="step">
              <h3>Address Info</h3>
              <div className="type">
                <h4>Type</h4>
                <input
                  type="text"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                />
              </div>
              <div className="countr">
                <h4>Country</h4>
                <select name="country" value={formData.country} onChange={handleChange}>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                </select>
              </div>
              <div className="state">
                <h4>State</h4>
                <select name="state" value={formData.state} onChange={handleChange}>
                  <option value="State1">State 1</option>
                  <option value="State2">State 2</option>
                </select>
              </div>
              <div className="city">
                <h4>City</h4>
                <select name="city" value={formData.city} onChange={handleChange}>
                  <option value="City1">City 1</option>
                  <option value="City2">City 2</option>
                </select>
              </div>
              <div className="buttons">
                <button onClick={prevStep}>Back</button>
                <button onClick={nextStep}>Next</button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="step">
              <h3>Confirmation</h3>
              <p>Review your details before submission:</p>
              <pre>{JSON.stringify(formData, null, 2)}</pre>
              <div className="buttons">
                <button onClick={prevStep}>Back</button>
                <button onClick={() => alert('Form submitted!')}>Submit</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
