import { Footer, Header } from "../organisms";

interface BaseLayoutProps {
    children: React.ReactNode;
    isHome?: boolean;
}

const BaseLayout = ({ children, isHome=false }: BaseLayoutProps) => { 
    return (
        <div className={`baseLayout ${isHome ? "baseLayout--gradient": "baseLayout--normal"}`}>
            <div className="baseLayout--gradient--aqua"></div>
            <div className="baseLayout--gradient--violet"></div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};
export default BaseLayout;