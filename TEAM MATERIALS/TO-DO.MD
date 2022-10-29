# GRACE SHOPPER

## BACK END:

<details>
<summary>ALL BACK END:</summary>

### _seed_

- [ ] Create a seed file that adds many users, products, and carts with necessary information
- [ ] Write a function which sync's and seeds your database when your application starts

### _models_

- [x] create a model for products
  - [x] name - not empty or null
  - [x] image - not empty or null, default value
  - [x] price - not empty or null;
  - [x] genre - not empty or null;
  - [x] inventory - not empty or null; must be a valid email
- [x] create a model for users
  - username, password, name (firstName, lastName), address, cart, previous orders, wishlist
  - [x] create necessary model associations

### _routes_

- [ ] route for all products
- [ ] route for all users
- [ ] route for single product
- [ ] route for single user
- [ ] route to add item to cart
- [ ] route for remove item from cart
- [ ] route to add to wishlist
- [ ] route to remove to wishlist
- [ ] route to process orders???

</details>

# PAGES

<details>
<summary>Home Page:</summary>
- [ ] create an account
- [ ] search bar
- [ ] featured products

</details>

<details>
<summary>Navigation Bar:</summary>

- [ ]
</details>

<details>
<summary>Create an Account:</summary>
- [ ] validation that doesn't let a user create an account if that email already exists in the database
- [ ] email validation to make sure an actual email is being entered
- [ ] added security so if that user is logged in, only they can view their info
- [ ] form validation for password length, caps, numbers
</details>

<details>
<summary>Login:</summary>
- [ ] email validation to make sure an actual email is being entered
- [ ] added security so if that user is logged in, only they can view their info
- [ ] form validation for password length, caps, numbers
</details>

## user account page

<details>
<summary>User Account:</summary>
????
</details>

<details>
<summary>Order History:</summary>
- [ ] Previously purchased items and their prices
</details>

<details>
<summary>Update Info:</summary>
    ☐ update email
    ☐ update password
    ☐ saved addresses
    ☐ saved credit cards
</details>

<details>
<summary>Wishlist:</summary>

- [ ] display items from user wishlist
</details>

<details>
<summary>All Products:</summary>
    ☐ ADD PRODUCT BUTTON
    ☐ display available or out of stock
    ☐ filter options
      ☐ console/platform categories
      ☐ game genre categories
      ☐ price ranges
      ☐ customer ratings
      ☐ genre categories
    ☐ sort options
    ☐ PAGINATION
</details>

<details>
<summary>Single Product:</summary>
      ☐ if item is added to page, popup changes cart info in top right
      ☐ similar products
      ☐ add to wishlist button
      ☐ add to cart button
</details>

<details>
<summary>Guest Cart:</summary>
   ☐ Guest-only: I don't want to create an account, but I want my cart to persist between browser refreshes. Look into front-end storage for this one.
   ☐ if guest logs in, items in cart get added to user items
</details>

<details>
<summary>User Login Cart:</summary>
     - EDIT FUNCTIONALITY
       ☐ change quantity dropdown or field
       ☐ remove product from cart button
       ☐ checkout button

       ☐ TOKEN THAT SAVES CART ITEMS

</details>

<details>
<summary>Checkout:</summary>

      backend: when item is purchased, decrement inventory in database

    ☐ offer promo code for discount
    ☐ integrage stripe, paypal, venmo, bitcoin

    ☐ sends email confirmation when placing order so that they can reference

</details>

<details>
<summary>404:</summary>

- [ ]
</details>

<details>
<summary>Loading:</summary>

- [ ]
</details>

</details>

## TOO EXTRA:

EXTRA EXTRA EXTRA:

navigate the website successfully, in a way that is accessible and inclusive.
This is a great opportunity to dive into ADA Compliance (screen-reader friendliness, keyboard navigation, colorblind-friendly, etc.).
A11y Checklist

EVEN MORE EXTRA EXTRA EXTRA:

navigate the website successfully, in a way that is accessible and inclusive.
This is a great opportunity to dive into ADA Compliance (screen-reader friendliness, keyboard navigation, colorblind-friendly, etc.).
A11y Checklist
