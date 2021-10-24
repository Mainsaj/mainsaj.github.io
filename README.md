# Hello and welcome to IT339

Before starting on the assignment make sure you have Git and NodeJS installed
on your machine and that you have a GitHub Account.
For more information about the git commands, look at the course website.

# For full credit you must:
- Create a basic express application, it must use ES6 modules.
- The app must have handlebars and a static directory registered.
- Add [bootstrap](https://getbootstrap.com/) to your layout.hbs (just the CSS).
- Create 2 files in the root dir `data-location.txt` and `data.json`
- Put an array of few items into `data.json`, you can use [JSON generator](https://www.json-generator.com/) to generate it.
- Add the location of `data.json` into `data-location.txt`
- Create a route `/callback` 
- Create a route `/promisse`
- Create a route `/await`
- Each of the 3 routes should perform the same tasks but using callbacks, promises and async/await functions. You need to preform 2 async calls that are going to be chained.
- The first function should read the content of the `data-location.txt` and use that to open the data file.
- Use the data from the second file to render an hbs template as [boostrap cards](https://getbootstrap.com/docs/4.0/components/card/)

# For committing your work:

- Add all the files with the commands discussed in class.
- Create a commit with a meaningful message.
- Push your changes to GitHub
- Do not upload anything to D2L, that is only for posting grades.

# For Extra credit (1points):
- Add a navigation to the site and use bootstrap to style it.
