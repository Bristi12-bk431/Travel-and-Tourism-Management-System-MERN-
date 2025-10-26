# 🧭 TRAVEL AND TOURISM MANAGEMENT SYSTEM  

A **MERN stack web application** that simplifies travel planning and booking.  
Users can explore destinations, check prices, make bookings, and share reviews — all within one seamless, interactive platform.  

---

### FEATURES  

#### USER FEATURES  
- **Authentication:** Secure login and signup using JWT.  
- **Tour Search & Filter:** Find destinations by location.  
- **Booking System:** Instantly book tours.  
- **Review System:** Post and view ratings for tours.   

#### ADMIN FEATURES  
- **Tour Management:** Create, update, and delete tour packages.  
- **User Management:** View and control user accounts.  
- **Booking Overview:** View all booking data in one place.    

---

### PROJECT DEMO  

#### LIVE DEMO  
 - add deploy link

#### Screen Recordings  

| Page | Preview |
|------|----------|
| **Home Page** | ![Home](assets/screenshots/home.png) |
| **Tour Details Page** | ![Tour Details](assets/screenshots/tour-details.png) |
| **Booking Page** | ![Booking](assets/screenshots/booking.png) |
| **Login / Register** | ![Auth](assets/screenshots/auth.png) |

*(Store screenshots in `/assets/screenshots/` folder for GitHub preview)*  

---

### TECH STACK  

#### FRONTEND  
- React.js  
- React Router DOM  
- Bootstrap + Custom CSS  
- Remix Icons  
- Slick Carousel  

#### BACKEND  
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JSON Web Token (JWT)  
- Cookie Parser  
- CORS  

---

### ⚙️ INSTALLATION & SETUP  

#### 1. CLONE THE REPOSITORY  
```bash
git clone https://github.com/your-username/travel-tourism-system.git
```
#### 2. INSTALL DEPENDENCIES
Backend -
```bash
cd backend
npm install
```

Frontend -
```bash
cd frontend
npm install
```
#### 3. SET UP ENVIRONMENT VARIABLES

Create a .env file inside the backend folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
PORT=8000
retryWrites=your_retry_writes

#### 4. RUN THE APPLICATION

Start Backend -
```bash
cd backend
npm start
```

Start Frontend -
```bash
cd frontend
npm start
```

Then visit -> http://localhost:3000

### API ENDPOINTS  

#### AUTH ROUTES
POST /api/v1/auth/register → Register a new user
POST /api/v1/auth/login → Login user

#### TOUR ROUTES
POST /api/v1/tours → Create a tour (Admin only)
PUT /api/v1/tours/:id → Update tour (Admin only)
DELETE /api/v1/tours/:id → Delete tour (Admin only)
GET /api/v1/tours → Get all tours
GET /api/v1/tours/:id → Get single tour
GET /api/v1/tours/search/getTourBySearch → Search tours by city
GET /api/v1/tours/search/getFeaturedTours → Get featured tours
GET /api/v1/tours/search/getTourCount → Get total number of tours

#### USER ROUTES
GET /api/v1/users/:id → Get single user (User/Admin)
PUT /api/v1/users/:id → Update user (User/Admin)
DELETE /api/v1/users/:id → Delete user (User/Admin)
GET /api/v1/users → Get all users (Admin only)

#### BOOKING ROUTES
POST /api/v1/booking → Create booking (User only)
GET /api/v1/booking/:id → Get single booking (User only)
GET /api/v1/booking → Get all bookings (Admin only)

#### REVIEW ROUTES
POST /api/v1/review/:tourId → Add review (User only)

---

### 🛠️ TECHNOLOGIES USED
- **Frontend:** React.js, Reactstrap, HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication & Security:** JWT, bcrypt.js, cookie-parser
- **APIs:** RESTful endpoints

---

## CONTRIBUTORS

- **Ayushi Maity ()** – Frontend Developer
- **Anandi Debnath ()** – Frontend Developer
- **Koushiki Chakraborty (https://github.com/Koushiki-Chakraborty)** – API Integration / API Developer and Backend Developer
- **Bristi Kundu ()** – Backend Integration Engineer
