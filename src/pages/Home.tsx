import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NavLink } from 'react-router-dom';
import { Search, Database, Cloud, Code } from 'lucide-react';
const Home = () => {
  const featuredServices = [{
    icon: <Search className="w-6 h-6 sm:w-8 sm:h-8 text-navy-600" />,
    title: "Search Engine Optimization",
    description: "Boost your organic search visibility and drive quality traffic to your website.",
    cardClass: "luxury-card"
  }, {
    icon: <Database className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" />,
    title: "Data Science Solutions",
    description: "Uncover actionable insights from your data to guide strategic decision-making.",
    cardClass: "luxury-card"
  }, {
    icon: <Cloud className="w-6 h-6 sm:w-8 sm:h-8 text-navy-600" />,
    title: "Cloud Services",
    description: "Scalable, secure cloud solutions designed for modern business needs.",
    cardClass: "luxury-card"
  }, {
    icon: <Code className="w-6 h-6 sm:w-8 sm:h-8 text-navy-700" />,
    title: "Software Development",
    description: "Custom software solutions tailored to your specific business objectives.",
    cardClass: "luxury-card"
  }];
  return <div className="min-h-screen font-inter">
      {/* Hero Section */}
      <section className="relative bg-luxury-gradient text-white py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in tracking-tight leading-tight">
              Welcome to <span className="luxury-text-gradient">Data Pirates</span> Agency
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-platinum-200 mb-6 sm:mb-8 animate-fade-in leading-relaxed font-light px-2">
              Navigate the digital seas with cutting-edge technology solutions. 
              We transform your business vision into reality through innovative software development and strategic IT consulting.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in px-4 sm:px-0">
              <NavLink to="/services" className="w-full sm:w-auto">
                <Button className="luxury-button text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold w-full sm:w-auto">
                  Explore Our Services
                </Button>
              </NavLink>
              <NavLink to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-navy-900 bg-white hover:bg-navy-50 hover:text-navy-900 font-semibold w-full sm:w-auto">
                  Get In Touch
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements - Hidden on small screens */}
        <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-navy-500/20 rounded-full animate-float"></div>
        <div className="hidden sm:block absolute bottom-20 right-10 w-16 h-16 bg-teal-500/30 rounded-full animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="hidden sm:block absolute top-1/2 left-1/4 w-12 h-12 bg-navy-600/20 rounded-full animate-float" style={{
        animationDelay: '2s'
      }}></div>
      </section>

      {/* Featured Services */}
      <section className="py-16 sm:py-20 bg-platinum-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-3 sm:mb-4 tracking-tight px-2">
              Full Services for Your Business
            </h2>
            <p className="text-lg sm:text-xl text-platinum-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
              From concept to deployment, we provide comprehensive solutions to help your business thrive in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredServices.map((service, index) => <Card key={index} className={`${service.cardClass} group cursor-pointer animate-fade-in`} style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <CardHeader className="text-center pb-3 sm:pb-4">
                  <div className="flex justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-base sm:text-lg text-navy-900 font-semibold leading-tight px-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-platinum-600 leading-relaxed text-sm sm:text-base px-2">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <NavLink to="/services">
              <Button className="luxury-button text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold">
                View All Services
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight text-white px-2 leading-tight">
            Ready to Set Sail on Your Digital Journey?
          </h2>
          <p className="text-lg sm:text-xl text-platinum-200 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed font-light px-4">
            Join the ranks of successful businesses that have partnered with Data Pirates Agency. 
            Let's chart a course for your digital transformation.
          </p>
          <NavLink to="/contact">
            <Button className="luxury-button text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold">
              Start Your Project Today
            </Button>
          </NavLink>
        </div>
      </section>
    </div>;
};
export default Home;