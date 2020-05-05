var Athlete = require('./models/athlete');

function getAthlete(res) {
    Athlete.find(function (err, athletes) {
        if (err) {
            res.send(err);
        }
        res.json(athletes);
    });
};

module.exports = function (app) {
    app.get('/api/athlete', function (req, res) {
        getAthlete(res);
    });

    app.post('/api/athlete', function (req, res) {

        Athlete.create({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Nationality: req.body.Nationality,
            DateOfBirth: req.body.DateOfBirth,
            done: false
        }, function (err, athlete) {
            if (err) {
                res.send(err);
            }
            getAthlete(res);
        });

    });

    app.delete('/api/athlete/:athlete_id', function (req, res) {
        Athlete.remove({
            _id: req.params.athlete_id
        }, function (err, athlete) {
            if (err) {
                res.send(err);
            }
            getAthlete(res);
        });
    });

    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });
};
