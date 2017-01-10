Aircastle Solutions 2016
================

Web portfolio with the following features
 
    * Ruby Sinatra back en
    * React/Flux Front end
    * Hosted on Heroku

[Aircastle Solutions 2016 on Heroku](https://frozen-falls-74291.herokuapp.com/)
 
Run it locally
--------------

Install dependencies

`bundle install`

Run locally

`foreman start web`

View locally

[local site](http://localhost:5000/)

Run feature tests
-----------------

`rake host_sprockets_middleware`
`rake feature`

Compiling React Files for production
------------------------------------

Install jsx compiler

`npm install -g jsx`

Run the rake command

`rake compilejsx`

Deploy to production
--------------------

Deploy App

`git push heroku master`

Open App

`heroku open`

Further reading
---------------
    
[Sinatra React App](https://github.com/Ashdown/sinatra-react)
[Aircastle Solutions CMS](https://github.com/Ashdown/aircastle-solutions-2016-cms)
[Getting started with Ruby on Heroku](https://devcenter.heroku.com/articles/getting-started-with-ruby)
[React TutorialRe](https://facebook.github.io/react/docs/tutorial.html)

Troubleshooting
---------------

To install capybara-webkit, do the following

`brew upgrade`
`brew update`
`brew tap homebrew/versions`
`brew install qt55`
`brew link --force qt55`
`sudo bundle install`




    