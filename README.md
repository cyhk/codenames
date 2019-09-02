# Codenames
An app to play Codenames built with React, Next.js, and Socket.io.

Play with your friends! Invite up to 7 other friends to play a game of Codenames.

To be implemented:
- Chat with socket.io

# Tech/framework used
**Built with:**
- Next.js
- React
- Socket.io

# How to use

Install all dependencies:
```
yarn install
```

To run:
```
yarn build
yarn start
```

To run tests:
```
jest
```

# API

**GET /words**

Gets a random list of 25 words from noun list in the form of a 5x5 2D array

Returns JSON `{words: [[word, ...], ...]}`