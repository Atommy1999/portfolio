import React from "react"

const Contact = () => {
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
        action="/"
      >
        <input type="hidden" name="form-name" value="contact" />

        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          className="contact__field input"
          placeholder="Your Name"
        ></input>
        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          className="contact__field input"
          placeholder="example@domain.com"
        ></input>

        <label className="label">Subject</label>
        <input
          name="subject"
          type="text"
          className="contact__field input"
          placeholder="Subject"
        ></input>
        <label className="label">Message</label>
        <textarea
          name="message"
          className="contact__field textarea"
          placeholder="Your Message"
        ></textarea>
        <div data-netlify-recaptcha="true"></div>
        <button
          className="relative top-0 bg-gold text-white w-24 mt-2 p-1 place-self-end rounded drop-shadow-md transition-all duration-75 hover:top-px hover:drop-shadow-none"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
