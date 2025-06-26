# Subscription Management System API

A comprehensive subscription management system API that helps users track, manage, and receive reminders for their various subscriptions. Built with modern web technologies and production-ready features including advanced security, automated workflows, and intelligent email notifications.

## ✨ Features

### Core Features
- **User Management**: Complete CRUD operations for user accounts
- **Subscription Tracking**: Create, update, delete, and manage subscriptions
- **Automated Reminders**: Smart email notifications before renewal dates
- **Payment Tracking**: Monitor payment methods and renewal schedules
- **Category Organization**: Organize subscriptions by categories (sports, news, entertainment, etc.)

### Advanced Features
- **JWT Authentication**: Secure user authentication and authorization
- **Rate Limiting & Bot Protection**: Advanced security with [Arcjet](https://arcjet.com/)
- **Automated Workflows**: Email reminder scheduling with [Upstash Workflows](https://upstash.com/)
- **Global Error Handling**: Comprehensive error management system
- **Input Validation**: Robust data validation using Mongoose schemas
- **CORS Configuration**: Cross-origin resource sharing setup

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Email Service**: Nodemailer
- **Workflow Management**: Upstash Workflows
- **Security**: Arcjet (Rate limiting, Bot detection, Shield protection)
- **Date Handling**: Day.js
- **Password Hashing**: bcryptjs
- **Environment Management**: dotenv

## 📁 Project Structure

```
subscription-tracker/
├── app.js                      # Main application entry point
├── package.json               # Project dependencies and scripts
├── README.md                  # Project documentation
├── .gitignore                # Git ignore rules
├── eslint.config.js          # ESLint configuration
├── .env.development.local    # Development environment variables
├── .env.production.local     # Production environment variables
│
├── config/                   # Configuration files
│   ├── arcjet.js            # Arcjet security configuration
│   ├── env.js               # Environment variables setup
│   ├── nodemailer.js        # Email service configuration
│   └── upstash.js           # Upstash workflow client setup
│
├── controllers/              # Route handlers
│   ├── auth.controller.js   # Authentication logic
│   ├── subscription.controller.js # Subscription management
│   ├── user.controller.js   # User management
│   └── workflow.controller.js # Workflow automation
│
├── database/                # Database connection
│   └── mongodb.js           # MongoDB connection setup
│
├── middlewares/             # Custom middleware
│   ├── arcjet.middleware.js # Security middleware
│   ├── auth.middleware.js   # Authentication middleware
│   ├── cors.middleware.js   # CORS configuration
│   └── error.middleware.js  # Global error handling
│
├── models/                  # Database models
│   ├── subscription.model.js # Subscription schema
│   └── user.model.js        # User schema
│
├── routes/                  # API routes
│   ├── auth.routes.js       # Authentication routes
│   ├── subscription.routes.js # Subscription routes
│   ├── user.routes.js       # User routes
│   └── workflow.routes.js   # Workflow routes
│
└── utils/                   # Utility functions
    ├── email-template.js    # Email template generation
    └── send-email.js        # Email sending functionality
```

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd subscription-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy environment file for your environment
   cp .env.development.local.example .env.development.local
   # Edit the file with your actual values
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Start the production server**
   ```bash
   npm start
   ```

## 🔐 Environment Variables

Create `.env.development.local` and `.env.production.local` files with the following variables:

```env
# Server Configuration
PORT=3000
NODE_ENV=development
SERVER_URL=http://localhost:3000

# Database
DB_URI=mongodb://localhost:27017/subscription-tracker

# JWT Configuration
JWT_SECRET=your-jwt-secret
JWT_EXPIRES_IN=7d

# Arcjet Security
ARCJET_ENV=development
ARCJET_KEY=your-arcjet-key

# Upstash Workflow
QSTASH_TOKEN=your-qstash-token
QSTASH_URL=https://qstash.upstash.io

# Email Configuration
EMAIL=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
SERVICE=gmail
```

## 📚 API Endpoints

### Authentication
- `POST /api/v1/auth/sign-up` - Register a new user
- `POST /api/v1/auth/sign-in` - Login user
- `POST /api/v1/auth/sign-out` - Logout user

### Users
- `GET /api/v1/users` - Get all users
- `GET /api/v1/users/:id` - Get user by ID (authenticated)
- `POST /api/v1/users` - Create new user
- `PUT /api/v1/users/:id` - Update user (authenticated)
- `DELETE /api/v1/users/:id` - Delete user (authenticated)

### Subscriptions
- `GET /api/v1/subscriptions` - Get all subscriptions
- `GET /api/v1/subscriptions/:id` - Get subscription by ID (authenticated)
- `POST /api/v1/subscriptions` - Create new subscription (authenticated)
- `PUT /api/v1/subscriptions/:id` - Update subscription (authenticated)
- `DELETE /api/v1/subscriptions/:id` - Delete subscription (authenticated)
- `GET /api/v1/subscriptions/user/:id` - Get user's subscriptions (authenticated)
- `PUT /api/v1/subscriptions/:id/cancel` - Cancel subscription (authenticated)
- `GET /api/v1/subscriptions/upcoming-renewals` - Get upcoming renewals (authenticated)

### Workflows
- `POST /api/v1/workflows/subscription/reminder` - Trigger reminder workflow

## 🔒 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

Protected routes require valid authentication tokens obtained through the sign-in endpoint.

## 📧 Email Notifications

The system sends automated email reminders at:
- **7 days** before renewal
- **5 days** before renewal  
- **2 days** before renewal
- **1 day** before renewal

Email templates are customizable and include subscription details, pricing information, and renewal dates.

## ⚡ Workflows

Powered by [Upstash Workflows](https://upstash.com/), the system automatically:
- Schedules reminder emails based on subscription renewal dates
- Handles workflow state management
- Provides reliable email delivery scheduling
- Manages retry logic for failed email attempts

## 🛡 Security

### Arcjet Integration
- **Rate Limiting**: Token bucket algorithm (5 requests per 10 seconds, capacity of 10)
- **Bot Detection**: Automatic bot detection with search engine allowlist  
- **Shield Protection**: DDoS and abuse protection
- **IP-based Characteristics**: Request filtering based on source IP

### Additional Security
- **Password Hashing**: bcryptjs with salt rounds
- **JWT Expiration**: Configurable token expiration
- **Input Validation**: Mongoose schema validation
- **CORS Configuration**: Restricted to localhost:3000 in development

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
