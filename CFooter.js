import React from 'react'
import './CFooter.css'

export const CFooter = (props) => {
    const {name, surname} = props;
    let date= new Date();
    return (
        <div>
            <h5>
                Dzisiaj jest : {date.toDateString()}
                <br/>
                Strona została stworzona przez: {name} {surname}.
                <br/>

            </h5>
        </div>
    )
}