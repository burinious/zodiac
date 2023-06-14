document.getElementById("horoscopeForm").addEventListener("submit", function (event) {
    event.preventDefault();
    calculateHoroscope();
});

function calculateHoroscope() {
    var nameInput = document.getElementById("name");
    var dobInput = document.getElementById("dob");
    var name = nameInput.value;
    var dob = new Date(dobInput.value);
    if (isNaN(dob)) {
        alert("Please enter a valid date of birth.");
        return;
    }

    var zodiacSign = determineZodiacSign(dob);

    var output = "Name: " + name + "<br>";
    output += "Date of Birth: " + dob.toDateString() + "<br>";
    output += "Zodiac Sign: " + zodiacSign + "<br>";
    output += getDescription(zodiacSign);

    document.getElementById("horoscopeResult").innerHTML = output;
    document.getElementById("horoscopeResult").classList.add("show");
}

function determineZodiacSign(dateOfBirth) {
    var month = dateOfBirth.getMonth() + 1;
    var day = dateOfBirth.getDate();

    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        return "Aquarius";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Pisces";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return "Aries";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        return "Taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Gemini";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        return "Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        return "Leo";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        return "Virgo";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        return "Libra";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        return "Scorpio";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        return "Sagittarius";
    } else {
        return "Capricorn";
    }
}

function getDescription(zodiacSign) {
    switch (zodiacSign) {
        case "Aquarius":
            return "Aquarius is the water bearer, symbolizing knowledge, innovation, and humanitarianism. Those born under this sign are often independent, analytical, and intellectual.";
        case "Pisces":
            return "Pisces is represented by two fish swimming in opposite directions, symbolizing duality and intuition. Pisceans are known for their empathy, creativity, and spiritual nature.";
        case "Aries":
            return "Aries, the ram, represents courage, enthusiasm, and leadership. Arians are often ambitious, energetic, and passionate about their pursuits.";
        case "Taurus":
            return "Taurus, the bull, signifies strength, stability, and sensuality. Taureans are reliable, patient, and devoted individuals.";
        case "Gemini":
            return "Gemini is represented by the twins, emphasizing their duality and versatility. Geminis are known for their intelligence, adaptability, and excellent communication skills.";
        case "Cancer":
            return "Cancer, the crab, symbolizes emotional depth, intuition, and protection. Cancerians are often nurturing, compassionate, and deeply connected to their emotions.";
        case "Leo":
            return "Leo, the lion, represents power, confidence, and generosity. Leos are natural leaders, often charismatic, and have a strong sense of self.";
        case "Virgo":
            return "Virgo is associated with practicality, precision, and analytical thinking. Virgos are often detail-oriented, hardworking, and known for their excellent problem-solving skills.";
        case "Libra":
            return "Libra, the scales, symbolizes balance, harmony, and justice. Librans are often diplomatic, cooperative, and strive for fairness in their relationships.";
        case "Scorpio":
            return "Scorpio, the scorpion, represents passion, intensity, and transformation. Scorpios are known for their resourcefulness, loyalty, and deep emotional connections.";
        case "Sagittarius":
            return "Sagittarius, the archer, symbolizes adventure, optimism, and intellectual pursuits. Sagittarians are often philosophical, open-minded, and seekers of truth.";
        case "Capricorn":
            return "Capricorn, the goat, signifies responsibility, ambition, and practicality. Capricorns are often disciplined, hardworking, and have a strong sense of duty.";
        default:
            return "";
    }
}


  
  document.getElementById("horoscopeForm").addEventListener("submit", function (event) {
    event.preventDefault();
    calculateHoroscope();
});


