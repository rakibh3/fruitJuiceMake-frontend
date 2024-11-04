import EmailSVG from '@/assets/svg/EmailSVG'
import LocationSVG from '@/assets/svg/LocationSVG'
import PhoneSVG from '@/assets/svg/PhoneSVG'
import { LeafyGreen } from 'lucide-react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="mt-20 bg-white">
      <div className="container mx-auto pb-10 pt-6">
        <div className="grid grid-cols-1 content-center space-y-10 md:grid-cols-3">
          <div className="mt-8 text-left">
            <div className="flex items-center justify-center gap-2 text-2xl font-medium uppercase sm:justify-start">
              <Link to="/">
                <p className="text-secondary">Juicers</p>
              </Link>
              <LeafyGreen className="text-green-500" />
            </div>

            <div className="flex justify-center sm:justify-start">
              <p className="mt-4 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                Bringing Food Lovers Together Through Shared Recipes!
              </p>
            </div>

            <ul className="mt-4 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <Link
                  href="https://www.linkedin.com/in/rakibul03"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primary/80 transition hover:text-primary/90"
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
                  className="text-primary/80 transition hover:text-primary/90"
                >
                  <span className="sr-only">GitHub</span>
                  <FaGithubSquare className="size-6" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">About Us</p>

            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  Company History
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  Meet the Team
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  Employee Handbook
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {' '}
                  Careers{' '}
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Contact Us</p>

            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <p className="flex items-center justify-center gap-1.5">
                  <EmailSVG color="text-black" />

                  <span className="flex-1 text-gray-700">
                    rakibhasan0308@gmail.com
                  </span>
                </p>
              </li>

              <li>
                <p className="flex items-center justify-center gap-1.5">
                  <PhoneSVG color="text-black" />

                  <span className="flex-1 text-gray-700">+880 174-5464755</span>
                </p>
              </li>

              <li className="flex items-start justify-center gap-1.5">
                <LocationSVG color="text-black" />

                <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                  #House: 4, Road: 02, Block: A, Mirpur, Dhaka
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-100 pt-2">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; 2024 Juicers. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
