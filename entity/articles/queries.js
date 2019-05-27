module.exports = {
    insertArticles: `INSERT
    INTO
        articles
    SET 
        ?`,
    getAllArticles: `SELECT
        id,
        title,
        description
    FROM
        articles
    `,
    updateArticles: `UPDATE
        articles
    SET 
        ? 
    WHERE 
        id = ?`,
    deleteArticle: `DELETE
    FROM 
        articles 
    WHERE 
        id = ?`
}