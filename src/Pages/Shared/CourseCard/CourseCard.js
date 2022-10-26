import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const {
    id,
    image,
    category,
    tags,
    skillLevel,
    language,
    courseName,
    description,
    lessons,
    duration,
    author,
  } = course;
  return (
    <Link
      to={`/courses/${id}`}
      className="relative bg-white m-2 flex flex-col  justify-between border border-gray-200 "
    >
      <div>
        <span className="absolute right-4 top-4   bg-indigo-accent-400 text-white px-3 py-1 text-xs font-medium">
          {tags}
        </span>
        <img alt={courseName} src={image} className=" w-full object-contain" />

        <div className="relative bg-white mx-2 mt-1 flex justify-between">
          <div className="p-2 flex text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            <span className="mx-2 text-sm font-medium text-gray-600">
              {lessons} Lessons
            </span>
          </div>
          <div className="p-2 flex text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
              />
            </svg>

            <span className="mx-2 text-sm font-medium text-gray-600">{skillLevel}</span>
          </div>
        </div>

        <div className="px-5 py-2">
          <h3 className="mt-1 text-lg font-bold">{courseName}</h3>
          <p className="mt-1 text-sm font-medium text-gray-600">
            {description.slice(0, 100)}...
          </p>
        </div>
      </div>
      <div className="px-5 py-1">
        <button
          type="button"
          className="my-4 mx-auto flex w-full items-center justify-center rounded-sm bg-indigo-accent-700 hover:bg-black text-white px-8 py-4"
        >
          <span className="text-sm font-medium"> Get Premium Access </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </button>
      </div>
    </Link>
  );
};

export default CourseCard;
