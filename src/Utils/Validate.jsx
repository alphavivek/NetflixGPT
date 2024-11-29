const CheckValidData = (email, password) => {
    // Email validation
    const isemailvalid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    // Password validation (at least 1 number, 1 lowercase, 1 uppercase, and min length of 8)
    const ispasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // Return error messages if validation fails
    if (!isemailvalid) return "Email";
    if (!ispasswordvalid) return `Password for ${email}`;

    // If both email and password are valid, return false (indicating no errors)
    return null;
};

export default CheckValidData;
