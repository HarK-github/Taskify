import React from "react";
import "../htmlImplementation/style/footer.css"; // Adjust the path as necessary

const Footer: React.FC = () => {

  return (
    <footer>
  <p>&copy; 2025 by Openlake Devlabs. All rights reserved.</p>
  <nav>
    <strong>Related Links</strong>
    <ul>
      <li><a href="about.html">About Us</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="privacy.html">Privacy Policy</a></li>
    </ul>
  </nav>
</footer>
);
};

export default Footer;
