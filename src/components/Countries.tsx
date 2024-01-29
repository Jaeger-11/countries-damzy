import Image from "next/image";
import Link from "next/link";

const fetchCountries = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags', {next: {revalidate: 3600}});
    return(res.json())
}

type countryType = {
    name: {common: string},
    population: number,
    region: string,
    capital: string[],
    flags: {svg: string}
}

const Countries = async () => {
    let data =  await fetchCountries()
    
  return (
    <section className="p-4 sm:px-6 md:px-8 lg:px-12 grid-flex gap-y-12 justify-items-center">
        {data.map((i:countryType) => {
            return (
            <Link href={`/${i.name.common}`} key={i.name.common} className="bg-white dark:bg-dark-blue custom-shadow w-[250px] cursor-pointer transition-all rounded-[4px] overflow-hidden hover:scale-105">
                <Image 
                src={i.flags.svg}
                width={265}
                height={159}
                alt="flag"
                className="w-full aspect-[265/159]"
                />
                <section className="p-4 md:p-6">
                    <h3 className="font-bold text-base">{i.name.common}</h3>
                    <p className="text-sm font-semibold">Population: <span className="font-normal text-dark-gray dark:text-very-light-gray">{Intl.NumberFormat('en-US').format(i.population)}</span> </p>
                    <p className="text-sm font-semibold">Region: <span className="font-normal text-dark-gray dark:text-very-light-gray">{i.region}</span></p>
                    <p className="text-sm font-semibold">Capital: <span className="font-normal text-dark-gray dark:text-very-light-gray">{i.capital}</span></p>
                </section>
            </Link>
            )
        })}
    </section>
  )
}

export default Countries