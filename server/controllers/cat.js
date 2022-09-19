const getAllCats = (req, res) => {
    res.send("all cats")
}

const createCats = (req, res) => {
    res.send("create task")
}

const deleteCats = (req, res) => {
    res.send("delete task")
}


module.exports = {
    getAllCats,
    createCats,
    deleteCats,
}