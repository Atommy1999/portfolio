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
        action="/success"
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
        >
          Submit
        </button>
      </form>
      <ul className="mt-6 list-disc list-inside">
        <li>
          お問い合わせの内容によっては、返答に時間がかかる場合があります。
        </li>
        <li>個人情報は厳密に管理し、第三者には開示いたしません。</li>
        <li>
          返信メールが届かない場合は、迷惑メールフィルタの設定をご確認ください。info[at]atommy.meを受信できるように設定をお願いいたします。
        </li>
      </ul>
    </div>
  )
}

export default Contact
