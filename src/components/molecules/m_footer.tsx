import React from 'react'
import AtomText from '../atoms/a_text'

interface MoleculeFooterProps {}

const MoleculeFooter: React.FC<MoleculeFooterProps> = (props) => {
    return (
        <footer className="m-5 flex flex-col md:flex-row justify-center md:justify-between items-center border-t border-gray-400 pt-5 text-center md:text-left">
            <div>
                <AtomText type='content-title' text='Famnest | @2025. All Rights Reserved'/>
                <AtomText type='content' extraClass='text-secondary' text='Parts of FlazenApps'/>
            </div>
            <AtomText type='content-title' text="Made with ❤️ by FlazeFy" />
        </footer>
    )
}

export default MoleculeFooter