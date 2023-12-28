# Sneakers Company E-commerce Platform

This project is an e-commerce platform for Sneakers Company, showcasing limited edition sneakers and allowing users to view product details, add items to their cart, and proceed to checkout.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Context and Reducer](#context-and-reducer)
- [Live Demo](#live-demo)

## Description

The Sneakers Company E-commerce Platform is built using React, providing a user-friendly interface to explore and purchase limited edition sneakers. The platform offers product images, details, and a seamless shopping cart experience.

## Features

- Browse through limited edition sneakers
- View product details including descriptions, prices, and discounts
- Add items to the cart
- Adjust item quantities in the cart
- View total price and proceed to checkout

## Installation

1. Install dependencies:
   npm install

## Usage :

npm run dev

## Technologies Used:

React
JavaScript (ES6+)
HTML5/CSS3
React Context API for state management

## Context and Reducer:

Context Creation and Reducer Implementation
Context: The AppContext is created using createContext() to maintain global state accessible by multiple components.

Reducer: The reducer function specifies how the state should change based on dispatched actions. Actions like toggling the cart, incrementing/decrementing items, and calculating totals are handled here.

AppProvider: The AppProvider component wraps the entire application and provides the application state and actions to all components within its scope. It uses the useReducer hook to manage state transitions.

useGlobalContext: This custom hook useGlobalContext allows components to consume the context and access state values and actions.

## Live Demo

Explore the live version of the project at [https://e-commerce-product-page-mentor.netlify.app/](https://e-commerce-product-page-mentor.netlify.app/).
