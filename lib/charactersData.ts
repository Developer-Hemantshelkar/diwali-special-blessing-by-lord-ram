export interface CharacterInfo {
  id: string;
  name: string;
  sanskritName: string;
  role: string;
  epithet: string;
  image: string;
  accentColor: string;
  symbolizes: string;
  coreLesson: string;
  inDepthTeaching: string;
  modernApplication: string;
  keyEpisode: string;
  shloka: {
    sanskrit: string;
    transliteration: string;
    meaning: string;
  };
  virtues: string[];
  reflectionQuestion: string;
}

export const CHARACTERS: CharacterInfo[] = [
  {
    id: "rama",
    name: "Lord Rama",
    sanskritName: "श्री राम",
    role: "Maryada Purushottama",
    epithet: "The Supreme Paragon of Righteousness & Duty",
    image: "/images/lord_rama_portrait.jpg",
    accentColor: "from-amber-500/20 via-amber-400/10 to-transparent",
    symbolizes: "Dharma (Cosmic Moral Duty), Absolute Truth, and Grace Under Adversity",
    coreLesson: "Integrity is not measured when times are triumphant, but when upholding moral truth demands sacrificing comfort, prestige, and ego without harboring resentment.",
    inDepthTeaching: "Lord Rama demonstrates that true leadership is rooted in 'Maryada'—divine restraint and voluntary adherence to moral boundaries. Even when exiled to the harsh forest on the very eve of his coronation as King of Ayodhya, he displayed zero bitterness toward Queen Kaikeyi, viewing duty to parent and country as sacred above individual ambition.",
    modernApplication: "In our contemporary world driven by immediate gratification, Lord Rama teaches us to keep our word, practice emotional restraint during crises, and choose moral conviction over expedient shortcuts.",
    keyEpisode: "The Departure for 14 Years of Forest Exile with serene acceptance, transforming personal banishment into a spiritual mission to protect sages and restore universal harmony.",
    shloka: {
      sanskrit: "रामो विग्रहवान् धर्मः साधुः सत्यपराक्रमः ।\nराजा सर्वस्य लोकस्य देवानाम् इव वासवः ॥",
      transliteration: "Rāmo vigrahavān dharmaḥ sādhuḥ satyaparākramaḥ | Rājā sarvasya lokasya devānām iva vāsavaḥ ||",
      meaning: "Rama is the very embodiment of Dharma, virtuous and whose valor is rooted in Truth. He is the guardian king of all the worlds, radiant like Indra among gods."
    },
    virtues: ["Dharma (Righteous Conduct)", "Satya (Unyielding Truth)", "Dhairya (Steadfast Fortitude)", "Karuna (Universal Compassion)"],
    reflectionQuestion: "When personal ambition and ethical duty collide in your life, what anchor keeps your conscience uncompromised?"
  },
  {
    id: "sita",
    name: "Mata Sita",
    sanskritName: "माता सीता",
    role: "Janki & Vaidehi",
    epithet: "The Supreme Embodiment of Resilient Grace & Purity",
    image: "/images/mata_sita_portrait.jpg",
    accentColor: "from-rose-500/20 via-amber-500/10 to-transparent",
    symbolizes: "Sacred Dignity, Unshakeable Inner Strength, and Inviolable Purity",
    coreLesson: "True dignity does not depend on outward circumstances. In the deepest adversity or captivity, the soul that knows its sacred worth remains free, radiant, and untainted.",
    inDepthTeaching: "Mata Sita is not merely a consort, but the primal Earth Shakti (Bhumiputri). Her steadfastness in the Ashok Vatika under Ravana's coercive threats proves that profound mental fortitude and unwavering devotion are more powerful than golden palaces or imperial empires.",
    modernApplication: "Mata Sita is the ultimate inspiration for emotional resilience, inner purity of character, and standing gracefully upright against coercion, showing that gentle grace is the highest form of courage.",
    keyEpisode: "Refusing Ravana's riches and promises in Ashok Vatika, meditating peacefully under the Ashoka tree with a solitary blade of grass symbolizing the impenetrable boundary of her virtue.",
    shloka: {
      sanskrit: "पतिव्रतानां प्रथमा शुभाङ्गि रामप्रिया धर्मरता वदान्या ।\nसीता समाना भुवि नास्ति नारी पतिव्रतानाम् परमो हि धर्मः ॥",
      transliteration: "Pativratānāṁ prathamā śubhāṅgi rāmapriyā dharmaratā vadānyā | Sītā samānā bhuvi nāsti nārī pativratānām paramo hi dharmaḥ ||",
      meaning: "Foremost among the faithful, auspicious, beloved of Rama, devoted to righteousness and noble-hearted; there is no woman upon earth equal to Sita."
    },
    virtues: ["Kshama (Forgiving Grace)", "Tejas (Luminous Purity)", "Resilience (Inner Fortitude)", "Nishtha (Unwavering Devotion)"],
    reflectionQuestion: "How do you protect your inner peace and self-worth when external environments attempt to diminish you?"
  },
  {
    id: "hanuman",
    name: "Lord Hanuman",
    sanskritName: "श्री हनुमान",
    role: "Sankat Mochan & Mahavira",
    epithet: "The Supreme Synergy of Boundless Power & Absolute Humility",
    image: "/images/lord_hanuman_portrait.jpg",
    accentColor: "from-orange-500/20 via-amber-500/10 to-transparent",
    symbolizes: "Nishkama Bhakti (Selfless Devotion), Boundless Strength, and Ego-less Service",
    coreLesson: "Insurmountable obstacles disappear when strength is guided by humility. The greatest power is useless when trapped by ego, but becomes miraculous when dedicated to selfless service.",
    inDepthTeaching: "Hanuman possessed unmatched physical might, scholarly command of Vedic grammar, and celestial boons, yet he considered himself solely 'Rama-Dasa' (a humble servant of Rama). He never boasted of leaping across the 100-yojana ocean or carrying the Sanjeevani mountain; every achievement was surrendered to the divine.",
    modernApplication: "Hanuman teaches us that competence without arrogance is true mastery. Whenever doubt or fear arises, channel your talents toward a higher purpose greater than your own ego.",
    keyEpisode: "The daring leap across the roaring ocean to Lanka, overcoming Surasa and Simhika with intellect and humility rather than brute force.",
    shloka: {
      sanskrit: "मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम् ।\nवातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये ॥",
      transliteration: "Manojavaṁ mārutatulyavegaṁ jitendriyaṁ buddhimatāṁ variṣṭham | Vātātmajaṁ vānarayūthamukhyaṁ śrīrāmadūtaṁ śaraṇaṁ prapadye ||",
      meaning: "Swift as thought, quick as the wind, master of all senses, foremost among the wise, son of the Wind God, chief of the Vanaras, messenger of Sri Rama—in him I take refuge."
    },
    virtues: ["Vinaya (Supreme Humility)", "Bhakti (Selfless Service)", "Buddhi (Sharp Intellect)", "Shaurya (Fearless Courage)"],
    reflectionQuestion: "What talents do you have that can be used for the upliftment of others without seeking personal spotlight?"
  },
  {
    id: "lakshmana",
    name: "Lakshmana",
    sanskritName: "लक्ष्मण",
    role: "Anuj & Shesha Avatara",
    epithet: "The Eternal Watchman of Brotherhood & Vigilance",
    image: "/images/lakshmana_portrait.jpg",
    accentColor: "from-blue-500/20 via-amber-500/10 to-transparent",
    symbolizes: "Unyielding Brotherhood, Active Protection, and Vigilant Devotion",
    coreLesson: "Loyalty is not passive agreement; it is the commitment to stand vigilant in the dark forest while those you love rest peacefully.",
    inDepthTeaching: "Lakshmana gave up all royal comforts of Ayodhya to guard Rama and Sita in exile. Legend recounts that he conquered sleep (Gudakesha) for fourteen years to maintain uninterrupted vigil around their forest cottage in Panchavati.",
    modernApplication: "Teaches the sacred sanctity of family bonds, genuine solidarity during friends' hardships, and the value of steadfast dedication behind the scenes.",
    keyEpisode: "Drawing the sacred boundary (Lakshmana Rekha) to protect Mata Sita, and valiantly confronting Meghanada (Indrajit) on the battlefield of Lanka.",
    shloka: {
      sanskrit: "यत्र रामो भवेद् धीमांस्तत्र गच्छाम्यहं द्रुतम् ।\nन मे स्वर्गेऽपि रुचिर्विना रामेण धीमता ॥",
      transliteration: "Yatra rāmo bhaved dhīmāṁstatra gacchamyahaṁ drutam | Na me svarge'pi rucirvinā rāmeṇa dhīmatā ||",
      meaning: "Wherever the wise Rama goes, there I shall hasten without pause. Even the celestial heavens hold no charm for me without my noble brother Rama."
    },
    virtues: ["Samarpana (Total Dedication)", "Jagrukta (Unwavering Vigilance)", "Bhratrutva (Pure Brotherhood)", "Nirbhikta (Dauntless Bravery)"],
    reflectionQuestion: "Who in your life relies on your quiet support, and how can you stand by them with steadfast loyalty?"
  },
  {
    id: "bharata",
    name: "Bharata",
    sanskritName: "भरत",
    role: "The Trustee of Ayodhya",
    epithet: "The Paragon of Detachment & Ethical Stewardship",
    image: "/images/bharata_portrait.jpg",
    accentColor: "from-emerald-500/20 via-amber-500/10 to-transparent",
    symbolizes: "Trusteeship, Renunciation of Undeserved Wealth, and Filial Devotion",
    coreLesson: "Positions of leadership and power are sacred trusts held on behalf of justice, never personal prizes to be possessed or consumed.",
    inDepthTeaching: "When granted the throne of Ayodhya through Kaikeyi's machinations, Bharata vehemently refused. He walked barefoot to Chitrakoot to plead with Rama to return. When Rama refused to break his father's vow, Bharata placed Rama's wooden sandals (Padukas) on the throne and ruled for 14 years living as an ascetic hermit outside the city walls at Nandigram.",
    modernApplication: "In an era of corporate governance and political temptation, Bharata represents the highest ideal of ethical stewardship—managing resources with clean hands and detached integrity.",
    keyEpisode: "The Paduka Rajabhisheka at Nandigram: anointing Lord Rama's footwear upon the royal throne as the true king, ruling strictly as an accountable servant.",
    shloka: {
      sanskrit: "भरतस्तु महातेजाः पादुके मूर्ध्नि धारयन् ।\nनन्दिग्रामेऽवसद् धीमान् शासन् राज्यं समाहितः ॥",
      transliteration: "Bharataśtu mahātejāḥ pāduke mūrdhni dhārayan | Nandigrāme'vasad dhīmān śāsan rājyaṁ samāhitaḥ ||",
      meaning: "The radiant and wise Bharata, bearing the sacred sandals of Rama upon his head, dwelled in Nandigram, administering the realm with pure detachment."
    },
    virtues: ["Tyaga (Noble Renunciation)", "Nyasa (Fiduciary Stewardship)", "Nispraha (Freedom from Greed)", "Satyavrata (Honoring Conscience)"],
    reflectionQuestion: "When you hold responsibility over resources or people, do you view it as ownership or as a sacred trust?"
  },
  {
    id: "vibhishana",
    name: "Vibhishana",
    sanskritName: "विभीषण",
    role: "The Voice of Conscience",
    epithet: "The Courage to Choose Righteousness Over Tribalism",
    image: "/images/vibhishana_portrait.jpg",
    accentColor: "from-purple-500/20 via-amber-500/10 to-transparent",
    symbolizes: "Moral Discernment, Courage to Dissent, and Absolute Surrender to Truth",
    coreLesson: "When your own kin, nation, or peers embark on injustice, silent complicity is cowardice. Loyalty to righteousness must transcend bloodlines.",
    inDepthTeaching: "Vibhishana lived in the court of Ravana in Lanka. When Ravana abducted Sita, Vibhishana repeatedly warned his brother of the catastrophic moral ruin. Exiled and kicked by Ravana, Vibhishana had the courage to cross over to Lord Rama, choosing eternal Dharma over false tribal loyalty.",
    modernApplication: "Vibhishana inspires whistleblowers, ethical thinkers, and brave individuals who stand up against groupthink and injustice within their own circles.",
    keyEpisode: "Sharanagati: arriving at Lord Rama's ocean camp seeking refuge, where Rama instantly declares: 'Even if Ravana himself comes, I shall grant him protection.'",
    shloka: {
      sanskrit: "सकृदेव प्रपन्नाय तवास्मीति च याचते ।\nअभयं सर्वभूतेभ्यो ददाम्येतद् व्रतं मम ॥",
      transliteration: "Sakṛdeva prapannāya tavāsmīti ca yācate | Abhayaṁ sarvabhūtebhyo dadāmyetad vrataṁ mama ||",
      meaning: "To anyone who surrenders to Me even once saying 'I am Yours', I grant freedom from all fear forever; this is My solemn vow."
    },
    virtues: ["Viveka (Spiritual Discernment)", "Dharma-Nishtha (Steadfast in Justice)", "Sharanagati (Total Surrender to Truth)", "Nirbhayata (Fearlessness)"],
    reflectionQuestion: "Have you ever had the courage to disagree with your peer group when you knew an injustice was being committed?"
  },
  {
    id: "jatayu",
    name: "Jatayu",
    sanskritName: "जटायु",
    role: "The Noble Demi-God Bird",
    epithet: "The Supreme Paragon of Valor in the Face of Inevitable Defeat",
    image: "/images/jatayu_portrait.jpg",
    accentColor: "from-red-500/20 via-amber-500/10 to-transparent",
    symbolizes: "Selfless Sacrifice, Protecting the Vulnerable, and Honorable Defeat",
    coreLesson: "Moral duty does not ask whether victory is certain. It demands that you fight for the defenseless with all your strength, even if defeat is inevitable.",
    inDepthTeaching: "Old and frail, the great bird king Jatayu witnessed Ravana abducting Sita across the sky. Knowing Ravana's ferocious ten-headed celestial weaponry and chariot, Jatayu did not hesitate for a second. He engaged Ravana in aerial battle, shattering his bow and chariot before falling mortally wounded.",
    modernApplication: "Jatayu reminds us never to remain silent spectators to wrongdoing. In a world full of passive onlookers, being willing to intervene on behalf of the vulnerable is the highest glory.",
    keyEpisode: "Clinging to life with severed wings until Lord Rama arrived, reporting Sita's path of abduction before Lord Rama performed his final funeral rites as a son.",
    shloka: {
      sanskrit: "जटायुषं कृतकृत्यं रामः परमधार्मिकः ।\nसंस्कारेण ससत्कृत्य गतिं चास्य ददौ पराम् ॥",
      transliteration: "Jaṭāyuṣaṁ kṛtakṛtyaṁ rāmaḥ paramadhārmikaḥ | Saṁskāreṇa sasatkṛtya gatiṁ cāsya dadau parām ||",
      meaning: "The supremely righteous Rama performed the sacred funeral rites for the noble Jatayu with his own hands, granting him the highest celestial liberation."
    },
    virtues: ["Tyagaveerta (Heroic Self-Sacrifice)", "Paropakara (Aiding the Helpless)", "Kartavya-Bodha (Instant Duty)", "Maitri (Sacred Friendship)"],
    reflectionQuestion: "What causes or vulnerable voices around you deserve your active voice and protection today?"
  },
  {
    id: "ravana",
    name: "Ravana",
    sanskritName: "रावण",
    role: "The Ten-Headed Sovereign of Lanka",
    epithet: "The Cautionary Tale: How Unconquered Ego Destroys Supreme Genius",
    image: "/images/ravana_portrait.jpg",
    accentColor: "from-zinc-500/20 via-red-900/10 to-transparent",
    symbolizes: "The Peril of Arrogance, Intellect Without Virtue, and Destruction of Unbridled Desire",
    coreLesson: "All intellect, masteries, and power crumble to ash if one cannot conquer one's internal vices (Kama, Krodha, Moha, and Ahankara).",
    inDepthTeaching: "Ravana was an accomplished Veena maestro, a master of all four Vedas and six Shastras, a builder of the golden city of Lanka, and an ascetic who won boons from Lord Brahma and Shiva. Yet his inability to conquer lust, pride, and ego turned him into an oppressor, leading his entire dynasty to ruin.",
    modernApplication: "A poignant warning for intellectuals, leaders, and technocrats: high IQ and material wealth cannot compensate for moral bankruptcy. Pride blinds even the sharpest mind to obvious danger.",
    keyEpisode: "His refusal to return Sita even after his bravest sons, brothers, and golden city burned in warning, insisting on stubborn doom rather than humble repentance.",
    shloka: {
      sanskrit: "विद्या विवादाय धनं मदाय शक्तिः परेषां परिपीडनाय ।\nखलस्य साधोर् विपरीतम् एतत् ज्ञानाय दानाय च रक्षणाय ॥",
      transliteration: "Vidyā vivādāya dhanaṁ madāya śaktiḥ pareṣāṁ paripīḍanāya | Khalasya sādhor viparītam etat jñānāya dānāya ca rakṣaṇāya ||",
      meaning: "For the ego-driven, knowledge is for argumentation, wealth for pride, and power for tormenting others. For the noble, it is exactly the opposite: knowledge for wisdom, wealth for charity, and power for protection."
    },
    virtues: ["Cautionary Reflection", "Mastery of Arts (when channeled rightly)", "Tapasya (disciplined endurance)", "Warning Against Hubris"],
    reflectionQuestion: "Are you using your knowledge and resources to lift others up, or to satisfy your personal ego?"
  }
];
