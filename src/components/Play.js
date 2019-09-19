import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function Play() {
  return (
    <div className="container">
      <h1>Play Screen</h1>
      <p>
        <Link to="/finish">Finish</Link>
        <br/>
        <Link to="/">Home</Link>
      </p>
    </div>
  )
}