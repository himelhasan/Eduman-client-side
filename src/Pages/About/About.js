import React from "react";
import { Link } from "react-router-dom";
import innerBanner from "../../media/photos/tanz-home-banner.jpg";
const About = () => {
  return (
    <div>
      <>
        <div
          className="bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${innerBanner})` }}
        >
          <div className="hero-overlay bg-cover bg-opacity-60 py-20 pl-10 md:pl-24 lg:pl-44">
            <h1 className=" text-5xl font-bold text-neutral-content ">About us</h1>
            <div className="text-sm breadcrumbs ">
              <ul className="text-neutral-content pt-1">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>About us</li>
              </ul>
            </div>
          </div>
        </div>
      </>

      {/* about part */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src="https://media.istockphoto.com/photos/lady-sitting-at-desk-using-computer-and-waving-to-webcam-picture-id1288103838?b=1&k=20&m=1288103838&s=170667a&w=0&h=0QFzdzQY7GDlaMbfmq1Xf-aaYYC2QXt4GXXnnW3UC-Q="
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Knowledge is power!</h2>

              <p className="mt-4 text-gray-600">
                We are here to make business development simple. Our mission is to enable
                individuals and ambitious founders to acquire the skills and knowledge
                they need to leave their mark in society.
              </p>

              <Link
                to="/allcourses"
                className="mt-8 inline-flex items-center rounded border border-indigo-accent-700 bg-indigo-accent-700 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                <span className="text-sm font-medium"> Get Started </span>

                <svg
                  className="ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* team */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              OUR TEAM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              We are creating the next generation of business developers and founders
              using the power of knowledge.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg 
          w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBY4HI1eC_trkKU4TL1t-3TKhNdkeZeTMAkgFkW9d-o2CSE4sh9C6HIIiPdnNgW87Z4P8&usqp=CAU"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Holden Caulfield
                  </h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
                    vaporware.
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg 
          w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="data:image/jpeg;base64,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"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Alper Kamu
                  </h2>
                  <h3 className="text-gray-500 mb-3">Designer</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
                    vaporware.
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg 
          w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="https://coderscrown.com/wp-content/uploads/elementor/thumbs/himel-hasan-wordpress-developer-min-ppa68h73wq5p8911zi2axhdsv9a6mofj6jq82ch0k0.jpg"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Himel Hasan
                  </h2>
                  <h3 className="text-gray-500 mb-3">Web Developer</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
                    vaporware.
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="https://media.istockphoto.com/photos/young-woman-ready-for-job-business-concept-picture-id1318482009?k=20&m=1318482009&s=612x612&w=0&h=gKTlFuaTRj4GEAaTQWYqXkFRNYJ92BzXfx4ZLAKhFeE="
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Henry Letham
                  </h2>
                  <h3 className="text-gray-500 mb-3">Designer</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
                    vaporware.
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
