import VideoSection from "../../components/VideoSection"

const ParrainagePresentation = () => {
    const videoInfos = {
        urlYoutubeLink: 'WO7SRf5PCE0',
        title: 'Comment Parrainer',
    }
    return (
        <section id='pourquoi-parrainer'>
            <h2 className='bg-blue-theme text-white text-4xl h-45vh w-full flex justify-center p-6'>
                Pourquoi Parrainer ?
            </h2>
            <div className='items-center mx-auto lg:mt-[10vh]'>
                <div className="mx-auto lg:w-8/12 mt-5 ">
                    <VideoSection title='' id={videoInfos.urlYoutubeLink}/>
                </div>
            </div>
        </section>
    )
}

export default ParrainagePresentation
