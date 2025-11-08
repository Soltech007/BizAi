import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    {
        question: "Is Freight Sync safe to use?",
        answer: "Yes — all your data is encrypted and securely stored on AWS servers in India."
    },
    {
        question: "Can I start with a small fleet?",
        answer: "Absolutely. Start with 5 trucks, scale to 500 anytime."
    },
    {
        question: "How much does it cost?",
        answer: "Simple, pay-per-vehicle monthly plans. No hidden fees."
    },
    {
        question: "Can my accountant use it easily?",
        answer: "Yes, the system auto-generates all billing and trip data — no double entry."
    }
];

export default function Benefits() {
    return (
        <section className="py-20 md:py-28 bg-accent/50">
            <div className="container max-w-3xl px-4 md:px-8">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">❓ Common Questions</h2>
                </div>

                <Accordion type="single" collapsible className="w-full mt-12">
                    {faqs.map((faq, i) => (
                        <AccordionItem value={`item-${i}`} key={i}>
                            <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                            {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
