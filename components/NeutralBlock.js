import Link from 'next/link'
import Image from 'next/image'

const NeutralBlock = ({props}) => (
    <div className='bg-black rounded-3xl m-auto max-w-2xl px-8 py-10 shadow-xl shadow-gray-400 text-light'>
        {props}
    </div>
)
export default NeutralBlock