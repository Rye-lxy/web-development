import { sqlQuery } from "../../lib/db"

const handler = async (_, res) => {
    try {
        const result = await sqlQuery({
            query: "SELECT Artwork.*, User.name AS author_name FROM Artwork INNER JOIN User ON Artwork.creator = User.uid;"
        });
        return res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default handler;