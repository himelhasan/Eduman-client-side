import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryFilterSidebar = () => {
  const [category, setCategory] = useState([]);
  const [tags, setTags] = useState([]);
  // TO LOAD ALL THE Categories NAME
  useEffect(() => {
    fetch("https://course-data-server.vercel.app/allCategory")
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);

  // TO LOAD ALL THE TAGS NAME
  useEffect(() => {
    fetch("https://course-data-server.vercel.app/alltags")
      .then((response) => response.json())
      .then((data) => setTags(data));
  }, []);

  return (
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
              Category
            </legend>

            <div className="space-y-2 px-5 py-6">
              {/*  */}
              <div className="flex items-center">
                <Link to="/allcourses" className="ml-3 text-sm font-medium">
                  All Courses
                </Link>
              </div>
              {category.map((c) => (
                <div className="flex items-center">
                  <Link
                    to={`/courses/${c.categoryName} `}
                    className="ml-3 text-sm font-medium"
                  >
                    {c.categoryName}
                  </Link>
                </div>
              ))}

              {/*  */}
              <div className="pt-2">
                <Link to="/allcourses" className="text-xs text-gray-500 underline">
                  Reset All
                </Link>
              </div>
            </div>
          </fieldset>

          <div>
            <fieldset>
              <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                Expertise Level
              </legend>
              <div className="space-y-2 px-5 py-6">
                {tags.map((c) => (
                  <div className="flex items-center">
                    <Link to={`/courses/${c}`} className="ml-3 text-sm font-medium">
                      {c}
                    </Link>
                  </div>
                ))}

                {/* <div className="flex items-center">
                  <Link to="/courses/BEST%20SELLER" className="ml-3 text-sm font-medium">
                    BEST SELLER
                  </Link>
                </div>
                <div className="flex items-center">
                  <Link to="/courses/Advanced" className="ml-3 text-sm font-medium">
                    Advanced
                  </Link>
                </div>
                <div className="flex items-center">
                  <Link to="/courses/Expert" className="ml-3 text-sm font-medium">
                    Expert
                  </Link>
                </div> */}
              </div>
            </fieldset>
          </div>

          <div className="flex justify-between border-t border-gray-200 px-5 py-3">
            <Link to="/allcourses" className="text-xs text-gray-500 underline">
              Reset All
            </Link>

            {/* <button
              name="commit"
              type="button"
              className="rounded-sm bg-indigo-accent-700 hover:bg-black text-white px-5 py-3 text-xs font-medium "
            >
              Apply Filters
            </button> */}
          </div>
        </form>
      </details>
    </div>
  );
};

export default CategoryFilterSidebar;
