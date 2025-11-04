import AtomButton from "../atoms/a_button"
import AtomText from "../atoms/a_text"
import { faUsers, faCloud, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from "@/components/ui/input"
import MoleculesTaskBox from "../molecules/m_task_box";

interface TaskParticipant {
    nickname: string
    role: string
}

interface UpcomingTaskItem {
    title: string
    description: string
    planAt: string
    participant: TaskParticipant[]
}

interface OrganismsUpcomingTaskProps {
    taskItem: UpcomingTaskItem[]
    totalMember: number
}

const OrganismsUpcomingTask: React.FC<OrganismsUpcomingTaskProps> = ({ taskItem, totalMember }) => {
    return (
        <div className="min-h-[90vh] flex-wrap text-center lg:text-start w-full rounded-2xl text-white bg-cover items-start p-5 pt-10 lg:p-10 lg:pt-20" style={{backgroundImage:"url('/background/background-2.jpg')"}}>
            <div className="flex mb-5 gap-2">
                <AtomButton type='btn-primary' text={<span className="flex gap-2"><FontAwesomeIcon icon={faUsers} height={20} width={20}/> {totalMember} Member</span>}/>
                <AtomButton type='btn-primary' text={<span className="flex gap-2"><FontAwesomeIcon icon={faCloud} height={20} width={20}/> Sunny</span>}/>
                <AtomButton type='btn-primary' text={<span className="flex gap-2"><FontAwesomeIcon icon={faCalendar} height={20} width={20}/> Wednesday</span>}/>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 flex flex-col justify-center text-center lg:text-left mb-6 md:mb-0">
                    <AtomText type="sub-title" text="Here's some task your family need to do" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center text-center lg:text-left">
                    <AtomText type="content" text="Lorem ipsum..." />
                </div>
            </div>
            <div className="rounded-2xl p-5 mt-10 text-dark" style={{backgroundColor: "rgba(255, 255, 255, 0.75)"}}>
                <div className="flex flex-wrap w-full">
                    <div className="w-full md:w-1/2 flex flex-col">
                        <AtomText type='content-title' text="Here's some task your family need to do"/>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col">
                        <Input type="text" placeholder="Search task..." />
                    </div>
                </div>
                <div className='mt-20 items-end text-start'>
                    {
                        taskItem.map((dt, idx) => (
                            <MoleculesTaskBox key={idx} title={dt.title} description={dt.description} planAt={dt.planAt} participant={dt.participant}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OrganismsUpcomingTask
