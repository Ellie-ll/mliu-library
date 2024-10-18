const {onRequest} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});

admin.initializeApp();

exports.countBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const count = snapshot.size;

      res.status(200).send({count});
    } catch (error) {
      console.error("Error counting books: ", error.message);
      res.status(500).send("Error counting books");
    }
  });
});

exports.addBook = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const {isbn, name} = req.body;
      await admin.firestore()
          .collection("books").add({isbn: isbn, name: name.toUpperCase()});
      res.status(200).send("Add book succeed!");
    } catch (error) {
      console.error("Error adding books: ", error.message);
      res.status(500).send("Error adding books");
    }
  });
});

exports.getAllBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const books = snapshot.docs.map((doc) => doc.data());

      res.status(200).send(books);
    } catch (error) {
      console.error("Error fetching books: ", error.message);
      res.status(500).send("Error fetching books");
    }
  });
});
