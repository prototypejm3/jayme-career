import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

interface Tab {
  id: string;
  label: string;
}

interface NavbarProps {
  tabs: readonly Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

const Navbar = ({ tabs, activeTab, onTabChange }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (id: string) => {
    onTabChange(id);
    setMobileOpen(false);
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <nav className="shrink-0 bg-background border-b border-border print:hidden">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <button
          onClick={() => handleClick("about")}
          className="font-display font-bold text-lg text-foreground"
        >
          JK
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleClick(tab.id)}
              className={`relative text-sm font-display px-3 py-1.5 rounded transition-colors ${
                activeTab === tab.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-2 right-2 h-px bg-foreground"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                />
              )}
            </button>
          ))}
          <button
            onClick={handleDownloadPDF}
            className="ml-2 text-sm font-display px-3 py-1.5 rounded text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
            aria-label="Download as PDF"
          >
            <Download size={14} />
            PDF
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleClick(tab.id)}
                  className={`text-sm font-display transition-colors text-left ${
                    activeTab === tab.id
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
              <button
                onClick={handleDownloadPDF}
                className="text-sm font-display text-muted-foreground hover:text-foreground transition-colors text-left flex items-center gap-1.5"
              >
                <Download size={14} />
                Download PDF
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
