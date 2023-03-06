const express = require('express')
const app = express()
const PORT = 8000


const awardsWinners = {
    '2022': {
        'mvp': 'Nikola Jokić',
        'dpoy': 'Marcus Smart',
        'roy': 'Scottie Barnes',
        '6man': 'Tyler Herro',
        'mip': 'Ja Morant',
        'coty': 'Monty Williams',
        'fmvp': 'Stephen Curry',
        firstTeam: ['Giannis Antetokounmpo', 'Nikola Jokić', 'Devin Booker', 'Luka Dončić', 'Jayson Tatum'],
        secondTeam: ['Kevin Durant', 'Stephen Curry', 'DeMar DeRozan', 'Joel Embiid', 'Ja Morant'],
        thirdTeam: ['LeBron James', 'Chris Paul', 'Karl-Anthony Towns', 'Pascal Siakam', 'Trae Young'],
        rookieFirst: ['Evan Mobley', 'Cade Cunningham', 'Scottie Barnes', 'Jalen Green', 'Franz Wagner'],
        rookieSecond: ['Herbert Jones', 'Ayo Dosunmu', 'Chris Duarte', 'Bones Hyland', 'Josh Giddey'],
        defenseFirst: ['Marcus Smart', 'Rudy Gobert', 'Giannis Antetokounmpo', 'Mikal Bridges', 'Jaren Jackson Jr.'],
        defenseSecond: ['Jrue Holiday', 'Draymond Green', 'Matisse Thubulle', 'Robert Williams III', 'Bam Adebayo']
    },
    '2021': {
        'mvp': 'Nikola Jokić',
        'dpoy': 'Rudy Gobert',
        'roy': 'LaMelo Ball',
        '6man': 'Jordan Clarkson',
        'mip': 'Julius Randle',
        'coty': 'Tom Thibodeau',
        'fmvp': 'Giannis Antetokounmpo',
        firstTeam: ['Stephen Curry', 'Kawhi Leonard', 'Giannis Antetokounmpo', 'Nikola Jokić', 'Luka Dončić'],
        secondTeam: ['LeBron James', 'Chris Paul', 'Damian Lillard', 'Joel Embiid', 'Julius Randle'],
        thirdTeam: ['Paul George', 'Jimmy Butler', 'Kyrie Irving', 'Bradley Beal', 'Rudy Gobert'],
        rookieFirst: ['Jae\'Sean Tate', 'Tyrese Haliburton', 'Saddiq Bey', 'LaMelo Ball', 'Anthony Edwards'],
        rookieSecond: ['Desmond Bane', 'Immanuel Quickley', 'Patrick Williams', 'Isaiah Stewart', 'Isaac Okoro'],
        defenseFirst: ['Jrue Holiday', 'Draymond Green', 'Rudy Gobert', 'Giannis Antetokounmpo', 'Ben Simmons'],
        defenseSecond: ['Jimmy Butler', 'Kawhi Leonard', 'Joel Embiid', 'Matisse Thubulle', 'Bam Adebayo']
    },
    '2020':{
        'mvp': 'Giannis Antetokounmpo',
        'dpoy': 'Giannis Antetokounmpo',
        'roy': 'Ja Morant',
        '6man': 'Montrezl Harrell',
        'mip': 'Brandon Ingram',
        'coty': 'Nick Nurse',
        'fmvp': 'LeBron James',
        firstTeam: ['LeBron James', 'James Harden', 'Anthony Davis', 'Giannis Antetokounmpo', 'Luka Dončić'],
        secondTeam: ['Chris Paul', 'Kawhi Leonard',  'Damian Lillard', 'Nikola Jokić', 'Pascal Siakam'],
        thirdTeam: ['Russel Westbrook', 'Jimmy Butler', 'Rudy Gobert', 'Ben Simmons', 'Jayson Tatum'],
        rookieFirst: ['Kendrick Nunn', 'Eric Paschall', 'Ja Morant', 'Zion Williamson', 'Brandon Clarke'],
        rookieSecond: ['Terence Davis', 'Rui Hachimura', 'P.J. Washington', 'Coby White', 'Tyler Herro'],
        defenseFirst: ['Anthony Davis', 'Marcus Smart', 'Rudy Gobert', 'Giannis Antetokounmpo', 'Ben Simmons'],
        defenseSecond: ['Brook Lopez', 'Patrick Beverly', 'Eric Bledsoe', 'Kawhi Leonard', 'Bam Adebayo']
    }
}




app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:year', (req, res) => {
    const year = req.params.year
    if (awardsWinners[year]){
        res.json(awardsWinners[year])
    } else {
        res.json(awardsWinners['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on ${PORT}! Go gettit!`)
})