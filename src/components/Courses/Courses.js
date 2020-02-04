import React from "react";
import Course from "./Course";
import { useStaticQuery, graphql } from "gatsby";
import styles from "../../css/courses.module.css";

import Title from "../Title";

const query = graphql`
  {
    allStrapiCourse(sort: { fields: published, order: DESC }) {
      courses: edges {
        node {
          title
          published(formatString: "MMMM Do, YYYY")
          size
          id: strapiId
          image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;

const Courses = () => {
  const { allStrapiCourse } = useStaticQuery(query);
  const { courses } = allStrapiCourse;
  // console.log("courses", courses);
  return (
    <section className={styles.courses}>
      <Title title="all" subtitle="courses" />
      <div className={styles.center}>
        {courses.map(({ node }) => (
          <Course key={node.id} {...node} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
