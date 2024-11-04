import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

import EmailSVG from '@/assets/svg/EmailSVG'
import LocationSVG from '@/assets/svg/LocationSVG'
import PhoneSVG from '@/assets/svg/PhoneSVG'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <section className="container mt-24 antialiased">
      <div>
        <h2 className="mb-4 text-center text-2xl font-bold uppercase tracking-wide">
          Contact
        </h2>
        <p className="mb-2 px-2 text-center text-base font-normal text-slate-500">
          If you have any inquiries or require assistance, we are here to
          support you.
          <br />
          Please complete the form below, or feel free to reach out to us
          directly
        </p>
      </div>

      <div className="mt-8 flex w-full items-center justify-center">
        <div className="flex w-full max-w-4xl flex-col space-y-6 overflow-hidden rounded-xl bg-primary/80 p-8 text-white shadow-lg sm:p-12 md:flex-row md:space-x-6 md:space-y-0">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div>
              <h1 className="text-xl font-bold tracking-wide text-slate-200">
                Here is our contact information
              </h1>
              <p className="pr-3 pt-2 text-sm text-slate-200">
                Please feel free to contact us using any of the following
                methods. We look forward to your communication and are eager to
                assist you!
              </p>
            </div>
            <div className="my-10 flex flex-col space-y-4">
              <div className="inline-flex items-center space-x-2">
                <PhoneSVG />
                <span>+880 174-5464755</span>
              </div>
              <div className="inline-flex items-center space-x-2">
                <EmailSVG />
                <span>rakibhasan0308@gmail.com</span>
              </div>
              <div className="inline-flex items-center space-x-2">
                <LocationSVG />
                <span>#House: 4, Road: 02, Block: A, Mirpur, Dhaka</span>
              </div>
            </div>
            <div>
              <p className="mb-1 text-sm font-medium">Follow on:</p>
              <ul className="flex justify-start gap-2 md:gap-4">
                <li>
                  <Link
                    href="https://www.linkedin.com/in/rakibul03"
                    rel="noreferrer"
                    target="_blank"
                    // className="text-primary/80 transition hover:text-primary/90"
                  >
                    <span className="sr-only">Linkedin</span>
                    <FaLinkedin className="size-6" />
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://github.com/rakibh3"
                    rel="noreferrer"
                    target="_blank"
                    // className="text-primary/80 transition hover:text-primary/90"
                  >
                    <span className="sr-only">GitHub</span>
                    <FaGithubSquare className="size-6" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contach Form */}
          <div className="relative">
            <div className="absolute -right-28 -top-28 z-0 size-40 rounded-full bg-[#407cbc]" />
            <div className="absolute -bottom-20 -left-28 z-0 size-40 rounded-full bg-[#407cbc]" />
            <div className="relative z-10 w-full rounded-xl bg-white p-8 text-gray-600 shadow-lg md:w-80">
              <form action="" className="flex flex-col space-y-4">
                <div className="space-y-2">
                  <label htmlFor="" className="text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-md px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-primary/80"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="" className="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-md px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-primary/80"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="" className="text-sm">
                    Message
                  </label>
                  <textarea
                    type="text"
                    rows="5"
                    placeholder="Write your message here"
                    className="w-full rounded-md px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-primary/80"
                  />
                </div>
                <button className="inline-block self-end rounded-md bg-primary/80 px-3 py-1 font-medium text-white">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactUs
