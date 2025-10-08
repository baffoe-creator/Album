# Album 📸

A modern Photo Album built with React and powered by cutting-edge web technologies. Share your moments, connect with friends, and explore beautiful photography in a sleek, responsive interface.

## 🚀 Live Demo

**[View Live Application →](https://album-drab-pi.vercel.app/)**

## ✨ Features

- **Photo Sharing**: Upload and share your favorite moments
- **User Authentication**: Secure login and registration system
- **Real-time Feed**: Browse posts from users you follow
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Fast Performance**: Lightning-quick load times and smooth interactions
- **Modern UI**: Clean, Instagram-inspired interface

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/) - Component-based UI library
- **Build Tool**: [Vite](https://vitejs.dev/) - Fast build tool and development server
- **Authentication**: [Firebase Auth](https://firebase.google.com/products/auth) - Secure user authentication
- **Storage**: [Supabase](https://supabase.com/) - Open-source backend-as-a-service for file storage
- **Deployment**: [Vercel](https://vercel.com/) - Seamless deployment and hosting
- **Styling**: CSS3 with modern features

## 🏗️ Architecture

```
album/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Application pages/routes
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── config/             # Configuration files
│   └── styles/             # Global styles and themes
├── public/                 # Static assets
└── package.json           # Project dependencies
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Firebase project for authentication
- Supabase project for storage

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd album
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   # Firebase Configuration
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   
   # Supabase Configuration
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Building for Production

```bash
npm run build
# or
yarn build
```

 

## 🔧 Configuration

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with your preferred sign-in methods
3. Copy your configuration keys to the environment variables

### Supabase Setup

1. Create a Supabase project at [Supabase Dashboard](https://app.supabase.com/)
2. Set up a storage bucket for image uploads
3. Configure row-level security policies as needed
4. Add your Supabase URL and anon key to environment variables

## 📱 Features in Detail

### Authentication
- Email/password authentication
- Social login options (configurable)
- Protected routes and user sessions
- Secure logout functionality

### Photo Management
- Upload photos from device
- Image optimization and resizing
- Secure cloud storage with Supabase
- Fast image delivery and caching

### Social Features
- User profiles and bio customization
- Follow/unfollow functionality
- Activity feed with real-time updates
- Like and comment system

## 🌐 Deployment

This project is automatically deployed on Vercel. Any pushes to the main branch will trigger a new deployment.

### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Set Environment Variables**
   Configure your environment variables in the Vercel dashboard under Project Settings.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Instagram's user experience
- Built with love using modern web technologies
- Thanks to the open-source community for amazing tools and libraries

## 📞 Support

If you have any questions or need help with setup, feel free to open an issue or reach out!

---

**Built with ❤️ using React, Firebase, and Supabase**
