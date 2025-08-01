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
            <h4 className="text-lg font-semibold mb-4">Strategic Communication Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Strategic Communication Planning</li>
              <li>Communication Audit</li>
              <li>Stakeholder Engagement Strategy</li>
              <li>Crisis Communication Management</li>
              <li>Emergency Communication Planning</li>
              <li>Reputation Management</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Digital & Community Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Social Media Strategy</li>
              <li>Print and Digital Campaigns</li>
              <li>Media Relations Management</li>
              <li>Community Engagement Campaigns</li>
              <li>Parent and Family Communication</li>
              <li>Multicultural Communication</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>hello@strategicstory.works</p>
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