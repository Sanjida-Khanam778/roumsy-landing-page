import { Mail, Phone } from 'lucide-react';
import React from 'react';
// import { Phone, Mail, Linkedin, Instagram, Twitter, LinkedinIcon } from 'lucide-react';

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-blue-200 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Brand Section */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-800 rounded flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <span className="text-blue-800 font-bold text-xl">LearnGPT</span>
            </div>
            
            <p className="text-gray-700 text-sm leading-relaxed">
              AI - powered learning platform for the modern world.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center text-gray-700 text-sm">
                <Phone className="w-4 h-4 mr-2 text-blue-600" />
                <span>(406) 555-0120</span>
              </div>
              
              <div className="flex items-center text-gray-700 text-sm">
                <Mail className="w-4 h-4 mr-2 text-blue-600" />
                <span>Georgia.Young@example.Com</span>
              </div>
            </div>
            
            {/* Social Media */}
            {/* <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                <LinkedinIcon className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div> */}
          </div>
          
          {/* Platform Section */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 text-sm hover:text-blue-600 transition-colors">Topics</a></li>
              <li><a href="#" className="text-gray-700 text-sm hover:text-blue-600 transition-colors">Exams</a></li>
              <li><a href="#" className="text-gray-700 text-sm hover:text-blue-600 transition-colors">AI Assistant</a></li>
              <li><a href="#" className="text-gray-700 text-sm hover:text-blue-600 transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 text-sm hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-700 text-sm hover:text-blue-600 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-700 text-sm hover:text-blue-600 transition-colors">Features</a></li>
            </ul>
          </div>
          
          {/* Legal Section & CTA */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 text-sm hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-700 text-sm hover:text-blue-600 transition-colors">Terms Of Service</a></li>
                <li><a href="#" className="text-gray-700 text-sm hover:text-blue-600 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            
            {/* CTA */}
            <div className="text-right">
              <p className="text-gray-800 font-medium mb-3">Start learning smarter today.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                Join now
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="border-t border-blue-300 mt-8 pt-6 text-center">
          <p className="text-gray-600 text-xs">
            © All rights reserved LearnGPT 2024
          </p>
        </div>
      </div>
    </footer>
  );
};



export default Footer;