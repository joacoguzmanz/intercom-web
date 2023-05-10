const AboutCard = ({ preTitle, title, desc }) => {
    return (
        <div className='bg-white text-gray-800 rounded-lg p-6 md:py-12 md:px-8 basis-1/3 group'>
            <p className='text-sm uppercase mb-8 group-hover:text-primary'>{ preTitle }</p>
            <h4 className='text-4xl font-medium mb-4 group-hover:text-primary'>{ title }</h4>
            <p className='group-hover:text-primary'>{ desc }</p>
        </div>
    )
}

export default AboutCard;