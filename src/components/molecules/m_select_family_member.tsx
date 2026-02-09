import { Label } from "@radix-ui/react-label"
import { useMemo } from "react"
import MoleculesMultipleComboxBox from "./m_multiple_combobox"
import useFamilyStore from "@/store/s_family"

interface MoleculesSelectFamilyMemberProps {
    title: string
    selectedId: string[]
    onChange: (value: string[]) => void
}

const MoleculesSelectFamilyMember: React.FunctionComponent<MoleculesSelectFamilyMemberProps> = ({ title, selectedId, onChange }) => {
    const { family } = useFamilyStore()

    const options = useMemo(() => {
        if (!family?.familyMember?.data) return []

        return family.familyMember.data.map((dt) => ({
            value: dt.user_id,
            title: `${dt.user.fullname.trim()} <b>(${dt.family_relation.trim()})</b>`
        }))
    }, [family])

    return (
        <>
            <Label htmlFor="meal_prepare_by">{title}</Label>
            <MoleculesMultipleComboxBox context="Family Member" options={options} value={selectedId} onChange={onChange} />
        </>
    )
}

export default MoleculesSelectFamilyMember
