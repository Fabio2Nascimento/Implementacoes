import React from 'react'
import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json())

const Index = () => {
    const { data, error } = useSWR(`/api/analytic/metrics`, fetcher)

    if (error) return 'An error has occurred.'
    if (!data)
        return (
            <div className='flex justify-center items-center mt-52 overflow-hidden'>
                <div
                    className={`animate-spin rounded-full h-32 w-32 border-b-8 `}
                ></div>
            </div>
        )


    return (
        <div><pre>{JSON.stringify(data, null, 2)}</pre></div>
    )
}

export default Index