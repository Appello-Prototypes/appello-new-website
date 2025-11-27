import Section from "./Section";

export default function VideoSection() {
  return (
    <Section id="overview" background="white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium">
            Built for Trade Contractors That Employ the People Who Do The Work
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Appello Construction Workforce Management Software Built For ICI Subcontractors
          </h2>
        </div>
        
        {/* Video Embed */}
        <div className="aspect-video rounded-lg overflow-hidden shadow-xl border border-gray-200">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/oU7V8m3v9F4"
            title="Appello: Boost Your Field Service Management & Productivity"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        {/* Stats Below Video */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">96%</div>
            <div className="text-sm md:text-base text-gray-600">Launch Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15-20</div>
            <div className="text-sm md:text-base text-gray-600">Hours Saved / Wk</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2-4</div>
            <div className="text-sm md:text-base text-gray-600">Weeks to Go Live</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
