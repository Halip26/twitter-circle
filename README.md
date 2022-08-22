![Example](/assets/screenshot.png)

# My Twitter Circles with rotating animation

Originally from [My Twitter Circles](https://halip26-circles.vercel.app) it has been making the round in the dev community.
I believe this is a great opportunity for a project to learn from. 
The concept is easy and straightforward but the realization encompasses a lot of concepts.


## Installation
```shell script
git clone https://github.com/Halip26/twitter-circle.git

cd twitter-interaction-circle

```

Run with 
```shell script
open with live-server
```

## Modifications

If you wish, you can replace the first part of the main loop in the `index.html` to use the getUser() function instead of getMe().
This will allow you to generate the circles for any public Twitter user. All the API methods used take advantage only of public data.

## Challenges

You can try to apply the following changes to test your knowledge:
- Apply a shade to  each avatar based on the most common type of interaction
- Fetch the circles for another user
- Render a grid instead of the circles