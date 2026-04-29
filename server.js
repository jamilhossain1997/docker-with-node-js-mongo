let express = require('express');
let path = require('path');
let fs = require('fs');
let MongoClient = require('mongodb').MongoClient;
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/profile-picture', function (req, res) {
  let img = fs.readFileSync(path.join(__dirname, "images/profile-1.jpg"));
  res.writeHead(200, { 'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
});

let mongoUrlLocal = "mongodb://admin:password@localhost:27017/?authSource=admin";

let mongoUrlDocker = "mongodb://admin:password@mongodb";

let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

let databaseName = "user-account";

app.post('/update-profile', async (req, res) => {
  try {
    const client = await MongoClient.connect(mongoUrlLocal);
    const db = client.db(databaseName);

    const userObj = {
      ...req.body,
      userid: 1
    };

    const result = await db.collection("users").updateOne(
      { userid: 1 },
      { $set: userObj },
      { upsert: true }
    );

    console.log("Mongo result:", result);

    await client.close();

    res.send({
      message: "Updated successfully",
      data: userObj,
      matched: result.matchedCount,
      modified: result.modifiedCount,
      upserted: result.upsertedCount
    });

  } catch (err) {
    console.error("Error:", err);
    res.status(500).send({ error: err.message });
  }
});

app.get('/get-profile', async (req, res) => {
  try {
    const client = await MongoClient.connect(mongoUrlLocal);
    const db = client.db(databaseName);

    const user = await db.collection("users").findOne({ userid: 1 });

    await client.close();

    res.send(user || { message: "No user found" });

  } catch (err) {
    console.error("Error fetching profile:", err);
    res.status(500).send({ error: "Failed to fetch profile" });
  }
});


app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
