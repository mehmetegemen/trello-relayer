# trello-relayer

This is an example codebase for implementing a todo application on trello. The app simply add a todo and mark one todo as done for now. Backend is on top of Express and frontend is React + Typescript + Redux + Hooks. Tried to push a working version in limited time so there is a lot to improve, I will improve it by time. React components use a MVC pattern to have separation of concerns. I didn't have time to write tests yet, I'll add them soon too. This version is pushed to show as a solution to a challenge, I'll improve it in my free time.

## How to run

I dockerized the application and it uses some args in the docker-compose config file.
```
API_URL: http://localhost:4000
REACT_APP_TOKEN: empty
REACT_APP_TODO_LIST_ID: empty
REACT_APP_DONE_LIST_ID: empty
```
above are the args of frontend. In the earliest commits token will be moved to a setup page, and maybe oauth will be used later. For now to save time, I did it like this. I'll show you how to get APP_TOKEN, TODO_LIST_ID and DONE_LIST_ID.

## How to get essential args and Setup

Assuming your board and the lists are pre-configured:

- Go to https://trello.com/1/authorize?expiration=1day&name=toki&scope=read,write&response_type=token&key=2bc5928319fa5ded18ae81799124a63a and get your token.
- Then with that token go to https://trello.com/1/members/~~~~YOUR_USERNAME~~~~/boards?key=2bc5928319fa5ded18ae81799124a63a&token=~~~~YOUR_TOKEN_YOU_JUST_GOT~~~~
- Searching your board by name, you will it's id in the response. After taking note of it, go to https://trello.com/1/boards/~~~~YOUR_BOARD_ID_YOU_JUST_GOT~~~~/lists?key=2bc5928319fa5ded18ae81799124a63a&token=~~~~YOUR_TOKEN_YOU_JUST_GOT~~~~
- Now you should be able to see your lists and their ids'. Put the token and list ids into docker-compose args and `docker-compose up` for starting the show.
- Now you can access to the app from http://localhost:3000

Soon setup will automatic.