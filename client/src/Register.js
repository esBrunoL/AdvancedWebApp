import React, { useState } from 'react';

function Register() {
  const [form, setForm] = useState({
    userid: '',
    password: '',
    givenName: '',
    familyName: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(form.userid)) {
      errs.userid = 'Invalid email address';
    }
    // Password validation
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(form.password)) {
      errs.password = 'Password must be 8+ chars, include upper, lower, digit';
    }
    // Name validation
    if (!form.givenName) errs.givenName = 'Required';
    if (!form.familyName) errs.familyName = 'Required';
    // Phone validation (simple)
    if (!/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(form.phone)) {
      errs.phone = 'Invalid phone number';
    }
    return errs;
  };

  const handleChange = e => {
    const { name, value } = e.target;
  setForm((prev) => ({ ...prev, [name]: value }));

    // Reset style if corrected
    if (value.trim() !== '') {
      e.target.style.backgroundColor = '#f0f4fa';
      e.target.style.borderColor = '#cfd8dc';
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleBlur = (e) => {
  const { name, value } = e.target;
  if (value.trim() === '') {
    e.target.style.backgroundColor = '#ffe6e6'; // light red
    e.target.style.borderColor = 'red';
  } else {
    e.target.style.backgroundColor = '#f0f4fa'; // original color
    e.target.style.borderColor = '#cfd8dc';
  }
};



  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // Submit to backend
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success) {
        window.location.href = '/login';
      } else {
        setErrors({
          ...errs,
          form: data.message || 'Registration failed. Please try again.'
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: 'auto', marginTop: 50 }}>
      <h2>Register</h2>
      {errors.form && <div style={{ color: 'red', marginBottom: '12px' }}>{errors.form}</div>}
      <div>
        <label>First Name(s):</label>
  <input name="givenName" type="text" autoFocus value={form.givenName} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your given name(s)" />
        {errors.givenName && <div style={{ color: 'red' }}>{errors.givenName}</div>}
      </div>
      <div>
        <label>Last Name:</label>
  <input name="familyName" type="text"value={form.familyName} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your family name(s)" />
        {errors.familyName && <div style={{ color: 'red' }}>{errors.familyName}</div>}
      </div>
      <div>
        <label>Phone:</label>
  <input name="phone" type="tel" value={form.phone} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your phone number" />
        {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
      </div>
      <div>
        <label>Email:</label>
  <input name="userid" type="email" value={form.userid} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your email" />
        {errors.userid && <div style={{ color: 'red' }}>{errors.userid}</div>}
      </div>
      <div>
        <label>Password:</label>
  <input name="password" type="password" value={form.password} onChange={handleChange} onBlur={handleBlur}  placeholder="Enter your password" />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </div>
      <button type="submit">Register</button>
      <button type="button" onClick={() => window.location.href = '/'}>Cancel</button>
    </form>
  );
}

export default Register;