Multiverse Chronicles

Project Overview
This project is a web application built on the Express/Node.js platform, leveraging the Axios HTTP client to interact with the Superhero API. The website retrieves data about various superheroes from the API and presents it in a user-friendly interface. The application also uses dotenv for securely managing API keys (bearer tokens).

Features
Search Superheroes: Users can search for superheroes by the id.
Detailed Information: Display detailed information about each superhero, including stats, biography, and more.
User-Friendly Interface: The data is presented in a clean, intuitive layout.

Tech Stack
Node.js/Express: Backend framework for building the web server.
Axios: HTTP client used for making API requests to the Superhero API.
Superhero API: A public API providing detailed information about superheroes.
Dotenv: For managing environment variables securely, including the bearer token for API authentication.

Installation
Clone the repository:
git clone https://github.com/Akansha105/multiverse-chronicle.git

Navigate to the project directory:
cd multiverse-chronicle

Install dependencies:
npm install

Set up environment variables:
Create a .env file in the root of the project.

Add your Superhero API bearer token:
makefile
API_TOKEN=your_superhero_api_token

Start the server:
npm start
Usage
Once the server is running, open your web browser and navigate to http://localhost:3000.
Use the search bar to find information about any superhero.
Click on a superhero to view detailed stats and biography.

Acknowledgments
Superhero API for providing a comprehensive database of superhero information.
Express.js for the web framework.
Axios for the HTTP client.
