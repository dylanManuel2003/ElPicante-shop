import React from 'react'

const CardTopicOffer = () => {
    return (
        <div className="relative flex-shrink-0 max-w-xs mx-2 -mb-6 overflow-hidden bg-purple-500 rounded-lg shadow-lg">
            <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
                <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="#a17cf3">
                </rect>
                <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="#a17cf3">
                </rect>
            </svg>
            <div className="relative flex items-center justify-center px-10 pt-10">
                <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24">
                </div>
                <img className="relative w-40" src="/images/step3.png" alt="shopping" />
            </div>
            <div className="relative px-6 pb-6 mt-6 text-white">
                <span className="block -mb-1 opacity-75">
                    Outdoor
                </span>
                <div className="flex justify-between">
                    <span className="block text-xl font-semibold">
                        Oak Tree
                    </span>
                    <span className="flex items-center px-3 py-2 text-xs font-bold leading-none text-purple-500 bg-white rounded-full">
                        $68.50
                    </span>
                </div>
            </div>
        </div>
    )
}

const Offer = () => {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center">
            <h3 className="text-[24px] font-bold mb-4">Productos destacados</h3>
            <div className='w-[90%] mx-auto gap-4 flex'>
                <div className="w-[60%] h-full bg-primary ">promo 1</div>
                <aside className="w-[40%] h-full flex flex-col justify-between items-center">
                    <CardTopicOffer />
                    <CardTopicOffer />
                </aside>
            </div>
        </section>
    )
}

export default Offer
