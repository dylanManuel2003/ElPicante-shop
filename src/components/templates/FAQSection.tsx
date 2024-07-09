"use client"
import { useState } from "react";

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left text-xl font-medium text-black dark:text-white">
                {question}
                <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                </span>
            </button>
            <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="mt-2 text-[#111] dark:text-[#ddd]">{answer}</p>
            </div>
        </div>
    );
};

const FAQSection = () => {
    const faqData = [
        {
            question: '¿Cómo puedo hacer un pedido?',
            answer: 'Para hacer un pedido, simplemente navegue a la página de productos, elija el producto que desea y consulte la disponiblidad del mismo desde el boton de stock.',
        },
        {
            question: '¿Cuáles son los métodos de pago disponibles?',
            answer: 'De momento solo tenemos dispoble transferencias bancarias, efectivo y links de mercado pago.',
        },
        {
            question: '¿Puedo rastrear mi pedido?',
            answer: 'Actualemente no tenemos esta función disponible en nuestra web pero puede hacer cualquier consulta sobre su compra vía whatsapp.',
        },
        {
            question: '¿Cuál es la política de devolución?',
            answer: 'Puede devolver los productos dentro de los 15 días posteriores a la compra. Asegúrese de que los productos estén en su estado original.',
        },
    ];

    return (
        <section className="w-[90%] mx-auto h-[70vh] text-black dark:text-white flex flex-col items-center justify-center ">
            <h2 className="text-[30px] font-bold text-center mt-12 mb-8 font-nosifer text-gold">Preguntas Frecuentes</h2>
            <div className="w-full">
                {faqData.map((item, index) => (
                    <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
        </section>
    );
};

export default FAQSection;