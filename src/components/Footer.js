import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import { GithubCircle } from "mdi-material-ui";

const Footer = props => {
  const {
    company,
  } = props.data.site.siteMetadata;
  return (
    <>
      <Divider style={{ marginTop: "48px", marginBottom: "24px" }} />
      <footer
        style={{ marginBottom: "24px", whiteSpace: "nowrap" }}
        id="footer"
      >
        <div style={{ textAlign: "center" }}>
          <Typography variant="caption" component="span">
            ©{new Date().getFullYear()} {company}{" "}
          </Typography>
        </div>
      </footer>
    </>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            company
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
