import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Formik, Form, Field, ErrorMessage } from "formik"
import Modal from "./Modal"

const FormWrapper = styled.div`
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    button[type="submit"] {
      width: 120px;
      padding: 10px;
      margin-top: 10px;
      background-color: transparent;
      border: 2px solid
        ${({ theme }) => (theme.isDark ? theme.light : theme.primary)};
      text-transform: uppercase;
      color: ${({ theme }) => (theme.isDark ? theme.light : theme.primary)};
      font-weight: 600;
      font-size: ${({ theme }) => theme.font.size.l};
      letter-spacing: 1px;
      box-shadow: none;
      outline: none;
      text-decoration: none;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      &::after {
        position: absolute;
        content: "";
        display: block;
        height: 0px;
        width: 0px;
        border-radius: 100px;
        //background-color: #edcdc2;
        background: #f98bb0;
        z-index: -1;
        transition: height 0.3s ease-in, width 0.3s ease-in;
      }

      &:hover::after {
        height: 140px;
        width: 140px;
      }
    }
  }
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 22px;
  position: relative;
  label {
    color: ${({ theme }) => (theme.isDark ? theme.light : theme.primary)};
    font-weight: 300;
    abbr {
      margin-left: 2px;
    }
  }
  input,
  textarea {
    width: 100%;
    max-width: 100%;
    padding: 11px;
    border: 1px solid
      ${({ theme }) => (theme.isDark ? theme.white : theme.grey)};
    background: ${({ theme }) => theme.white};
    color: #000;
    font-size: ${({ theme }) => theme.font.size.l};
    cursor: text;
    box-shadow: none;
    outline: none;
    -webkit-appearance: none;
    &:focus {
      outline: none;
    }
  }
  p {
    margin: 2px 0 0 0;
    color: ${({ theme }) => theme.error};
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: 300;
    position: relative;
    animation: appear 0.5s ease;
    position: absolute;
    bottom: -20px;
  }
`

const FocusWrapper = styled.div`
  display: flex;
  position: relative;
  .focus-border:before,
  .focus-border:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 3px;
    background-color: ${({ theme }) => theme.pink};
    transition: 0.2s;
    transition-delay: 0.2s;
  }
  .focus-border:after {
    top: auto;
    bottom: 0;
    right: auto;
    left: 0;
    transition-delay: 0.6s;
  }
  .focus-border i:before,
  .focus-border i:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 0;
    background-color: ${({ theme }) => theme.pink};
    transition: 0.2s;
  }
  .focus-border i:after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
    transition-delay: 0.4s;
  }
  & > *:focus ~ .focus-border:before,
  & > *:focus ~ .focus-border:after {
    width: 100%;
    transition: 0.2s;
    transition-delay: 0.6s;
  }
  & > *:focus ~ .focus-border:after {
    transition-delay: 0.2s;
  }
  & > *:focus ~ .focus-border i:before,
  & > *:focus ~ .focus-border i:after {
    height: 100%;
    transition: 0.2s;
  }
  & > *:focus ~ .focus-border i:after {
    transition-delay: 0.4s;
  }
`

const TwoColumnsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  column-gap: 24px;
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  const [isModalOpen, setModalState] = useState(false)

  const toggleModal = () => {
    setModalState(!isModalOpen)
  }

  const closeModal = () => {
    isModalOpen && toggleModal()
  }

  const modalMessages = {
    success: "Your message was sent successfully 🎉",
    error: "Error",
  }

  const [modalMessage, setModalMessage] = useState("")

  useEffect(() => {
    document.querySelector("p.modal-message").innerText = modalMessage
  })

  return (
    <>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
      <FormWrapper>
        <Formik
          initialValues={{
            name: "",
            email: "",
            subject: "",
            message: "",
          }}
          onSubmit={(values, actions) => {
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "contact-form", ...values }),
            })
              .then(() => {
                setModalMessage(modalMessages.success)
                toggleModal()
              })
              .catch(() => {
                setModalMessage(modalMessages.error)
                toggleModal()
              })
              .finally(() => actions.setSubmitting(false))
          }}
          validate={values => {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            const errors = {}
            if (!values.name) {
              errors.name = "Name Required"
            }
            if (!values.email || !emailRegex.test(values.email)) {
              errors.email = "Valid Email Required"
            }
            if (!values.subject) {
              errors.subject = "Subject Required"
            }
            if (!values.message) {
              errors.message = "Message Required"
            }
            return errors
          }}
        >
          {({ isSubmitting }) => (
            <Form
              name="contact-form"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <Field type="hidden" name="form-name" value="contact-form" />
              <Field type="hidden" name="bot-field" />

              <TwoColumnsRow>
                <InputWrapper>
                  <label htmlFor="name">
                    Name<abbr>*</abbr>
                  </label>
                  <FocusWrapper>
                    <Field name="name" />
                    <span className="focus-border">
                      <i></i>
                    </span>
                  </FocusWrapper>
                  <ErrorMessage name="name" component="p" />
                </InputWrapper>

                <InputWrapper>
                  <label htmlFor="email">
                    Email Address<abbr>*</abbr>
                  </label>
                  <FocusWrapper>
                    <Field name="email" />
                    <span className="focus-border">
                      <i></i>
                    </span>
                  </FocusWrapper>
                  <ErrorMessage name="email" component="p" />
                </InputWrapper>
              </TwoColumnsRow>

              <InputWrapper>
                <label htmlFor="subject">
                  Subject<abbr>*</abbr>
                </label>
                <FocusWrapper>
                  <Field name="subject" />
                  <span className="focus-border">
                    <i></i>
                  </span>
                </FocusWrapper>
                <ErrorMessage name="subject" component="p" />
              </InputWrapper>

              <InputWrapper>
                <label htmlFor="message">
                  Message<abbr>*</abbr>
                </label>
                <FocusWrapper>
                  <Field name="message" component="textarea" />
                  <span className="focus-border">
                    <i></i>
                  </span>
                </FocusWrapper>
                <ErrorMessage name="message" component="p" />
              </InputWrapper>

              <button type="submit" disabled={isSubmitting}>
                Send
              </button>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </>
  )
}

export default ContactForm
