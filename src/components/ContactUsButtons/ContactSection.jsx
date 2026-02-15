import ContactUsButtons from './ContactUsButtons'
import './contact-section.css'

export default function ContactSection() {
  return (
    <section className="" id="Contact">
      <p className="text-[42px] font-bold text-center mb-12">
        Contact <span>Us</span>
        <div className="w-20 h-[2px] bg-red-600 mx-auto mt-5" />
      </p>

      <div className="contact-row">
        <div className="email-container">
          <form
            id="contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
            className="email-wrapper"
          >
            <input
              type="hidden"
              name="access_key"
              value="e91ed126-575f-49a9-81dc-429f700cbf57"
            />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />

            <div className="round-icon" />

            <div className="text-field">
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                required
              />
            </div>

            <button type="submit" className="send-button">
              <p>Send</p>
            </button>
          </form>
        </div>

        <ContactUsButtons />
      </div>

      <div className="mail-banner" />
    </section>
  )
}
