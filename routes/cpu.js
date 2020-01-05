const express = require('express')
const router = express.Router()
const osu = require('node-os-utils');
const cpu = osu.cpu;

/* CPU Values */
router.get('/', async (req, res) => {
  try {
    let usage = cpu.usage();
    let free = cpu.free();
    let count = cpu.count();
    let average = cpu.average();
    let model = cpu.model();
    let loadAvg = cpu.loadavg();
    let loadavgTime = cpu.loadavgTime();
    let [cpuUsage, cpuFree] = await Promise.all([usage, free]);
    let result = {
      cpuUsage,
      cpuFree,
      count,
      average,
      model,
      loadAvg,
      loadavgTime
    }
    res.status(500).send(result);
  } catch (error) {
    console.error(error);
    res.status(400).send({ error });
  }
});

module.exports = router;