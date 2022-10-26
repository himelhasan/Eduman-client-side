import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../Shared/CourseCard/CourseCard";

const Courses = () => {
  const coursesData = useLoaderData();

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
        {/* sdiebar part */}
        <div className="lg:sticky lg:top-4">
          <details open className="overflow-hidden rounded border border-gray-200">
            <summary className="flex items-center justify-between bg-gray-100 px-5 py-3 lg:hidden">
              <span className="text-sm font-medium"> Toggle Filters </span>

              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </summary>

            <form className="border-t border-gray-200 lg:border-t-0">
              <fieldset>
                <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                  Type
                </legend>

                <div className="space-y-2 px-5 py-6">
                  <div className="flex items-center">
                    <input
                      id="toy"
                      type="checkbox"
                      name="type[toy]"
                      className="h-5 w-5 rounded border-gray-300"
                    />

                    <label name="toy" className="ml-3 text-sm font-medium">
                      Toy
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="game"
                      type="checkbox"
                      name="type[game]"
                      className="h-5 w-5 rounded border-gray-300"
                    />

                    <label name="game" className="ml-3 text-sm font-medium">
                      Game
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="outdoor"
                      type="checkbox"
                      name="type[outdoor]"
                      className="h-5 w-5 rounded border-gray-300"
                    />

                    <label name="outdoor" className="ml-3 text-sm font-medium">
                      Outdoor
                    </label>
                  </div>

                  <div className="pt-2">
                    <button type="button" className="text-xs text-gray-500 underline">
                      Reset Type
                    </button>
                  </div>
                </div>
              </fieldset>

              <div>
                <fieldset>
                  <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                    Age
                  </legend>

                  <div className="space-y-2 px-5 py-6">
                    <div className="flex items-center">
                      <input
                        id="3+"
                        type="checkbox"
                        name="age[3+]"
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <label name="3+" className="ml-3 text-sm font-medium">
                        3+
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="8+"
                        type="checkbox"
                        name="age[8+]"
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <label name="8+" className="ml-3 text-sm font-medium">
                        8+
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="12+"
                        type="checkbox"
                        name="age[12+]"
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <label name="12+" className="ml-3 text-sm font-medium">
                        12+
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="16+"
                        type="checkbox"
                        name="age[16+]"
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <label name="16+" className="ml-3 text-sm font-medium">
                        16+
                      </label>
                    </div>

                    <div className="pt-2">
                      <button type="button" className="text-xs text-gray-500 underline">
                        Reset Age
                      </button>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="flex justify-between border-t border-gray-200 px-5 py-3">
                <button
                  name="reset"
                  type="button"
                  className="rounded text-xs font-medium text-gray-600 underline"
                >
                  Reset All
                </button>

                <button
                  name="commit"
                  type="button"
                  className="rounded-sm bg-indigo-accent-700 hover:bg-black text-white px-5 py-3 text-xs font-medium "
                >
                  Apply Filters
                </button>
              </div>
            </form>
          </details>
        </div>
        {/* Content area */}
        <div className="lg:col-span-3">
          {/* content part header */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <span className="hidden sm:inline"> Showing </span>
              {coursesData.length} Lessons
            </p>

            <div className="ml-4">
              <label name="SortBy" className="sr-only">
                {" "}
                Sort{" "}
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
          <div className="mt-4 grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
            {/* Dynamically course card will appear here */}
            {coursesData.map((course) => (
              <CourseCard key={course.id} course={course}>
                {" "}
              </CourseCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
