/* eslint-disable no-unused-vars */
import React from 'react'

function Services() {
    const services = [
        { id: 1, title: 'Membership Organisations', description: 'Our membership management software provides full automation of membership renewals and payments', Image: '/src/assets/services/members.png' },
        { id: 2, title: 'National Associations', description: 'Our membership management software provides full automation of membership renewals and payments', Image: '/src/assets/services/National.png' },
        { id: 3, title: 'Clubs And Groups', description: 'Our membership management software provides full automation of membership renewals and payments', Image: '/src/assets/services/Clubs And Groups.png' },
    ]
    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>

            <div className='text-center my-8'>
                <h2 className='text-4xl text-DarkGray'>Our Clients</h2>
                <p className='text-lightGray mt-4'>We have been working with some Fortune 500+ clients</p>
                {/* company logo */}
                <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                    <img src="/src/assets/company_logos/1.png" alt="" />
                    <img src="/src/assets/company_logos/2.png" alt="" />
                    <img src="/src/assets/company_logos/3.png" alt="" />
                    <img src="/src/assets/company_logos/4.png" alt="" />
                    <img src="/src/assets/company_logos/5.png" alt="" />
                    <img src="/src/assets/company_logos/6.png" alt="" />
                    <img src="/src/assets/company_logos/7.png" alt="" />
                </div>
                {/*  service card */}
                <div className='mt-20 md:w-1/2 mx-auto text-center'>
                    <h2 className='text-4xl text-DarkGray'>Manage your entire community in a single system</h2>
                    <p className='text-lightGray mt-4'>Who is Nextcent suitable for?
                    </p>
                </div>
                {/* cards */}
                <div>
                    {
                        services.map(service => <div key={service.id}>
                            <div>
                                <div><img src={service.Image} alt="" /></div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Services
