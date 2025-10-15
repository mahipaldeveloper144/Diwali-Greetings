import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Particle component for background effects
const Particle = ({ delay, duration, x, color }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full"
    style={{ backgroundColor: color }}
    initial={{ y: '100vh', x: x, opacity: 0 }}
    animate={{ 
      y: '-100px', 
      opacity: [0, 1, 1, 0],
      scale: [0, 1, 1, 0]
    }}
    transition={{ 
      duration: duration, 
      delay: delay,
      ease: "linear"
    }}
  />
);

// Firework component for celebration effects
const Firework = ({ x, y, color }) => (
  <motion.div
    className="absolute w-2 h-2 rounded-full"
    style={{ 
      backgroundColor: color,
      left: x,
      top: y
    }}
    initial={{ scale: 0, opacity: 1 }}
    animate={{ 
      scale: [0, 1.5, 3],
      opacity: [1, 0.8, 0],
      x: [0, Math.random() * 200 - 100],
      y: [0, Math.random() * 200 - 100]
    }}
    transition={{ 
      duration: 0.8,
      ease: "easeOut"
    }}
  />
);

// Firecracker component with PNG-like styling
const Firecracker = ({ x, y, delay }) => (
  <motion.div
    className="absolute w-4 h-10"
    style={{ left: x, top: y }}
    initial={{ scale: 0, rotate: 0 }}
    animate={{ 
      scale: [0, 1, 1.2, 0],
      rotate: [0, 5, -5, 0],
      y: [0, -10, -20, -30]
    }}
    transition={{ 
      duration: 1.5,
      delay: delay,
      ease: "easeOut"
    }}
  >
    {/* Firecracker body */}
    <div className="w-full h-8 bg-gradient-to-b from-red-600 via-red-500 to-red-700 rounded-sm relative shadow-lg">
      {/* Firecracker fuse */}
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gradient-to-b from-yellow-300 to-orange-400 rounded-full"></div>
      {/* Spark at top */}
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-yellow-200 rounded-full"></div>
      {/* Firecracker stripes */}
      <div className="absolute top-2 left-0 right-0 h-0.5 bg-yellow-400"></div>
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-yellow-400"></div>
    </div>
    {/* Firecracker base */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-red-800 rounded-b-sm"></div>
  </motion.div>
);

// Rocket component with PNG-like styling
const Rocket = ({ x, y, delay }) => (
  <motion.div
    className="absolute w-5 h-16"
    style={{ left: x, top: y }}
    initial={{ y: '100vh', rotate: 0 }}
    animate={{ 
      y: ['100vh', '20vh', '-10vh'],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 0.8]
    }}
    transition={{ 
      duration: 2,
      delay: delay,
      ease: "easeOut"
    }}
  >
    {/* Rocket body */}
    <div className="w-full h-12 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700 rounded-full relative shadow-lg">
      {/* Rocket nose cone */}
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-blue-300"></div>
      {/* Rocket fins */}
      <div className="absolute bottom-0 left-0 w-2 h-3 bg-blue-600 rounded-b-sm transform rotate-12"></div>
      <div className="absolute bottom-0 right-0 w-2 h-3 bg-blue-600 rounded-b-sm transform -rotate-12"></div>
      {/* Rocket stripes */}
      <div className="absolute top-3 left-1 right-1 h-0.5 bg-yellow-400 rounded-full"></div>
      <div className="absolute top-6 left-1 right-1 h-0.5 bg-yellow-400 rounded-full"></div>
    </div>
    {/* Rocket flame */}
    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-gradient-to-t from-orange-400 via-red-500 to-yellow-300 rounded-full opacity-80"></div>
    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-gradient-to-t from-yellow-300 to-orange-400 rounded-full"></div>
  </motion.div>
);

// Chakri (Spinning wheel) component with PNG-like styling
const Chakri = ({ x, y, delay }) => (
  <motion.div
    className="absolute w-10 h-10"
    style={{ left: x, top: y }}
    initial={{ scale: 0, rotate: 0 }}
    animate={{ 
      scale: [0, 1, 1.2, 0],
      rotate: [0, 360, 720, 1080],
      y: [0, -20, -40, -60]
    }}
    transition={{ 
      duration: 2,
      delay: delay,
      ease: "easeOut"
    }}
  >
    {/* Outer ring */}
    <div className="w-full h-full border-4 border-yellow-400 rounded-full relative shadow-lg">
      {/* Inner ring */}
      <div className="absolute inset-2 border-3 border-orange-500 rounded-full"></div>
      {/* Center ring */}
      <div className="absolute inset-4 border-2 border-red-500 rounded-full"></div>
      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-300 rounded-full"></div>
      {/* Spokes */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-8 bg-yellow-400 rotate-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-8 bg-yellow-400 rotate-45"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-8 bg-yellow-400 rotate-90"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-8 bg-yellow-400 rotate-135"></div>
    </div>
  </motion.div>
);

// Anar (Fountain) component with PNG-like styling
const Anar = ({ x, y, delay }) => (
  <motion.div
    className="absolute w-8 h-8"
    style={{ left: x, top: y }}
    initial={{ scale: 0, opacity: 1 }}
    animate={{ 
      scale: [0, 1, 1.5, 2],
      opacity: [1, 1, 0.8, 0],
      y: [0, -10, -20, -30]
    }}
    transition={{ 
      duration: 1.8,
      delay: delay,
      ease: "easeOut"
    }}
  >
    {/* Anar base */}
    <div className="w-full h-6 bg-gradient-to-b from-green-500 via-green-600 to-green-700 rounded-full relative shadow-lg">
      {/* Anar fuse */}
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gradient-to-b from-yellow-300 to-orange-400 rounded-full"></div>
      {/* Spark at top */}
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-yellow-200 rounded-full"></div>
      {/* Anar stripes */}
      <div className="absolute top-1 left-1 right-1 h-0.5 bg-yellow-400 rounded-full"></div>
      <div className="absolute top-3 left-1 right-1 h-0.5 bg-yellow-400 rounded-full"></div>
    </div>
    {/* Anar stand */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-green-800 rounded-b-lg"></div>
  </motion.div>
);

// Diwali Lantern component with PNG-like styling
const Lantern = ({ x, y, delay }) => (
  <motion.div
    className="absolute w-8 h-12"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 1, 0.8, 1],
      scale: [0, 1, 0.9, 1]
    }}
    transition={{ 
      duration: 2,
      delay: delay,
      repeat: Infinity,
      repeatType: "reverse"
    }}
  >
    {/* Lantern body */}
    <div className="w-full h-10 bg-gradient-to-b from-red-500 via-red-600 to-orange-600 rounded-lg relative shadow-lg">
      {/* Lantern top */}
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-yellow-400 rounded-full"></div>
      {/* Lantern handle */}
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-yellow-600 rounded-full"></div>
      {/* Lantern windows */}
      <div className="absolute top-2 left-1 right-1 h-2 bg-yellow-300 rounded opacity-80"></div>
      <div className="absolute top-5 left-1 right-1 h-2 bg-yellow-300 rounded opacity-80"></div>
      {/* Lantern base */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-orange-700 rounded-b-lg"></div>
    </div>
  </motion.div>
);

// Diya component with PNG-like styling
const Diya = ({ x, y, delay }) => (
  <motion.div
    className="absolute w-8 h-8"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 1, 0.8, 1],
      scale: [0, 1, 0.9, 1]
    }}
    transition={{ 
      duration: 2,
      delay: delay,
      repeat: Infinity,
      repeatType: "reverse"
    }}
  >
    {/* Diya bowl */}
    <div className="w-full h-6 bg-gradient-to-b from-yellow-200 via-orange-300 to-orange-500 rounded-full relative shadow-lg">
      {/* Diya flame */}
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-gradient-to-b from-yellow-200 to-orange-400 rounded-full"></div>
      {/* Flame tip */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-100 rounded-full"></div>
      {/* Diya base */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-orange-600 rounded-b-full"></div>
    </div>
  </motion.div>
);

// Sparkle component with PNG-like styling
const Sparkle = ({ x, y, delay }) => (
  <motion.div
    className="absolute w-2 h-2"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 1, 0],
      scale: [0, 1, 0]
    }}
    transition={{ 
      duration: 1.5,
      delay: delay,
      repeat: Infinity,
      repeatDelay: 2
    }}
  >
    {/* Sparkle star */}
    <div className="w-full h-full relative">
      {/* Main sparkle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-yellow-300 rounded-full"></div>
      {/* Sparkle rays */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-yellow-400 rounded-full"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-yellow-400 rounded-full"></div>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0.5 bg-yellow-400 rounded-full"></div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-0.5 bg-yellow-400 rounded-full"></div>
    </div>
  </motion.div>
);

// Confetti component for celebration
const Confetti = ({ show }) => {
  if (!show) return null;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2"
          style={{
            left: Math.random() * 100 + '%',
            backgroundColor: ['#ffd700', '#ff6b6b', '#48dbfb', '#ff9ff3', '#54a0ff', '#00ff88'][Math.floor(Math.random() * 6)]
          }}
          initial={{ y: -100, rotate: 0 }}
          animate={{ 
            y: window.innerHeight + 100,
            rotate: 360,
            x: Math.random() * 200 - 100
          }}
          transition={{ 
            duration: 3,
            delay: Math.random() * 2,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

// Flower Rain component with beautiful flower animations
const FlowerRain = ({ show }) => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    if (!show) return;

    const createFlower = () => {
      const flowerTypes = ['🌸', '🌺', '🌻', '🌷', '🌹', '🌼', '🌿', '🍀'];
      const colors = ['#ff69b4', '#ff1493', '#ffc0cb', '#ffb6c1', '#ffa0d0', '#ff69b4', '#ff1493', '#ffc0cb'];
      
      return {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        y: -50,
        type: flowerTypes[Math.floor(Math.random() * flowerTypes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 20 + 15,
        rotation: Math.random() * 360,
        delay: Math.random() * 2
      };
    };

    const interval = setInterval(() => {
      setFlowers(prev => [...prev.slice(-20), createFlower()]);
    }, 200);

    const cleanup = setTimeout(() => {
      clearInterval(interval);
      setFlowers([]);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(cleanup);
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {flowers.map(flower => (
        <motion.div
          key={flower.id}
          className="absolute flower-item flower-glow"
          style={{
            left: flower.x,
            top: flower.y,
            fontSize: flower.size,
            color: flower.color,
            transform: `rotate(${flower.rotation}deg)`
          }}
          initial={{ 
            y: -50, 
            x: 0, 
            rotate: flower.rotation,
            opacity: 0,
            scale: 0.5
          }}
          animate={{ 
            y: window.innerHeight + 100,
            x: Math.random() * 200 - 100,
            rotate: flower.rotation + 360,
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.8]
          }}
          transition={{ 
            duration: 4 + Math.random() * 2,
            delay: flower.delay,
            ease: "easeInOut"
          }}
        >
          {flower.type}
        </motion.div>
      ))}
    </div>
  );
};

// Toran (Traditional Door Hanging) component
const Toran = ({ delay }) => (
  <motion.div
    className="absolute top-0 left-0 right-0 z-10 flex justify-center items-center overflow-hidden"
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: delay, duration: 1, ease: "easeOut" }}
  >
    <div className="relative w-full max-w-screen-lg h-16 md:h-20 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-b-full shadow-xl flex justify-around items-center px-4">
      {/* Main string/band */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-b-full opacity-75"></div>
      
      {/* Decorative elements (leaves, flowers, bells) */}
      {[...Array(7)].map((_, i) => (
        <motion.div
          key={i}
          className="relative w-8 h-8 md:w-10 md:h-10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            delay: delay + 0.5 + i * 0.1, 
            duration: 0.8, 
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2
          }}
        >
          {/* Flower */}
          <div className="absolute inset-0 bg-pink-400 rounded-full shadow-md flex items-center justify-center">
            <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
          </div>
          {/* Leaf */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full rotate-45"></div>
          {/* Bell */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-yellow-600 rounded-b-full shadow-sm">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-700 rounded-full"></div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

function App() {
  const [name, setName] = useState('');
  const [generatedUrl, setGeneratedUrl] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [language, setLanguage] = useState('en');
  const [particles, setParticles] = useState([]);
  const [fireworks, setFireworks] = useState([]);
  const [diyas, setDiyas] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [firecrackers, setFirecrackers] = useState([]);
  const [rockets, setRockets] = useState([]);
  const [chakris, setChakris] = useState([]);
  const [anars, setAnars] = useState([]);
  const [lanterns, setLanterns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [soundEnabled, setSoundEnabled] = useState(true); // Auto-enable by default
  const [showConfetti, setShowConfetti] = useState(false);
  const [showFlowerRain, setShowFlowerRain] = useState(false);
  const [audioRef, setAudioRef] = useState(null);
  
  const messageRef = useRef(null);
  const audioElementRef = useRef(null);

  // Initialize audio and festive decorations
  useEffect(() => {
    // Initialize background music
    const audio = new Audio('/music/Happy Diwali Festive Background Music  Diwali 2020  Diwali Special  Indian Instrumental Music.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    audio.preload = 'auto';
    audioElementRef.current = audio;

    // Add event listeners for debugging
    audio.addEventListener('loadstart', () => console.log('🎵 Audio: Loading started'));
    audio.addEventListener('canplay', () => console.log('🎵 Audio: Can play'));
    audio.addEventListener('canplaythrough', () => console.log('🎵 Audio: Can play through'));
    audio.addEventListener('error', (e) => {
      console.log('🎵 Audio error:', e);
      console.log('🎵 Audio error details:', e.target.error);
    });
    audio.addEventListener('play', () => console.log('🎵 Audio: Playing'));
    audio.addEventListener('pause', () => console.log('🎵 Audio: Paused'));
    audio.addEventListener('ended', () => console.log('🎵 Audio: Ended'));

    // Auto-play music if sound is enabled
    if (soundEnabled) {
      const playMusic = async () => {
        try {
          console.log('🎵 Attempting to play audio...');
          await audio.play();
          console.log('🎵 Audio started successfully');
        } catch (error) {
          console.log('🎵 Auto-play prevented by browser. User interaction required.', error);
        }
      };
      
      // Try to play after a short delay to ensure audio is loaded
      setTimeout(playMusic, 1000);
    }

    // Create particles
    const newParticles = [];
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4,
        x: Math.random() * window.innerWidth,
        color: ['#ffd700', '#ff6b6b', '#48dbfb', '#ff9ff3'][Math.floor(Math.random() * 4)]
      });
    }
    setParticles(newParticles);

    // Create diyas
    const newDiyas = [];
    for (let i = 0; i < 8; i++) {
      newDiyas.push({
        id: i,
        x: Math.random() * (window.innerWidth - 50),
        y: Math.random() * (window.innerHeight - 100) + 50,
        delay: Math.random() * 2
      });
    }
    setDiyas(newDiyas);

    // Create sparkles
    const newSparkles = [];
    for (let i = 0; i < 15; i++) {
      newSparkles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        delay: Math.random() * 3
      });
    }
    setSparkles(newSparkles);

    // Create firecrackers
    const newFirecrackers = [];
    for (let i = 0; i < 6; i++) {
      newFirecrackers.push({
        id: i,
        x: Math.random() * (window.innerWidth - 50),
        y: Math.random() * (window.innerHeight - 100) + 50,
        delay: Math.random() * 2
      });
    }
    setFirecrackers(newFirecrackers);

    // Create rockets
    const newRockets = [];
    for (let i = 0; i < 4; i++) {
      newRockets.push({
        id: i,
        x: Math.random() * (window.innerWidth - 50),
        y: window.innerHeight,
        delay: Math.random() * 3
      });
    }
    setRockets(newRockets);

    // Create chakris
    const newChakris = [];
    for (let i = 0; i < 5; i++) {
      newChakris.push({
        id: i,
        x: Math.random() * (window.innerWidth - 50),
        y: Math.random() * (window.innerHeight - 100) + 50,
        delay: Math.random() * 2.5
      });
    }
    setChakris(newChakris);

    // Create anars
    const newAnars = [];
    for (let i = 0; i < 4; i++) {
      newAnars.push({
        id: i,
        x: Math.random() * (window.innerWidth - 50),
        y: Math.random() * (window.innerHeight - 100) + 50,
        delay: Math.random() * 2
      });
    }
    setAnars(newAnars);

    // Create lanterns
    const newLanterns = [];
    for (let i = 0; i < 6; i++) {
      newLanterns.push({
        id: i,
        x: Math.random() * (window.innerWidth - 50),
        y: Math.random() * (window.innerHeight - 100) + 50,
        delay: Math.random() * 1.5
      });
    }
    setLanterns(newLanterns);

    // Check for URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const urlName = urlParams.get('name');
    const urlLang = urlParams.get('lang');
    
    if (urlName) {
      setDisplayName(urlName);
      setShowMessage(true);
      if (urlLang && ['en', 'hi', 'gu'].includes(urlLang)) {
        setLanguage(urlLang);
      }
      triggerFireworks();
    }

    // Cleanup audio on unmount
    return () => {
      if (audioElementRef.current) {
        audioElementRef.current.pause();
        audioElementRef.current = null;
      }
    };
  }, [soundEnabled]);

  // Trigger fireworks animation with confetti
  const triggerFireworks = () => {
    const newFireworks = [];
    for (let i = 0; i < 12; i++) {
      newFireworks.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * (window.innerHeight * 0.6),
        color: ['#ffd700', '#ff6b6b', '#48dbfb', '#ff9ff3', '#54a0ff'][Math.floor(Math.random() * 5)]
      });
    }
    setFireworks(newFireworks);
    
    // Trigger confetti and flower rain
    setShowConfetti(true);
    setShowFlowerRain(true);
    setTimeout(() => {
      setShowConfetti(false);
      setShowFlowerRain(false);
    }, 3000);
    
    // Clear fireworks after animation
    setTimeout(() => setFireworks([]), 1000);
  };



  // Trigger additional Diwali effects
  const triggerDiwaliEffects = () => {
    // Create burst of firecrackers
    const newFirecrackers = [];
    for (let i = 0; i < 8; i++) {
      newFirecrackers.push({
        id: Date.now() + i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * (window.innerHeight * 0.8),
        delay: Math.random() * 0.5
      });
    }
    setFirecrackers(prev => [...prev, ...newFirecrackers]);

    // Create rockets
    const newRockets = [];
    for (let i = 0; i < 6; i++) {
      newRockets.push({
        id: Date.now() + i + 100,
        x: Math.random() * window.innerWidth,
        y: window.innerHeight,
        delay: Math.random() * 0.3
      });
    }
    setRockets(prev => [...prev, ...newRockets]);

    // Create chakris
    const newChakris = [];
    for (let i = 0; i < 6; i++) {
      newChakris.push({
        id: Date.now() + i + 200,
        x: Math.random() * window.innerWidth,
        y: Math.random() * (window.innerHeight * 0.7),
        delay: Math.random() * 0.4
      });
    }
    setChakris(prev => [...prev, ...newChakris]);

    // Create anars
    const newAnars = [];
    for (let i = 0; i < 5; i++) {
      newAnars.push({
        id: Date.now() + i + 300,
        x: Math.random() * window.innerWidth,
        y: Math.random() * (window.innerHeight * 0.6),
        delay: Math.random() * 0.6
      });
    }
    setAnars(prev => [...prev, ...newAnars]);

    // Clear effects after animation
    setTimeout(() => {
      setFirecrackers([]);
      setRockets([]);
      setChakris([]);
      setAnars([]);
    }, 3000);
  };

  // Show language selection modal
  const showLanguageSelection = () => {
    if (!name.trim()) return;
    setShowLanguageModal(true);
  };

  // Generate shareable URL with selected language
  const generateUrl = async (selectedLang) => {
    setIsLoading(true);
    setShowLanguageModal(false);
    
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const baseUrl = window.location.origin;
    const newUrl = `${baseUrl}/?name=${encodeURIComponent(name.trim())}&lang=${selectedLang}`;
    setGeneratedUrl(newUrl);
    triggerFireworks();
    
    // Play celebration sound if enabled
    if (soundEnabled) {
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
      } catch (error) {
        console.log('Audio not supported');
      }
    }

    // Ensure background music is playing
    if (audioElementRef.current && soundEnabled) {
      audioElementRef.current.play().catch(error => {
        console.log('Background music play prevented by browser');
      });
    }
    
    setIsLoading(false);
  };

  // Copy URL to clipboard
  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(generatedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Share URL
  const shareUrl = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Diwali Greetings',
          text: `Check out this personalized Diwali greeting from ${name}!`,
          url: generatedUrl
        });
      } else {
        await copyUrl();
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      }
    } catch (err) {
      console.error('Failed to share: ', err);
    }
  };

  // Get localized content
  const getLocalizedContent = (lang) => {
    const content = {
      en: {
        title: "🪔 Diwali Greetings 🪔",
        subtitle: "Create your personalized Diwali wishes",
        placeholder: "Enter your name",
        button: "Send / Generate Link",
        loading: "Generating...",
        copyButton: "Copy Link",
        shareButton: "Share",
        copied: "✓ Copied!",
        shared: "✓ Shared!",
        createButton: "Create Your Own Greeting",
        footer: "Made with ❤️ by Diwali Greetings Team",
        greeting: (name) => `🎉 ${name} wishes you and your family a very Happy Diwali! 🎉`
      },
      hi: {
        title: "🪔 दिवाली शुभकामनाएं 🪔",
        subtitle: "अपनी व्यक्तिगत दिवाली शुभकामनाएं बनाएं",
        placeholder: "अपना नाम दर्ज करें",
        button: "भेजें / लिंक बनाएं",
        loading: "बन रहा है...",
        copyButton: "लिंक कॉपी करें",
        shareButton: "शेयर करें",
        copied: "✓ कॉपी हो गया!",
        shared: "✓ शेयर हो गया!",
        createButton: "अपनी शुभकामना बनाएं",
        footer: "❤️ से बनाया गया Diwali Greetings Team द्वारा",
        greeting: (name) => `🎉 ${name} की तरफ़ से आपको और आपके परिवार को दिवाली की हार्दिक शुभकामनाएँ! 🎉`
      },
      gu: {
        title: "🪔 દિવાળી શુભેચ્છાઓ 🪔",
        subtitle: "તમારી વ્યક્તિગત દિવાળી શુભેચ્છાઓ બનાવો",
        placeholder: "તમારું નામ દાખલ કરો",
        button: "મોકલો / લિંક બનાવો",
        loading: "બનાવી રહ્યા છીએ...",
        copyButton: "લિંક કોપી કરો",
        shareButton: "શેર કરો",
        copied: "✓ કોપી થઈ ગઈ!",
        shared: "✓ શેર થઈ ગઈ!",
        createButton: "તમારી શુભેચ્છા બનાવો",
        footer: "❤️ થી બનાવ્યું Diwali Greetings Team દ્વારા",
        greeting: (name) => `🎉 ${name} તરફથી તમને અને તમારા કુટુંબને દિવાળી ની હાર્દિક શુભેચ્છાઓ! 🎉`
      }
    };
    return content[lang] || content.en;
  };

  // Enhanced typewriter effect for message with better visibility
  const typewriterMessage = (text, element) => {
    let i = 0;
    element.innerHTML = ''; // Clear content
    element.style.opacity = '1';
    element.style.color = '#ffffff';
    element.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(255, 255, 255, 0.3)';
    
    const timer = setInterval(() => {
      if (i < text.length) {
        const char = text.charAt(i);
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.transition = 'all 0.3s ease';
        span.style.color = '#ffffff';
        span.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(255, 255, 255, 0.3)';
        element.appendChild(span);
        
        // Animate the character in
        setTimeout(() => {
          span.style.opacity = '1';
          span.style.transform = 'translateY(0)';
        }, 10);
        
        i++;
      } else {
        clearInterval(timer);
        // Add final sparkle effect
        addSparkleEffect(element);
      }
    }, 80);
  };

  // Add sparkle effect to completed message
  const addSparkleEffect = (element) => {
    const sparkles = ['✨', '🌟', '💫', '⭐'];
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const sparkle = document.createElement('span');
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.position = 'absolute';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.fontSize = '1.5rem';
        sparkle.style.animation = 'sparkle 2s ease-out forwards';
        sparkle.style.pointerEvents = 'none';
        element.style.position = 'relative';
        element.appendChild(sparkle);
        
        setTimeout(() => {
          if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
          }
        }, 2000);
      }, i * 500);
    }
  };

  useEffect(() => {
    if (showMessage && messageRef.current) {
      messageRef.current.textContent = '';
      const localizedContent = getLocalizedContent(language);
      const message = localizedContent.greeting(displayName);
      typewriterMessage(message, messageRef.current);
    }
  }, [showMessage, displayName, language]);

  const localizedContent = getLocalizedContent(language);

  return (
    <div className="min-h-screen bg-diwali-gradient-2 relative overflow-hidden">
      {/* Toran (Traditional Door Hanging) */}
      <Toran delay={0.5} />

      {/* Language Selector */}
      <div className="absolute top-20 right-4 z-20">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="en">🇬🇧 English</option>
          <option value="hi">🇮🇳 हिंदी</option>
          <option value="gu">🇬🇺 ગુજરાતી</option>
        </select>
      </div>

      {/* Background Particles */}
      <div className="particle-container">
        {particles.map(particle => (
          <Particle key={particle.id} {...particle} />
        ))}
      </div>

      {/* Fireworks */}
      <AnimatePresence>
        {fireworks.map(firework => (
          <Firework key={firework.id} {...firework} />
        ))}
      </AnimatePresence>

      {/* Firecrackers */}
      <AnimatePresence>
        {firecrackers.map(firecracker => (
          <Firecracker key={firecracker.id} {...firecracker} />
        ))}
      </AnimatePresence>

      {/* Rockets */}
      <AnimatePresence>
        {rockets.map(rocket => (
          <Rocket key={rocket.id} {...rocket} />
        ))}
      </AnimatePresence>

      {/* Chakris */}
      <AnimatePresence>
        {chakris.map(chakri => (
          <Chakri key={chakri.id} {...chakri} />
        ))}
      </AnimatePresence>

      {/* Anars */}
      <AnimatePresence>
        {anars.map(anar => (
          <Anar key={anar.id} {...anar} />
        ))}
      </AnimatePresence>

      {/* Lanterns */}
      {lanterns.map(lantern => (
        <Lantern key={lantern.id} {...lantern} />
      ))}

      {/* Diyas */}
      {diyas.map(diya => (
        <Diya key={diya.id} {...diya} />
      ))}

      {/* Sparkles */}
      {sparkles.map(sparkle => (
        <Sparkle key={sparkle.id} {...sparkle} />
      ))}

      {/* Confetti */}
      <Confetti show={showConfetti} />

      {/* Flower Rain */}
      <FlowerRain show={showFlowerRain} />

      {/* Sound Toggle */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
        <button
          onClick={async () => {
            const newSoundState = !soundEnabled;
            setSoundEnabled(newSoundState);
            
            if (audioElementRef.current) {
              if (newSoundState) {
                try {
                  console.log('User clicked to play audio...');
                  await audioElementRef.current.play();
                  console.log('Audio started by user interaction');
                } catch (error) {
                  console.log('Playback error:', error);
                  // Try to create a new audio instance
                  const newAudio = new Audio('/music/Happy Diwali Festive Background Music  Diwali 2020  Diwali Special  Indian Instrumental Music.mp3');
                  newAudio.loop = true;
                  newAudio.volume = 0.3;
                  audioElementRef.current = newAudio;
                  try {
                    await newAudio.play();
                    console.log('New audio instance started');
                  } catch (retryError) {
                    console.log('Retry failed:', retryError);
                  }
                }
              } else {
                audioElementRef.current.pause();
                console.log('Audio paused by user');
              }
            }
          }}
          className={`sound-toggle p-2 rounded-lg backdrop-blur-sm border transition-all duration-300 ${
            soundEnabled 
              ? 'bg-green-500/20 border-green-400 text-green-300' 
              : 'bg-white/20 border-white/30 text-white'
          }`}
          title={soundEnabled ? 'Disable Background Music' : 'Enable Background Music'}
        >
          {soundEnabled ? '🔊' : '🔇'}
        </button>
        
        {/* Debug Audio Button */}
        <button
          onClick={() => {
            console.log('🎵 Testing audio...');
            console.log('🎵 Audio element:', audioElementRef.current);
            console.log('🎵 Sound enabled:', soundEnabled);
            if (audioElementRef.current) {
              console.log('🎵 Audio src:', audioElementRef.current.src);
              console.log('🎵 Audio readyState:', audioElementRef.current.readyState);
              console.log('🎵 Audio paused:', audioElementRef.current.paused);
              console.log('🎵 Audio volume:', audioElementRef.current.volume);
            }
          }}
          className="sound-toggle p-1 rounded-lg backdrop-blur-sm border bg-blue-500/20 border-blue-400 text-blue-300 text-xs"
          title="Debug Audio"
        >
          🎵
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card max-w-md w-full p-8 text-center"
        >
          {!showMessage ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* Header */}
              <motion.h1 
                className="text-2xl md:text-3xl font-great-vibes text-white mb-4 text-glow leading-tight"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
              >
                {localizedContent.title}
              </motion.h1>
              
              <motion.p 
                className="text-white/90 mb-8 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {localizedContent.subtitle}
              </motion.p>

              {/* Input Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="space-y-6"
              >
                <div className="mb-6">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={localizedContent.placeholder}
                    className="w-full px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-center"
                    onKeyPress={(e) => e.key === 'Enter' && showLanguageSelection()}
                  />
                </div>

                <motion.button
                  onClick={showLanguageSelection}
                  disabled={!name.trim() || isLoading}
                  className={`glow-button w-full ${(!name.trim() || isLoading) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {localizedContent.loading}
                    </span>
                  ) : (
                    localizedContent.button
                  )}
                </motion.button>
              </motion.div>

              {/* Generated URL Section */}
              {generatedUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 space-y-4"
                >
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <p className="text-white/80 text-sm mb-2 text-center">Your personalized link:</p>
                    <p className="text-white text-xs break-all text-center leading-relaxed">{generatedUrl}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      onClick={copyUrl}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {copied ? localizedContent.copied : localizedContent.copyButton}
                    </motion.button>
                    
                    <motion.button
                      onClick={shareUrl}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {shared ? localizedContent.shared : localizedContent.shareButton}
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Personalized Message */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <h2 className="text-xl md:text-2xl font-great-vibes text-white mb-6 text-glow leading-tight">
                  🎉 Happy Diwali! 🎉
                </h2>
                
                <div className="bg-gradient-to-br from-black/40 to-black/20 rounded-2xl p-8 border border-white/20 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                  {/* Darker background for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20"></div>
                  
                  {/* Message container */}
                  <div className="relative z-10">
                    <p 
                      ref={messageRef}
                      className="text-white text-xl md:text-2xl leading-relaxed text-center font-semibold"
                      style={{ 
                        minHeight: '100px',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(255, 255, 255, 0.3)',
                        animation: 'messageFloat 4s ease-in-out infinite'
                      }}
                    />
                  </div>
                  
                  {/* Decorative elements with better visibility */}
                  <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
                  <div className="absolute top-4 right-4 w-1 h-1 bg-orange-300 rounded-full animate-ping delay-100"></div>
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-red-300 rounded-full animate-ping delay-200"></div>
                  <div className="absolute bottom-2 right-2 w-1 h-1 bg-yellow-200 rounded-full animate-ping delay-300"></div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="space-y-4"
              >
                <motion.button
                  onClick={() => {
                    setShowMessage(false);
                    setDisplayName('');
                    setGeneratedUrl('');
                    window.history.pushState({}, '', '/');
                  }}
                  className="glow-button w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {localizedContent.createButton}
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Language Selection Modal */}
      <AnimatePresence>
        {showLanguageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowLanguageModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass-card max-w-md w-full p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-great-vibes text-white mb-4 text-glow leading-tight">
                🌍 Choose Language
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Select the language for your Diwali greeting
              </p>
              
              <div className="space-y-4">
                <motion.button
                  onClick={() => generateUrl('en')}
                  className="w-full p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-2xl">🇬🇧</span>
                  <span className="text-base font-semibold">English</span>
                </motion.button>
                
                <motion.button
                  onClick={() => generateUrl('hi')}
                  className="w-full p-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center space-x-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-2xl">🇮🇳</span>
                  <span className="text-base font-semibold">हिंदी</span>
                </motion.button>
                
                <motion.button
                  onClick={() => generateUrl('gu')}
                  className="w-full p-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-2xl">🇬🇺</span>
                  <span className="text-base font-semibold">ગુજરાતી</span>
                </motion.button>
              </div>
              
              <motion.button
                onClick={() => setShowLanguageModal(false)}
                className="mt-6 px-6 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 left-0 right-0 text-center z-10"
      >
        <p className="text-white/70 text-sm glow leading-relaxed">
          {localizedContent.footer}
        </p>
      </motion.footer>
    </div>
  );
}

export default App;
