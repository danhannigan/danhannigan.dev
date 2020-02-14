/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  return (
    <div>
      <h1>Hi, I'm Dan.</h1>
      <p>
        I've been working as a Front End Developer, occasional designer, for
        boutique advertising agencies since 2011. In 2018 I changed gears to
        product/SaaS work and I couldn't be happier.
      </p>
      <p>
        Currently, I'm tapping away on a React app at{" "}
        <a href="https://airdna.co">AirDNA</a> — a startup specializing in
        Vacation Rental Data — where I like to use my skills to build out and
        polish the UI/UX for our users and aid communication between design &
        development internally.
      </p>
      <p>
        I've also worked with some great folks and clients at top-notch agencies
        like <a href="http://www.legworkstudio.com/">Legwork</a>,{" "}
        <a href="https://www.deloittedigital.com/">Deloitte Digital</a>, and{" "}
        <a href="https://www.the1stmovement.com/">The1stMovement</a>.
      </p>
      <p>
        Want to see more? <a href="#">Take a look at my resume</a>.
      </p>
      <h3>Side Projects & Hobbies</h3>
      <p>
        Since 2015 I've managed{" "}
        <a href="https://www.denverdevs.org/">Denver Devs</a> — a community of
        9000+ developers & techies based on Slack. Besides making sure the
        channels stay tidy, I designed & built the{" "}
        <a href="https://www.denverdevs.org/">Denver Devs website</a> — which is
        currently using VuePress with some AWS Lambda sprinkled in. I'm working
        on bringing it over to Gatsby with a new design and a lot more features.
        You can view that code in the{" "}
        <a href="https://github.com/Denver-Devs?type=source">
          Denver Devs Github
        </a>{" "}
        org.
      </p>
      <p>
        My hobby time is spent being a forever Dungeon Master for D&D, 3d
        printing, painting miniatures, board games, and video games.
      </p>
      <h3>
        Want to chat about running a community, frontend stuff, or how to not
        TPK your party in D&D? Drop me a line on{" "}
        <a href="https://twitter.com/danhannigan">Twitter</a> or{" "}
        <a href="mailto: hi@danhannigan.dev">Email</a>.
      </h3>
      <p class="end-cap">
        There's also my{" "}
        <a href="https://www.instagram.com/danhannigan/">Instagram</a>,{" "}
        <a href="https://codepen.io/danhannigan/">CodePen</a> &{" "}
        <a href="https://www.linkedin.com/in/danhannigan/">LinkedIn</a>.
      </p>
    </div>
  )
}

export default Bio
