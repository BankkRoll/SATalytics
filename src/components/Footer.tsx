// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-center text-white">
            <h6 className="mb-3">© {new Date().getFullYear()} My App</h6>
            <p>All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-4">
            {/* Add social media links or other relevant links here */}
            <a href="https://twitter.com" className="text-white">
              Twitter
            </a>
            <a href="https://github.com" className="text-white">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
