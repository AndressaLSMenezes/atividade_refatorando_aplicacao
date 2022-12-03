const retrieveBookController = (req, res) => {
  const book = retrieveBookService(req.params.id);

  return res.status(200).json(book);
};

export default retrieveBookController;
