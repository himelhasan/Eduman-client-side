import React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import innerBanner from "../../media/photos/course-slider.jpg";
import CategoryFilterSidebar from "../Shared/CategoryFilterSidebar/CategoryFilterSidebar";
import Courses from "./Courses";

const CoursesLayout = () => {
  const coursesData = useLoaderData();

  return (
    <>
      <>
        <div className="" style={{ backgroundImage: `url(${innerBanner})` }}>
          <div className="hero-overlay bg-cover bg-opacity-60 py-20 pl-10 md:pl-24 lg:pl-44">
            <h1 className=" text-5xl font-bold text-neutral-content ">All Courses</h1>
            <div className="text-sm breadcrumbs ">
              <ul className="text-neutral-content pt-1">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Courses</li>
              </ul>
            </div>
          </div>
        </div>
      </>

      {/* content area */}
      <div className="flex flex-col md:flex-row px-5 py-14 lg:px-20 lg:py-20 ">
        <div className="w-full md:w-1/4">
          <CategoryFilterSidebar></CategoryFilterSidebar>
        </div>
        <div className="w-full md:w-3/4">
          <Courses></Courses>
          {/* content<Outlet></Outlet> */}
        </div>
      </div>
    </>
  );
};

export default CoursesLayout;
