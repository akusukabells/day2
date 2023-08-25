var express = require('express');
const {prisma} = require("../db");
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {

  const users = await prisma.muser.findMany()
  res.json(users);
});

router.post('/', async (req, res) => {

  const muser = await prisma.muser.create({
    data: {
      name: req.body.name,
      age: req.body.age,
      alamat: req.body.alamat
    }
  })

  res.json(muser)
})

module.exports = router;
