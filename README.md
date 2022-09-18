# ScheduMate

<center>
<a href = "https://github.com/The-Powerpuff-Boys/schedu-mate/issues"><img src = https://img.shields.io/github/issues/The-Powerpuff-Boys/schedu-mate></a>
<a href = "https://github.com/The-Powerpuff-Boys/schedu-mate/fork"><img src = https://img.shields.io/github/forks/The-Powerpuff-Boys/schedu-mate></a>
	<a href = "https://github.com/The-Powerpuff-Boys/schedu-mate/stargazers"><img src = https://img.shields.io/github/stars/The-Powerpuff-Boys/schedu-mate></a>
  <a href = "https://github.com/The-Powerpuff-Boys/schedu-mate/blob/master/LICENSE"><img src = https://img.shields.io/github/license/The-Powerpuff-Boys/schedu-mate></a>
  </center>
 <img src ='.github/images/landing.png'>

ScheduMate is a web application that allows you to easily see the classes that you have in common with your friends. Friends make classes so much better!

## Table of Contents

- [Inspiration](#inspiration)
- [What it does?](#what-it-does)
- [How we built it?](#how-we-built-it)
- [Challenges we ran into?](#challenges-we-ran-into)
- [Accomplishments that we're proud of?](#accomplishments-that-were-proud-of)
- [Installation](#installation)
- [Demo Credentials](#demo-credentials)
- [What we learned?](#what-we-learned)
- [Future Scopes](#future-scope)
- [Screenshots Time](#screenshots-time)
- [Contributing](#contributing)
- [License](#license)
- [About Us](#about-us)

## Inspiration

Do you ever reach out to your friends to compare class schedules but forget who you have classes common with when they roll around? Or have you wanted to know if any friends are in a specific class but it’s way too time consuming to ask everyone? Some university classes have over 200 students, and with so many different profs, class times and classes, it’s a hassle to compare schedules and connect with your friends before classes start.

Also getting all the information scattered in various groups and apps is a pain. Reaching different domains to get different data is quite a hassle.

## What it does?

ScheduMate is a platform to support students in maintaining _close relationships_ with their friends throughout university. It allows students to keep track of their classes in a personalized schedule, cultivate a friends list, and view their matching classes with their friends. The application allows you to enter your scheduled classes, add friends and see with who you share classes. It also provides all the important notifications and notices available on your university website. Our website does the heavy lifting so that students can have greater visibility into connecting with their peers. ScheduMate maintains a highly secure system where users can create, log in, and log out of their accounts, and the necessary information will always be readily available for them. With added features of accessing notes, and being up to date with latest news and notices of the university, ScheduMate is
the one stop solution for all your university needs.

## How we built it?

This Project is proudly built with [Appwrite](https://appwrite.io/) and Hosted on [Digital Ocean](https://www.digitalocean.com/).

<!-- 'Made with Appwrite' badge -->
<a href="https://appwrite.io/" target="_blank" style=";right: 18px;bottom: 18px;z-index: 999;">
  <img style="width: 130px;" src="https://appwrite.io/images-ee/press/badge-pink-box.svg" alt="Built with Appwrite">
</a>

Our Frontend is designed with [React](https://reactjs.org/) and [Bulma](https://bulma.io/) and [Tailwind](https://tailwindcss.com/) Framework. We also used Sass(https://sass-lang.com/) for styling.

Cloud Functions has been written in various Languages and some of the code taken from our senior's project and tweaked a bit(getting the required permissions).All Rights goes to them. To know more about it go the `cloud-functions`.

## Challenges we ran into?

Even though our team had knowledge of various techstacks, we still had quite a hurdles.

[Biswa](https://github.com/2002Bishwajeet) - For him, it was his first time integrating appwrite on a react project, hosting Appwrite on Digital Ocean, settings up domain and SSL, use subdomain for appwrite and main domain for frontend. Also, he had to learn how to use Appwrite's SDK and API for the JS application. For him, setting a production server was a new experience.

[Harsh](https://github.com/harshsH-28) - For him, it was his first time integrating Appwrite with React. Working with Appwrite SDK and state management was a major challenge for him. He collaborated with Biswa to integrate and fix the crucial bugs for the Appwrite SDK and also deployed Frontend along with Biswa.

[Gunjan](https://github.com/GunjanGupta26) - For her, it was her first time particpating in a hackathon and she was quite thrilled and did a great job. She played role in building the frontend. She was the lead in designing and beautifying the website using css. She took time designing the UI for the website but achieved the desired look.

[Vidhu](https://github.com/Kranium2002) - He was a lead in designing the UI for the website. He also helped in writing cloud functions for appwrite and helped Biswa in deploying cloud functions successfully. Deploying and writing web scraper python code and population the database was a major challenge for him.

## Accomplishments that we're proud of?

We are proud that this project is ready for production and can be used readily for our university at least. Using an Open Source Backend as a Service ([Appwrite](https://appwrite.io/)). This project has been deployed successfully and can be viewed in any device.

Writing a web scraper function to get the neccessary data from the university website and populating the database was a major accomplishment for us.

Writing cloud functions and automating things for us was a huge happniess😄.

## Installation

This project is built with React and Appwrite. To run this project locally, you need to have Node.js and npm installed on your system.

To run appwrite locally, follow the instructions [here](https://appwrite.io/docs/installation). Note you must have Docker installed on your system.

To run the frontend, follow the instructions below:

```bash
git clone https://github.com/The-Powerpuff-Boys/schedu-mate
cd schedu-mate
npm install && npm start
```

Tu run it locally - go over to [https://localhost:3000](https://localhost:3000)

To setup appwrite, there are some cloud functions well written for you by us😉. You can find them in the cloud functions. To run those cloud functions, follow the instructions [here](https://appwrite.io/docs/functions).
It's recommended to install appwrite CLI to deploy those cloud functions easily. More about it [here](https://appwrite.io/docs/command-line)

> Also edit the `.env` file and update the variables. This should be pretty self-explanatory although we would be happy to help you out if you face any issues. If there is feel free to create an issue.

## Demo Credentials

If you want to just try out the demo, you can use the following credentials:

- frontend-server: [schedumate.study](https://schedumate.study)

- backend-server: [appwrite.schedumate.study](https://appwrite.schedumate.study)

**NOTE:** For Backend server, DM me if you just want to see the credentials. I will provide you with the credentials.

## What we learned?

Everyone learned something.

- **Biswa** learned about deploying and setting up a production server, integrating Appwrite with React, using Appwrite's SDK and API for the JS application, using Appwrite's CLI, linking a domain to Appwrite, setting up SSL, and using subdomains for Appwrite and main domain for frontend.

- **Harsh** learned Appwrite, more advanced fundamentals of React, and how to use Appwrite's SDK and API for the JS application.

- **Gunjan** learned more about React and tools like Bulma and Tailwind CSS. She also learned about appwrite.

- **Vidhu** learned how to write cloud functions for Appwrite, how to deploy cloud functions, how to write a web scraper in Python, and how to populate the database. He also learned about appwrite and integrating it with React.

## Future Scopes

Although this project is ready, there is always scope for more improvement

- We will use NLP to find relevant information for any subject on the internet and display it accordingly.

- We will add a feature to add a class to the schedule by just scanning the QR code of the class.

- Improving the UI and UX of the website.

## 📸 Screenshots Time

## License

This project is MIT [Licensed](./LICENSE)

## About Us

We are The Powerpuff Rangers (formerly The Powerpuff Boys)

<img src = '.github/images/powerpuff.png'>
