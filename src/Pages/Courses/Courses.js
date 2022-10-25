import React from "react";

const Courses = () => {
  return (
    <div>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
            <div class="lg:sticky lg:top-4">
              <details open class="overflow-hidden rounded border border-gray-200">
                <summary class="flex items-center justify-between bg-gray-100 px-5 py-3 lg:hidden">
                  <span class="text-sm font-medium"> Toggle Filters </span>

                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </summary>

                <form class="border-t border-gray-200 lg:border-t-0">
                  <fieldset>
                    <legend class="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                      Type
                    </legend>

                    <div class="space-y-2 px-5 py-6">
                      <div class="flex items-center">
                        <input
                          id="toy"
                          type="checkbox"
                          name="type[toy]"
                          class="h-5 w-5 rounded border-gray-300"
                        />

                        <label for="toy" class="ml-3 text-sm font-medium">
                          Toy
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="game"
                          type="checkbox"
                          name="type[game]"
                          class="h-5 w-5 rounded border-gray-300"
                        />

                        <label for="game" class="ml-3 text-sm font-medium">
                          Game
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="outdoor"
                          type="checkbox"
                          name="type[outdoor]"
                          class="h-5 w-5 rounded border-gray-300"
                        />

                        <label for="outdoor" class="ml-3 text-sm font-medium">
                          Outdoor
                        </label>
                      </div>

                      <div class="pt-2">
                        <button type="button" class="text-xs text-gray-500 underline">
                          Reset Type
                        </button>
                      </div>
                    </div>
                  </fieldset>

                  <div>
                    <fieldset>
                      <legend class="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                        Age
                      </legend>

                      <div class="space-y-2 px-5 py-6">
                        <div class="flex items-center">
                          <input
                            id="3+"
                            type="checkbox"
                            name="age[3+]"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <label for="3+" class="ml-3 text-sm font-medium">
                            3+
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="8+"
                            type="checkbox"
                            name="age[8+]"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <label for="8+" class="ml-3 text-sm font-medium">
                            8+
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="12+"
                            type="checkbox"
                            name="age[12+]"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <label for="12+" class="ml-3 text-sm font-medium">
                            12+
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="16+"
                            type="checkbox"
                            name="age[16+]"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <label for="16+" class="ml-3 text-sm font-medium">
                            16+
                          </label>
                        </div>

                        <div class="pt-2">
                          <button type="button" class="text-xs text-gray-500 underline">
                            Reset Age
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div class="flex justify-between border-t border-gray-200 px-5 py-3">
                    <button
                      name="reset"
                      type="button"
                      class="rounded text-xs font-medium text-gray-600 underline"
                    >
                      Reset All
                    </button>

                    <button
                      name="commit"
                      type="button"
                      class="rounded bg-green-600 px-5 py-3 text-xs font-medium text-white"
                    >
                      Apply Filters
                    </button>
                  </div>
                </form>
              </details>
            </div>
            {/* Content area */}
            <div class="lg:col-span-3">
              {/* content part header */}
              <div class="flex items-center justify-between">
                <p class="text-sm text-gray-500">
                  <span class="hidden sm:inline"> Showing </span>6 of 24 Products
                </p>

                <div class="ml-4">
                  <label for="SortBy" class="sr-only">
                    {" "}
                    Sort{" "}
                  </label>

                  <select
                    id="SortBy"
                    name="sort_by"
                    class="rounded border-gray-100 text-sm"
                  >
                    <option readonly>Sort</option>
                    <option value="title-asc">Title, A-Z</option>
                    <option value="title-desc">Title, Z-A</option>
                    <option value="price-asc">Price, Low-High</option>
                    <option value="price-desc">Price, High-Low</option>
                  </select>
                </div>
              </div>
              {/* courses cards part */}
              <div class="mt-4 grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
                {/* Dynamically course card will appear here */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
