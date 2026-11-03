export const Footer = () => {
  return (
    <footer className="text-center text-muted-foreground border-t border-border/30 pt-8 pb-12 mt-16 md:mt-24">
      <div className="container mx-auto px-4">
        <p className="text-sm sm:text-base">© {new Date().getFullYear()} Rohit Malyadri. All rights reserved.</p>
        <p className="text-xs text-muted-foreground/70 mt-2">
          Crafted with React, Vite & Tailwind CSS. Hosted on GitHub Pages.
        </p>
      </div>
    </footer>
  );
};

