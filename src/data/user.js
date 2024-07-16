const INFO = {
	main: {
		title: "Justin O'Dwyer",
		name: "Justin O'Dwyer",
		email: "",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/JSOD11",
	},

	homepage: {
		title: "Justin O'Dwyer",
		description:
			"" // "I build systems. I also create games, play the drums, and enjoy playing chess (somewhat poorly). I created this site to publicly document my experiences, thoughts, and background.",
	},

	articles: {
		title: "Blog",
		description:
			"",
	},

	projects: [
		{
			title: "Column-Oriented Relational Data System",
			description:
				"Built a column-oriented data system handling SQL-like queries from scratch. Wrote 5000+ lines of pure C. System placed #2 out of 30+ systems on the full benchmark in Harvard's undergraduate data systems course, CS 165.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/c/c.png",
			linkText: "This project is currently private. Contact for more information."
		},

		{
			title: "Marshmallow Dungeon",
			description:
				"A 2D platformer demo with 5 levels made using the Godot 4 engine. Inspired by my love of games like Hollow Knight and Dark Souls. Google Chrome recommended — click here to play!",
			logo: "godot.png",
			linkText: "View Project",
			link: "https://jsod.itch.io/marshmallow-dungeon",
		},

		{
			title: "Novel compression techniques in Log-Structured Merge-Trees",
			description:
				"Improving put, delete, and range query performance of LSM trees under specific workloads by decreasing data movement. An ongoing research project in Harvard's DASLab.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/cpp/cpp.png",
			linkText: "This project is currently private. Contact for more information."
		},

		{
			title: "Project Knight",
			description:
				"A small 2D combat-focused game demo created purely with C++ and SDL2. As my first game, it was built with no prior knowledge of game development.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/cpp/cpp.png",
			linkText: "View Project",
			link: "https://github.com/JSOD11/Project-Knight",
		},

		{
			title: "Distributed Messenger",
			description:
				"A distributed messaging system built in Python for Harvard's graduate level distributed systems course, CS 262. Clients can connect to and send messages through the server.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/JSOD11/CS262-Messenger",
		},

		{
			title: "Distributed Messenger",
			description:
				"The same distributed messaging system as before, this time built in Go. Clients can connect to and send messages through the server.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/go/go.png",
			linkText: "View Project",
			link: "https://github.com/JSOD11/Go-Messenger",
		}
	],
};

export default INFO;
