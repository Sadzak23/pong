Coding Challenge #36 - Pong
This challenge is to build your own version of the game Pong.

https://codingchallenges.substack.com/p/coding-challenge-36-pong?utm_source=post-email-title&publication_id=1483213&post_id=138948290

JOHN CRICKETT
NOV 18, 2023
For as long as I have been interested in programming, programmers have been learning by building computer games. Many of us start with Pong and over time progress to either copying other more complex games, building our own from scratch or customising existing games.

I certainly spent a lot of my childhood cloning Sensible Soccer and Alien Breed before moving on to writing ‘AI’ based bots for Quake, Quake 2 and Quake 4.

A first step on the journey however is to build a simple game like Pong.

Ad: Jordan Cutler reached senior software engineer in just two years, now he’s teaching you how to do it too on his course Mid-level to Senior for high-growth engineers.

The Challenge - Building Pong
If somehow you’ve never heard of Pong, it is a table tennis-themed game that Atari originally released in 1972. It was apparently the first commercially successful computer game and a key part of establishing the computer gaming industry.

It has simple graphics, with each player controlling a paddle and a ball that bounces across the screen between the players. If a player misses the ball, a point is scored against them.

An early photo of Pong - the computer gaming scene looked a bit different back then!

Step Zero
In this step you decide which programming language and development environment you’re going to use. This would be a great project to try a frontend stack if you’re a backend developer and vice versa.

If you’re from a data engineering or site-reliability engineering background you could leverage your knowledge of Python with PyGame or Go with Ebitenegine. Rustaceans can check out are we game yet for useful crates. In short as Pong is relatively simple and as such, it’s a great platform for learning a new technology, or programming language.

Step 1
In this step your goal is to create program and draw the ‘table’, usually it’s quite a simple table with a vertical line down the middle. Something as simple as this will do:

Step 2
In this step your goal is to create the two paddles and allow the user to control the left hand side one. A good option would be to allow the paddle to be moved up and down with the relevant arrow keys. But they’re tiny on my Mac keyboard, so a better option would be to provide the user with an options dialog to configure which keys to use.

Go wild and let them set the colour scheme perhaps too? Have fun it’s your coding challenge!

Step 3
In this step your goal is to create the ball and have it move around the screen according to the rules of the game. For our challenge they are:

At the start of play (beginning of the game and after every point), the ball will appear at a random point on the central line and move towards a random player at a random angle from the horizontal.

When the ball collides with the top or bottom of the screen/pitch it will bounce off, but continue moving in the same horizontal direction.

When the ball collides with the left or right edge of the screen/pitch a point is scored against the player whose side it is and play restarts at 1.

When the ball collides with a player’s paddle it changes horizontal direction.

Step 4
In this step your goal is to create the computer player. The computer player should move the other paddle with the aim of returning the ball. It’s very easy to make the computer play perfectly and never miss, but that would make the game somewhat boring, so give some thought as to how you can make the computer feel like a beatable human opponent.

Step 5
In this step your goal is to display and update the score at the top of the screen. Extend your options to allow the user to set the winning score, then when either player reaches it celebrate their win and offer the opportunity to play again - starting a new game.
