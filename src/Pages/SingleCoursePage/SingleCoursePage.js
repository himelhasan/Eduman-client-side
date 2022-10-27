import React, { createRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import innerBanner from "../../media/photos/slider-university.jpg";
import SingleCourseSidebar from "./SingleCourseSidebar";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const options = {
  orientation: "landscape",
};
const SingleCoursePage = () => {
  const singleCourseData = useLoaderData();
  console.log(singleCourseData);

  const {
    category,
    id,
    author,
    certificate,
    courseName,
    description,
    duration,
    enrolled,
    image,
    language,
    lessons,
    quizzes,
    skillLevel,
    tags,
  } = singleCourseData;

  const { courses, img_url, instructor_rating, name, reviews, students } = author[0];

  return (
    <div ref={ref}>
      {/* header part */}

      <>
        <div
          className="bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${innerBanner})` }}
        >
          <div className="hero-overlay bg-cover bg-opacity-60 py-20 pl-10 md:pl-24 lg:pl-44">
            <h1 className=" text-5xl font-bold text-neutral-content ">{courseName}</h1>
            <div className="text-sm breadcrumbs ">
              <ul className="text-neutral-content pt-1">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/courses">Courses</Link>
                </li>
                <li>{courseName}</li>
              </ul>
            </div>
          </div>
        </div>
      </>
      <div className="flex flex-col-reverse md:flex-row px-5 py-14 lg:px-32 lg:py-0 lg:-mt-10 ">
        <div className=" w-full md:w-3/4  border-gray-200 rounded bg-white mx-2 px-3 lg:px-10 py-8">
          <h1 className="text-3xl font-semibold ">{courseName}</h1>
          <div className="flex flex-col md:flex-row space-x-5 border-y py-2 md:p-3 my-6">
            <div className="flex w-full lg:w-1/4 px-2 my-2 border-b py-2 lg:border-none">
              <div className="mr-2 ">
                <img
                  className="rounded-full shadow-sm border-4 border-slate-200 	"
                  src={img_url}
                  style={{ width: "70px" }}
                  alt=""
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">Created by</p>
                <p className="text-sm font-semibold">{name}</p>
              </div>
            </div>

            <div className="px-2 border-b lg:border-b-0 py-2 lg:border-l w-full lg:w-1/4 text-left md:text-center my-2 ">
              <p className="text-sm text-gray-500">Total Enrolled</p>
              <p className="text-sm font-semibold">{enrolled}</p>
            </div>
            <div className="px-2 border-b lg:border-b-0 py-2 lg:border-l w-full lg:w-1/4 text-left md:text-center my-2 ">
              <p className="text-sm text-gray-500">Loved by</p>
              <p className="text-sm font-semibold">{reviews}</p>
            </div>
            <div className="px-2 border-b lg:border-b-0 py-2 lg:border-l w-full lg:w-1/4 text-left md:text-center my-2 ">
              <p className="text-sm text-gray-500">Total Chapter</p>
              <p className="text-sm font-semibold">{courses}</p>
            </div>
          </div>
          <p className="text-xl pb-4 font-semibold">Description</p>
          <p className="leading-normal	text-slate-600	pb-10">{description}</p>
        </div>

        <div className="w-full md:w-1/4 border border-gray-200 rounded bg-white mx-2 shadow-lg px-2 lg:px-5 py-5">
          <SingleCourseSidebar singleCourseData={singleCourseData}>
            <Pdf
              targetRef={ref}
              filename="code-example.pdf"
              options={options}
              x={2}
              y={2}
              scale={0.5}
            >
              {({ toPdf }) => (
                <button
                  className="my-4 mx-auto flex w-full items-center justify-center rounded-sm bg-indigo-accent-700 hover:bg-black text-white  py-4      "
                  onClick={toPdf}
                >
                  Download Course Outline
                </button>
              )}
            </Pdf>
          </SingleCourseSidebar>
        </div>
      </div>
    </div>
  );
};

export default SingleCoursePage;
