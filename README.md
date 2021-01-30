# Next.js Simple MVP 

## Technologies

* Next.js
* React
* Typescript
* styled-components

---

## Configuration

Run ```npm install``` to download required dependencies

In ```/core/axios.ts``` change the base URL to your API's URL
```javascript
axios.defaults.baseURL = "https://simple-blog-api.crew.red"
```

In ```/core/urls.ts``` change the urls for your API
```javascript
export const GET_ALL_POSTS = "/posts";
export const GET_POST_BY_ID = "/posts?id=";
export const CREATE_POST = "/posts";
```

---
