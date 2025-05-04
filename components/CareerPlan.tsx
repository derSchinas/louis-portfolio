import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
    DialogTrigger,
} from "@/components/ui/dialog";

export default function CarrerPlan(){

    return(
        <Dialog>
            <DialogTrigger asChild>
                <div className="px-4 py-2 bg-lime-600 dark:bg-lime-300 text-white dark:text-neutral-900 rounded-lg hover:bg-lime-700 dark:hover:bg-lime-400 transition-colors"
                >
                My Career Plan
                </div>
            </DialogTrigger>

            <DialogContent className="max-h-[80vh] overflow-y-auto">

            <DialogHeader>
                <DialogTitle className="font-semibold text-3xl text-lime-600 dark:text-lime-300">
                    My Career Plan
                </DialogTitle>
            </DialogHeader>

            <CareerPlanSection 
                number="1"
                title="Be self-aware"
                question="What actions can you take to really understand your interests, values, skills, personality and strengths?"
                answer="To figure out my interests, skills, values, and personality, I started by reflecting with friends and family who saw IT as my fit. That led me to a one-year IT internship at IAL, sparking my pursuit of Business Informatics at Reutlingen University. I discovered I lean more toward computer science than business, especially after my first 3 semesters. In my study abroad semester courses like Psychology and Future of work, ignited my passion for neuroscience, its fusion with tech (AI and Neural Computing) and the change that AI will bring in the future for the Society. Friends still peg me as a natural at networking, communication, and presentations skills from my rhetoric seminar hinting I’d shine in sales, management, or as an entrepreneur. I’ll keep digging by seeking feedback from internship colleagues and testing my creativity in real-world projects. This grounded approach keeps me true to my drive for innovation and openness, steering me toward a Consultant Job in Digital Transformation."
            />

            <CareerPlanSection 
                number="2"
                title="Explore your options"
                question="What do you need to research to be clear about your options? What could you do to learn more about career options in your areas of interest?"
                answer="To explore my options, I’ll tap my network for friends’ experiences and internship leads, like my Student Consulting gig. I’m hunting for fresh passions, diving into workshops, seminars, and international workshops like my Computer Networking Workshop from Cisco in the UK that broaden my view. I’ll research cutting-edge firms like Cortical Labs in Melbourne, who just built the first commercial computer with a human brain cell processor, eyeing roles blending neuroscience and informatics. Scouring LinkedIn Jobs, I’ll check skills (e.g., Python, KI frameworks), duties (e.g., neural coding), and global opportunities in places like London. Talks with tech pros will reveal what’s hot in neuroscience-tech, while I’ll scope neuroscience x tech Master programs at schools like ETH Zurich to merge my interests. This mix of networking, hands-on exploration, and research will guide me toward a career in Consulting/Developing in innovative tech or my own startup."
            />

            <CareerPlanSection 
                number="3"
                title="Gain experience and insight"
                question="What actions could you take to help you learn more about your industry or find opportunities to develop your skills or find work experience opportunities?"
                answer="To dive deeper into neuroscience and tech, I’m chasing a 2025 internship maybe at Cortical Labs in Melbourne, whose brain-cell processor blew my mind or another innovative firm. I’ll work on my own Projects like the AI-Chatbot on my Website to sharpen my skills in real time. Applying for Internships in tech hubs, I’ll use my rhetoric seminar finesse to get the scoop on industry shifts. Subscribing to 'Nature Neuroscience' and hitting tech meetups will keep me in the loop. These steps internships, side projects, and straight-up talks will stack my know-how and connections, prepping me for a career that fuses computer science with brain science breakthroughs."
            />

            <CareerPlanSection 
                number="4"
                title="Evidence your skills (knowledge, skills and attributes)"
                question="What action can you take to find out more about what skills you might need to develop in your future career? How might you document/record these?"
                answer="To identify skills for a neuroscience-tech career, I’ll scour Seek job listings for roles like AI Developer, targeting gaps like KI frameworks (e.g., PyTorch) while leveraging my presentation strengths from rhetoric training. I’ll dive into tech conference discussions to uncover must-have skills like algorithm optimization. To build expertise, I’m training an AI chatbot for my website, integrating it with a Fitness Tracking app I plan to code, and publishing both on GitHub to showcase my skills. I’ll document code, progress, and reflections in my website’s project portfolio, while tracking skills like Python and creative problem-solving in a compact journal, updated after internships or my Semester abroad peer feedback. This practical approach job research, pro talks, and public code will prove I’m ready for global tech roles or a startup, focusing on tangible results over academic fluff."
            />

            <div className="mb-6">
                <h3 className="font-semibold text-xl text-neutral-800 dark:text-neutral-200 mb-2">5. Develop networks</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                    <strong>List three things you could do to start building your professional networks.</strong>
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">
                To grow my network in neuroscience, tech, and entrepreneurship, I’ll focus on these:
                </p>
                <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400 space-y-1">
                    <li><strong>1.	Hit Tech Meetups:</strong> I’ll dive into KI events in Berlin or global conferences, using my ENTJ-A confidence to connect with pros and exchange ideas.</li>
                    <li><strong>2.	Connect on LinkedIn:</strong> 2.	Connect on LinkedIn: I’ll reach out to Reutlingen alumni and neuroscience-tech experts, joining groups like "AI & Neuroscience" to build international ties.</li>
                    <li><strong>3.	Leverage Internships:</strong> I’ll intern at innovative firms like Cortical Labs, using my presentation skills to bond with innovators and startup founders.
                        These moves will get me in the room with the right people, unlock opportunities, and support my plan to work internationally—maybe in Melbourne—before launching my own venture in groundbreaking tech.
                    </li>
                </ul> 
                <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                    These moves will plug me into the scene, spark real opportunities, and back my plan to work internationally-maybe even in Melbourne-before launching my own venture in cutting-edge tech.
                </p>
            </div>

        </DialogContent>

        </Dialog>
    )

    interface CareerPlanSectionProps {
        number: string;
        title: string;
        question: string;
        answer: string;
    }
      
    function CareerPlanSection({ number, title, question, answer }: CareerPlanSectionProps) {
        return (
            <div className="mb-6">
            <h3 className="font-semibold text-xl text-neutral-800 dark:text-neutral-200 mb-2">{number}. {title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                <strong>{question}</strong>
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">{answer}</p>
            </div>
        );
    }
}


