import image1 from '@/public/feature_1.webp';
import image2 from '@/public/feature_2.webp';
import image3 from '@/public/feature_3.webp';
import image4 from '@/public/feature_4.webp';
import ScrollAnimation from '../common/scrollAnimation/ScrollAnimation';
import SingleWork from './SingleWork';
import ButtonComponent from '../common/button/button';

const FeaturedWorks = () => {

    const projects = [
        {
            _id: 1,
            title: "Cellares",
            description: "Corporate Website",
            image: image1
        },
        {
            _id: 2,
            title: "Lumana",
            description: "Corporate Website",
            image: image2
        },
        {
            _id: 3,
            title: "Ambi Robotics",
            description: "Corporate Website",
            image: image3
        },
        {
            _id: 4,
            title: "Optimal Dynamics",
            description: "Corporate Website",
            image: image4
        },
    ];

    return (
        <div className='max-w-screen-xl lg:px-5 xl:px-0 mx-auto py-52'>
            {/* Title */}
            <div className="mb-28 overflow-hidden">
                <ScrollAnimation
                    initialPosition="100%"
                    finalPosition="0%"
                    duration={1}
                    delay={0.7}
                    position="y"
                >
                    <div className='flex flex-col justify-center items-center lg:justify-normal lg:items-start'>
                        <h2 className='md:text-6xl text-4xl font-bold'>Our Work</h2>
                        <p className='mt-8 text-gray-600 text-lg'>Explore some of our latest website projects.</p>
                    </div>
                </ScrollAnimation>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-36 md:gap-y-20 gap-y-12'>
                {projects.map((project, index) => (
                    <SingleWork
                        key={index}
                        index={index}
                        project={project}
                    ></SingleWork>
                ))}
            </div>
            <div className="mt-40 flex justify-center lg:ml-10 overflow-hidden">
                <ButtonComponent textColor='black' text={'VIEW MORE WORK'} link={'/'} BGColor='bg-[#e261b1]' />
            </div>
        </div>
    );
};

export default FeaturedWorks;
