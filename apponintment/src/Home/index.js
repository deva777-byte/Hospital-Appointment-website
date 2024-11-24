import React,{Component} from 'react';
import Header from '../Header/Header';
import { IoLocation } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import DoctorCard from '../DoctorCard';
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
]

class Home extends Component{

    state = {selectedExpertise: "",selectedGender: "",selectedFees: "",selectedLanguages: "",selectedFilters:[]};

    handleExpertiseChange = (event) => {
        this.updateSelectedFilters(event.target.value);
        this.setState({ selectedExpertise: event.target.value });
    };

    handleGenderChange = (event) => {
        this.updateSelectedFilters(event.target.value);
        this.setState({ selectedGender: event.target.value });
    };

    handleFeeChange = (event) => {
        this.updateSelectedFilters(event.target.value);
        this.setState({ selectedFees: event.target.value });
    };

    handleLanguageChange = (event) => {
        this.updateSelectedFilters(event.target.value);
        this.setState({ selectedLanguages: event.target.value });
    };

    updateSelectedFilters = (value) => {
        this.setState((prevState) => {
            const filters = prevState.selectedFilters.includes(value)
                ? prevState.selectedFilters.filter(filter => filter !== value) // Remove if exists
                : [...prevState.selectedFilters, value]; // Add if not exists

            return { selectedFilters: filters };
        });
    };

    filterDelete = (text)=>{
        this.setState((prevState)=>{
            return {selectedFilters: prevState.selectedFilters.filter((each)=>each!==text)};
        })
    }

    renderSelectedFilters = ()=>{
        const {selectedFilters} =this.state;
        return selectedFilters.map((each)=>{
            return(
            <div className='selected-filters-item'>
                <p>{each}</p>
                <TiDelete onClick={()=>this.filterDelete(each)}/>
            </div>)
        })
    }

    renderDoctorsList = ()=>{
        const {selectedFilters} = this.state;
        const filteredDoctors = doctorsList.filter(doctor => {
            const expertiseMatch = this.state.selectedExpertise ? doctor.expertise === this.state.selectedExpertise : true;
            const genderMatch = this.state.selectedGender ? doctor.sex === this.state.selectedGender : true;
            const feesMatch = this.state.selectedFees === "less than 1000" ? doctor.price < 1000 : 
                              this.state.selectedFees === "above 1000" ? doctor.price >= 1000 : true;
            const languageMatch = this.state.selectedLanguages ? doctor.languages.includes(this.state.selectedLanguages) : true;
            console.log(expertiseMatch)
            console.log(genderMatch)
            console.log(feesMatch)
            console.log(languageMatch)
            return expertiseMatch && genderMatch && feesMatch && languageMatch;
        });

        if (selectedFilters.length === 0){
            return doctorsList.map((each)=><DoctorCard key = {each.id} properties = {each} />)
        }
        return filteredDoctors.map((each)=><DoctorCard key = {each.id} properties = {each} />)
    }


    render(){
        return(
            <div>
            <Header/>
            <div id = "find-doctors" className='find-container'>
                <h1 className='find-title'>Find Expert Doctors For an In-Clinic Session Here</h1>
                <div  className='inputs'>
                    <div className='select-element'>
                        <IoLocation />
                        <select className='select' name = "countries">
                            <option value="" disabled selected>Select Location</option>
                            <option value = "india">India</option>
                            <option value="USA">USA</option>
                            <option value = "australia">Australia</option>
                        </select>
                    </div>
                    <div className='input-element'>
                        <input type = "search" placeholder="eg. Doctor, specialisation, clinic name" className='input' />
                        <FaArrowRight className='right-arrow'/>
                    </div>
            </div>
            </div>
            <div>
                <div className='filters'>
                    <select value={this.state.selectedExpertise} onChange={this.handleExpertiseChange} className='filter-select'>
                        <option value="" disabled selected>Expertise</option>
                        <option value = "Cardio" >Cardio</option>
                        <option value = "Hair Care">Hair Care</option>
                    </select>
                    <select value={this.state.selectedGender} onChange={this.handleGenderChange} className='filter-select'>
                        <option value="" disabled selected>Gender</option>
                        <option value = "Male" >Male</option>
                        <option value = "Female">Female</option>
                    </select>
                    <select value={this.state.selectedFees} onChange={this.handleFeeChange} className='filter-select'>
                        <option value="" disabled selected>Fees</option>
                        <option value = "less than 1000" >0 to 1000</option>
                        <option value = "above 1000">1000 above</option>
                    </select>
                    <select value={this.state.selectedLanguages} onChange={this.handleLanguageChange} className='filter-select'>
                        <option value="" disabled selected>languages</option>
                        <option value = "English" >English</option>
                        <option value = "Hindi">Hindi</option>
                    </select>
                </div>
                <hr className='horizontal-line'/>
                <div className='selected-filters'>
                    {this.state.selectedFilters.length === 0?null:this.renderSelectedFilters()}
                </div>
                <div className='doctors-list'>
                    {this.renderDoctorsList()}
                </div>
                <hr className='horizontal-line'/>

                <div className='about-container' id = "about">
                    <h1 className='about-title'>About Us</h1>
                    <p className='about-text'>Welcome to Amrutam, your trusted partner in healthcare. Our mission is to make healthcare accessible and efficient for everyone. We understand that finding the right doctor can be challenging, which is why we have created a user-friendly platform that connects patients with expert healthcare professionals.

                    At Amrutam, we believe in the power of technology to enhance the patient experience. Our comprehensive database features a diverse range of doctors specializing in various fields, ensuring that you can find the right expertise for your needs. Whether you are looking for a general practitioner, a specialist, or a wellness expert, we are here to help you make informed decisions about your health.

                    Our team is dedicated to providing you with the best possible service. We prioritize your comfort and convenience, allowing you to book appointments online, manage your healthcare needs, and access vital information at your fingertips.
                    Join us on our journey to revolutionize healthcare. At Amrutam, we are committed to ensuring that your health is in the best hands. Thank you for choosing us as your healthcare partner!</p>
                </div>
                <div className='footer'>
                    <h1>All Rights Reserved</h1>
                </div>
            </div>
            </div>
        )
    }
}


export default Home;