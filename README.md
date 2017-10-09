# "Web front-end development" course project

Course project made for Telerik Academy's final course - "Web front-end development" (previously "Slice and Dice").

# Movie Forum - course project
## 1. Description
Single-page application made by the given design without any full-featured js framework/library. All the data requests are handled from the server through  ajax calls.
## 2. Technologies used
### Front End
- Handlebars
- JQuery
- Navigo
- Systen.js

### Back End
- Babel
- Express
- Gulp
- MongoDB
- Node.js

## 3. API End points

### Movies

- **GET** -> /movies/
- **GET** -> /movie/:id
- **GET** -> /movie/category/:category
- **GET** -> /movie/category/:category/:subcategory

### Comments
- **GET** -> /comments/
- **POST** -> /comments/
- **GET** -> /comments/:id

## 4. Getting started
Clone the repository and then run:
```
npm install
```

To start the server:
```
mongod
node server.js
```

To run server in **development mode**:
```
mongod -> if db isn't launched
gulp dev
```

To **build** the production version:
```
gulp build
```
## 5. Author
 Krasen Ilkov - [Telerik Academy Profile](http://telerikacademy.com/Users/KraitynDeWas)