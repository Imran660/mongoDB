exports.carts = (req, res) => {
  res.status(200).send([
    { id: 1, name: "Iphone", price: 1000 },
    { id: 2, name: "Samsung", price: 2000 },
  ]);
};
