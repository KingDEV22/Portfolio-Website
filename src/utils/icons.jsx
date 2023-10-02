import {
  BashOriginal,
  COriginal,
  JavaOriginal,
  PythonOriginal,
  JavascriptOriginal,
  Html5Original,
  Css3Original,
  SpringOriginal,
  NodejsOriginal,
  ReactOriginal,
  PostgresqlOriginal,
  MongodbOriginal,
  AnacondaOriginal,
  JupyterOriginal,
  LinuxOriginal,
  DockerOriginal,
  GitOriginal,
  AmazonwebservicesOriginal,
  FastapiOriginal
} from 'devicons-react'
import FoodApp from '../assets/images/foodapp.png'
import Portfolio from '../assets/images/portfolio.png'
import Medical from '../assets/images/insurance.jpg'
import Invoice from '../assets/images/invoice.png'
import Library from '../assets/images/library.jpeg'
import Stock from '../assets/images/stock.jpg'
import Mental from '../assets/images/mental.png'
import {
  FaUserGraduate,
  FaGraduationCap,
  FaAmazon,
  FaTools,
  FaSchool,
  FaProjectDiagram,
  FaUser,
} from 'react-icons/fa'

import { MdWork, MdPermContactCalendar } from 'react-icons/md'

export const iconArray = [
  { name: 'C', component: COriginal },
  { name: 'Java', component: JavaOriginal },
  { name: 'Python', component: PythonOriginal },
  { name: 'Html5', component: Html5Original },
  { name: 'Css3', component: Css3Original },
  { name: 'Javascript', component: JavascriptOriginal },
  { name: 'React', component: ReactOriginal },
  { name: 'Nodejs', component: NodejsOriginal },
  { name: 'Spring', component: SpringOriginal },
  { name: 'FastAPI', component: FastapiOriginal },
  { name: 'Postgresql', component: PostgresqlOriginal },
  { name: 'Mongodb', component: MongodbOriginal },
  { name: 'AWS', component: AmazonwebservicesOriginal },
  { name: 'Git', component: GitOriginal },
  { name: 'Docker', component: DockerOriginal },
  { name: 'Anaconda', component: AnacondaOriginal },
  { name: 'Jupyter', component: JupyterOriginal },
  { name: 'Linux', component: LinuxOriginal },
]

export const navLinks = [
  { icon: <FaUser />, name: 'about' },
  { icon: <FaUserGraduate />, name: 'education' },
  { icon: <MdWork />, name: 'experience' },
  { icon: <FaTools />, name: 'skill' },
  { icon: <FaProjectDiagram />, name: 'project' },
  { icon: <MdPermContactCalendar />, name: 'contact' },
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
    title: 'MindSense',
    image: Mental,
    desc: `•Developed a FastAPI server for predicting mental health attributes from text inputs using Deep Learning`,
    link: 'https://github.com/PixelPioneersDAO/Employee-Health-ML',
  },
  {
    title: 'Library Manager',
    image: Library,
    desc: `Built a library management app with FastAPI`,
    link: 'https://github.com/KingDEV22/library-management',
  },
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
    title: 'Stock News Analysis',
    image: Stock,
    desc: `Built a sentiment analysis model that predicts the sentiment 
      of daily scraped indian stock news articles.`,
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
    icon: <FaGraduationCap />,
  },
  {
    date: '2018 - 2019',
    title: 'High School',
    subtitle: `Science`,
    detailedText: `Sudhir Memorial Institute, Kolkata, West Bengal`,
    icon: <FaSchool />,
  },
  {
    date: 'Jan 2023 - Jun 2023',
    title: 'Support Engineer II Intern',
    subtitle: 'Amazon , India',
    detailedText: `I contributed significantly in deploying different services to AWS Services for Just Walk Out Technology (JWO) 
    store infrastructure, collaborated with cross-functional teams to troubleshoot 
    and debugg errors, implemented automation scripts and optimised packages.`,
    icon: <FaAmazon />,
  },
]
