import React from "react";
import { Link } from "react-router-dom";
import innerBanner from "../../media/photos/banner.jpg";
const Faq = () => {
  return (
    <div>
      <>
        <div
          className="bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${innerBanner})` }}
        >
          <div className="hero-overlay bg-cover bg-opacity-60 py-20 pl-10 md:pl-24 lg:pl-44">
            <h1 className=" text-5xl font-bold text-neutral-content ">FAQ</h1>
            <div className="text-sm breadcrumbs ">
              <ul className="text-neutral-content pt-1">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
        </div>
      </>
      <div className="py-10 px-10 lg:px-32">
        <div className="space-y-4 ">
          <details className="group" open>
            <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4">
              <h2 className="font-medium text-gray-900">
                Who can enroll to this business development course?
              </h2>

              <svg
                className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-700">
              This course is designed for:
            </p>
            <ul>
              <li>
                - Business development professionals with up to 6 years experience in
                business development{" "}
              </li>
              <li>- Founders and entrepreneurs who want to grow their business</li>
              <li>- Students who want to start a career in business development</li>
              <li>- Career switchers who want to enter in business development</li>
            </ul>
          </details>

          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4">
              <h2 className="font-medium text-gray-900">
                When does the business development course start?
              </h2>

              <svg
                className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-700">
              We run classes every month. You can find the upcoming date at the top of
              this page. If you have any questions, please contact us at hello@eduman.com.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Faq;
