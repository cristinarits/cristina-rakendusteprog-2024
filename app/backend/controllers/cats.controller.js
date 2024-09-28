const cats = [
    {
        "id": "c7457fd2-96ce-400b-9481-fa008c764e09",
        "name": "manja",
        "createdAt": 1727099325223,
        "updatedAt": null,
        "deleted": false
    },
    {
        "id": "faebddd3-02cb-4684-9180-3727cd5ca602",
        "name": "thomas",
        "createdAt": 1727099343984,
        "updatedAt": null,
        "deleted": false
    },
];

exports.create = (req, res) => {
    const { name } = req.body;
  
    if (!name || name === "") {
      return res
        .status(418)
        .send({ type: "Error", message: "Must include a name" });
    }
  
    const newCat = {
      id: crypto.randomUUID(),
      name: name,
      createdAt: Date.now(),
      updatedAt: null,
      deleted: false,
    };
  
    cats.push(newCat);
  
    res.send(newCat);
  };
  
  exports.read = (req, res) => {
    const visibleCats = cats.filter(cat => !cat.deleted);
    res.send(visibleCats);
  };

  // koduseks teha seda
  exports.update = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const cat = cats.find(cat => cat.id === id);

    if (!cat) {
      return res.status(404).send({ message: "Cat not found" });
    }

    cat.name = name || cat.name;
    cat.updatedAt = Date.now();

    res.send(cat);
  };
  
  exports.delete = (req, res) => {
    const { id } = req.params;

    const cat = cats.find(cat => cat.id === id);

    if (!cat) {
      return res.status(404).send({ message: "Cat not found" });
    }

    cat.deleted = true;
    cat.updatedAt = Date.now();

    res.send(cat);
  };