exports.getUsers = (req, res) => {
    res.json([
      { id: 1, name: 'Shreya' },
      { id: 2, name: 'Aryan' }
    ]);
  };
  