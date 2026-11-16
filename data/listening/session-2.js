/* Listening · Session 2 — original practice material for IELTS for Brokies. */
IELTS.registerSession({
  section: "listening",
  session: 2,
  title: "Lost property, a food festival, a river study and the bicycle",
  speakers: {
    Narrator: { gender: "male" },
    Clerk: { gender: "male" },
    Sophie: { gender: "female" },
    Presenter: { gender: "male" },
    Priya: { gender: "female" },
    Jack: { gender: "male" },
    "Dr Shaw": { gender: "female", rate: 0.9 },
    Lecturer: { gender: "female", rate: 0.92 }
  },
  parts: [
    /* ======================= PART 1 ======================= */
    {
      label: "Part 1",
      title: "Reporting lost property",
      script: [
        { speaker: "Narrator", text: "Part 1. You will hear a woman phoning a railway lost property office. First, you have some time to look at questions 1 to 5." },
        { pause: 20 },
        { speaker: "Narrator", text: "Now listen carefully and answer questions 1 to 5." },
        { speaker: "Clerk", text: "Good afternoon, Central Railways lost property. How can I help you?" },
        { speaker: "Sophie", text: "Hi. I left a bag on one of your trains, and I'm hoping someone's handed it in." },
        { speaker: "Clerk", text: "Let's see what we can do. I'll fill in a report for you. Can I have your name first?" },
        { speaker: "Sophie", text: "It's Sophie Kowalski. That's K, O, W, A, L, S, K, I." },
        { speaker: "Clerk", text: "Thank you. And when did you travel?" },
        { speaker: "Sophie", text: "Yesterday. So that's the twenty-second of October." },
        { speaker: "Clerk", text: "And do you remember what time the train left?" },
        { speaker: "Sophie", text: "I normally get the seven fifteen, but I missed it yesterday, so I was on the next one. That left at seven forty-five." },
        { speaker: "Clerk", text: "Seven forty-five. Do you remember which carriage you were in?" },
        { speaker: "Sophie", text: "I usually sit in carriage eight because it's the quiet carriage, but it was full, so I ended up in carriage six." },
        { speaker: "Clerk", text: "Carriage six. Right. Now, can you describe the item?" },
        { speaker: "Sophie", text: "Yes, it's a backpack. Not a big one, more like a small laptop bag you carry on your back." },
        { speaker: "Narrator", text: "Before you hear the rest of the conversation, you have some time to look at questions 6 to 10." },
        { pause: 15 },
        { speaker: "Narrator", text: "Now listen and answer questions 6 to 10." },
        { speaker: "Clerk", text: "And what colour is it?" },
        { speaker: "Sophie", text: "People always think it's black, but it's actually dark green." },
        { speaker: "Clerk", text: "Dark green. And what was inside?" },
        { speaker: "Sophie", text: "My laptop, unfortunately. And my diary, which I really need, because all my appointments are in it. There was an umbrella too, but I'm not worried about that." },
        { speaker: "Clerk", text: "Is there anything that would help us recognise it? Lots of backpacks look the same." },
        { speaker: "Sophie", text: "Oh yes. My niece gave me a badge with a penguin on it, and I pinned it to the front pocket." },
        { speaker: "Clerk", text: "That's very helpful. Now, I should tell you that if we find it, there's a small fee for collecting it." },
        { speaker: "Sophie", text: "How much is it?" },
        { speaker: "Clerk", text: "It used to be three pounds, but it went up last month. It's five pounds now." },
        { speaker: "Sophie", text: "That's fine. Where would I collect it from?" },
        { speaker: "Clerk", text: "Our office is at the main station. Don't go to the ticket office by the south entrance; we're right next to the north entrance, opposite the café." },
        { speaker: "Sophie", text: "Next to the north entrance. Great. Thank you so much for your help." },
        { speaker: "Narrator", text: "That is the end of Part 1. You now have some time to check your answers to Part 1." },
        { pause: 15 }
      ],
      groups: [
        {
          type: "gap",
          instructions: "Complete the form below. Write **ONE WORD AND/OR A NUMBER** for each answer.",
          title: "Central Railways: Lost Property Report",
          lines: [
            "First name: *Sophie* (example)",
            "Surname: [[1]]",
            "Date of journey: [[2]]",
            "Train left at: [[3]]",
            "Carriage number: [[4]]",
            "Item lost: a small [[5]]",
            "Colour: dark [[6]]",
            "Contents: laptop, [[7]], umbrella",
            "Special feature: a badge showing a [[8]] on the front pocket",
            "Collection fee: £[[9]]",
            "Collect from office next to the [[10]] entrance"
          ],
          questions: [
            { n: 1, answer: ["Kowalski"], explanation: "She spells it: *\"K, O, W, A, L, S, K, I\"*." },
            { n: 2, answer: ["22 October", "22nd October", "October 22", "22/10", "22.10"], explanation: "*\"So that's the twenty-second of October.\"*" },
            { n: 3, answer: ["7.45", "7:45", "7.45 am", "7:45 am", "745"], explanation: "She missed the 7.15: *\"That left at seven forty-five.\"*" },
            { n: 4, answer: ["6", "six"], explanation: "Carriage 8 was full, *\"so I ended up in carriage six\"*." },
            { n: 5, answer: ["backpack", "back pack", "rucksack"], explanation: "*\"Yes, it's a backpack.\"*" },
            { n: 6, answer: ["green"], explanation: "*\"People always think it's black, but it's actually dark green.\"*" },
            { n: 7, answer: ["diary"], explanation: "*\"My laptop ... And my diary.\"*" },
            { n: 8, answer: ["penguin"], explanation: "*\"a badge with a penguin on it\"*." },
            { n: 9, answer: ["5", "five"], explanation: "*\"It used to be three pounds ... It's five pounds now.\"*" },
            { n: 10, answer: ["north"], explanation: "*\"we're right next to the north entrance\"*. The ticket office is by the south entrance." }
          ]
        }
      ]
    },

    /* ======================= PART 2 ======================= */
    {
      label: "Part 2",
      title: "Harbourside Food Festival",
      script: [
        { speaker: "Narrator", text: "Part 2. You will hear a radio presenter giving information about a food festival. First, you have some time to look at questions 11 to 15." },
        { pause: 20 },
        { speaker: "Narrator", text: "Now listen carefully and answer questions 11 to 15." },
        { speaker: "Presenter", text: "Good morning, and if you're looking for something to do this weekend, the Harbourside Food Festival is back for its tenth year. For the first nine years, it was held in Victoria Park, but the organisers have moved it down to the harbour this year. It isn't because the park was too small, as some people have suggested. The real reason is that the park's grass was badly damaged last year after heavy rain, and the council asked them to find a site with hard ground." },
        { speaker: "Presenter", text: "Entry to the festival itself is free, as always. You only pay for the food you buy. However, some of the cookery demonstrations are very popular, so if you want to watch one, you'll need to book a seat online. Those seats are free too, but they do go quickly." },
        { speaker: "Presenter", text: "Now, a word about getting there. The harbour car park will be closed all weekend for the festival. The organisers are strongly advising people to take the free shuttle bus from the railway station, which runs every ten minutes. If you do have to drive, the nearest parking is at the shopping centre, but that's a twenty-minute walk." },
        { speaker: "Presenter", text: "So what's new this year? Well, there have always been plenty of stalls from local restaurants, and the children's cooking tent has been running since the very first festival. The new feature this year is a zero-waste zone, where all the stalls use reusable plates and cups. The organisers hope to extend that to the whole festival next year." },
        { speaker: "Presenter", text: "And finally, the organisers are still looking for volunteers. They've got plenty of people to help with setting up on Friday, and stewards for the car parks aren't needed this year, of course. What they're short of is people to help with recycling and litter collection on Sunday afternoon. If you can spare a couple of hours, you'll get a free meal voucher." },
        { speaker: "Narrator", text: "Before you hear the rest of the talk, you have some time to look at questions 16 to 20." },
        { pause: 15 },
        { speaker: "Narrator", text: "Now listen and answer questions 16 to 20." },
        { speaker: "Presenter", text: "Let me tell you where to find things. The festival is spread across three areas: the Old Market Hall, the Quayside and the Lighthouse Lawn." },
        { speaker: "Presenter", text: "The cookery demonstrations will be in the Old Market Hall, because it has a proper kitchen. The street food stalls are all along the Quayside, so that's where you'll find most of the hot food. Now, the children's cooking tent was on the Quayside last year, but it was too noisy there, so this year it's on the Lighthouse Lawn, where there's more space." },
        { speaker: "Presenter", text: "If you're interested in local produce, cheese, bread, honey and so on, the farmers' market will be inside the Old Market Hall as well, on the ground floor. And the live music stage, which was very popular last year, will once again be on the Lighthouse Lawn, at the far end from the children's tent. Enjoy the festival!" },
        { speaker: "Narrator", text: "That is the end of Part 2. You now have some time to check your answers to Part 2." },
        { pause: 15 }
      ],
      groups: [
        {
          type: "mcq",
          instructions: "Choose the correct letter, **A, B or C**.",
          questions: [
            { n: 11, text: "Why has the festival moved to the harbour?", options: ["The park was too small.", "The ground in the park was damaged.", "The harbour is easier to reach."], answer: "B", explanation: "*\"It isn't because the park was too small ... The real reason is that the park's grass was badly damaged.\"*" },
            { n: 12, text: "What do visitors need to book online?", options: ["entry to the festival", "seats at cookery demonstrations", "meals at food stalls"], answer: "B", explanation: "*\"if you want to watch one, you'll need to book a seat online.\"*" },
            { n: 13, text: "The organisers recommend that visitors", options: ["use the shuttle bus from the station.", "park at the shopping centre.", "use the harbour car park."], answer: "A", explanation: "*\"strongly advising people to take the free shuttle bus from the railway station.\"*" },
            { n: 14, text: "What is new at this year's festival?", options: ["stalls from local restaurants", "a children's cooking tent", "a zero-waste area"], answer: "C", explanation: "*\"The new feature this year is a zero-waste zone.\"*" },
            { n: 15, text: "Volunteers are especially needed for", options: ["setting up on Friday.", "car park duties.", "recycling and collecting litter."], answer: "C", explanation: "*\"What they're short of is people to help with recycling and litter collection.\"*" }
          ]
        },
        {
          type: "select",
          instructions: "Where can visitors find each of the following? Write the correct letter, **A, B or C**, next to Questions 16–20. You may use any letter more than once.",
          listTitle: "Festival areas",
          options: [
            { key: "A", text: "Old Market Hall" },
            { key: "B", text: "Quayside" },
            { key: "C", text: "Lighthouse Lawn" }
          ],
          questions: [
            { n: 16, text: "cookery demonstrations", answer: "A", explanation: "*\"The cookery demonstrations will be in the Old Market Hall.\"*" },
            { n: 17, text: "street food stalls", answer: "B", explanation: "*\"The street food stalls are all along the Quayside.\"*" },
            { n: 18, text: "children's cooking tent", answer: "C", explanation: "It was on the Quayside last year, *\"so this year it's on the Lighthouse Lawn\"*." },
            { n: 19, text: "farmers' market", answer: "A", explanation: "*\"the farmers' market will be inside the Old Market Hall as well.\"*" },
            { n: 20, text: "live music stage", answer: "C", explanation: "*\"will once again be on the Lighthouse Lawn.\"*" }
          ]
        }
      ]
    },

    /* ======================= PART 3 ======================= */
    {
      label: "Part 3",
      title: "A river field trip",
      script: [
        { speaker: "Narrator", text: "Part 3. You will hear two environmental science students, Priya and Jack, discussing their field trip report with their tutor, Dr Shaw. First, you have some time to look at questions 21 to 25." },
        { pause: 20 },
        { speaker: "Narrator", text: "Now listen carefully and answer questions 21 to 25." },
        { speaker: "Dr Shaw", text: "So, you went to the River Alder for your field trip. How did it go?" },
        { speaker: "Jack", text: "Mostly well. We tested the water at five points along the river, from the hills down to where it reaches the town." },
        { speaker: "Dr Shaw", text: "And why did you choose that river? It's quite a long way from the university." },
        { speaker: "Priya", text: "We did think about the canal, which is much closer, but it barely moves, so it wouldn't have shown much change. The Alder flows through farmland and then a town, so we expected to see a clear difference in water quality between the top and the bottom." },
        { speaker: "Dr Shaw", text: "Good reasoning. Any problems on the day?" },
        { speaker: "Jack", text: "The weather was fine, and the equipment worked. The problem was getting to the sampling points. One of them was on private land, and the farmer wouldn't let us through, so we had to find another spot a bit further down." },
        { speaker: "Dr Shaw", text: "That happens. Make sure you explain it in your method section. And what about the results?" },
        { speaker: "Priya", text: "Well, we expected the water to get steadily worse as it went downstream. And the levels of nitrates did rise sharply after the farmland, which we predicted. What surprised us was that the oxygen levels were actually better in the town than just below the farms." },
        { speaker: "Jack", text: "We think it's because there's a weir in the town, a little waterfall, which mixes air into the water." },
        { speaker: "Dr Shaw", text: "That's a sensible explanation. You should look for some published research to support it. Now, I've read your draft, and the main weakness is the discussion. You describe the results clearly, but you don't really compare them with anything. You need to put them in context, using the data from the Environment Agency, for example." },
        { speaker: "Priya", text: "Okay. We weren't sure whether we were allowed to use other data." },
        { speaker: "Dr Shaw", text: "You definitely should. And one last thing: you only visited the river once. Do you think that's a problem?" },
        { speaker: "Jack", text: "We know the results might be different in winter, when there's more rain. But we didn't have time to go back." },
        { speaker: "Dr Shaw", text: "That's fine, but say so clearly as a limitation. Don't hide it." },
        { speaker: "Narrator", text: "Before you hear the rest of the discussion, you have some time to look at questions 26 to 30." },
        { pause: 15 },
        { speaker: "Narrator", text: "Now listen and answer questions 26 to 30." },
        { speaker: "Dr Shaw", text: "Let's go through what still needs doing on each section of the report." },
        { speaker: "Priya", text: "The introduction's nearly finished, but it's far too long. It's almost two pages. We need to cut it in half." },
        { speaker: "Dr Shaw", text: "Agreed. What about the method?" },
        { speaker: "Jack", text: "As you said, we need to add the bit about the sampling point we had to move. Otherwise it's done." },
        { speaker: "Dr Shaw", text: "And the results section?" },
        { speaker: "Priya", text: "The text is fine, but the graphs are a mess. They're all in different colours and styles. We need to make them consistent." },
        { speaker: "Dr Shaw", text: "Yes, they're hard to compare at the moment. The discussion we've talked about. What about the conclusion?" },
        { speaker: "Jack", text: "We haven't actually written it yet. We were waiting until the discussion was finished." },
        { speaker: "Dr Shaw", text: "Sensible. And your references?" },
        { speaker: "Priya", text: "We've got about fifteen, but they're in different formats. Some have the year at the end, some at the beginning. We need to check them all against the university style guide." },
        { speaker: "Dr Shaw", text: "Good. Well, I look forward to the final version." },
        { speaker: "Narrator", text: "That is the end of Part 3. You now have some time to check your answers to Part 3." },
        { pause: 15 }
      ],
      groups: [
        {
          type: "mcq",
          instructions: "Choose the correct letter, **A, B or C**.",
          questions: [
            { n: 21, text: "Why did the students choose the River Alder?", options: ["It was close to the university.", "It passes through different types of land.", "It had been studied before."], answer: "B", explanation: "Priya: *\"The Alder flows through farmland and then a town, so we expected to see a clear difference.\"*" },
            { n: 22, text: "What problem did they have on the day?", options: ["They could not reach one sampling point.", "Their equipment stopped working.", "The weather was too bad."], answer: "A", explanation: "Jack: *\"One of them was on private land, and the farmer wouldn't let us through.\"*" },
            { n: 23, text: "What surprised the students about their results?", options: ["Nitrate levels rose after the farmland.", "Oxygen levels were higher in the town.", "Water quality improved near the hills."], answer: "B", explanation: "Priya: *\"What surprised us was that the oxygen levels were actually better in the town.\"* The nitrate rise was predicted." },
            { n: 24, text: "Dr Shaw says the discussion section should", options: ["describe the results more clearly.", "compare the results with other data.", "be shorter."], answer: "B", explanation: "*\"You need to put them in context, using the data from the Environment Agency.\"*" },
            { n: 25, text: "What does Dr Shaw say about visiting the river only once?", options: ["They should go back in winter.", "It makes the results useless.", "They should mention it as a limitation."], answer: "C", explanation: "*\"say so clearly as a limitation. Don't hide it.\"*" }
          ]
        },
        {
          type: "select",
          instructions: "What do the students still need to do on each section of their report? Choose **FIVE** answers from the box and write the correct letter, **A–G**, next to Questions 26–30.",
          listTitle: "Action needed",
          options: [
            { key: "A", text: "make it shorter" },
            { key: "B", text: "add more references" },
            { key: "C", text: "write it from the beginning" },
            { key: "D", text: "make the presentation consistent" },
            { key: "E", text: "include an explanation of a change" },
            { key: "F", text: "check the format" },
            { key: "G", text: "ask the tutor for advice" }
          ],
          questions: [
            { n: 26, text: "Introduction", answer: "A", explanation: "*\"it's far too long ... We need to cut it in half.\"*" },
            { n: 27, text: "Method", answer: "E", explanation: "*\"we need to add the bit about the sampling point we had to move.\"*" },
            { n: 28, text: "Results", answer: "D", explanation: "*\"the graphs are a mess ... We need to make them consistent.\"*" },
            { n: 29, text: "Conclusion", answer: "C", explanation: "*\"We haven't actually written it yet.\"*" },
            { n: 30, text: "References", answer: "F", explanation: "*\"they're in different formats ... We need to check them all against the university style guide.\"*" }
          ]
        }
      ]
    },

    /* ======================= PART 4 ======================= */
    {
      label: "Part 4",
      title: "Lecture: the history of the bicycle",
      script: [
        { speaker: "Narrator", text: "Part 4. You will hear part of a lecture about the history of the bicycle. First, you have some time to look at questions 31 to 40." },
        { pause: 30 },
        { speaker: "Narrator", text: "Now listen carefully and answer questions 31 to 40." },
        { speaker: "Lecturer", text: "Good morning. In today's lecture on the history of transport, I want to look at a machine that most of us take completely for granted: the bicycle. It's easy to assume it was invented in a single moment of genius, but in fact it developed over about seventy years, through a series of designs, some of which were rather strange." },
        { speaker: "Lecturer", text: "The story usually begins in Germany in 1817, with a machine built by Karl von Drais. It had two wheels in a line and a seat, but no pedals. Riders simply pushed themselves along with their feet, rather like a child's balance bike today. It was made almost entirely of wood. Some historians have linked its invention to a terrible harvest in 1816, which led to the death of many horses, so people needed an alternative way of getting around, although this connection is still debated." },
        { speaker: "Lecturer", text: "The next major step came in France in the 1860s, when pedals were attached directly to the front wheel. These machines were nicknamed 'boneshakers', and the name tells you exactly what riding one felt like. They had iron tyres on wooden wheels, and on the cobbled streets of the time, the experience was extremely uncomfortable." },
        { speaker: "Lecturer", text: "Because the pedals were fixed to the front wheel, one turn of the pedals meant one turn of the wheel. So the only way to go faster was to make the front wheel bigger. This led to the famous high-wheeler, often called the penny-farthing, which appeared in the 1870s. Some front wheels were up to one and a half metres across. They were fast, but also very dangerous. If the front wheel hit a stone, the rider could be thrown over the handlebars head first. As a result, cycling became largely a sport for young, wealthy and rather daring men." },
        { speaker: "Lecturer", text: "The solution was the so-called safety bicycle, which appeared in England in the 1880s. It had two wheels of the same size, and the pedals drove the back wheel by means of a chain. This allowed the bicycle to go fast without a huge front wheel. Then, in 1888, a Scottish vet called John Dunlop developed a practical air-filled tyre, apparently to make his son's tricycle more comfortable. These inflatable tyres made cycling far smoother, and the basic design of the bicycle has hardly changed since." },
        { speaker: "Lecturer", text: "The social impact was enormous. The safety bicycle was relatively cheap, and for the first time, ordinary working people had a form of personal transport that didn't need to be fed like a horse. It allowed people to live further from their workplace. It also had a particularly important effect on women. Cycling gave women a new degree of independence, and it helped to change fashion, since the long, heavy skirts of the time were impractical on a bicycle. Some campaigners for women's rights described the bicycle as a symbol of freedom." },
        { speaker: "Lecturer", text: "In the twentieth century, of course, the car took over in many countries. But today, bicycles are making a comeback in cities around the world, and many cities have introduced bike-sharing schemes. Next week, we'll look at the role of cycling in modern transport planning." },
        { speaker: "Narrator", text: "That is the end of Part 4. You now have some time to check your answers." },
        { pause: 20 }
      ],
      groups: [
        {
          type: "gap",
          instructions: "Complete the notes below. Write **ONE WORD ONLY** for each answer.",
          title: "The development of the bicycle",
          lines: [
            "# 1817: Karl von Drais's machine (Germany)",
            "- No pedals: riders pushed with their [[31]]",
            "- Built mainly of [[32]]",
            "- Possibly linked to a bad harvest, after which many [[33]] died",
            "# 1860s: the 'boneshaker' (France)",
            "- Wooden wheels with [[34]] tyres; very uncomfortable",
            "# 1870s: the high-wheeler",
            "- Larger front wheel = more [[35]]",
            "- Dangerous: riders could be thrown over the [[36]]",
            "# 1880s: the safety bicycle (England)",
            "- Pedals turned the back wheel using a [[37]]",
            "- 1888: Dunlop's air-filled tyre, first made for his son's [[38]]",
            "# Social effects",
            "- People could live further from their [[39]]",
            "- Women gained more independence; it even changed [[40]]"
          ],
          questions: [
            { n: 31, answer: ["feet", "foot"], explanation: "*\"Riders simply pushed themselves along with their feet.\"*" },
            { n: 32, answer: ["wood"], explanation: "*\"It was made almost entirely of wood.\"*" },
            { n: 33, answer: ["horses"], explanation: "*\"a terrible harvest in 1816, which led to the death of many horses.\"*" },
            { n: 34, answer: ["iron"], explanation: "*\"They had iron tyres on wooden wheels.\"*" },
            { n: 35, answer: ["speed"], explanation: "*\"the only way to go faster was to make the front wheel bigger.\"* Faster = more speed." },
            { n: 36, answer: ["handlebars", "handlebar"], explanation: "*\"the rider could be thrown over the handlebars head first.\"*" },
            { n: 37, answer: ["chain"], explanation: "*\"the pedals drove the back wheel by means of a chain.\"*" },
            { n: 38, answer: ["tricycle"], explanation: "*\"apparently to make his son's tricycle more comfortable.\"*" },
            { n: 39, answer: ["workplace", "work", "workplaces"], explanation: "*\"It allowed people to live further from their workplace.\"*" },
            { n: 40, answer: ["fashion", "clothes", "clothing"], explanation: "*\"it helped to change fashion.\"*" }
          ]
        }
      ]
    }
  ]
});
