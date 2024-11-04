import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Github,
  Linkedin,
  Mail,
  Server,
  Layout,
  Database,
  Cloud,
  Code2,
  Building2,
  Briefcase,
  Calendar,
  MapPin,
} from 'lucide-react';

export default function Home() {
  const skills = {
    Frontend: ['React.js', 'Next.js'],
    Backend: ['Node.js', 'NestJS', 'Python', 'Go'],
    'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    Architecture: ['Microservices'],
    'Databases & Message Queues': [
      'Redis',
      'RabbitMQ',
      'MongoDB',
      'PostgreSQL',
    ],
  };

  const experiences = [
    {
      title: 'Senior Backend Engineer | DevOps',
      company: 'TDRA',
      location: 'Dubai (Remote)',
      period: 'April 2024 – Present',
      achievements: [
        'Spearheaded the development of microservices using Node.js and NestJS, ensuring high scalability and performance',
        'Utilized OpenShift for deploying containerized applications, enhancing uptime and deployment efficiency',
        'Managed MongoDB databases to support distributed systems with high availability',
        'Developed RESTful APIs that improved inter-service communication and reduced latency by 30%',
      ],
    },
    {
      title: 'Senior Backend Engineer | DevOps',
      company: 'Exacall',
      location: 'Cairo',
      period: 'November 2022 – April 2024',
      achievements: [
        'Designed and implemented distributed systems for VoIP applications, ensuring smooth operations for clients across the Arabian Gulf',
        'Led the deployment of scalable cloud infrastructure using Docker and Kubernetes, improving service uptime by 25%',
        'Architected and maintained multi-tenant database clusters to ensure reliability and scalability',
        'Collaborated with DevOps teams to create a CI/CD pipeline, streamlining deployment processes for backend services',
      ],
    },
    {
      title: 'Backend Developer',
      company: 'Datum Solution',
      location: 'Cairo',
      period: 'March 2021 – November 2022',
      achievements: [
        'Developed scalable, modular backend systems using AWS, focusing on high availability and low latency',
        'Designed and implemented RESTful APIs, reducing downtime by 80% and improving performance by 50%',
        'Utilized Redis for caching and data persistence, enhancing response times and ensuring system robustness',
        'Integrated e-commerce strategies into client websites, improving user engagement and sales metrics',
      ],
    },
  ];

  const projects = [
    {
      title: 'Distributed System with Go and ASP.NET',
      description:
        'Created a distributed backend system that handles concurrent requests with high efficiency using Go, demonstrating a scalable architecture.',
      tech: ['Go', 'ASP.NET', 'Microservices'],
    },
    {
      title: 'Air Quality Monitoring API',
      description:
        'Built a REST API using ASP.NET Core, integrated with PostgreSQL to store air quality data. The project focused on real-time data fetching and scalability.',
      tech: ['ASP.NET Core', 'PostgreSQL', 'REST API'],
    },
    {
      title: 'Python Microservice for Data Analytics',
      description:
        'Developed a microservice using Python to handle large datasets and provide analytical insights for business applications.',
      tech: ['Python', 'Data Analytics', 'Microservices'],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Senior Full Stack Engineer
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building scalable and efficient web applications with modern
            technologies
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/Mina-Sayed/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              With 4 years of experience in full-stack development, I specialize
              in building scalable web applications using modern technologies.
              My expertise spans across frontend and backend development, with a
              strong focus on cloud architecture and DevOps practices.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              title="Frontend Development"
              icon={<Layout className="h-6 w-6" />}
              skills={skills.Frontend}
            />
            <SkillCard
              title="Backend Development"
              icon={<Server className="h-6 w-6" />}
              skills={skills.Backend}
            />
            <SkillCard
              title="Cloud & DevOps"
              icon={<Cloud className="h-6 w-6" />}
              skills={skills['Cloud & DevOps']}
            />
            <SkillCard
              title="Architecture"
              icon={<Code2 className="h-6 w-6" />}
              skills={skills.Architecture}
            />
            <SkillCard
              title="Databases & Message Queues"
              icon={<Database className="h-6 w-6" />}
              skills={skills['Databases & Message Queues']}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold flex items-center">
                      <Briefcase className="h-5 w-5 mr-2" />
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground flex items-center mt-1">
                      <Building2 className="h-4 w-4 mr-2" />
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.period}
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-2" />
                      {exp.location}
                    </p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Personal Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button asChild variant="outline" size="lg">
              <a
                href="mailto:minasayed290@gmail.com"
                className="flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                minasayed290@gmail.com
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://github.com/Mina-Sayed/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://www.linkedin.com/in/mina-sayed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function SkillCard({ title, icon, skills }) {
  return (
    <Card className="p-6">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-2">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
