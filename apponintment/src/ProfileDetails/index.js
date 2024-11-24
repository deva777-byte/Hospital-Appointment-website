import { Component } from "react";
import Header from '../Header/Header';
import { MdDone } from "react-icons/md";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import './index.css';

const doctorsList = [
    {
        id:1,
        name: "Kumar",
        country: "USA",
        sex: "Male",
        expertise: "Hair Care",
        price: 800,
        languages: ["English","Hindi","Marathi"]
    },
    {
        id:2,
        name: "Deepthi",
        country: "India",
        sex: "Female",
        expertise: "Hair Care",
        price: 800,
        languages: ["English","Hindi"]
    },
    { id:3, name: "Divya", country: "Australia", sex: "Female", expertise: "Cardio", price: 1800, languages: ["English"] }, { id:4, name: "Deva", country: "UK", sex: "Male", expertise: "Cardio", price: 800, languages: ["English"] }
];

const sampleSlots = [
    {
        day: "Monday",
        no_of_slots: 4,
        slots: {
            morning: ["9:00","10:30"],
            evening: ["5:00","8:00"]
        }
    },
    {
        day: "Tuesday",
        no_of_slots: 2,
        slots: {
            morning: ["9:00","10:30"],
            evening: ["10:30","11:00"]
        }
    }    
]

class Appointment extends Component{

    state = {isModeOfSessionClicked : '',selectedDay : "Monday",selectedSlotTime: ''}

    sessionClicked = (session)=>{
        this.setState({isModeOfSessionClicked: session})
    }

    slotDaySelected = (day)=>{
        this.setState({selectedDay: day})
    }

    slotTimeSelected = (time)=>{
        const {selectedSlotTime} = this.state;
        if (selectedSlotTime.length === 0){
            return this.setState({selectedSlotTime: time})
        }
        return this.setState({selectedSlotTime: time})

    }

    renderSlots = () =>{
        const {selectedDay} = this.state;
        const dayClassName = (day)=> selectedDay === day ? "daySelected" : "dayNotSelected";
        return sampleSlots.map((each)=>{
            return (
                <div className={dayClassName(each.day)} onClick = {()=>this.slotDaySelected(each.day)}>
                    <h1 className="day-text session-text">{each.day}</h1>
                    <p className="session-text">{each.no_of_slots} slots</p>
                </div>
            )
        })
    }

    morningSlots = () => {
        const { selectedSlotTime } = this.state;
        const{selectedDay} = this.state;
        const filteredSlotsClassName = (time)=> selectedSlotTime === time ? "selected-slot-item" : "not-selected-slot-item";
        const filteredSlots = sampleSlots.filter((each) => each.day === selectedDay);

        
        return filteredSlots[0].slots.morning.map((each) => (
            <div className={filteredSlotsClassName(each)} key={each} onClick={()=>this.slotTimeSelected(each)}>
                <p className="session-text">{each} AM</p>
            </div>
        ));
    }

    eveningSlots = () => {
        const { selectedDay ,selectedSlotTime} = this.state;
        const filteredSlots = sampleSlots.filter((each) => each.day === selectedDay);
        const filteredSlotsClassName = (time)=> selectedSlotTime === time ? "selected-slot-item" : "not-selected-slot-item";
        
        return filteredSlots[0].slots.evening.map((each) => (
            <div className={filteredSlotsClassName(each)} onClick={()=>this.slotTimeSelected(each)} key={each}>
                <p className="session-text">{each} PM</p>
            </div>
        ));
    }

    languagesSpokenList = ()=>{
        const {match} = this.props;
        const {params} = match;
        const {id} = params;
        const filteredDoctor = doctorsList.filter((each)=>String(each.id) === String(id))
        const {name,expertise,languages} = filteredDoctor[0];

        return languages.map((each)=>{
            return(
                <div className="lang-item">
                    <p>{each}</p>
                </div>
            )
        })
    }

    render(){
        const {match} = this.props;
        const {params} = match;
        const {id} = params;
        const filteredDoctor = doctorsList.filter((each)=>String(each.id) === String(id))
        const {name,expertise,price} = filteredDoctor[0];
        const sessionModeClass = (session) => this.state.isModeOfSessionClicked === session? "sessionClicked" : "sessionNotClicked";
        return(
            <div className="doctor-details">
                <Header/>
                <div className="doctor-profile">
                    <div className="item">
                        <h1 className="follow-heading">{name}</h1>
                        <p className="mid-heading">{expertise}</p>
                    </div>
                    <div className="followers">
                        <div className="follower-item">
                            <h1 className="follow-heading">Followers</h1>
                            <p className="follow-count">800</p>
                        </div>
                        <div className="follower-item">
                            <h1 className="follow-heading">Following</h1>
                            <p className="follow-count">10</p>
                        </div>
                        <div className="follower-item">
                            <h1 className="follow-heading">Posts</h1>
                            <p className="follow-count">8</p>
                        </div>
                    </div>
                    <button className="book-btn">Book An Appointment</button>
                </div>
                <div className="bottom-card">
                    <div className="card1">
                        <div className="about-doctor">
                            <div className="about-doctor-top-container">
                                <h1 className="follow-heading">A Little About Me</h1>
                                <div className="follow-me">
                                    <p>Follow +</p>
                                </div>
                            </div>
                            <div className="summary">
                            <p className="summary-text">Hello I am Dr. {name} a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the Deccan University Mumbai.</p>
                            <hr/>
                            <h1 className="mid-heading">Languages spoken</h1>
                            <div className="languages-spoken-list">
                                {this.languagesSpokenList()}
                            </div>
                            <h1 className="mid-heading">Social Accounts</h1>
                            <div className="social-media">
                                <FaInstagram size={20}/>
                                <FaFacebookF size={20}/>
                                <FaTwitter size={20}/>
                                <FaYoutube size={20}/>
                            </div>
                            </div>
                        </div>
                    </div>
        <div className="appointment-card">
            <div className="appointment-fee-container">
                <h1 className="appointment-text">Appointment Fee</h1>
                <p className="fee">{price}</p>
            </div>
            <h1 className="mid-heading">Select your Mode of Session</h1>
            <div className="sessions">
                <div className = {sessionModeClass('In-Clinic')} onClick = {()=>this.sessionClicked('In-Clinic')}>
                    <div className="session-property">
                        <h1 className="session-text">In-Clinic</h1>
                        {this.state.isModeOfSessionClicked === "In-Clinic" ? <MdDone/> : null}
                    </div>
                    <p className="session-time">45 mins</p>
                </div>
                <div className = {sessionModeClass('Video')} onClick = {()=>this.sessionClicked('Video')}>
                    <div className="session-property">
                        <h1 className="session-text">Video</h1>
                        {this.state.isModeOfSessionClicked === 'Video' ? <MdDone/> : null}
                    </div>
                    <p className="session-time">45 mins</p>
                </div>
                <div className = {sessionModeClass('Chat')} onClick = {()=>this.sessionClicked('Chat')}>
                    <div className="session-property">
                        <h1 className="session-text">Chat</h1>
                        {this.state.isModeOfSessionClicked === 'Chat' ? <MdDone/> : null}
                    </div>
                    <p className="session-time">10 mins</p>
                </div>
            </div>
            <h1 className="mid-heading">Pick a Time Slot</h1>
            <div className="days-head-container">
                <div className="days-inner-container">
                    <CiCircleChevLeft/>
                    <div className="days">
                    {this.renderSlots()}
                    </div>
                    <CiCircleChevRight/>
                </div>
            </div>
            <div className="morning-slots">
                <h1 className="mid-heading">Morning</h1>
                <div className="morning-slots-list">
                {this.morningSlots()}
                </div>
            </div>
            <div>
                <h1 className="mid-heading">Evening</h1>
                <div className="morning-slots-list">
                    {this.eveningSlots()}
                </div>
            </div>
            <div>
                <button className="appointment-button">Make An Appointment</button>
            </div>
        </div>
        </div>
        </div>
        )
    }
}


export default Appointment;