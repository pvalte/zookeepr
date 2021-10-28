const { filterByQuery, findById, createNewZookeeper, validateZookeeper } = require('../../lib/zookeepers');
const { zookeepers } = require('../../data/zookeepers');
const router = require('express').Router();

//add the route
router.get('/zookeepers', (req, res) => {
    let results = zookeepers;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

//get one zookeeper by param
router.get('/zookeepers/:id', (req, res) => {
    const result = findById(req.params.id, zookeepers);
    if (result) {
        res.json(result);
        //send 404 error if no id found
    } else {
        res.send(404);
    }
});

//post
router.post('/zookeepers', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = zookeepers.length.toString();

    // if any data in req.body is incorrect, send 400 error back
    if (!validateZookeeper(req.body)) {
        res.status(400).send('The zookeeper is not properly formatted.');
    } else {
        const zookeeper = createNewZookeeper(req.body, zookeepers);
        res.json(zookeeper);
    }
});

module.exports  = router;