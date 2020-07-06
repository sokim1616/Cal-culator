module.exports = {
  post: (req, res) => {
    const sess = req.session;

    if (sess.userid) {
      req.session.destroy((err) => {
        if (err) {
          throw err;
        } else {
          res.send("signed out");
        }
      });
    } else {
      res.send("you didnt even log in!");
    }
  },
};
