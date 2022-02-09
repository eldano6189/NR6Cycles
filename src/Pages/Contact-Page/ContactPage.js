import "./ContactPage.css";
import { Button } from "../../Components/Buttons/Buttons";
import { useLocation } from "react-router-dom";

export default function ContactPage() {
  const location = useLocation();
  const subject = location.state;

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
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email*" required />
          <input
            type="text"
            name="wheelset"
            placeholder="Wheelset*"
            defaultValue={subject === null ? "" : subject.name}
            required
          />
          <textarea name="message" placeholder="Message*" required />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
}
