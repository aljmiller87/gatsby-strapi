import React from "react";
import Course from "../Courses/Course";
import { useStaticQuery, graphql, Link } from "gatsby";
import styles from "../../css/courses.module.css";
import Title from "../Title";

const query = graphql`
  {
    allStrapiCourse(sort: { fields: published, order: DESC }, limit: 3) {
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
      <Title title="top" subtitle="courses" />
      <div className={styles.center}>
        {courses.map(({ node }) => (
          <Course key={node.id} {...node} />
        ))}
      </div>
      <Link to="/courses" className="btn-primary">
        all courses
      </Link>
    </section>
  );
};

export default Courses;
