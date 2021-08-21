# Description
A platform for restaurant owner to set up simple Menu and order system using QR code

This project is current under construction!

If you would like to try, please go ahead and clone https://github.com/julschong/restaurantMenuQR.git

Only frontend is working at the moment, backend will need a major change.

To start frontend, please run this from the project root: 

```cd client && npm i```

Afterward, please make sure to have json-server and concurrently install globally. If not, you can run:

```npm i -g concurrently json-server```

Then, you can start client in development mode by running:

```npm run dev```


# Use cases
User (Owner) story
- Create account and login
- Create restaurants, add locations, set up tables
- Create Menu and Menu items
- Generate QR code for print out
- View current table orders

End User (Customers) story
- scan QR code to view menu

# Goals and Progress
## Frontend
- [ ] User login
- [ ] Dashboard that shows user's restaurants
- [ ] Each restaurant has menu to add and edit menu items
- [ ] Menu style (background, hero, titile) can be edited
- [ ] Each restaurant has a generated QR page to print for tables
- [ ] QR link to a print version of the menu page

## Backend
- [ ] Set up Postgres to ERD diagram below
- [ ] User Auth using JWT and bcrypt: authenticate, register, refresh access token, authorize routes using access token
- [ ] Restaurant Route CRUD
- [ ] Menu Route CRUD
- [ ] Category Route CRUD
- [ ] MenuItem Route CRUD
- [ ] Image upload to cloudinary, imgur, or S3

# Current DataBase Schema
![alt text](https://github.com/julschong/QR-Restaurant-Menu/blob/master/server/planning/ACTUAL_DB_DIAGRAM.png)

# Current Frontend Progress
![restaurant_QR_current_progress](https://user-images.githubusercontent.com/71372051/130203173-ad1c0ffb-7a4e-46a1-bafa-433a0b9fc9f5.gif)


