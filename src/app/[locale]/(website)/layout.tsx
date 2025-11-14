import { Header, Footer } from '@/components/website/layout';

export default function WebSiteLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const nemzeroImage = '/images/backgrounds/bg-wrap.png';
    return (
        <div className="relative">
            <Header />
            <div className="absolute inset-0 z-0 overflow-hidden bg-[#F0EEEA]">
                <div
                    className="absolute inset-0 bg-auto bg-top-right lg:bg-cover lg:bg-top"
                    style={{
                        backgroundImage: `url(${nemzeroImage})`
                    }}
                />

                <div className="absolute inset-0" />
            </div>
            <div className="z-2">{children}</div>
            <Footer />
        </div>
    );
}
