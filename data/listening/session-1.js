/* Listening · Session 1 — original practice material for IELTS for Brokies.
   The "script" lines are read aloud by the browser. { pause: seconds } is silent reading/checking time. */
IELTS.registerSession({
  section: "listening",
  session: 1,
  title: "Garden volunteers, a nature reserve, food waste and glowing sea life",
  speakers: {
    Narrator: { gender: "male" },
    Receptionist: { gender: "female" },
    Daniel: { gender: "male" },
    Ranger: { gender: "female" },
    Maya: { gender: "female" },
    Tom: { gender: "male" },
    "Dr Lewis": { gender: "female", rate: 0.9 },
    Lecturer: { gender: "male", rate: 0.92 }
  },
  parts: [
    /* ======================= PART 1 ======================= */
    {
      label: "Part 1",
      title: "Registering as a garden volunteer",
      script: [
        { speaker: "Narrator", text: "Part 1. You will hear a man phoning a community garden to register as a volunteer. First, you have some time to look at questions 1 to 5." },
        { pause: 20 },
        { speaker: "Narrator", text: "Now listen carefully and answer questions 1 to 5." },
        { speaker: "Receptionist", text: "Good morning, Riverside Community Garden, Jess speaking. How can I help?" },
        { speaker: "Daniel", text: "Oh, hello. I saw that you're looking for volunteers, and I'd like to sign up, if that's still possible." },
        { speaker: "Receptionist", text: "It certainly is. We need all the help we can get at this time of year. I'll just take a few details. Can I have your name, please?" },
        { speaker: "Daniel", text: "Yes, it's Daniel. Daniel Hartley." },
        { speaker: "Receptionist", text: "Could you spell your surname for me?" },
        { speaker: "Daniel", text: "Sure. It's H, A, R, T, L, E, Y." },
        { speaker: "Receptionist", text: "Thanks. And do you live near the garden?" },
        { speaker: "Daniel", text: "Fairly near. I'm on Crane Street, just behind the library." },
        { speaker: "Receptionist", text: "Lovely. What's the postcode there?" },
        { speaker: "Daniel", text: "It's B, R, 7. Then 4, Q, N." },
        { speaker: "Receptionist", text: "B R 7, 4 Q N. Great. And a phone number?" },
        { speaker: "Daniel", text: "It's 0 7 7 0 0, 9 0 0, 4 1 2." },
        { speaker: "Receptionist", text: "Thanks. Now, we run volunteer sessions three times a week: Wednesday afternoons, Friday mornings and all day on Saturday. Which would suit you best?" },
        { speaker: "Daniel", text: "Well, I was going to say Wednesday, because I finish work early that day. But actually, I've just remembered that I've started an evening course, and the first class is on Wednesday afternoons. So I'd better go for Saturday." },
        { speaker: "Receptionist", text: "Saturday's our busiest day, so that's perfect. And roughly how many hours a week could you give us?" },
        { speaker: "Daniel", text: "I'd love to say five, but realistically, with the course, I think three hours is about right." },
        { speaker: "Receptionist", text: "That's absolutely fine. Even an hour or two makes a difference. Have you done any gardening before?" },
        { speaker: "Daniel", text: "Not a lot, to be honest. I don't have a garden, but I've grown tomatoes on my balcony for the last couple of summers. I tried strawberries once, but they didn't survive." },
        { speaker: "Narrator", text: "Before you hear the rest of the conversation, you have some time to look at questions 6 to 10." },
        { pause: 15 },
        { speaker: "Narrator", text: "Now listen and answer questions 6 to 10." },
        { speaker: "Receptionist", text: "Well, you'll learn plenty here. Is there a particular project you'd like to help with? At the moment we're planting a herb bed, and we're also about to start building a new greenhouse." },
        { speaker: "Daniel", text: "I'm quite practical, actually. I put together all the furniture in my flat. So I'd really like to help with the greenhouse." },
        { speaker: "Receptionist", text: "Brilliant. The herb bed's almost finished anyway. Now, I have to ask about health. Do you have any allergies we should know about? We're outside a lot, and we share snacks during the tea break." },
        { speaker: "Daniel", text: "Pollen doesn't bother me at all, luckily. But I'm allergic to nuts, so I'd need to be careful with the snacks." },
        { speaker: "Receptionist", text: "I'll make a note of that, and we'll label everything on the tea table. Now, as for what to bring. We provide all the tools, so you don't need to worry about spades or anything like that. But we do ask everyone to bring their own gloves, because we never seem to have enough pairs that fit." },
        { speaker: "Daniel", text: "No problem. Should I bring boots as well?" },
        { speaker: "Receptionist", text: "Boots are a good idea, but they're not essential. Trainers are fine in dry weather." },
        { speaker: "Daniel", text: "Okay. And when could I start?" },
        { speaker: "Receptionist", text: "Our next welcome session for new volunteers is on Saturday the seventh of March. Oh, no, wait, sorry, that one's already full. The one after that is on the fourteenth of March. Is that okay?" },
        { speaker: "Daniel", text: "The fourteenth is fine." },
        { speaker: "Receptionist", text: "Great. And one last question, just for our records. How did you hear about us? Was it our website?" },
        { speaker: "Daniel", text: "I did look at the website later, but I first read about you in the newsletter that the council sends round every month." },
        { speaker: "Receptionist", text: "Oh good, so that's working! Right, Daniel, I'll email you a map and we'll see you on the fourteenth." },
        { speaker: "Narrator", text: "That is the end of Part 1. You now have some time to check your answers to Part 1." },
        { pause: 15 }
      ],
      groups: [
        {
          type: "gap",
          instructions: "Complete the form below. Write **ONE WORD AND/OR A NUMBER** for each answer.",
          title: "Riverside Community Garden: Volunteer Registration",
          lines: [
            "First name: *Daniel* (example)",
            "Surname: [[1]]",
            "Address: Crane Street. Postcode: [[2]]",
            "Phone: 07700 900412",
            "Preferred day: [[3]]",
            "Hours available per week: [[4]]",
            "Experience: has grown [[5]] on a balcony",
            "Would like to help build the new [[6]]",
            "Allergies: [[7]]",
            "Must bring: own [[8]]",
            "First session: [[9]]",
            "Heard about the garden from: council [[10]]"
          ],
          questions: [
            { n: 1, answer: ["Hartley"], explanation: "Daniel spells it: *\"H, A, R, T, L, E, Y\"*." },
            { n: 2, answer: ["BR7 4QN", "BR74QN"], explanation: "*\"It's B, R, 7. Then 4, Q, N.\"*" },
            { n: 3, answer: ["Saturday", "Saturdays"], explanation: "He first says Wednesday, then changes his mind: *\"So I'd better go for Saturday.\"*" },
            { n: 4, answer: ["3", "three"], explanation: "*\"I'd love to say five, but realistically ... I think three hours is about right.\"*" },
            { n: 5, answer: ["tomatoes", "tomato"], explanation: "*\"I've grown tomatoes on my balcony.\"* The strawberries *\"didn't survive\"*." },
            { n: 6, answer: ["greenhouse", "green house"], explanation: "*\"So I'd really like to help with the greenhouse.\"*" },
            { n: 7, answer: ["nuts", "nut"], explanation: "*\"Pollen doesn't bother me at all ... But I'm allergic to nuts.\"*" },
            { n: 8, answer: ["gloves"], explanation: "Tools are provided, but *\"we do ask everyone to bring their own gloves\"*. Boots are *\"not essential\"*." },
            { n: 9, answer: ["14 March", "14th March", "March 14", "March 14th", "14/3", "14.3"], explanation: "The 7th is full: *\"The one after that is on the fourteenth of March.\"*" },
            { n: 10, answer: ["newsletter", "newsletters", "news letter"], explanation: "*\"I first read about you in the newsletter that the council sends round every month.\"*" }
          ]
        }
      ]
    },

    /* ======================= PART 2 ======================= */
    {
      label: "Part 2",
      title: "Kestrel Point Nature Reserve",
      script: [
        { speaker: "Narrator", text: "Part 2. You will hear a ranger talking to a group of visitors at a nature reserve. First, you have some time to look at questions 11 to 15." },
        { pause: 20 },
        { speaker: "Narrator", text: "Now listen carefully and answer questions 11 to 15." },
        { speaker: "Ranger", text: "Good morning everyone, and welcome to Kestrel Point Nature Reserve. My name's Helen, and I'm one of the rangers here. Before you set off, I'd like to tell you a little about the reserve and show you where everything is." },
        { speaker: "Ranger", text: "Many visitors assume this land was always farmland, and it's true that there were farms all around here. But the reserve itself was actually a gravel quarry until 1987. When the digging stopped, the pits filled with water and became the lakes you see today. The army did use part of the coast nearby during the war, but not this site." },
        { speaker: "Ranger", text: "We've made quite a few improvements this year. Our night walks have been running for several years now, and they're as popular as ever. I know a lot of parents have been asking about a special children's trail. That's planned for next year. The big change this year is the new path. It's wide and firm enough for wheelchairs and pushchairs, and it now goes all the way round the main lake." },
        { speaker: "Ranger", text: "Now, a few requests. Dogs are welcome on all our paths, as long as they're on a lead. You're also welcome to feed the ducks on the main lake, with the seed we sell in the café, but not bread, please. The one thing we really do ask is that between March and July, nobody goes into the reed beds. That's where many of our birds are nesting, and they're very easily disturbed." },
        { speaker: "Ranger", text: "The café is run by volunteers, and every penny of profit goes back into the reserve. In the past, that money paid for research equipment, like our wildlife cameras. But at the moment it's all going towards buying the meadow next to the reserve, so that we can extend it to the north." },
        { speaker: "Ranger", text: "And of course, many of you will be hoping to see our otters. People often think the best time is early in the morning, and you might be lucky then. But our cameras show that they're most active just after sunset, so if you can stay until the evening, that's your best chance. Around midday, they're usually asleep." },
        { speaker: "Narrator", text: "Before you hear the rest of the talk, you have some time to look at questions 16 to 20." },
        { pause: 15 },
        { speaker: "Narrator", text: "Now listen and answer questions 16 to 20." },
        { speaker: "Ranger", text: "Right, let me show you where things are on the map. We're standing in the car park, at the bottom of the map, and the visitor centre is the building straight in front of us. The café used to be inside the visitor centre, but it now has its own building, just to the right of the visitor centre as you look at it from here. So that's on the eastern side." },
        { speaker: "Ranger", text: "From the visitor centre, the main path goes north to the main lake. When you reach the lake, if you turn left and follow the shore round to the western side, you'll come to the picnic area. There are plenty of tables, right by the water." },
        { speaker: "Ranger", text: "If you turn right instead, where the main path meets the lake, you'll soon see a small pond, just to the south-east of the main lake. That's where you'll find the new pond-dipping platform. You can borrow nets from the café." },
        { speaker: "Ranger", text: "The bird hide is on the far side of the main lake, on the northern shore, looking right out over the reed beds. Please don't confuse it with the old wooden shelter in the woods in the north-west corner. That's closed now, and we'll be taking it down next month." },
        { speaker: "Ranger", text: "Finally, the otter screen. The river runs along the eastern edge of the reserve, and the screen is on the riverbank, roughly level with the middle of the lake. Please walk quietly as you get close. Enjoy your visit!" },
        { speaker: "Narrator", text: "That is the end of Part 2. You now have some time to check your answers to Part 2." },
        { pause: 15 }
      ],
      groups: [
        {
          type: "mcq",
          instructions: "Choose the correct letter, **A, B or C**.",
          questions: [
            { n: 11, text: "Before it became a nature reserve, the land was", options: ["a gravel quarry.", "a farm.", "used by the army."], answer: "A", explanation: "*\"the reserve itself was actually a gravel quarry until 1987.\"* The farms were *\"all around\"* it and the army used the coast, *\"not this site\"*." },
            { n: 12, text: "What is new at the reserve this year?", options: ["guided night walks", "a path suitable for wheelchairs", "a children's trail"], answer: "B", explanation: "*\"The big change this year is the new path. It's wide and firm enough for wheelchairs.\"* Night walks have run *\"for several years\"*; the children's trail is *\"planned for next year\"*." },
            { n: 13, text: "Visitors are asked to", options: ["leave their dogs at home.", "keep out of the reed beds in spring and summer.", "avoid feeding the ducks."], answer: "B", explanation: "*\"between March and July, nobody goes into the reed beds.\"* Dogs are welcome on leads and duck feeding is allowed with the café's seed." },
            { n: 14, text: "Money from the café is currently used for", options: ["buying more land.", "paying the staff.", "research equipment."], answer: "A", explanation: "*\"at the moment it's all going towards buying the meadow next to the reserve.\"* Research equipment was *\"in the past\"*." },
            { n: 15, text: "The best time to see otters is", options: ["early morning.", "midday.", "evening."], answer: "C", explanation: "*\"they're most active just after sunset, so if you can stay until the evening, that's your best chance.\"*" }
          ]
        },
        {
          type: "grid",
          instructions: "Label the map below. Choose the correct letter, **A–H**, for each answer.",
          columns: ["A", "B", "C", "D", "E", "F", "G", "H"],
          svg: '<svg viewBox="0 0 560 410" role="img" aria-label="Map of Kestrel Point Nature Reserve with places labelled A to H" font-family="Arial, sans-serif"><rect width="560" height="410" fill="#f4f8ef"/><text x="280" y="22" text-anchor="middle" font-size="15" font-weight="700" fill="#222">Kestrel Point Nature Reserve</text><rect x="498" y="30" width="34" height="380" fill="#bcd9f2"/><text x="515" y="395" text-anchor="middle" font-size="11" fill="#245" transform="rotate(-90 515 395)">River</text><g fill="#6c9a5b"><circle cx="40" cy="60" r="11"/><circle cx="62" cy="48" r="10"/><circle cx="58" cy="78" r="11"/><circle cx="85" cy="62" r="10"/><circle cx="35" cy="95" r="10"/><circle cx="110" cy="45" r="9"/><circle cx="125" cy="80" r="10"/><circle cx="80" cy="105" r="9"/></g><text x="80" y="130" text-anchor="middle" font-size="12" fill="#333">Woods</text><rect x="370" y="38" width="110" height="60" fill="#e6efc9" stroke="#b7c48d"/><text x="425" y="88" text-anchor="middle" font-size="11" fill="#555">Meadow</text><g stroke="#7a9a4a" stroke-width="2"><path d="M200 112v-16M210 112v-20M220 112v-14M230 112v-18M240 112v-16M250 112v-20M260 112v-14M270 112v-18M280 112v-16M290 112v-20M300 112v-14M310 112v-18M320 112v-16M330 112v-20M340 112v-14"/></g><text x="270" y="86" text-anchor="middle" font-size="11" fill="#555">Reed beds</text><ellipse cx="270" cy="185" rx="150" ry="70" fill="#bcd9f2" stroke="#7aa8cf"/><text x="270" y="190" text-anchor="middle" font-size="14" fill="#245">Main lake</text><circle cx="400" cy="285" r="20" fill="#bcd9f2" stroke="#7aa8cf"/><text x="400" y="289" text-anchor="middle" font-size="10" fill="#245">Pond</text><path d="M270 318 V255" stroke="#a88a5a" stroke-width="5" stroke-dasharray="2 0"/><rect x="232" y="318" width="76" height="30" fill="#fff" stroke="#333"/><text x="270" y="337" text-anchor="middle" font-size="11" fill="#222">Visitor centre</text><rect x="205" y="362" width="130" height="38" fill="#e3e3e3" stroke="#888"/><text x="270" y="386" text-anchor="middle" font-size="12" fill="#222">Car park</text><g font-size="14" font-weight="700" text-anchor="middle"><g><circle cx="175" cy="333" r="12" fill="#fff" stroke="#222"/><text x="175" y="338">A</text></g><g><circle cx="365" cy="333" r="12" fill="#fff" stroke="#222"/><text x="365" y="338">B</text></g><g><circle cx="98" cy="190" r="12" fill="#fff" stroke="#222"/><text x="98" y="195">C</text></g><g><circle cx="438" cy="285" r="12" fill="#fff" stroke="#222"/><text x="438" y="290">D</text></g><g><circle cx="105" cy="78" r="12" fill="#fff" stroke="#222"/><text x="105" y="83">E</text></g><g><circle cx="270" cy="124" r="12" fill="#fff" stroke="#222"/><text x="270" y="129">F</text></g><g><circle cx="480" cy="185" r="12" fill="#fff" stroke="#222"/><text x="480" y="190">G</text></g><g><circle cx="455" cy="62" r="12" fill="#fff" stroke="#222"/><text x="455" y="67">H</text></g></g><g transform="translate(40 350)"><path d="M0 -26 L7 -8 L0 -12 L-7 -8 Z" fill="#222"/><text x="0" y="-30" text-anchor="middle" font-size="12" font-weight="700">N</text><path d="M-14 0 H14 M0 -12 V14" stroke="#222"/></g></svg>',
          questions: [
            { n: 16, text: "Bird hide", answer: "F", explanation: "*\"on the far side of the main lake, on the northern shore, looking right out over the reed beds.\"* E is the old shelter in the woods." },
            { n: 17, text: "Picnic area", answer: "C", explanation: "*\"turn left and follow the shore round to the western side, you'll come to the picnic area.\"*" },
            { n: 18, text: "Pond-dipping platform", answer: "D", explanation: "*\"a small pond, just to the south-east of the main lake. That's where you'll find the new pond-dipping platform.\"*" },
            { n: 19, text: "Otter screen", answer: "G", explanation: "*\"on the riverbank, roughly level with the middle of the lake.\"*" },
            { n: 20, text: "Café", answer: "B", explanation: "*\"just to the right of the visitor centre as you look at it from here. So that's on the eastern side.\"*" }
          ]
        }
      ]
    },

    /* ======================= PART 3 ======================= */
    {
      label: "Part 3",
      title: "A project on food waste",
      script: [
        { speaker: "Narrator", text: "Part 3. You will hear two students, Maya and Tom, talking to their tutor, Dr Lewis, about a research project on food waste in their university canteen. First, you have some time to look at questions 21 to 25." },
        { pause: 20 },
        { speaker: "Narrator", text: "Now listen carefully and answer questions 21 to 25." },
        { speaker: "Dr Lewis", text: "Come in, both of you. So, I've read your draft report on food waste in the canteen. Before we get into it, remind me why you chose this topic." },
        { speaker: "Tom", text: "Well, we did go to that guest lecture on sustainability last term, but that was mostly about energy, not food." },
        { speaker: "Maya", text: "It was really because I had a part-time job in the canteen last year, and I couldn't believe how much got thrown away at the end of every day." },
        { speaker: "Tom", text: "And we assumed the data would be easy to get. That turned out to be wrong!" },
        { speaker: "Dr Lewis", text: "Yes, how did the data collection go?" },
        { speaker: "Maya", text: "The kitchen staff were brilliant, actually. Very cooperative." },
        { speaker: "Tom", text: "And we managed to collect data every weekday for four weeks, with no gaps. The real headache was the scales we borrowed from the science department. They kept giving different readings for the same bin, so in the end we had to weigh everything twice." },
        { speaker: "Dr Lewis", text: "That's worth mentioning in the report. And what did you find?" },
        { speaker: "Maya", text: "We expected plate waste, the food students leave, to be the biggest part. But over sixty percent was actually from the kitchen. Food that was prepared but never served." },
        { speaker: "Tom", text: "That was the big surprise. Lunch produced the most waste overall, but that's not surprising, because it's the busiest meal. And meat and vegetarian dishes were wasted in about equal amounts." },
        { speaker: "Dr Lewis", text: "Interesting. Now, about the report itself. Your charts are very clear, and there are plenty of them. Comparing your results with other universities would be interesting, but it's really beyond the scope of this project. What's missing is a fuller account of how you collected the data. Someone reading it should be able to repeat your study exactly." },
        { speaker: "Maya", text: "Okay, we can expand that section." },
        { speaker: "Dr Lewis", text: "And what about the student survey?" },
        { speaker: "Tom", text: "I think the questions themselves were fine. Nobody said they were confusing." },
        { speaker: "Maya", text: "Agreed. But forty-two replies, out of about three thousand students, isn't really enough to draw any conclusions." },
        { speaker: "Tom", text: "Yes, that's true. We talked about repeating it next term, but we simply won't have time." },
        { speaker: "Dr Lewis", text: "I agree, the sample size is the main weakness. Just say so clearly in the report." },
        { speaker: "Narrator", text: "Before you hear the rest of the discussion, you have some time to look at questions 26 to 30." },
        { pause: 15 },
        { speaker: "Narrator", text: "Now listen and answer questions 26 to 30." },
        { speaker: "Dr Lewis", text: "Let's look at your recommendations. You suggest five ways to reduce waste. Talk me through them." },
        { speaker: "Maya", text: "The first one is smaller plates. A university in the Netherlands tried that, and they cut plate waste by about a fifth. So we know it can work." },
        { speaker: "Tom", text: "The second is charging by weight, so you pay for exactly what you take. In theory it's fair, but honestly, I think students would hate it. People would feel they were being watched at the till." },
        { speaker: "Dr Lewis", text: "Hmm, I suspect you're right. What about trays?" },
        { speaker: "Maya", text: "Removing trays is the easiest one. It costs basically nothing. You just stop putting them out, and people take less because they can only carry so much." },
        { speaker: "Tom", text: "Then there's giving leftover food to a local food charity. That's a great idea, but it only works if the kitchen team packs and labels everything at the end of the day. So really it relies on them being willing to do the extra work." },
        { speaker: "Maya", text: "We also thought about offering takeaway boxes for leftovers, but we dropped it. It could just create more packaging waste instead." },
        { speaker: "Dr Lewis", text: "Sensible. And the last one, the labels?" },
        { speaker: "Tom", text: "Putting signs on the menu showing how much food is wasted each week. I like the idea, but to be honest, people hardly read the menu as it is. I doubt it would change much." },
        { speaker: "Maya", text: "Yes, I think the effect would be pretty small." },
        { speaker: "Dr Lewis", text: "Well, that's a good, honest evaluation. Let's meet again next week." },
        { speaker: "Narrator", text: "That is the end of Part 3. You now have some time to check your answers to Part 3." },
        { pause: 15 }
      ],
      groups: [
        {
          type: "mcq",
          instructions: "Choose the correct letter, **A, B or C**.",
          questions: [
            { n: 21, text: "Why did the students choose food waste as their topic?", options: ["Maya had seen the problem while working in the canteen.", "They had attended a lecture about it.", "They thought the information would be easy to collect."], answer: "A", explanation: "Maya: *\"It was really because I had a part-time job in the canteen last year.\"* The lecture was *\"mostly about energy\"*, and the easy data idea *\"turned out to be wrong\"*." },
            { n: 22, text: "What was the main problem with collecting the data?", options: ["The kitchen staff did not want to help.", "The weighing equipment was unreliable.", "They were unable to collect data on some days."], answer: "B", explanation: "Tom: *\"The real headache was the scales ... They kept giving different readings for the same bin.\"*" },
            { n: 23, text: "What did the students find surprising?", options: ["Most waste came from the kitchen rather than from plates.", "Vegetarian dishes were wasted more than meat dishes.", "Breakfast produced the most waste."], answer: "A", explanation: "Maya: *\"over sixty percent was actually from the kitchen\"*, and Tom: *\"That was the big surprise.\"*" },
            { n: 24, text: "Dr Lewis says the report could be improved by", options: ["adding more charts.", "comparing the results with other universities.", "describing the method in more detail."], answer: "C", explanation: "Dr Lewis: *\"What's missing is a fuller account of how you collected the data.\"*" },
            { n: 25, text: "What do they agree about the student survey?", options: ["Too few students replied.", "Some of the questions were unclear.", "It should be repeated next term."], answer: "A", explanation: "Maya: *\"forty-two replies ... isn't really enough\"*. Dr Lewis: *\"the sample size is the main weakness.\"*" }
          ]
        },
        {
          type: "select",
          instructions: "What do the students say about each recommendation? Choose **FIVE** answers from the box and write the correct letter, **A–F**, next to Questions 26–30.",
          listTitle: "Comments",
          options: [
            { key: "A", text: "It would cost very little." },
            { key: "B", text: "Students would probably dislike it." },
            { key: "C", text: "It has worked at another university." },
            { key: "D", text: "It would depend on the kitchen staff." },
            { key: "E", text: "It could create a different kind of waste." },
            { key: "F", text: "It would probably make little difference." }
          ],
          questions: [
            { n: 26, text: "smaller plates", answer: "C", explanation: "*\"A university in the Netherlands tried that, and they cut plate waste by about a fifth.\"*" },
            { n: 27, text: "charging by weight", answer: "B", explanation: "*\"I think students would hate it.\"*" },
            { n: 28, text: "removing trays", answer: "A", explanation: "*\"It costs basically nothing.\"*" },
            { n: 29, text: "giving leftovers to a charity", answer: "D", explanation: "*\"it only works if the kitchen team packs and labels everything ... it relies on them.\"*" },
            { n: 30, text: "menu signs about weekly waste", answer: "F", explanation: "*\"I doubt it would change much\"* and *\"the effect would be pretty small.\"* E was about takeaway boxes, which they dropped." }
          ]
        }
      ]
    },

    /* ======================= PART 4 ======================= */
    {
      label: "Part 4",
      title: "Lecture: light in the deep sea",
      script: [
        { speaker: "Narrator", text: "Part 4. You will hear part of a lecture about bioluminescence in the ocean. First, you have some time to look at questions 31 to 40." },
        { pause: 30 },
        { speaker: "Narrator", text: "Now listen carefully and answer questions 31 to 40." },
        { speaker: "Lecturer", text: "Good afternoon. Today we're looking at one of the most remarkable features of ocean life: bioluminescence, which simply means light produced by living things. On land, the best-known example is the firefly. But in the ocean, bioluminescence is everywhere. Some estimates suggest that around three quarters of the animals living in the deep sea can produce light." },
        { speaker: "Lecturer", text: "So how does it work? It's important to understand that this light is not produced by heat, as it is in a light bulb. It comes from a chemical reaction inside the organism. The reaction needs two main ingredients. The first is a light-producing molecule called luciferin. The second is an enzyme, which speeds the reaction up. When the two combine with oxygen, energy is released as light, with almost no heat at all." },
        { speaker: "Lecturer", text: "You may wonder why most ocean light is blue. Red and yellow light are absorbed very quickly, but blue light travels furthest through water. So, over millions of years, most marine species have evolved to produce, and to see, blue light. There are a few exceptions, which we'll come back to." },
        { speaker: "Lecturer", text: "Let's turn to what animals actually use this light for. The first use is defence. Some squid, when they are attacked, don't release the usual black ink. Instead, they release a cloud of glowing ink, which confuses the predator while the squid escapes into the darkness." },
        { speaker: "Lecturer", text: "A second use, which is rather clever, is camouflage. In the upper ocean, there's still some faint light coming down from the surface. A predator looking up from below can see the dark shape of an animal against that light. So many fish and shrimp have light organs on their underside, which produce light that matches the light from above. This hides their silhouette, making them almost invisible from below. Scientists call this counter-illumination." },
        { speaker: "Lecturer", text: "Thirdly, light is used for hunting. The most famous example is the anglerfish. It has a long spine on its head with a glowing tip, which works as a lure. Small fish swim towards the light, thinking it's food, and they're quickly swallowed." },
        { speaker: "Lecturer", text: "And fourthly, communication. In the deep sea, it's extremely difficult to find other members of your own species. Some fish produce flashing patterns, a bit like a code, and researchers believe these signals help them to find a mate. Interestingly, one group of fish produces red light, which most other animals can't see. That gives them a private signal." },
        { speaker: "Lecturer", text: "Now, not every glowing animal makes its own light. Many species, including the anglerfish I mentioned earlier, get their light from bacteria that live inside special organs in their bodies. The fish provides the bacteria with food and shelter, and in return, the bacteria provide light. It's a good example of a partnership that benefits both sides." },
        { speaker: "Lecturer", text: "Finally, a word about research. Bioluminescence has turned out to be extremely useful in medicine. A protein first found in a jellyfish glows when light is shone on it, and scientists now attach it to other molecules in order to track cells inside the body. For instance, it's used to follow how cancer cells spread. Studying bioluminescence in the wild, however, is difficult. Bright lights from submarines frighten animals away, so researchers now use extremely sensitive cameras that can record very faint light without disturbing the animals at all." },
        { speaker: "Lecturer", text: "Next week we'll look at how ocean temperatures are affecting these species. Thank you." },
        { speaker: "Narrator", text: "That is the end of Part 4. You now have some time to check your answers." },
        { pause: 20 }
      ],
      groups: [
        {
          type: "gap",
          instructions: "Complete the notes below. Write **ONE WORD ONLY** for each answer.",
          title: "Bioluminescence in the ocean",
          lines: [
            "# How it works",
            "- The light comes from a [[31]] reaction, not from heat",
            "- Needs luciferin and an [[32]]",
            "- Most ocean light is blue because blue light travels furthest through [[33]]",
            "# What the light is used for",
            "- Defence: some squid release glowing [[34]] to confuse attackers",
            "- Camouflage: light on the underside hides the animal's [[35]] from predators below",
            "- Hunting: the anglerfish uses a glowing [[36]] to attract small fish",
            "- Communication: flashing patterns may help fish find a [[37]]",
            "- Many species get their light from [[38]] living inside them",
            "# Research",
            "- A jellyfish protein is used in medicine to track [[39]] in the body",
            "- Researchers use very sensitive [[40]] so they do not disturb the animals"
          ],
          questions: [
            { n: 31, answer: ["chemical"], explanation: "*\"It comes from a chemical reaction inside the organism.\"*" },
            { n: 32, answer: ["enzyme"], explanation: "*\"The second is an enzyme, which speeds the reaction up.\"*" },
            { n: 33, answer: ["water", "seawater", "sea water"], explanation: "*\"blue light travels furthest through water.\"*" },
            { n: 34, answer: ["ink"], explanation: "*\"they release a cloud of glowing ink, which confuses the predator.\"*" },
            { n: 35, answer: ["silhouette", "shape"], explanation: "*\"This hides their silhouette, making them almost invisible from below.\"*" },
            { n: 36, answer: ["lure"], explanation: "*\"a long spine on its head with a glowing tip, which works as a lure.\"*" },
            { n: 37, answer: ["mate", "partner"], explanation: "*\"researchers believe these signals help them to find a mate.\"*" },
            { n: 38, answer: ["bacteria", "bacterium"], explanation: "*\"get their light from bacteria that live inside special organs in their bodies.\"*" },
            { n: 39, answer: ["cells", "cell"], explanation: "*\"scientists now attach it to other molecules in order to track cells inside the body.\"*" },
            { n: 40, answer: ["cameras", "camera"], explanation: "*\"researchers now use extremely sensitive cameras that can record very faint light.\"*" }
          ]
        }
      ]
    }
  ]
});
