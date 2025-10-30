
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

const About = () => {
  const organizationData = {
    management: [
      { name: "Rami S.", role: "CEO / Chief Software Engineer" },
      { name: "Lisa J.", role: "Co-Founder / IT Consultant" },
      { name: "Sang-Hoon", role: "Operations Manager / Vice President" },
      { name: "Biom Choon", role: "Project Manager / Front-End Developer" }
    ],
    departments: [
      {
        name: "Development",
        members: [
          { name: "Seung-Hyun", role: "Back-End Developer" },
          { name: "Chol-Ho", role: "Back-End Developer" },
          { name: "Min-Ho", role: "Software Architect" },
          { name: "Soo-Hyun", role: "Front-End Developer" },
          { name: "Ji-Hye", role: "Full Stack Developer" }
        ]
      },
      {
        name: "Project Management",
        members: [
          { name: "Tae-Yang", role: "Business Analyst" },
          { name: "Ji-Yong", role: "Data Engineer" },
          { name: "Soo-Jin", role: "Project Coordinator" }
        ]
      },
      {
        name: "Sales/Marketing",
        members: [
          { name: "Yoon-Hee", role: "Sales Representative" },
          { name: "Olivia Sang-Mi", role: "Marketing Manager" },
          { name: "Seok-Jin", role: "Content Writer" },
          { name: "Kung-Son", role: "Data Analyst" }
        ]
      },
      {
        name: "Human Resources",
        members: [
          { name: "Hao-Wong", role: "Recruitment Specialist" }
        ]
      },
      {
        name: "Legal/Compliance",
        members: [
          { name: "Min-Ji", role: "Attorney" }
        ]
      },
      {
        name: "Quality Assurance",
        members: [
          { name: "Hae-Won", role: "Software Tester" },
          { name: "Eun-Ji", role: "Automation Engineer" }
        ]
      },
      {
        name: "Customer Support",
        members: [
          { name: "Jae-Hyun", role: "Technical Support Specialist" },
          { name: "Ji-Hoon", role: "Customer Support Representative" }
        ]
      },
      {
        name: "Finance/Accounting",
        members: [
          { name: "Jin-Woo", role: "Financial Controller" },
          { name: "Hyun-Jun", role: "Financial Analyst" }
        ]
      },
      {
        name: "Research and Development",
        members: [
          { name: "Dong-Hyun", role: "Research Scientist" },
          { name: "Joon-Ho", role: "UX/UI Designer" },
          { name: "Young-Min", role: "Data Scientist" }
        ]
      },
      {
        name: "Operations",
        members: [
          { name: "Sun-Woo", role: "Operations Manager Assistant" },
          { name: "Joo-Hee", role: "Release Manager" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-luxury-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Meet Our Crew
          </h1>
          <p className="text-xl md:text-2xl text-platinum-200 max-w-3xl mx-auto animate-fade-in">
            We are dedicated to helping you accomplish your goals through innovative technology solutions and strategic partnerships.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-platinum-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="luxury-card animate-fade-in mb-12">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-navy-900 mb-4">
                  Our Vision & Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg text-platinum-700 leading-relaxed">
                <p>
                  Data Pirates' vision and mission, inspired by our co-founders Rami S. and Lisa J., aim to assist our clients in accomplishing their goals. Led by Rami S., our CEO, and co-founded with Lisa J.'s idea, our mission is to expand current business horizons, capture a larger market share, and offer streamlined IT solutions to our clients.
                </p>
                <p>
                  At Data Pirates, we prioritize understanding our clients' requirements, meticulously analyzing them, and delivering top-tier IT solutions. Our commitment is to ensure client satisfaction through our services and the implementation of highly effective software solution strategies.
                </p>
                <p>
                  With the Data Pirates Team, rest assured of integrating cutting-edge technology seamlessly into your business operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Organization Chart */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Organization Structure
            </h2>
            <p className="text-xl text-platinum-600">
              Meet our talented team across all departments
            </p>
          </div>

          {/* Management Level */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-navy-900 mb-6">Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {organizationData.management.map((member, index) => (
                <Card key={index} className="luxury-card text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="w-16 h-16 bg-luxury-gradient rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <CardTitle className="text-lg text-navy-900">{member.name}</CardTitle>
                    <CardDescription className="text-sm text-gold-600 font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Departments */}
          <div className="space-y-8 max-w-7xl mx-auto">
            {organizationData.departments.map((dept, deptIndex) => (
              <div key={deptIndex} className="animate-fade-in" style={{ animationDelay: `${deptIndex * 0.1}s` }}>
                <h3 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b-2 border-navy-200">
                  {dept.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {dept.members.map((member, memberIndex) => (
                    <Card key={memberIndex} className="luxury-card hover:shadow-md transition-shadow">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base text-navy-900">{member.name}</CardTitle>
                        <CardDescription className="text-sm text-platinum-700">
                          {member.role}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-platinum-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-platinum-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our experienced team can help bring your vision to life.
          </p>
          <NavLink to="/contact">
            <Button className="luxury-button-gold text-lg px-8 py-4">
              Get In Touch
            </Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default About;
