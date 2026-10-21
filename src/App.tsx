import { useEffect } from "react";
import PageIndex from "./components/PageIndex";

const blogData = {
  title: "Learning to Embrace the Beginner's Mindset",
  body: [
    {
      id: 1,
      heading: "The Art of Slowing Down in a Fast-Paced World",
      content:
        "We live in a world that celebrates speed. Faster internet, quicker deliveries, instant communication, and the constant pressure to achieve more have become part of our everyday lives. Somewhere along the way, we began to associate being busy with being productive and being productive with being successful. But when was the last time you did absolutely nothing without feeling guilty about it? Slowing down is not about abandoning your ambitions or refusing to make progress. It is about learning to be present while moving toward your goals. It means enjoying your morning coffee without checking your phone, taking a walk without listening to a podcast, or spending an evening watching the sunset without feeling the need to capture it. These small moments remind us that life is not simply a collection of tasks waiting to be completed. Sometimes, the most meaningful thing you can do is give yourself permission to pause.",
    },
    {
      id: 2,
      heading: "Why Your Attention Is Your Most Valuable Resource",
      content:
        "Every day, your attention is pulled in a thousand different directions. Notifications interrupt your thoughts, social media encourages endless scrolling, and the fear of missing out makes silence feel uncomfortable. Although technology has made information more accessible than ever, it has also made uninterrupted thinking increasingly difficult. Your attention determines what you notice, what you learn, and ultimately, what you become. When you spend hours consuming other people's lives, you leave less room to build your own. Protecting your attention does not require you to abandon technology. Instead, begin by creating intentional boundaries. Turn off unnecessary notifications, keep your phone away during focused work, and give yourself dedicated time to think without distractions. You may discover that you do not need more hours in the day. You simply need to reclaim the hours you already have.",
    },
    {
      id: 3,
      heading: "The Quiet Power of Showing Up Every Day",
      content:
        "Most meaningful achievements are not the result of one extraordinary moment. They emerge from ordinary actions repeated consistently over time. A writer becomes better by writing, a developer improves by building projects, and an athlete develops strength through regular training. The challenge is that progress often remains invisible during its earliest stages. You might practice for weeks without noticing a significant improvement. You might work on a project for days before it begins to resemble what you imagined. This is where consistency becomes more important than motivation. Motivation is unpredictable, but a small routine can carry you forward even when you do not feel inspired. Start with something so manageable that skipping it feels unnecessary. Read five pages, write a few lines of code, or spend ten minutes learning a new skill. These actions may seem insignificant today, but repeated over months, they can transform your abilities and your confidence.",
    },
    {
      id: 4,
      heading: "Learning to Embrace the Beginner's Mindset",
      content:
        "Being a beginner can feel uncomfortable, especially in a world where everyone seems to be an expert. When you start learning something new, your mistakes are visible, your progress is uneven, and even simple tasks can require enormous effort. It is tempting to compare your first attempt with someone else's tenth year of experience. But every expert once struggled with the fundamentals. The beginner's mindset allows you to approach challenges with curiosity rather than embarrassment. Instead of asking why you are not good at something yet, ask what the experience is teaching you. Replace the need to appear knowledgeable with the willingness to ask questions. Experiment freely, make mistakes, and pay attention to the feedback they provide. Learning becomes much easier when you stop treating confusion as evidence of failure and begin seeing it as a natural part of understanding something new.",
    },
    {
      id: 5,
      heading: "Designing a Life That Reflects Your Values",
      content:
        "It is easy to spend years pursuing goals that were never truly yours. Society offers familiar definitions of success: a prestigious job, an impressive salary, a beautiful home, and a lifestyle that looks appealing from the outside. These things can certainly bring satisfaction, but they do not automatically create a meaningful life. A life designed around your values begins with asking different questions. What kind of work makes you feel engaged? What relationships deserve more of your time? What would you continue doing even if nobody praised you for it? Your answers may not match the expectations of the people around you, and that is perfectly acceptable. Personal fulfillment often requires making deliberate choices about what matters and what does not. You cannot pursue every opportunity, maintain every relationship, or satisfy every expectation. Choosing a direction means accepting that some alternatives must remain unexplored. The goal is not to create a perfect life, but to create one that feels honest and intentional.",
    },
    {
      id: 6,
      heading: "The Beauty of Starting Before You Feel Ready",
      content:
        "Many worthwhile ideas remain unrealized because their creators are waiting for the perfect moment. They wait until they have more experience, better equipment, greater confidence, or a clearer understanding of every possible obstacle. Preparation is valuable, but it can quietly become a way to avoid uncertainty. The truth is that some lessons cannot be learned through planning alone. You learn to communicate by having conversations, to design by creating designs, and to build software by writing code and solving real problems. Your first attempt will probably be imperfect, and that is precisely why it matters. It gives you something concrete to evaluate and improve. Instead of waiting until you feel completely prepared, identify the smallest useful version of your idea and bring it to life. Publish the first article, build the simplest working prototype, or share your initial design. Confidence often follows action rather than preceding it. You do not need to eliminate uncertainty before beginning; you need to become comfortable learning while you move forward.",
    },
    {
      id: 7,
      heading: "Finding Inspiration in the Ordinary",
      content:
        "Inspiration is often associated with extraordinary experiences: travelling to unfamiliar places, witnessing breathtaking landscapes, or meeting remarkable people. Yet some of the most interesting observations come from ordinary surroundings. Morning light falling across a room, the rhythm of a crowded railway station, the smell of rain on warm pavement, or the quiet conversation between strangers can all reveal something worth noticing. The difference is often not what we see but how carefully we pay attention. When your mind is constantly occupied with the next destination, the present moment becomes little more than something to pass through. Try observing your surroundings without immediately reaching for your phone. Notice the shapes, colours, sounds, and small details that usually disappear into the background. If you create things, these observations can become a source of ideas. If you simply want to enjoy life more fully, they can make familiar places feel new again. You do not always need to travel somewhere extraordinary to experience something meaningful.",
    },
    {
      id: 8,
      heading: "Building Better Habits Without Depending on Motivation",
      content:
        "A common mistake when building a new habit is starting with an ambitious plan that depends on feeling motivated every day. You decide to exercise for an hour, read fifty pages, or study for three hours, only to discover that maintaining the routine becomes difficult when life gets busy. A more sustainable approach begins by reducing the effort required to start. Make the desired behaviour easy to access and the unwanted behaviour slightly harder to perform. Keep your book beside your bed, prepare your workspace before going to sleep, or place your exercise clothes where you can see them. Connect the new habit to something you already do regularly. After breakfast, spend ten minutes learning. After work, take a short walk. Before bed, write down one thing you accomplished. These small systems remove some of the daily decisions that make consistency difficult. Remember that the purpose of a habit is not to produce an extraordinary result every single day. It is to make useful actions repeatable, even on ordinary days when your energy and enthusiasm are limited.",
    },
    {
      id: 9,
      heading: "Why Taking Breaks Can Make You More Creative",
      content:
        "When faced with a difficult problem, many people believe the best solution is to concentrate harder and spend more time thinking. Focus is essential, but endless concentration can eventually become counterproductive. Your mind needs opportunities to process information, make connections, and recover from sustained effort. A short walk, a quiet lunch, or a few minutes away from your screen can provide the mental distance needed to approach a problem differently. This does not mean every break will produce a brilliant idea. Rather, stepping away can interrupt repetitive thinking and allow you to return with a fresh perspective. Creative work often involves moving between periods of focused effort and moments of rest. If you are struggling with a coding bug, a design decision, or a difficult piece of writing, consider taking a genuine break instead of repeatedly forcing the same approach. When you return, explain the problem to yourself again and examine it from another angle. Sometimes, the next useful step becomes obvious only after you stop staring at the problem.",
    },
    {
      id: 10,
      heading: "Becoming Comfortable With the Unfinished",
      content:
        "There is something deeply satisfying about completing a task, checking the final box, and moving on to the next challenge. But meaningful work often involves long periods when nothing feels finished. A project may have rough edges, your skills may still be developing, and your plans may change as you discover new information. If you expect every stage to feel complete, you may become frustrated with the natural uncertainty of creating something worthwhile. Learning to tolerate unfinished work allows you to experiment, revise, and improve without demanding immediate perfection. It also helps you separate the quality of your current attempt from your worth as a person. An imperfect draft is not proof that you cannot write. A buggy application is not proof that you cannot develop software. They are simply intermediate versions of something that can improve. Give yourself permission to build in stages. Finish what needs to be finished, learn from what did not work, and accept that some questions will only be answered through continued practice. Progress rarely arrives as a perfect final product. More often, it appears as a series of imperfect versions that gradually become better.",
    },
  ],
};

const heading = blogData.body.map((val) => ({
  id: val.id,
  heading: val.heading,
}));

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://dev.to/api/articles/lionelrowe/how-to-view-the-raw-markdown-of-a-dev-to-post-391b",
      );
      const post = await response.json();

      console.log(post);
      console.log(post.body);
    };
    fetchData();
  }, []);
  console.log(heading);
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="1024"
        viewBox="0 0 1440 1024"
        fill="none"
        className="fixed top-0 left-0 z-0"
      >
        <path d="M90.5 -507L90.5 589" stroke="#A9A9A9" />
        <path d="M180.5 -15L180.5 974" stroke="#A9A9A9" />
        <path d="M270.5 -15L270.5 825" stroke="#A9A9A9" />
        <path d="M360.5 -15L360.5 897" stroke="#A9A9A9" />
        <path d="M450.5 -15L450.5 825" stroke="#A9A9A9" />
        <path d="M540.5 -15L540.5 805" stroke="#A9A9A9" />
        <path d="M630.5 -15L630.5 825" stroke="#A9A9A9" />
        <path d="M720.5 -15L720.5 882" stroke="#A9A9A9" />
        <path d="M810.5 -15L810.5 825" stroke="#A9A9A9" />
        <path d="M900.5 -15L900.5 882" stroke="#A9A9A9" />
        <path d="M990.5 -15L990.5 857" stroke="#A9A9A9" />
        <path d="M1080.5 -15L1080.5 897" stroke="#A9A9A9" />
        <path d="M1170.5 -15L1170.5 882" stroke="#A9A9A9" />
        <path d="M1260.5 -15L1260.5 857" stroke="#A9A9A9" />
        <path d="M1350.5 -15L1350.5 595" stroke="#A9A9A9" />
        <path d="M2 89.5H1440" stroke="#A9A9A9" />
        <path d="M2 179.5H1440" stroke="#A9A9A9" />
        <path d="M2 269.5H1440" stroke="#A9A9A9" />
        <path d="M2 359.5H1440" stroke="#A9A9A9" />
        <path d="M2 449.5H1440" stroke="#A9A9A9" />
        <g filter="url(#filter0_f_819_52)">
          <ellipse cx="702" cy="703.5" rx="673" ry="523.5" fill="white" />
        </g>
        <defs>
          <filter
            id="filter0_f_819_52"
            x="-71"
            y="80"
            width="1546"
            height="1247"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0"
              result="effect1_foregroundBlur_819_52"
            />
          </filter>
        </defs>
      </svg>
      <div className="Text-5xl h-full max-w-3xl mx-auto my-44 relative z-10">
        <h1 className="text-4xl font-semibold font-mono text-neutral-800 mb-20 ">
          {blogData.title}
        </h1>

        {blogData.body.map((val, idx) => (
          <>
            <h2
              onClick={() => {
                document.getElementById(`${val.id + 1}`)?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
              className="font-semibold text-neutral-500 font-mono mb-4 text-xl"
              id={`${val.id}`}
            >
              <span className="pr-1 hover:text-neutral-900">
                {" "}
                {String(idx + 1).padStart(2, "0")}.{" "}
              </span>
              {val.heading}
            </h2>
            <p className="text-neutral-500 font-sans tracking-wide mb-14">
              {val.content}
            </p>
          </>
        ))}
        <PageIndex headinItems={heading} postions="BottomLeft" />
      </div>
    </>
  );
}

export default App;
