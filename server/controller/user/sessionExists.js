module.exports = {
  get: (req, res) => {
    const sess = req.session;
    if (sess.userid) {
      res.send("session exists");
    } else {
      res.send("session doesnt exist");
    }
  },
};
