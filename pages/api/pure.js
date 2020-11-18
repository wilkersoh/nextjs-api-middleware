import nextConnect from "next-connect";

export default nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something happend!` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} Not Allowd` });
  },
})
  .get(async (req, res) => {
    const data = [
      { name: "yee", age: 19 },
      { name: "wilker", age: 20 },
    ];

    res.status(200).json(data);
  })
  .post(async (req, res) => {
    res.status(201).json({ msg: "Successful updated" });
  });
