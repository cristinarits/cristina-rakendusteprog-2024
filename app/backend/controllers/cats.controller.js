const cats = [
    {
        "id": "c7457fd2-96ce-400b-9481-fa008c764e09",
        "name": "manja",
        "createdAt": 1727099325223,
        "updatedAt": null,
        "deleted": false
    }
    {
        "id": "faebddd3-02cb-4684-9180-3727cd5ca602",
        "name": "thomas",
        "createdAt": 1727099343984,
        "updatedAt": null,
        "deleted": false
    }
];

exports.create = (req, res) => {
    const { name } = req.body;

    const newCat = ({
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        updatedAt: null,
        deleted: false,   
    });

    cats.push(newCat);

    res.send(newCat);
};
  
exports.read = (req, res) => {
    res.json(cats);
};
  
exports.update = (req, res) => {
    const { newCat } = req.body;

    const updatedCat = ({
        id: crypto
    })
};
  
exports.delete = (req, res) => {};
  