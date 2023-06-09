import React from "react";
import "./inputs.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { sharedContext } from "../../context/InfoContext";
import { Oval } from "react-loader-spinner"

const Inputs = () => {
    const navigate = useNavigate();
    const { updateInformation , updateName } = React.useContext(sharedContext);

    const [input , setInput] = useState({
        quarter: '',
        department: '',
        name: '',
        gender:'',
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

    const [show , setShow] = useState(false);
    
    const boolean = () => {
        let flag = true;
        for (let key in input) {
            if(input[key] === " " || input[key] === ""){
                flag = false;
                break;
            }
            else{
                flag = true;
            }
        }

        return flag;
    }

    const api = `http://localhost:5000/employee`

    const handleChange = (e) => {
       setInput({
              ...input,
                [e.target.name]: e.target.value
       })
    }
    const handleClick = (e) => {
        
        if(boolean()){
            setShow(true);
            axios.post(api, input).then((res) => {    
                console.log(res);  
                updateName(res.data)
                updateInformation(input);
                navigate(`/employee/${input.name}`)
            })
            .catch((err) => {
                console.log(err);
            })
            e.preventDefault();
        }

        else{
            alert("Either you have not filled all the fields or you have filled them incorrectly")
        }
        
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
                <input type="text" placeholder="Enter Your Name" value={input.name} name="name" onChange={handleChange} autoComplete="off" required />
                </div>

                <div className="label-div">
                    <label>Gender: </label>
                    <select placeholder="gender" value={input.gender} onChange={handleChange} name="gender" className="select" required>
                        <option className="option" value="" disabled>Choose</option>
                        <option className="option" value="Male">Male</option>
                        <option className="option" value="Female">Female</option>
                        <option className="option" value="Other">Other</option>
                    </select>
                </div>

                <div className="label-div">
                <label>Day: </label>
                <select placeholder="Work Day" value={input.day} name="day" onChange={handleChange} className="select" required>
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
                <select value={input.quarter} placeholder="quarter" name="quarter" onChange={handleChange} className="select" required>
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
                <select value={input.month} type="text" placeholder="month" name="month" onChange={handleChange} className="select" required>
                    <option className="option" value="" disabled>Select</option>
                    <option className="option" value="1">January</option>
                    <option className="option" value="2">February</option>
                    <option className="option" value="3">March</option>
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
                    <select value={input.department} placeholder="Department" name="department" onChange={handleChange} className="select" required>
                        <option className="option" value="" disabled>Select Department</option>
                        <option className="option" value="finishing">Finishing</option>
                        <option className="option" value="sweing">Sewing</option>
                    </select>
                </div>

                <div className="label-div">
                <label>Overtime: </label>
                <input type="number" placeholder="Overtime" value={input.over_time} name="over_time" onChange={handleChange} autoComplete="off" required min="0" max="26000" />
                </div>

                <div className="label-div">
                <label>Team No.: </label>
                <select value={input.team} type="text" placeholder="team number" name="team" onChange={handleChange} className="select" required>
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
                    </select>
                </div>

                <div className="label-div">
                <label>No Of Workers: </label>
                <input type="number" value={input.no_of_workers} placeholder="No of Workers" name="no_of_workers" onChange={handleChange} autoComplete="off" required min="0" max="100" />
                </div>

                <div className="label-div">
                <label>No Of Style Change: </label>
                <input type="number" value={input.no_of_style_change} placeholder="No of Style Change" name="no_of_style_change" onChange={handleChange} autoComplete="off" required min="0" max="5" />
                </div>
            </div>

        </div>

        <hr />

        <div className="form-div">
            <h4>Team Details: </h4>
            <div className="upperlabel">

                <div className="label-div">
                    <label>Targeted Productivity: </label>
                    <input type="number" value={input.targeted_productivity} placeholder="Productivity" name="targeted_productivity" onChange={handleChange} autoComplete="off" required step="0.001" min="0.00" max="1.00" />
                </div>

                <div className="label-div">
                <label>Incentive: </label>
                <input type="number" value={input.incentive} placeholder="Incentive" name="incentive" onChange={handleChange} autoComplete="off" required min="0" max="4000"/>
                </div>

                <div className="label-div">
                <label>Idle Time: </label>
                <input type="number" value={input.idle_time} placeholder="Idle Time Count" name="idle_time" onChange={handleChange} autoComplete="off" required min="0" max="500"/>
                </div>

                <div className="label-div">
                <label>Idle Men: </label>
                <input type="number" value={input.idle_men} placeholder="Idle Men Count" name="idle_men" onChange={handleChange} autoComplete="off" required min="0" max="50"/>
                </div>

                <div className="label-div">
                <label>Smv: </label>
                <input type="number" value={input.smv} placeholder="Smv" name="smv" onChange={handleChange} autoComplete="off" required step="0.001" min="0.00" max="60.00" />
                </div>
            </div>
            
        </div>

        {
            !show ? <button onClick={handleClick} type="submit">Submit</button> :
            <Oval
                height={40}
                width={40}
                color="rgb(65, 247, 183)"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="rgb(65, 247, 183)"
                strokeWidth={3}
                strokeWidthSecondary={3}
            />
        }
    </form>
    </div>
    )
}

export default Inputs

