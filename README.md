# 🪔 Diwali Greetings Website

A beautiful, fully responsive single-page Diwali Greeting website built with React.js and Tailwind CSS. Create and share personalized Diwali wishes with festive animations and effects.

## ✨ Features

- 🎨 **Festive Design**: Beautiful Diwali theme with colorful lights, diyas, and sparkles
- 🎆 **Animations**: Smooth CSS and JS animations including fireworks, glowing lamps, and particle effects
- 📱 **Responsive**: Fully responsive design for mobile, tablet, and desktop
- 🔗 **URL Generation**: Generate unique shareable links with personalized names
- 📋 **Copy & Share**: Built-in copy and share functionality
- 🎭 **Typewriter Effect**: Animated personalized messages
- 🌟 **Glassmorphism UI**: Modern glassmorphism design with soft glows and shadows

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open in Browser**
   Navigate to `http://localhost:3000`

## 🎯 How It Works

### For Users Creating Greetings:
1. Enter your name in the input field
2. Click "Send / Generate Link"
3. Copy or share the generated URL
4. Send the link to friends and family

### For Recipients:
1. Open the shared link
2. See a personalized Diwali message with your name
3. Enjoy the festive animations and effects

## 🛠️ Tech Stack

- **React.js** - Frontend framework
- **Tailwind CSS** - Styling and responsive design
- **Framer Motion** - Smooth animations and transitions
- **Google Fonts** - Poppins and Great Vibes fonts

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🎨 Customization

### Colors and Themes
The website uses a vibrant Diwali color palette:
- Primary: Gold (#ffd700)
- Secondary: Orange (#ff6b6b)
- Accent: Blue (#48dbfb)
- Background: Gradient with multiple festive colors

### Animations
- Floating particles
- Firework bursts
- Glowing diyas
- Sparkle effects
- Typewriter text animation
- Smooth transitions

## 📦 Project Structure

```
diwali-greetings/
├── public/
│   ├── index.html          # Main HTML with SEO meta tags
│   └── manifest.json       # PWA manifest
├── src/
│   ├── App.jsx            # Main React component
│   ├── index.js           # React entry point
│   └── index.css          # Tailwind CSS with custom animations
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
└── README.md              # This file
```

## 🎉 Example URLs

- `/?name=Mahipal&lang=en` - Shows English personalized greeting for Mahipal
- `/?name=Mahipal&lang=hi` - Shows Hindi personalized greeting for Mahipal  
- `/?name=Mahipal&lang=gu` - Shows Gujarati personalized greeting for Mahipal
- `/` - Shows the input form to create new greetings

## 🌍 Language Selection Flow

When users click "Send / Generate Link", they will see a beautiful language selection modal with:

- **🇬🇧 English** - Blue gradient button
- **🇮🇳 हिंदी** - Orange-red gradient button  
- **🇬🇺 ગુજરાતી** - Green-teal gradient button

The modal features:
- Glassmorphism design with backdrop blur
- Smooth animations and transitions
- Flag emojis for visual appeal
- Cancel option to close modal
- Click outside to close functionality

## 🌍 Multilingual Support

The website supports three languages:

### 🇬🇧 English
- Title: "🪔 Diwali Greetings 🪔"
- Message: "🎉 {name} wishes you and your family a very Happy Diwali! 🎉"

### 🇮🇳 Hindi  
- Title: "🪔 दिवाली शुभकामनाएं 🪔"
- Message: "🎉 {name} की तरफ़ से आपको और आपके परिवार को दिवाली की हार्दिक शुभकामनाएँ! 🎉"

### 🇬🇺 Gujarati
- Title: "🪔 દિવાળી શુભેચ્છાઓ 🪔" 
- Message: "🎉 {name} તરફથી તમને અને તમારા કુટુંબને દિવાળી ની હાર્દિક શુભેચ્છાઓ! 🎉"

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

### Customization Options

1. **Change Greeting Message**: Edit the message in `App.jsx`
2. **Modify Colors**: Update the color scheme in `tailwind.config.js`
3. **Add More Animations**: Extend the animation library in `index.css`
4. **Update Meta Tags**: Modify SEO information in `public/index.html`

## 🌟 Features in Detail

### URL Generation
- Generates unique URLs with name parameters
- Uses `URLSearchParams` for URL parsing
- Supports special characters in names

### Animations
- **Particle System**: Floating colorful particles
- **Firework Effects**: Celebration bursts when generating links
- **Diya Animation**: Glowing traditional lamps
- **Sparkle Effects**: Magical twinkling stars
- **Typewriter**: Enhanced animated text reveal with character-by-character animation
- **Toran Sway**: Traditional door hanging with gentle swaying motion
- **Message Glow**: Dynamic glowing text effects with gradient animations
- **Message Float**: Gentle floating animation for personalized messages
- **Flower Rain**: Beautiful falling flower animation with multiple flower types
- **Confetti**: Colorful celebration particles
- **Sound Effects**: Optional audio feedback for interactions

### Traditional Diwali Elements
- **Toran (Door Hanging)**: Traditional decorative door hanging with flowers, leaves, and bells
- **Firecrackers**: Realistic red firecrackers with yellow stripes and fuses
- **Rockets**: Blue rockets with flame effects and fins
- **Chakri**: Spinning colorful wheels with multiple rings
- **Anar**: Green fountain effects with sparks
- **Lanterns**: Glowing red-orange lanterns with windows
- **Diyas**: Traditional oil lamps with flickering flames
- **Decorative Images**: Traditional Diwali celebration images with glowing effects
- **Side Decorations**: Animated side images with floating animations

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes
- Perfect text alignment and typography
- High contrast text for maximum readability
- Dark backgrounds for better text visibility
- Compact title sizing for better mobile experience

### Audio Features
- **Background Music**: Festive Diwali instrumental music
- **Immediate Playback**: Music starts immediately when user visits page
- **Auto-play**: Multiple strategies to bypass browser autoplay restrictions
- **Sound Toggle**: User can enable/disable music with speaker button
- **Volume Control**: Optimized volume levels for background music
- **Loop Playback**: Continuous music playback
- **Browser Compatibility**: Advanced techniques to ensure music plays
- **User Interaction**: Detects and responds to any user interaction
- **Synthetic Events**: Creates artificial user interactions to trigger audio

## 🎊 Diwali Celebration

This website captures the essence of Diwali with:
- Traditional diya decorations
- Festive color schemes
- Celebration animations
- Warm, welcoming messages
- Joyful user experience

## 🚀 **Deployment**

### **Netlify Deployment:**
- The `public/_redirects` file is included for proper SPA routing
- All routes redirect to `index.html` to let React handle routing
- Query parameters are preserved for personalized greetings
- Static assets are served directly for optimal performance

### **Deployment Features:**
- **SPA Routing**: Proper handling of client-side routing
- **Query Parameters**: Support for `?name=` and `?lang=` parameters
- **Static Assets**: Direct serving of images, music, and CSS files
- **Security Headers**: Basic security headers included
- **Performance**: Optimized for fast loading

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support or questions, please open an issue on GitHub.

---

**Made with ❤️ for Diwali Celebrations**

*May this Diwali bring you joy, prosperity, and happiness!* 🪔✨
#   D i w a l i - G r e e t i n g s 
 
 #   D i w a l i - G r e e t i n g s 
 
 #   D i w a l i - G r e e t i n g s 
 
 