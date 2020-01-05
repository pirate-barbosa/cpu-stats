const express = require('express')
const router = express.Router()
const osu = require('node-os-utils');
const drive = osu.drive;

/* Drive Values */
router.get('/', async (req, res) => {
  try {
    let driveInfo = drive.info();
    let result = await driveInfo;
    res.status(500).send(result);
  } catch (error) {
    console.error(error);
    res.status(400).send({ error });
  }
});

module.exports = router;