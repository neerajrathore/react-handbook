import React from 'react'
import { LinearProgressBar } from '../../components/Common'

const RatingComponent = ({ name, ratingValue, ratingCount, reviewCount, ratingSection, title = "Average Rating" }) => {

    return (
        <>
            <h6 style={{ color: 'var(--gray---gray-900)', marginBottom: 16 }}>{name}</h6>
            <div className='tw-flex tw-items-center'>
                <div className='tw-mr-4 tw-text-center'>
                    <span style={{ color: 'var(--gray---gray-900)', lineHeight: 'normal' }} className='body-main tw-block'>{title}</span>
                    <div className='tw-flex tw-items-center tw-justify-center tw-my-1' >
                        <ion-icon name="star" style={{ color: 'var(--utility---warning--main)', marginRight: 4, fontSize: 32 }}></ion-icon>
                        <h5 style={{ color: 'var(--gray---gray-900)' }} className='tw-mb-0 tw-ml-1'>{ratingValue}</h5>
                    </div>
                    <div className='body-small' style={{ color: 'var(--gray---gray-600)' }}>{ratingCount}</div>
                    <div className='body-small' style={{ color: 'var(--gray---gray-600)' }}>{reviewCount}</div>
                </div>
                <div style={{ borderLeft: '1px solid #CED2D6', width: 278, maxWidth: 'calc(100% - 94px)' }} className='tw-pl-4'>
                    {ratingSection.map((item, index) => (
                        <div key={index} className='tw-mb-2 tw-flex tw-items-center'>
                            <div style={{ color: 'var(--gray---gray-600)' }} className='body-main tw-mr-1'>{item.rating}</div> <ion-icon name="star" style={{ color: 'var(--gray---gray-400)', fontSize: '16px' }}></ion-icon>
                            <LinearProgressBar containerStyle={{ marginBottom: 0, marginLeft: 12 }} height={6} percent={item.value} />
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    )
}

export default RatingComponent
