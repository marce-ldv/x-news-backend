module.exports = {
    getUserByUsername: `SELECT 
        id,
        username
    FROM
        users
    WHERE
        username = ?;`,

    getUserByUsernamePassword: `SELECT 
        id,
        username
    FROM 
        users
    WHERE
        username = ? AND password = ?;`,

    insertUser: `INSERT INTO users SET ?;`
}