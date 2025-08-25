const { animations, keyframes } = require('framer-motion');
const { transform } = require('next/dist/build/swc');

const config = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			boxShadow: {
				'input-shadow': '0 63px 59px rgba(20, 83, 45, .1)',
				'course-shadow': '0 40px 20px rgba(0,0,0,.15)',
				'testimonial-shadow1': '0 5.54348px 11.087px rgba(89,104,118,.05)',
				'testimonial-shadow2':
					'5.54348px 38.8043px 110.87px rgba(89,104,118,.15)',
			},
			colors: {
				primary: '#16a34a',
				secondary: '#14532d',
				grey: '#57595f',
				slateGray: '#f6faff',
				deepSlate: '#d5effa',
				success: '#43c639',
				midnight_text: '#222c44',
			},
			spacing: {
				'75%': '75%',
			},
			backgroundImage: {
				'newsletter-bg': `url('/images/newsletter/bgFile.png')`,
				'newsletter-bg-2': `url('/E-learning/images/newsletter/bgFile.png')`,
			},
			keyframes: {
        'in-slide': {
          '0%': { transform: 'translate(100px, 20px)', opacity: '0' },
          '100%': { transform: 'translate(0, 0)', opacity: '1' },
        }
      },
      animation: {
        'in-slide': 'in-slide 2s ease-in-out forwards',
      }
		},
	},
	plugins: [],
};
module.exports = config;
