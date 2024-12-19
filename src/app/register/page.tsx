'use client';
import '../register/page.css';
import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  type: string;
  country: string;
  state: string;
  city: string;
}

interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobile?: string;
  type?: string;
  country?: string;
  state?: string;
  city?: string;
}

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    type: '',
    country: '',
    state: '',
    city: '',
  });
  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateStep = (): ValidationErrors => {
    const validationErrors: ValidationErrors = {};
    if (step === 1) {
      if (!formData.firstName) validationErrors.firstName = 'First name is required';
      if (!formData.lastName) validationErrors.lastName = 'Last name is required';
      if (!formData.email) validationErrors.email = 'Email is required';
      if (!formData.mobile) validationErrors.mobile = 'Mobile number is required';
    } else if (step === 2) {
      if (!formData.type) validationErrors.type = 'Type is required';
      if (!formData.country) validationErrors.country = 'Country is required';
      if (!formData.state) validationErrors.state = 'State is required';
      if (!formData.city) validationErrors.city = 'City is required';
    }
    return validationErrors;
  };

  const nextStep = () => {
    const validationErrors = validateStep();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setStep(step + 1);
    }
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
                {errors.firstName && <span className="error" style={{ color: 'red' }}>{errors.firstName}</span>}
              </div>
              <div className="Last">
                <h4>Last Name</h4>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <span className="error" style={{ color: 'red' }}>{errors.lastName}</span>}
              </div>
              <div className="emai">
                <h4>Email</h4>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error" style={{ color: 'red' }}>{errors.email}</span>}
              </div>
              <div className="mobil">
                <h4>Mobile No.</h4>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                {errors.mobile && <span className="error" style={{ color: 'red' }}>{errors.mobile}</span>}
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
                {errors.type && <span className="error" style={{ color: 'red' }}>{errors.type}</span>}
              </div>
              <div className="countr">
                <h4>Country</h4>
                <select name="country" value={formData.country} onChange={handleChange}>
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                </select>
                {errors.country && <span className="error" style={{ color: 'red' }}>{errors.country}</span>}
              </div>
              <div className="state">
                <h4>State</h4>
                <select name="state" value={formData.state} onChange={handleChange}>
                  <option value="">Select State</option>
                  <option value="State1">State 1</option>
                  <option value="State2">State 2</option>
                </select>
                {errors.state && <span className="error" style={{ color: 'red' }}>{errors.state}</span>}
              </div>
              <div className="city">
                <h4>City</h4>
                <select name="city" value={formData.city} onChange={handleChange}>
                  <option value="">Select City</option>
                  <option value="City1">City 1</option>
                  <option value="City2">City 2</option>
                </select>
                {errors.city && <span className="error" style={{ color: 'red' }}>{errors.city}</span>}
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
