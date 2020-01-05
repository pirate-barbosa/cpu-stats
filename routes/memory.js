const express = require('express')
const router = express.Router()
const osu = require('node-os-utils');
const memory = osu.mem;

/* Memory Values */
router.get('/', async (req, res) => {
  try {
    let memoryInfo = memory.info();
    let result = await memoryInfo;
    res.status(500).send(result);
  } catch (error) {
    console.error(error);
    res.status(400).send({ error });
  }
});

module.exports = router;