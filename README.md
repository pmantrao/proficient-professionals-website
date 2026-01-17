Proficient Professionals Inc. - Professional Website
A complete, modern, multi-page website for Proficient Professionals Inc., providing fractional CTO services and strategic technology leadership.

🚀 Live Site
Visit: proficient-professionals.com

📁 File Structure
├── index.html          # Homepage
├── services.html       # Detailed services page
├── case-studies.html   # Client success stories
├── about.html          # About Prishant Mantrao
├── contact.html        # Contact form
├── styles.css          # All styling
├── script.js           # Interactive functionality
└── README.md           # This file
🎨 Adding Professional Images
The website uses placeholder emojis/icons. To add professional images:

Free Stock Photo Resources (CC0 License - Free for Commercial Use):
Unsplash (https://unsplash.com)
Search: "technology", "business professional", "startup"
Best for: Hero images, team photos
Pexels (https://www.pexels.com)
Search: "business meeting", "office", "tech startup"
Best for: General business imagery
Pixabay (https://pixabay.com)
Search: "technology", "professional", "data"
Best for: Icons and simple graphics
Startup Stock Photos (https://startupstockphotos.com)
Specifically designed for tech/startup websites
Best for: Modern office, team collaboration
How to Add Images:
For Hero Section (Homepage):

Download a professional tech/business image
Upload to GitHub repository
In index.html, find the .hero section
Add background image:
css
.hero {
    background-image: url('hero-image.jpg');
    background-size: cover;
    background-position: center;
}
For Your Profile Photo (About Page):

Upload your professional headshot to GitHub (name it profile.jpg)
In about.html, replace the profile placeholder with:
html
<img src="profile.jpg" alt="Prishant Mantrao" style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover;">
🎨 Customization
Change Colors:
Edit styles.css, lines 8-13:

css
:root {
    --primary: #0066cc;      /* Your brand blue */
    --secondary: #00c9ff;    /* Accent color */
    --dark: #1a1a2e;         /* Dark backgrounds */
}
Update Content:
Simply edit the HTML files - all content is clearly labeled with comments.

Add Your Logo:
Upload your logo file (e.g., logo.png) to GitHub
In each HTML file, replace the text logo:
html
<a href="index.html" class="logo">
    <img src="logo.png" alt="Proficient Professionals" style="height: 40px;">
</a>
📧 Contact Form
The contact form works using:

Local Storage: Saves submissions in browser localStorage
Email Client: Opens user's email client with pre-filled data
View Form Submissions:
Open browser console (F12) and type:

javascript
JSON.parse(localStorage.getItem('contactSubmissions'))
To Integrate with Email Service (Optional):
Replace the form handler in script.js with services like:

Formspree (https://formspree.io) - Free tier available
EmailJS (https://www.emailjs.com) - 200 emails/month free
Web3Forms (https://web3forms.com) - Free, no account needed
🔄 How to Update
Go to your GitHub repository
Click on the file you want to edit
Click the pencil icon (Edit)
Make changes
Scroll down and click "Commit changes"
Changes go live in 1-2 minutes
📱 Features
✅ Fully responsive (mobile-friendly)
✅ Clean, modern design
✅ SEO optimized
✅ Fast loading
✅ Working contact form
✅ Smooth animations
✅ Professional layout
✅ 5 complete pages
🛠️ Technologies Used
HTML5
CSS3 (with CSS Variables)
JavaScript (Vanilla)
GitHub Pages (hosting)
📊 Browser Support
Chrome (latest)
Firefox (latest)
Safari (latest)
Edge (latest)
Mobile browsers
📄 License
© 2025 Proficient Professionals Inc. All rights reserved.

👤 Author
Prishant Mantrao

Email: prishant@proficient-professionals.com
Phone: 614-352-4921
LinkedIn: prishant-mantrao
🆘 Support
For issues or questions about the website:

Check the GitHub deployment guide
GitHub Issues: Create an issue in this repository
Email: prishant@proficient-professionals.com
Built with ❤️ for Proficient Professionals Inc.

