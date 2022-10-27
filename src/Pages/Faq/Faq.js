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
    </div>
  );
};

export default Faq;
