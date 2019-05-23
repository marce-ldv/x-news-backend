module.exports = {
    getUserByUsername: `SELECT 
        id,
        username,
        password
    FROM
        users
    WHERE
        username = ?;`,

    getUserByUsernamePassword: `SELECT 
        id,
        username,
        password
    FROM 
        users
    WHERE
        username = ? AND password = ?;`,
}