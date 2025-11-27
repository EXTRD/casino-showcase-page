import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I claim the welcome bonus?",
    answer: "Simply register a new account and make your first deposit. The 200% bonus up to €1,000 will be automatically credited to your account along with 100 free spins on selected slots.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, e-wallets including PayPal, Skrill, and Neteller, bank transfers, and various cryptocurrencies. All transactions are secured with SSL encryption.",
  },
  {
    question: "How long do withdrawals take?",
    answer: "E-wallet withdrawals are processed within 24 hours. Card and bank transfer withdrawals typically take 2-5 business days depending on your banking provider.",
  },
  {
    question: "Are your games fair?",
    answer: "Yes, all our games use certified Random Number Generators (RNG) and are regularly audited by independent testing agencies. We hold licenses from multiple gaming authorities.",
  },
  {
    question: "What is responsible gambling?",
    answer: "Responsible gambling means playing within your means and for entertainment only. We offer deposit limits, self-exclusion options, and links to support organizations for anyone who needs help.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-[25px] border-none px-6 shadow-[0_4px_20px_hsla(45,100%,50%,0.1)]"
            >
              <AccordionTrigger className="text-foreground font-semibold hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
