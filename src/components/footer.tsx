export const Footer = () => {
    return (
        <footer className="bg-[#222222] text-white m-2 p-4 justify-center flex flex-col items-center">
            <p>&copy; 2025 by Openlake Devlabs. All rights reserved.</p>
            <nav>
                <strong className="m-2 flex justify-center">Related Links</strong>
                <ul className="flex space-x-4 mt-2 flex-wrap justify-center text-yellow-500">
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="privacy.html">Privacy Policy</a></li>
                </ul>
            </nav>
        </footer>
    );
}