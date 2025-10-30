
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

const Solutions = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-luxury-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            All Type of Apps Solution
          </h1>
          <p className="text-xl md:text-2xl text-platinum-200 max-w-3xl mx-auto animate-fade-in">
            Comprehensive application solutions tailored to meet your unique business requirements across all platforms and technologies.
          </p>
        </div>
      </section>

      {/* Solutions Content */}
      <section className="py-20 bg-platinum-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="luxury-card animate-fade-in">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-navy-900 mb-4">
                  Complete Application Ecosystem
                </CardTitle>
                <CardDescription className="text-lg text-platinum-600">
                  From concept to deployment, we deliver end-to-end solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop" 
                      alt="Web Applications Development" 
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Web Applications</h3>
                    <p className="text-platinum-600">Modern, responsive web apps built with cutting-edge technologies</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop" 
                      alt="Mobile Applications Development" 
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Mobile Apps</h3>
                    <p className="text-platinum-600">Native and cross-platform mobile solutions for iOS and Android</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop" 
                      alt="Desktop Applications Development" 
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Desktop Applications</h3>
                    <p className="text-platinum-600">Powerful desktop software for Windows, macOS, and Linux</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop" 
                      alt="Cloud Solutions" 
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Cloud Solutions</h3>
                    <p className="text-platinum-600">Scalable cloud-based applications and infrastructure</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop" 
                      alt="API Development" 
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">API Development</h3>
                    <p className="text-platinum-600">Robust APIs for seamless system integration</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop" 
                      alt="Enterprise Systems" 
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Enterprise Systems</h3>
                    <p className="text-platinum-600">Large-scale enterprise solutions and system architecture</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop" 
                      alt="AI & Machine Learning Solutions" 
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">AI & Machine Learning</h3>
                    <p className="text-platinum-600">Intelligent solutions powered by artificial intelligence and ML</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop" 
                      alt="E-Commerce Solutions" 
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">E-Commerce Platforms</h3>
                    <p className="text-platinum-600">Complete online store solutions with payment integration</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=250&fit=crop" 
                      alt="Healthcare IT Solutions" 
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Healthcare IT</h3>
                    <p className="text-platinum-600">HIPAA-compliant medical software and health tech solutions</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop" 
                      alt="IoT Solutions" 
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">IoT Solutions</h3>
                    <p className="text-platinum-600">Connected devices and smart sensor integration systems</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=250&fit=crop" 
                      alt="Blockchain Solutions" 
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Blockchain & Web3</h3>
                    <p className="text-platinum-600">Decentralized applications and smart contract development</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop" 
                      alt="Data Analytics Solutions" 
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Data Analytics</h3>
                    <p className="text-platinum-600">Business intelligence and data visualization platforms</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop" 
                      alt="CRM Solutions" 
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">CRM Systems</h3>
                    <p className="text-platinum-600">Customer relationship management and sales automation</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop" 
                      alt="DevOps Solutions" 
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">DevOps & CI/CD</h3>
                    <p className="text-platinum-600">Automated deployment pipelines and infrastructure as code</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop" 
                      alt="Financial Technology Solutions" 
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">FinTech Solutions</h3>
                    <p className="text-platinum-600">Financial software, payment systems, and trading platforms</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=250&fit=crop" 
                      alt="Education Technology Solutions" 
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">EdTech Platforms</h3>
                    <p className="text-platinum-600">Learning management systems and educational software</p>
                  </div>
                </div>

                <div className="bg-navy-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-navy-900 mb-4 text-center">
                    Why Choose Our Solutions?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-navy-900 mb-2">✓ Scalable Architecture</h4>
                      <p className="text-platinum-600">Built to grow with your business needs</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900 mb-2">✓ Security First</h4>
                      <p className="text-platinum-600">Industry-standard security practices implemented</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900 mb-2">✓ Performance Optimized</h4>
                      <p className="text-platinum-600">Lightning-fast applications that deliver results</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900 mb-2">✓ Ongoing Support</h4>
                      <p className="text-platinum-600">Continuous maintenance and updates</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Solution?
          </h2>
          <p className="text-xl text-platinum-200 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create the perfect solution for your business.
          </p>
          <NavLink to="/contact">
            <Button className="luxury-button-gold text-lg px-8 py-4">
              Start Your Project
            </Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
