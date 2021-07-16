import React from "react"
import PropTypes from "prop-types"

const Item = ({ type, value }) => {
  const socialText = {
    github: "GitHub",
    instagram: "Instagram",
    twitter: "Twitter",
    medium: "Medium",
    facebook: "Facebook",
    linkedin: "LinkedIn",
  }

  return (
    value && (
      <a
        href={`https://${type}.com/${type === "linkedin" ? "in/" : ""}${value}`}
      >
        ✤ {socialText[type]}
      </a>
    )
  )
}

Item.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
}

Item.defaultProps = {
  type: "",
  value: "",
}

export default Item
