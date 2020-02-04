import React from "react";
import Layout from "../components/layout";
import Courses from "../components/Courses/Courses";

const courses = () => {
  return (
    <Layout>
      <h1
        style={{
          textAlign: "center",
          textTransform: "capitalize",
          marginTop: "4rem",
        }}
      >
        courses page
      </h1>
      <Courses />
    </Layout>
  );
};

export default courses;
