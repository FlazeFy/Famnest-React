"use client"
import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup,CommandItem } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface OptionItem {
    title: string
    value: string
    checked?: boolean
}

interface IMoleculesMultipleComboxBoxProps {
    context: string
    options: OptionItem[]
    extraClass?: string
}

const MoleculesMultipleComboxBox: React.FunctionComponent<IMoleculesMultipleComboxBoxProps> = ({context, options, extraClass}) => {
    const [open, setOpen] = React.useState(false)
    const [selected, setSelected] = React.useState<string[]>(
        options.filter(opt => opt.checked).map(opt => opt.value)
    )

    const toggleSelect = (value: string) => {
        setSelected((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
        );
    };

    const selectedHtml = selected.map((v) => options.find((opt) => opt.value === v)?.title).join(", ")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" className={`w-full justify-between text-dark ${extraClass}`}>
                {
                    selected.length === 0 ? (`Select ${context}`) : ( <span className="text-left" dangerouslySetInnerHTML={{ __html: selectedHtml }}/>)
                }
                <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[260px] p-0">
                <Command>
                    <CommandEmpty>No item found.</CommandEmpty>
                    <CommandGroup>
                        {
                            options.map((dt) => (
                                <CommandItem key={dt.value} onSelect={() => toggleSelect(dt.value)}>
                                    <Check className={cn("mr-2 h-4 w-4", selected.includes(dt.value) ? "opacity-100" : "opacity-0")}/>
                                    <span dangerouslySetInnerHTML={{ __html: dt.title }} />
                                </CommandItem>
                            ))
                        }
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default MoleculesMultipleComboxBox;
