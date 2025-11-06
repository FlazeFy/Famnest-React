import AtomText from '../atoms/a_text'

interface MoleculesCollapseButtonProps {
    title: string
    isActive: boolean
    onClick: () => void
}

const MoleculesCollapseButton: React.FC<MoleculesCollapseButtonProps> = ({ title, isActive, onClick }) => {
    const classHolder = "border border-gray-200 p-4 rounded-2xl"

    return (
        <div className={isActive ? `${classHolder} shadow-xl mb-5` : `${classHolder} mb-3`}>
            <button onClick={onClick} className="w-full text-left flex text-lg items-center text-dark">
                <AtomText type='content-title' text={title}/>
            </button>
        </div>
    )
}

export default MoleculesCollapseButton
