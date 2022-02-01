import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div className="container-contact-page">
      <div className="container-contact-header">
        <h1>CONTACT US</h1>
      </div>
      <div className="container-contact-form">
        <form
          name="contact"
          method="post"
          data-netlify="true"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </div>
  );
}
