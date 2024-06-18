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
            answer: 'Para hacer un pedido, simplemente navegue a la página de productos, agregue los productos que desea a su carrito y proceda a la compra.',
        },
        {
            question: '¿Cuáles son los métodos de pago disponibles?',
            answer: 'Aceptamos varios métodos de pago, incluidos tarjeta de crédito, PayPal y transferencias bancarias.',
        },
        {
            question: '¿Puedo rastrear mi pedido?',
            answer: 'Sí, puede rastrear su pedido utilizando el número de seguimiento proporcionado en el correo de confirmación del envío.',
        },
        {
            question: '¿Cuál es la política de devolución?',
            answer: 'Puede devolver los productos dentro de los 30 días posteriores a la compra. Asegúrese de que los productos estén en su estado original.',
        },
    ];

    return (
        <section className="w-[90%] mx-auto h-[90vh] text-black dark:text-white flex flex-col items-start justify-center ">
            <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
            <div className="w-full">
                {faqData.map((item, index) => (
                    <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
        </section>
    );
};

export default FAQSection;