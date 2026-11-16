/* Reading · Session 4 — original practice material for IELTS for Brokies. */
IELTS.registerSession({
  section: "reading",
  session: 4,
  title: "Bee navigation, vertical farms and growing up bilingual",
  parts: [
    /* ======================= PASSAGE 1 ======================= */
    {
      label: "Part 1",
      title: "How Honeybees Find Their Way",
      passage: {
        title: "How Honeybees Find Their Way",
        subtitle: "The remarkable navigation skills of an insect with a brain smaller than a grain of rice",
        paragraphs: [
          { text: "A honeybee forager may fly several kilometres from its hive in search of nectar and pollen, visiting hundreds of flowers along the way, and yet it can return home in an almost straight line. For an animal whose brain contains fewer than a million nerve cells, this is an extraordinary achievement. Scientists have been studying how bees manage it for more than a century, and while many questions remain, a detailed picture has gradually emerged." },
          { text: "The most important tool in a bee's navigational kit is the sun. Bees use its position as a compass, keeping track of the angle between their direction of flight and the sun. This presents an obvious difficulty, since the sun moves across the sky during the day. Experiments in which bees were trained to visit a feeding station and then kept inside the hive for several hours showed that, when released, they still flew in the correct direction. They had adjusted for the sun's movement, which means they must possess an internal clock that tells them roughly how far it has travelled." },
          { text: "When clouds hide the sun, bees can still navigate, provided that a patch of blue sky is visible. Sunlight becomes polarised as it passes through the atmosphere, creating a pattern across the sky that humans cannot see but bees can. Special cells in the upper part of a bee's eye detect this pattern, allowing the insect to work out where the sun is even when it is hidden. On completely overcast days, bees rely more heavily on landmarks such as trees, hedges and buildings, which they memorise during their early flights around the hive." },
          { text: "Bees also measure distance, though not in the way one might expect. Rather than counting wingbeats or measuring the energy they use, they appear to judge distance by the amount of visual movement they experience as the landscape passes beneath them. This was demonstrated in experiments in which bees flew through narrow tunnels lined with patterned walls. Because the pattern moved rapidly across their eyes, bees that had flown only a few metres behaved as if they had travelled a far greater distance." },
          { text: "Perhaps the most famous aspect of bee navigation is the way bees share information. In the 1940s, the Austrian scientist Karl von Frisch showed that a returning forager performs a 'waggle dance' on the vertical surface of the honeycomb. During the dance, the bee runs in a straight line while shaking its body, then circles back and repeats the movement. The angle of the straight run relative to the vertical indicates the direction of the food relative to the sun, while the length of time the bee spends waggling indicates how far away it is. For food very close to the hive, bees perform a simpler 'round dance' that signals only that food is nearby. Von Frisch's work was not universally accepted at first, but it was eventually confirmed by many other researchers, and he shared a Nobel Prize in 1973." },
          { text: "Understanding bee navigation is not merely of academic interest. Bees pollinate a large proportion of the crops that humans eat, and their populations have declined in many parts of the world. Some studies suggest that exposure to certain pesticides can impair bees' ability to find their way home, even at doses too small to kill them. A bee that cannot navigate is effectively lost to its colony. Research into how bees find their way may therefore help scientists to identify the hidden effects of farming chemicals, as well as inspiring engineers who are designing small flying robots that must navigate without satellite signals." }
        ]
      },
      groups: [
        {
          type: "tfng",
          instructions: "Do the following statements agree with the information given in Reading Passage 1? Choose **TRUE** if the statement agrees with the information, **FALSE** if the statement contradicts the information, or **NOT GIVEN** if there is no information on this.",
          questions: [
            { n: 1, text: "Bees kept inside the hive for several hours flew in the wrong direction when released.", answer: "FALSE", explanation: "Paragraph 2: *\"when released, they still flew in the correct direction\"*." },
            { n: 2, text: "Humans are unable to see the pattern of polarised light in the sky.", answer: "TRUE", explanation: "Paragraph 3: *\"a pattern across the sky that humans cannot see but bees can\"*." },
            { n: 3, text: "Bees learn landmarks during their first flights around the hive.", answer: "TRUE", explanation: "Paragraph 3: landmarks *\"which they memorise during their early flights around the hive\"*." },
            { n: 4, text: "Bees judge distance by counting their wingbeats.", answer: "FALSE", explanation: "Paragraph 4: *\"Rather than counting wingbeats ... they appear to judge distance by the amount of visual movement\"*." },
            { n: 5, text: "Bees in the tunnel experiments flew more slowly than usual.", answer: "NOT GIVEN", explanation: "Paragraph 4 says the bees behaved as if they had flown further, but nothing about their speed." },
            { n: 6, text: "All scientists accepted von Frisch's findings immediately.", answer: "FALSE", explanation: "Paragraph 5: *\"Von Frisch's work was not universally accepted at first\"*." },
            { n: 7, text: "Some pesticides may affect bees' navigation without killing them.", answer: "TRUE", explanation: "Paragraph 6: pesticides *\"can impair bees' ability to find their way home, even at doses too small to kill them\"*." }
          ]
        },
        {
          type: "gap",
          instructions: "Complete the notes below. Choose **ONE WORD ONLY** from the passage for each answer.",
          title: "The waggle dance",
          lines: [
            "- Performed on the honeycomb by a returning [[8]]",
            "- The bee runs straight while [[9]] its body",
            "- Angle of the run compared with the [[10]] = direction of the food",
            "- Time spent waggling = [[11]] to the food",
            "- Food very near the hive: a [[12]] dance instead",
            "- Von Frisch later received a Nobel [[13]] for this work"
          ],
          questions: [
            { n: 8, answer: ["forager"], explanation: "Paragraph 5: *\"a returning forager performs a 'waggle dance'\"*." },
            { n: 9, answer: ["shaking"], explanation: "Paragraph 5: *\"the bee runs in a straight line while shaking its body\"*." },
            { n: 10, answer: ["vertical"], explanation: "Paragraph 5: *\"The angle of the straight run relative to the vertical indicates the direction\"*." },
            { n: 11, answer: ["distance"], explanation: "Paragraph 5: the time spent waggling *\"indicates how far away it is\"*, i.e. the distance. The word *distance* appears in paragraph 4." },
            { n: 12, answer: ["round"], explanation: "Paragraph 5: *\"bees perform a simpler 'round dance'\"*." },
            { n: 13, answer: ["prize"], explanation: "Paragraph 5: *\"he shared a Nobel Prize in 1973\"*." }
          ]
        }
      ]
    },

    /* ======================= PASSAGE 2 ======================= */
    {
      label: "Part 2",
      title: "Farming Upwards",
      passage: {
        title: "Farming Upwards",
        subtitle: "Indoor vertical farms promise fresh food in the middle of cities. Can they deliver?",
        paragraphs: [
          { label: "A", text: "In a converted warehouse on the edge of a city, rows of lettuce grow on shelves stacked eight levels high. There is no soil and no sunlight. The plants' roots hang in trays of nutrient-rich water, and pink-purple light from banks of LEDs bathes the leaves for up to eighteen hours a day. Temperature, humidity and carbon dioxide levels are controlled by computer. This is a vertical farm, and in the past fifteen years such facilities have opened in cities from Singapore to Stockholm, attracting large sums from investors who believe they represent the future of agriculture." },
          { label: "B", text: "Supporters point to an impressive list of advantages. Because crops are grown indoors, they are protected from droughts, floods and pests, so harvests are predictable throughout the year and pesticides are rarely needed. Water is recycled within the system, and some farms claim to use over ninety percent less water than conventional fields. Since the farms can be built close to where people live, produce can reach shops within hours of being picked, reducing transport costs and food waste. And because shelves can be stacked high, a small building can produce as much as many hectares of farmland." },
          { label: "C", text: "The greatest challenge is energy. In a field, sunlight is free; in a vertical farm, every photon must be produced by electricity. Lighting, together with the air conditioning needed to remove the heat that lights produce, accounts for a large share of running costs. When energy prices rose sharply in Europe in 2022, several well-known vertical farming companies ran into serious financial difficulties, and some closed altogether. Unless the electricity comes from renewable sources, the carbon emissions of indoor-grown food may also be higher than those of field-grown produce, even after transport is taken into account." },
          { label: "D", text: "This explains why vertical farms grow such a narrow range of crops. Leafy greens and herbs are ideal: they grow quickly, are mostly water, take up little space and sell for a relatively high price. Staple crops such as wheat, rice and potatoes are a different matter. They need large amounts of light to produce a relatively low-value harvest, and growing them indoors would be far more expensive than buying them from conventional farms. Experts therefore agree that, for the foreseeable future, vertical farming will complement rather than replace traditional agriculture." },
          { label: "E", text: "Technology may improve the economics. LEDs have become much more efficient over the past decade, and researchers are learning which wavelengths of light plants actually need, so that less energy is wasted. Robots are increasingly used to move trays, plant seeds and harvest crops, reducing labour costs. Some farms are being built next to power stations or data centres so that they can use waste heat, while others are experimenting with growing strawberries and tomatoes, which fetch higher prices than lettuce." },
          { label: "F", text: "Some of the most promising applications may lie in places where conventional farming is especially difficult. In desert countries with little fresh water, in remote northern communities where fresh vegetables must be flown in at great cost, and even on research stations in Antarctica, growing food indoors makes far more economic sense. Space agencies are also studying similar systems for long missions, where astronauts will need to grow their own food. In such settings, the high cost of energy matters less than the alternative of having no fresh produce at all." }
        ]
      },
      groups: [
        {
          type: "headings",
          instructions: "Reading Passage 2 has six paragraphs, **A–F**. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs.",
          headings: [
            { key: "i", text: "Where indoor farming makes most sense" },
            { key: "ii", text: "A description of a farm without fields" },
            { key: "iii", text: "Why some crops suit indoor farming and others do not" },
            { key: "iv", text: "The problem of power" },
            { key: "v", text: "Customers' doubts about the taste of indoor produce" },
            { key: "vi", text: "Ways of reducing costs" },
            { key: "vii", text: "Benefits claimed by supporters" },
            { key: "viii", text: "Government support for vertical farms" }
          ],
          questions: [
            { n: 14, text: "Paragraph A", answer: "ii", explanation: "Paragraph A describes a farm with *\"no soil and no sunlight\"*, shelves and LEDs." },
            { n: 15, text: "Paragraph B", answer: "vii", explanation: "Paragraph B: *\"Supporters point to an impressive list of advantages.\"*" },
            { n: 16, text: "Paragraph C", answer: "iv", explanation: "Paragraph C: *\"The greatest challenge is energy.\"*" },
            { n: 17, text: "Paragraph D", answer: "iii", explanation: "Paragraph D explains why leafy greens are *\"ideal\"* but staple crops are *\"a different matter\"*." },
            { n: 18, text: "Paragraph E", answer: "vi", explanation: "Paragraph E: *\"Technology may improve the economics\"*: efficient LEDs, robots, waste heat." },
            { n: 19, text: "Paragraph F", answer: "i", explanation: "Paragraph F: *\"places where conventional farming is especially difficult\"* such as deserts and Antarctica." }
          ]
        },
        {
          type: "gap",
          instructions: "Complete the sentences below. Choose **NO MORE THAN TWO WORDS** from the passage for each answer.",
          lines: [
            "In vertical farms, plants grow in trays of [[20]] instead of soil.",
            "Because crops are protected indoors, [[21]] are seldom necessary.",
            "As well as lighting, farms must pay for [[22]] to remove heat.",
            "Some farms are located beside power stations or [[23]] to use their waste heat."
          ],
          questions: [
            { n: 20, answer: ["water", "nutrient-rich water"], explanation: "Paragraph A: *\"The plants' roots hang in trays of nutrient-rich water\"*." },
            { n: 21, answer: ["pesticides"], explanation: "Paragraph B: *\"pesticides are rarely needed\"*." },
            { n: 22, answer: ["air conditioning", "air-conditioning"], explanation: "Paragraph C: *\"the air conditioning needed to remove the heat that lights produce\"*." },
            { n: 23, answer: ["data centres", "data centers"], explanation: "Paragraph E: *\"built next to power stations or data centres so that they can use waste heat\"*." }
          ]
        },
        {
          type: "mcq",
          instructions: "Choose the correct letter, **A, B, C or D**.",
          questions: [
            { n: 24, text: "What happened to some vertical farming companies in 2022?", options: ["They moved to Singapore.", "They had money problems because of energy costs.", "They started growing wheat.", "They received government grants."], answer: "B", explanation: "Paragraph C: *\"When energy prices rose sharply in Europe in 2022, several well-known vertical farming companies ran into serious financial difficulties\"*." },
            { n: 25, text: "Experts expect vertical farming to", options: ["replace traditional farms within a decade.", "work alongside traditional farming.", "focus mainly on staple crops.", "become cheaper than field farming."], answer: "B", explanation: "Paragraph D: *\"vertical farming will complement rather than replace traditional agriculture\"*." },
            { n: 26, text: "Why are some farms trying to grow strawberries and tomatoes?", options: ["They need less light than lettuce.", "They sell for more money than lettuce.", "They grow faster than herbs.", "They are easier for robots to pick."], answer: "B", explanation: "Paragraph E: strawberries and tomatoes *\"fetch higher prices than lettuce\"*." }
          ]
        }
      ]
    },

    /* ======================= PASSAGE 3 ======================= */
    {
      label: "Part 3",
      title: "Two Languages, One Mind",
      passage: {
        title: "Two Languages, One Mind",
        subtitle: "A linguist examines the claims made about bilingual children",
        paragraphs: [
          { text: "For much of the twentieth century, parents in many countries were warned against raising their children with two languages. Bilingualism, it was claimed, would confuse young minds, delay their speech and harm their performance at school. Some early studies appeared to support these fears, finding that bilingual children scored lower on intelligence tests. Looking back, it is clear that most of these studies were badly flawed. They often compared children from poor immigrant families with wealthier monolingual children, and they tested bilinguals in their weaker language. The disadvantages they recorded had far more to do with poverty and unfair testing than with speaking two languages." },
          { text: "From the 1960s onwards, better-designed research began to tell a very different story, and in recent decades the pendulum has swung to the opposite extreme. Bilingualism is now frequently presented as a kind of mental workout that sharpens attention, improves problem-solving and even delays the onset of dementia. Popular articles promise parents that a second language will make their children cleverer. As someone who has spent many years studying bilingual development, I find this enthusiasm understandable but, in several respects, premature." },
          { text: "The theory behind the claimed benefits is reasonable enough. Bilingual people have both languages active in their minds at the same time, even when using only one of them, and they must constantly suppress the language they do not need. Researchers proposed that this daily practice strengthens 'executive control', the set of mental skills that allow us to focus attention, ignore distractions and switch between tasks. A number of studies in the 2000s found that bilingual children and adults performed better than monolinguals on tasks designed to measure these skills." },
          { text: "The difficulty is that many later studies have failed to repeat these findings. Some large, carefully controlled studies have found no reliable difference between bilinguals and monolinguals on measures of executive control. There is also evidence that studies finding an advantage were more likely to be published than those finding none, which would make the advantage look more consistent than it really is. The question is still debated, but in my judgement the most reasonable conclusion is that any cognitive advantage is small and depends heavily on how bilingual a person is and how they use their languages." },
          { text: "None of this should discourage families from raising bilingual children, because the strongest arguments for bilingualism have nothing to do with test scores. A child who speaks the language of their grandparents can talk to them, share their stories and feel part of their culture. A second language opens doors to friendships, travel and, later, employment. These benefits are real and substantial, and they do not depend on whether bilingualism also improves performance on laboratory tasks." },
          { text: "It is also worth correcting a common worry. Bilingual children may sometimes mix words from both languages in the same sentence, and their vocabulary in each individual language may be smaller than that of a monolingual child of the same age. Neither of these is a sign of confusion or delay. Mixing languages is a normal feature of bilingual speech, used skilfully by adults as well as children, and when both vocabularies are added together, bilingual children typically know at least as many words as their monolingual peers. Parents should be reassured that, for the great majority of children, learning two languages is entirely natural." }
        ]
      },
      groups: [
        {
          type: "mcq",
          instructions: "Choose the correct letter, **A, B, C or D**.",
          questions: [
            { n: 27, text: "According to the writer, early studies of bilingual children were flawed because they", options: ["used too few children.", "ignored differences in family wealth.", "were carried out by parents.", "only tested very young children."], answer: "B", explanation: "Paragraph 1: they *\"compared children from poor immigrant families with wealthier monolingual children\"*." },
            { n: 28, text: "What does the writer say about the current popular view of bilingualism?", options: ["It is completely wrong.", "It is too enthusiastic too soon.", "It is based on studies from the 1960s.", "It ignores the risk of dementia."], answer: "B", explanation: "Paragraph 2: *\"I find this enthusiasm understandable but, in several respects, premature\"*." },
            { n: 29, text: "Why might the bilingual advantage appear more consistent than it is?", options: ["Bilinguals were tested in their stronger language.", "Studies showing an advantage were more often published.", "Monolinguals refused to take part.", "The tasks were too easy."], answer: "B", explanation: "Paragraph 4: *\"studies finding an advantage were more likely to be published than those finding none\"*." },
            { n: 30, text: "What is the writer's main point in the fifth paragraph?", options: ["Bilingual children perform better in exams.", "The main benefits of bilingualism are social and practical.", "Grandparents should teach children languages.", "Laboratory tests are useless."], answer: "B", explanation: "Paragraph 5: *\"the strongest arguments for bilingualism have nothing to do with test scores\"*: family, culture, friendships and jobs." }
          ]
        },
        {
          type: "ynng",
          instructions: "Do the following statements agree with the claims of the writer in Reading Passage 3? Choose **YES** if the statement agrees with the claims of the writer, **NO** if the statement contradicts the claims of the writer, or **NOT GIVEN** if it is impossible to say what the writer thinks about this.",
          questions: [
            { n: 31, text: "The idea that bilingualism could improve executive control was a sensible one.", answer: "YES", explanation: "Paragraph 3: *\"The theory behind the claimed benefits is reasonable enough.\"*" },
            { n: 32, text: "Any mental advantage from bilingualism is probably large.", answer: "NO", explanation: "Paragraph 4: *\"any cognitive advantage is small\"*." },
            { n: 33, text: "Children should start learning a second language before the age of three.", answer: "NOT GIVEN", explanation: "The writer never mentions an ideal starting age." },
            { n: 34, text: "Mixing languages in one sentence shows that a child is confused.", answer: "NO", explanation: "Paragraph 6: *\"Neither of these is a sign of confusion or delay.\"*" },
            { n: 35, text: "Most children are capable of learning two languages without difficulty.", answer: "YES", explanation: "Paragraph 6: *\"for the great majority of children, learning two languages is entirely natural\"*." }
          ]
        },
        {
          type: "gap",
          instructions: "Complete the summary below. Choose **ONE WORD ONLY** from the passage for each answer.",
          title: "Bilingualism and the mind",
          lines: [
            "Bilingual people keep both languages active and must [[36]] the one they are not using. Researchers suggested this might improve 'executive control', which helps people ignore [[37]] and switch between tasks. However, many later studies could not [[38]] the original results. The writer also notes that a bilingual child's [[39]] in each separate language may be smaller, but the total number of words they know is usually at least as large as that of their monolingual [[40]]."
          ],
          questions: [
            { n: 36, answer: ["suppress"], explanation: "Paragraph 3: *\"they must constantly suppress the language they do not need\"*." },
            { n: 37, answer: ["distractions"], explanation: "Paragraph 3: skills that *\"allow us to focus attention, ignore distractions and switch between tasks\"*." },
            { n: 38, answer: ["repeat"], explanation: "Paragraph 4: *\"many later studies have failed to repeat these findings\"*." },
            { n: 39, answer: ["vocabulary"], explanation: "Paragraph 6: *\"their vocabulary in each individual language may be smaller\"*." },
            { n: 40, answer: ["peers"], explanation: "Paragraph 6: *\"at least as many words as their monolingual peers\"*." }
          ]
        }
      ]
    }
  ]
});
