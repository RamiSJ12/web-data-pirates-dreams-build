
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Search, Database, Cloud, Code, Briefcase, Monitor } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Search className="w-12 h-12 text-gold-600" />,
      title: "Search Engine Optimization",
      description: "SEO services are one-time or ongoing search engine optimization services that optimize your site's SEO to increase its organic search visibility and traffic. Today, 55% of businesses invest in professional search engine optimization (SEO) services."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-gold-600" />,
      title: "Digital & Online Marketing",
      description: "Online marketing is important to help you get higher-quality traffic. The ability to targeting specific leads helps you drive traffic to your company's media. You can target prospects specifically based on different characteristics."
    },
    {
      icon: <Monitor className="w-12 h-12 text-gold-600" />,
      title: "Web Performance Analysis",
      description: "Web Performance Monitoring is the practice of analyzing and monitoring websites to make sure they display the most important content as quickly as possible, load their pages at consistent speeds, and don't suffer unexpected downtimes."
    },
    {
      icon: <Code className="w-12 h-12 text-gold-600" />,
      title: "System & Software Development",
      description: "Software development services is a complicated process to design an application or software in order to meet a particular business or personal objective, goal, or process. This process consists of various stages: Planning, Analysis, Product Design, Development & Implementation, Testing, and Maintenance."
    },
    {
      icon: <Database className="w-12 h-12 text-gold-600" />,
      title: "Web Applications",
      description: "A web application is application software that runs in a web browser, unlike software programs that run locally and natively on the operating system of the device. Web applications are delivered on the World Wide Web to users with an active network connection."
    },
    {
      icon: <Monitor className="w-12 h-12 text-gold-600" />,
      title: "Desktop Applications",
      description: "Desktop apps are a specific type of app that won't ask for permission to access data associated with privacy settings in Windows. Some desktop apps may not even ask for permission to get access to personal data stored on your device."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-gold-600" />,
      title: "Mobile Applications",
      description: "A mobile application, most commonly known as an app, is a kind of application software intended to run on a mobile phone, for example, a smartphone or tablet PC."
    },
    {
      icon: <Cloud className="w-12 h-12 text-gold-600" />,
      title: "Cloud Services",
      description: "The term 'cloud services' refers to a wide range of services delivered on demand to companies and customers over the internet. These services are designed to provide easy, affordable access to applications and resources, without the need for internal infrastructure or hardware."
    },
    {
      icon: <Database className="w-12 h-12 text-gold-600" />,
      title: "Linux / Unix",
      description: "What are UNIX and Linux used for? Linux is an open-source, free-to-use operating system widely used for computer hardware and software, game development, tablet PCS, mainframes, etc. Unix is an operating system commonly used in internet servers, workstations and PCs by Solaris, Intel, HP etc."
    },
    {
      icon: <Monitor className="w-12 h-12 text-gold-600" />,
      title: "Systematic & Configuration",
      description: "The definition of systematic is something done according to a specific system, plan, or method. An example of something that would be described as systematic is when weeds in a garden are all destroyed based on a carefully crafted weed-killing plan. Characterized by the use of method or orderly planning; methodical."
    },
    {
      icon: <Database className="w-12 h-12 text-gold-600" />,
      title: "Data Science",
      description: "Data science combines math and statistics, specialized programming, advanced analytics, artificial intelligence (AI), and machine learning with specific subject matter expertise to uncover actionable insights hidden in an organization's data. These insights can be used to guide decision-making and strategic planning."
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-luxury-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Full Services for Your Business
          </h1>
          <p className="text-xl md:text-2xl text-platinum-200 max-w-3xl mx-auto animate-fade-in">
            Comprehensive technology solutions designed to propel your business forward in the digital age.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-platinum-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="luxury-card group h-full animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-navy-900 mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-platinum-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-platinum-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive services can help you achieve your business goals.
          </p>
          <NavLink to="/contact">
            <Button className="luxury-button-gold text-lg px-8 py-4">
              Contact Us
            </Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Services;
