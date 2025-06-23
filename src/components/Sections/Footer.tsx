export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="text-center text-sm text-gray-500 py-6">
            <p>© {year} Bertil Frigaard. All rights reserved.</p>
        </footer>
    );
}
