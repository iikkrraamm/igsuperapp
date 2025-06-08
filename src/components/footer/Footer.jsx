import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-600 border-t">
            <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    {/* Left: Brand */}
                    <div className="text-sm text-center sm:text-left">
                        © {new Date().getFullYear()} <span className="font-semibold text-amber-500">IG Superapp</span>. All rights reserved.
                    </div>

                    {/* Right: Social Links
                    <div className="flex gap-4 text-xl justify-center">
                        <a href="https://facebook.com" className="hover:text-amber-500 transition-colors duration-150">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" className="hover:text-amber-500 transition-colors duration-150">
                            <FaTwitter />
                        </a>
                        <a href="https://github.com" className="hover:text-amber-500 transition-colors duration-150">
                            <FaGithub />
                        </a>
                    </div>
                    */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
