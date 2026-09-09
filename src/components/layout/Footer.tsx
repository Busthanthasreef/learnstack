import { Link } from "react-router-dom";
import { Container } from "./Container";
import { Layers } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8 md:py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Layers className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">LearnStack</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A modern, data-driven platform for learning web development and MERN stack technologies.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/topics" className="hover:text-foreground transition-colors">All Topics</Link></li>
              <li><Link to="/roadmap" className="hover:text-foreground transition-colors">Learning Roadmap</Link></li>
              <li><Link to="/practice" className="hover:text-foreground transition-colors">Practice</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/bookmarks" className="hover:text-foreground transition-colors">Bookmarks</Link></li>
              <li><Link to="/search" className="hover:text-foreground transition-colors">Search</Link></li>
              <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="cursor-not-allowed">Privacy Policy</span></li>
              <li><span className="cursor-not-allowed">Terms of Service</span></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} LearnStack. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
