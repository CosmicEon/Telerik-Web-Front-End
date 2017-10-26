# "Web front-end development" course project

Course project made for Telerik Academy's final course - "Web front-end development" (previously "Slice and Dice").

# Movie Forum - course project
## 1. Description
Single-page application sliced from the given design (TheStylePSD folder), without using any full-featured js framework/library. Implemented responsive design look good on most used resolutions, without using Bootstrap for it. All the application's data requests are handled from the server through AJAX calls. And the information is stored in database. Scripts are made for build and dev.
## 2. Technologies used
### Front End
- Handlebars
- JQuery
- Navigo
- System.js

### Back End
- Babel
- Gulp
- MongoDB
- Node.js (Express)

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
Run application in **development mode**:
```
mongod -> if db isn't launched
gulp dev
```

Build application for **production**:
```
gulp build
```
## 6. Author
 Krasen Ilkov - [Telerik Academy Profile](http://telerikacademy.com/Users/KraitynDeWas)