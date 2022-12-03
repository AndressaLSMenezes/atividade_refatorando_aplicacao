import books from "../../database";

const listBooksController = (req, res) => {
  return res.status(200).json(books);
};

export default listBooksController;
