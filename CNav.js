import React, {Component} from 'react'
import './CNav.css'
import CContents from './CContents'
import {navButton} from './navButton';

export default class CNav extends Component{
    constructor(){
        super();
        

    }
    render(){


        return(
            <div>
                <div className="navContainer">
                        <div className="navContainerDiv" onClick={() => navButton(`1`)}>
                            Podstrona 1
                        </div>

                        <div className="navContainerDiv" onClick={() => navButton(`2`)}>
                            Podstrona 2
                        </div>

                        <div className="navContainerDiv" onClick={() =>navButton(`3`)}>
                            Podstrona 3
                        </div>
                        
                        <div className="navContainerDiv" onClick={() =>navButton(`4`)}>
                            Podstrona 4
                        </div>
                        
                </div>
                
                <div>
                    <CContents/>  
                </div>
            </div>


        );
    }
}

