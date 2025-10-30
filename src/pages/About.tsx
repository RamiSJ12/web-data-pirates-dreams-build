import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { 
  Code, 
  ClipboardList, 
  TrendingUp, 
  Users, 
  Scale, 
  CheckCircle, 
  Headphones, 
  DollarSign, 
  Lightbulb, 
  Settings,
  Building2,
  Briefcase,
  Award
} from 'lucide-react';

const About = () => {
  const organizationData = {
    executive: [
      { name: "Rami S.", role: "CEO / Chief Software Engineer" },
      { name: "Lisa J.", role: "Co-Founder / IT Consultant" }
    ],
    management: [
      { name: "Sang-Hoon", role: "Operations Manager / Vice President" },
      { name: "Biom Choon", role: "Project Manager / Front-End Developer" }
    ],
    departments: [
      {
        name: "Development",
        icon: Code,
        color: "from-blue-600 to-blue-700",
        members: [
          { name: "Min-Ho", role: "Software Architect" },
          { name: "Ji-Hye", role: "Full Stack Developer" },
          { name: "Seung-Hyun", role: "Back-End Developer" },
          { name: "Chol-Ho", role: "Back-End Developer" },
          { name: "Soo-Hyun", role: "Front-End Developer" }
        ]
      },
      {
        name: "Project Management",
        icon: ClipboardList,
        color: "from-violet-600 to-violet-700",
        members: [
          { name: "Tae-Yang", role: "Business Analyst" },
          { name: "Ji-Yong", role: "Data Engineer" },
          { name: "Soo-Jin", role: "Project Coordinator" }
        ]
      },
      {
        name: "Sales/Marketing",
        icon: TrendingUp,
        color: "from-emerald-600 to-emerald-700",
        members: [
          { name: "Olivia Sang-Mi", role: "Marketing Manager" },
          { name: "Yoon-Hee", role: "Sales Representative" },
          { name: "Kung-Son", role: "Data Analyst" },
          { name: "Seok-Jin", role: "Content Writer" }
        ]
      },
      {
        name: "Human Resources",
        icon: Users,
        color: "from-rose-600 to-rose-700",
        members: [
          { name: "Hao-Wong", role: "Recruitment Specialist" }
        ]
      },
      {
        name: "Legal/Compliance",
        icon: Scale,
        color: "from-slate-700 to-slate-800",
        members: [
          { name: "Min-Ji", role: "Attorney" }
        ]
      },
      {
        name: "Quality Assurance",
        icon: CheckCircle,
        color: "from-cyan-600 to-cyan-700",
        members: [
          { name: "Eun-Ji", role: "Automation Engineer" },
          { name: "Hae-Won", role: "Software Tester" }
        ]
      },
      {
        name: "Customer Support",
        icon: Headphones,
        color: "from-amber-600 to-amber-700",
        members: [
          { name: "Jae-Hyun", role: "Technical Support Specialist" },
          { name: "Ji-Hoon", role: "Customer Support Representative" }
        ]
      },
      {
        name: "Finance/Accounting",
        icon: DollarSign,
        color: "from-green-700 to-green-800",
        members: [
          { name: "Jin-Woo", role: "Financial Controller" },
          { name: "Hyun-Jun", role: "Financial Analyst" }
        ]
      },
      {
        name: "Research and Development",
        icon: Lightbulb,
        color: "from-yellow-600 to-orange-600",
        members: [
          { name: "Dong-Hyun", role: "Research Scientist" },
          { name: "Young-Min", role: "Data Scientist" },
          { name: "Joon-Ho", role: "UX/UI Designer" }
        ]
      },
      {
        name: "Operations",
        icon: Settings,
        color: "from-indigo-600 to-indigo-700",
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
      <section className="py-20 bg-gradient-to-b from-white to-platinum-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Building2 className="w-16 h-16 mx-auto mb-4 text-navy-900" />
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Organization Structure
            </h2>
            <p className="text-xl text-platinum-600">
              Meet our talented team across all departments
            </p>
          </div>

          {/* Executive Team - Highest Tier */}
          <div className="mb-12 relative">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-600 to-amber-600 text-white rounded-full shadow-xl">
                <Briefcase className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Executive Team</h3>
              </div>
            </div>
            
            {/* Connecting line from executive to leadership */}
            <div className="absolute left-1/2 top-24 w-0.5 h-16 bg-gradient-to-b from-gold-500 to-navy-400 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto relative">
              {/* Horizontal connecting line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent transform -translate-y-1/2 hidden md:block"></div>
              
              {organizationData.executive.map((member, index) => (
                <div key={index} className="relative">
                  {/* Vertical connecting line */}
                  <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gold-400 transform -translate-x-1/2 -translate-y-8 hidden md:block"></div>
                  
                  <Card className="luxury-card text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-3 border-gold-300 bg-gradient-to-br from-white via-gold-50/40 to-amber-50/30 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <CardHeader className="pb-6 pt-8 relative z-10">
                      <div className="flex items-center justify-center mb-4">
                        <Briefcase className="w-10 h-10 text-gold-600" />
                      </div>
                      <CardTitle className="text-xl text-navy-900 font-bold mb-3">{member.name}</CardTitle>
                      <CardDescription className="text-base text-navy-700 font-semibold leading-relaxed">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Team - Second Tier */}
          <div className="mb-16 relative">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-navy-600 to-navy-700 text-white rounded-full shadow-lg">
                <Award className="w-5 h-5 text-white" />
                <h3 className="text-xl font-bold text-white">Leadership</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto relative">
              {/* Horizontal connecting line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-navy-300 to-transparent transform -translate-y-1/2 hidden md:block"></div>
              
              {organizationData.management.map((member, index) => (
                <div key={index} className="relative">
                  <Card className="luxury-card text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-navy-200 bg-gradient-to-br from-white to-navy-50/20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <CardHeader className="pb-4 pt-6 relative z-10">
                      <div className="flex items-center justify-center mb-3">
                        <Award className="w-7 h-7 text-navy-600" />
                      </div>
                      <CardTitle className="text-lg text-navy-900 font-bold mb-2">{member.name}</CardTitle>
                      <CardDescription className="text-sm text-navy-700 font-medium leading-relaxed">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Departments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
            {organizationData.departments.map((dept, deptIndex) => {
              const IconComponent = dept.icon;
              return (
                <Card 
                  key={deptIndex} 
                  className="luxury-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group border-t-4"
                  style={{ borderTopColor: `rgb(${deptIndex * 25 % 255}, ${(deptIndex * 50) % 255}, ${(deptIndex * 75) % 255})` }}
                >
                  <CardHeader className={`bg-gradient-to-br ${dept.color} text-white pb-4 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="relative z-10 flex items-center gap-3 mb-2">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-white">{dept.name}</CardTitle>
                    </div>
                    <CardDescription className="text-white text-sm relative z-10">
                      {dept.members.length} {dept.members.length === 1 ? 'Team Member' : 'Team Members'}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      {dept.members.map((member, memberIndex) => (
                        <div 
                          key={memberIndex}
                          className="flex items-start gap-3 p-3 rounded-lg bg-platinum-50 hover:bg-platinum-100 transition-colors duration-200 group/member"
                        >
                          <div className="flex-shrink-0">
                            <div className={`w-10 h-10 bg-gradient-to-br ${dept.color} rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-md`}>
                              {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-navy-900 text-sm group-hover/member:text-navy-700 transition-colors">
                              {member.name}
                            </p>
                            <p className="text-xs text-platinum-600 mt-0.5">
                              {member.role}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Organization Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-navy-900 mb-2">{organizationData.executive.length + organizationData.management.length}</div>
              <div className="text-sm text-platinum-600">Leadership</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-navy-900 mb-2">{organizationData.departments.length}</div>
              <div className="text-sm text-platinum-600">Departments</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-navy-900 mb-2">
                {organizationData.departments.reduce((acc, dept) => acc + dept.members.length, 0)}
              </div>
              <div className="text-sm text-platinum-600">Team Members</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-navy-900 mb-2">
                {organizationData.executive.length + organizationData.management.length + organizationData.departments.reduce((acc, dept) => acc + dept.members.length, 0)}
              </div>
              <div className="text-sm text-platinum-600">Total Staff</div>
            </div>
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
