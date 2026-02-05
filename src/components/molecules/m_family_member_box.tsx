import { calculateAgeYearsMonths } from '@/helpers/math'
import { convertUTCToLocalDateInput } from '@/helpers/converter'
import { FamilyMemberItem } from '@/repositories/r_family_member'
import AtomText from '../atoms/a_text'
import { faVenus, faMars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'

type MoleculesFamilyMemberBoxProps = FamilyMemberItem & React.HTMLAttributes<HTMLDivElement>

const MoleculesFamilyMemberBox = React.forwardRef<HTMLDivElement, MoleculesFamilyMemberBoxProps>(({ family_relation, user, ...props }, ref) => {
    return (
        <div ref={ref} {...props} role="button" tabIndex={0} className="familymemberbox cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl">
            <img src={user.profile_image ?? '/mock/no_pic.png'} alt={user.fullname} className="w-20 h-20 rounded-full object-cover -mt-15 border-4 border-white shadow-md mx-auto bg-white"/>
            <AtomText type="content-title" text={user.fullname}/>
            <AtomText type="content" text={family_relation}/>
            <div className="flex flex-wrap mx-auto gap-2 mt-3">
                <div className="chip bg-primary">
                    <AtomText type="content" text={`Born at ${convertUTCToLocalDateInput(user.born_at)}`}/>
                </div>
                <div className="chip bg-primary">
                    <AtomText type="content" text={calculateAgeYearsMonths(user.born_at)}/>
                </div>
                <div className={`chip ${user.gender === 'Female' ? 'bg-pink-400' : 'bg-blue-400'}`}>
                    <FontAwesomeIcon icon={user.gender === 'Female' ? faVenus : faMars} height={20} width={20}/>
                </div>
            </div>
        </div>
    )
})

MoleculesFamilyMemberBox.displayName = 'MoleculesFamilyMemberBox'

export default MoleculesFamilyMemberBox
