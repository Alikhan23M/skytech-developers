// In the 'contact' layout or a server component (e.g., `app/contact/layout.tsx`)

export const metadata = {
    title: "Contact SkyTech Developers | Get in Touch",
    description: "Have a project in mind? Contact SkyTech Developers for top-notch web development, cybersecurity, and software solutions. Let's build something amazing together!",
    keywords: "Contact SkyTech Developers, web development agency in Pakistan, best web agency, hire developers, software development company, IT solutions, cybersecurity services, tech support, website development consultation",
    author: "SkyTech Developers",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-4 py-6">
            {children}
        </div>
    );
}
