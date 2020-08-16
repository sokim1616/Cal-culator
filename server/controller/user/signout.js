module.exports = {
  post: (req, res) => {
    const sess = req.session;
    console.log(sess.userid)

    if (sess.userid) {
      req.session.destroy((err) => {
        if (err) {
          console.log(err)
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
