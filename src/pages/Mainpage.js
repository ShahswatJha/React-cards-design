import React from 'react'
import Cards from '../components/Cards'


import './mainpage.css'

function Mainpage() {
    return (
        <div className="SearchPage_body">
            <div class="SearchPage_left">
                <div class="wrapper">
                   <Cards/>
                </div>
            </div>
            <div class="SearchPage_right">
                <div class="wrapper">
                    World
                </div>
            </div>
        </div>
    )
}

export default Mainpage

