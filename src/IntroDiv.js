import { exportAllDeclaration } from "@babel/types"
import React from 'react';
import './HomePage.css';
import data from './labels.json'

function IntroDiv() {
    return(
        <div>
             <div class="panel" data-color="light-yellow">
                <div>
                    <h1>{data.intro.name}</h1>
                    <h5><i>{data.intro.tag} </i></h5>
                    <p>{data.intro.brief_p1}</p>
                    <p>
                        {data.intro.brief_p2_1} 
                        <a href = {data.links.the_way_out} target="_blank"> The Way Out</a>   
                        {data.intro.brief_p2_2}
                        <a href = {data.links.jal_shakti} target="_blank"> Jal Shakti</a> 
                        {data.intro.brief_p2_3}
                        <a href = {data.links.kartik_raman} target="_blank"> Kartik Raman </a> 
                         and <a href = {data.links.shankar_mahadevan} target="_blank"> Padmashree Shankar Mahadevan </a>
                        
                    </p>

                    <p>
                    {data.intro.brief_p2_4} 
                    </p>
                </div>
                </div>
        </div>
    )
}

export default IntroDiv;