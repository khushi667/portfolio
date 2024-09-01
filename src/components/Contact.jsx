import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true); // Disable the button
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    // Make API call using axios
    axios
      .post('https://getform.io/f/bqondqmb', userInfo, {
        timeout: 5000, // Set timeout to 5 seconds to prevent long waits
      })
      .then(() => {
        toast.success('Your message has been sent'); // Success message
        reset(); // Reset form fields
      })
      .catch((error) => {
        if (error.code === 'ECONNABORTED') {
          toast.error('Request timed out. Please try again later.');
        } else {
          toast.error('Failed to send your message');
        }
        console.error(error);
      })
      .finally(() => {
        setIsSubmitting(false); // Re-enable the button
      });
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={true} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input {...register('name', { required: 'Full Name is required' })} className={`shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`} id="name" type="text" placeholder="Enter your Full Name" />
              {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                {...register('email', {
                  required: 'Email Address is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Invalid email address format',
                  },
                })}
                className={`shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                id="email"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea {...register('message', { required: 'Message is required' })} className={`shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? 'border-red-500' : ''}`} id="message" placeholder="Enter your Query" />
              {errors.message && <span className="text-red-500">{errors.message.message}</span>}
            </div>
            <button type="submit" className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300" disabled={isSubmitting}>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
