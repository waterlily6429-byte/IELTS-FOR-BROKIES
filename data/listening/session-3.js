/* Listening · Session 3 — original practice material for IELTS for Brokies. */
IELTS.registerSession({
  section: "listening",
  session: 3,
  title: "A sports centre, a new library, plant-based packaging and animal sleep",
  speakers: {
    Narrator: { gender: "male" },
    Receptionist: { gender: "female" },
    Daniel: { gender: "male" },
    Guide: { gender: "female" },
    Amira: { gender: "female" },
    Tom: { gender: "male" },
    "Dr Nolan": { gender: "male", rate: 0.92 },
    Lecturer: { gender: "male", rate: 0.92 }
  },
  parts: [
    /* ======================= PART 1 ======================= */
    {
      label: "Part 1",
      title: "Joining a sports centre",
      script: [
        { speaker: "Narrator", text: "Part 1. You will hear a man asking about membership at a sports centre. First, you have some time to look at questions 1 to 5." },
        { pause: 20 },
        { speaker: "Narrator", text: "Now listen carefully and answer questions 1 to 5." },
        { speaker: "Receptionist", text: "Hello, Riverside Sports Centre, how can I help?" },
        { speaker: "Daniel", text: "Hi, I've just moved to the area and I'm thinking of joining. Could you tell me about the different memberships?" },
        { speaker: "Receptionist", text: "Of course. We have three types. The cheapest is the Off-Peak membership. That lets you use the gym and the pool, but only on weekdays before four in the afternoon." },
        { speaker: "Daniel", text: "Before four. That wouldn't really work for me, I'm at work until five. How much is it, just out of interest?" },
        { speaker: "Receptionist", text: "It's twenty-two pounds a month. Then there's the Standard membership, which gives you the gym and pool at any time, seven days a week. That's thirty-four pounds a month." },
        { speaker: "Daniel", text: "Does that include classes?" },
        { speaker: "Receptionist", text: "No, with Standard you pay for each class separately. It's four pounds fifty per class. If you want classes included, you need the Premium membership. That's forty-five pounds a month, and it includes all classes and also free use of the sauna." },
        { speaker: "Daniel", text: "I see. And is there a joining fee?" },
        { speaker: "Receptionist", text: "Normally there's a joining fee of twenty pounds, but we're not charging it at all this month, for any membership." },
        { speaker: "Daniel", text: "Oh, that's good timing." },
        { speaker: "Narrator", text: "Before you hear the rest of the conversation, you have some time to look at questions 6 to 10." },
        { pause: 15 },
        { speaker: "Narrator", text: "Now listen and answer questions 6 to 10." },
        { speaker: "Daniel", text: "I think I'll go for Standard. Can I sign up over the phone?" },
        { speaker: "Receptionist", text: "Yes, I can start the form now. What's your full name?" },
        { speaker: "Daniel", text: "Daniel Okafor. O, K, A, F, O, R." },
        { speaker: "Receptionist", text: "And your address?" },
        { speaker: "Daniel", text: "Flat 3, 58 Mill Lane." },
        { speaker: "Receptionist", text: "Fifty-eight Mill Lane. And a contact number?" },
        { speaker: "Daniel", text: "It's oh seven seven one two, four four nine, three oh six." },
        { speaker: "Receptionist", text: "Thanks. We ask all new members to have a short induction before using the gym, so a trainer can show you the equipment. They take about forty minutes. Would Saturday morning suit you?" },
        { speaker: "Daniel", text: "Saturday's difficult. Could I do Thursday evening instead?" },
        { speaker: "Receptionist", text: "Yes, Thursday at six thirty is free. And one last question: how did you hear about us? It's for our marketing team." },
        { speaker: "Daniel", text: "My neighbour actually. She comes here for swimming." },
        { speaker: "Receptionist", text: "Lovely. When you come in, please bring a photo for your membership card. Not your passport, we don't need ID. Just a small photo." },
        { speaker: "Narrator", text: "That is the end of Part 1. You now have some time to check your answers to Part 1." },
        { pause: 15 }
      ],
      groups: [
        {
          type: "gap",
          instructions: "Complete the notes below. Write **ONE WORD AND/OR A NUMBER** for each answer.",
          title: "Riverside Sports Centre",
          lines: [
            "# Memberships",
            "- Off-Peak: £[[1]] a month; weekdays before 4 pm only",
            "- Standard: £34 a month; classes cost £[[2]] each",
            "- Premium: £45 a month; includes all classes and the [[3]]",
            "- Joining fee: usually £[[4]]",
            "- This month the joining fee is [[5]]",
            "# Application",
            "- Name: Daniel [[6]]",
            "- Address: Flat 3, [[7]] Mill Lane",
            "- Induction: [[8]] at 6.30 pm",
            "- Heard about centre from a [[9]]",
            "- Bring a [[10]] for the membership card"
          ],
          questions: [
            { n: 1, answer: ["22", "twenty-two"], explanation: "*\"It's twenty-two pounds a month.\"*" },
            { n: 2, answer: ["4.50", "4.5", "450"], explanation: "*\"It's four pounds fifty per class.\"*" },
            { n: 3, answer: ["sauna"], explanation: "*\"it includes all classes and also free use of the sauna.\"*" },
            { n: 4, answer: ["20", "twenty"], explanation: "*\"Normally there's a joining fee of twenty pounds.\"*" },
            { n: 5, answer: ["free", "waived", "0", "nothing"], explanation: "*\"we're not charging it at all this month.\"*" },
            { n: 6, answer: ["Okafor"], explanation: "He spells it: *\"O, K, A, F, O, R.\"*" },
            { n: 7, answer: ["58", "fifty-eight"], explanation: "*\"Flat 3, 58 Mill Lane.\"*" },
            { n: 8, answer: ["Thursday", "Thurs"], explanation: "Saturday is difficult, so: *\"Thursday at six thirty is free.\"*" },
            { n: 9, answer: ["neighbour", "neighbor"], explanation: "*\"My neighbour actually.\"*" },
            { n: 10, answer: ["photo", "photograph", "picture"], explanation: "*\"please bring a photo for your membership card. Not your passport.\"*" }
          ]
        }
      ]
    },

    /* ======================= PART 2 ======================= */
    {
      label: "Part 2",
      title: "A tour of the new library",
      script: [
        { speaker: "Narrator", text: "Part 2. You will hear a guide talking to a group of visitors at a newly opened library. First, you have some time to look at questions 11 to 15." },
        { pause: 20 },
        { speaker: "Narrator", text: "Now listen carefully and answer questions 11 to 15." },
        { speaker: "Guide", text: "Welcome, everyone, to the new Westgate Library. My name's Helen, and I'm going to tell you a little about the building before we go inside." },
        { speaker: "Guide", text: "The old library was in the town hall for over a century, and it was a lovely building, but it simply wasn't suitable any more. There was no lift, so anyone in a wheelchair or with a pushchair couldn't reach the upper floor. That was the main reason for the move. The town did also want more space for books, but that came second." },
        { speaker: "Guide", text: "This building used to be a bus depot, and we've kept some of its features. You'll notice the original steel roof beams, and the big doors that the buses drove through are now the windows in the café." },
        { speaker: "Guide", text: "The project took longer than planned. We hoped to open last spring, but during the building work they discovered that the ground under the car park was contaminated with oil from the old buses, and that had to be cleaned up before anything else could happen. That added about six months." },
        { speaker: "Guide", text: "Now, the library is open seven days a week. On weekdays we open at nine and close at eight, and on weekends we close earlier, at five. And something new: library members can now borrow not just books but also tools, like drills and ladders. That's been far more popular than we expected." },
        { speaker: "Guide", text: "Finally, if you'd like to join, it's free for everyone who lives in the area. You just need something that shows your address, such as a bank statement or a bill. You don't need photo ID." },
        { speaker: "Narrator", text: "Before you hear the rest of the talk, you have some time to look at questions 16 to 20." },
        { pause: 15 },
        { speaker: "Narrator", text: "Now listen and answer questions 16 to 20." },
        { speaker: "Guide", text: "Right, if you look at the plan of the ground floor, you can see we're standing at the main entrance, at the bottom, with the reception desk just in front of us." },
        { speaker: "Guide", text: "As you come in, the whole corner on your left is the children's library. It's got its own little garden outside, so it's in a good spot." },
        { speaker: "Guide", text: "The corner on your right, just inside the entrance, is the café, which is where those old bus doors are." },
        { speaker: "Guide", text: "If you walk straight past reception, you'll come to the room in the very middle of the building. That's our computer area, with thirty computers that anyone can use." },
        { speaker: "Guide", text: "Along the left-hand wall, between the children's library and the back corner, you'll find the local history room. That has old maps and photographs of the town." },
        { speaker: "Guide", text: "The room in the middle of the back wall is for staff only, I'm afraid. And the room in the middle of the right-hand wall is a meeting room you can book." },
        { speaker: "Guide", text: "If you want somewhere really quiet, the study rooms are in the far right-hand corner, at the back, as far from the café as possible. The back left corner is fiction." },
        { speaker: "Narrator", text: "That is the end of Part 2. You now have some time to check your answers to Part 2." },
        { pause: 15 }
      ],
      groups: [
        {
          type: "mcq",
          instructions: "Choose the correct letter, **A, B or C**.",
          questions: [
            { n: 11, text: "What was the main reason for moving the library?", options: ["The old building needed repairs.", "The old building was difficult for some people to access.", "The town wanted more space for books."], answer: "B", explanation: "*\"There was no lift ... That was the main reason for the move.\"* More space *\"came second\"*." },
            { n: 12, text: "Which feature of the bus depot has been reused?", options: ["the doors", "the floor", "the clock"], answer: "A", explanation: "*\"the big doors that the buses drove through are now the windows in the café.\"*" },
            { n: 13, text: "Why did the library open later than planned?", options: ["There were problems with the roof.", "The builders ran out of money.", "Polluted ground had to be cleaned."], answer: "C", explanation: "*\"the ground under the car park was contaminated with oil ... had to be cleaned up.\"*" },
            { n: 14, text: "What has been surprisingly popular?", options: ["borrowing tools", "the longer opening hours", "weekend events"], answer: "A", explanation: "Members can borrow *\"tools, like drills and ladders. That's been far more popular than we expected.\"*" },
            { n: 15, text: "To join the library, local people need", options: ["photo identification.", "proof of address.", "a small fee."], answer: "B", explanation: "*\"You just need something that shows your address ... You don't need photo ID.\"* It is free." }
          ]
        },
        {
          type: "grid",
          instructions: "Label the plan below. Choose the correct letter, **A–H**, for each answer.",
          columns: ["A", "B", "C", "D", "E", "F", "G", "H"],
          svg: '<svg viewBox="0 0 420 330" role="img" aria-label="Ground floor plan of Westgate Library with rooms labelled A to H" font-family="Arial, sans-serif"><rect width="420" height="330" fill="#ffffff"/><text x="210" y="20" text-anchor="middle" font-size="15" font-weight="700" fill="#222">Westgate Library: ground floor</text><rect x="20" y="32" width="380" height="260" fill="#fafafa" stroke="#333" stroke-width="3"/><g fill="#eef2f7" stroke="#555" stroke-width="1.5"><rect x="30" y="42" width="100" height="62"/><rect x="160" y="42" width="100" height="62"/><rect x="290" y="42" width="100" height="62"/><rect x="30" y="128" width="80" height="62"/><rect x="310" y="128" width="80" height="62"/><rect x="30" y="214" width="110" height="68"/><rect x="280" y="214" width="110" height="68"/><rect x="155" y="128" width="110" height="56"/></g><g font-size="20" font-weight="700" fill="#111" text-anchor="middle"><text x="80" y="80">A</text><text x="210" y="80">B</text><text x="340" y="80">C</text><text x="70" y="166">D</text><text x="350" y="166">E</text><text x="85" y="255">F</text><text x="335" y="255">G</text><text x="210" y="163">H</text></g><rect x="175" y="232" width="70" height="26" fill="#fff4d6" stroke="#8a6d1d"/><text x="210" y="250" text-anchor="middle" font-size="11" fill="#222">Reception</text><rect x="180" y="288" width="60" height="8" fill="#ffffff"/><text x="210" y="316" text-anchor="middle" font-size="12" font-weight="700" fill="#222">Main entrance (you are here)</text><path d="M210 300 L203 290 L217 290 Z" fill="#c0392b"/></svg>',
          questions: [
            { n: 16, text: "Children's library", answer: "F", explanation: "*\"As you come in, the whole corner on your left is the children's library.\"*" },
            { n: 17, text: "Café", answer: "G", explanation: "*\"The corner on your right, just inside the entrance, is the café.\"*" },
            { n: 18, text: "Computer area", answer: "H", explanation: "*\"walk straight past reception, you'll come to the room in the very middle of the building.\"*" },
            { n: 19, text: "Local history room", answer: "D", explanation: "*\"Along the left-hand wall, between the children's library and the back corner.\"*" },
            { n: 20, text: "Study rooms", answer: "C", explanation: "*\"the study rooms are in the far right-hand corner, at the back.\"* A is fiction, B is staff only, E is a meeting room." }
          ]
        }
      ]
    },

    /* ======================= PART 3 ======================= */
    {
      label: "Part 3",
      title: "Plant-based packaging",
      script: [
        { speaker: "Narrator", text: "Part 3. You will hear two design students, Amira and Tom, talking to their tutor, Dr Nolan, about a presentation on packaging materials. First, you have some time to look at questions 21 to 24." },
        { pause: 20 },
        { speaker: "Narrator", text: "Now listen carefully and answer questions 21 to 24." },
        { speaker: "Dr Nolan", text: "So, your presentation is on alternatives to plastic packaging. Where did the idea come from?" },
        { speaker: "Amira", text: "Partly from my part-time job, actually. I work in a sandwich shop, and the amount of plastic we throw away every day is shocking. But what really decided it was a talk we went to by a designer who makes packaging from mushrooms." },
        { speaker: "Tom", text: "Yes, that was the turning point for both of us." },
        { speaker: "Dr Nolan", text: "And what's the main message you want the audience to take away?" },
        { speaker: "Tom", text: "We'd originally planned to argue that these materials should replace plastic completely. But the more we read, the more we realised that's not realistic yet. So now our argument is that each material suits particular uses, and the key is matching the material to the product." },
        { speaker: "Dr Nolan", text: "That's a much more convincing position. How are you going to start the presentation?" },
        { speaker: "Amira", text: "We thought about opening with some statistics, but everyone does that. Instead, we're going to hand round real samples of each material, so people can feel them." },
        { speaker: "Dr Nolan", text: "Excellent idea. People remember what they touch. Now, what are you finding most difficult?" },
        { speaker: "Tom", text: "Honestly, finding reliable figures on cost. A lot of the companies making these materials are start-ups, and they don't publish their prices. The research papers are fine, and we've got plenty of pictures." },
        { speaker: "Dr Nolan", text: "You might try contacting a couple of them directly. They're often happy to talk to students." },
        { speaker: "Narrator", text: "Before you hear the rest of the discussion, you have some time to look at questions 25 to 30." },
        { pause: 15 },
        { speaker: "Narrator", text: "Now listen and answer questions 25 to 30." },
        { speaker: "Dr Nolan", text: "So which materials are you covering?" },
        { speaker: "Amira", text: "Three: mushroom packaging, seaweed film, and cornstarch plastic." },
        { speaker: "Dr Nolan", text: "Talk me through them." },
        { speaker: "Amira", text: "Mushroom packaging is grown, not manufactured. They mix farm waste, like the husks from grain, with the roots of a fungus, and it grows into a mould in about a week. It's great for protecting fragile things like glass bottles, because it absorbs shocks really well." },
        { speaker: "Tom", text: "Seaweed film is the one people find strangest, because you can actually eat it. Some companies are using it to wrap things like sauce portions, so there's nothing to throw away at all." },
        { speaker: "Dr Nolan", text: "And the cornstarch?" },
        { speaker: "Tom", text: "Cornstarch plastic looks and feels almost exactly like normal plastic, which is why it's the most widely used of the three already. You see it in a lot of coffee cup lids. But there's a catch. It only breaks down in an industrial composting facility. If you put it in a garden compost bin, it can last for years." },
        { speaker: "Amira", text: "And there's a wider criticism of it, too. It uses crops that could be food, and some people think farmland shouldn't be used to make packaging." },
        { speaker: "Dr Nolan", text: "What about seaweed? Doesn't that have the same problem?" },
        { speaker: "Amira", text: "No, and that's one of its big advantages. Seaweed grows in the sea, very fast, and it doesn't need any fresh water or fertiliser." },
        { speaker: "Tom", text: "The problem with seaweed is that it's easily damaged by water. So it's no good for anything wet unless it has another layer around it." },
        { speaker: "Dr Nolan", text: "And the mushroom material, any drawbacks?" },
        { speaker: "Amira", text: "Mainly that it's slow to produce. A week to grow each batch is fine for a small company, but it's hard to make millions of pieces quickly." },
        { speaker: "Narrator", text: "That is the end of Part 3. You now have some time to check your answers to Part 3." },
        { pause: 15 }
      ],
      groups: [
        {
          type: "mcq",
          instructions: "Choose the correct letter, **A, B or C**.",
          questions: [
            { n: 21, text: "What made the students choose this topic?", options: ["Amira's experience at work", "a talk they attended", "an article Tom read"], answer: "B", explanation: "Amira mentions her job, but *\"what really decided it was a talk we went to by a designer.\"*" },
            { n: 22, text: "What is the main argument of their presentation now?", options: ["Plastic should be replaced completely.", "Plastic is still the best choice.", "Different materials suit different products."], answer: "C", explanation: "Tom: *\"each material suits particular uses, and the key is matching the material to the product.\"*" },
            { n: 23, text: "How will they begin the presentation?", options: ["by giving out samples", "by showing statistics", "by asking a question"], answer: "A", explanation: "*\"we're going to hand round real samples of each material.\"*" },
            { n: 24, text: "What are they having difficulty finding?", options: ["research papers", "information about prices", "suitable images"], answer: "B", explanation: "*\"finding reliable figures on cost ... they don't publish their prices.\"*" }
          ]
        },
        {
          type: "select",
          instructions: "Which material does each statement describe? Choose the correct letter, **A, B or C**, next to Questions 25–30. You may use any letter more than once.",
          listTitle: "Materials",
          options: [
            { key: "A", text: "mushroom packaging" },
            { key: "B", text: "seaweed film" },
            { key: "C", text: "cornstarch plastic" }
          ],
          questions: [
            { n: 25, text: "It can be eaten.", answer: "B", explanation: "*\"Seaweed film ... you can actually eat it.\"*" },
            { n: 26, text: "It is already the most commonly used.", answer: "C", explanation: "Cornstarch plastic *\"is the most widely used of the three already.\"*" },
            { n: 27, text: "It is good at protecting breakable items.", answer: "A", explanation: "Mushroom packaging *\"is great for protecting fragile things like glass bottles.\"*" },
            { n: 28, text: "It needs no fresh water to produce.", answer: "B", explanation: "*\"Seaweed grows in the sea ... it doesn't need any fresh water or fertiliser.\"*" },
            { n: 29, text: "It uses land that could grow food.", answer: "C", explanation: "Cornstarch *\"uses crops that could be food.\"*" },
            { n: 30, text: "It takes a long time to make.", answer: "A", explanation: "Mushroom material *\"is slow to produce. A week to grow each batch.\"*" }
          ]
        }
      ]
    },

    /* ======================= PART 4 ======================= */
    {
      label: "Part 4",
      title: "Lecture: how animals sleep",
      script: [
        { speaker: "Narrator", text: "Part 4. You will hear part of a biology lecture about sleep in animals. First, you have some time to look at questions 31 to 40." },
        { pause: 30 },
        { speaker: "Narrator", text: "Now listen carefully and answer questions 31 to 40." },
        { speaker: "Lecturer", text: "Today I want to talk about sleep, and in particular about how differently it works across the animal kingdom. Sleep is a puzzle for biologists. While an animal is asleep, it isn't eating, it isn't finding a mate, and it's much more likely to be caught by a predator. And yet almost every animal that has been studied sleeps in some form. That tells us sleep must be doing something extremely important." },
        { speaker: "Lecturer", text: "So how do we decide whether an animal is sleeping? We can't ask it, and many animals don't close their eyes. Researchers use a set of behavioural signs. A sleeping animal is still for long periods, it usually takes up a typical position, and, most importantly, it is slower to react to things around it. If you disturb it, it takes longer to respond than when it's awake." },
        { speaker: "Lecturer", text: "Using these signs, scientists have found sleep in some surprising places. Even the fruit fly sleeps. And if you keep a fly awake, it will sleep for longer the following day to catch up, just as we do." },
        { speaker: "Lecturer", text: "Now, the amount of sleep varies enormously. Some bats sleep for around twenty hours a day. Giraffes, on the other hand, sleep for less than five hours, often in short naps of just a few minutes. A key factor seems to be diet. Animals that eat grass and leaves have to spend most of the day eating, because their food contains so little energy, so they simply don't have time for much sleep. Being hunted matters too: a giraffe lying down is very vulnerable." },
        { speaker: "Lecturer", text: "Some of the most remarkable examples come from animals that live in the sea. Dolphins have to come to the surface to breathe, so they can't become fully unconscious. Their solution is to sleep with one half of the brain at a time. One half rests, while the other half stays alert enough to control breathing and watch for danger. And interestingly, the eye on the opposite side to the sleeping half usually stays open." },
        { speaker: "Lecturer", text: "Some birds can do the same thing. Ducks sleeping in a row have been observed doing something quite clever. The birds at each end of the row keep the eye facing outwards open, while the birds in the middle, who are safer, sleep more deeply." },
        { speaker: "Lecturer", text: "And then there are birds that sleep while flying. Frigatebirds can stay in the air for weeks over the ocean. Researchers attached small devices to their heads to record brain activity, and found that they do sleep in flight, but only for about forty minutes a day, compared with over twelve hours when they're on land." },
        { speaker: "Lecturer", text: "So what is sleep actually for? There are several theories. One is that it saves energy. Another, which has a lot of support, is that during sleep the brain clears away waste chemicals that build up while we're awake. And a third is that sleep helps the brain to store memories, strengthening the connections that matter and removing the ones that don't. Most researchers now think sleep probably does all of these things, which may be why it's been so difficult to give up during evolution." },
        { speaker: "Narrator", text: "That is the end of Part 4. You now have some time to check your answers." },
        { pause: 20 }
      ],
      groups: [
        {
          type: "gap",
          instructions: "Complete the notes below. Write **ONE WORD ONLY** for each answer.",
          title: "Sleep in animals",
          lines: [
            "# Why sleep is a puzzle",
            "- A sleeping animal is more likely to be caught by a [[31]]",
            "# Signs of sleep",
            "- Staying still in a typical position",
            "- Being slower to [[32]] when disturbed",
            "- Fruit flies sleep longer after being kept awake",
            "# Amount of sleep",
            "- Bats: about 20 hours; giraffes: under 5 hours",
            "- Main factor seems to be [[33]]: plant-eaters spend most of the day eating",
            "# Sleeping with half the brain",
            "- Dolphins must stay alert enough to control their [[34]]",
            "- The [[35]] on the side opposite the sleeping half stays open",
            "- Ducks at the end of a [[36]] keep one eye open",
            "# Sleep in flight",
            "- Frigatebirds: brain activity recorded using devices on their [[37]]",
            "- They sleep only about 40 minutes a day in the air",
            "# Possible purposes of sleep",
            "- Saving [[38]]",
            "- Removing [[39]] chemicals from the brain",
            "- Storing [[40]]"
          ],
          questions: [
            { n: 31, answer: ["predator"], explanation: "*\"it's much more likely to be caught by a predator.\"*" },
            { n: 32, answer: ["react", "respond"], explanation: "*\"it is slower to react to things around it.\"*" },
            { n: 33, answer: ["diet", "food"], explanation: "*\"A key factor seems to be diet.\"*" },
            { n: 34, answer: ["breathing"], explanation: "*\"the other half stays alert enough to control breathing.\"*" },
            { n: 35, answer: ["eye"], explanation: "*\"the eye on the opposite side to the sleeping half usually stays open.\"*" },
            { n: 36, answer: ["row", "line"], explanation: "*\"The birds at each end of the row keep the eye facing outwards open.\"*" },
            { n: 37, answer: ["heads", "head"], explanation: "*\"Researchers attached small devices to their heads.\"*" },
            { n: 38, answer: ["energy"], explanation: "*\"One is that it saves energy.\"*" },
            { n: 39, answer: ["waste"], explanation: "*\"the brain clears away waste chemicals.\"*" },
            { n: 40, answer: ["memories", "memory"], explanation: "*\"sleep helps the brain to store memories.\"*" }
          ]
        }
      ]
    }
  ]
});
