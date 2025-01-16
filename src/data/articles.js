import React from "react";

function article_1() {
	return {
		id: "1",
		date: "July 18, 2024",
		title: "1: The Beginning",
		description:
			"Welcome!",
		style: `
				.article-container {
					width: 100%;
					min-width: 345px;
				}
				.subtitle {
					font-size: 30px;
					color: dark-gray;
					font-weight: bold;
					padding-bottom: 5%
				}
				.body-text {
					font-size: 18px;
					color: black;
					font-weight: normal;
				}
				`,
		keywords: [
			"Justin",
			"Justin O",
			"Justin O'Dwyer",
		],
		tags: [
			"Misc"
		],
		body: (
			<React.Fragment>
				<div className="article-container">
						<div className="subtitle">
							What this is
						</div>
						<div className="body-text">
							I wasn't sure whether to call this part of the site a journal or a blog. Maybe it is a blog, but the term doesn't sit quite sit right with me somehow. I think it's because a blog is meant to be read by others. Surely these entries <i>may</i> be read by others, but this is not particularly the <i>goal</i>.
							<br></br><br></br>
							The impetus for this was the great jumble of random thoughts rolling around in the back of my head. Sometimes something interesting will pass through and I'll think to myself "wow, I should really write that down!" but I usually don't. Writing in a google doc lacks a certain kind of finality that I desire. I also do often want to share my thoughts with others, which this medium allows.
							<br></br><br></br>
							Thus is born the journal. Let's see what this becomes.
						</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		id: "2",
		date: "July 18, 2024",
		title: "2: More About Me",
		description:
			"Information about myself, my parents, and my family background.",
		style: `
				.article-container {
					width: 100%;
					min-width: 345px;
				}
				.subtitle {
					font-size: 30px;
					color: dark-gray;
					font-weight: bold;
					padding-bottom: 5%
				}
				.body-text {
					font-size: 18px;
					color: black;
					font-weight: normal;
				}
				`,
		keywords: [
			"Justin",
			"Justin O",
			"Justin O'Dwyer",
		],
		tags: [
			"Personal"
		],
		body: (
			<React.Fragment>
				<div className="article-container">
						<div className="subtitle">
							My family
						</div>
						<div className="body-text">
							I grew up in the small suburban town of Westwood, Massachusetts.
							<br></br><br></br>
							My mother went to Rutgers and is a vice principal at a public high school in East Boston and immigrated to the United States as a child from Buenos Aires, Argentina. Her parents both grew up in Buenos Aires, and 3 of her grandparents are originally from Spain. Her other grandparent was born in Buenos Aires, but his parents both came to Argentina as Jewish immigrants from an area of Eastern Europe called Bessarabia, which no longer exists. The area is now somewhere in the region of Moldova, Ukraine, and Romania. See <a href="/#/article/4">My Mother's Side</a>.
							<br></br><br></br>
							My father went to Berklee College of Music and is a music teacher at a public elementary school in East Boston. His mother is from London, England, and his father was born in the United States as the son of Eleanor Starbuck, a descendant of the Starbuck whaling family, originally based in Nantucket. Myself, my father, and I all share the middle name Starbuck as an homage. See <a href="/#/article/5">My Father's Side</a>.
						</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		id: "3",
		date: "July 18, 2024",
		title: "3: Fun Facts",
		description:
			"A collection of interesting, odd, unusual, or mildly amusing facts about my family.",
		style: `
				.article-container {
					width: 100%;
					min-width: 345px;
				}
				.subtitle {
					font-size: 30px;
					color: dark-gray;
					font-weight: bold;
					padding-bottom: 5%
				}
				.body-text {
					font-size: 18px;
					color: black;
					font-weight: normal;
				}
				`,
		keywords: [
			"Justin",
			"Justin O",
			"Justin O'Dwyer",
		],
		tags: [
			"Personal"
		],
		body: (
			<React.Fragment>
				<div className="article-container">
						<div className="subtitle">
							Fun Facts
						</div>
						<div className="body-text">
							Here are a number of interesting, odd, unusual, or mildly amusing facts about my family. I feel like it is time I write these down before I forget or lose track of what is true:
							<br></br><br></br>
							<b>1) My great grandmother on my mother's side was a leader on the communist side of the Spanish civil war</b>. She also scored #1 in Spain on a nationwide examination, was friends with the Chilean poet Pablo Neruda, and was sentenced to death by hanging before escaping to Argentina by boat. See the journal entry "My Mother's Side" for more.
							<br></br><br></br>
							<b>2) My middle name is Starbuck.</b> On my father's side, my sixth great grandfather was the Nantucket whaler Joseph Starbuck. The book Moby Dick was written about whalers in this area and included a character named Starbuck as a reference to members of the Starbuck family in Nantucket. The founder of Starbucks Coffee chose to name the company after that character from Moby Dick, which was his favorite book, and the company logo is a siren because the founders liked the image while looking through old marine books. See the journal entry "My Father's Side" for more.
							<br></br><br></br>
							<b>3) My great grandfather on my father's side was named Harry Potter.</b> His full name was Harold Radford Potter, and he went by Harry. He lived in England.
							<br></br><br></br>
							<b>4) The "Mayhem Like Me" guy in the Allstate commercials is my second cousin (through marriage).</b> His name is Dean Winters.
							<br></br><br></br>
							<b>5) My great uncle on my mother's side was the famous Spanish comedian José Luis Coll.</b>
							<br></br><br></br>
							<b>6) My grandfather on my mother's side traveled frequently for his work and decorated his house with over a thousand small owl figurines collected from across the globe.</b> Side note: I now need to find somewhere to put over a thousand small owl figurines.
							<br></br><br></br>
							<b>7) My third cousin, Sean O'Dwyer, was the recording engineer for the Blink-182 album <i>Enema of the State</i> featuring the hit "All The Small Things."</b> 
						</div>
				</div>
			</React.Fragment>
		),
	};
}

// LUCID
// dict per level or per page, theoretically
// key compression, DELTA, get more than 2X
// baselines
// think about updates, see if we can get closer to 0 overhead

function article_4() {
	return {
		id: "4",
		date: "July 23, 2024",
		title: "4: My Mother's Side",
		description:
			"Stories of Spain and Argentina.",
		style: `
				.article-container {
					width: 100%;
					min-width: 345px;
				}
				.subtitle {
					font-size: 30px;
					color: dark-gray;
					font-weight: bold;
					padding-bottom: 5%
				}
				.body-text {
					font-size: 18px;
					color: black;
					font-weight: normal;
				}
				`,
		keywords: [
			"Justin",
			"Justin O",
			"Justin O'Dwyer",
		],
		tags: [
			"Personal",
		],
		body: (
			<React.Fragment>
				<div className="article-container">
						<div className="subtitle" style={ {width: '100%'} }>
							Spain and Argentina
						</div>
						<div className="body-text">
							My great-great grandparents on my mother's side were Jews from Bessarabia, which no longer exists but was somewhere near Romania, Moldova, and Ukraine. They left and went to Argentina, where my great grandfather was born.
							<br></br><br></br>
							My great grandfather was a communist, and he was a member of the Argentinian National Brigades, so he went to Spain during the Spanish Civil War to fight against Franco on the communist side.
							<br></br><br></br>
							Meanwhile, my great grandmother, <a href="https://www.eldiario.es/cultura/libros/sorprendente-vida-angustias-garcia-uson-madre-jose-luis-coll-exiliada-argentina-guerra-civil_1_11443658.html" target="_blank" rel="noreferrer">Angustias García Usón</a>, was a writer and teacher in Spain, and mother to my great uncle <a href="https://es.wikipedia.org/wiki/José_Luis_Coll" target="_blank" rel="noreferrer">José Luis Coll</a>, a famous Spanish comedian. She became a leader on the communist side of the rebellion and met my Argentinian great grandfather during the war. When Franco's side won, she was sentenced to execution by hanging for her actions. Her and my great grandfather agreed they would escape to Buenos Aires. My great grandfather and many others fled on boats to Argentina, Chile, and other places, but my great grandmother would have been noticed and captured if she attempted to board a ship. At this moment, she was also pregnant with my grandmother.
							<br></br><br></br>
							As a writer in Spain, she had become acquainted with the great Chilean poet <a href="https://en.wikipedia.org/wiki/Pablo_Neruda" target="_blank" rel="noreferrer">Pablo Neruda</a>, who saved her in this moment by getting her a fake passport which she used to escape to France by running over the hills. She was then able to board a ship and flee to Argentina.
							<br></br><br></br>
							We know this story because she documented it in a memoir. Her memoir was recently published in Spain under the title <a href="https://www.amazon.es/Años-para-olvidar-Angustias-García/dp/8412543238" target="_blank" rel="noreferrer">Años Para No Olvidar</a>.
							<br></br><br></br>
							<a href="https://www.amazon.es/Años-para-olvidar-Angustias-García/dp/8412543238" target="_blank" rel="noreferrer">
								<img style={ { border: 'solid black 2px', width: '80%' } } src="https://m.media-amazon.com/images/I/51vrYmstqSL.jpg" alt="Años Para No Olvidar"></img>
							</a>
							<br></br><br></br>
							My grandfather was born in Buenos Aires to parents who immigrated from Galicia, Spain. My grandparents met in Buenos Aires, where my mother and uncle were born. My grandfather attended medical school in Buenos Aires and then was selected for a global sales role at Merck, which meant he would be transferred to New Jersey. The family intended to stay in New Jersey for about 2 years before moving permanently back to Spain. 2 years became 3, and 3 became 4, and here we are.
						</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_5() {
	return {
		id: "5",
		date: "July 23, 2024",
		title: "5: My Father's Side",
		description:
			"Stories of England and the USA.",
		style: `
				.article-container {
					width: 100%;
					min-width: 345px;
				}
				.subtitle {
					font-size: 30px;
					color: dark-gray;
					font-weight: bold;
					padding-bottom: 5%;
					line-height: 1.5;
					width: 90%;
				}
				.body-text {
					font-size: 18px;
					color: black;
					font-weight: normal;
				}
				`,
		keywords: [
			"Justin",
			"Justin O",
			"Justin O'Dwyer",
		],
		tags: [
			"Personal",
		],
		body: (
			<React.Fragment>
				<div className="article-container">
						<div className="subtitle">
							Starbuck O'Dwyer
						</div>
						<div className="body-text">
							Many generations ago, my 6th great grandfather, <a href="https://en.wikipedia.org/wiki/Starbuck_(whaling_family)" target="_blank" rel="noreferrer">Joseph Starbuck</a> was the head of the Starbuck whaling family in Nantucket. He and his family for generations would dispatch ships and crews to seek whales in the Atlantic Ocean, harpoon them, cut open their heads, and take the massive quantities of oil residing within. At the time, this oil — especially oil residing in the heads of sperm whales — was worth more in its weight than gold. At this time, there was a growing demand for lighting in the United States and Europe, and the waxy oil found in the head cavities of sperm whales burned clearer and brighter than other oils, in addition to its uses in the creation of soap, candles, and more.
							<br></br><br></br>
							The Starbuck family was known for its prominence in the whaling industry, for Obed Starbuck's discovery of <a href="https://en.wikipedia.org/wiki/Starbuck_Island" target="_blank" rel="noreferrer">Starbuck Island</a>, and for the <a href="https://www.loc.gov/resource/hhh.ma0413.photos?st=gallery" target="_blank" rel="noreferrer">Three Bricks</a>, mansions that still stand in Nantucket today, built by Joseph Starbuck for his three sons. My father's father's mother lived in one of these three houses but sold it during the great depression and then spent all that was left of the family's money. Whatever wealth Joseph Starbuck built, sadly for us, is now all gone away.

							<div className="subtitle">
								"Enough of the yap, what the hell does this have to do with Starbucks Coffee?"
							</div>

							Patience, dear reader! You see, to understand what the hell this has to do with Starbucks Coffee, we must first understand the complex interplay between the whaling economy in Nantucket and the —
							
							<div className="subtitle">
								"Get on with it or I'm going back to the Fun Facts blog post!"
							</div>

							Alright, alright. I mean really it's a <a href="/#/article/1"><i>journal entry</i></a> not a blog post. You see, there really is a semantic difference there. But I digress.
							<br></br><br></br>
							You've probably heard of (but probably never read) <a href="https://en.wikipedia.org/wiki/Moby-Dick" target="_blank" rel="noreferrer">Moby Dick</a>. The book is about whalers in the northeast, specifically a fictional 19th century Nantucket whaling ship called the Pequod. Inspired by true events, Melville chose to name the first mate of the Pequod <i>Starbuck</i>.
							<br></br><br></br>
							Moby Dick was a favorite book of the founders of Starbucks Coffee, so they chose to name their company after one of the characters. <a href="https://archive.starbucks.com/record/our-name#" target="_blank" rel="noreferrer">They liked the name of the first mate and ran with it</a>.
							<br></br><br></br>
							That's why my middle name is Starbuck, why father's family used to have so much wealth and why it's now all dried up, and why some people call me by my initials:
							<br></br>
							JSOD.

							<div className="subtitle">
								My Father's Mother
							</div>
							Great to see you announcing the section titles for me again, thanks. My father's mother was born outside London and was a child during WW2. Her name is Judith Potter and, oddly enough, her father's name was Harry. She came to the USA as a nurse where she met my grandfather, the son of Eleanor Starbuck and my only American grandparent.
							<br></br><br></br>
							She told me once that, when she was a child, she watched a German plane drop a bomb on her school during the short period of time while she was outside at recess. I think about this. Had very minor things been different in any of these stories, I would not be here. Yet here we are!
						</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_6() {
	return {
		id: "6",
		date: "July 20, 2024",
		title: "6: Journal Tags and Organization",
		description:
			"How this journal is organized.",
		style: `
				.article-container {
					width: 100%;
					min-width: 345px;
				}
				.subtitle {
					font-size: 30px;
					color: dark-gray;
					font-weight: bold;
					padding-bottom: 5%
				}
				.body-text {
					font-size: 18px;
					color: black;
					font-weight: normal;
				}
				`,
		keywords: [
			"Justin",
			"Justin O",
			"Justin O'Dwyer",
		],
		tags: [
			"Misc",
		],
		body: (
			<React.Fragment>
				<div className="article-container">
						<div className="subtitle">
							How This Journal Is Organized
						</div>
						<div className="body-text">
							For the moment, journal entries can have be tagged as follows:
							<br></br><br></br>
							<b style={ { fontSize: '20px' } }>Principles, Thoughts, Reflections, Personal</b>
							<br></br><br></br>
							The <b>Principles</b> tag is for entries that contain bits wisdom or advice I've come across or made up on my own.
							<br></br><br></br>
							The <b>Thoughts</b> tag is for entries containing things I've been thinking about. This is pretty broad.
							<br></br><br></br>
							The <b>Reflections</b> tag is for entries focusing on forms of media I've consumed and how I feel about them. This could be related to books, games, music, shows, movies, and so on.
							<br></br><br></br>
							The <b>Personal</b> tag is for entries related to my family or my personal experiences.
							<br></br><br></br>
							The <b>All</b> tag shows all entries, and the <b>Misc</b> tag is for entries that don't fit cleanly into any of the boxes above.
							<br></br><br></br>
							Maybe I'll change this at some point, but I think this is a good way to organize my head for now.
						</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_7() {
	return {
		id: "7",
		date: "July 20, 2024",
		title: "7: Taming The Beast",
		description:
			"On the pitfalls of habit formation.",
		style: `
				.article-container {
					width: 100%;
					min-width: 345px;
				}
				.subtitle {
					font-size: 30px;
					color: dark-gray;
					font-weight: bold;
					padding-bottom: 5%
				}
				.body-text {
					font-size: 18px;
					color: black;
					font-weight: normal;
				}
				`,
		keywords: [
			"Justin",
			"Justin O",
			"Justin O'Dwyer",
		],
		tags: [
			"Principles",
		],
		body: (
			<React.Fragment>
				<div className="article-container">
						<div className="subtitle">
							On Habits
						</div>
						<div className="body-text">
							It seems to me that many people struggle to develop productive habits. All the time people tell me they want to start going to the gym, or practice coding problems, or start reading, or start eating healthy, or start walking in the morning, or start going to sleep early, and so on. For brevity, from here on out we'll refer to this thing as <i>the habit</i>.

							<br></br><br></br>
							Generally speaking, there are a few ways things can progress after someone tells me this. There are of course more patterns to the ways people form habits than these 4, but I think these 4 are useful in illustrating my point.
							<br></br><br></br>

							<b>1: The person never does the habit a single time.</b>  In this case, the person never really cared much about the habit, and when they said they wanted to start doing the habit, they were kind of just saying it to say it. There was never any plan to actually do the habit. There was a brief spark of excitement at the mental image of themself as a person who does do the habit, and then this project was delegated to the future self to someday handle. This trap is pretty common, and I'm sure I've been victim to it before.

							<br></br><br></br>

							<b>2: The person immediately starts doing the habit and stays consistent indefinitely.</b> This is what most people think is going to happen after they say "I'm going to start a new habit!" I think it is important to understand that this is really quite rare, for reasons we'll discuss below.

							<br></br><br></br>
							<b>3: The person begins with the habit at a high frequency, then continues at a lower frequency, then over the course of days or weeks does the habit sporadically or stops entirely.</b> It seems to me that the person who attempts but struggles to create new habits often falls into this pattern.

							<br></br><br></br>
							<b>4: The person does the habit consistently at a low to moderate frequency, then over the course of days or weeks increases the frequency of the habit with careful planning until it reaches an equilibrium.</b>

							<div className="subtitle">
								Excitement Is The Enemy
							</div>

							Depending on the habit, it may be best to leave a person in pattern 1 alone. If they are not really interested in beginning a new habit, or they don't believe the habit matters that much, or they don't believe that it aligns with their Path (see my entry The Path under Principles), then the habit may be best left alone. Indeed, one has limited time and resources, and must choose a finite number of habits. In addition, if someone doesn't believe that strong habits create strong outcomes, and that through continuous effort one can change their fate, then it's probably best to just leave the site entirely, as nothing I write here in any of my entries is applicable (this includes, for example, people who think that some people are naturally smart and some are naturally dumb (without clarifying what those terms mean) and that because of this, there's no use studying too hard, and we should just accept the world the way it comes to us).

							<br></br><br></br>

							With that out of the way, what is it that separates the person who falls into patterns 2 or 4 from the person who falls into patterns 1 or 3? It is my belief that to classify a person falling into patterns 1 or 3 as <i>"lazy"</i> or <i>"weak"</i> or <i>"uninspired"</i> or <i>"distracted"</i> or any of these other terms is not only not accurate, but more importantly this classification uses describing words that are not helpful in understanding the behavior.

							<br></br><br></br>

							<b>In my view, the fundamental reason for a person's inability to form productive habits arises from a poor understanding of one's own mind and body as well as a reliance on excitement rather than careful planning for motivation.</b>

							<br></br><br></br>

							I might write a whole entry on this topic, but it seems to me that we should generally be very wary of the feeling of excitement. Excitement, in my definition, is a pleasurable or energetic sensation aroused by the anticipation of some positive event or thing we desire happening in the future. For example, I might feel the fiery sensation of excitement before I go to eat a meal that I expect to be delicious. Yet this spark, this burning flame of excitement exists only for a brief instant, then disappears. The biological explanation for the force of the spark and its disappearance could be to jolt the body into action to chase the origin of that sensation. As the dinner I anticipate glazes past the back of my eyelids, I spend energy to get closer to the moment when I can enjoy it. <b>The key insight here is that excitement, therefore, generates positive sensations related to something does not exist in the present. Be very wary of indulging in positive sensations about things that are not real.</b>

							<br></br><br></br>

							<b>Furthermore, I believe that there are moments when excitement can be a powerful motivator, but usually this period is brief.</b> For people falling into patterns 1 and 3 of habit formation, I believe that their mentality is to rely on excitement to drive positive behavior. For a person in pattern 1, the excitement they feel in the moment of stating their goal is not strong enough to get them to do the habit even once. For a person in pattern 3, their excitement is strong drives them to do the habit frequently.

							<br></br><br></br>

							Let's say the person in pattern 3 decides they want to start running. They're excited to begin. They just bought new running shoes, which they're excited to put to use. In the first run, their music is blasting, they're feeling a rush of adrenaline, the sun is shining, they're smiling, and it's hard but they're feeling incredible. Life is awesome. They run again the next day and it's again a great run. They run again two days later.

							<br></br><br></br>

							The first week is over and they went on a run 4 days! They're feeling great. Then work gets a little busy, and they were supposed to run on Monday, but they skip it and go on Tuesday. Work's busy again, so they skip another day. They're starting to get tired. They go on a run and it's a little rainy. A little more tired. Only 2 runs this week. Now they're feeling a bit bad. 0 runs to 4 was great, but 4 to 2 kind of sucks. Whatever. The next week a big deal came through at work and it occupied all their mental energy so they only ran once. Running is hard, and it's raining out again, and they're not excited about it anymore, so they don't go. The spark is gone, and life isn't so awesome.

							
							<div className="subtitle">
								Excitement Is A Firecracker
							</div>

							I've seen this story countless times, and the core issue every time is that the person generally does not understand themself and creates a poor plan or no plan at all, instead relying on excitement or other external factors to drive their behavior. <b>In my experience, excitement is a firecracker. It leads to intense efforts at sporadic intervals over short time horizons; Habits require focused efforts at regular intervals over long time horizons.</b> To form a productive habit, we thus cannot and should not rely on feelings of excitement for motivation. 

							<br></br><br></br>
							There are two parts of the mind: The rational part (the brain) and the animal part (the body). <b>We must choose only a small number of habits that relate to our Path and only then, with the rational mind, carefully design a plan that will <i>force</i> the body to act in a productive way.</b> We cannot let the body act productively only when it is excited. Thus, we design a plan such that the body will act in the way that the brain wants it to, even in those moments when we are not feeling excited, even when it rains, even when it sucks.

							<br></br><br></br>
							I believe that there is no such relationship as the brain guiding the body or the body guiding the brain. The brain exists with the body as its vessel. The brain gives the body suggestions, while the body acts on its own (see <a href="/#/article/8">Mind, Body, Spandrels, and Sensation</a>). For example, I used to have an issue where I would wake up and sit in bed scrolling on Instagram for a long while if I didn't have anything immediately planned. My brain wanted this to stop, but each morning when I woke up, I'd still lie there. The body would pick up the phone and scroll on Instagram.

							<br></br><br></br>
							Instead of chalking this up to laziness or lack of mental fortitude, I believe the better view is to observe an instance of discord between the mind and the body, with the body flooding the brain with sensations that ensure my limbs will not move to lift me up. Framing the problem in this way, a wrestling match between the mind and body is now a puzzle: In moments when the body is strong and the mind is weak, how can the mind win? To combat this, I created a note that I keep open on my phone, with one task being "Get out of bed within 5 minutes of waking up" and one task being "Leave this note open upon going to sleep." Then, when the body opens the phone at 8am, there's a checkbox staring me in the face telling me to not think about anything else, just stand up before 8:05, check that box, then see how I feel. And then once I've stood up (and with a good night's sleep, too), the body's power over the brain fades.
							
							<div className="subtitle">
								Easing Into Habits
							</div>
						
							A new habit constitutes a new environment to which the mind is subjecting the body on a repeated basis. Especially if this habit involves some level of strain on the body, it is essential to recognize that the body is likely to fight back or reject the activity.

							<br></br><br></br>
							For example, if I were to sit around not exercising for a week and then get up and try to run 5 miles as fast as I could, I can say with pretty high certainty that I'd get a migraine afterwards. This is my body's way of saying "What the f*** dude?" It is essential to recognize the difference between the mind and body (as discussed in <a href="/#/article/8">Mind, Body, Spandrels, and Sensation</a>) when it comes to habit formation.
						
							<br></br><br></br>
							Indeed, what is a habit? It is a repeated action undertaken with the intention of stimulating desirable change or adaptation within the body. To achieve consistency in a habit, it cannot be the mind alone that believes in the value; The body must be gradually accustomed to and accepting of the action, or it will fight back. <b>With careful planning and experimentation, one must gradually introduce the habit in a way that is sustainable, motivated by internal factors rather than external, and does not cause the body to reject the habit.</b> If one can manage to slowly build the habit for 6+ months, with a focus on consistency, then it will likely stick around. This is why a person who adopts a habit under pattern 2 is exceedingly rare — to adopt a new habit so quickly without burning out (the body rejecting the new environment) suggests a very deep attunement to one's body.
							
							<br></br><br></br>
							Such a person has mastered the art of taming the wild animal in which they reside.
						</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_8() {
	return {
		id: "8",
		date: "July 20, 2024",
		title: "8: Mind, Body, Spandrels, and Sensation",
		description:
			"Thoughts on the relationship between the mind and the body.",
		style: `
				.article-container {
					width: 100%;
					min-width: 345px;
				}
				.subtitle {
					font-size: 30px;
					color: dark-gray;
					font-weight: bold;
					padding-bottom: 5%
				}
				.body-text {
					font-size: 18px;
					color: black;
					font-weight: normal;
				}
				`,
		keywords: [
			"Justin",
			"Justin O",
			"Justin O'Dwyer",
		],
		tags: [
			"Thoughts",
		],
		body: (
			<React.Fragment>
				<div className="article-container">
						{/* <div className="subtitle">
							The Mind as a Spandrel
						</div> */}
						<div className="body-text">
							<br></br><br></br>
							<b>I see the conscious part of the human mind as a <a href="https://en.wikipedia.org/wiki/Spandrel_%28biology%29" target="_blank" rel="noreferrer">spandrel</a> — an accidental byproduct of evolution.</b>

							<div style={ { paddingTop: '10%', paddingBottom: '10%', justifyContent: 'center', paddingLeft: '10%', paddingRight: '10%' } }>
								<a href="https://en.wikipedia.org/wiki/Spandrel_%28biology%29" target="_blank" rel="noreferrer">
									<img style={ { width: '80%', border: 'solid black 2px' } } src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Spandrel_%28PSF%29.png/440px-Spandrel_%28PSF%29.png" alt="Spandrel"></img>
								</a>
							</div>

							There were strong selective forces pushing for greater brainpower in Australopiths, Homo erectus, and early hominins. By a million years ago or so, when our ancestors were on the brink of discovering fire, it was already clear that individuals had an advantage who were better at socializing, communicating, developing hunting plans, getting along with others, spatial reasoning, and other such tasks. So, by the time Homo sapiens came around, our brains had blown up in strength.

							<br></br><br></br>

							This inflation led us to be better at the things mentioned, but it seems that the sheer complexity of the brain also brought other abilities, skills, and tendencies. If we imagine the height of a tent as the brain's ability, then the peaks of the posts holding up the tent would be the abilities most favored by evolution. In this analogy, it is clear that many other intermediate regions between the posts also rose as a byproduct of evolution.
						
							<div className="subtitle">
								Mind and Body
							</div>
							It is my view that the conscious mind, therefore, was born "by accident" — it is an emergent property arising mysteriously from the physical components of the human brain, and we have barely scratched the surface when it comes to understanding this emergence. And I believe that due to its unique properties, the mind is best dealt with as a separate entity from the physical body. The body is a collection of skin, bones, organs, muscle, but most importantly to us (or at least to me) it is a vessel for the brain, and thus the mind.

							<br></br><br></br>

							If you take my view — that the conscious mind emerged as a byproduct of evolution, rather than as a direct result of it — then it would seem that any relationship between the mind and any other parts of the organism would also have arisen by accident, and would be unpredictable. While many suggest or believe that the conscious mind is the ruler of the body, I reject this notion. <b>Instead, I argue that there is no such relationship as the brain guiding the body or the body guiding the brain. The mind, being the conscious rational part of the brain, suggests a course of action to the body, and then the body proceeds to act on its own.</b>

							<br></br><br></br>

							In other words, it is my view that my mind, and your mind, and everybody else's mind, exists completely isolated, completely an accident, and completely at the whim of a wild animal.
							
							<div className="subtitle">
								Sensation
							</div>

							I do not believe in emotion in the traditional sense. I argue instead that the best descriptor for our experience is one of sensation (see my entry Sensation under Thoughts). The mind exists in the void. The way the mind makes sense of the world is through the sensations it receives as inputs from the body. All it has to work with is our ability to taste, touch, smell, see, or hear, and the sensation that is created from our body's sensors dedicated to perceiving information of the given form (we have ears to hear, eyes to see, and so on).
						
							<br></br><br></br>

							The range of sensation we can feel is infinitely large. We can feel pleasurable sensations, painful sensations, warm or cold sensations. So, my belief is that emotion is not a fundamental part of the human experience — sensation is. Because all languages are fundamentally limited in the amount of meaning they can express, we use emotions to approximate sensations and as a tool for communication. When I tell someone "I'm feeling excited" I am communicating that I am within a certain broad class of sensations, and they understand.
						
							<br></br><br></br>
							These sensations are bodily experiences communicated to the mind. In this way, they are completely external to the mind, and can even be considered the body's way of speaking to the mind. For example, if the body is in pain and needs attention, this is communicated to the mind and the brain quite clearly by way of sensation. The body chooses to make it impossible for the brain or mind to focus on anything else by sending painful shockwaves to the brain.
						
							<div className="subtitle">
								Mind-Body Harmony
							</div>

							Following this logic leads us to a world where the conscious mind exists trapped in darkness inside the skull, the body was shaped by evolution, and the two must work together. All of this is to say: When you observe the body as external to the self, as another being entirely, as the vector for the transfer of all sensation the mind will ever experience, you may act differently. When the body misbehaves, or when the body overpowers the brain, we understand that — even if it cannot think — the body has just as much power over us as we have over it. The body can listen to the mind, but if it so chooses, it can also hijack the mind and take control.
						
							<br></br><br></br>
							We experience strong sensations such as the desire to eat an entire carton of ice cream, or to skip our workout, or to sleep in. In my philosophy, we view this sensation as the body telling the mind what it wants. Sometimes it is great to do what the body wants, and sometimes the body wants something that is not good for it. Instead of viewing this as an internal struggle between things that "I" want and things that "I" do not want, we remember that the mind does not experience wanting. The mind exists alone in the mix of neurons in the braincase; It is the body that sends these signals in the form of sensation.
						
							<br></br><br></br>
							A mind that disrespects the body may lead to a body that disrespects the mind. Furthermore, an understanding of one's own body includes an understanding of the situations in which the body often hijacks the mind. Someone who understands and listens to their body well knows how to respond to its messages and avoid situations in which they are susceptible to a hijacking.
						
							<br></br><br></br>
							Listen to the body when it speaks. Hear its message, and try to understand why it is sending this message. Sometimes the body will attempt to hijack the mind, and sometimes it's great to let it — there is nothing wrong with enjoying positive sensations. Other times, the body is misguided, and we must take the reigns. But do not become angry with the body, be nice to it, be understanding of it. For indeed, like everything else in this world, it has no thoughts, only impulses.
						</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_9() {
	return {
		id: "9",
		date: "July 22, 2024",
		title: "9: Correlation and Causation",
		description:
			"A reminder to look out for confounders.",
		style: `
				.article-container {
					width: 100%;
					min-width: 345px;
				}
				.subtitle {
					font-size: 30px;
					color: dark-gray;
					font-weight: bold;
					padding-bottom: 5%
				}
				.body-text {
					font-size: 18px;
					color: black;
					font-weight: normal;
				}
				`,
		keywords: [
			"Justin",
			"Justin O",
			"Justin O'Dwyer",
		],
		tags: [
			"Principles",
		],
		body: (
			<React.Fragment>
				<div className="article-container">
						{/* <div className="subtitle">
							How This Journal Is Organized
						</div> */}
						<div className="body-text">
							If you're on this page, you're probably already familiar with the idea. But mistakes related to this are so pervasive I feel it is necessary to include this as one of my principles.
							<br></br><br></br>
							<b style={ { fontSize: '20px' } }>Fresh air breaks and lung cancer</b>
							<br></br><br></br>
							I conduct a very famous (hypothetical) study, in which I poll a large number of people with lung cancer and without lung cancer and ask them how often they took fresh air breaks at work. I collect the data, I create a scatterplot. The results are astounding: People who took less fresh air breaks are less likely to have lung cancer, and people who took more fresh air breaks are more likely to have lung cancer. Oh my god, fresh air causes lung cancer! This is incredible! Everybody, I beg you, DO NOT go outside!
							<br></br><br></br>
							Because this conclusion is clearly absurd, it's easy to see the mistake. Hiding in plain sight is a third variable, a <i>confounding factor</i>, which <i>truly <b>caused</b> individuals to take fresh air breaks <b>and</b> get lung cancer.</i> Namely, smoking cigarettes.
							<br></br><br></br>
							So, the point is clear: Whenever you see a scatterplot of X and Y, and somebody telling you that X <b>causes</b> Y or that Y <b>causes</b> X, immediately be skeptical of what they are saying. In most cases I've come across, there is some Z which, when increased, also increases X and Y.
							<br></br><br></br>
							Causality in the form of X causes Y <b>cannot be proven</b> from historical data. <i>To prove causality we must conduct a controlled study: We must show that the experimental group, under treatment, shows change, while the control group is unchanged.</i>
							<br></br><br></br>
							It is easy to see the error when we talk about fresh air breaks and smoking. But when the story you're being told is believable, or is a story that makes you feel good, it's easier to fall into the trap of drawing causal conclusions from historical data. I've seen this mistake made in major news websites and even in academic research papers.
							<br></br><br></br>
							Stay vigilant, be wary of made-up stories, and always ask: Is this nice story true that Y really rises with X, or do X and Y both just rise with some Z we're not thinking about?
						</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_10() {
	return {
		id: "10",
		date: "July 22, 2024",
		title: "10: The Hitchhiker's Guide to the Galaxy, by Douglas Adams",
		description:
			"A reflection on The Hitchhiker's Guide to the Galaxy, by Douglas Adams.",
		style: `
				.article-container {
					width: 100%;
					min-width: 345px;
				}
				.subtitle {
					font-size: 30px;
					color: dark-gray;
					font-weight: bold;
					padding-bottom: 5%
				}
				.body-text {
					font-size: 18px;
					color: black;
					font-weight: normal;
				}
				`,
		keywords: [
			"Justin",
			"Justin O",
			"Justin O'Dwyer",
		],
		tags: [
			"Reflections",
		],
		body: (
			<React.Fragment>
				<div className="article-container">
						<div className="subtitle">
							<i>Like all of my Reflections, this entry will be filled with spoilers.</i>
						</div>
						<div className="subtitle">
							Hilarity and Absurdity
						</div>
						<div className="body-text">
							I had fun reading this book, which is basically a window into Adams' brain, which is seemingly a very unique place. Adams also has a marvelous way with words.
							<br></br><br></br>
							<i>"<b></b>Whatever it was raced across the sky in its monstrous yellowness, tore the sky apart with mind-boggling noise and leaped off into the distance leaving the gaping air to shut behind it with a </i>bang<i> that drove your ears six feet into your skull." (24)</i>
							<br></br><br></br>
							I think that might be one of the most beautiful sentences I've ever read. A sound, tearing the sky apart. This is poetry.
							<br></br><br></br>
							<i>"All around the world city streets exploded with people, cars skidded into each other as the noise fell on them and then rolled off like tidal waves over hills and valleys, deserts and oceans, seeming to flatten everything it hit." (24)</i>
							<br></br><br></br>
							<i>"'O Deep Thought computer,' he said, 'the task we have designed you to perform is this. We want you to tell us...' he paused, 'the Answer!' <br></br> 'The Answer?' said Deep Thought. 'The Answer to What?' <br></br> 'Life!' urged Fook. <br></br> 'The Universe!' said Lunkwill. <br></br> 'Everything!' they said in chorus. <br></br> Deep Thought paused for a moment's reflection. <br></br> 'Tricky,' he said finally. <br></br> 'But you can do it?' <br></br> Again, a significant pause. <br></br> 'Yes,' said Deep Thought, 'I can do it.'" (113)</i>
							<br></br><br></br>
							<i>"'But the program will take me a little while to run.' <br></br> 'How long?' he said. <br></br> 'Seven and a half million years.' <br></br> Lunkwill and Fook blinked at each other." (115)</i>
							<br></br><br></br>
							<i>"'All right,' said Deep Thought. 'The Answer to the Great Question...' <br></br> 'Yes...!'<br></br>'Of Life, the Universe and Everything...' said Deep Thought.<br></br>'Yes...!'<br></br>'Is...' said Deep Thought, and paused.<br></br>'Yes...!'<br></br>'Is...'<br></br>'Yes...!!!...'<br></br>'Forty-two,' said Deep Thought, with infinite majesty and calm." (120)</i>
							<br></br><br></br>
							What is this book about? Honestly I don't think Adams himself would have a great answer for you. I'm pretty sure it is just his stream of consciousness — everything takes you off guard, because it's taking him off guard. He even says this himself in the introduction.
							<br></br><br></br>
							In a way, this is the book's greatest strength, because it has complete freedom to change direction at any moment. In another way, it leaves me feeling unsatisfied. I kept waiting for the moment when the meaning of it all would bubble to the surface, and it never did. Each individual moment is funny, creative, beautiful, but the lack of direction left me with a slight feeling of emptiness. There was great breadth, but no depth.
							<br></br><br></br>
							Thus, instead of wishing it were something else, we should accept it for what it is. The insight or meaning comes not from the story as a whole, but from the individual moments of brilliance, from the blips of a kind of creativity I have never seen.
						</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_11() {
	return {
		id: "11",
		date: "July 22, 2024",
		title: "11: On Art",
		description:
			"My view on art and what constitutes good art — and bad art.",
		style: `
				.article-container {
					width: 100%;
					min-width: 345px;
				}
				.subtitle {
					font-size: 30px;
					color: dark-gray;
					font-weight: bold;
					padding-bottom: 5%
				}
				.body-text {
					font-size: 18px;
					color: black;
					font-weight: normal;
				}
				`,
		keywords: [
			"Justin",
			"Justin O",
			"Justin O'Dwyer",
		],
		tags: [
			"Thoughts",
		],
		body: (
			<React.Fragment>
				<div className="article-container">
						<div className="subtitle">
							The Isolated Mind
						</div>
						<div className="body-text">
							As I have discussed in other posts (see <a href="/#/article/8">Mind, Body, Spandrels, and Sensation</a>), my view is that the mind is synonymous with the self and the body and its sensations are best considered as external to the mind. If I feel joyful, this is my way of expressing in the English language a certain kind of positive sensation that others can relate to. If I feel distressed, this is my way of, in the English language, describing a certain kind of bodily sensation I am feeling, that others can imagine.
							<br></br><br></br>
							The reason for these describing words, and for our insistence on the term "emotion" rather than "sensation," is in my opinion because it is impossible for any of us to ever experience the world from someone else's body, and the range of possible sensations is infinite, so we use emotion words to put broad classes of sensations into boxes. Otherwise, we'd really have no way to communicate about how our bodies feel.
							<br></br><br></br>
							My belief is that language is inherently limited in the kinds of sensations it can communicate and evoke. I imagine certain sensations — maybe that of intense melancholy, of despair, of freedom, or righteousness — that words maybe cannot do justice. For the communication of such sensations, I believe that we invented <i>art</i>.
							<div className="subtitle">
								Art Tells A Story
							</div>
							<a href="https://en.wikipedia.org/wiki/Guernica_(Picasso)" target="_blank" rel="noreferrer">
								<img style={ { border: 'solid black 2px', maxWidth: '100%' } } src="https://www.singulart.com/blog/wp-content/uploads/2023/07/image.png" alt="Guernica"></img>
							</a>

							Take a look at <a href="https://en.wikipedia.org/wiki/Guernica_(Picasso)" target="_blank" rel="noreferrer"><i>Guernica</i></a> by Picasso. I do not believe that there are any words that can quite capture the way I feel looking at something like this (especially in person — the piece is huge). This is why if Picasso wants to make someone else feel this way, the way that he himself felt but could not express in words, he must communicate in this format.
							<br></br><br></br>
							When we take this view, we realize that art, therefore, must include all forms of communication outside of language. This is why musicians are commonly known as artists. I believe that movie directors are artists, and so are writers. Game creators are certainly artists. So are candle makers, and architects, and chefs. If someone is creating a custom experience meant to invoke feeling or sensation in others, they are, by my definition, an artist.
							<div className="subtitle">
								Good Art
							</div>
							<b>Good art is personal.</b> The communication of raw human sensation is at the core of every art form, and this sensation originates in the experience of the artist. Therefore, <b>good art is almost always the vision of a single person</b>. This person's vision can be executed by a team, but the core essence has originated in the mind of a single person.
							<br></br><br></br>
							I once heard Rick Rubin describe good art as a diary entry. It is the raw, imperfect, flawed, unaltered vision of a single person. In this way, the feeling one is attempting to communicate is there in the flesh. There is no such thing as giving a person's diary entry a score out of ten, or saying that it was good or bad. It is merely a person's diary entry, a sensation that they felt, and that they poured from their mind into an external vessel. This is not something that is scored, it is something that is observed and contemplated, and considered, and mulled over, and considered again. This is art.
							<br></br><br></br>
							Again borrowing some ideas from Rubin, bad art is created with the goal of making something that the artist <i>thinks other people want</i>. Bad art looks outward, not inward. For examples of this, look at any high budget shitty movie or pop single that recently came out. These works were created not to express an artist's vision but by men in suits looking at other movies or pop singles that succeeded and trying to recreate them. There was no artist with a sensational vision — there was a large group of people, all with weak visions, and as each contributed more of their ideas, any sensation that did exist was diluted into a boring and unemotional blob.
							<br></br><br></br>
							Good art is personal. Good art is the vision of, generally, a single person. And like Picasso's <i>Guernica</i>, Tolkein's <i>The Lord of the Rings</i>, Miyazaki's <i>Dark Souls</i>, Liszt's <i>Liebesträume</i>, Miura's <i>Berserk</i>, Hesse's <i>Siddhartha</i>, Beethoven's <i>Moonlight Sonata</i>, Aonuma and Koizumi's <i>Majora's Mask</i>, van Gogh's <i>Starry Night</i>, and Lucas' <i>Star Wars</i>, good art makes us feel in a way that nothing else can; It pinpoints a sensation that we struggle to express. It makes us feel understood. For human beings stuck alone in our own conscious experience, it brings us together.
						</div>
				</div>
			</React.Fragment>
		),
	};
}


function article_12() {
	return {
		id: "12",
		date: "July 23, 2024",
		title: "12: On AI in Creative Disciplines",
		description:
			"An optimistic take on the creative uses of AI.",
		style: `
				.article-container {
					width: 100%;
					min-width: 345px;
				}
				.subtitle {
					font-size: 30px;
					color: dark-gray;
					font-weight: bold;
					padding-bottom: 5%
				}
				.body-text {
					font-size: 18px;
					color: black;
					font-weight: normal;
				}
				`,
		keywords: [
			"Justin",
			"Justin O",
			"Justin O'Dwyer",
		],
		tags: [
			"Thoughts",
		],
		body: (
			<React.Fragment>
				<div className="article-container">
						<div className="subtitle">
							The Artificial Artist?
						</div>
						<div className="body-text">
							I sense a growing angst in the creative community regarding the development of AI. If you have read <a href="/#/article/11">11: On Art</a>, you may be able to see my perspective.
							<br></br><br></br>
							In that entry, I describe true art as the process of a single person creating an experience for others with the intention of evoking specific human sensations that cannot be communicated through other media. The artist experiences an internal set of strong sensations, and they boil this internal experience into a physical art form for personal satisfaction and for others to ponder. The art is a reflection of the artist's personal internal state, and to enjoy art is to reflect on the artist's communication of this feeling.
							<br></br><br></br>
							AI cannot do this, because it is not human. The best art is generally produced by a single person, and it is a raw, flawed, very personal creation, born from within. Art created by AI is the opposite: It is an average of previous works, it is highly produced, it is not flawed, and most importantly, no human boiled their experience into it. It can certainly still be of great value — if you are an artist who makes brand assets, you will see the rise of new AI tools that assist in the creation of brand assets, and this can help you do your job. But, by my definition, what the AI creates will either struggle or fail entirely to be classified as real art.
							<div className="subtitle">
								When AI Is Useless
							</div>
							No AI tool was used to write the text of any of these journal entries (they were, of course, used to help me write the code for the site). Why? Because I know what I want to say, so I'm just going to go ahead and say it.
							<br></br><br></br>
							<b>The only time people use AI in their writing is when they aren't sure what to say.</b>
							<br></br><br></br>
							If I know precisely what I want to say, I can just say it. That's it.
							<div className="subtitle">
								When AI Is Useful
							</div>
							I feel comfortable enough with words that I feel I can express precisely what I mean. But what about times when — in another medium, such as visual art — I have a broad sense of what I want to convey, and I'm not totally sure how to do so?
							<br></br><br></br>
							<b>AI can help us express ourselves when he have something we want to say, but we aren't sure how.</b>
							<br></br><br></br>
							In other words, it is silly to ask AI to speak on your behalf, because then you're no longer the one speaking! Do not let AI speak for you. But <i>do</i> use AI to help you figure out what you want to say.
							<br></br><br></br>
							I believe that the education of the next generation of children will be the greatest educational experience that any generation has ever received due to AI. I just hope that the value of thinking originally, entirely for oneself, is not slowly lost. Indeed, even the greatest superintelligent AI cannot "solve" human art, or mull over Plato's <i>Republic</i>. These are, in my view, <i>definitionally human</i> endeavors.
						</div>
				</div>
			</React.Fragment>
		),
	};
}

// function article_13() {
// 	return {
// 		id: "13",
// 		date: "July 22, 2024",
// 		title: "13: The Artistic Dilemma",
// 		description:
// 			"My view on what I believe to be a core dilemma every artist must face when creating a work.",
// 		style: `
// 				.article-container {
// 					width: 100%;
// 				}
// 				.subtitle {
// 					font-size: 30px;
// 					color: dark-gray;
// 					font-weight: bold;
// 					padding-bottom: 5%
// 				}
// 				.body-text {
// 					font-size: 18px;
// 					color: black;
// 					font-weight: normal;
// 				}
// 				`,
// 		keywords: [
// 			"Justin",
// 			"Justin O",
// 			"Justin O'Dwyer",
// 		],
// 		tags: [
// 			"Thoughts",
// 		],
// 		body: (
// 			<React.Fragment>
// 				<div className="article-container">
// 						<div className="subtitle">
// 							The Fundamental Tradeoff
// 						</div>
// 						<div className="body-text">

// 						</div>
// 				</div>
// 			</React.Fragment>
// 		),
// 	};
// }

function article_13() {
	return {
		id: "13",
		date: "July 23, 2024",
		title: "13: A Good Brainteaser",
		description:
			"Can you solve it?",
		style: `
				.article-container {
					width: 100%;
					min-width: 345px;
				}
				.subtitle {
					font-size: 30px;
					color: dark-gray;
					font-weight: bold;
					padding-bottom: 5%;
					width: 90%;
					line-height: 1.5;
					margin: auto;
				}
				.body-text {
					font-size: 18px;
					color: black;
					font-weight: normal;
				}
				.answer {
					display: none;
					margin-top: 20px;
				}
				.show-answer-button {
					margin-top: 20px;
					padding: 10px 15px;
					font-size: 16px;
					cursor: pointer;
					background-color: #007BFF;
					color: white;
					border: none;
					border-radius: 5px;
				}
				.show-answer-button:hover {
					background-color: #0056b3;
				}
				`,
		keywords: [
			"Justin",
			"Justin O",
			"Justin O'Dwyer",
		],
		tags: [
			"Misc"
		],
		body: (
			<React.Fragment>
				<div className="article-container">
						<div className="subtitle">
							<i>You walk one mile north, then one mile east, then one mile south. You end up right where you started. Where did you start?</i>
						</div>
						<div className="body-text">
							<button className="show-answer-button" onClick={() => document.getElementById('answer').style.display = 'block'}>
								Show Answer
							</button>
							<div id="answer" className="answer">
								<div className="subtitle">
									The South Pole!
									<br></br><br></br>
									<i>Now that that's out of the way, we arrive at the real puzzle: <b>There is actually more than one valid starting point.</b>
									<br></br><br></br>
									Can you find the other answer? (Hint: It's not the North Pole — you cannot walk a mile north if every direction around you is south!)</i>
									<br></br><br></br>
								</div>
								<button className="show-answer-button" onClick={() => document.getElementById('answer2').style.display = 'block'}>
									Show Answer
								</button>
								<div id="answer2" className="answer">
									<b>Near the North Pole, there is a latitude at which the circumference of the Earth is one mile. If you start anywhere on the ring of points one mile south of this band, you would walk one mile north, one mile east (all the way around the Earth), one mile south, and end up where you started. (Notably, there is no such position near the South Pole. This is because a circle centered at the South Pole with circumference 1 would have a radius of 1/2pi &lt; 1, so there would be no way to start 1 mile south of the ring.) </b>
									<br></br><br></br>
									<div className="subtitle">
										<i>There is actually a whole class of further answers. Can you find it?</i>
									</div>
									<button className="show-answer-button" onClick={() => document.getElementById('answer3').style.display = 'block'}>
										Show Answer
									</button>
									<div id="answer3" className="answer">
										<b>Return to the ring near the North Pole of circumference 1 mile from before. Notice that there is also a ring with circumference 0.5 miles which, if walked around twice, would bring you back to the same point as you started. There is also a ring with circumference 1/3 miles, and 1/4 miles, and so on. Starting a mile south of any of these would work! </b>
										<br></br><br></br>
										I like this one. It might be fun to make a whole journal section filled with brainteasers.
									</div>
								</div>
							</div>
						</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_14() {
	return {
		id: "14",
		date: "July 23, 2024",
		title: "14: The Paradox of Small Efforts and Big Results",
		description:
			"The way we spend all our moments combined determines the trajectory of our life, yet each moment in isolation is insignificant.",
		style: `
				.article-container {
					width: 100%;
					min-width: 345px;
				}
				.subtitle {
					font-size: 30px;
					color: dark-gray;
					font-weight: bold;
					padding-bottom: 5%
				}
				.body-text {
					font-size: 18px;
					color: black;
					font-weight: normal;
				}
				`,
		keywords: [
			"Justin",
			"Justin O",
			"Justin O'Dwyer",
		],
		tags: [
			"Principles"
		],
		body: (
			<React.Fragment>
				<div className="article-container">
						<div className="subtitle">
							The Voter's Paradox
						</div>
						<div className="body-text">
							All of us are familiar with <a href="https://en.wikipedia.org/wiki/Paradox_of_voting" target="_blank" rel="noreferrer"><i>The Paradox of Voting</i></a>. If you or I choose not to vote in the upcoming presidential election (side note, at the time of writing, the assassination attempt on Trump has just occurred, and Biden has just dropped out of the presidential race. Crazy!) the outcome will almost certainly not change. So I, as an individual, can be quite confident that if I go about my life as usual, and then don't vote, everything will be the same as it was.
							<br></br><br></br>
							There is nothing special about me — this is true for every American citizen. At the scope of the individual, what I do does not matter. But paradoxically, if all of us don't vote, it suddenly matters quite a bit!
						
							<div className="subtitle">
								The Paradox Extended
							</div>
							I feel this paradox goes far beyond voting to any result comprised of many small indistinct components. When a plant grows, each moment brings quite negligible growth, yet the sum of the moments creates the plant. Each day I partake in a productive habit, such as studying, eating healthy, or going to the gym, the day itself is almost meaningless, yet the sum of all days suddenly has great meaning when viewed over months or years. Remove a single ant from a colony or bee from a hive and business functions as usual; Remove them all and the system folds.
							<br></br><br></br>
							<b>What should we make of this? How is it that the days don't matter, but also matter so much?</b>
							<br></br><br></br>
							My principle is this:
							<br></br><br></br>
							<i>Each small effort, in isolation, is indeed not the difference-maker, but each small effort is also not the focus. We must instead focus on a productive structure which influences all the small efforts. What matters is not the single voter, the single session in the gym, the single ant. What matters is the system that is in place to motivate all of the small efforts at once. The weak system reminds the small efforts of their insignificance in isolation. The powerful system motivates all of the small efforts by connecting them spiritually to each other and the greater effort. The powerful system inspires hope.</i>
							<br></br><br></br>
							<i>This is the way to overcome the paradox of small efforts and big results: Create a powerful system.</i>
						</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_15() {
	return {
		id: "15",
		date: "July 23, 2024",
		title: "15: Siddhartha, by Hermann Hesse",
		description:
			"The river flows.",
		style: `
				.article-container {
					width: 100%;
					min-width: 345px;
				}
				.subtitle {
					font-size: 30px;
					color: dark-gray;
					font-weight: bold;
					padding-bottom: 5%
				}
				.body-text {
					font-size: 18px;
					color: black;
					font-weight: normal;
				}
				`,
		keywords: [
			"Justin",
			"Justin O",
			"Justin O'Dwyer",
		],
		tags: [
			"Reflections"
		],
		body: (
			<React.Fragment>
				<div className="article-container">
						<a style={ { paddingLeft: '20%' } } href="https://en.wikipedia.org/wiki/Siddhartha_(novel)" target="_blank" rel="noreferrer">
							<img style={ { border: 'solid black 2px', maxWidth: '60%' } } src="https://warblerpress.com/wp-content/uploads/2021/11/Hesse-Siddhartha-cover-half-scaled.jpg" alt="Siddhartha"></img>
						</a>
						<div className="body-text">
							<br></br>
							I read this book for the first time a few years ago. I recently circled back and read it again, and I'll probably read it again every couple of years or so. Maybe I'll pick up a different translation next time. It is one of my favorites. Maybe I'll return here and write my thoughts. At the moment, though, I'll let the quotations speak for themselves, and when I read them I'll be reminded of how the book made me feel and what it made me think. Maybe it is peace, or awe. I think it cannot be described simply, and the best way to experience it is to read the book.
							<div className="subtitle">
								The River
							</div>
							<i>"They all loved Siddhartha. He brought joy to them all, he delighted them all.</i>
							<br></br>
							<i>But Siddhartha did not bring joy to himself, he did not delight himself... He had begun to sense that his venerable father and his other teachers, that the wise Brahmins had already imparted to him the bulk and the best of their knowledge, that they had already poured their fullness into his waiting vessel, and the vessel was not full, his mind was not contented, his soul was not tranquil, his heart was not sated." (4-5)</i>
							<br></br><br></br>
							<i>"Listen, Kamala: If you toss a stone into water, it takes the swiftest way to the bottom. And Siddhartha is like that when he has a goal, makes a resolve. Siddhartha does nothing, he waits, he thinks, he fasts, but he passes through the things of the world like the stone through water, never acting, never stirring. He is drawn, he lets himself drop. His goal draws him, for he lets nothing into his soul that could go against his goal. That is what Siddhartha learned among the Samanas. It is what fools call magic and what they think is worked by demons. Anyone can work magic, anyone can reach his goals if he can think, if he can wait, if he can fast." (56)</i>
							<br></br><br></br>
							<i>"Most people, Kamala, are like a falling leaf, that wafts and drifts through the air, and twists and tumbles to the ground. Others, however, few, are like stars: they have a fixed course, no wind reaches them, they have their law and their course inside them." (64)</i>
							<br></br><br></br>
							<i>"'Did the river,' he once asked, 'also teach you this secret: that time does not exist?'</i>
							<br></br>
							<i>Vasudeva's face lit up with a bright smile.</i>
							<br></br>
							<i>'Yes, Siddhartha,' he said. 'Is this what you mean: that the river is everywhere all at once, at its source and at its mouth, at the waterfall, at the ferry, at the rapids, in the sea, in the mountains, everywhere at once, and only the present exists for it, and not the shadow of the future?'</i>
							<br></br>
							<i>'That is it,' said Siddhartha. 'And when I learned that, I looked at my life, and it was also a river, and the boy Siddhartha was separated from the adult Siddhartha and from the old man Siddhartha only by shadow, not by substance. Nor were Siddhartha's earlier births the past, and his death and his return to Brahma are no future. Nothing was, nothing will be; everything is, everything has being and is present.'" (94)</i>
							<br></br><br></br>
							<div className="subtitle">
								Always Searching, Never Finding
							</div>
							<i>"'When someone seeks,' said Siddhartha, 'then it easily happens that his eyes see only the thing that he seeks, and he is able to find nothing, to take in nothing because he always thinks only about the thing he is seeking, because he has one goal, because he is obsessed with his goal. Seeking means: having a goal. But finding means: being free, being open, having no goal. You, Venerable One, may truly be a seeker, for, in striving toward your goal, you fail to see certain things that are right under your nose.'" (122)</i>
						</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_16() {
	return {
		id: "16",
		date: "July 23, 2024",
		title: "16: Man's Search For Meaning, by Viktor Frankl",
		description:
			"A discussion of logotherapy.",
		style: `
				.article-container {
					width: 100%;
					min-width: 345px;
				}
				.subtitle {
					font-size: 30px;
					color: dark-gray;
					font-weight: bold;
					padding-bottom: 5%
				}
				.body-text {
					font-size: 18px;
					color: black;
					font-weight: normal;
				}
				`,
		keywords: [
			"Justin",
			"Justin O",
			"Justin O'Dwyer",
		],
		tags: [
			"Reflections"
		],
		body: (
			<React.Fragment>
				<div className="article-container">
						<a style={ { paddingLeft: '20%' } } href="https://en.wikipedia.org/wiki/Man%27s_Search_for_Meaning" target="_blank" rel="noreferrer">
							<img style={ { border: 'solid black 2px', maxWidth: '60%' } } src="https://m.media-amazon.com/images/I/5112lDRbMXL._SL1200_.jpg" alt="Man's Search For Meaning"></img>
						</a>
						<div className="subtitle">
							What Is Meaning?
						</div>
						<div className="body-text">
							I often ask people what the meaning of life is, and answers vary widely. People often mention family, friends, a job they like. Indeed, in Ray Dalio's books, he says we should strive for <i>meaningful work and meaningful relationships</i>. Some mention travel, seeing the world, doing new things, while others leave it more abstract, at finding happiness or fulfillment, reaching one's limits, achieving great things, or doing good for the world. I observe that religious people possibly struggle less with this question than nonreligious people — the answer to this question is built into all major religions, so it requires less active thought. Some people say that life is meaningless. Some say that they don't care what the meaning of life is. And indeed, some say that they've never thought about it before, and would prefer to leave it that way.
							<br></br><br></br>
							I certainly do not have a good answer to the question, and one of the main reasons for that is because I'm not quite sure what I mean by <i>meaning</i>. In fact, when I ask people what the meaning of life is, I don't even entirely know what question I'm asking. I guess part of the experiment is to see how other people interpret the question.
							<br></br><br></br>
							It is easy to see why, then, I picked up a book called <i>Man's Search For Meaning</i>. The first half is the chilling recollection of his experiences in Nazi concentration camps, and the second half is an explanation and discussion of logotherapy, his psychotherapeutic method which argues that the fundamental human drive is the search for meaning. Here are some sentences from it that stuck with me.
							<br></br><br></br>
							<i>"Strangely enough, a blow which does not even find its mark can, under certain circumstances, hurt more than one that finds its mark... he playfully picked up a stone and threw it at me. That, to me, seemed the way to attract the attention of a beast, to call a domestic animal back to its job, a creature with which you have so little in common that you do not even punish it." (24)</i>
							<br></br><br></br>
							<i>"The experiences of camp life show that man does have a choice of action. There were enough examples, often of a heroic nature, which proved that apathy could be overcome, irritability suppressed. Man </i>can<i> preserve a vestige of spiritual freedom, of independence of mind, even in such terrible conditions of psychic and physical stress." (65)</i>
							<br></br><br></br>
							<i>"[A]ny man can, even under such circumstance, decide what shall become of him — mentally and spiritually. He may retain his humanity even in a concentration camp. Dostoevsky said once, 'There is only one thing that I dread: not to be worthy of my sufferings.' These words frequently came to my mind after I became acquainted with those martyrs whose behavior in camp, whose suffering and death, bore witness to the fact that the last inner freedom cannot be lost. It can be said that they were worthy of their sufferings; the way they bore their suffering was a genuine inner achievement. It is this spiritual freedom — which cannot be taken away — that makes life meaningful and purposeful." (66-67)</i>
							<br></br><br></br>
							<i>"The death rate in the week between Christmas, 1944, and New Year's, 1945, increased in camp beyond all previous experience. In [the chief doctor's] opinion, the explanation for this increase did not lie in the harder working conditions or the deterioration of our food supplies or a change of weather or new epidemics. It was simply that the majority of prisoners had lived in the naïve hope that they would be home again by Christmas... Nietzsche's words, 'He who has a why can bear almost any how.'" (76)</i>
							<br></br><br></br>
							<i>"[I]t is impossible to define the meaning of life in a general way. Questions about the meaning of life can never be answered by sweeping statements. 'Life' does not mean something vague, but something very real and concrete, just as life's tasks are also very real and concrete. They form a man's destiny, which is different and unique for each individual. No man and no destiny can be compared with any other man or any other destiny." (77)</i>
							<br></br><br></br>
							<i>"I remember two cases of would-be suicide... Both used the typical argument — they had nothing more to expect from life. In both cases it was a question of getting them to realize that life was still expecting something from them; something in the future was expected of them." (79)</i>
							<br></br><br></br>
							<i>"According to logotherapy, this striving to find a meaning in one's life is the primary motivational force in man. That is why I speak of a </i>will to meaning<i> in contrast with the pleasure principle (or, as we could also term it, the </i>will to pleasure<i>) on which Freudian psychology is centered, as well as in contrast to the </i>will to power<i> on which Adlerian psychology, using the term 'striving for superiority,' is focused." (99)</i>
							<br></br><br></br>
							<i>"To put the question [of the meaning of life] in general terms would be comparable to the question posed to a chess champion: 'Tell me, Master, what is the best move in the world?' There is simply no such thing as the best or even a good move apart from a particular situation in a game and the particular personality of one's opponent. The same holds for human existence. One should not search for an abstract meaning of life. Everyone has his own specific vocation or mission in life to carry out a concrete assignment which demands fulfillment. Therein he cannot be replaced, nor can his life be repeated. Thus, everyone's task is unique as is his specific opportunity to implement it." (108-109)</i>
						</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_17() {
	return {
		id: "17",
		date: "July 24, 2024",
		title: "17: Brands vs Abilities",
		description:
			"Two concepts that are often confused but are fundamentally distinct.",
		style: `
				.article-container {
					width: 100%;
					min-width: 345px;
				}
				.subtitle {
					font-size: 30px;
					color: dark-gray;
					font-weight: bold;
					padding-bottom: 5%
				}
				.body-text {
					font-size: 18px;
					color: black;
					font-weight: normal;
				}
				`,
		keywords: [
			"Justin",
			"Justin O",
			"Justin O'Dwyer",
		],
		tags: [
			"Principles"
		],
		body: (
			<React.Fragment>
				<div className="article-container">
						<div className="subtitle">
							Brands
						</div>
						<div className="body-text">
							A <i>brand</i> is a label infused into a person's identity by a socially significant organization. A brand is like a sticker that only some people get to wear. A degree from a top university is a great brand. A job at a top company is another great brand. A prestigious award is a great brand.
							<br></br><br></br>
							<b>As a society, why do we have brands?</b> The reason is because, if someone has stacked up a number of good or great brands, it allows other people to quickly pass a series of judgments about them. If someone went to a great college, we can assume that they are very smart, hardworking, and ambitious, without any other information. If someone works at a great company, we know that they must have some money, some domain expertise, that they are well-connected, that they are socially adept, and so on. A prestigious award means that this person has already been vetted by a group of experts and was determined to be exceptional. So we can quickly have some pretty high degree of confidence that this person is good at whatever they do.
							<br></br><br></br>
							Reputable brands are useful tools. When an organization has built up a reputable brand, they have the power to grant privilege onto people who they allow to wear the brand. The brand then helps the person to succeed by making others trust their abilities more easily, and if the person succeeds, then it further helps the power of the brand.
							<div className="subtitle">
								Abilities
							</div>
							An <i>ability</i> refers to a person's actual skill level in a given task. If a person is a high-performing software engineer, then they have a high level of ability in this field. Someone can have a high level of ability when it comes to being hardworking, or ambitious, or socially adept, and so on.
							<br></br><br></br>
							Indeed, a person's <i>brands</i> allow us to guess about their <i>abilities</i>.
							<div className="subtitle">
								The Problem
							</div>
							There would be no issue if brands perfectly predicted abilities. Then you could look at a person with stronger brands, and confidently say that they have stronger abilities. If you were hiring talent, you wouldn't need to even conduct interviews.
							<br></br><br></br>
							<b>The problem is that, in my experience, brands often only roughly correlate to abilities</b>.
							<br></br><br></br>
							It seems true that, maybe on average, a student who recently graduated from a higher ranked university will be a better hire than a student who recently graduated from a lower ranked university. <b>But the truth is, abilities are highly malleable and change drastically over time. Abilities are the ground truth, and, in the end, the truth will eventually bubble to the surface.</b>
							<br></br><br></br>
							The principle is this:
							<br></br><br></br>
							<i>Brands only roughly correlate with abilities. Furthermore, the more time that has passed from the granting of the brand, the less trustworthy it becomes.</i>
							<br></br><br></br>
							<i>Brands, at their core, are the tools of the salesperson: They are a glorified sticker declaring that a third party, at one point in time, endorsed the individual's abilities. Brands are a great signal, but they are separate from the truth.</i>
							<br></br><br></br>
							<i>Therefore, do not let your attention become fixated on brands. Instead, focus your energy on the continual growth of your abilities. An obsession with the improvement of one's abilities may lead to more impressive brands, but an obsession with brands will not lead to anything at all.</i>
						</div>
				</div>
			</React.Fragment>
		),
	};
}


const myArticles = [
	article_1,
	article_2,
	article_3,
	article_4,
	article_5,
	article_6,
	article_7,
	article_8,
	article_9,
	article_10,
	article_11,
	article_12,
	article_13,
	article_14,
	article_15,
	article_16,
	article_17
];

export default myArticles;
