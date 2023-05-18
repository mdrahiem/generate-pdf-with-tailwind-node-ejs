## Node Express Puppeteer Tailwindcss App

This repository contains a Node.js application built with Express, Puppeteer, and Tailwind CSS. The application allows you to perform web scraping using Puppeteer and serves the scraped data using an Express server. The front-end of the application is styled using Tailwind CSS.

#### Prerequisites

Before running this application, ensure that you have the following prerequisites installed on your machine:

- Node.js (version 14 or above)
- npm (Node Package Manager)

#### Clone the Repository

To clone this repository to your local machine, use the following command:

```bash
git clone https://github.com/mdrahiem/generate-pdf-with-tailwind-node-ejs.git

npm install

npm run devstart
```

It should open up port `3000`

This command will start the Express server and make the application accessible at http://localhost:3000 (or the configured port).

##### How to print

Now the app is running on port 3000, open up a new terminal window and run `npm run print` command to generate a pdf. If you wish to change the pdf content, it should be editable in `views/index.ejs` file.

Note: Before running the above command make sure you have `print` directory in the root. Otherwise it will throw an error.

##### Acknowledgments

Mayk Brito: https://gist.github.com/maykbrito/444645526ac25a413021b0cd4d70fe24
Express: https://expressjs.com/
Puppeteer: https://pptr.dev/
Tailwind CSS: https://tailwindcss.com/

##### Contact

If you have any questions or suggestions, please feel free to reach out to the project maintainer at mdrahiem@gmail.com
