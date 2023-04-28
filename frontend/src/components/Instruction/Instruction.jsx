import panda_learn from "../../images/panda-learn2.png"
import "./instruction.css"

function Instruction() {
  return (
    <div className="rules">
        <div className="rule1">
            <div className="rule-image">
                <img src={panda_learn} alt="logo" />
            </div>
            <div className="rule-text">
                <h1>Instructions</h1>
                <p>Following are the rules and type format in which a user should fill the form</p>
            </div>
        </div>
        <div className="rule2">
            <div className="rule-text">
                <ul>
                    <li>
                        <p><span>Name: </span>Name of the employee.</p>
                    </li>
                    <li>
                        <p><span>Day: </span>Day of the Week.</p>
                    </li>
                    <li>
                        <p><span>Quarter: </span>A portion of the month. A month was divided into five quarters.</p>
                    </li>
                    <li>
                        <p><span>Month: </span>jdawdadad</p>
                    </li>
                    <li>
                        <p><span>Department: </span>Associated department with the instance</p>
                    </li>
                    <li>
                        <p><span>Overtime: </span>Represents the amount of overtime by each team in minutes.</p>
                    </li>
                    <li>
                        <p><span>Team No: </span>Associated team number with the instance.</p>
                    </li>
                    <li>
                        <p><span>No Of Workers: </span>Number of workers in each team</p>
                    </li>
                    <li>
                        <p><span>No Of Style Change: </span> Number of changes in the style of a particular product.</p>
                    </li>
                    <li>
                        <p><span>Targeted Productivity: </span>Targeted productivity set by the Authority for each team for each day.</p>
                    </li>
                    <li>
                        <p><span>Incentive: </span>Represents the amount of financial incentive (in BDT) that enables or motivates a particular course of action.</p>
                    </li>
                    <li>
                        <p><span>Idle Time: </span>The amount of time when the production was interrupted due to several reasons.</p>
                    </li>
                    <li>
                        <p><span>Idle Men: </span>The number of workers who were idle due to production interruption.</p>
                    </li>
                    <li>
                        <p><span>Smv: </span>Standard Minute Value, it is the allocated time for a task.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Instruction