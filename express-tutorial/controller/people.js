// Creating Controllers for Routes

let { people } = require("../data");

const getPerson = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide a value" });
  }
  res.status(201).send({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide a value" });
  }
  res.status(201).send({ success: true, data: [...people, name] });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  // to find a person whose id matches the id in our data
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(401)
      .json({ success: false, msg: `User with id of ${id} does not exist` });
  }

  // to update the records of the id
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }

    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
  const person = people.find((people) => people.id === Number(req.params.id));
  if (!person) {
    return res
      .status(401)
      .json({
        success: false,
        msg: `The user with id of ${req.params.id} does not exist`,
      });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id),
  );
  return res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPerson,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
