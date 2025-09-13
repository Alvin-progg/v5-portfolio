'use client';

import { useState } from 'react';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(`Error: ${result.message}`);
      }
    } catch (error) {
      setStatus('Error: Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="flex flex-col gap-4 items-center text-center"
      >
        <p className="font-semibold text-indigo-600 text-base sm:text-lg tracking-wide">
          Get in Touch
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Contact</h2>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="mx-auto mt-16 max-w-5xl flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center"
      >
        <div className="flex flex-col gap-6 lg:gap-8 lg:w-1/2">
          <div className="text-lg sm:text-xl">
            <h2 className="text-2xl sm:text-3xl text-wrap tracking-wide leading-relaxed">
              <span className="text-primary-700">
                I enjoy discussing new projects challenges
              </span>
              . Please share as much info, as possible so i can get the most out
              of our first catch-up.
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:gap-5">
            <div>
              <h3 className="tracking-wide text-xl sm:text-2xl">Living In:</h3>
              <p className="text-lg sm:text-xl font-light">Batangas, The Philippines</p>
            </div>
            <div>
              <h3 className="tracking-wider text-xl sm:text-2xl">Call Me: </h3>
              <p className="text-lg sm:text-xl font-light">(+63) 9626361561</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-9 max-w-lg w-full lg:w-1/2">
          <div className="relative z-0">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-700 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Name
            </label>
          </div>
          <div className="relative z-0">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-700 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Email
            </label>
          </div>
          <div className="relative z-0">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-secondary-600"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border-t-0 border-l-0 border-r-0 border-b-2 border-solid border-secondary-300 bg-secondary-100 focus:outline-none focus:border-primary-700"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <div className="w-full">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`text-lg sm:text-xl relative transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group font-bold cursor-pointer px-4 py-3 w-25 sm:max-md:text-2xl sm:max-md:px-3 sm:max-md:py-2 bg-secondary-800 hover:bg-primary-800 text-secondary-200 rounded-xl overflow-hidden ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label="send message"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? 'Sending...' : 'Submit'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-xl"></div>
            </button>
          </div>
          {status && (
            <p className={`text-sm ${status.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}