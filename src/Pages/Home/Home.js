import React from "react";
import BrandSlider from "../Shared/BrandSlider/BrandSlider";
import styles from "./Home.css";
import course from "../../media/photos/course-06.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-slate-50 hero-bg bg-center	bg-no-repeat bg-cover">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center min-h-screen	">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Become a Certified Entrepreneurial &
              <br className="hidden lg:inline-block" />
              Business Developer
            </h1>
            <p className="mb-8 leading-relaxed">
              Learn business development strategies including how to gain a competitive
              advantage in the marketplace with online professional education courses from
              Wharton.Join our business development course to structure your job and get
              results.
            </p>
            <div className="flex justify-center">
              <Link
                to="/allcourses"
                className="inline-flex text-white bg-indigo-accent-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-accent-600 rounded text-lg"
              >
                Courses
              </Link>
              <Link
                to="/contact"
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
        </div>
      </section>
      {/* <section>
        <BrandSlider></BrandSlider>
      </section> */}
      {/* about part */}

      <div className="max-w-screen-xl p-4 py-10 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-20 relative lg:py-20 lg:mt-20">
        <div className="relative">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2 lg:max-w-2xl ml-auto">
              <p className="text-base leading-6 text-indigo-accent-700 font-semibold uppercase">
                Interactive
              </p>
              <h4 className="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                Grow your career with us
              </h4>
              <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                We will build a personalized learning experience to help you fill your
                skills gap and reach your next professional steps.
              </p>
              <ul className="mt-8 md:grid md:grid-cols-2 gap-6">
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-indigo-accent-700 text-white dark:text-indigo-accent-500 drark:bg-transparent">
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      Personal BD Coach
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-indigo-accent-700 text-white dark:text-indigo-accent-500 drark:bg-transparent">
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      Monthly coaching calls
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-indigo-accent-700 text-white dark:text-indigo-accent-500 drark:bg-transparent">
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      Business Development is a mess
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-indigo-accent-700 text-white dark:text-indigo-accent-500 drark:bg-transparent">
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      Personalized learning journeys
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
              <div className="relative space-y-4">
                <div className="flex items-end justify-center lg:justify-start space-x-4">
                  <img
                    className="rounded-lg shadow-lg w-32 md:w-56"
                    width="200"
                    src="https://media.istockphoto.com/photos/successful-young-business-woman-freelancer-manager-accountant-funds-picture-id1333223759?b=1&k=20&m=1333223759&s=170667a&w=0&h=G98g9-nNknWK5R5YcyuOjHJkHULRl53lybt0OHrHN1U="
                    alt="1"
                  />
                  <img
                    className="rounded-lg shadow-lg w-40 md:w-64"
                    width="260"
                    src="https://media.istockphoto.com/photos/focused-cute-stylish-african-american-female-student-with-afro-picture-id1311107708?b=1&k=20&m=1311107708&s=170667a&w=0&h=9I2i47JWO0Tof4wbomb9kRxoOXJZJvS8awg6NHFDHco="
                    alt="2"
                  />
                </div>
                <div className="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                  <img
                    className="rounded-lg shadow-lg w-24 md:w-40"
                    width="170"
                    src="https://media.istockphoto.com/photos/portrait-of-a-handsome-young-businessman-working-in-office-picture-id1369199360?b=1&k=20&m=1369199360&s=170667a&w=0&h=1GywRC7tzZtKVwu48tnLdrr4KnV1zLbH2uYfe6swzaI="
                    alt="3"
                  />
                  <img
                    className="rounded-lg shadow-lg w-32 md:w-56"
                    width="200"
                    src="https://media.istockphoto.com/photos/business-colleagues-working-together-in-the-office-picture-id1193287941?k=20&m=1193287941&s=170667a&w=0&h=c9yxm0B-2x9hFUIrpGRSrd_jZLhk-d4MTJhWtk_mWZE="
                    alt="4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about part */}
      <section></section>
      {/* achevements */}
      <section className="text-gray-600 body-font bg-slate-50">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
                Take the next step toward your personal and professional goals with
                eduman.
              </h1>
              <div className="leading-relaxed">
                We’ve got the solution: world-class training and development programs
                developed by top universities and companies.
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">22.7K</h2>
              <p className="leading-relaxed">Courses</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
              <p className="leading-relaxed">Trainer</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
              <p className="leading-relaxed">companies</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
              <p className="leading-relaxed">Awards</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-full"
              src={course}
              alt="stats"
            />
          </div>
        </div>
      </section>
      {/* testimonials */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            Testimonials
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">
                  The best experience of my life. A complete fantastic course that gives
                  you the foundation to enter this world. Thanks to them I managed to
                  reach my dream to move to Dublin and work for a big tech company! Thanks
                  Lucia! See you soon!
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://thebdschool.com/wp-content/uploads/2021/06/31-290x300.png"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Holden Caulfield
                    </span>
                    <span className="text-gray-500 text-sm">
                      BUSINESS MANAGER | ALTISERVICE | FRANCE
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">
                  The Eduman course gave me a new approach to my job, helping me to
                  improve my skills and discover a wide range of useful tools. The teacher
                  is very good at sharing experience and passion, and the materials
                  provided are clear and thorough. On top of this I met many other
                  professionals who became part of my network. I highly recommend it!
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://thebdschool.com/wp-content/uploads/2021/06/Pre-Team-Picture-283x300.png"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Maria Cozza
                    </span>
                    <span className="text-gray-500 text-sm">
                      BUSINESS DEVELOPER | NECOS | ITALY
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
