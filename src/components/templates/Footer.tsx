import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  const message = `Hola, me gustaria saber más sobre...`
  const phoneNumber = "+5493541242452"
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}/?text=${encodedMessage}`;

  return (
    <section className="h-[40vh] w-full flex items-end pb-8 justify-center">
      <footer className="w-[90%] mx-auto p-4 bg-light-secondary dark:bg-dark-secondary rounded-lg shadow md:px-6 md:py-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span
            className="flex items-center mb-4 sm:mb-0"
          >
            <div className="flex items-center">
              <Image width={160} height={80} src="/images/logo-dark.png" alt="ELPICANTE clothes shop logo" className=" h-[40px] mr-4 dark:hidden block" />
              <Image width={160} height={80} src="/images/logo-light.png" alt="ELPICANTE clothes shop logo" className=" h-[40px] mr-4 hidden dark:block " />
            </div>
          </span>
          <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
            <li>
              <Link
                target="_blank"
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.instagram.com/elpicante.store/"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href={url}
                className="text-sm text-gray-500 hover:underline dark:text-gray-400"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{' '}
          <a
            href="/"
            className="hover:underline"
          >
            ElPicante
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </section>
  )
}

export default Footer
