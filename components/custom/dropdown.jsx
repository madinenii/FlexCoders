import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavLinks = [
  'EdTech',
  'HealthCare',
  'Finance & Banking',
  'Retail & E-Commerce',
  'Logistic & Transportation',
  'Manufacturing',
  'Media & Entertainment',
  'Travel & Hospitality',
  'AgriTech'
]
const CustomDropdown = ({ twoColumn, data, levelled }) => {
  
  const [open, setOpen] = useState(false);
  
  return (
    <DropdownMenu open={ open }>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='flex content-between data-[state=open]:pointer-events-auto h-16 hover:bg-transparent focus:bg-transparent hover:border-b-4 border-black rounded-none transition-all' onClick={ () => setOpen(open => !open) }>
          <p className='text-base font-normal mr-2'>{ data.name }</p>
          <ChevronDown className='w-4 h-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-screen flex py-10 px-32 -mt-1'>
        { twoColumn && !levelled && data.name === 'What We Think' && (
          <DropdownMenuGroup className='w-full flex flex-col px-16'>
            {data.content.description && (
              <span className='text-4xl font-bold mb-4'>{data.content.description}</span>
            )}
            {data.content.contentDescription && (
              <span className='text-2xl font-normal'>{data.content.contentDescription}</span>
            )}
          </DropdownMenuGroup>
        )}
        { twoColumn && !levelled && data.name !== 'What We Think' &&(
          <DropdownMenuGroup className='w-full flex flex-row gap-24 px-16'>
            <div className='flex flex-col w-1/2'>
              <span className='text-lg mb-6 font-bold'>{data.content.title}</span>
              <ul className='flex flex-col gap-4'>
                {data.subLinks?.map(link => (
                  <li key={link.name} className='text-base font-normal'>
                    <Link to={link?.to ? `/${link.to}` : ''} className={`text-black ${!link.to && 'cursor-default'}`}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col w-1/2'>
              <span className='text-lg mb-6 font-bold'>Industries</span>
              <ul className='flex flex-col gap-4'>
                {console.log(data,'data')}
                {NavLinks.map((industry, idx) => (
  <li key={idx} className='text-base font-normal'>
    <span className='text-black'>{industry}</span>
  </li>
))}
              </ul>
            </div>
          </DropdownMenuGroup>
        )}
                  { levelled && (
          <DropdownMenuGroup>
            {
              data.levels?.map((level, i) => (
                <div key={ i }>
                  <div className='py-10'>
                    { level.title && <span className='text-lg mb-3 font-bold'>{ level.title }</span> }
                    <DropdownMenuItem key={ i } className='text-[17px] flex content-between items-start pl-0 leading-10 text-blue-700 font-normal focus:bg-transparent focus:text-blue-700 hover:text-blue-700 hover:bg-transparent flex-wrap' onClick={ () => setOpen(false) }>
                      {
                        level.links.map(link => (
                          <Link to={ link?.to ? link.to : '' } className={ `w-[25%] max-w-[25%] ${ level.size === 'big' && 'text-3xl' } ${ !link.to && 'text-black cursor-default' }` } key={ link.name ? link.name : link }>{ link?.name ? link.name : link }</Link>
                        ))
                      }
                    </DropdownMenuItem>
                  </div>
                  { (i < data.levels.length - 1) && <DropdownMenuSeparator className='bg-slate-300' /> }
                </div>
              ))
            }
          </DropdownMenuGroup>
        ) }
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CustomDropdown;