import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import emailjs from 'emailjs-com'
import { toast, ToastBar, Toaster } from 'react-hot-toast'
import { HiX } from 'react-icons/hi'

/** Components */

const Card = (props) => <div className="card">{props.children}</div>

const Form = (props) => (
  <form onSubmit={props.onSubmit} className="form">
    {props.children}
  </form>
)

const TextInput = (props) => (
  <div className="text-input">
    <label htmlFor={props.name}></label>
    <input
      className={props.focus || props.value !== '' ? 'input-focus' : ''}
      type={!props.type ? 'text' : props.type}
      name={props.name}
      id={props.id}
      value={props.value}
      placeholder={props.placeholder}
      onBlur={props.onBlur}
      onChange={props.onChange}
    />
  </div>
)

const TextArea = (props) => (
  <div className="text-area">
    <label htmlFor={props.name}></label>
    <textarea
      className={props.focus || props.value !== '' ? 'input-focus' : ''}
      name={props.name}
      id={props.id}
      value={props.value}
      placeholder={props.placeholder}
      onBlur={props.onBlur}
      onChange={props.onChange}
    />
  </div>
)

const Button = (props) => (
  <button disabled={props.disabled} className="button">
    {props.children}
  </button>
)

export default function Contact(params) {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      message: '',
      email: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Required'),
      message: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      // notify()
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Ooops, something went wrong',
      //   text: 'error.text', eP
      // })
      toast.promise(
        emailjs
          .send(
            'service_ed3fdfm',
            'template_pyqrtxe',
            values,
            'user_K6wYKm2ae4Cr3rRzdrzFP'
          )
          .then(
            function (response) {
              console.log('SUCCESS!', response.status, response.text)
              resetForm()
            },
            function (error) {
              resetForm()
            }
          ),
        {
          loading: 'Sending...',
          success: 'Success',
          error: (err) => err?.text ?? 'Something is wrong, please try again',
        }
      )
    },
  })

  return (
    <>
      {' '}
      <div className="Contact-Me">
        <div className="container">
          <Card>
            <h1>Shoot me Message!</h1>
            <Form onSubmit={formik.handleSubmit}>
              <TextInput
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full name"
              />
              <TextInput
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
              <TextArea
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                type="message"
                name="message"
                id="message"
                placeholder="Your Message"
                formik={formik}
              />
              <Button
                disabled={!(formik.isValid && formik.dirty)}
                type="submit"
                onClick={formik.handleSubmit}
              >
                Send
              </Button>
            </Form>
          </Card>
        </div>
      </div>
      <DismissableToast />
    </>
  )
}

function DismissableToast() {
  return (
    <div>
      <Toaster
        reverseOrder={false}
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: '8px',
            background:
              document.body.getAttribute('data-theme') === 'dark'
                ? '#fff'
                : '#0b0b0f',
            color:
              document.body.getAttribute('data-theme') === 'dark'
                ? '#0b0b0f'
                : '#fff',
          },
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== 'loading' && (
                  <button
                    className="p-1 rounded-full ring-primary-400 transition hover:bg-[#444] focus:outline-none focus-visible:ring"
                    onClick={() => toast.dismiss(t.id)}
                  >
                    <HiX />
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </div>
  )
}
