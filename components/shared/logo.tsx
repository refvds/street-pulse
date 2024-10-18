import { Activity } from 'lucide-react'

export const Logo = ({className}:{className?: string}) => {
  return (
    <div className={className}>
        <h1 className='flex items-center gap-1 font-extrabold text-2xl'>
            Street
            <Activity size={18} color='#ef4444'/> 
        pulse</h1>        
    </div>
  )
}
