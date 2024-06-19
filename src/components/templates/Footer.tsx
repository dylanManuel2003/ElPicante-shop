import React from 'react'

const Footer = () => {
  return (
    <section className="h-[40vh] w-full flex items-end pb-8 justify-center">
      <footer className="w-[90%] mx-auto p-4 bg-light-secondary dark:bg-dark-secondary rounded-lg shadow md:px-6 md:py-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            className="flex items-center mb-4 sm:mb-0"
          >
            <div className="flex items-center">
              <img src="/images/logo.png" alt="Galactic clothes logo" className="w-[40px] h-[40px] mr-4" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Galactic Clothes
              </span>
            </div>
          </a>
          <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                Promos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-500 hover:underline dark:text-gray-400"
              >
                Contacto
              </a>
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
            Galactic Clothes
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </section>
  )
}

export default Footer
