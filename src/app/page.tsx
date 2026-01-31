"use client"
import AtomSeparator from "@/components/atoms/a_separator";
import OrganismsContact from "@/components/organisms/o_contact";
import OrganismsQuestionBox from "@/components/organisms/o_question_form";
import OrganismsFeatureBox from "@/components/organisms/o_feature_box";
import OrganismsFeedback from "@/components/organisms/o_feedback";
import OrganismsUpcomingTask from "@/components/organisms/o_upcoming_task";
import OrganismsWelcomeBox from "@/components/organisms/o_welcome_box";
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrganismsFAQBox from "@/components/organisms/o_faq_box";
import useAuthStore from "@/store/s_auth";

export default function Home() {
  const featureList = [
    {
      title: 'Assign Household Tasks',
      description: 'Easily assign daily chores and responsibilities to each family member. Keep everyone organized and accountable while sharing the load at home.'
    },
    {
      title: 'Make a Routine Schedule and Set Reminders',
      description: 'Create weekly routines and set automatic reminders for important family activities — from cleaning schedules to school events.'
    },
    {
      title: 'List Your Family Members',
      description: 'Add and manage profiles for every family member. Keep contact info, birthdays, and preferences in one simple, accessible place.'
    },
    {
      title: 'Communicate With Other Members',
      description: 'Stay connected through built-in messaging and notifications. Share updates, reminders, and important notes instantly.'
    },
    {
      title: 'Manage Your Household Needs',
      description: "Track groceries, supplies, and home essentials with a shared list. Never forget what's needed for the next family shopping trip."
    },
    {
      title: 'Plan Family Activities',
      description: 'Plan picnics, movie nights, and vacations together. Schedule fun family time and make sure everyone stays in the loop.'
    },
    {
      title: 'Manage Your Family Spending and Savings',
      description: 'Keep track of your family budget, expenses, and savings goals. See where your money goes and make smarter financial decisions together.'
    }
  ]  

  const contactItem = [
    {
      title: <span className="flex gap-2"><FontAwesomeIcon icon={faLinkedin} height={20} width={20}/> LinkedIn</span>,
      url: "https://www.linkedin.com/in/leonardho-rante-sitanggang/"
    },
    {
      title: <span className="flex gap-2"><FontAwesomeIcon icon={faGithub} height={20} width={20}/> Github</span>,
      url: "https://github.com/FlazeFy"
    },
    {
      title: <span className="flex gap-2"><FontAwesomeIcon icon={faInstagram} height={20} width={20}/> Instagram</span>,
      url: "https://www.instagram.com/leonardhorante_08/"
    },
    {
      title: <span className="flex gap-2"><FontAwesomeIcon icon={faGlobe} height={20} width={20}/> Personal Website</span>,
      url: "https://www.leonardhors.com/"
    }
  ]

  const pinnedChart = [
    {
      title : 'Total Daily Task For Last Week',
      type : 'line',
      data : [
        { context: 'Monday', total: 12 },
        { context: 'Tuesday', total: 18 },
        { context: 'Wednesday', total: 11 },
        { context: 'Thursday', total: 22 },
        { context: 'Friday', total: 16 },
        { context: 'Saturday', total: 25 },
        { context: 'Sunday', total: 20 },
      ] 
    },
    {
      title : 'Total Daily Spend For Last Week',
      type : 'line',
      data : [
        { context: 'Monday', total: 12 },
        { context: 'Tuesday', total: 18 },
        { context: 'Wednesday', total: 11 },
        { context: 'Thursday', total: 22 },
        { context: 'Friday', total: 16 },
        { context: 'Saturday', total: 25 },
        { context: 'Sunday', total: 20 },
      ] 
    },
    {
      title : 'Task Contribution',
      type : 'pie',
      data : [
        { context: 'Robert', total: 12 },
        { context: 'Leo', total: 18 },
        { context: 'Budi', total: 11 },
      ] 
    }
  ]

  const { email } = useAuthStore()

  return (
    <div className="flex flex-col bg-white min-h[100vh] p-5 lg:p-10">
      <OrganismsWelcomeBox isSignedIn={email ? true : false} pinnedChartData={pinnedChart}/>
      <AtomSeparator/>
      <OrganismsUpcomingTask isSignedIn={email ? true : false} totalMember={3}/>
      <OrganismsFeatureBox feature={featureList}/>
      <AtomSeparator/>
      <OrganismsFeedback/>
      <AtomSeparator/>
      <OrganismsQuestionBox/>
      <AtomSeparator/>
      <OrganismsFAQBox/>
      <AtomSeparator/>
      <OrganismsContact contactItem={contactItem} email="flazen.edu@gmail.com" bodyEmail="Hii, Richard. I'm ..."/>
    </div>
  );
}
