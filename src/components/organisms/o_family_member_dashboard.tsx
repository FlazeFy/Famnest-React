import React from 'react'
import AtomText from '../atoms/a_text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendDown, faArrowTrendUp, faPercentage } from '@fortawesome/free-solid-svg-icons';

interface IOrganismsFamilyMemberDashboardProps {}

const OrganismsFamilyMemberDashboard: React.FunctionComponent<IOrganismsFamilyMemberDashboardProps> = () => {
    return (
        <div className='flex flex-wrap'>  
            <div className="w-full p-1">
                <div className='dashbox small'>
                    <AtomText type='content' text='Task Progress'/>
                    <ul>
                        <li><b>Completed</b> Lorem ipsum</li>
                        <li><b>In-Progress</b> Leo</li>
                    </ul>
                </div>
            </div>
            <div className="w-full md:w-full lg:w-1/2 p-1">
                <div className='dashbox small'>
                    <AtomText type='content' text='Health Status'/>
                    <hr className='my-2'></hr>
                    <AtomText type='content-title' text='Healthy'/>
                </div>
            </div>
            <div className="w-full md:w-full lg:w-1/2 p-1">
                <div className='dashbox small'>
                    <AtomText type='content' text='Current Mood'/>
                    <hr className='my-2'></hr>
                    <AtomText type='content-title' text='Energetic'/>
                </div>
            </div>
            <div className="w-full md:w-full lg:w-1/2 p-1">
                <div className='dashbox small'>
                    <AtomText type='content' text='Reminder'/>
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
            </div>
            <div className="w-full md:w-full lg:w-1/2 p-1">
                <div className='dashbox small'>
                    <AtomText type='content' text='Next Meal Prepare'/>
                    <hr className='my-2'></hr>
                    <AtomText type='content-title' text='Meatball'/>
                    <AtomText type='content' text='Sat - Breakfast'/>
                </div>
            </div>
            <div className="w-full md:w-full lg:w-1/2 p-1">
                <div className='dashbox small'>
                    <AtomText type='content' text='Last Month Spending'/>
                    <hr className='my-2'></hr>
                    <AtomText type='content-title' text='Rp. 8,000,000'/>
                    <AtomText type='content' extraClass='text-red-500 font-semibold' text={<><FontAwesomeIcon icon={faArrowTrendDown}/> 20%</>}/>
                </div>
            </div>
            <div className="w-full md:w-full lg:w-1/2 p-1">
                <div className='dashbox small'>
                    <AtomText type='content' text='Last Month Income'/>
                    <hr className='my-2'></hr>
                    <AtomText type='content-title' text='Rp. 19,500,000'/>
                    <AtomText type='content' extraClass='text-green-500 font-semibold' text={<><FontAwesomeIcon icon={faArrowTrendUp}/> 20%</>}/>
                </div>
            </div>
            <div className="w-full md:w-full lg:w-1/2 p-1">
                <div className='dashbox small'>
                    <AtomText type='content' text='Spending Contribution'/>
                    <hr className='my-2'></hr>
                    <AtomText type='content-title' text='30%'/>
                    <AtomText type='content' text='of family'/>
                </div>
            </div>
            <div className="w-full md:w-full lg:w-1/2 p-1">
                <div className='dashbox small'>
                    <AtomText type='content' text='Income Contribution'/>
                    <hr className='my-2'></hr>
                    <AtomText type='content-title' text='20%'/>
                    <AtomText type='content' text='of family'/>
                </div>
            </div>
        </div>
    )
}

export default OrganismsFamilyMemberDashboard;
