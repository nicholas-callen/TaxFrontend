import React, { useState } from 'react';
import '../src/styles/contact.css';

export default function ContactUsPage() {
  //state management
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [packageHelp, setPackageHelp] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  //handle input changes
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };
  //submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      fullName,
      email,
      phoneNumber,
      packageHelp,
      additionalInfo
    };
    try {
      const response = await fetch('GORDONBACKEND', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Network response not ok');
      }
      console.log('Form sent successfully:', await response.json());
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="indexContact">
      <form onSubmit={handleSubmit}>
        <div className="div">
          <div className="BG" />
          <div className="submitwrap">
            <button type="submit" className="submit">Submit</button>
          </div>
          <div className="group">
            <div className="og">
              <input 
                className="include-any-info" 
                placeholder="*Include any info that would help (tax forms on hand/questions)" 
                value={additionalInfo} 
                onChange={handleInputChange(setAdditionalInfo)} 
              />
            </div>
          </div>
          <div className="ow">
            <div className="overlap">
              <input 
                className="package-need-help" 
                placeholder="*Package (need help choosing)" 
                value={packageHelp} 
                onChange={handleInputChange(setPackageHelp)} 
              />
            </div>
          </div>
          <div className="ogw">
            <input 
              className="phone-number" 
              placeholder="*Phone Number" 
              value={phoneNumber} 
              onChange={handleInputChange(setPhoneNumber)} 
            />
          </div>
          <div className="group-2">
            <div className="overlap">
              <input 
                className="email-address" 
                placeholder="*Email Address" 
                value={email} 
                onChange={handleInputChange(setEmail)} 
              />
            </div>
          </div>
          <div className="full-name-wrapper">
            <input 
              className="full-name" 
              placeholder="*Full Name" 
              value={fullName} 
              onChange={handleInputChange(setFullName)} 
            />
          </div>
          <div className="text-wrapper-2">Contact Us</div>
          <p className="p">Fill out the form to get started</p>
        </div>
      </form>
    </div>
  );
};