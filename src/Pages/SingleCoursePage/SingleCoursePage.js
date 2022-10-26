import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleCoursePage = () => {
  const singleCourseData = useLoaderData();
  console.log(singleCourseData);
  return <div>hi</div>;
};

export default SingleCoursePage;
