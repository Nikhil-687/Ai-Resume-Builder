import '@/app/globals.css'; // Correct path for global.css
import { Navbar, Footer } from '@/components';


interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <html lang="en">
            <body className="bg-gray-100 min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow container mx-auto p-4">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
};

export default Layout;
