# "Web front-end development" course project

Course project made for Telerik Academy's final course - "Web front-end development" (previously "Slice and Dice").

# Movie Forum - course project
## 1. Description
Single-page application made by the given design (TheStyle.psd) without using any full-featured js framework/library. All the data requests are handled from the server through AJAX calls. And all the information is stored in database.
## 2. Technologies used
### Front End
- Handlebars
- JQuery
- Navigo
- System.js

### Back End
- Babel
- Gulp
- MongoDB (Express)
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

## 5. Commands to use
Run server in **development mode**:
```
mongod -> if db isn't launched
gulp dev
```

To build the application for **production**:
```
gulp build
```
## 6. Author
 Krasen Ilkov - [Telerik Academy Profile](http://telerikacademy.com/Users/KraitynDeWas)