import { sqlQuery } from "../../lib/db"

const handler = async (_, res) => {
    try {
        const result = await sqlQuery({
            query: "SELECT * FROM Tag;"
        });
        return res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default handler;