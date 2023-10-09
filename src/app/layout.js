import './globals.css'
import { Poppins } from 'next/font/google'
import { Navbar } from '@/components/navbar/navbar'
import { Footer } from '@/components/footer/footer';

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500'],
	variable: '--poppins',
	preload: true,
});

export const metadata = {
    title: 'Coca | Streamline Your Business Operations',
    description: 'Elevate your business with Coca - The perfect tool to modernize your operations. Discover the benefits of our cutting-edge POS solution.',
    keywords: ['Coca POS', 'Point of Sale System', 'POS Software', 'Business Management', 'Inventory Management', 'Sales Optimization']
}

// Home Page Layout

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className} data-font={poppins.style.fontFamily}>
				<header>
					<Navbar/>
				</header>
				{children}
				<footer>
					<Footer/>
				</footer>
			</body>
		</html>
	)
}
