import React from "react";
import Highlights from "../../components/Highlights";

const ZeroToOne = () => {
  const highlights = [
    "If you think something hard is impossible, you’ll never even start trying to achieve it. Belief in secrets is an effective truth. The actual truth is that there are many more secrets left to find, but they will yield only to relentless searchers. There is more to do in science, medicine, engineering, and in technology of all kinds. We are within reach not just of marginal goals set at the competitive edge of today’s conventional disciplines, but of ambitions so great that even the boldest minds of the Scientific Revolution hesitated to announce them directly. We could cure cancer, dementia, and all the diseases of age and metabolic decay. We can find new ways to generate energy that free the world from conflict over fossil fuels. We can invent faster ways to travel from place to place over the surface of the planet; we can even learn how to escape it entirely and settle new frontiers. But we will never learn any of these secrets unless we demand to know them and force ourselves to look.",
    "We can be glad that there are fewer crazy cults now, yet that gain has come at great cost: we have given up our sense of wonder at secrets left to be discovered.",
    "For example, a world without secrets would enjoy a perfect understanding of justice. Every injustice necessarily involves a moral truth that very few people recognize early on: in a democratic society, a wrongful practice persists only when most people don’t perceive it to be unjust. At first, only a small minority of abolitionists knew that slavery was evil; that view has rightly become conventional, but it was still a secret in the early 19th century. To say that there are no secrets left today would mean that we live in a society with no hidden injustices.",
    "four social trends have conspired to root out belief in secrets. First is incrementalism. From an early age, we are taught that the right way to do things is to proceed one very small step at a time, day by day, grade by grade. If you overachieve and end up learning something that’s not on the test, you won’t receive credit for it. But in exchange for doing exactly what’s asked of you (and for doing it just a bit better than your peers), you’ll get an A. This process extends all the way up through the tenure track, which is why academics usually chase large numbers of trivial publications instead of new frontiers. Second is risk aversion. People are scared of secrets because they are scared of being wrong. By definition, a secret hasn’t been vetted by the mainstream. If your goal is to never make a mistake in your life, you shouldn’t look for secrets. The prospect of being lonely but right—dedicating your life to something that no one else believes in—is already hard. The prospect of being lonely and wrong can be unbearable. Third is complacency. Social elites have the most freedom and ability to explore new thinking, but they seem to believe in secrets the least. Why search for a new secret if you can comfortably collect rents on everything that has already been done? Every fall, the deans at top law schools and business schools welcome the incoming class with the same implicit message: “You got into this elite institution. Your worries are over. You’re set for life.” But that’s probably the kind of thing that’s true only if you don’t believe it. Fourth is “flatness.” As globalization advances, people perceive the world as one homogeneous, highly competitive marketplace: the world is “flat.” Given that assumption, anyone who might have had the ambition to look for a secret will first ask himself: if it were possible to discover something new, wouldn’t someone from the faceless global talent pool of smarter and more creative people have found it already? This voice of doubt can dissuade people from even starting to look for secrets in a world that seems too big a place for any individual to contribute something unique.",
    "On the one hand, a scapegoat is necessarily weak; he is powerless to stop his own victimization. On the other hand, as the one who can defuse conflict by taking the blame, he is the most powerful member of the community.",
    "Reject the unjust tyranny of Chance, you are not a lottery ticket",
    "Lol quote: \"OF THE SIX PEOPLE who started PayPal, four had built bombs in high school.\"",
    "Remember our contrarian question: what important truth do very few people agree with you on? If we already understand as much of the natural world as we ever will—if all of today’s conventional ideas are already enlightened, and if everything has already been done—then there are no good answers. Contrarian thinking doesn’t make any sense unless the world still has secrets left to give up.",
    "You should focus relentlessly on something you’re good at doing, but before that you must think hard about whether it will be valuable in the future.",
    "Victory awaits him who has everything in order — luck , people call it . ",
    "A definite view , by contrast , favors firm convictions . Instead of pursuing many - sided mediocrity and calling it “ well - roundedness , ” a definite person determines the one best thing to do and then does it .",
    "The most contrarian thing of all is not to oppose the crowd but to think for yourself.",
    "Instead of working tirelessly to make herself indistinguishable, she strives to be great at something substantive — to be a monopoly of one . This is not what young people do today , because everyone around them has long since lost faith in a definite world . No one gets into Stanford by excelling at just one thing , unless that thing happens to involve throwing or catching a leather ball .",
    "Americans mythologize competition and credit it with saving us from socialist bread lines. Actually, capitalism and competition are opposites. Capitalism is premised on the accumulation of capital, but under perfect competition all profits get competed away. The lesson for entrepreneurs is clear: if you want to create and capture lasting value, don’t build an undifferentiated commodity business.",
    "The indefiniteness of finance can be bizarre . Think about what happens when successful entrepreneurs sell their company . What do they do with the money ? In a financialized world , it unfolds like this : • The founders don’t know what to do with it , so they give it to a large bank . • The bankers don’t know what to do with it , so they diversify by spreading it across a portfolio of institutional investors . • Institutional investors don’t know what to do with their managed capital , so they diversify by amassing a portfolio of stocks . • Companies try to increase their share price by generating free cash flows . If they do , they issue dividends or buy back shares and the cycle repeats . At no point does anyone in the chain know what to do with money in the real economy . But in an indefinite world , people actually prefer unlimited optionality ; money is more valuable than anything you could possibly do with it . Only in a definite future is money a means to an end , not the end itself.",
    "Perfect equilibrium may describe the void that is most of the universe.",
    "Even working remotely should be avoided, because misalignment can creep in whenever colleagues aren’t together full-time, in the same place, every day. If you’re deciding whether to bring someone on board, the decision is binary. Ken Kesey was right: you’re either on the bus or off the bus.",
    "The best startups might be considered slightly less extreme kinds of cults. The biggest difference is that cults tend to be fanatically wrong about something important. People at a successful startup are fanatically right about something those outside it have missed. You’re not going to learn those kinds of secrets from consultants, and you don’t need to worry if your company doesn’t make sense to conventional professionals. Better to be called a cult—or even a mafia.",
    "Doing something different is what’s truly good for society—and it’s also what allows a business to profit by monopolizing a new market. The best projects are likely to be overlooked, not trumpeted by a crowd; the best problems to work on are often the ones nobody else even tries to solve.",
    "Elite students climb confidently until they reach a level of competition sufficiently intense to beat their dreams out of them. Higher education is the place where people who had big plans in high school get stuck in fierce rivalries with equally smart peers over conventional careers like management consulting and investment banking. For the privilege of being turned into conformists, students (or their families) pay hundreds of thousands of dollars in skyrocketing tuition that continues to outpace inflation. Why are we doing this to ourselves?",
    'The hazards of imitative competition may partially explain why individuals with an Asperger’s-like social ineptitude seem to be at an advantage in Silicon Valley today. If you’re less sensitive to social cues, you’re less likely to do the same things as everyone else around you. If you’re interested in making things or programming computers, you’ll be less afraid to pursue those activities single-mindedly and thereby become incredibly good at them. Then when you apply your skills, you’re a little less likely than others to give up your own convictions: this can save you from getting caught up in crowds competing for obvious prizes.',
    "As a good rule of thumb, proprietary technology must be at least 10 times better than its closest substitute in some important dimension to lead to a real monopolistic advantage. Anything less than an order of magnitude better will probably be perceived as a marginal improvement and will be hard to sell, especially in an already crowded market. The clearest way to make a 10x improvement is to invent something completely new.",
    "As you craft a plan to expand to adjacent markets , don’t disrupt : avoid competition as much as possible, dominate a small niche and scale up from there.",
    'Shallow men believe in luck , believe in circumstances . … Strong men believe in cause and effect ',
    "Finance epitomizes indefinite thinking because it’s the only way to make money when you have no idea how to create wealth.",
  ];

  const review = `
    I really liked this book and it gets me excited to review the quotes, I picked lot's of highlights because many of them were very significant and I feel that they should be accounted for.

    This book is a great overview on the philosophy of innovating and being a contrarian, there's multiple things in here that I get from this book that I'd like to incorporate in my life:

    - Secrets are out there, sure it seems like we're the most advanced society has ever been and there's nothing more to innovate in, or it's terribly complicated, but that has been the thought that has plagued every people's life's throughout history, even if you're not an entrepreneur or an innovator, a creative approach of being a contrarian and knowing that things aren't set in stone is a valuable philosophy, you can make things better for yourself, and maybe even for others.

    - The philosophy and realness around appreciating the art of (work) innovation; persist, "you are not a lottery ticket" is a powerful quote, do not let your life be dictated by chance.

    - Be a contrarian, swim against the waters if you can, you will learn more, movement is needed in life, become a monopoly of one.

    - Cults are cool, join one.

    - Finance is a cop out

    I recommend this book, I give it a 4.5/5.
  `;

  const highlightsUrl = process.env.PUBLIC_URL + "/2023/Zero to One-Notebook.html";

  return (
    <div>
      <Highlights highlights={highlights} highlightsUrl={highlightsUrl} review={review}/>
    </div>
  );
};

export default ZeroToOne;