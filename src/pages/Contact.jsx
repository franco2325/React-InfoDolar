import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import 'animate.css'
import Button from '../components/Button'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_43byp7t',
        'template_8022gwl',
        form.current,
        'meb5xu7QCtEIxXNCg'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
    Swal.fire({
      title: 'Message sended. Thanks!',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    })
  }
  return (
    <div className='container main'>
      <div className='contact__container'>
        <h2>Contact Me</h2>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your full name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            placeholder='Your message'
            rows='7'
          ></textarea>
          <Button size='sm' className='btn btn-primary'>
            {' '}
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Contact
