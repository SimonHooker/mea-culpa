import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Page from "../components/Page";
import List from "../components/List";
import Tabs from "../components/Tabs";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Alien } from "mdi-material-ui";
import { Robot } from "mdi-material-ui";
import logo from "../../images/logo.png";
import withRoot from "../utils/withRoot";
import Avatar from "@material-ui/core/Avatar";

const styles = theme => ({
    angles: {
      color: theme.palette.secondary.light,
      opacity: 0.5,
    },
    avatar: {
      width: "160px",
      height: "160px",
      marginBottom: "40px",
      backgroundColor: theme.palette.primary.light,
    },
    logo: {
      width: "100px",
      height: "100px",
      border: "0",
    },
    text: {
      textAlign: "center",
    },
    tabs: {
      marginTop: "40px",
      marginBottom: "40px",
    },
  }),
  Home = props => {
    const {
      classes,
      data: {
        AboutUs: { edges: aboutus },
        Progress: { edges: progress },
        Raiders: { edges: raiders },
        Basic: {
          siteMetadata: {
            domain,
            company,
            defaultTitle,
            preamble,
          },
        },
      },
    } = props;
    return (
      <Page>
        <SEO title={defaultTitle}>
          <link rel="canonical" href={domain} />
        </SEO>
        <div className={classes.text}>
          <center>
            <Avatar className={classes.avatar}>
              <a href={domain}>
                <img src={logo} alt={company} className={classes.logo} />
              </a>
            </Avatar>
          </center>
          <Typography
            paragraph
            color="primary"
            gutterBottom
            variant="h1"
            component="span"
          >
            <span className={classes.angles}>&lt;</span> Mea Culpa{" "}
            <span className={classes.angles}>&gt;</span>
          </Typography>
          <Typography paragraph gutterBottom variant="body1" component="span">
            {preamble}
          </Typography>
        </div>
        <div className={props.classes.tabs}>
          <Tabs
            items={[
              ["About us", <Robot />, <List items={aboutus} />],
              ["Progress", <Alien />, <List items={progress} />],
              ["Our raiders", <Alien />, <List items={raiders} />],
            ]}
          />
        </div>
      </Page>
    );
  };

export const query = graphql`
  query Name {
    Basic: site {
      siteMetadata {
        domain
        company
        defaultTitle
        preamble
      }
    }
    AboutUs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/aboutus/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            imageLink
          }
        }
      }
    }
    Progress: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/progress/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            imageLink
          }
        }
      }
    }
    Raiders: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/raiders/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            imageLink
          }
        }
      }
    }
  }
`;

export default withRoot(withStyles(styles, { withTheme: true })(Home));
