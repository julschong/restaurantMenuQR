# QR Restaurant Menu
 
I'm currently still working on this project.

# Description
A platform for restaurant owner to set up simple Menu and order system using QR code

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
![upload-image](https://user-images.githubusercontent.com/71372051/130201379-303986cc-c017-4c3c-a6e0-b5f135b02a3a.gif)


