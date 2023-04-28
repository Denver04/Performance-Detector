import React from "react";
import "./inputs.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { sharedContext } from "../../context/InfoContext";

const Inputs = () => {
    const navigate = useNavigate();
    const { updateInformation , updateName } = React.useContext(sharedContext);

    const [input , setInput] = useState({
        quarter: '',
        department: '',
        name: '',
        day: '',
        no_of_style_change: '',
        team: '',
        no_of_workers: '',
        over_time: '',
        incentive: '',
        idle_time: '',
        idle_men: '',
        smv: '',
        month: '',
        targeted_productivity: '',

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
            updateName('16.8')
            updateInformation(input);
            navigate(`/employee/${input.name}`)
        })
        .catch((err) => {
            console.log(err);
        })
        e.preventDefault();
    }
    // }
    return (
    <div>
    <form className="form" autoComplete="off">
        <div className="form-div">
            <h4>Personal Details: </h4>
            <div className="upperlabel">
                <div className="label-div">
                <label>Name: </label>
                <input type="text" placeholder="your name" value={input.name} name="name" onChange={handleChange} autoComplete="off" />
                </div>

                <div className="label-div">
                    <label>Gender: </label>
                    <select placeholder="gender" name="gender" className="select">
                        <option className="option" disabled>Choose</option>
                        <option className="option" value="male">Male</option>
                        <option className="option" value="female">Female</option>
                    </select>
                </div>

                <div className="label-div">
                <label>Day: </label>
                <select placeholder="Work Day" value={input.day} name="day" onChange={handleChange} className="select">
                    <option className="option" value="" disabled>Select Day</option>
                    <option className="option" value="Monday">Monday</option>
                    <option className="option" value="Tuesday">Tuesday</option>
                    <option className="option" value="Wednesday">Wednesday</option>
                    <option className="option" value="Thursday">Thursday</option>
                    <option className="option" value="Sunday">Friday</option>
                    <option className="option" value="Saturday">Saturday</option>
                </select>
                </div>

                <div className="label-div">
                <label>Quarter: </label>
                <select value={input.quarter} placeholder="quarter" name="quarter" onChange={handleChange} className="select">
                    <option className="option" value="" disabled>Select Quarter</option>
                    <option className="option" value="Quarter1">Quarter 1</option>
                    <option className="option" value="Quarter2">Quarter 2</option>
                    <option className="option" value="Quarter3">Quarter 3</option>
                    <option className="option" value="Quarter4">Quarter 4</option>
                    <option className="option" value="Quarter5">Quarter 5</option>
                </select>
                </div>

                <div className="label-div">
                <label>Month: </label>
                <select value={input.month} type="text" placeholder="month" name="month" onChange={handleChange} className="select">
                    <option className="option" value="" disabled>Select</option>
                    <option className="option" value={1}>January</option>
                    <option className="option" value={2}>February</option>
                    <option className="option" value={3}>March</option>
                    {/* <option className="option" value="2">Electronics</option> */}
                    </select>
                </div>

            </div>
            
        </div>

        <hr />

        <div className="form-div">
            <h4>Work Details: </h4>
            <div className="upperlabel">

                <div className="label-div">
                    <label>Department: </label>
                    <select value={input.department} placeholder="Department" name="department" onChange={handleChange} className="select">
                        <option className="option" value="" disabled>Select Department</option>
                        <option className="option" value="finishing">Finishing</option>
                        <option className="option" value="sweing">Sewing</option>
                    {/* <option className="option" value="2">Electronics</option> */}
                    </select>
                </div>

                <div className="label-div">
                <label>Overtime: </label>
                <input type="number" placeholder="overtime" value={input.over_time} name="over_time" onChange={handleChange} autoComplete="off" />
                </div>

                <div className="label-div">
                <label>Team No.: </label>
                <select value={input.team} type="text" placeholder="team number" name="team" onChange={handleChange} className="select">
                    <option className="option" value="" disabled>Choose</option>
                    <option className="option" value="1">1</option>
                    <option className="option" value="2">2</option>
                    <option className="option" value="3">3</option>
                    <option className="option" value="4">4</option>
                    <option className="option" value="5">5</option>
                    <option className="option" value="6">6</option>
                    <option className="option" value="7">7</option>
                    <option className="option" value="8">8</option>
                    <option className="option" value="9">9</option>
                    <option className="option" value="10">10</option>
                    <option className="option" value="11">11</option>
                    <option className="option" value="12">12</option>
                    {/* <option className="option" value="2">Electronics</option> */}
                    </select>
                </div>

                <div className="label-div">
                <label>No Of Workers: </label>
                <input type="number" value={input.no_of_workers} placeholder="no of workers" name="no_of_workers" onChange={handleChange} autoComplete="off" />
                </div>

                <div className="label-div">
                <label>No Of Style Change: </label>
                <input type="number" value={input.no_of_style_change} placeholder="no of style change" name="no_of_style_change" onChange={handleChange} autoComplete="off" />
                </div>
            </div>

        </div>

        <hr />

        <div className="form-div">
            <h4>Team Details: </h4>
            <div className="upperlabel">

                <div className="label-div">
                    <label>Targeted Productivity: </label>
                    <input type="number" value={input.targeted_productivity} placeholder="productivity" name="targeted_productivity" onChange={handleChange} autoComplete="off" />
                </div>

                <div className="label-div">
                <label>Incentive: </label>
                <input type="number" value={input.incentive} placeholder="incentive" name="incentive" onChange={handleChange} autoComplete="off"/>
                </div>

                <div className="label-div">
                <label>Idle Time: </label>
                <input type="number" value={input.idle_time} placeholder="Idle time count" name="idle_time" onChange={handleChange} autoComplete="off"/>
                </div>

                <div className="label-div">
                <label>Idle Men: </label>
                <input type="number" value={input.idle_men} placeholder="idle men Count" name="idle_men" onChange={handleChange} autoComplete="off"/>
                </div>

                <div className="label-div">
                <label>Smv: </label>
                <input type="number" value={input.smv} placeholder="smv" name="smv" onChange={handleChange} autoComplete="off" />
                </div>
            </div>
            
        </div>

        <button onClick={handleClick} type="submit">Submit</button>
        {/* <Link to="/employee/abc">fsef</Link> */}
    </form>
    </div>
    )
}

export default Inputs