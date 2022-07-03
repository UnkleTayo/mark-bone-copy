import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const nameRef = useRef();
  const formRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  // const [visible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   // message is empty (meaning no errors). Adjust as needed
  //   if (!error || !success) {
  //     setIsVisible(false);
  //     return;
  //   }
  //   // error exists. Display the message and hide after 5 secs
  //   setIsVisible(true);
  //   const timer = setTimeout(() => {
  //     setIsVisible(false);
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, [error, success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    emailjs
      .send(
        'service_ed3fdfm',
        'template_pyqrtxe',
        payload,
        'user_K6wYKm2ae4Cr3rRzdrzFP'
      )
      .then(
        function (response) {
          setSuccess(response.text);
          formRef.current.reset();
        },
        function (error) {
          setError(
            'There was an error sending your message. Please try again later'
          );
          formRef.current.reset();
        }
      );
  };

  return (
    <div class="Contact-Me container">
      <h2 className="title">Let's talk</h2>
      <form className="form" ref={formRef} onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="fullName" class="label">
            Full Name
          </label>
          <input
            ref={nameRef}
            id="fullName"
            type="text"
            className="input"
            required
            placeholder="Your name"
            name="fullName"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email" class="label">
            Email
          </label>
          <input
            id="email"
            ref={emailRef}
            type="email"
            className="input"
            required
            placeholder="ezic@ezicfilworks.com"
            name="email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="message" class="label">
            Your Message
          </label>
          <textarea
            ref={messageRef}
            id="message"
            type="text"
            className="input"
            required
            placeholder="Your Message"
            name="message"
          />
        </div>{' '}
        <div>
          <input className="button" type="submit" value="Send Message" />
        </div>
        <div className="info-container">
          {error && <span className="error-message">{error}</span>}
          {success && <p>{success}</p>}
        </div>
      </form>
    </div>
  );
}
