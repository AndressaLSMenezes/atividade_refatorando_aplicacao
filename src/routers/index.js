import app from "../app.js";
import createBookController from "../controllers/createBooks/index.js";
import listBooksController from "../controllers/listBooks/index.js";
import verifyBookExistsMiddleware from "../middlewares/verifyBookExists/index.js";
import retrieveBookController from "../controllers/retrieveBook/index.js";

app.post("/books", createBookController);
app.get("/books", listBooksController);
app.get("/books/:id", verifyBookExistsMiddleware, retrieveBookController);
