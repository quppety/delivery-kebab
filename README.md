# Delivery Kebab - Zero-Waste Sister App for Food Delivery Service

## Introduction

Delivery Kebab is a project we did in three days for Elbrus Bootcamp. It's a fun experiment to address the issue of unclaimed orders in food delivery apps. Couriers can place orders that went unclaimed with a discount. On the main page clients can see available orders listed by distance and purchase them at a discounted price.

## Features

- **Order Placement**: Couriers can place unclaimed orders in the app.
<img width="320" alt="placing order" src="https://github.com/quppety/delivery-kebab/assets/124813316/e6fb2d61-384c-45b6-9e68-2f5d39e730d9">

- **Order Listings**: Customers can view available orders listed by proximity to their location.
<img width="920" alt="offers listed" src="https://github.com/quppety/delivery-kebab/assets/124813316/8bdeced7-7bf1-429b-b18e-743e0b37ad79">

- **Order Purchase**: Customers can purchase discounted orders directly through the app.
<img width="420" alt="mobile offer view" src="https://github.com/quppety/delivery-kebab/assets/124813316/66036337-5a72-45bb-a03d-f989c21af48b">
<img width="420" alt="offer buyout" src="https://github.com/quppety/delivery-kebab/assets/124813316/9f3eef92-4dd5-4a2f-b5e0-d04d45941986">

- **Order Tracking**: Couriers can change and track the order status.
<img width="320" alt="courier account" src="https://github.com/quppety/delivery-kebab/assets/124813316/1d30df9e-f460-4045-8bfd-88e1d28e0560">

- Customers can see the updated order status.
<img width="920" alt="customer order status" src="https://github.com/quppety/delivery-kebab/assets/124813316/01c1efda-849e-430a-9b52-8fa0b4aacdb0">

## Technologies

Delivery Kebab is built with the following technologies:

- **Frontend**:
  - React
  - CSS
  - Tailwind CSS

- **Backend**:
  - Node.js
  - Express
  - PostgreSQL
  - Sequelize ORM

- **Third-party API**:
  - Yandex Maps

## Getting Started

To try out Delivery Kebab, follow these steps:

1. Clone this repository to your local machine.
2. Install necessary dependencies by running **npm i**.
3. Configure environment variables from **.env-example**.
4. Configure the database by running these commands:
    - **sequelize db:create --url $DATABASE**
    - **npx sequelize-cli db:migrate**
6. Run the application locally to see it in action using **npm run dev**.

## Usage

1. Launch the app on your device.
2. Log in or create an account as a customer or courier.
3. Browse available orders by distance or place unclaimed orders.
4. Select an order and purchase it at the discounted price.

## Contact

If you have any questions or want to chat about this pet project, feel free to reach out to me on [GitHub](https://github.com/quppety).
