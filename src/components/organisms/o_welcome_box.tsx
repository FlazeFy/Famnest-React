"use client"
import * as React from 'react'
import AtomButton from '../atoms/a_button'
import AtomText from '../atoms/a_text'
import MoleculesNavbar from '../molecules/m_navbar'
import OrganismsDashboard from './o_dashboard'
import OrganismsLoginForm from './o_login_form'
import OrganismsPinnedChartBox from './o_pinned_chart_box'

interface PinnedChartData {
    title: string
    data: any
    type: string
}

interface IWelcomeBoxProps {
    isSignedIn: boolean
}

const menuItem = [
    { title: "Home", target: "#homeSection" },
    { title: "About", target: "#aboutSection" },
    { title: "FAQ", target: "#faqSection" },
    { title: "Feedback", target: "#feedbackSection" }
]

const OrganismsWelcomeBox: React.FunctionComponent<IWelcomeBoxProps> = ({isSignedIn}) => {
    return (
        <div className='flex min-h-[90vh] flex-wrap text-center lg:text-start w-full'>
            <div className='w-full lg:w-1/2 mb-2 flex flex-col justify-between text-center bg-cover p-5 md:p-7 lg:p-10 relative'
                style={{backgroundImage:"url('/background/background-1.jpg')"}}>
                <AtomText type='sub-title' text='Famnest'/>
                <AtomText type='sub-title' text='Build your dream family'/>
                <div className="absolute inset-0 bg-black/25 rounded-2xl"></div>
            </div>
            <div className='w-full lg:w-1/2 mb-2 flex flex-col justify-between px-0 py-10 lg:px-10 lg:py-0'>
                <div>
                    <MoleculesNavbar menuItem={menuItem} isSignedIn={isSignedIn} isLanding={true}/>
                    {
                        !isSignedIn && <AtomText type='sub-title' text='Redefining how families plan, share, and grow together'/>
                    }
                </div>
                {
                    isSignedIn ? <>
                        <OrganismsPinnedChartBox/>
                        <OrganismsDashboard/>
                    </> : <OrganismsLoginForm/>
                }
                {
                    !isSignedIn && (
                        <div>
                            <div className='flex gap-2 mb-3'>
                                <AtomButton type='btn-primary' text='Give me A Tour'/>
                                <AtomButton type='btn-primary' text='Get Mobile Version'/>
                            </div>
                            <AtomText type='content' text='Experience seamless coordination for every family member, from tasks and schedules to goals and memories. Discover how smart family management can bring balance, joy, and togetherness into everyday life.'/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default OrganismsWelcomeBox;
