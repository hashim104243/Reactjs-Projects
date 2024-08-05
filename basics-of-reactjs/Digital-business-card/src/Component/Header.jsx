import React from 'react'

export default function Header() {
  return (
    <div>
      <img src='images/Rectangle 90.png' width="100%" height="200px" />
      <div style={{ textAlign: "center" }}>
        <h1 style={{ margin: "4px 0px" }}>Laura Smith</h1>
        <h2 style={{ margin: "4px 0px" }}>Developer</h2>
        <h3 style={{ color: "#F47D27", margin: "4px 0px" }}>laurasmith.website</h3>
      </div>

      <div>
        <button style={{
          display: "flex", justifyContent: "center",
          alignItems: "center", width: "100%", padding: "6px", textAlign: "center"
        }}> <p><img style={{ marginTop: "3px", marginRight: "5px" }} src='images/Mail.png' width="20px" height="20px" /> </p><span>Email</span></button>
      </div>
    </div>
  )
}
