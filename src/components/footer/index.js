import React from "react"

import "./index.scss"

const Footer = () => (
  <footer className="footer">
    © {new Date().getFullYear()},{" "}
    <a href="https://github.com/dailyco">dailyco</a> Built with&nbsp;
    <a href="https://github.com/dailyco/gatsby-starter-gradient">
      gatsby-starter-gradient
    </a>
  </footer>
)
export default Footer
