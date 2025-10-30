import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NavLink } from 'react-router-dom';
import hospitalSystem from '@/assets/hospital-system.jpg';
import clinicManagement from '@/assets/clinic-management.jpg';
import pathologyLab from '@/assets/pathology-lab.jpg';
import radiologyImaging from '@/assets/radiology-imaging.jpg';
import semiconductorManufacturing from '@/assets/semiconductor-manufacturing.jpg';
import medicalEngineering from '@/assets/medical-engineering.jpg';
import manufacturingSoftware from '@/assets/manufacturing-software.jpg';
import qualityControl from '@/assets/quality-control.jpg';
import biomedicalMonitoring from '@/assets/biomedical-monitoring.jpg';
import industrialAutomation from '@/assets/industrial-automation.jpg';
import erpSystem from '@/assets/erp-system.jpg';

const Portfolio = () => {
  const projects = [
    {
      title: "Hospital Management System",
      description: "Comprehensive digital solution for hospital operations including patient records, billing, inventory, staff management, and real-time monitoring.",
      technologies: ["React", "Node.js", "PostgreSQL", "HL7 FHIR", "AWS"],
      category: "Healthcare",
      image: hospitalSystem
    },
    {
      title: "Multi-Clinic Network Platform",
      description: "Integrated platform connecting multiple clinics with centralized patient data, appointment scheduling, telemedicine, and insurance processing.",
      technologies: ["Vue.js", "Python", "MongoDB", "Redis", "Azure"],
      category: "Healthcare",
      image: clinicManagement
    },
    {
      title: "Pathology Lab Information System",
      description: "Advanced LIMS for pathology labs with sample tracking, test automation, quality control, and digital reporting with AI-assisted diagnostics.",
      technologies: ["Angular", "Java", "Spring Boot", "MySQL", "Docker"],
      category: "Healthcare",
      image: pathologyLab
    },
    {
      title: "Radiology PACS & Imaging System",
      description: "Picture Archiving and Communication System for radiology departments with DICOM integration, 3D visualization, and AI-powered image analysis.",
      technologies: ["React", "Python", "TensorFlow", "PostgreSQL", "Kubernetes"],
      category: "Healthcare",
      image: radiologyImaging
    },
    {
      title: "Semiconductor Fab Management",
      description: "Manufacturing execution system for semiconductor fabrication with wafer tracking, yield optimization, equipment monitoring, and predictive maintenance.",
      technologies: ["Next.js", "Go", "TimescaleDB", "MQTT", "Edge Computing"],
      category: "Manufacturing",
      image: semiconductorManufacturing
    },
    {
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=300&fit=crop"
    },
    {
      title: "Medical Device Engineering Platform",
      description: "R&D platform for medical device development with CAD integration, FDA compliance tracking, clinical trial management, and regulatory documentation.",
      technologies: ["React", "Python", "SolidWorks API", "PostgreSQL", "Blockchain"],
      category: "Medical Engineering",
      image: medicalEngineering
    },
    {
      title: "Manufacturing Execution System (MES)",
      description: "Real-time production monitoring and control system with IoT integration, OEE tracking, predictive maintenance, and shop floor automation.",
      technologies: ["Vue.js", "Node.js", "InfluxDB", "MQTT", "Grafana"],
      category: "Manufacturing",
      image: manufacturingSoftware
    },
    {
      title: "AI-Powered Quality Control System",
      description: "Computer vision-based inspection system with defect detection, statistical process control, and automated reporting for manufacturing quality assurance.",
      technologies: ["Python", "TensorFlow", "OpenCV", "FastAPI", "Redis"],
      category: "Manufacturing",
      image: qualityControl
    },
    {
      title: "Biomedical Monitoring & Telemetry",
      description: "Real-time patient monitoring system with wireless telemetry, multi-parameter vital signs tracking, alerts, and integration with hospital EMR systems.",
      technologies: ["React", "WebSocket", "Node.js", "MongoDB", "HL7"],
      category: "Medical Engineering",
      image: biomedicalMonitoring
    },
    {
      title: "Industrial Automation & SCADA",
      description: "Supervisory control and data acquisition system for industrial processes with PLC integration, real-time monitoring, and process optimization.",
      technologies: ["C#", ".NET", "OPC UA", "SQL Server", "WPF"],
      category: "Manufacturing",
      image: industrialAutomation
    },
    {
      title: "Enterprise Resource Planning (ERP)",
      description: "Comprehensive ERP solution for manufacturing with inventory management, production planning, supply chain optimization, and financial integration.",
      technologies: ["Java", "Spring Boot", "Oracle", "Kafka", "Microservices"],
      category: "Manufacturing",
      image: erpSystem
    },
    {
      title: "Healthcare Management System",
      description: "Digital transformation solution for healthcare providers with patient management, appointment scheduling, and medical records.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "AWS"],
      category: "Enterprise System",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=300&fit=crop"
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Real-time financial data visualization and analytics platform for investment firms and financial advisors.",
      technologies: ["Angular", "Java", "Spring Boot", "D3.js"],
      category: "Data Analytics",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=300&fit=crop"
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform mobile application for fitness tracking, workout planning, and social features.",
      technologies: ["React Native", "Firebase", "Node.js", "GraphQL"],
      category: "Mobile Application",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=500&h=300&fit=crop"
    },
    {
      title: "Supply Chain Management",
      description: "Enterprise-grade supply chain optimization system with real-time tracking and predictive analytics.",
      technologies: ["Python", "Django", "Redis", "Docker"],
      category: "Enterprise System",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=500&h=300&fit=crop"
    },
    {
      title: "AI-Powered Customer Service",
      description: "Intelligent customer service platform with chatbot integration and sentiment analysis.",
      technologies: ["Python", "TensorFlow", "Flask", "WebSocket"],
      category: "AI/ML Solution",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-luxury-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-platinum-200 max-w-3xl mx-auto animate-fade-in">
            Explore our collection of successful projects and web application examples that showcase our expertise and innovation.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-platinum-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="luxury-card group overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gold-500 text-navy-900 hover:bg-gold-600">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-navy-900">{project.title}</CardTitle>
                  <CardDescription className="text-platinum-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-navy-600 border-navy-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full luxury-button">
                      View Project Details
                    </Button>
                  </div>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-platinum-200 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us to discuss your next web application project.
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

export default Portfolio;
