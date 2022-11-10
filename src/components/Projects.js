import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img.png";
import projImg2 from "../assets/img/project-img.png";
import projImg3 from "../assets/img/project-img.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "CataFind - Catalogue Finder",
      description: "Mobile Web Application: Ionic Framework, Capacitor, Firebase, HTML, CSS, JavaScript, Photoshop \nCataFind lets you view catalogues of store sales near you.",
      imgUrl: projImg1,
    },
    {
      title: "E-Commerce Store",
      description: "Mobile Web Application: Ionic Framework, Capacitor, Firebase, HTML, CSS, JavaScript, Photoshop \nSiyeshe Hardware Store app is an e-commerce web app that sells hardware equipment.",
      imgUrl: projImg1,
    },
    {
      title: "Web Browser",
      description: "Software Development/Web Developmemt: Python",
      imgUrl: projImg2,
    },
    {
      title: "AI Hand Gesture Virtual Mouse",
      description: "Software Development/Machine Learning/AI: Python",
      imgUrl: projImg3,
    },
    {
      title: "AI Head & Eye Virtual Mouse",
      description: "Software Development/Machine Learning/AI: Python",
      imgUrl: projImg1,
    },
    {
      title: "AI Virtual Keyboard",
      description: "Software Development/Machine Learning/AI: Python",
      imgUrl: projImg2,
    },
    {
      title: "School Management System",
      description: "Design & Development: Java, PHP, MySQL",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Created various projects and completed online courses and specializations such as AI, Blockchain, Cybersecurity, Digital Marketing, IT Support Professional, Graphic Design to learn technical competencies to boost my programming and design skills and have successfully acquire some digital certifications.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Software Devs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web App Devs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Artificial Intelligence</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Command Prompt Apps</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <h2>Software Developments</h2>
                      <p>With various Languages like C, C#, Python ect.</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <h2>Web Application Developments</h2>
                      <p>With various Languages like C, C#, Python ect.</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <h2>Artificial Intelligence Developments</h2>
                      <p>With Python. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                    <h2>Command Prompt Applications (CMD)</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="ColorSharp"></img>
    </section>
  )
}
