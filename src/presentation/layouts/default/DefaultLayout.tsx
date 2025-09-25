
import Header from "../sections/default/header/Header";
import Footer from "../sections/default/footer/Footer";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default DefaultLayout;
