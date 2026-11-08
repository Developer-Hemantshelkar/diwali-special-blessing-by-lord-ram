export interface BlessingIntent {
  id: string;
  label: string;
  tagline: string;
  sanskritShloka: string;
  transliteration: string;
  shlokaMeaning: string;
  blessingTemplate: (name: string) => string;
  virtueToEmbody: string;
  sacredAffirmation: string;
}

export const BLESSING_INTENTIONS: BlessingIntent[] = [
  {
    id: "dharma-clarity",
    label: "Dharma & Ethical Clarity",
    tagline: "Guidance for righteous decisions and unclouded moral judgment",
    sanskritShloka: "धर्मो रक्षति रक्षितः ।\nतस्माद् धर्मो न हन्तव्यो मानो धर्मो हतोऽवधीत् ॥",
    transliteration: "Dharmo rakṣati rakṣitaḥ | Tasmād dharmo na hantavyo mā no dharmo hato'vadhīt ||",
    shlokaMeaning: "Dharma protects those who uphold it. Therefore, truth and righteousness must never be abandoned, for preserved Dharma remains our greatest shield.",
    blessingTemplate: (name: string) =>
      `May you, dear ${name}, walk always upon the path of unclouded truth. When winds of uncertainty howl around you, may your inner compass point firmly toward righteousness without fear or hesitation. Know that every quiet choice for honesty weaves an armor around your soul that no hardship can penetrate.`,
    virtueToEmbody: "Satya & Viveka (Truth & Moral Discernment)",
    sacredAffirmation: "I stand unshaken in righteousness; truth is my eternal shield."
  },
  {
    id: "courage-obstacles",
    label: "Courage & Overcoming Adversity",
    tagline: "Strength to cross turbulent oceans of grief and self-doubt",
    sanskritShloka: "लोकाभिरामं रणरङ्गधीरं राजीवनेत्रं रघुवंशनाथम् ।\nकारुण्यरूपं करुणाकरं तं श्रीरामचन्द्रं शरणं प्रपद्ये ॥",
    transliteration: "Lokābhirāmaṁ raṇaraṅgadhīraṁ rājīvanetraṁ raghuvaṁśanātham | Kāruṇyarūpaṁ karuṇākaraṁ taṁ śrīrāmacandraṁ śaraṇaṁ prapadye ||",
    shlokaMeaning: "The joy of all worlds, intrepid and fearless on the battlefield of life, lotus-eyed Lord of the Raghu lineage, personification of boundless mercy—to Sri Rama I offer my surrender.",
    blessingTemplate: (name: string) =>
      `May your heart, dear ${name}, be imbued with the intrepid courage of the Kodanda bow. Let no mountain intimidate you and no raging sea deter your righteous stride. Remember that just as the ocean yielded before faith and devotion, so shall every trial before you become a stepping stone of glory.`,
    virtueToEmbody: "Dhairya & Abhaya (Steadfast Fortitude & Fearlessness)",
    sacredAffirmation: "Within my spirit lies divine courage; no obstacle is insurmountable."
  },
  {
    id: "inner-peace",
    label: "Peace, Serenity & Harmony",
    tagline: "Cultivating calmness amidst turbulent modern distractions",
    sanskritShloka: "शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं\nविश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम् ।\nलक्ष्मीकान्तं कमलनयनं योगिभिर्ध्यानगम्यं\nवन्दे विष्णुं भवभयहरं सर्वलोकैकनाथम् ॥",
    transliteration: "Śāntākāraṁ bhujagaśayanaṁ padmanābhaṁ sureśaṁ viśvādhāraṁ gaganasadṛśaṁ meghavarṇaṁ śubhāṅgam | Lakṣmīkāntaṁ kamalanayanaṁ yogibhirdhyānagamyaṁ vande viṣṇuṁ bhavabhayaharaṁ sarvalokaikanātham ||",
    shlokaMeaning: "I bow before the Lord of supreme peace, foundation of the universe, boundless as the skies, whose serene presence dispels all worldly fears and calms every turbulent thought.",
    blessingTemplate: (name: string) =>
      `May the tranquil waters of the sacred Sarayu river flow through your thoughts, dear ${name}. When the world is frantic with noise and hurry, may you dwell in quiet dignity and gentle poise. Let peace not be a place you seek, but the sanctuary you carry within your own lotus heart.`,
    virtueToEmbody: "Shanti & Samatva (Equanimity & Inner Stillness)",
    sacredAffirmation: "I rest in serene stillness; my peace is untouched by worldly turbulence."
  },
  {
    id: "career-success",
    label: "Purpose, Work & Academic Growth",
    tagline: "Dedicating your intellect and hard work for noble achievement",
    sanskritShloka: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
    transliteration: "Karmaṇyevādhikāraste mā phaleṣu kadācana | Mā karmaphalaheturbhūrmā te saṅgo'stvakarmaṇi ||",
    shlokaMeaning: "Your right is to noble, diligent action alone, never to its fruit. Never let the anxious attachment to results derail your excellence, nor let inaction entice your soul.",
    blessingTemplate: (name: string) =>
      `May your hands craft greatness and your intellect be razor-sharp, dear ${name}. Walk into your study and workplace with the steadfast dedication of Bharata and the focused mastery of Lakshmana. Give your whole heart to every task, and the fruits of honor and accomplishment shall naturally bow at your feet.`,
    virtueToEmbody: "Karmayoga & Nishtha (Dedicated Action & Excellence)",
    sacredAffirmation: "I dedicate my actions with excellence; success flows through righteous effort."
  },
  {
    id: "family-wellbeing",
    label: "Family Wellbeing & Harmony",
    tagline: "Deepening bonds of love, respect, and mutual protection",
    sanskritShloka: "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।\nसर्वे भद्राणि पश्यन्तु मा कश्चिद् दुःखभाग्भवेत् ॥",
    transliteration: "Sarve bhavantu sukhinaḥ sarve santu nirāmayāḥ | Sarve bhadrāṇi paśyantu mā kaścid duḥkhabhāgbhavet ||",
    shlokaMeaning: "May all beings everywhere be joyful and blessed; may all be free from illness and distress; may all behold goodness in each other, and may none suffer misery.",
    blessingTemplate: (name: string) =>
      `May the divine grace that preserved the sacred household of Ayodhya shelter your home, dear ${name}. May gentle words, unconditional forgiveness, and mutual reverence blossom between your family and loved ones. May your hearth be a haven of warmth and protective grace.`,
    virtueToEmbody: "Sneha & Kshama (Compassionate Love & Forgiveness)",
    sacredAffirmation: "My home is protected by love; our bonds are blessed with divine harmony."
  },
  {
    id: "devotion-humility",
    label: "Spiritual Wisdom & Devotion",
    tagline: "Ego-less devotion and supreme humility like Lord Hanuman",
    sanskritShloka: "श्रीरामचन्द्र चरणौ मनसा स्मरामि\nश्रीरामचन्द्र चरणौ वचसा गृणामि ।\nश्रीरामचन्द्र चरणौ शिरसा नमामि\nश्रीरामचन्द्र चरणौ शरणं प्रपद्ये ॥",
    transliteration: "Śrīrāmacandra caraṇau manasā smarāmi śrīrāmacandra caraṇau vacasā gṛṇāmi | Śrīrāmacandra caraṇau śirasā namāmi śrīrāmacandra caraṇau śaraṇaṁ prapadye ||",
    shlokaMeaning: "In my mind I remember the sacred feet of Sri Rama; with my speech I praise them; with bowed head I pay homage; in his protective grace I take complete refuge.",
    blessingTemplate: (name: string) =>
      `May you cultivate the glorious heart of Hanuman, dear ${name}—where infinite capability is held with supreme modesty. Whenever pride seeks to whisper praise in your ear, remember that the ocean was crossed through devotion, not arrogance. May wisdom shine through your humility.`,
    virtueToEmbody: "Vinaya & Bhakti (Noble Modesty & Devotion)",
    sacredAffirmation: "I bow in humility; my strength is consecrated to the highest good."
  }
];

export const RAMAYANA_CHAPTERS = [
  {
    kanda: "Bala Kanda",
    sanskrit: "बालकाण्ड",
    title: "The Celestial Descent & The Bow of Shiva",
    era: "The Divine Youth",
    summary: "The incarnation of Lord Rama in Ayodhya to King Dasharatha and Queen Kausalya. Under the guidance of sage Brahmarshi Vishwamitra, young Rama protects sacred yajnas, liberates Ahilya, and effortlessly strings and breaks the mighty Pinaka (Bow of Shiva) at Janakpur, winning the hand of Mata Sita.",
    coreLesson: "Preparation, humility before teachers, and using one's strength only for the protection of society.",
    symbolicMilestone: "The breaking of the Shiva Dhanush symbolizes the shattering of cosmic rigidity by divine grace."
  },
  {
    kanda: "Ayodhya Kanda",
    sanskrit: "अयोध्याकाण्ड",
    title: "The Supreme Renunciation & The Forest Departure",
    era: "The Trial of Dharma",
    summary: "On the eve of Rama's coronation, Queen Kaikeyi, swayed by Manthara's malice, demands two boons: Bharata's coronation and Rama's 14-year exile to Dandakaranya. Without a flinch of sorrow, Lord Rama gladly embraces exile to preserve his father's sacred honor, followed by Sita and Lakshmana.",
    coreLesson: "Promises are sacrosanct. Personal comfort must be surrendered gladly when higher moral duty commands.",
    symbolicMilestone: "Rama's peaceful smile upon hearing the sentence of banishment represents supreme emotional mastery."
  },
  {
    kanda: "Aranya Kanda",
    sanskrit: "अरण्यकाण्ड",
    title: "The Deep Forest, The Golden Deer & The Abduction",
    era: "The Crucible of Trials",
    summary: "Ten years in the Dandaka forest protecting hermits and sages. The illusion of the golden deer (Maricha) distracts Rama and Lakshmana, allowing Ravana to deceitfully abduct Mata Sita in the guise of an ascetic. Jatayu fights valiantly to his death to defend her.",
    coreLesson: "Illusions of worldly glitter (the golden deer) are designed to lure the mind away from spiritual equilibrium. Beware of glittering deceptions.",
    symbolicMilestone: "Jatayu's sacrifice proves that duty is about fighting for truth, regardless of the odds of survival."
  },
  {
    kanda: "Kishkindha Kanda",
    sanskrit: "किष्किन्धाकाण्ड",
    title: "Alliance of Loyalty & The Boundless Search",
    era: "The Brotherhood of Vanaras",
    summary: "Rama meets Sugriva and Hanuman by Lake Pampa. Rama liberates Sugriva from Vali's injustice, crowning Sugriva king. The Vanara army disperses in all directions to locate Sita. Jambavan reminds Hanuman of his dormant cosmic powers at the ocean shore.",
    coreLesson: "True friends uplift each other in times of distress. Reminding a friend of their dormant potential can change destiny.",
    symbolicMilestone: "Hanuman awakening to his forgotten divine strength at the ocean's edge shows that self-realization requires encouragement."
  },
  {
    kanda: "Sundara Kanda",
    sanskrit: "सुन्दरकाण्ड",
    title: "Hanuman's Heroic Leap & The Solace of Ashok Vatika",
    era: "The Triumph of Devotion",
    summary: "Hanuman leaps across the roaring ocean, overcomes Surasa and Lankini, and discovers Mata Sita meditating under the Ashoka tree in Lanka. He presents Rama's signet ring (Mudra), gives her boundless solace, burns golden Lanka in retribution, and leaps back with the jewel Choodamani.",
    coreLesson: "Nothing in the universe can withstand the combined force of deep intellect, devotion, and fearless purpose.",
    symbolicMilestone: "The ring of Rama delivered by Hanuman represents the reassurance that God's help always arrives at the darkest hour."
  },
  {
    kanda: "Yuddha Kanda",
    sanskrit: "युद्धकाण्ड",
    title: "The Floating Stone Bridge & The Fall of Darkness",
    era: "The War for Universal Truth",
    summary: "The Vanaras construct the extraordinary Ram Setu stone bridge across the ocean with floating stones inscribed with 'Shri Rama'. In an epic confrontation, Kumbhakarna, Meghanada, and Ravana are defeated by Rama and Lakshmana, liberating Sita and restoring the balance of cosmic righteousness.",
    coreLesson: "Even stones float when inscribed with sacred purpose. Injustice, no matter how mighty or wealthy, carries the seeds of its own doom.",
    symbolicMilestone: "The Brahmastra released by Rama dispels the illusion of Ravana's invincibility, proving truth alone triumphs (Satyameva Jayate)."
  },
  {
    kanda: "Uttara Kanda",
    sanskrit: "उत्तरकाण्ड",
    title: "Ramrajya & The Eternal Heritage of Dharma",
    era: "The Golden Era",
    summary: "The return to Ayodhya aboard Pushpaka Vimana, celebrated as the festival of Deepawali. Lord Rama is crowned king, inaugurating 'Ramrajya'—an ideal society where justice, harmony, prosperity, health, and mutual respect thrive across all beings.",
    coreLesson: "True governance is founded on selflessness, empathy for the weakest citizen, and harmony between nature and humanity.",
    symbolicMilestone: "The lighting of Ayodhya's oil lamps (Diyas) represents the eternal triumph of spiritual light over ignorance."
  }
];
