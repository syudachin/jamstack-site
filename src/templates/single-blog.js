import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as style from "../styles/singleBlog.module.scss"

const SingleBlog = props => {
  return (
    <Layout>
      <div className={style.hero}>
        <GatsbyImage
          image={props.data.contentfulBlog.image.gatsbyImageData}
          alt="blog-image"
        />
      </div>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>{props.data.contentfulBlog.title}</h1>
          <p>{props.data.contentfulBlog.date}</p>
          <div
            dangerouslySetInnerHTML={{
              __html:
                props.data.contentfulBlog.textBody.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}
export default SingleBlog

export const query = graphql`
  query ContentfulSingleBlogQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      date(formatString: "YYYY-MM-DD")
      image {
        gatsbyImageData(formats: AUTO, placeholder: BLURRED, quality: 90)
      }
      textBody {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

// export const query = graphql`
//   query SingleBlogQuery($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         date
//         excerpt
//         id
//         title
//         image {
//           childImageSharp {
//             gatsbyImageData(
//               placeholder: BLURRED
//               formats: [AUTO, WEBP, AVIF]
//               quality: 90
//               width: 1000
//             )
//           }
//         }
//       }
//       html
//     }
//   }
// `
