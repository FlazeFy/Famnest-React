import AtomSeparator from "@/components/atoms/a_separator";
import OrganismsContact from "@/components/organisms/o_contact";
import OrganismsFeatureBox from "@/components/organisms/o_feature_box";
import OrganismsFeedback from "@/components/organisms/o_feedback";
import OrganismsUpcomingTask from "@/components/organisms/o_upcoming_task";
import OrganismsWelcomeBox from "@/components/organisms/o_welcome_box";
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  const feedbackItem = [
    {
      name: 'Jhon Doe',
      role: 'Product Manager',
      image: '/mock/profile_pic.png',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      name: 'Adam Albert',
      role: 'Creative Manager',
      image: '/mock/profile_pic.png',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      name: 'Richard Kyle',
      role: 'Marketing Manager',
      image: '/mock/profile_pic.png',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ]

  const taskItem = [
    {
      title: 'Grocery Shopping',
      description: 'Buy fruits, vegetables, milk, and snacks for the week.',
      planAt: '2025-11-05T10:00:00',
      participant: [
        { nickname: 'Linda', role: 'Mom' },
        { nickname: 'John', role: 'Dad' },
        { nickname: 'Richard', role: 'Son' },
      ],
    },
    {
      title: 'Family Cleaning Day',
      description: 'Everyone helps clean the house — rooms, kitchen, and yard.',
      planAt: '2025-11-06T09:30:00',
      participant: [
        { nickname: 'John', role: 'Dad' },
        { nickname: 'Linda', role: 'Mom' },
        { nickname: 'Clarisa', role: 'Daughter' },
        { nickname: 'Richard', role: 'Son' },
      ],
    },
    {
      title: 'Grandma’s Birthday Celebration',
      description: 'Prepare the cake, decorations, and birthday dinner for Grandma.',
      planAt: '2025-11-08T18:00:00',
      participant: [
        { nickname: 'Linda', role: 'Mom' },
        { nickname: 'John', role: 'Dad' },
        { nickname: 'Clarisa', role: 'Daughter' },
        { nickname: 'Richard', role: 'Son' },
        { nickname: 'Robert', role: 'Uncle' },
      ],
    },
    {
      title: 'Weekend Picnic at the Park',
      description: 'Pack food, bring the frisbee, and enjoy family time outdoors.',
      planAt: '2025-11-09T11:00:00',
      participant: [
        { nickname: 'John', role: 'Dad' },
        { nickname: 'Linda', role: 'Mom' },
        { nickname: 'Clarisa', role: 'Daughter' },
        { nickname: 'Richard', role: 'Son' },
      ],
    },
    {
      title: 'Monthly Family Budget Review',
      description: 'Discuss expenses and plan next month’s savings goals.',
      planAt: '2025-11-10T20:00:00',
      participant: [
        { nickname: 'John', role: 'Dad' },
        { nickname: 'Linda', role: 'Mom' },
      ],
    },
  ]

  return (
    <div className="flex flex-col bg-white min-h[100vh] p-5 lg:p-10">
      <OrganismsWelcomeBox/>
      <AtomSeparator/>
      <OrganismsUpcomingTask taskItem={taskItem} totalMember={3}/>
      <AtomSeparator/>
      <OrganismsFeatureBox feature={featureList}/>
      <AtomSeparator/>
      <OrganismsFeedback feedbackItem={feedbackItem}/>
      <AtomSeparator/>
      <OrganismsContact contactItem={contactItem} email="flazen.edu@gmail.com" bodyEmail="Hii, Richard. I'm ..."/>
    </div>
  );
}
