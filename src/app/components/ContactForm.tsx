/* eslint-disable react/no-unescaped-entities */
'use client';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../utils/send-email';
import { useRouter } from 'next/navigation';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export type FormData = {
  name: string;
  email: string;
  message: string;
  reCaptchaToken: string;
};
export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();

  async function onSubmit(data: FormData) {
    if (!executeRecaptcha) {
      console.error('The raCAPTCHA is not ready!');
      return;
    }

    const reCaptchaToken = await executeRecaptcha('contact_form_submit');
    try {
      await sendEmail({ ...data, reCaptchaToken });
      reset();
      router.push('/');
    } catch (error) {
      console.error('Hiba az email küldése során: ', error);
    }
  }
  return (
    <div className="p-8">
      <h1 className="text-2xl">
        Let's get in{' '}
        <span className="text-slate-800 font-medium tracking-widest">
          touch!
        </span>
      </h1>
      <p className="text-md text-slate-800 mt-2">
        To request a quoute or want to meet up for a coffee, contact me directly
        or fill out the form and I will get back to you soon.
      </p>
      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="name"
            className="mb-2 font-semibold text-slate-800 tracking-widest"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Type your name here"
            className="p-2 rounded-md border-2 border-none focus:outline-none focus:border-orange-600 text-slate-700"
            {...register('name', { required: true })}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="email"
            className="mb-2 font-semibold text-slate-800 tracking-widest"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Type your email here"
            className="p-2 rounded-md border-2 border-none focus:outline-none focus:border-orange-600 text-slate-700"
            {...register('email', { required: true })}
          />
        </div>
        <div className="flex flex-col mb-12">
          <label
            htmlFor="message"
            className="mb-2 font-semibold text-slate-800 tracking-widest"
          >
            Your message"
          </label>
          <textarea
            id="message"
            placeholder="Type your message here"
            rows={3}
            className="p-2 rounded-md border-2 border-none focus:outline-none focus:border-orange-600 text-slate-700"
            {...register('message', { required: true })}
          ></textarea>
        </div>
        <p className="text-xs text-slate-500 mb-4">
          This website is protected by Google reCAPTCHA v3.
        </p>
        <button
          type="submit"
          className="w-full py-2 bg-slate-800 text-orange-500 tracking-widest font-medium rounded-md hover:bg-slate-700 transition duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
}
