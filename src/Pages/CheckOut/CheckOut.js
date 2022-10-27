import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import innerBanner from "../../media/photos/slider-6.jpg";

const CheckOut = () => {
  const cartData = useLoaderData();

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
    price,
  } = cartData;

  const { courses, img_url, instructor_rating, name, reviews, students } = author[0];
  return (
    <div>
      <>
        <div
          className="bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${innerBanner})` }}
        >
          <div className="hero-overlay bg-cover bg-opacity-60 py-20 pl-10 md:pl-24 lg:pl-44">
            <h1 className=" text-5xl font-bold text-neutral-content ">Check Out</h1>
            <h3 className=" text-xl font-semibold text-neutral-content py-2">
              {courseName}
            </h3>
          </div>
        </div>
      </>

      <div>
        <section>
          <h1 className="sr-only">Checkout</h1>

          <div className="relative mx-auto max-w-screen-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-gray-50 py-12 md:py-24">
                <div className="mx-auto max-w-lg px-4 lg:px-8">
                  <div className="mt-8">
                    <p className="text-2xl font-medium tracking-tight">${price} USD</p>
                    <p className="mt-1 text-sm text-gray-500">For the purchase of</p>
                  </div>

                  <div className="mt-12">
                    <div className="flow-root">
                      <ul className="-my-4 divide-y divide-gray-200">
                        <li className="flex items-center justify-between py-4">
                          <div className="flex items-start">
                            <img
                              alt="Trainer"
                              src={image}
                              className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                            />

                            <div className="ml-4">
                              <p className="text-sm">{courseName}</p>

                              <dl className="mt-1 space-y-1 text-xs text-gray-500">
                                <div>
                                  <dt className="inline">Category: </dt>
                                  <dd className="inline">{category}</dd>
                                </div>
                                <div>
                                  <dt className="inline">Certificate:</dt>
                                  <dd className="inline">
                                    {certificate ? " Yes " : " No "}
                                  </dd>
                                </div>
                                <div>
                                  <dt className="inline">Duration: </dt>
                                  <dd className="inline">{duration}</dd>
                                </div>
                              </dl>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm">${price}</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white py-12 md:py-24">
                <div className="mx-auto max-w-lg px-4 lg:px-8">
                  <form className="grid grid-cols-6 gap-4">
                    <div className="col-span-3">
                      <label
                        className="mb-1 block text-sm text-gray-600"
                        for="first_name"
                      >
                        First Name
                      </label>

                      <input
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                        type="text"
                        id="first_name"
                      />
                    </div>

                    <div className="col-span-3">
                      <label className="mb-1 block text-sm text-gray-600" for="last_name">
                        Last Name
                      </label>

                      <input
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                        type="text"
                        id="last_name"
                      />
                    </div>

                    <div className="col-span-6">
                      <label className="mb-1 block text-sm text-gray-600" for="email">
                        Email
                      </label>

                      <input
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div className="col-span-6">
                      <label className="mb-1 block text-sm text-gray-600" for="phone">
                        Phone
                      </label>

                      <input
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                        type="tel"
                        id="phone"
                      />
                    </div>

                    <fieldset className="col-span-6">
                      <legend className="mb-1 block text-sm text-gray-600">
                        Card Details
                      </legend>

                      <div className="-space-y-px rounded-lg bg-white shadow-sm">
                        <div>
                          <label className="sr-only" for="card-number">
                            Card Number
                          </label>

                          <input
                            className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                            type="text"
                            name="card-number"
                            id="card-number"
                            placeholder="Card number"
                          />
                        </div>

                        <div className="flex -space-x-px">
                          <div className="flex-1">
                            <label className="sr-only" for="card-expiration-date">
                              Expiration Date
                            </label>

                            <input
                              className="relative w-full rounded-bl-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                              type="text"
                              name="card-expiration-date"
                              id="card-expiration-date"
                              placeholder="MM / YY"
                            />
                          </div>

                          <div className="flex-1">
                            <label className="sr-only" for="card-cvc">
                              CVC
                            </label>

                            <input
                              className="relative w-full rounded-br-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                              type="text"
                              name="card-cvc"
                              id="card-cvc"
                              placeholder="CVC"
                            />
                          </div>
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="col-span-6">
                      <legend className="mb-1 block text-sm text-gray-600">
                        Billing Address
                      </legend>

                      <div className="-space-y-px rounded-lg bg-white shadow-sm">
                        <div>
                          <label className="sr-only" for="country">
                            Country
                          </label>

                          <select
                            className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm focus:z-10"
                            id="country"
                            name="country"
                            autoComplete="country-name"
                          >
                            <option>England</option>
                            <option>Wales</option>
                            <option>Scotland</option>
                            <option>France</option>
                            <option>Belgium</option>
                            <option>Japan</option>
                          </select>
                        </div>

                        <div>
                          <label className="sr-only" for="postal-code">
                            ZIP/Post Code
                          </label>

                          <input
                            className="relative w-full rounded-b-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            autoComplete="postal-code"
                            placeholder="ZIP/Post Code"
                          />
                        </div>
                      </div>
                    </fieldset>

                    <div className="col-span-6">
                      <button
                        className="block w-full rounded-lg bg-black p-2.5 text-sm text-white"
                        type="submit"
                      >
                        Pay Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CheckOut;
