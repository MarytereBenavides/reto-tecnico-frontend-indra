import { Footer, Header } from "@/components/organisms";

interface BaseLayoutProps {
    children: React.ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => { 
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};
export default BaseLayout;