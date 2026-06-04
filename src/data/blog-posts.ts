import heroHealing from "@/assets/hero-healing.jpg";

export type BlogCategory =
  | "Inner Work"
  | "Energy"
  | "Regression"
  | "Transformation";

export type BlogPost = {
  slug: string;
  cat: BlogCategory;
  title: string;
  excerpt: string;
  image: string;
  body: string[];
};

export const posts: BlogPost[] = [
  // ============ INNER WORK ============
  {
    slug: "5-signs-inner-child-needs-healing",
    cat: "Inner Work",
    title: "5 signs your inner child needs healing",
    excerpt:
      "Subtle patterns in adulthood often trace back to unmet needs in childhood. Here is how to notice them.",
    image:
      "https://images.unsplash.com/photo-1499728603263-13726abce5fd?auto=format&fit=crop&w=1600&q=80",
    body: [
      "Many of the patterns we struggle with as adults — people-pleasing, fear of abandonment, perfectionism — have their roots in early childhood experiences. Our inner child carries these wounds, often without our conscious awareness.",
      "The first sign is a strong fear of rejection. If even small disagreements feel devastating, your inner child may still be seeking the approval she never received.",
      "The second is difficulty setting boundaries. When saying no triggers guilt, it often points to a child who learned that love was conditional on compliance.",
      "Third, you may notice emotional flooding — reactions that feel disproportionate to the present moment. These are emotional echoes from earlier wounds.",
      "Fourth is a harsh inner critic. The voice in your head that tells you you're not enough often mirrors the voice of a caregiver who wasn't able to give unconditional acceptance.",
      "And finally, a persistent sense of emptiness — even when life looks good on the outside. This is the inner child still longing to be seen, held, and understood.",
      "The good news: these wounds can heal. Through hypnosis and inner child work, we can return gently to those moments and offer the love and safety that was missing.",
    ],
  },
  {
    slug: "letter-to-your-younger-self",
    cat: "Inner Work",
    title: "Writing a letter to your younger self",
    excerpt:
      "A simple, profound exercise to begin reparenting the parts of you still waiting to be heard.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80",
    body: [
      "Find a quiet moment, a pen, and a piece of paper. Picture yourself at an age when something hard happened — maybe seven, maybe twelve. See her face. Notice what she's wearing. Notice what she needs.",
      "Now write to her from where you stand today. Tell her what you see in her that the adults around her missed. Tell her she is not too much, not too sensitive, not too quiet.",
      "Promise her something small and keep it. A walk in the sun. Ten minutes of music. A meal eaten slowly. The inner child believes action, not words.",
      "Read the letter back, slowly, as if she is sitting next to you — because in a very real sense, she is. This is the beginning of reparenting: showing up for the parts of yourself that were left waiting.",
      "Repeat this practice whenever you feel disproportionately reactive, lonely, or small. Over time the inner child learns that someone has finally come for her. That someone is you.",
    ],
  },

  // ============ ENERGY ============
  {
    slug: "chakra-check-in",
    cat: "Energy",
    title: "A simple chakra check-in for daily clarity",
    excerpt:
      "A short ritual to scan your energy centers and restore balance in under five minutes.",
    image: heroHealing,
    body: [
      "Your seven chakras are energy centers running along the spine, each governing different aspects of physical, emotional, and spiritual wellbeing. A daily check-in keeps them flowing.",
      "Begin seated, eyes closed, with three slow breaths. Bring your attention to the base of the spine — the root chakra. Ask: do I feel safe today? Notice without judgement.",
      "Move up to the sacral chakra below the navel. How is your creativity flowing? Then to the solar plexus — your sense of power and confidence.",
      "Continue to the heart center. Is love flowing freely, both in and out? At the throat: am I speaking my truth? At the third eye between the brows: is my intuition clear?",
      "Finally, the crown at the top of the head. Do you feel connected to something larger than yourself?",
      "End by visualising a soft golden light flowing through all seven centers. Five minutes a day is enough to maintain balance and notice imbalances early.",
    ],
  },
  {
    slug: "aura-cleansing-at-home",
    cat: "Energy",
    title: "Cleansing your aura at home",
    excerpt:
      "Three simple techniques — water, breath, and intention — to clear absorbed energy after a long day.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1600&q=80",
    body: [
      "We move through the world absorbing the energy of every conversation, room, and screen. Without regular cleansing, that residue builds up in the auric field and starts to feel like our own.",
      "The first technique is the shower visualisation. As warm water runs over you, picture it as soft white light moving from crown to feet, carrying away anything that is not yours.",
      "The second is breath work. Inhale deeply through the nose for four counts, hold for four, exhale through the mouth for six. Do this nine times. The longer exhale activates the parasympathetic nervous system and releases stagnant energy.",
      "The third is intention. Place a hand on your heart and say, out loud: 'Anything that is not mine, I release. Anything that is mine and serves me, I keep.' Simple, but extraordinarily effective when done with sincerity.",
      "Done daily, these practices keep your field clear, your boundaries firm, and your energy your own.",
    ],
  },

  // ============ REGRESSION ============
  {
    slug: "past-life-regression-experience",
    cat: "Regression",
    title: "What past life regression really feels like",
    excerpt:
      "Demystifying the experience and what to expect during your first session.",
    image:
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1600&q=80",
    body: [
      "Past life regression is far gentler than most people imagine. You remain conscious throughout — you can hear, speak, and end the session at any time. You are simply in a deeply relaxed state where the subconscious mind opens.",
      "Most clients report imagery that feels vivid yet dreamlike. You might see a landscape, a pair of hands that aren't quite yours, or a moment of strong emotion that doesn't belong to this lifetime.",
      "The purpose isn't to prove past lives. It's to access the wisdom and healing your psyche needs. Whatever arises is meaningful, whether interpreted literally or symbolically.",
      "Sessions typically last 90 minutes to two hours. Many clients report a profound sense of peace afterwards, along with new clarity about recurring fears, relationships, or life themes.",
      "If you've felt drawn to regression work, trust that instinct. The subconscious always knows what's ready to be healed.",
    ],
  },
  {
    slug: "age-regression-vs-past-life",
    cat: "Regression",
    title: "Age regression vs. past life regression",
    excerpt:
      "Two doors into the subconscious — how to know which one your healing is asking for.",
    image:
      "https://images.unsplash.com/photo-1476611317561-60117649dd94?auto=format&fit=crop&w=1600&q=80",
    body: [
      "Both age regression and past life regression use the same gentle hypnotic state, but they explore different territory.",
      "Age regression returns you to specific moments earlier in this lifetime — often childhood, sometimes infancy or even the womb. It is most useful when you can sense that a current pattern began at a particular age.",
      "Past life regression opens the door to memories, archetypes, and themes that don't seem to belong to this life. It's especially helpful with fears, attractions, or dynamics that feel older and deeper than your own history can explain.",
      "Neither is better. The subconscious knows what is ready, and a skilled practitioner follows where it leads rather than forcing a particular destination.",
      "If a fear has a clear childhood origin, age regression is often enough. If a pattern feels mysterious and timeless, past life work tends to bring the deeper relief.",
    ],
  },

  // ============ TRANSFORMATION ============
  {
    slug: "breaking-subconscious-patterns",
    cat: "Transformation",
    title: "Breaking subconscious patterns gently",
    excerpt:
      "Why willpower fails and how reprogramming the subconscious creates lasting change.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    body: [
      "Willpower is a conscious-mind tool — and the conscious mind drives only about 5% of our daily behaviour. The other 95% comes from subconscious programming established mostly before age seven.",
      "This is why diets fail, why the same relationship patterns repeat, why we self-sabotage just as success approaches. We're trying to override deep programming with surface-level effort.",
      "Hypnosis offers a different door. In a relaxed brainwave state, the critical mind softens and new beliefs can be planted directly in the subconscious — the place where lasting change actually lives.",
      "The process is gentle. There's no force, no struggle. We simply give the deeper mind a clearer, kinder instruction and let it reorganise around the new pattern.",
      "Real transformation isn't about trying harder. It's about going deeper.",
    ],
  },
  {
    slug: "rewriting-the-money-story",
    cat: "Transformation",
    title: "Rewriting your subconscious money story",
    excerpt:
      "The beliefs about abundance you absorbed before age seven are still running the show. Here's how to update them.",
    image:
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1600&q=80",
    body: [
      "Most of our beliefs about money were formed by watching the adults around us when we were too young to think critically. 'Money is hard.' 'Rich people are greedy.' 'There's never enough.' These are subconscious instructions, not facts.",
      "The first step is noticing the story. Pay attention to the thoughts that appear when you check your bank balance, send an invoice, or see someone wealthy. Those reactions are the script.",
      "The second step is questioning gently — not with force, but with curiosity. Whose voice does that thought sound like? When did I first hear it? Is it still true for who I am now?",
      "The third step, in hypnosis, is replacing the old instruction with a kinder, truer one. The subconscious doesn't argue with what it hears in a relaxed state — it simply reorganises around it.",
      "Money work is rarely about money. It's about safety, worthiness, and permission. When those heal, the relationship with abundance heals too.",
    ],
  },
];

// Map a service tag (used on the homepage service cards) to a blog category
export const serviceTagToCategory: Record<string, BlogCategory> = {
  Core: "Inner Work",
  Depth: "Regression",
  Change: "Transformation",
  Energy: "Energy",
};

export function postsByCategory(cat: BlogCategory) {
  return posts.filter((p) => p.cat === cat);
}
