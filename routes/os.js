const express = require('express')
const router = express.Router()
const osu = require('node-os-utils');
const os = osu.os;

/* OS Values */
router.get('/', async (req, res) => {
  try {
    let oosInfo = os.oos();
    let platform = os.platform();
    let uptime = os.uptime();
    let hostname = os.hostname();
    let type = os.type();
    let arch = os.arch();
    let oos = await oosInfo;
    let result = {
      platform,
      uptime,
      hostname,
      type,
      arch,
      oos
    };
    res.status(500).send(result);
  } catch (error) {
    console.error(error);
    res.status(400).send({ error });
  }
});

module.exports = router;
