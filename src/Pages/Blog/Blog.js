import React from "react";
import { Link } from "react-router-dom";
import innerBanner from "../../media/photos/fghfgh.png";
const Blog = () => {
  return (
    <div>
      <>
        <div
          className="bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${innerBanner})` }}
        >
          <div className="hero-overlay bg-cover bg-opacity-60 py-20 pl-10 md:pl-24 lg:pl-44">
            <h1 className=" text-5xl font-bold text-neutral-content ">Blog</h1>
            <div className="text-sm breadcrumbs ">
              <ul className="text-neutral-content pt-1">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </>
      {/*  */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">Question 1</span>
                <span className="mt-1 text-gray-500 text-sm">27 October 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  What is cors?
                </h2>
                <p className="leading-relaxed">
                  Cross-origin resource sharing (CROS) is a mechanism that allows
                  restricted resources on a web page to be requested from another domain
                  outside the domain from which the first resource was served. A web page
                  may freely embed cross-origin images, stylesheets, scripts, iframes, and
                  videos.
                </p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">Question 2</span>
                <span className="mt-1 text-gray-500 text-sm">27 October 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Why are you using firebase? What other options do you have to implement
                  authentication?
                </h2>
                <p className="leading-relaxed">
                  Firebase Authentication provides backend services, easy-to-use SDKs, and
                  ready-made UI libraries to authenticate users to your app. It supports
                  authentication using passwords, phone numbers, popular federated
                  identity providers like Google, Facebook and Twitter, and more. The best
                  Firebase alternatives are: Auth0, MongoDB. MongoDB,Passport, Okta, JSON
                  Web Token, Keycloak, Amazon Cognito.
                </p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">Question 3</span>
                <span className="mt-1 text-gray-500 text-sm">27 October 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  How does the private route work?
                </h2>
                <p className="leading-relaxed">
                  The private route component is similar to the public route, the only
                  change is that redirect URL and authenticate condition. If the user is
                  not authenticated he will be redirected to the login page and the user
                  can only access the authenticated routes If he is authenticated (Logged
                  in).
                </p>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">Question 4</span>
                <span className="mt-1 text-gray-500 text-sm">27 October 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  What is Node? How does Node work?
                </h2>
                <p className="leading-relaxed">
                  It is a used as backend service where javascript works on the
                  server-side of the application. This way javascript is used on both
                  frontend and backend. Node. js runs on chrome v8 engine which converts
                  javascript code into machine code, it is highly scalable, lightweight,
                  fast, and data-intensive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
