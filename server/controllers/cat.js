const getAllCats = (req, res) => {
    res.send("all cats")
}

const createCats = (req, res) => {
    res.json(req.body)
}

const deleteCats = (req, res) => {
    res.send("delete cat")
}


module.exports = {
    getAllCats,
    createCats,
    deleteCats,
}