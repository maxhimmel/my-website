export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70 text-sm">&copy; {currentYear} Max Himmel. All rights reserved.</p>

          <div className="mt-4 md:mt-0">
            <p className="text-foreground/70 text-sm">Designed & Built with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
