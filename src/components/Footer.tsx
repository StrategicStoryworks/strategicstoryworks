const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Strategic Storyworks</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Strengthening public education through strategic communications.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Crisis Communications</li>
              <li>Strategic Planning</li>
              <li>Reputation Management</li>
              <li>Social Media Campaigns</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>hello@strategicstoryworks.com</p>
              <p>(555) 123-4567</p>
              <p>NY Tri-State Area</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 Strategic Storyworks. Strengthening public education through strategic communications.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;