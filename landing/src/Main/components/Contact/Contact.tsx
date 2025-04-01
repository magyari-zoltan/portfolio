import ContactForm from '../../../Common/components/ContactForm/ContactForm';
import './Contact.css'

const Contact = () => (
  <article id="contact" className="section contact-section" >
    <div className="title">
      <h2>Contact me</h2>
      <p>
        Feel free to contact me by submitting the form below
        and I will get back to you as soon as possible.
      </p>
    </div>

    <ContactForm action="https://formspree.io/mzzeaypl" />
  </article >
)


export default Contact;
