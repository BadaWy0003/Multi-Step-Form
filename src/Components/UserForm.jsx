import React from "react"
import FormUserDetails from "./FormUserDetails.jsx"
import FormPersonalDetails from "./FormPersonalDetails.jsx";
import Confirm from "./Confirm.jsx";
import Success from "./Success.jsx"


 export default function UserForm(){
    const [step , setStep] = React.useState(1)
    const [contactInfo, setContactInfo] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        occupation: "",
        city: "",
        bio: ""
      });


    function nextStep(){
        setStep(step=> step + 1)
    }

    function prevStep(){
        setStep(step=> step - 1)
    }

    function reset(){
        setStep(1);
        setContactInfo({
            firstName: "",
            lastName: "",
            email: "",
            occupation: "",
            city: "",
            bio: ""
          });
    }

    const handleChange = (event) =>{
        setContactInfo({...contactInfo, [event.target.name]: event.target.value})
    }

  

        switch(step) {
            case 1: 
                return <FormUserDetails
                            nextStep={nextStep}
                            contactInfo={contactInfo}
                            handleChange={handleChange}
                        />
            case 2:
                return <FormPersonalDetails
                            nextStep={nextStep}
                            prevStep={prevStep}
                            contactInfo={contactInfo}
                            handleChange={handleChange}
                        />

            case 3:
                return <Confirm
                            nextStep={nextStep}
                            prevStep={prevStep}
                            contactInfo={contactInfo}
                        />

            case 4:
                return <Success
                            reset={reset}
                        />
        }

}