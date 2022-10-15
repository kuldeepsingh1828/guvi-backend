var express = require('express');
var router = express.Router();

let users = [
  { name: 'First', college: 'Fist College', company: 'Google', age: 34, ph: 12343545 },
  { name: 'Second', college: 'Second College', company: 'Moogle', age: 27, ph: 12343545 },
  { name: 'Third', college: 'Third College', company: 'Doogle', age: 43, ph: 12343545 },
  { name: 'Fourth', college: 'Fourth College', company: 'Yahoo', age: 16, ph: 12343545 },
  { name: 'Fifth', college: 'Fifth College', company: 'Microsoft', age: 72, ph: 12343545 },
]

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({ users });
});

/* GET users listing. */
router.get('/:id', function (req, res, next) {
  let id = req.params.id;

  let user = users.find((user, index) => index == (id - 1));

  if (user) {
    res.json({ user });
  } else {
    res.json({ error: 'User Not Found' })
  }
});

router.post('/', function (req, res, next) {
  users.push(req.body.user);
  res.json({ status: 'inserted' });
})

router.put('/:id', function (req, res, next) {
  let id = req.params.id;
  let index = users.findIndex((user, index) => index == (id - 1));
  if (index > -1) {
    console.log(req.body);
    users[index] = req.body.user;
    res.json({ status: 'updated' });
  } else {
    res.json({ error: 'User Not Found' })
  }
})

router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  let index = users.findIndex((user, index) => index == (id - 1));
  if (index > -1) {
    users = users.filter((user, index) => index != (id - 1));
    res.json({ status: 'deleted' });
  } else {
    res.json({ error: 'User Not Found' });
  }
})

module.exports = router;
