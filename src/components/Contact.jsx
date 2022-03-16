import React from "react"
import { navigate } from "gatsby"

const Contact = () => {
  const onSubmit = event => {
    navigate("/success")
  }
  return (
    <div className="mb-20">
      <h2 className="contactHeader heading" id="contact">
        Contact
      </h2>
      <form
        className="contact_form grid grid-cols-contact"
        name="contact"
        method="post"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />

        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="contact__field input"
          placeholder="Your Name"
          minlength={1}
        ></input>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          name="email"
          type="email"
          id="email"
          className="contact__field input"
          placeholder="example@domain.com"
        ></input>

        <label className="label" htmlFor="subject">
          Subject
        </label>
        <input
          name="subject"
          id="subject"
          type="text"
          className="contact__field input"
          placeholder="Subject"
        ></input>
        <label className="label self-start mt-2 leading-7" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="contact__field textarea"
          placeholder="Your Message"
        ></textarea>
        <div data-netlify-recaptcha="true"></div>
        <button
          className="relative top-0 bg-gold text-white w-24 mt-2 p-1 place-self-end rounded drop-shadow-md transition-all duration-75 hover:top-px hover:drop-shadow-none"
          type="submit"
          onClick={onSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
