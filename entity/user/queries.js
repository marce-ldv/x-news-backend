module.exports = {
    getUserByEmail: `SELECT 
        id,
        username,
        password
    FROM 
        user
    WHERE
        username = ?;`,

    getUserByUsernamePassword: `SELECT 
        id,
        username,
        password
    FROM 
        user
    WHERE
        username = ? AND password = ?;`,
}