import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+15373828272',
        icon: faPhoneAlt,
        background: 'primary'
    },

]

const BusinessInfo = () => {
    return (
        <section className='d-flex justify-content-center'>
            <div className="w-75 row">
                {
                    infosData.map(info => <InfoCard info={info} key={info.title} />)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;