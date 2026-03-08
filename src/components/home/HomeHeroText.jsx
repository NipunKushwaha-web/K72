import React from 'react';
import Video from './Video';

const HomeHeroText = () => {
    return (
        <h1 className='font-[font1] mt-72 lg:mt-0 pt-5 text-center'>
            <span className='lg:text-[6rem] text-[4rem] justify-center flex items-center uppercase lg:leading-[6.5rem] leading-[4.5rem]'>
                L'étincelle
            </span>
            <span className='lg:text-[6rem] text-[4rem] justify-center flex items-start uppercase lg:leading-[6.5rem] leading-[4.5rem]'>
                qui
                <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden'>
                    <Video />
                </div>
                génère
            </span>
            <span className='lg:text-[6rem] text-[4rem] justify-center flex items-center uppercase lg:leading-[6.5rem] leading-[4.5rem]'>
                la créativité
            </span>
        </h1>
    );
};

export default HomeHeroText;