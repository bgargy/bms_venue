const dbConnection = require('./Database');

const login = (req, res) => {
    const { email, password, userType } = req.body; // Extract email, password, and userType from the request body
    console.log(email, password, userType);
    let query;
    // Determine the correct SQL query based on userType
    if (userType === 'club') {
        query = `SELECT * FROM clubs WHERE email = \"${email}\" AND pswd = \"${password}\";`;
        console.log(query);
    } else if (userType === 'admin') {
        query = `SELECT * FROM admin WHERE mail = \"${email}\" AND pswd = \"${password}\";`;
    } else {
        res.status(400).send('Invalid user type');
        return;
    }

    // Execute the query
    dbConnection.query(query, [email, password], (err, result) => {
        if (err) {
            console.error("Query error: ", err);
            res.status(500).send('Internal server error');
            return;
        }

        // Check if the query returned any rows
        if (result.length === 0) {
            res.status(401).send('Invalid email or password');
            return;
        }

        // Login was successful
       res
        .status(200)
        .json({ success: true, message: "Login successful", userInfo: query });
    });
};

module.exports = { login };
