import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
    return (
        <>
            <div className="flex flex-col">
                <div className="p-2">
                    <Header />
                </div> 
                <main className="mt-3">{children}</main>
                
                <Footer />
            </div>
        </>
    )
}