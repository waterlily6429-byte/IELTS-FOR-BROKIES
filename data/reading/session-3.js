/* Reading · Session 3 — original practice material for IELTS for Brokies. */
IELTS.registerSession({
  section: "reading",
  session: 3,
  title: "Lighthouse lenses, hot cities and the placebo effect",
  parts: [
    /* ======================= PASSAGE 1 ======================= */
    {
      label: "Part 1",
      title: "The Lens that Lit the Coasts",
      passage: {
        title: "The Lens that Lit the Coasts",
        subtitle: "How a French engineer made lighthouse beams visible far out to sea",
        paragraphs: [
          { text: "For centuries, the lights that guided ships along dangerous coasts were remarkably weak. The earliest lighthouses burned wood or coal in open fires on top of towers, and later ones used candles or oil lamps behind glass. Much of the light from these sources was simply wasted, spreading upwards into the sky or downwards onto the tower itself rather than out towards the sea. Ships often saw a lighthouse only when they were already dangerously close to the rocks it was meant to warn them about." },
          { text: "A partial solution arrived in the late eighteenth century with the use of curved metal mirrors placed behind each lamp. These reflectors gathered some of the scattered light and directed it towards the horizon. However, they had serious drawbacks. The polished surfaces tarnished quickly in salty air and needed constant cleaning, and even in perfect condition a mirror reflected only part of the light that fell on it. To produce a strong beam, lighthouse keepers had to burn large quantities of expensive oil in many lamps at once." },
          { text: "The breakthrough came from Augustin-Jean Fresnel, a French engineer who had become interested in the nature of light while working on road construction. In 1819 he was appointed to a government commission responsible for improving France's lighthouses. Fresnel knew that a large glass lens could, in principle, focus light far more efficiently than a mirror. The problem was that a lens big enough to be useful would have to be extremely thick, making it heavy, costly and liable to crack as it heated up. Moreover, thick glass absorbs a considerable proportion of the light passing through it." },
          { text: "Fresnel's insight was that only the curved surface of a lens actually bends light; the glass behind it does little except add weight. He therefore designed a lens made of a series of concentric rings, each one a thin slice of the curved surface of a much larger lens. Around the central section he added rings of prisms that captured light escaping above and below and redirected it into the main beam. The result was a lens that was a fraction of the weight of a solid one, yet could gather the great majority of the light from a single lamp and send it out as a narrow, intense beam." },
          { text: "The first lens of this type was installed in 1823 at the Cordouan lighthouse at the mouth of the Gironde estuary in south-west France. Observers reported that its light could be seen at a far greater distance than before, while it used no more oil than a single lamp. Within a few decades, Fresnel lenses had been adopted by lighthouse authorities across Europe and North America. They were produced in several standard sizes, known as 'orders', with the largest reserved for major coastal lights and smaller ones used in harbours and rivers. Sadly, Fresnel himself did not live to see this success; he died of tuberculosis in 1827, aged only thirty-nine." },
          { text: "The design also allowed lighthouses to communicate. By mounting the lens on a rotating platform, engineers could make the beam sweep around the horizon, so that sailors saw a series of flashes. Each lighthouse was given its own pattern of flashes and intervals, recorded on charts, so that a navigator could identify exactly which light he was looking at. Early rotating lenses were turned by clockwork mechanisms that the keeper had to wind by hand every few hours; later, heavy lenses were floated on baths of mercury so that they could rotate with very little friction." },
          { text: "In the twentieth century, electric lamps replaced oil, and automation gradually removed the need for keepers. Satellite navigation has since reduced the importance of lighthouses still further. Many of the great glass lenses have been taken down and replaced with small, low-maintenance electric beacons, and the originals can now be found in museums. Yet Fresnel's principle is far from obsolete. Flat, ridged lenses based on the same idea are used today in car headlights, overhead projectors, traffic signals and solar power systems." }
        ]
      },
      groups: [
        {
          type: "tfng",
          instructions: "Do the following statements agree with the information given in Reading Passage 1? Choose **TRUE** if the statement agrees with the information, **FALSE** if the statement contradicts the information, or **NOT GIVEN** if there is no information on this.",
          questions: [
            { n: 1, text: "Early lighthouse fires sent most of their light out to sea.", answer: "FALSE", explanation: "Paragraph 1: *\"Much of the light from these sources was simply wasted, spreading upwards into the sky or downwards onto the tower\"*." },
            { n: 2, text: "Metal reflectors needed frequent cleaning.", answer: "TRUE", explanation: "Paragraph 2: *\"The polished surfaces tarnished quickly in salty air and needed constant cleaning\"*." },
            { n: 3, text: "Fresnel first studied light while he was a university student.", answer: "FALSE", explanation: "Paragraph 3: he became interested in light *\"while working on road construction\"*." },
            { n: 4, text: "Thick glass lenses could break when they became hot.", answer: "TRUE", explanation: "Paragraph 3: a thick lens would be *\"liable to crack as it heated up\"*." },
            { n: 5, text: "The Cordouan lens needed more oil than the lamps it replaced.", answer: "FALSE", explanation: "Paragraph 5: *\"it used no more oil than a single lamp\"*." },
            { n: 6, text: "The smallest Fresnel lenses were more expensive than the largest.", answer: "NOT GIVEN", explanation: "Paragraph 5 mentions different 'orders' and where they were used, but nothing about their price." },
            { n: 7, text: "Fresnel lived long enough to see his lenses used across Europe.", answer: "FALSE", explanation: "Paragraph 5: *\"Fresnel himself did not live to see this success; he died ... in 1827\"*." }
          ]
        },
        {
          type: "gap",
          instructions: "Complete the notes below. Choose **ONE WORD ONLY** from the passage for each answer.",
          title: "Rotating lights and modern uses",
          lines: [
            "- Rotating lenses made the light appear as a series of [[8]]",
            "- Each lighthouse's pattern was shown on [[9]] so navigators could identify it",
            "- Early lenses were turned by [[10]] that keepers wound by hand",
            "- Later, heavy lenses floated on [[11]] to reduce friction",
            "- Today, many original lenses are kept in [[12]]",
            "- The same principle is used in headlights, traffic signals and [[13]] power systems"
          ],
          questions: [
            { n: 8, answer: ["flashes"], explanation: "Paragraph 6: *\"sailors saw a series of flashes\"*." },
            { n: 9, answer: ["charts"], explanation: "Paragraph 6: each pattern was *\"recorded on charts\"*." },
            { n: 10, answer: ["clockwork"], explanation: "Paragraph 6: *\"turned by clockwork mechanisms that the keeper had to wind by hand\"*." },
            { n: 11, answer: ["mercury"], explanation: "Paragraph 6: *\"heavy lenses were floated on baths of mercury\"*." },
            { n: 12, answer: ["museums"], explanation: "Paragraph 7: *\"the originals can now be found in museums\"*." },
            { n: 13, answer: ["solar"], explanation: "Paragraph 7: *\"traffic signals and solar power systems\"*." }
          ]
        }
      ]
    },

    /* ======================= PASSAGE 2 ======================= */
    {
      label: "Part 2",
      title: "Why Cities Run Hot",
      passage: {
        title: "Why Cities Run Hot",
        subtitle: "Understanding and cooling the urban heat island",
        paragraphs: [
          { label: "A", text: "On a still summer evening, the centre of a large city can be several degrees warmer than the countryside just a few kilometres away. This phenomenon, known as the urban heat island, was first described in the early nineteenth century by Luke Howard, an amateur scientist who recorded temperatures in and around London and noticed that the city was consistently warmer, especially at night. Since then, the effect has been measured in cities on every inhabited continent, and with more than half of the world's population now living in urban areas, it has become a matter of serious public concern." },
          { label: "B", text: "Several factors combine to create the effect. Dark surfaces such as asphalt roads and roofs absorb a large share of the sunlight that falls on them and release it slowly as heat. Concrete and brick store heat during the day and continue to give it off long after sunset, which is why the difference between city and countryside is usually greatest at night. Tall buildings trap warm air and block cooling winds, while air conditioners, vehicles and factories add heat of their own. Perhaps most importantly, cities have far fewer trees and much less exposed soil than rural areas, so they lose the cooling that comes from water evaporating from leaves and the ground." },
          { label: "C", text: "The consequences go well beyond discomfort. During heatwaves, death rates rise sharply, particularly among elderly people and those with heart or lung conditions, and studies of several major heatwaves have found that urban residents were at greater risk than people in surrounding areas. Higher temperatures also increase the demand for air conditioning, which raises electricity consumption and, where power comes from fossil fuels, adds to the emissions that drive climate change. Warmer air speeds up the chemical reactions that form ground-level ozone, worsening air quality." },
          { label: "D", text: "The impacts are not shared equally. In many cities, wealthier neighbourhoods have more parks and tree-lined streets, while poorer districts are dominated by dense housing, car parks and industrial sites. Researchers who have mapped surface temperatures in American cities have found differences of several degrees between neighbourhoods only a short distance apart. Residents of the hottest areas are also less likely to own air conditioners or to be able to afford the electricity to run them, so they face the greatest risk with the fewest means of protection." },
          { label: "E", text: "Fortunately, there are well-tested ways to reduce the effect. Painting roofs white or covering them with reflective materials can lower their surface temperature dramatically on sunny days. Planting trees provides shade and evaporative cooling, and a street with a full canopy can be noticeably cooler than one without. Green roofs, which are covered with soil and plants, insulate buildings and absorb rainwater, while new types of pavement are being designed to reflect more sunlight or to hold water that cools the surface as it evaporates." },
          { label: "F", text: "Putting these ideas into practice, however, raises difficult questions. Trees take decades to reach full size, need water and maintenance, and can damage pavements and pipes with their roots. Reflective surfaces can create glare and, if poorly placed, may reflect heat onto nearby buildings or pedestrians. Planners increasingly argue that the most effective strategies combine several measures and are designed with local residents, who often know best which streets become unbearable in summer and where shade is most needed." }
        ]
      },
      groups: [
        {
          type: "headings",
          instructions: "Reading Passage 2 has six paragraphs, **A–F**. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs.",
          headings: [
            { key: "i", text: "Practical obstacles to cooling cities" },
            { key: "ii", text: "Risks to health, energy use and air" },
            { key: "iii", text: "A long-observed difference in temperature" },
            { key: "iv", text: "Why some residents suffer more than others" },
            { key: "v", text: "The causes of extra urban heat" },
            { key: "vi", text: "How climate change created the heat island" },
            { key: "vii", text: "Proven methods for lowering temperatures" },
            { key: "viii", text: "Rising prices for air conditioning" }
          ],
          questions: [
            { n: 14, text: "Paragraph A", answer: "iii", explanation: "Paragraph A: the effect *\"was first described in the early nineteenth century\"* and has been measured since. Heading vi is wrong; climate change is not given as the cause." },
            { n: 15, text: "Paragraph B", answer: "v", explanation: "Paragraph B: *\"Several factors combine to create the effect\"* (dark surfaces, stored heat, buildings, few trees)." },
            { n: 16, text: "Paragraph C", answer: "ii", explanation: "Paragraph C covers heatwave deaths, electricity consumption and ground-level ozone." },
            { n: 17, text: "Paragraph D", answer: "iv", explanation: "Paragraph D: *\"The impacts are not shared equally.\"*" },
            { n: 18, text: "Paragraph E", answer: "vii", explanation: "Paragraph E: *\"there are well-tested ways to reduce the effect\"*." },
            { n: 19, text: "Paragraph F", answer: "i", explanation: "Paragraph F: *\"Putting these ideas into practice, however, raises difficult questions\"*, such as tree roots and glare." }
          ]
        },
        {
          type: "gap",
          instructions: "Complete the sentences below. Choose **NO MORE THAN TWO WORDS** from the passage for each answer.",
          lines: [
            "Luke Howard noticed that London was warmer than the countryside, particularly at [[20]].",
            "Cities lose the cooling effect of water [[21]] from leaves and soil.",
            "Warm air makes it easier for [[22]] to form near the ground.",
            "Green roofs keep buildings insulated and take in [[23]]."
          ],
          questions: [
            { n: 20, answer: ["night"], explanation: "Paragraph A: the city was *\"consistently warmer, especially at night\"*." },
            { n: 21, answer: ["evaporating"], explanation: "Paragraph B: *\"the cooling that comes from water evaporating from leaves and the ground\"*." },
            { n: 22, answer: ["ozone", "ground-level ozone"], explanation: "Paragraph C: *\"Warmer air speeds up the chemical reactions that form ground-level ozone\"*." },
            { n: 23, answer: ["rainwater", "rain water"], explanation: "Paragraph E: green roofs *\"insulate buildings and absorb rainwater\"*." }
          ]
        },
        {
          type: "mcq",
          instructions: "Choose the correct letter, **A, B, C or D**.",
          questions: [
            { n: 24, text: "Why is the city–countryside difference usually biggest at night?", options: ["Traffic is heaviest in the evening.", "Building materials release heat stored during the day.", "Winds are stronger after dark.", "Air conditioners are switched off."], answer: "B", explanation: "Paragraph B: concrete and brick *\"continue to give it off long after sunset, which is why the difference ... is usually greatest at night\"*." },
            { n: 25, text: "What did researchers find when they mapped temperatures in American cities?", options: ["Wealthy areas were the hottest.", "Neighbourhoods close together could differ by several degrees.", "Parks had little effect on temperature.", "Industrial sites were cooler than housing."], answer: "B", explanation: "Paragraph D: *\"differences of several degrees between neighbourhoods only a short distance apart\"*." },
            { n: 26, text: "According to the writer, planners now believe that cooling strategies should", options: ["focus mainly on planting trees.", "avoid reflective materials completely.", "combine different measures and involve local people.", "be decided by national governments."], answer: "C", explanation: "Paragraph F: the most effective strategies *\"combine several measures and are designed with local residents\"*." }
          ]
        }
      ]
    },

    /* ======================= PASSAGE 3 ======================= */
    {
      label: "Part 3",
      title: "The Power of an Empty Pill",
      passage: {
        title: "The Power of an Empty Pill",
        subtitle: "A medical writer reflects on what the placebo effect can and cannot do",
        paragraphs: [
          { text: "In clinical research, the placebo has traditionally been treated as a nuisance. When a new drug is tested, one group of patients receives the real medicine and another receives an identical-looking pill containing no active ingredient. If both groups improve by a similar amount, the drug is judged to be ineffective. The improvement in the placebo group is usually regarded as background noise to be subtracted from the results. Yet over the past few decades, researchers have begun to take that noise seriously, and in my view what they have discovered deserves far more public attention than it receives." },
          { text: "The first thing to say is that placebo responses are real, at least for some conditions. In studies of pain, patients given a dummy pill that they believe to be a painkiller often report substantial relief, and brain scans show changes in the regions that process pain. Some of this relief appears to involve the body's own pain-relieving chemicals: when researchers give a drug that blocks those chemicals, the placebo effect is reduced. Similar responses have been recorded in conditions such as irritable bowel syndrome, nausea and some forms of depression, all of which are strongly influenced by how a patient feels and what they expect." },
          { text: "Equally interesting is how sensitive the effect is to details that have nothing to do with chemistry. Capsules tend to produce stronger responses than tablets, injections stronger than pills, and expensive-looking treatments stronger than cheap ones. The behaviour of the doctor also matters. In one well-known experiment, patients whose practitioner was warm, attentive and confident improved considerably more than those who received the same sham treatment from a practitioner who was brief and businesslike. It seems that what patients experience as treatment includes the entire encounter, not just what they swallow." },
          { text: "It would be a serious mistake, however, to conclude that belief can cure anything. Placebos do not shrink tumours, heal broken bones or kill infections. Their effects are largely limited to symptoms that the brain itself helps to generate or interpret, such as pain, fatigue and nausea. Even then, the relief is often partial and short-lived. I am particularly concerned by the way some sellers of unproven remedies point to placebo research as if it supported their products. If a treatment works no better than a sugar pill, that is not evidence that it works; it is evidence that the sugar pill and the treatment share whatever benefit comes from expectation and care." },
          { text: "The most surprising recent finding concerns so-called open-label placebos. Researchers have given patients pills that are clearly labelled as containing no medicine, explained honestly that they are placebos, and still recorded improvements in conditions such as chronic back pain. Nobody fully understands why this works. One explanation is that the ritual of taking a pill, combined with an explanation of how placebos can influence the body, triggers responses even without deception. These trials have generally been small, and larger studies are needed before firm conclusions can be drawn, but the results are intriguing." },
          { text: "What should medicine take from all this? Not, I think, that doctors should prescribe sugar pills, which would undermine the trust on which good care depends. The more useful lesson is that the context in which treatment is given has measurable effects. Health systems that allow doctors only a few minutes with each patient may be losing benefits that cost almost nothing to provide. Spending time, listening carefully and explaining clearly are not merely courtesies; they appear to be part of the treatment itself." }
        ]
      },
      groups: [
        {
          type: "mcq",
          instructions: "Choose the correct letter, **A, B, C or D**.",
          questions: [
            { n: 27, text: "How has the placebo traditionally been viewed in drug trials?", options: ["as a useful treatment", "as something to remove from the results", "as a way to reduce costs", "as dangerous for patients"], answer: "B", explanation: "Paragraph 1: improvement in the placebo group *\"is usually regarded as background noise to be subtracted from the results\"*." },
            { n: 28, text: "What evidence suggests placebo pain relief involves the body's own chemicals?", options: ["Patients report less pain after brain scans.", "Blocking those chemicals reduces the effect.", "Placebos work better for nausea than pain.", "The effect is stronger with injections."], answer: "B", explanation: "Paragraph 2: *\"when researchers give a drug that blocks those chemicals, the placebo effect is reduced\"*." },
            { n: 29, text: "The experiment described in paragraph 3 showed that", options: ["capsules work better than injections.", "the practitioner's manner affected how much patients improved.", "cheap treatments produced the strongest response.", "patients preferred brief appointments."], answer: "B", explanation: "Paragraph 3: patients with a *\"warm, attentive and confident\"* practitioner *\"improved considerably more\"*." },
            { n: 30, text: "What is special about open-label placebos?", options: ["Patients are told they are taking a placebo.", "They contain a small amount of medicine.", "They are only used for back pain.", "They have been tested in very large trials."], answer: "A", explanation: "Paragraph 5: pills *\"clearly labelled as containing no medicine\"* and patients were told *\"honestly that they are placebos\"*." }
          ]
        },
        {
          type: "ynng",
          instructions: "Do the following statements agree with the claims of the writer in Reading Passage 3? Choose **YES** if the statement agrees with the claims of the writer, **NO** if the statement contradicts the claims of the writer, or **NOT GIVEN** if it is impossible to say what the writer thinks about this.",
          questions: [
            { n: 31, text: "The public should know more about placebo research.", answer: "YES", explanation: "Paragraph 1: *\"what they have discovered deserves far more public attention than it receives\"*." },
            { n: 32, text: "Placebos can help the body fight infections.", answer: "NO", explanation: "Paragraph 4: *\"Placebos do not ... kill infections.\"*" },
            { n: 33, text: "A remedy that performs no better than a placebo has been shown to be effective.", answer: "NO", explanation: "Paragraph 4: *\"that is not evidence that it works\"*." },
            { n: 34, text: "Open-label placebos will soon be widely used in hospitals.", answer: "NOT GIVEN", explanation: "Paragraph 5 says larger studies are needed, but the writer makes no prediction about hospital use." },
            { n: 35, text: "Doctors should start prescribing sugar pills to their patients.", answer: "NO", explanation: "Paragraph 6: *\"Not, I think, that doctors should prescribe sugar pills\"*." }
          ]
        },
        {
          type: "gap",
          instructions: "Complete the summary below. Choose **ONE WORD ONLY** from the passage for each answer.",
          title: "What medicine can learn",
          lines: [
            "Placebos mainly affect symptoms such as pain, [[36]] and nausea, and the relief is often incomplete and short-lived. The writer argues that prescribing placebos would damage patients' [[37]] in their doctors. Instead, the key lesson is that the [[38]] of treatment matters. Health systems that give doctors only a few [[39]] with each patient may be losing benefits, because listening and explaining clearly are part of the [[40]] itself."
          ],
          questions: [
            { n: 36, answer: ["fatigue"], explanation: "Paragraph 4: *\"symptoms ... such as pain, fatigue and nausea\"*." },
            { n: 37, answer: ["trust"], explanation: "Paragraph 6: sugar pills *\"would undermine the trust on which good care depends\"*." },
            { n: 38, answer: ["context"], explanation: "Paragraph 6: *\"the context in which treatment is given has measurable effects\"*." },
            { n: 39, answer: ["minutes"], explanation: "Paragraph 6: *\"Health systems that allow doctors only a few minutes with each patient\"*." },
            { n: 40, answer: ["treatment"], explanation: "Paragraph 6: *\"they appear to be part of the treatment itself\"*." }
          ]
        }
      ]
    }
  ]
});
