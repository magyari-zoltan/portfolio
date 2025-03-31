import './ContactForm.css'

interface ContactFormProps {
  action: string;
}

const ContactForm = ({ action }: ContactFormProps) => (
  <form
    action={action}
    method="POST"
    className="form contact-form">
    <label htmlFor="name">
      Name*
      <input
        id="name"
        type="text"
        name="name"
        required
        placeholder="Enter your name"
        className="input" />
    </label>

    <label htmlFor="email">
      Email*
      <input
        id="email"
        type="email"
        name="email"
        required
        placeholder="Enter your email address"
        className="input" />
    </label>

    <label htmlFor="tel">
      Phone number
      <input
        id="tel"
        type="tel"
        name="tel"
        placeholder="Ex. +40 748 972 936"
        pattern="(^$)|(^\+[0-9]{2}\s)([0-9]{3})\s([0-9]{3})\s([0-9]{3,5})$"
        className="input" />
    </label>

    <label htmlFor="message">
      Message*
      <textarea
        id="message"
        name="message"
        required
        placeholder="Hi Zoltan, I would like to send you this message..."
        className="input"></textarea>
    </label>

    <button
      type="submit"
      className="button button-primary button-float">
      Send
    </button>
  </form>
);

export default ContactForm;
