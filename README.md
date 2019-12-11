# English Premier League
The English Premier League is the top-tier league of soccer (football) teams, which consists of 20 teams. Every year,
each team in the league plays 38 matches (2 matches against every other team).
At the end of the season, the team with the most points wins the Premier League title. The bottom three teams are
relegated to the Championship League, which is the league one tier below the Premier League. The top 4 teams are
eligible to play in the UEFA Champions League the next season, and teams ranked 5 and 6 are eligible to play in the
Europa League.
Each win is worth 3 points, each tie is worth 1 point, and a loss does not give a team any points.

## Technologies
NodeJS + TypeScript

## Getting started
* RUN:`npm i` or `npm install`, like below

go forward inside the root of the application:
```console
\workspace\eng-premier-leage-challenge: npm i
```
* RUN:`npm run dev` for live building
* something like this need to be output:
```console
[nodemon] 2.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/app.ts`
Server running...
```
Now server is running properly, let's go forward to our next step

## Services
`/matches`: This service is responsible for returning all matches in the original format from: https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json

`/matches/report`: This service returns all the matches sorted by wins and shows data like number of wins, draws, losses, amount of goals for, goals against, goals difference and the amount of points (Each win is worth 3 points, each tie is worth 1 point, and a loss does not give a team any points)
