import createBookService from "../../services/createBooks";

const createBookController = (req, res) => {
  const [status, data] = createBookService(req.body);
  return res.status(status).json(data);
};

export default createBookController;
