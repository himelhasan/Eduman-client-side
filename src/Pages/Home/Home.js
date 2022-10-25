import React from "react";
import BrandSlider from "../Shared/BrandSlider/BrandSlider";
import styles from "./Home.css";

const Home = () => {
  return (
    <div>
      <section class="text-gray-600 body-font bg-slate-50 hero-bg bg-center	bg-no-repeat bg-cover		">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Become a Certified Entrepreneurial &
              <br class="hidden lg:inline-block" />
              Business Developer
            </h1>
            <p class="mb-8 leading-relaxed">
              Learn business development strategies including how to gain a competitive
              advantage in the marketplace with online professional education courses from
              Wharton.Join our business development course to structure your job and get
              results.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-accent-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-accent-600 rounded text-lg">
                Courses
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Contact
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
        </div>
      </section>
      {/* <section>
        <BrandSlider></BrandSlider>
      </section> */}
      {/* about part */}
      <section></section>
    </div>
  );
};

export default Home;
