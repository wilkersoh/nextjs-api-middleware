import handler from "./handler";

export default handler
  .get(async (req, res) => {
    // const db = await connectToDB();
    const data = [
      { name: "yee", age: 19 },
      { name: "wilker", age: 20 },
    ];

    res.status(200).json({ name: req.username, userID: req.userID, data });
  })
  .post(async (req, res) => {
    if (req.userID !== 1234) {
      res.status(401).json({ msg: "Sorry you are not 1234" });
      return;
    }
    // const db = await connectToDB();
    res.status(201).json({ msg: "Successful updated" });
  });
