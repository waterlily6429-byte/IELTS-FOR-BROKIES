/* Listening · Session 4 — original practice material for IELTS for Brokies. */
IELTS.registerSession({
  section: "listening",
  session: 4,
  title: "Hiring a removal van, a city farm, a commuting survey and Roman concrete",
  speakers: {
    Narrator: { gender: "male" },
    Agent: { gender: "male" },
    Mei: { gender: "female" },
    Coordinator: { gender: "male" },
    Leila: { gender: "female" },
    Ben: { gender: "male" },
    Lecturer: { gender: "female", rate: 0.92 }
  },
  parts: [
    /* ======================= PART 1 ======================= */
    {
      label: "Part 1",
      title: "Booking a removal van",
      script: [
        { speaker: "Narrator", text: "Part 1. You will hear a woman phoning a company to book help with moving house. First, you have some time to look at questions 1 to 6." },
        { pause: 20 },
        { speaker: "Narrator", text: "Now listen carefully and answer questions 1 to 6." },
        { speaker: "Agent", text: "Good morning, Swift Removals. How can I help?" },
        { speaker: "Mei", text: "Hello. I'm moving flat next month and I'd like to get a price for a van and some help." },
        { speaker: "Agent", text: "No problem. We have three options. You can hire just the van and drive it yourself. Or there's the van with a driver. Or the full service, where we pack everything for you as well." },
        { speaker: "Mei", text: "I think the van with a driver. I'm happy to pack myself, but I don't want to drive a big van." },
        { speaker: "Agent", text: "Very sensible. And how big is the flat you're moving from?" },
        { speaker: "Mei", text: "It's quite small. One bedroom." },
        { speaker: "Agent", text: "Then our medium van should be enough. For a one-bedroom flat with a driver, the price is a hundred and sixty pounds for up to four hours. After that, it's thirty pounds for each extra hour." },
        { speaker: "Mei", text: "A hundred and sixty. Okay. And would the driver help carry things?" },
        { speaker: "Agent", text: "Yes, the driver will help with loading and unloading. If you have anything very heavy, like a piano, you'd need a second person, which costs extra." },
        { speaker: "Mei", text: "No piano, but I do have a big bookcase. I think it'll be fine." },
        { speaker: "Agent", text: "What date are you thinking of?" },
        { speaker: "Mei", text: "Saturday the fourteenth, if possible. Or the Sunday after, the fifteenth." },
        { speaker: "Agent", text: "Saturdays are very busy. The fourteenth is fully booked, I'm afraid, but Sunday the fifteenth is fine." },
        { speaker: "Narrator", text: "Before you hear the rest of the conversation, you have some time to look at questions 7 to 10." },
        { pause: 15 },
        { speaker: "Narrator", text: "Now listen and answer questions 7 to 10." },
        { speaker: "Agent", text: "Can I take the addresses? Where are you moving from?" },
        { speaker: "Mei", text: "Twelve Harbour Road. It's a second-floor flat." },
        { speaker: "Agent", text: "Is there a lift?" },
        { speaker: "Mei", text: "Unfortunately not. Only stairs." },
        { speaker: "Agent", text: "I'll make a note. And where are you going to?" },
        { speaker: "Mei", text: "Forty-one Birchwood Avenue. That's a ground-floor flat, so that end's easy. Birchwood is B, I, R, C, H, W, O, O, D." },
        { speaker: "Agent", text: "Thank you. Is there anywhere for the van to park at the new address?" },
        { speaker: "Mei", text: "Yes, there's a driveway, so that's no problem." },
        { speaker: "Agent", text: "Great. To confirm the booking, we take a deposit of forty pounds, and you pay the rest on the day." },
        { speaker: "Mei", text: "And can I cancel if something changes?" },
        { speaker: "Agent", text: "Yes, you get the deposit back if you cancel at least seventy-two hours before the move." },
        { speaker: "Narrator", text: "That is the end of Part 1. You now have some time to check your answers to Part 1." },
        { pause: 15 }
      ],
      groups: [
        {
          type: "gap",
          instructions: "Complete the form below. Write **ONE WORD AND/OR A NUMBER** for each answer.",
          title: "Swift Removals: booking form",
          lines: [
            "Service: van with a [[1]]",
            "Size of current home: [[2]] bedroom(s)",
            "Price: £[[3]] for up to 4 hours",
            "Each extra hour: £[[4]]",
            "Largest item: a [[5]]",
            "Date of move: Sunday [[6]]",
            "From: 12 Harbour Road (second floor, no [[7]])",
            "To: 41 [[8]] Avenue",
            "Parking at new address: a [[9]]",
            "Deposit: £40, returned if cancelled [[10]] hours before"
          ],
          questions: [
            { n: 1, answer: ["driver"], explanation: "*\"I think the van with a driver.\"*" },
            { n: 2, answer: ["1", "one"], explanation: "*\"It's quite small. One bedroom.\"*" },
            { n: 3, answer: ["160", "one hundred and sixty"], explanation: "*\"the price is a hundred and sixty pounds for up to four hours.\"*" },
            { n: 4, answer: ["30", "thirty"], explanation: "*\"it's thirty pounds for each extra hour.\"*" },
            { n: 5, answer: ["bookcase", "bookshelf"], explanation: "*\"No piano, but I do have a big bookcase.\"*" },
            { n: 6, answer: ["15", "15th", "fifteenth", "15 (th)"], explanation: "The 14th is fully booked, *\"but Sunday the fifteenth is fine.\"*" },
            { n: 7, answer: ["lift", "elevator"], explanation: "*\"Is there a lift?\" \"Unfortunately not.\"*" },
            { n: 8, answer: ["Birchwood"], explanation: "She spells it: *\"B, I, R, C, H, W, O, O, D.\"*" },
            { n: 9, answer: ["driveway", "drive"], explanation: "*\"there's a driveway, so that's no problem.\"*" },
            { n: 10, answer: ["72", "seventy-two"], explanation: "*\"if you cancel at least seventy-two hours before the move.\"*" }
          ]
        }
      ]
    },

    /* ======================= PART 2 ======================= */
    {
      label: "Part 2",
      title: "Volunteering at a city farm",
      script: [
        { speaker: "Narrator", text: "Part 2. You will hear the volunteer coordinator at a city farm talking to new volunteers. First, you have some time to look at questions 11 to 15." },
        { pause: 20 },
        { speaker: "Narrator", text: "Now listen carefully and answer questions 11 to 15." },
        { speaker: "Coordinator", text: "Morning, everyone, and thanks for coming to our first volunteer session at Brook Lane City Farm. I'm Marcus, and I coordinate the volunteers." },
        { speaker: "Coordinator", text: "Let me start with a bit of background. The farm was set up thirty years ago on land where there used to be a factory. People often think it was started by the council, but in fact it was a group of parents from the local school who wanted their children to see where food comes from. The council only got involved later, when they gave us a long lease on the land." },
        { speaker: "Coordinator", text: "These days we get about forty thousand visitors a year. Most are families, of course, but our fastest-growing group is actually older people from care homes, who come to spend time with the animals. We've found it really helps them." },
        { speaker: "Coordinator", text: "Now, some practical points. Please always wear the boots we provide. Your own trainers are not suitable, and they'll get ruined. We keep the boots in the shed by the gate. You don't need to bring gloves; we have plenty." },
        { speaker: "Coordinator", text: "The most important rule is about hand washing. Some of the animals carry germs that are harmless to them but can make people ill, so you must wash your hands every time you leave an animal area, not just before eating." },
        { speaker: "Coordinator", text: "Finally, a lot of people ask whether they can bring their dogs. I'm afraid the answer is no. It isn't that the dogs would be badly behaved. It's that the smell of a dog makes some of our animals, especially the sheep, very anxious." },
        { speaker: "Narrator", text: "Before you hear the rest of the talk, you have some time to look at questions 16 to 20." },
        { pause: 15 },
        { speaker: "Narrator", text: "Now listen and answer questions 16 to 20." },
        { speaker: "Coordinator", text: "Now, let me tell you who you'll be working with. We have five team leaders, and each of them looks after a different area." },
        { speaker: "Coordinator", text: "Ruth has been here the longest, and she's in charge of the goats and sheep. If you're interested in the vegetable garden, that's run by Sanjay, who used to be a chef, so he's always got ideas for what to do with the harvest." },
        { speaker: "Coordinator", text: "Our shop and café is run by Gemma. She's always looking for help at weekends. Then there's Owen. He doesn't look after animals or plants at all; he organises the school visits, and he'll need people who are good with children." },
        { speaker: "Coordinator", text: "And finally there's Kate. You might think, from her job title, that she only does paperwork, but Kate is our maintenance manager, so she looks after the fences, buildings and tools. If anything's broken, she's the person to tell." },
        { speaker: "Narrator", text: "That is the end of Part 2. You now have some time to check your answers to Part 2." },
        { pause: 15 }
      ],
      groups: [
        {
          type: "mcq",
          instructions: "Choose the correct letter, **A, B or C**.",
          questions: [
            { n: 11, text: "Who started the farm?", options: ["the local council", "a group of parents", "a factory owner"], answer: "B", explanation: "*\"it was a group of parents from the local school.\"* The council came later." },
            { n: 12, text: "Which group of visitors is increasing fastest?", options: ["families", "school groups", "older people"], answer: "C", explanation: "*\"our fastest-growing group is actually older people from care homes.\"*" },
            { n: 13, text: "What should volunteers bring?", options: ["nothing, because boots and gloves are provided", "their own gloves", "suitable trainers"], answer: "A", explanation: "Boots are provided in the shed, and *\"You don't need to bring gloves; we have plenty.\"*" },
            { n: 14, text: "Volunteers must wash their hands", options: ["only before eating.", "after leaving any animal area.", "at the start of each session."], answer: "B", explanation: "*\"you must wash your hands every time you leave an animal area, not just before eating.\"*" },
            { n: 15, text: "Why are dogs not allowed?", options: ["They upset some animals.", "They behave badly.", "They carry germs."], answer: "A", explanation: "*\"the smell of a dog makes some of our animals, especially the sheep, very anxious.\"*" }
          ]
        },
        {
          type: "select",
          instructions: "What is each team leader responsible for? Choose **FIVE** answers from the box and write the correct letter, **A–G**, next to Questions 16–20.",
          listTitle: "Responsibilities",
          options: [
            { key: "A", text: "visits by schools" },
            { key: "B", text: "growing food" },
            { key: "C", text: "office work" },
            { key: "D", text: "repairs" },
            { key: "E", text: "selling things" },
            { key: "F", text: "some of the animals" },
            { key: "G", text: "training new volunteers" }
          ],
          questions: [
            { n: 16, text: "Ruth", answer: "F", explanation: "*\"she's in charge of the goats and sheep.\"*" },
            { n: 17, text: "Sanjay", answer: "B", explanation: "*\"the vegetable garden, that's run by Sanjay.\"*" },
            { n: 18, text: "Gemma", answer: "E", explanation: "*\"Our shop and café is run by Gemma.\"*" },
            { n: 19, text: "Owen", answer: "A", explanation: "*\"he organises the school visits.\"*" },
            { n: 20, text: "Kate", answer: "D", explanation: "Not paperwork: *\"she looks after the fences, buildings and tools. If anything's broken, she's the person to tell.\"*" }
          ]
        }
      ]
    },

    /* ======================= PART 3 ======================= */
    {
      label: "Part 3",
      title: "A survey on commuting",
      script: [
        { speaker: "Narrator", text: "Part 3. You will hear two geography students, Leila and Ben, discussing a survey they carried out on how students travel to the university. First, you have some time to look at questions 21 to 26." },
        { pause: 20 },
        { speaker: "Narrator", text: "Now listen carefully and answer questions 21 to 26." },
        { speaker: "Ben", text: "So, we've got all the survey results in. Shall we go through them before we start writing up?" },
        { speaker: "Leila", text: "Yes. First of all, the response rate. We sent the questionnaire to six hundred students, and we got about two hundred and forty back, so forty per cent. That's better than I expected." },
        { speaker: "Ben", text: "I think offering the prize draw helped. Though I wonder if it's why so many first-year students replied. They were nearly half the responses." },
        { speaker: "Leila", text: "That's a fair point. Our sample isn't really balanced. We should mention that as a weakness." },
        { speaker: "Ben", text: "Okay. Now the main finding. Walking was the most common way of getting here, which isn't surprising, since lots of students live close by. But I was surprised that cycling was so low, only about eight per cent." },
        { speaker: "Leila", text: "Me too, given how flat the city is. And look at the reasons people gave for not cycling. I assumed it'd be the weather, but the top reason by far was fear of having their bike stolen." },
        { speaker: "Ben", text: "Which makes sense. There's hardly anywhere secure to leave a bike on campus." },
        { speaker: "Leila", text: "What about the bus? People complained a lot in the comments." },
        { speaker: "Ben", text: "They did, but mostly not about the price, because students get a discount. The real problem is that the buses are so crowded in the morning that they sometimes don't stop." },
        { speaker: "Leila", text: "And the car drivers? I thought they'd mostly be people living far away." },
        { speaker: "Ben", text: "Some are, but quite a few said they drive because they have to drop children at school on the way. I hadn't thought about students being parents." },
        { speaker: "Narrator", text: "Before you hear the rest of the discussion, you have some time to look at questions 27 to 30." },
        { pause: 15 },
        { speaker: "Narrator", text: "Now listen and answer questions 27 to 30." },
        { speaker: "Leila", text: "So what recommendations do we make? I think the obvious one is more secure bike storage." },
        { speaker: "Ben", text: "Definitely. Maybe a locked shelter with cameras near the library. We could also suggest the university talks to the bus company about adding extra buses between eight and nine." },
        { speaker: "Leila", text: "Good. Now, for the report, I think the results section needs a map showing where respondents live. That would explain a lot." },
        { speaker: "Ben", text: "We've got their postcodes, so that's possible. I'll do the map, since I did the mapping module last year. Can you do the statistics?" },
        { speaker: "Leila", text: "Sure. And we should send a short summary to the Students' Union. They said they'd be interested, and they might actually push for some of the changes." },
        { speaker: "Ben", text: "Good idea. Let's aim to finish the first draft by Friday, and then show it to our supervisor next Tuesday." },
        { speaker: "Narrator", text: "That is the end of Part 3. You now have some time to check your answers to Part 3." },
        { pause: 15 }
      ],
      groups: [
        {
          type: "mcq",
          instructions: "Choose the correct letter, **A, B or C**.",
          questions: [
            { n: 21, text: "What do the students say is a weakness of their survey?", options: ["The response rate was low.", "Too many replies came from one year group.", "The questions were unclear."], answer: "B", explanation: "First-years *\"were nearly half the responses ... Our sample isn't really balanced.\"*" },
            { n: 22, text: "What surprised Ben about the results?", options: ["how many students walk", "how few students cycle", "how many students drive"], answer: "B", explanation: "*\"I was surprised that cycling was so low, only about eight per cent.\"*" },
            { n: 23, text: "The main reason students gave for not cycling was", options: ["the weather.", "the hills in the city.", "the risk of theft."], answer: "C", explanation: "*\"the top reason by far was fear of having their bike stolen.\"*" },
            { n: 24, text: "What is the main complaint about buses?", options: ["They are too expensive.", "They are often too full.", "They do not go near the university."], answer: "B", explanation: "*\"the buses are so crowded in the morning that they sometimes don't stop.\"*" },
            { n: 25, text: "What did Ben learn about some car drivers?", options: ["They take children to school.", "They live outside the city.", "They share cars with friends."], answer: "A", explanation: "*\"they drive because they have to drop children at school on the way.\"*" },
            { n: 26, text: "Where do they suggest putting a bike shelter?", options: ["next to the bus stop", "near the library", "in the car park"], answer: "B", explanation: "*\"Maybe a locked shelter with cameras near the library.\"*" }
          ]
        },
        {
          type: "gap",
          instructions: "Complete the sentences below. Write **ONE WORD ONLY** for each answer.",
          lines: [
            "The results section will include a [[27]] showing where students live.",
            "Ben will make it because he took a module on [[28]] last year.",
            "A summary will be sent to the Students' [[29]].",
            "They will show the draft to their supervisor on [[30]]."
          ],
          questions: [
            { n: 27, answer: ["map"], explanation: "*\"the results section needs a map showing where respondents live.\"*" },
            { n: 28, answer: ["mapping"], explanation: "*\"since I did the mapping module last year.\"*" },
            { n: 29, answer: ["Union"], explanation: "*\"we should send a short summary to the Students' Union.\"*" },
            { n: 30, answer: ["Tuesday"], explanation: "Draft by Friday, *\"and then show it to our supervisor next Tuesday.\"*" }
          ]
        }
      ]
    },

    /* ======================= PART 4 ======================= */
    {
      label: "Part 4",
      title: "Lecture: the secret of Roman concrete",
      script: [
        { speaker: "Narrator", text: "Part 4. You will hear part of a lecture about building materials in ancient Rome. First, you have some time to look at questions 31 to 40." },
        { pause: 30 },
        { speaker: "Narrator", text: "Now listen carefully and answer questions 31 to 40." },
        { speaker: "Lecturer", text: "Good afternoon. In today's materials science lecture, I want to look back two thousand years, to a material that engineers are still learning from: Roman concrete." },
        { speaker: "Lecturer", text: "Modern concrete is one of the most widely used materials on earth, but it has a weakness. Many concrete structures built in the twentieth century are already cracking after fifty or sixty years. Yet in Rome, you can still visit buildings made of concrete that have stood for around two thousand years. The most famous is the Pantheon, a temple whose enormous concrete dome is still the largest unreinforced dome in the world. So what did the Romans know that we didn't?" },
        { speaker: "Lecturer", text: "The first part of the answer is an ingredient: volcanic ash. The Romans mixed lime with ash from volcanoes near the Bay of Naples. When this ash reacts with lime and water, it forms very strong minerals that bind the material together." },
        { speaker: "Lecturer", text: "The second part of the answer was only understood quite recently. For a long time, researchers had noticed small white lumps of lime in Roman concrete. They were usually assumed to be a sign of poor mixing, in other words, a mistake. But a study published in 2023 suggested something quite different. These lumps seem to have been formed deliberately, by mixing the concrete with lime while it was still hot. And they turn out to be very useful." },
        { speaker: "Lecturer", text: "Here's why. When a small crack forms in the concrete and water gets in, the water reaches one of these lumps and dissolves some of the lime. The lime then reacts and forms a new mineral, which fills the crack. In other words, the concrete can repair itself. Researchers tested this by making samples with and without the lumps, cracking them, and running water through them. Within two weeks, the cracks in the samples with lumps had completely closed, while water continued to flow through the others." },
        { speaker: "Lecturer", text: "Roman harbour structures are even more remarkable. In seawater, modern concrete is gradually damaged. But Roman concrete in the sea actually became stronger over time, because seawater reacting with the volcanic ash produced rare crystals that grew inside it." },
        { speaker: "Lecturer", text: "So why don't we simply use the Roman recipe today? There are a few reasons. Roman concrete takes much longer to harden, which would slow down modern construction. It's also not as strong when it's first made, so it isn't suitable for every purpose. And of course, it doesn't contain steel, which modern buildings depend on." },
        { speaker: "Lecturer", text: "But there's a big environmental reason to learn from it. Making modern cement produces a huge amount of carbon dioxide, around eight per cent of the world's total. The Roman method used lower temperatures, so it needed less fuel. If we can develop concrete that lasts longer and repairs itself, we would need to replace structures less often, which would reduce emissions significantly." },
        { speaker: "Narrator", text: "That is the end of Part 4. You now have some time to check your answers." },
        { pause: 20 }
      ],
      groups: [
        {
          type: "gap",
          instructions: "Complete the notes below. Write **ONE WORD ONLY** for each answer.",
          title: "Roman concrete",
          lines: [
            "# The problem with modern concrete",
            "- Often starts [[31]] after 50–60 years",
            "- Roman example: the Pantheon's concrete [[32]]",
            "# Ingredient 1",
            "- Lime mixed with volcanic [[33]]",
            "# Ingredient 2: lime lumps",
            "- Once thought to be a [[34]] in mixing",
            "- Probably made by mixing with lime while it was [[35]]",
            "- When water enters a crack, lime forms a new [[36]] that fills it",
            "- In tests, cracks closed within two [[37]]",
            "# In the sea",
            "- Roman concrete became [[38]] over time",
            "# Why not use it now?",
            "- Takes longer to harden; contains no [[39]]",
            "# Environmental benefit",
            "- Making cement produces about 8% of the world's carbon dioxide",
            "- The Roman method used lower [[40]]"
          ],
          questions: [
            { n: 31, answer: ["cracking"], explanation: "*\"Many concrete structures ... are already cracking after fifty or sixty years.\"*" },
            { n: 32, answer: ["dome"], explanation: "*\"a temple whose enormous concrete dome is still the largest unreinforced dome.\"*" },
            { n: 33, answer: ["ash"], explanation: "*\"The Romans mixed lime with ash from volcanoes.\"*" },
            { n: 34, answer: ["mistake", "error", "fault"], explanation: "*\"assumed to be a sign of poor mixing, in other words, a mistake.\"*" },
            { n: 35, answer: ["hot"], explanation: "*\"by mixing the concrete with lime while it was still hot.\"*" },
            { n: 36, answer: ["mineral"], explanation: "*\"The lime then reacts and forms a new mineral, which fills the crack.\"*" },
            { n: 37, answer: ["weeks"], explanation: "*\"Within two weeks, the cracks ... had completely closed.\"*" },
            { n: 38, answer: ["stronger"], explanation: "*\"Roman concrete in the sea actually became stronger over time.\"*" },
            { n: 39, answer: ["steel"], explanation: "*\"it doesn't contain steel, which modern buildings depend on.\"*" },
            { n: 40, answer: ["temperatures", "temperature"], explanation: "*\"The Roman method used lower temperatures, so it needed less fuel.\"*" }
          ]
        }
      ]
    }
  ]
});
