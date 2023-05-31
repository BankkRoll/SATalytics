// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-center text-white">
            <h6 className="mb-3">© {new Date().getFullYear()} SATalytics</h6>
            <p>All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://twitter.com/bankkroll_eth" className="text-white">
              Developer Twitter
            </a>
            <a href="https://github.com/BankkRoll/SATalytics" className="text-white">
              Project GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
