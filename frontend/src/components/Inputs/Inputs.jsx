import "./inputs.css"
import { useState } from "react";
import axios from "axios"

const Inputs = () => {
    const [input , setInput] = useState({
        name: '',
        day: '',
        quarter: '',
        noOfWorkers: '',
        department: '',
        wip: '',
        NoOfmen: '',
        overtime: '',
        incentive: '',
        idleTime: '',
        idleMen: '',
        smv: '',

    });

    const api = `http://localhost:5000/employee`

    const handleChange = (e) => {
       setInput({
              ...input,
                [e.target.name]: e.target.value
       })
    }
    const handleClick = (e) => {
        axios.post(api, input).then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
        e.preventDefault();
    }
    return (
    <div>
    <form className="form">
        <div className="form-div">
            <h4>Personal Details: </h4>
            <div className="upperlabel">
                <div className="label-div">
                <label>Name: </label>
                <input type="text" placeholder="Name of Employee" value={input.name} name="name" onChange={handleChange} />
                </div>

                <div className="label-div">
                <label>Day: </label>
                <select placeholder="Work Day" value={input.day} name="day" onChange={handleChange} className="select">
                    <option className="option" value="" disabled>Select Day</option>
                    <option className="option" value="0">Monday</option>
                    <option className="option" value="1">Tuesday</option>
                    <option className="option" value="2">Wednesday</option>
                    <option className="option" value="3">Thursday</option>
                    <option className="option" value="4">Friday</option>
                    <option className="option" value="5">Saturday</option>
                    <option className="option" value="6">Sunday</option>
                </select>
                </div>

                <div className="label-div">
                <label>Quarter: </label>
                <select value={input.quarter} placeholder="Quarter" name="quarter" onChange={handleChange} className="select">
                    <option className="option" value="" disabled>Select Quarter</option>
                    <option className="option" value="0">Jan-Mar</option>
                    <option className="option" value="1">Apr-June</option>
                    <option className="option" value="2">July-Sept</option>
                    <option className="option" value="3">Oct-Dec</option>
                </select>
                </div>

                <div className="label-div">
                <label>Department: </label>
                <select value={input.department} placeholder="Department" name="department" onChange={handleChange} className="select">
                    <option className="option" value="" disabled>Select Department</option>
                    <option className="option" value="0">Finance</option>
                    <option className="option" value="1">Technical</option>
                    <option className="option" value="2">Electronics</option>
                    </select>
                </div>
            </div>
            
        </div>

        <hr />

        <div className="form-div">
            <h4>Work Details: </h4>
            <div className="upperlabel">
                <div className="label-div">
                <label>Overtime: </label>
                <input type="text" placeholder="Overtime" value={input.overtime} name="overtime" onChange={handleChange} />
                </div>

                <div className="label-div">
                <label>Wip: </label>
                <input type="text" value={input.wip} placeholder="Wip" name="wip" onChange={handleChange} />
                </div>

                <div className="label-div">
                <label>No Of Men: </label>
                <input type="text" value={input.NoOfmen} placeholder="No Of Men" name="NoOfmen" onChange={handleChange}  />
                </div>

                <div className="label-div">
                <label>No Of Workers: </label>
                <input type="text" value={input.noOfWorkers} placeholder="No Of Workers" name="noOfWorkers" onChange={handleChange}  />
                </div>
            </div>

        </div>

        <hr />

        <div className="form-div">
            <h4>Team Details: </h4>
            <div className="upperlabel">
                <div className="label-div">
                <label>Incentive: </label>
                <input type="text" value={input.incentive} placeholder="Incentive" name="incentive" onChange={handleChange} />
                </div>

                <div className="label-div">
                <label>Idle Time: </label>
                <input type="text" value={input.idleTime} placeholder="Idle Time Count" name="idleTime" onChange={handleChange} />
                </div>

                <div className="label-div">
                <label>Idle Men: </label>
                <input type="text" value={input.idleMen} placeholder="Idle Men Count" name="idleMen" onChange={handleChange}  />
                </div>

                <div className="label-div">
                <label>Smv: </label>
                <input type="text" value={input.smv} placeholder="Smv" name="smv" onChange={handleChange}  />
                </div>
            </div>
            
        </div>

        <button onClick={handleClick} type="submit">Submit</button>
    </form>
    </div>
    )
}

export default Inputs