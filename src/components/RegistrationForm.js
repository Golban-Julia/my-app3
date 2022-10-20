import { useState } from "react";

const RegistrationForm = () => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleEmailChange = ({ target: { value } }) => {
        if (errorMessage) {
            setErrorMessage("");
        }
        setEmailValue(value);
    };

    const handlePasswordChange = ({ target: { value } }) => {
        if (errorMessage) {
            setErrorMessage("");
        }
        setPasswordValue(value);
    };

    const handleConfirmPasswordChange = ({ target: { value } }) => {
        if (errorMessage) {
            setErrorMessage("");
        }
        setConfirmPasswordValue(value);
    };

    const handleSubmit = (event) => {

        event.preventDefault();

        if (emailValue === "" || passwordValue === "" || confirmPasswordValue === "") {
            setErrorMessage("You need to fill all fields");
            return
        }
        if (!emailValue.includes("@")) {
            setErrorMessage("Please, enter valid email");
            return;
        }
        if (passwordValue !== confirmPasswordValue) {
            setErrorMessage("Passwords do not match!")
        }
        
        console.log({email: emailValue, password:passwordValue, confirmPassword: confirmPasswordValue });
  };


    return (
        <form onSubmit={handleSubmit} noValidate>
            <fieldset>
                <legend>Registration form</legend>

                <div>
                    <label>
                        Email:{""}
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={emailValue}
                            onChange={handleEmailChange}
                            
                        />
                    </label>
                </div>
            
                <div>
                    <label>Password:{""}
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        value={passwordValue}
                        onChange={handlePasswordChange}
                        
                    />
                    </label>
                </div>

                <div>
                    <label>Confirm password:{""}
                        <input type="password"
                        placeholder="Confirm Password"
                        id="confirm_password"
                        value={confirmPasswordValue}
                        onChange={handleConfirmPasswordChange}
                    />
                    </label>
                </div>

                {errorMessage && <div className="error">{errorMessage}</div>}

             <button type="submit">Send</button>
            </fieldset>
        </form>
    )
}

export default RegistrationForm;