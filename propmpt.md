Full Prompt for Diwali Greeting React.js Website

Prompt:

Create a fully responsive single-page Diwali Greeting Website using React.js and Tailwind CSS that fulfills all the following design, functionality, and language requirements.

🌟 UI & Animation Requirements

Use a beautiful, festive Diwali theme with colorful lighting, diyas, lanterns, sparkles, and fireworks animations.

The background should be vibrant and animated, using gradients or particle effects to represent a festive atmosphere.

Add smooth CSS and JS animations — glowing diyas, flickering lights, sparkles, and subtle motion.

The main content (input form or message) should be inside a glassmorphism-style card with glow and soft shadows.

Use Google Fonts such as Poppins and Great Vibes for a festive look.

Make the layout 100% responsive for desktop, tablet, and mobile screens.

🪔 Core Functionality

Input + URL Generator

Show an input box with placeholder text: “Enter your name” and a “Send / Generate Link” button.

When the user enters a name and clicks Send, the app should generate a unique shareable URL that includes the name and selected language:

https://mydiwaligreetings.com/?name=Mahipal&lang=gu

Copy Link & Share

Show Copy Link and Share buttons after generating the link.

Copy Link should use navigator.clipboard.

Share should use the Web Share API (with a fallback to copy).

Display Personalized Message

When anyone opens the generated link:

The site detects the name and lang parameters.

Shows a personalized Diwali message such as:

🎉 “Mahipal taraf thi tamne ane tamara family ne Diwali ni Hardik Shubhkamna!” 🎉

If no name is in the URL, show the input box again.

Add Animations

Animate the personalized message with a typewriter or fade-in effect.

💫 Language Support (Multilingual)

The site must support three languages:

🇬🇧 English

🇮🇳 Hindi

🇬🇺 Gujarati

There should be a language dropdown (English / Hindi / Gujarati) visible at all times.

The greeting message, placeholders, and button texts should change based on the selected language.

The website should detect the ?lang= parameter from the URL and display content accordingly.

Example messages:

English: “🎉 {name} wishes you and your family a very Happy Diwali! 🎉”

Hindi: “🎉 {name} की तरफ़ से आपको और आपके परिवार को दिवाली की हार्दिक शुभकामनाएँ! 🎉”

Gujarati: “🎉 {name} તરફથી તમને અને તમારા કુટુંબને દિવાળી ની હાર્દિક શુભેચ્છાઓ! 🎉”

🎯 Meta Information (SEO)

Title: ✨ Diwali Greetings – Send Personalized Wishes Online ✨

Description: Celebrate Diwali with joy and color! Create and share your own personalized Diwali greeting with animated lights, diyas, and love.

Add proper <meta> tags for:

og:title

og:description

og:image

favicon

⚙️ Tech Stack & Guidelines

Use React.js (Functional Components + Hooks).

Use Tailwind CSS for styling and responsiveness.

Use React Router or URLSearchParams to handle the name and lang parameters.

Optional: Use Framer Motion or Lottie for light/firework animations.

Code should be clean, well-commented, and production-ready.

Keep everything in a single file (App.jsx) for demo simplicity.

Create a companion index.css file for Tailwind setup and custom animations.

🧨 Expected Output

✅ A fully functional, animated, responsive single-page website that:

Detects and displays user name and language from the URL.

Lets users enter their name, select language, and generate a shareable greeting link.

Includes copy and share buttons.

Shows a festive animated background and glowing Diwali decorations.

Displays multilingual greetings with fade-in or typewriter effects.

Shows footer text: “Made with ❤️ by [Your Name]”.

Works perfectly on mobile, tablet, and desktop.

🧭 Example URL Behaviors

/?name=Mahipal&lang=gu → Shows Gujarati greeting with Mahipal’s name.

/?name=Karan&lang=hi → Shows Hindi greeting from Karan.

/ → Shows input form + language selector.

Final Deliverables:

App.jsx (React component with all logic)

index.css (Tailwind setup + custom CSS animations)

SEO meta tags included inside public/index.html

Optional Enhancements (if possible):

Add subtle background music toggle (Diwali instrumental).

Add floating diyas or sparkling particle effects using CSS or canvas.

Add a fireworks burst animation when generating the link or displaying the message.
