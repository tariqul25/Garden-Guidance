import React from 'react';

const Qna = () => {
    return (
        <div className='my-4 ' >
            <h1 className='text-4xl text-center'>QnA</h1>
            <div className="collapse collapse-plus bg-green-200 dark:bg-green-200 border border-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">How can I start a garden in a small space?</div>
                <div className="collapse-content text-sm">
                    Use containers, hanging pots, or vertical planters. Choose compact plants like herbs or leafy greens. Ensure sunlight, regular watering, and use quality soil for healthy growth in limited areas.
                </div>
            </div>
            <div className="collapse collapse-plus bg-green-200 dark:bg-green-200 border border-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">What’s the best way to improve soil quality?</div>
                <div className="collapse-content text-sm">
                    Add compost, mulch, or organic fertilizer regularly. Avoid chemical overuse. Rotate crops each season to maintain nutrients and boost soil health for stronger plant growth.
                </div>
            </div>
            <div className="collapse collapse-plus bg-green-200 dark:bg-green-200 border border-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">How do I keep my garden healthy without chemicals?</div>
                <div className="collapse-content text-sm">
                    Use neem oil, compost tea, and beneficial insects. Keep plants spaced, weed regularly, and choose disease-resistant varieties. Monitor early signs of pests or disease.
                </div>
            </div>
            <div className="collapse collapse-plus bg-green-200 dark:bg-green-200 border border-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">How often should I water my plants?</div>
                <div className="collapse-content text-sm">
                    Most plants need water when the top inch of soil feels dry. Water early morning, deeply but less often, and adjust based on weather and plant type.
                </div>
            </div>
            <div className="collapse collapse-plus bg-green-200 dark:bg-green-200 border border-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">What are the easiest vegetables to grow for beginners?</div>
                <div className="collapse-content text-sm">
                    Radishes, lettuce, green beans, and spinach are great for beginners. They're fast-growing, low-maintenance, and require basic care like sun, water, and simple soil.
                </div>
            </div>
         
        </div>
    );
};

export default Qna;