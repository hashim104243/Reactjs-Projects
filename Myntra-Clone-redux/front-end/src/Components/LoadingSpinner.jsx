import React from 'react'

export default function LoadingSpinner() {
  return (
    <div>
      <div className="d-flex justify-content-center" style={{ margin: "10% 0%" }}>
        <div className="spinner-border" style={{ width: "4rem", height: "4rem" }} role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    </div>
  )
}
