import React from "react";
import { sharedContext } from "../context/InfoContext"
import "./name.css"
import perform from "../images/perform.png"
import lazy from "../images/lazy.png"
import hard from "../images/hard.png"
import help from "../images/help.png"

function Name() {
    // eslint-disable-next-line no-unused-vars
    const { information , output } = React.useContext(sharedContext);

    if(information.month === "1"){
        information.month = "January"
    }
    else if(information.month === "2"){
        information.month = "February"
    }
    else{
        information.month = "March"
    }

  return (
    <div className="result">
        <div className="result1">
            <div className="perform-panda">
                {
                    output >= 75 ? <img src={hard} alt="perform" /> : output >= 50 ? <img src={perform} alt="perform" /> : output >= 25 ? <img src={help} alt="perform" /> : <img src={lazy} alt="perform" />
                }
            </div>
            <h1>Performace Result</h1>
        </div>
        <div className="result2">
            <div className="info">
                Name : <span>{information.name}</span>
            </div>
            <div className="info">
                Gender : <span>{information.gender}</span>
            </div>
            <div className="info">
                Day : <span>{information.day}</span>
            </div>
            <div className="info">
                Month : <span>{information.month}</span>
            </div>
            <div className="info">
                Department : <span>{information.department}</span>
            </div>
            <div className="info">
                Quarter : <span>{information.quarter}</span>
            </div>
            <div className="info">
                Overtime : <span>{information.over_time}</span>
            </div>
            <div className="info">
                Team No. : <span>{information.team}</span>
            </div>
            <div className="info">
                No of Workers: <span>{information.no_of_workers}</span>
            </div>
            <div className="info">
                No of Style Change : <span>{information.no_of_style_change}</span>
            </div>
            <div className="info">
                Incentive : <span>{information.incentive}</span>
            </div>
            <div className="info">
                Idle Time : <span>{information.idle_time}</span>
            </div>
            <div className="info">
                Idle Men : <span>{information.idle_men}</span>
            </div>
            <div className="info">
                Smv : <span>{information.smv}</span>
            </div>
            <div className="info">
                Targeted Productivity : <span>{information.targeted_productivity}</span>
            </div>
        </div>
        <div className="prediction">
            Predicted Productivity : <span>{output}%</span>
        </div>
    </div>
  )
}

export default Name

{/* <h1>Abhisek</h1>
        <h1>finance</h1>
        <h1>quarter</h1>
        <h1>day</h1>
        <h1>month</h1>
        <h1>style change</h1>
        <h1>team</h1>
        <h1>no_of_workers</h1>
        <h1>over_time</h1>
        <h1>incentive</h1>
        <h1>idle_time</h1>
        <h1>targeted_productivity</h1>
        <h1>smv</h1>
        <h1>incentive</h1> */}