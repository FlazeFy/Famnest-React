import { Star } from 'lucide-react'
import * as React from 'react'

interface IMoleculesStarRatingInputProps {
    max?: number
    value?: number
    onChange?: (value: number) => void
}

const MoleculesStarRatingInput: React.FunctionComponent<IMoleculesStarRatingInputProps> = ({ max = 5, value = 0, onChange }) => {
    const [hover, setHover] = React.useState(0)

    return (
        <div className="flex gap-1">
        {
            Array.from({ length: max }).map((_, i) => {
                const ratingValue = i + 1;

                return (
                    <button key={ratingValue} type="button" className="p-0" onClick={() => onChange?.(ratingValue)} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(0)}>
                        <Star className={`w-7 h-7 ${ratingValue <= (hover || value) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}/>
                    </button>
                )
            })
        }
        </div>
    )
}

export default MoleculesStarRatingInput;
