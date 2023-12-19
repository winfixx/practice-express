const db = require('../db')

class ServerControll {
    async getAll(req, res) {
        const serv = await db.query('SELECT * FROM servers')
        return res.status(200).json(serv.rows)
    }

    async create(req, res) {
        const {name, status} = req.body
        const newServer = await db.query(
            'INSERT INTO servers (name, status) values ($1, $2) RETURNING *',
            [name, status]
        )
        return res.status(201).json(newServer.rows[0])
    }

    async remove(req, res) {
        const id = req.params.id
        await db.query(
            'DELETE FROM servers where id = $1',
            [id]
        )        
        return res.json({ message: 'Server has been removed.' })
    }
}

module.exports = new ServerControll()
