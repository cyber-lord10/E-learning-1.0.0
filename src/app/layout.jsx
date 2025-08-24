import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { ThemeProvider } from 'next-themes';
import ScrollToTop from '@/components/ScrollToTop';
const font = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

// Explicit metadata export makes the favicon and other head metadata easy to locate and change.
export const metadata = {
	icons: {
		icon: '/STHINMS.jpg', // served from root or src/app/STHINMS.jpg
		apple: '/STHINMS.jpg',
		shortcut: '/STHINMS.jpg',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${font.className}`}>
				<ThemeProvider
					attribute='class'
					enableSystem={true}
					defaultTheme='light'
				>
					<Header />
					{children}
					<Footer />
					<ScrollToTop />
				</ThemeProvider>
			</body>
		</html>
	);
}
