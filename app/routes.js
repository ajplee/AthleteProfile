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
            Location: req.body.Location,
            Association: req.body.Association, 
            Team: req.body.Team, 
            Gender: req.body.Gender,
            Sports: req.body.Sports, 
            About: req.body.About,
            Interests: req.body.Interests,
            Charities: req.body.Charities,
            SocialMediaHandles: req.body.SocialMediaHandles,
            Pets: req.body.Pets,
            DrinksAlcohol: req.body.DrinksAlcohol,
            Married:req.body.Married,
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
