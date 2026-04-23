import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-6 text-sm">
          <div className="font-bold">@mokhtarsays_</div>
          <div className="hidden md:block text-center text-muted-foreground">
            Content That Converts.
          </div>
          <div className="flex justify-end">
            <a
              href="https://instagram.com/mokhtarsays_"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={18} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
        <div className="md:hidden mt-6 text-center text-muted-foreground">
          Content That Converts.
        </div>
        <div className="mt-8 pt-6 border-t border-border text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} @mokhtarsays_. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;