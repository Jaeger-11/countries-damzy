'use client';
import {useState} from 'react'

const regions = ['africa', 'america', 'asia', 'europe', 'oceania'];
export default function SearchFilter() {
    const [showFilter, setShowFilter] = useState(false);
  return (
    <section className='my-8 px-4 sm:px-8 md:px-12 md:flex md:justify-between md:items-center'>
            <div className='flex my-2 w-full gap-4 items-center shadow-md rounded-sm bg-white dark:bg-dark-blue px-4 py-2 md:w-1/3 md:my-0 md:py-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M15.9667 17.25L10.1917 11.475C9.73333 11.8417 9.20625 12.1319 8.61042 12.3458C8.01458 12.5597 7.38056 12.6667 6.70833 12.6667C5.04306 12.6667 3.63383 12.0901 2.48067 10.9369C1.32689 9.78314 0.75 8.37361 0.75 6.70833C0.75 5.04306 1.32689 3.63353 2.48067 2.47975C3.63383 1.32658 5.04306 0.75 6.70833 0.75C8.37361 0.75 9.78314 1.32658 10.9369 2.47975C12.0901 3.63353 12.6667 5.04306 12.6667 6.70833C12.6667 7.38056 12.5597 8.01458 12.3458 8.61042C12.1319 9.20625 11.8417 9.73333 11.475 10.1917L17.25 15.9667L15.9667 17.25ZM6.70833 10.8333C7.85417 10.8333 8.82828 10.4324 9.63067 9.63067C10.4324 8.82828 10.8333 7.85417 10.8333 6.70833C10.8333 5.5625 10.4324 4.58839 9.63067 3.786C8.82828 2.98422 7.85417 2.58333 6.70833 2.58333C5.5625 2.58333 4.58839 2.98422 3.786 3.786C2.98422 4.58839 2.58333 5.5625 2.58333 6.70833C2.58333 7.85417 2.98422 8.82828 3.786 9.63067C4.58839 10.4324 5.5625 10.8333 6.70833 10.8333Z" fill="black"/>
                </svg>
                <input className='outline-none text-sm bg-transparent dark:text-white dark:placeholder:text-white' type="text" name="" id="" placeholder='Search for a country..' />
            </div>
            <div className='relative w-1/2 md:w-max'>
                <div className=' flex justify-between gap-6 items-center p-2 bg-white dark:bg-dark-blue shadow-sm rounded-sm text-sm md:p-3 '>
                    <div >Filter by region</div>
                    <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="14" height="7" viewBox="0 0 14 7" fill="none" onClick={() => setShowFilter(!showFilter)}>
                        <path d="M0.75 0.5L7 6.75L13.25 0.5H0.75Z" fill="black" fillOpacity="0.45"/>
                    </svg>
                </div>
                {showFilter ? 
                <div className='absolute my-1 bg-white dark:bg-dark-blue w-full py-2 shadow-md rounded-sm'>
                    {regions.map((region) => {
                        return <p className='capitalize px-2 cursor-pointer text-sm'>{region}</p>
                    })}
                </div> : ''
                }
            </div>
        </section>
  )
}
