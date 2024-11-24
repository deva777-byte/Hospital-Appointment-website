import {Link} from 'react-router-dom'
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { MdLabelImportant } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import './index.css'



const DoctorCard = props =>{
    const {properties} = props;
    const {name,country,sex,expertise,price,languages,id} = properties;

    return(
        <div className="doctor">
            {sex === "Male" ? <FaMale size={50} className="sex-icon"/> : <FaFemale className="sex-icon" size={50}/>}
            <h1 className="doctor-title">Dr.{name}</h1>
            <div className="card">
            <div className="card-item1">
                <MdLabelImportant size={20} className="icon"/>
                <p className="text">{expertise}</p>
            </div>
            <div className="card-item2">
                <MdCastForEducation size = {20} className="icon"/>
                <p className="text">7 years of Experience</p>
            </div>
            <div className="card-item">
                <MdMessage size={20} className="icon"/>
                <p className="text"> {languages.join(',')}</p>
            </div> 
            </div>
            <div className="consultation">
                <div className="consultation-card">
                    <p className="text-2">Video Consultation</p>
                    <p className="price">{price}</p>
                </div>
                <div className="consultation-card">
                    <p className="text-2">Chat Consultation</p>
                    <p className="price">Free</p>
                </div>
            </div>
            <div>
                <Link to = {`/profile/${id}`}>
                    <button className="profile button5">View Proflie</button>
                </Link>
                <Link to = {`/profile/${id}`}>
                    <button className="book button5">Book Consultation</button>
                </Link>
            </div>
        </div>
    )

}

export default DoctorCard;