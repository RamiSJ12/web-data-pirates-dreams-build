import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Code2, Layers, Zap, Cloud, Smartphone, Server, HardDrive, Globe } from "lucide-react";

const Ecosystems = () => {
  const ecosystems = [
    {
      name: "MERN Stack",
      icon: Database,
      description: "MongoDB, Express.js, React, Node.js",
      details: "Full-stack JavaScript solution for modern web applications with real-time capabilities.",
      color: "from-teal-500 to-teal-600",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"]
    },
    {
      name: "MEAN Stack",
      icon: Code2,
      description: "MongoDB, Express.js, Angular, Node.js",
      details: "Enterprise-grade framework combining Angular's robust structure with Node.js backend.",
      color: "from-navy-600 to-navy-700",
      technologies: ["MongoDB", "Express.js", "Angular", "Node.js"]
    },
    {
      name: "LAMP Stack",
      icon: Layers,
      description: "Linux, Apache, MySQL, PHP",
      details: "Traditional and reliable stack for building dynamic websites and applications.",
      color: "from-red-600 to-maroon-700",
      technologies: ["Linux", "Apache", "MySQL", "PHP"]
    },
    {
      name: "JAMstack",
      icon: Zap,
      description: "JavaScript, APIs, Markup",
      details: "Modern architecture for fast, secure, and scalable web experiences.",
      color: "from-teal-400 to-navy-500",
      technologies: ["JavaScript", "APIs", "Static Markup", "CDN"]
    },
    {
      name: "PERN Stack",
      icon: Database,
      description: "PostgreSQL, Express.js, React, Node.js",
      details: "Powerful stack leveraging PostgreSQL's advanced features for complex applications.",
      color: "from-navy-500 to-teal-600",
      technologies: ["PostgreSQL", "Express.js", "React", "Node.js"]
    },
    {
      name: ".NET Ecosystem",
      icon: Code2,
      description: "C#, ASP.NET, SQL Server, Azure",
      details: "Microsoft's comprehensive platform for enterprise applications and cloud services.",
      color: "from-crimson-600 to-navy-700",
      technologies: ["C#", "ASP.NET Core", "SQL Server", "Azure"]
    },
    {
      name: "Python Stack",
      icon: Layers,
      description: "Python, Django/Flask, PostgreSQL",
      details: "Versatile ecosystem for web development, data science, and machine learning.",
      color: "from-teal-600 to-navy-600",
      technologies: ["Python", "Django", "PostgreSQL", "NumPy"]
    },
    {
      name: "Serverless",
      icon: Cloud,
      description: "AWS Lambda, API Gateway, DynamoDB",
      details: "Event-driven architecture with auto-scaling and pay-per-use pricing model.",
      color: "from-navy-700 to-teal-500",
      technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "S3"]
    },
    {
      name: "Mobile Stack",
      icon: Smartphone,
      description: "React Native, Firebase, GraphQL",
      details: "Cross-platform mobile development with real-time backend services.",
      color: "from-teal-500 to-crimson-600",
      technologies: ["React Native", "Firebase", "GraphQL", "Expo"]
    },
    {
      name: "MEVN Stack",
      icon: Database,
      description: "MongoDB, Express.js, Vue.js, Node.js",
      details: "Progressive JavaScript framework with reactive data binding for intuitive UIs.",
      color: "from-teal-400 to-teal-700",
      technologies: ["MongoDB", "Express.js", "Vue.js", "Node.js"]
    },
    {
      name: "Ruby on Rails",
      icon: Code2,
      description: "Ruby, Rails, PostgreSQL, Redis",
      details: "Convention over configuration framework for rapid application development.",
      color: "from-red-500 to-red-700",
      technologies: ["Ruby", "Rails", "PostgreSQL", "Redis"]
    },
    {
      name: "Java Enterprise",
      icon: Layers,
      description: "Java, Spring Boot, Oracle/MySQL",
      details: "Robust enterprise solution with strong typing and extensive ecosystem.",
      color: "from-navy-600 to-red-600",
      technologies: ["Java", "Spring Boot", "Hibernate", "MySQL"]
    },
    {
      name: "Go Stack",
      icon: Zap,
      description: "Go, Gin/Echo, PostgreSQL, Docker",
      details: "High-performance concurrent applications with minimal memory footprint.",
      color: "from-teal-600 to-navy-700",
      technologies: ["Go", "Gin", "PostgreSQL", "Docker"]
    },
    {
      name: "Elixir/Phoenix",
      icon: Cloud,
      description: "Elixir, Phoenix, PostgreSQL, LiveView",
      details: "Functional programming with real-time features and fault-tolerant systems.",
      color: "from-crimson-500 to-navy-600",
      technologies: ["Elixir", "Phoenix", "PostgreSQL", "LiveView"]
    },
    {
      name: "Flutter Stack",
      icon: Smartphone,
      description: "Flutter, Dart, Firebase, Supabase",
      details: "Beautiful native apps from single codebase for mobile, web, and desktop.",
      color: "from-navy-500 to-teal-400",
      technologies: ["Flutter", "Dart", "Firebase", "Supabase"]
    },
    {
      name: "Next.js Full Stack",
      icon: Code2,
      description: "Next.js, React, Prisma, Vercel",
      details: "Modern full-stack framework with server-side rendering and edge functions.",
      color: "from-navy-800 to-navy-600",
      technologies: ["Next.js", "React", "Prisma", "Vercel"]
    },
    {
      name: "Rust Stack",
      icon: Zap,
      description: "Rust, Actix/Rocket, PostgreSQL",
      details: "Memory-safe systems programming with blazing fast performance.",
      color: "from-red-700 to-navy-800",
      technologies: ["Rust", "Actix Web", "PostgreSQL", "Tokio"]
    },
    {
      name: "WordPress Ecosystem",
      icon: Layers,
      description: "WordPress, PHP, MySQL, WooCommerce",
      details: "Powerful CMS platform with extensive plugins for content-driven websites.",
      color: "from-navy-600 to-teal-600",
      technologies: ["WordPress", "PHP", "MySQL", "WooCommerce"]
    },
    {
      name: "AWS Cloud",
      icon: Cloud,
      description: "Amazon Web Services Ecosystem",
      details: "Comprehensive cloud platform with 200+ services for computing, storage, and networking.",
      color: "from-red-600 to-navy-700",
      technologies: ["EC2", "S3", "RDS", "Lambda", "CloudFront"]
    },
    {
      name: "Azure Cloud",
      icon: Cloud,
      description: "Microsoft Azure Platform",
      details: "Enterprise cloud solution with hybrid capabilities and seamless Microsoft integration.",
      color: "from-navy-600 to-teal-500",
      technologies: ["VMs", "Azure SQL", "App Service", "Functions", "DevOps"]
    },
    {
      name: "Google Cloud",
      icon: Globe,
      description: "Google Cloud Platform (GCP)",
      details: "Data-centric cloud infrastructure with advanced AI/ML and analytics services.",
      color: "from-teal-500 to-navy-600",
      technologies: ["Compute Engine", "BigQuery", "Kubernetes", "Cloud Run"]
    },
    {
      name: "Linux Server Stack",
      icon: Server,
      description: "Ubuntu/Debian, Nginx, Docker, Kubernetes",
      details: "Open-source server infrastructure for scalable and secure deployments.",
      color: "from-navy-700 to-teal-600",
      technologies: ["Ubuntu", "Nginx", "Docker", "Kubernetes", "systemd"]
    },
    {
      name: "Red Hat Ecosystem",
      icon: Server,
      description: "RHEL, OpenShift, Ansible, Podman",
      details: "Enterprise Linux platform with container orchestration and automation tools.",
      color: "from-red-700 to-red-900",
      technologies: ["RHEL", "OpenShift", "Ansible", "Podman", "SELinux"]
    },
    {
      name: "Unix BSD Stack",
      icon: HardDrive,
      description: "FreeBSD, OpenBSD, NetBSD",
      details: "Secure and stable Unix derivatives known for networking and security features.",
      color: "from-navy-800 to-red-700",
      technologies: ["FreeBSD", "ZFS", "pf Firewall", "jails", "ports"]
    },
    {
      name: "DigitalOcean Stack",
      icon: Cloud,
      description: "Droplets, Spaces, Kubernetes, App Platform",
      details: "Developer-friendly cloud with simple pricing and intuitive interface.",
      color: "from-teal-600 to-navy-600",
      technologies: ["Droplets", "Spaces", "Kubernetes", "Load Balancers"]
    },
    {
      name: "Oracle Cloud",
      icon: Database,
      description: "Oracle Cloud Infrastructure (OCI)",
      details: "Enterprise cloud with autonomous database and high-performance computing.",
      color: "from-red-600 to-navy-800",
      technologies: ["Autonomous DB", "Compute", "Container Engine", "AI Services"]
    },
    {
      name: "IBM Cloud",
      icon: Cloud,
      description: "IBM Cloud & Watson Services",
      details: "Hybrid cloud platform with AI, blockchain, and quantum computing capabilities.",
      color: "from-navy-700 to-navy-900",
      technologies: ["Watson", "Red Hat OpenShift", "Cloud Foundry", "Blockchain"]
    },
    {
      name: "Arch Linux Stack",
      icon: Server,
      description: "Arch Linux, systemd, pacman, AUR",
      details: "Lightweight and flexible Linux distribution with rolling release model.",
      color: "from-teal-700 to-navy-800",
      technologies: ["Arch Linux", "systemd", "pacman", "AUR", "BTRFS"]
    },
    {
      name: "Kubernetes Native",
      icon: Layers,
      description: "K8s, Helm, Istio, Prometheus",
      details: "Container orchestration ecosystem for cloud-native application deployment.",
      color: "from-navy-600 to-teal-700",
      technologies: ["Kubernetes", "Helm", "Istio", "Prometheus", "Grafana"]
    },
    {
      name: "VMware Stack",
      icon: Server,
      description: "vSphere, ESXi, vCenter, NSX",
      details: "Virtualization platform for enterprise data center infrastructure management.",
      color: "from-navy-700 to-crimson-600",
      technologies: ["vSphere", "ESXi", "vCenter", "NSX", "vSAN"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-platinum-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Technology <span className="luxury-text-gradient">Ecosystems</span>
          </h1>
          <p className="text-lg sm:text-xl text-navy-700 max-w-3xl mx-auto mb-8 animate-fade-in">
            Explore our expertise across diverse technology stacks. We leverage the right tools 
            to build scalable, efficient, and innovative solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Ecosystems Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecosystems.map((ecosystem, index) => {
              const Icon = ecosystem.icon;
              return (
                <Card 
                  key={index} 
                  className="luxury-card group hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${ecosystem.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{ecosystem.name}</CardTitle>
                    <CardDescription className="text-base font-medium text-navy-600">
                      {ecosystem.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-navy-700 mb-4">{ecosystem.details}</p>
                    <div className="flex flex-wrap gap-2">
                      {ecosystem.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-platinum-100 text-navy-700 rounded-full text-sm font-medium hover:bg-platinum-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-navy-900 to-navy-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build with the Right Stack?
          </h2>
          <p className="text-xl text-platinum-200 max-w-2xl mx-auto mb-8">
            Let's discuss your project requirements and choose the perfect technology ecosystem.
          </p>
          <button className="luxury-button-teal">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Ecosystems;
