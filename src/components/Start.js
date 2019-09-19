import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/start.css'

export default function Start() {
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
                    <div>
                        <Link to="/play">  <button>
                            <span>Play!</span>
                        </button></Link>

                    </div>
                </div>
            </div>

        </div>

        <div class="container-fluid info">
            <div class="howTo">
                How To Play
        </div>
            <div class="rules">
                - Move the boxes from point A to B without touching any obstacles.
        </div>
        </div>
    </body>
  )
}