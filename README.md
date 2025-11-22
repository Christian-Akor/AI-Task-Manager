# AI Task Manager

A production-ready full-stack AI-powered Task Manager built with React, Tailwind CSS, Node.js, Express, and MongoDB.

## Features

- 🔐 **JWT Authentication** - Secure user registration and login
- ✅ **Task CRUD Operations** - Create, read, update, and delete tasks
- 🎯 **Priority Levels** - Organize tasks by urgency (low, medium, high, urgent)
- 🏷️ **Tags & Filtering** - Categorize and filter tasks easily
- 📅 **Deadline Tracking** - Set deadlines and track upcoming tasks
- 🔔 **Smart Notifications** - Automated deadline reminders
- 📊 **Analytics Dashboard** - Visualize your productivity metrics
- 🤖 **AI-Powered Suggestions** - Get intelligent task breakdown suggestions from OpenAI
- 🌓 **Dark Mode** - Toggle between light and dark themes
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🛡️ **Error Boundaries** - Graceful error handling
- 🔒 **Secure API Routes** - Protected endpoints with middleware
- 🎨 **Clean UI** - Modern design with Tailwind CSS
- 📦 **Reusable Components** - Modular and maintainable code

## Tech Stack

### Frontend
- React 18
- Tailwind CSS
- React Router DOM
- Axios
- Date-fns
- Vite

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (JSON Web Tokens)
- bcryptjs
- OpenAI API
- Node-cron
- Helmet (Security)
- CORS

## Project Structure

```
AI-Task-Manager/
├── backend/
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Authentication & error handling
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   ├── utils/          # Utility functions
│   │   └── server.js       # Express server
│   ├── .env.example
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── context/        # React Context providers
│   │   ├── pages/          # Page components
│   │   ├── utils/          # Utility functions
│   │   ├── App.jsx
│   │   └── index.css
│   ├── .env.example
│   ├── package.json
│   ├── Dockerfile
│   └── nginx.conf
├── docker-compose.yml
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- MongoDB (local or cloud instance)
- OpenAI API key (optional, for AI suggestions)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Christian-Akor/AI-Task-Manager.git
   cd AI-Task-Manager
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your configuration
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   cp .env.example .env
   # Edit .env if needed
   npm run dev
   ```

### Environment Variables

#### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ai-task-manager
JWT_SECRET=your_jwt_secret_key_here_change_in_production
JWT_EXPIRE=7d
NODE_ENV=development
OPENAI_API_KEY=your_openai_api_key_here
```

#### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

## Docker Deployment

Run the entire stack with Docker Compose:

```bash
# Create .env file in root directory
cp .env.example .env

# Edit .env with your secrets
# Then run:
docker-compose up -d
```

This will start:
- MongoDB on port 27017
- Backend API on port 5000
- Frontend on port 80

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Tasks
- `GET /api/tasks` - Get all tasks (protected)
- `GET /api/tasks/:id` - Get single task (protected)
- `POST /api/tasks` - Create task (protected)
- `PUT /api/tasks/:id` - Update task (protected)
- `DELETE /api/tasks/:id` - Delete task (protected)
- `POST /api/tasks/suggestions` - Get AI suggestions (protected)
- `GET /api/tasks/analytics` - Get dashboard analytics (protected)

## Features in Detail

### AI Suggestions
Powered by OpenAI's GPT-3.5-turbo, the system provides intelligent suggestions for breaking down tasks and accomplishing them effectively.

### Deadline Notifications
A cron job runs daily at 9 AM to check for upcoming deadlines and send notifications for tasks due within 24 hours.

### Dashboard Analytics
- Total tasks count
- Completed tasks
- In-progress tasks
- Overdue tasks
- Tasks by priority distribution
- Upcoming deadlines (next 7 days)

### Security Features
- Password hashing with bcryptjs
- JWT token-based authentication
- Protected API routes
- Helmet.js for HTTP headers security
- CORS configuration
- Input validation

### Dark Mode
Persistent theme preference using local storage and Tailwind's dark mode classes.

## Development

### Backend Development
```bash
cd backend
npm run dev  # Runs with nodemon for hot-reload
```

### Frontend Development
```bash
cd frontend
npm run dev  # Runs Vite dev server on port 3000
```

## Production Build

### Frontend
```bash
cd frontend
npm run build
npm run preview  # Preview production build
```

### Backend
```bash
cd backend
npm start  # Production mode
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- OpenAI for the GPT API
- React community for excellent libraries
- Tailwind CSS for the styling framework

## Support

For support, email christian.akor@example.com or open an issue in the repository.