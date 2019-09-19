import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/start.css'


export default function Finish() {
  return (
   <body>

<div class="container-fluid title">
    <div class="triplets">
        <div>TRIPLETS</div>
        <svg width="60" height="60">
            <rect x="1" y="1" rx="1" ry="1" width="50" height="50" style={{ fill: 'none', stroke: 'black', strokeWidth: 2 }} />
        </svg>
        <svg width="60" height="60">
            <rect x="1" y="1" rx="1" ry="1" width="50" height="50" style={{ fill: 'none', stroke: 'black', strokeWidth: 2 }} />
        </svg>
        <svg width="60" height="60">
            <rect x="1" y="1" rx="1" ry="1" width="50" height="50" style={{ fill: 'none', stroke: 'black', strokeWidth: 2 }} />
        </svg>
        <div>
            <div class='result'>
                Sorry, Bad Luck!
            </div>
            <div>
            <Link to="/play">  <button>
                            <span>Play Again?</span>
                        </button></Link>
            </div>
        </div>
    </div>

</div>

<div class="container-fluid info">
    <div class="howTo">
       Score: 1.22
    </div>
</div>
</body>
  )
}