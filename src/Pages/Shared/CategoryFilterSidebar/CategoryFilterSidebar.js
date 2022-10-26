import React from "react";

const CategoryFilterSidebar = () => {
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
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="toy"
                  name="type[toy]"
                  className="h-5 w-5 rounded border-gray-300"
                />
                <label name="t0y" className="ml-3 text-sm font-medium">
                  Toy
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
  );
};

export default CategoryFilterSidebar;
