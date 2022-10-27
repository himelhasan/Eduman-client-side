import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../Shared/CourseCard/CourseCard";

const Courses = ({ coursesData }) => {
  // const coursesData = useLoaderData();

  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="lg:col-span-3">
        {/* content part header */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            <span className="hidden sm:inline"> Showing </span>
            {coursesData.length} Lessons
          </p>
          <div className="ml-4">
            <label name="SortBy" className="sr-only">
              Sort
            </label>

            <select
              id="SortBy"
              name="sort_by"
              className="rounded border-gray-100 text-sm"
            >
              <option readOnly>Sort</option>
              <option value="title-asc">Title, A-Z</option>
              <option value="title-desc">Title, Z-A</option>
              <option value="price-asc">Price, Low-High</option>
              <option value="price-desc">Price, High-Low</option>
            </select>
          </div>
        </div>

        {/* courses cards part */}
        <div className="mt-4 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
          {/* Dynamically course card will appear here */}
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course}>
              {" "}
            </CourseCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
