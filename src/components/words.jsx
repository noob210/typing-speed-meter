import { useState } from 'react';

const Words = () => {

    const [wordString, setWordString] = useState("");

    const easy = [
        "cat", "dog", "pin", "mat", "god", "car", "mop", "has", "sun", "dip",
        "key", "and", "red", "box", "hat", "fat", "sky", "rug", "lip", "jam",
        "ant", "joy", "zen", "fox", "ham", "pet", "egg", "vet", "gas", "fun",
        "hip", "boa", "pot", "sat", "hot", "rat", "wig", "jet", "ink", "dye",
        "jog", "elm", "cup", "web", "day", "jaw", "eye", "saw", "bar", "top",
        "kid", "kit", "oar", "yak", "hog", "cod", "nut", "cow", "tax", "ask",
        "act", "bay", "mad", "bow", "map", "dig", "tan", "yap", "bid", "was",
        "zip", "zap", "ace", "age", "six", "jar", "coat", "jump", "kick", "lick",
        "hand", "foot", "mint", "pint", "best", "test", "west", "rest", "nest", "dust",
        "ball", "call", "mall", "hall", "fall", "zest", "fest", "list", "doom"];

    const medium = [
        "action", "brave", "clock", "behind", "forest", "orange", "pencil", "animal", "matter", "summer",
        "bottle", "carpet", "amulet", "light", "travel", "sudden", "signal", "inflate", "escapes", "thicken",
        "proving", "complex", "primary", "support", "article", "origami", "classic", "printer", "station", "delight",
        "gravity", "promise", "history", "english", "subject", "bitters", "science", "natural", "extract", "produce",
        "outline", "capture", "digital", "central", "bargain", "details", "express", "project", "monster", "tracker",
        "quickly", "insight", "tropical", "umbrella", "downtown", "explorer", "paradox", "surround", "knitting", "energize",
        "applause", "hotel", "fitness", "gourmet", "season", "surprise", "harmony", "triplicate", "magnify", "performer",
        "offside", "peculiar", "warranty", "elevator", "triangle", "playground", "skinny", "vibration", "medicine", "document",
        "traction", "version", "replica", "electron", "relation", "radiance", "rotation", "crucial", "economize", "convince"];

    const hard = [
        "zookeepers", "biodegradable", "excommunicate", "unbelievable", "overwhelming", "hexadecimal", "extravaganza", "handicraftsman", "transistorized", "quizzically",
        "approximately", "inconsequential", "exasperated", "unfamiliarity", "philanthropist", "bibliography", "unscrupulous", "discombobulate", "unquestioning", "miscalculated",
        "decipherable", "justification", "incompatibility", "underestimated", "misinterpretation", "journeyman", "zigzagging", "xylophonist", "vaccination", "knowledgeable",
        "unanticipated", "categorically", "disappointment", "misunderstanding", "incorporated", "astonishment", "encyclopedia", "unambiguously", "quintessential", "conditionally",
        "hypothetically", "subterranean", "unconventional", "extraterrestrial", "decontamination", "uncharacteristically", "chronological", "unceremoniously", "exaggerates", "uncomplimentary",
        "exemplification", "discrimination", "unpretentious", "extracurricular", "uncompetitive", "subconscious", "cross-sectional", "photovoltaic", "inconvenience", "protagonist",
        "superscription", "reconstruction", "inappreciation", "recognizance", "questionnaires", "uncontaminated", "spectrophotometry", "experimentation", "responsibilities", "procrastinator",
        "inaccessibility", "documentation", "synchronization", "unacceptability", "expectoration", "inconsiderable", "unintentional", "unparalleled", "indiscrimination", "undeniability"];


    if (wordString === "") {
        let newWordString = "";

        for (let i = 0; i < 20; i++) {
            const randomValue = Math.random();
            const index = Math.floor(Math.random() * 50 + 1);
            let level;

            if (randomValue < 0.6) {
                level = 1;
            }

            else if (randomValue < 0.95) {
                level = 2;
            }

            else {
                level = 3;
            }


            switch (level) {
                case 1:
                    newWordString += " " + easy[index];
                    break;
                case 2:
                    newWordString += " " + medium[index];
                    break;
                case 3:
                    newWordString += " " + hard[index];
                    break;
                default: break;
            }
        }

        setWordString(newWordString);
    }

    return wordString;
}

export default Words;