# My Path React WebApp

React App to get know desired career path and advance percentage. Project built with React 16.13, [Material UI](https://material-ui.com/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Node JS v13.6.0
yarn 1.22.0
npm 6.13.4
heroku-cli (for build to production)
```

### Installing

A step by step series of examples that tell you how to get a development env running

Clone the repository

```
git clone git@github.com:nasarcacd/my-path.git
```

Go to the root directory and run the following command

```
cd my-path
yarn
```

### Running the proyect

At the root folder run the following command:

```
yarn start
```

## Deploy to Production

Using heroku follow the next instructions:

```
heroku login
heroku create my-path-webapp --buildpack mars/create-react-app

git push heroku master
```

After that when you want to deploy new changes just run the following command:

```
git push heroku master
```

## Online DEMO

https://my-path-webapp.herokuapp.com/

## TODO

INTEGRATE MONGODB AND REACT REDUX