import {
  BashOriginal,
  COriginal,
  JavaOriginal,
  PythonOriginal,
  JavascriptOriginal,
  Html5Original,
  Css3Original,
  SpringOriginal,
  FlaskOriginal,
  ExpressOriginal,
  NodejsOriginal,
  ReactOriginal,
  MysqlOriginal,
  PostgresqlOriginal,
  MongodbOriginal,
  AnacondaOriginal,
  JupyterOriginal,
  LinuxOriginal,
  KotlinPlain,
  AndroidstudioOriginal,
  DockerOriginal,
  GitOriginal,
} from 'devicons-react'
import FoodApp from '../assets/images/foodapp.png'
import Portfolio from '../assets/images/portfolio.png'
import Medical from '../assets/images/insurance.jpg'
import Invoice from '../assets/images/invoice.png'
import Database from '../assets/images/database.png'
import Stock from '../assets/images/stock.jpg'
import CLI from '../assets/images/cli.jpg'
import {
  faGraduationCap,
  faSchool,
  faUser,
  faBuilding,
  faToolbox,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmazon } from '@fortawesome/free-brands-svg-icons'

export const iconArray = [
  { name: 'C', component: COriginal },
  { name: 'Bash', component: BashOriginal },
  { name: 'Java', component: JavaOriginal },
  { name: 'Python', component: PythonOriginal },
  { name: 'Html5', component: Html5Original },
  { name: 'Css3', component: Css3Original },
  { name: 'Javascript', component: JavascriptOriginal },
  { name: 'React', component: ReactOriginal },
  { name: 'Nodejs', component: NodejsOriginal },
  { name: 'Express', component: ExpressOriginal },
  { name: 'Spring', component: SpringOriginal },
  { name: 'Flask', component: FlaskOriginal },
  { name: 'Mysql', component: MysqlOriginal },
  { name: 'Postgresql', component: PostgresqlOriginal },
  { name: 'Mongodb', component: MongodbOriginal },
  { name: 'Git', component: GitOriginal },
  { name: 'Docker', component: DockerOriginal },
  { name: 'Anaconda', component: AnacondaOriginal },
  { name: 'Jupyter', component: JupyterOriginal },
  { name: 'Linux', component: LinuxOriginal },
  { name: 'Kotlin', component: KotlinPlain },
  { name: 'Android', component: AndroidstudioOriginal },
]

export const navLinks = [
    {icon : <FontAwesomeIcon icon={faUser} />, name : 'about' },
    {icon : <FontAwesomeIcon icon={faGraduationCap} />, name : 'education' },
    {icon : <FontAwesomeIcon icon={faBuilding} />, name : 'experience'},
    {icon : <FontAwesomeIcon icon={faToolbox} />, name : 'skill'},
    {icon : <FontAwesomeIcon icon={faProjectDiagram} />, name: 'project'},
]

export const iconsphere = [
  COriginal,
  BashOriginal,
  JavaOriginal,
  GitOriginal,
  PythonOriginal,
  ReactOriginal,
  PostgresqlOriginal,
  DockerOriginal,
  LinuxOriginal,
]

export const projectsData = [
  {
    title: 'Invoice Manager',
    image: Invoice,
    desc: `Developed a machine learning based web app to manage invoices and predict clear date of invoices.`,
    link: 'https://github.com/KingDEV22/Invoice-Manager',
  },
  {
    title: 'Portfolio Website',
    image: Portfolio,
    desc: 'A portfolio website built using React and SCSS to my qualifications.',
    link: 'https://github.com/KingDEV22/Portfolio-Website',
  },
  {
    title: 'Insurance Prediction',
    image: Medical,
    desc: `Built a machine learning model to predict medical
      insurance prices of a person.`,
    link: 'https://github.com/KingDEV22/Medical-Price-Prediction',
  },
  {
    title: 'Database',
    image: Database,
    desc: `Built a simple database from scratch using C.`,
  },
  {
    title: 'Stock News Analysis',
    image: Stock,
    desc: `Built a sentiment analysis model that predicts the sentiment 
      of daily scraped news articles.`,
  },
  {
    title: 'CLI Tool',
    image: CLI,
    desc: `Built a versatile cli tool with Bash and Python to perform various tasks.`,
  },
  {
    title: 'Food Delevery App',
    image: FoodApp,
    desc: `Developed a food delivery app for android to order foods
      from restaurant.`,
    link: 'https://github.com/KingDEV22/Food-Delevery-App.git',
  },
]

export const persData = [
  {
    date: '2019 - 2023',
    title: 'B-Tech',
    subtitle: 'Computer Science and Engineering',
    detailedText: `Narula Institute of Technology, Kolkata, West Bengal`,
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
  },
  {
    date: '2018 - 2019',
    title: 'High School',
    subtitle: `Science`,
    detailedText: `Sudhir Memorial Institute, Kolkata, West Bengal`,
    icon: <FontAwesomeIcon icon={faSchool} />,
  },
  {
    data: 'Jan 2023 - Jun 2023',
    title: 'Support Engineer II Intern',
    subtitle: 'Amazon , India',
    detailedText: `- Worked on deployment of various services of Just Walk
      Out Technology (JWO) stores' infrastructure.
      ${(<br />)}
      - Collaborated with cross-functional teams to effectively
      troubleshoot and debug errors in the services. ${(<br />)}
      -Implemented automation scripts and optimized packages for
      seamless data flow during service deployment.`,
    icon: <FontAwesomeIcon icon={faAmazon} />,
  },
]
