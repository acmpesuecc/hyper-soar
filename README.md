![hypersoar banner](https://github.com/Advaith-RN/hyper-soar/assets/77977360/aed0fbcc-b320-418e-bff2-1b2628d877b2)

# HyperSoar - Defy your Limits


Welcome to HyperSoar, a front-end website built using React and Tailwind CSS. HyperSoar offers a visually stunning and user-friendly experience for to purchase drones and anyone passionate about drones. Whether you're an amateur drone pilot or a seasoned expert, HyperSoar has something special for you. 
This is a pure front-end site, designed to implement a UI designed by me.

### https://hyper-soar.vercel.app/

## Run it locally

### Client

This site was made using vite.
Clone this repository to your local machine.
```
git clone https://github.com/yourusername/hyper-soar.git
```
Navigate to the project directory.
```
cd client
yarn                 //to install dependencies
yarn dev             //to run the client
```
### Server

The server consists of a basic Express back-end. 
```
cd server
npm i               //install dependencies
nodemon             //run server
```

## Contributions

#### Maintainer Name
Advaith Rajan Nair

Contributions are welcome! In the future, I plan to add a dedicated backend, to turn this into a store-like experience.
If you find a bug or have suggestions for new features, feel free to open an issue or submit a pull request. Let's make HyperSoar even better together!

## JWT

What is a JWT Token?

A JWT (JSON Web Token) is like a digital passport for the internet. It's a small piece of information that can be sent securely from one place to another.

How Does it Work?

Imagine you log into a website. After you log in, the server creates a JWT token that contains information about you.
This token is like a keycard. It's unique to you and has some details, such as your name, role, and an expiration date.

Stateless Nature:

JWT tokens can be "stateless." This means once the server gives you the token, it doesn’t need to remember anything about you.
Every time you make a request to the server (like asking for a webpage), you show your token. The server reads the token and knows who you are without needing to remember past interactions.
However the server cannot revoke the session any time (must wait for client) and security decreases.

Stateful Nature:

JWT tokens can be "stateful." The server will remember your credentials and store it in its database. This increases the security of the system, users can be tracked, password retrieval is easier and session expiry in case the user forgets to log out becomes easy.
This is why stateful authentication has been implemented here.
The server remembers the user's email and password and stores it in its database.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

Thank you for visiting HyperSoar! We hope you enjoy your journey through the world of modern drones and aerial photography. If you have any questions or need assistance, feel free to contact me. Happy flying!
