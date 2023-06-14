// compatibility.js

function checkCompatibility() {
  var sign1 = document.getElementById("sign1").value;
  var sign2 = document.getElementById("sign2").value;


  var compatibilityResult = document.getElementById("compatibilityResult");
  compatibilityResult.classList.add("show"); // Add the "show" class to display the result
  // Write your compatibility logic here
  // You can use if-else statements or switch cases to determine compatibility based on the selected signs

  // Compatibility logic for Aries with other signs
  if (sign1 === "aries") {
    switch (sign2) {
      case "aries":
        compatibilityResult.innerHTML = "Aries and Aries can have a passionate and fiery relationship. They both have strong personalities, which can lead to power struggles and clashes. However, their shared energy and enthusiasm can make their bond exciting.";
        break;
      case "taurus":
        compatibilityResult.innerHTML = "Aries and Taurus have different approaches to life. Aries is spontaneous and adventurous, while Taurus is practical and grounded. They may find it challenging to understand each other's needs and values.";
        break;
      case "gemini":
        compatibilityResult.innerHTML = "Aries and Gemini can create a dynamic and exciting relationship. They both enjoy adventure and have a playful nature. However, Aries' directness may clash with Gemini's indecisiveness at times.";
        break;
      case "cancer":
        compatibilityResult.innerHTML = "Aries and Cancer have contrasting personalities. Aries is outgoing and assertive, while Cancer is sensitive and nurturing. They may have different emotional needs and communication styles, which can create challenges in their relationship.";
        break;
      case "leo":
        compatibilityResult.innerHTML = "Aries and Leo can form a passionate and vibrant bond. They both have strong personalities and share a love for adventure. Their relationship may be marked by a healthy competition and mutual admiration.";
        break;
      case "virgo":
        compatibilityResult.innerHTML = "Aries and Virgo have different approaches to life. Aries is impulsive and spontaneous, while Virgo is practical and meticulous. Their contrasting traits can lead to misunderstandings and conflicts.";
        break;
      case "libra":
        compatibilityResult.innerHTML = "Aries and Libra can create a dynamic and balanced relationship. Aries brings passion and excitement, while Libra adds harmony and diplomacy. They may need to find a balance between their individual needs and compromise.";
        break;
      case "scorpio":
        compatibilityResult.innerHTML = "Aries and Scorpio share a strong chemistry and intensity. They are both passionate and assertive, which can create a powerful connection. However, their strong personalities may lead to power struggles and conflicts.";
        break;
      case "sagittarius":
        compatibilityResult.innerHTML = "Aries and Sagittarius can have an adventurous and spontaneous relationship. They both love freedom and exploration, which can create a dynamic and exciting bond. Their shared enthusiasm can lead to a strong connection.";
        break;
      case "capricorn":
        compatibilityResult.innerHTML = "Aries and Capricorn have different approaches to life and relationships. Aries is impulsive and bold, while Capricorn is practical and cautious. They may need to work on finding common ground and understanding each other's needs.";
        break;
      case "aquarius":
        compatibilityResult.innerHTML = "Aries and Aquarius share a sense of adventure and intellectual stimulation. They both value independence and freedom, which can create a unique and exciting relationship. They may need to balance their individuality with compromise.";
        break;
      case "pisces":
        compatibilityResult.innerHTML = "Aries and Pisces have contrasting personalities and emotional needs. Aries is assertive, direct, and focused on personal goals, while Pisces is sensitive, intuitive, and compassionate. They may have different ways of expressing and processing emotions, which can create challenges in their relationship. However, if they can appreciate and support each other's differences, Aries can provide Pisces with stability and encouragement, while Pisces can bring emotional depth and understanding to Aries.";
        break;
      default:
        compatibilityResult.innerHTML = "Please select another zodiac sign.";
        break;
    }
  }
  // Compatibility logic for Taurus with other signs
  else if (sign1 === "taurus") {
    switch (sign2) {
      case "aries":
        compatibilityResult.innerHTML = "Taurus and Aries have different approaches to life and relationships. Taurus is practical, patient, and security-oriented, while Aries is spontaneous, bold, and energetic. They may find it challenging to align their needs and priorities. However, if they can appreciate and balance their differences, Taurus can bring stability and grounding to Aries, while Aries can infuse excitement and new experiences into Taurus' life.";
        break;
      case "taurus":
        compatibilityResult.innerHTML = "Taurus and Taurus can form a stable and grounded relationship. They both value stability, security, and reliability, which can create a sense of comfort and trust between them. They understand each other's need for consistency and can create a harmonious and enduring bond. However, they may need to be aware of stubbornness and possessiveness creeping into their relationship.";
        break;
      case "gemini":
        compatibilityResult.innerHTML = "Taurus and Gemini have different needs and communication styles. Taurus seeks stability, consistency, and practicality, while Gemini craves variety, intellectual stimulation, and social interactions. They may need to find a balance between these contrasting needs. Taurus can provide grounding and stability to Gemini, while Gemini can teach Taurus to be more adaptable and open-minded.";
        break;
      case "cancer":
        compatibilityResult.innerHTML = "Taurus and Cancer can create a nurturing and supportive relationship. Both signs value emotional security, home life, and building a strong foundation. They understand and fulfill each other's needs for stability, loyalty, and affection. Taurus' stability and practicality complement Cancer's emotional depth and nurturing nature.";
        break;
      case "leo":
        compatibilityResult.innerHTML = "Taurus and Leo can have a powerful and passionate relationship. Taurus appreciates Leo's charisma, warmth, and generosity, while Leo is attracted to Taurus' stability, loyalty, and sensuality. They can create a strong and enduring bond if they can appreciate and respect each other's strengths. Taurus can provide grounding and support to Leo, while Leo can infuse excitement and creativity into Taurus' life.";
        break;
      case "virgo":
        compatibilityResult.innerHTML = "Taurus and Virgo share a practical and grounded approach to life. Both signs value stability, reliability, and attention to detail. They can build a strong and enduring relationship based on mutual trust, respect, and shared goals. Taurus' sensuality and Virgo's nurturing nature complement each other well.";
        break;
      case "libra":
        compatibilityResult.innerHTML = "Taurus and Libra can create a harmonious and balanced relationship. Taurus appreciates Libra's charm, diplomacy, and sense of fairness, while Libra is drawn to Taurus' stability, sensuality, and loyalty. They both value beauty, comfort, and security. Taurus can provide grounding and stability to Libra, while Libra can bring harmony and balance to Taurus' life.";
        break;
      case "scorpio":
        compatibilityResult.innerHTML = "Taurus and Scorpio share a passionate and intense connection. Both signs value loyalty, commitment, and emotional depth. They have the potential for a deep and meaningful bond if they can navigate their differences and build trust. Taurus' stability and loyalty can provide a sense of security to Scorpio, while Scorpio's intensity and emotional depth can captivate and challenge Taurus.";
        break;
      case "sagittarius":
        compatibilityResult.innerHTML = "Taurus and Sagittarius have contrasting needs and approaches to life. Taurus seeks stability, routine, and security, while Sagittarius craves adventure, freedom, and exploration. They may need to find a balance between these differing needs. Taurus can provide grounding and support to Sagittarius, while Sagittarius can teach Taurus to embrace spontaneity and broaden their horizons.";
        break;
      case "capricorn":
        compatibilityResult.innerHTML = "Taurus and Capricorn share similar values and priorities. Both signs value stability, hard work, and practicality. They can create a strong and enduring bond based on shared goals, mutual respect, and trust. Taurus' sensuality and Capricorn's ambition can complement each other well.";
        break;
      case "aquarius":
        compatibilityResult.innerHTML = "Taurus and Aquarius have different approaches to life and relationships. Taurus seeks stability, routine, and security, while Aquarius craves independence, innovation, and intellectual stimulation. They may need to find a balance between these differing needs. Taurus can provide grounding and stability to Aquarius, while Aquarius can bring excitement, new ideas, and a sense of adventure to Taurus' life.";
        break;
      case "pisces":
        compatibilityResult.innerHTML = "Taurus and Pisces can have a gentle and nurturing relationship. Taurus appreciates Pisces' sensitivity, compassion, and artistic nature, while Pisces is drawn to Taurus' stability, loyalty, and sensuality. They can provide each other with emotional support, understanding, and a sense of security. Taurus' practicality and Pisces' dreaminess can create a balanced and complementary partnership.";
        break;

      default:
        compatibilityResult.innerHTML = "Please select another zodiac sign.";
        break;
    }
  }
  // Compatibility logic for Gemini with other signs
  else if (sign1 === "gemini") {
    switch (sign2) {
      case "aries":
        compatibilityResult.innerHTML = "Gemini and Aries can have an energetic and dynamic relationship. Both signs are adventurous, independent, and love intellectual stimulation. They can engage in stimulating conversations and enjoy each other's wit and spontaneity. However, they may need to be mindful of impatience and conflicts arising from their strong personalities. Finding common interests and allowing space for individual pursuits can contribute to a harmonious relationship.";
        break;
      case "taurus":
        compatibilityResult.innerHTML = "Gemini and Taurus have different needs and approaches to life. Gemini seeks variety, intellectual stimulation, and social interactions, while Taurus values stability, routine, and security. They may need to find a balance between these differing needs. Taurus can provide grounding and stability to Gemini, while Gemini can teach Taurus to be more adaptable and open-minded.";
        break;
      case "gemini":
        compatibilityResult.innerHTML = "Gemini and Gemini can form an intellectually stimulating and versatile relationship. They share a love for communication, learning, and exploration. They can engage in deep conversations and inspire each other's curiosity. However, they may need to ensure they maintain a balance between intellectual connection and emotional depth. Finding shared interests and engaging in new experiences together can enhance their bond.";
        break;
      case "cancer":
        compatibilityResult.innerHTML = "Gemini and Cancer have different needs and approaches to life. Gemini seeks intellectual stimulation, variety, and social interactions, while Cancer values emotional security, stability, and a nurturing home life. They may need to find a balance between these differing needs. Gemini can bring excitement and new experiences to Cancer's life, while Cancer can provide emotional depth and stability to Gemini.";
        break;
      case "leo":
        compatibilityResult.innerHTML = "Gemini and Leo can have a vibrant and playful relationship. Both signs are outgoing, social, and love to have fun. They can enjoy each other's company and engage in stimulating conversations. Gemini's wit and Leo's warmth can complement each other well. However, they may need to be mindful of ego clashes and ensure they give each other enough attention and appreciation.";
        break;
      case "virgo":
        compatibilityResult.innerHTML = "Gemini and Virgo can form a mentally stimulating and intellectually compatible relationship. Both signs value communication, learning, and attention to detail. They can engage in deep and meaningful conversations and inspire each other's intellectual pursuits. Gemini's versatility and Virgo's analytical nature can complement each other well. However, they may need to ensure they balance their intellectual connection with emotional understanding.";
        break;
      case "libra":
        compatibilityResult.innerHTML = "Gemini and Libra share a love for intellectual stimulation, social interactions, and harmonious connections. Both signs appreciate beauty, balance, and engaging conversations. They can have a mentally stimulating and charming relationship. Gemini's versatility and Libra's diplomacy can create a balanced and harmonious partnership. However, they may need to ensure they maintain individuality and make decisions collaboratively.";
        break;
      case "scorpio":
        compatibilityResult.innerHTML = "Gemini and Scorpio have different needs and approaches to life. Gemini seeks intellectual stimulation, variety, and social interactions, while Scorpio values emotional depth, intimacy, and loyalty. They may need to find a balance between these differing needs. Gemini can bring excitement and new experiences to Scorpio's life, while Scorpio can teach Gemini the value of emotional connection and depth.";
        break;
      case "sagittarius":
        compatibilityResult.innerHTML = "Gemini and Sagittarius share a love for adventure, intellectual pursuits, and social interactions. Both signs seek variety, spontaneity, and freedom. They can engage in stimulating conversations and enjoy exploring new ideas and places together. Gemini's versatility and Sagittarius' optimism can complement each other well. However, they may need to ensure they provide each other with enough space and freedom.";
        break;
      case "capricorn":
        compatibilityResult.innerHTML = "Gemini and Capricorn have different needs and approaches to life. Gemini seeks intellectual stimulation, variety, and social interactions, while Capricorn values stability, structure, and long-term goals. They may need to find a balance between these differing needs. Gemini can bring excitement and new perspectives to Capricorn's life, while Capricorn can provide grounding and support to Gemini's ambitions.";
        break;
      case "aquarius":
        compatibilityResult.innerHTML = "Gemini and Aquarius share a love for intellectual stimulation, social interactions, and unconventional ideas. Both signs seek intellectual connections and value independence. They can engage in thought-provoking conversations and inspire each other's creativity. Gemini's versatility and Aquarius' originality can create a unique and intellectually stimulating partnership. However, they may need to ensure they balance their intellectual pursuits with emotional connection.";
        break;
      case "pisces":
        compatibilityResult.innerHTML = "Gemini and Pisces have different needs and approaches to life. Gemini seeks intellectual stimulation, variety, and social interactions, while Pisces values emotional depth, sensitivity, and intuition. They may need to find a balance between these differing needs. Gemini can bring excitement and new experiences to Pisces' life, while Pisces can teach Gemini the value of emotional connection and introspection.";
        break;

      default:
        compatibilityResult.innerHTML = "Please select another zodiac sign.";
        break;
    }
  }
  // Compatibility logic for Cancer with other signs
  else if (sign1 === "cancer") {
    switch (sign2) {
      case "aries":
        compatibilityResult.innerHTML = "Cancer and Aries have contrasting needs and approaches to life. Cancer seeks emotional security, nurturing, and a stable home life, while Aries values independence, adventure, and individual pursuits. They may need to find a balance between these differing needs. Cancer can provide emotional depth and support to Aries, while Aries can bring excitement and new experiences to Cancer's life.";
        break;
      case "taurus":
        compatibilityResult.innerHTML = "Cancer and Taurus share a desire for stability, security, and a nurturing home life. Both signs value loyalty, commitment, and emotional connection. They can create a strong and harmonious bond based on mutual trust and understanding. Cancer's emotional depth and Taurus' practicality can complement each other well.";
        break;
      case "gemini":
        compatibilityResult.innerHTML = "Cancer and Gemini have different needs and approaches to life. Cancer seeks emotional security, nurturing, and stability, while Gemini values intellectual stimulation, variety, and social interactions. They may need to find a balance between these differing needs. Cancer can provide emotional depth and stability to Gemini, while Gemini can bring excitement and new experiences to Cancer's life.";
        break;
      case "cancer":
        compatibilityResult.innerHTML = "Cancer and Cancer can form a deeply emotional and nurturing relationship. Both signs understand and appreciate each other's sensitivities, vulnerabilities, and need for emotional support. They can create a warm and loving home environment and share a strong bond based on mutual understanding and empathy. However, they may need to be mindful of mood swings and ensure they maintain their individuality within the relationship.";
        break;
      case "leo":
        compatibilityResult.innerHTML = "Cancer and Leo can have a complementary and passionate relationship. Cancer's nurturing nature appeals to Leo's desire for attention and admiration, while Leo's warmth and generosity can make Cancer feel loved and appreciated. They can create a harmonious and supportive partnership based on mutual respect and emotional connection.";
        break;
      case "virgo":
        compatibilityResult.innerHTML = "Cancer and Virgo share a desire for stability, security, and a well-organized home life. Both signs value loyalty, practicality, and attention to detail. They can form a harmonious and supportive bond based on shared values and a commitment to making the relationship work. Cancer's emotional depth and Virgo's practicality can complement each other well.";
        break;
      case "libra":
        compatibilityResult.innerHTML = "Cancer and Libra have different needs and approaches to life. Cancer seeks emotional security, nurturing, and a stable home life, while Libra values harmony, balance, and social interactions. They may need to find a balance between these differing needs. Cancer can provide emotional depth and support to Libra, while Libra can teach Cancer to embrace diplomacy and find a middle ground in relationships.";
        break;
      case "scorpio":
        compatibilityResult.innerHTML = "Cancer and Scorpio can form a deeply emotional and intense relationship. Both signs value emotional connection, loyalty, and intimacy. They can understand and support each other's emotional needs and create a strong bond based on trust and depth. Cancer's nurturing nature and Scorpio's passion can complement each other well.";
        break;
      case "sagittarius":
        compatibilityResult.innerHTML = "Cancer and Sagittarius have different needs and approaches to life. Cancer seeks emotional security, nurturing, and stability, while Sagittarius values freedom, independence, and adventure. They may need to find a balance between these differing needs. Cancer can provide emotional depth and stability to Sagittarius, while Sagittarius can bring excitement and new experiences to Cancer's life.";
        break;
      case "capricorn":
        compatibilityResult.innerHTML = "Cancer and Capricorn share a desire for stability, security, and a well-structured home life. Both signs value loyalty, commitment, and long-term goals. They can create a solid and supportive partnership based on mutual respect and shared values. Cancer's emotional depth and Capricorn's practicality can complement each other well.";
        break;
      case "aquarius":
        compatibilityResult.innerHTML = "Cancer and Aquarius have contrasting needs and approaches to life. Cancer seeks emotional security, nurturing, and a stable home life, while Aquarius values independence, freedom, and intellectual pursuits. They may need to find a balance between these differing needs. Cancer can provide emotional depth and support to Aquarius, while Aquarius can teach Cancer the value of individuality and encourage personal growth.";
        break;
      case "pisces":
        compatibilityResult.innerHTML = "Cancer and Pisces share a deep emotional connection and understanding. Both signs are sensitive, intuitive, and empathetic. They can create a nurturing and compassionate bond based on shared emotional depth and mutual support. Cancer's nurturing nature and Pisces' creativity can complement each other well.";
        break;

      default:
        compatibilityResult.innerHTML = "Please select another zodiac sign.";
        break;
    }
  }
  // Compatibility logic for Leo with other signs
  else if (sign1 === "leo") {
    switch (sign2) {
      case "aries":
        compatibilityResult.innerHTML = "Leo and Aries share a passionate and dynamic connection. Both signs are confident, energetic, and love being in the spotlight. They can ignite each other's passions and enjoy exciting adventures together. Leo's warmth and generosity can appeal to Aries' need for admiration, while Aries' enthusiasm can make Leo feel valued and appreciated.";
        break;
      case "taurus":
        compatibilityResult.innerHTML = "Leo and Taurus have contrasting needs and approaches to life. Leo seeks attention, admiration, and grand gestures, while Taurus values stability, security, and practicality. They may need to find a balance between these differing needs. Leo can inspire Taurus' creativity and bring excitement to their life, while Taurus can provide grounding and support to Leo's ambitions.";
        break;
      case "gemini":
        compatibilityResult.innerHTML = "Leo and Gemini can have a lively and intellectually stimulating relationship. Both signs are sociable, charismatic, and enjoy being in the spotlight. They can engage in stimulating conversations and share a love for fun and entertainment. Leo's warmth and confidence can complement Gemini's versatility and curiosity.";
        break;
      case "cancer":
        compatibilityResult.innerHTML = "Leo and Cancer can have a complementary and nurturing relationship. Leo's warmth and generosity can provide emotional security to Cancer, while Cancer's sensitivity and intuition can make Leo feel loved and understood. They can create a harmonious and supportive partnership based on mutual care and appreciation.";
        break;
      case "leo":
        compatibilityResult.innerHTML = "Leo and Leo can form a powerful and dynamic connection. Both signs are confident, passionate, and love being in the spotlight. They can understand and appreciate each other's desire for attention and admiration. However, they may need to be mindful of ego clashes and ensure they maintain a balance between their individuality and shared interests.";
        break;
      case "virgo":
        compatibilityResult.innerHTML = "Leo and Virgo have different needs and approaches to life. Leo seeks attention, admiration, and grand gestures, while Virgo values practicality, organization, and attention to detail. They may need to find a balance between these differing needs. Leo can inspire Virgo's creativity and bring excitement to their life, while Virgo can provide grounding and support to Leo's ambitions.";
        break;
      case "libra":
        compatibilityResult.innerHTML = "Leo and Libra can have a harmonious and stylish relationship. Both signs appreciate beauty, romance, and social interactions. They can enjoy a balanced partnership based on mutual respect and shared interests. Leo's warmth and generosity can complement Libra's charm and diplomacy.";
        break;
      case "scorpio":
        compatibilityResult.innerHTML = "Leo and Scorpio can have a passionate and intense connection. Both signs are strong-willed, loyal, and deeply emotional. They can create a powerful and transformative bond based on mutual respect and trust. Leo's warmth and charisma can complement Scorpio's depth and intensity.";
        break;
      case "sagittarius":
        compatibilityResult.innerHTML = "Leo and Sagittarius share a love for adventure, excitement, and optimism. Both signs are outgoing, independent, and enjoy exploring new horizons. They can engage in stimulating conversations and inspire each other's ambitions. Leo's warmth and generosity can appeal to Sagittarius' need for freedom and spontaneity.";
        break;
      case "capricorn":
        compatibilityResult.innerHTML = "Leo and Capricorn have different needs and approaches to life. Leo seeks attention, admiration, and grand gestures, while Capricorn values stability, practicality, and long-term goals. They may need to find a balance between these differing needs. Leo can inspire Capricorn's creativity and bring excitement to their life, while Capricorn can provide grounding and support to Leo's ambitions.";
        break;
      case "aquarius":
        compatibilityResult.innerHTML = "Leo and Aquarius have different needs and approaches to life. Leo seeks attention, admiration, and grand gestures, while Aquarius values independence, freedom, and intellectual pursuits. They may need to find a balance between these differing needs. Leo can inspire Aquarius' creativity and bring excitement to their life, while Aquarius can teach Leo the value of individuality and encourage personal growth.";
        break;
      case "pisces":
        compatibilityResult.innerHTML = "Leo and Pisces can have a creative and compassionate connection. Leo's warmth and generosity can provide emotional security to Pisces, while Pisces' sensitivity and intuition can make Leo feel loved and understood. They can create a harmonious and supportive partnership based on mutual admiration and shared dreams.";
        break;

      default:
        compatibilityResult.innerHTML = "Please select another zodiac sign.";
        break;
    }
  }
  // Compatibility logic for Virgo with other signs
  else if (sign1 === "virgo") {
    switch (sign2) {
      case "aries":
        compatibilityResult.innerHTML = "Virgo and Aries have contrasting needs and approaches to life. Virgo values practicality, organization, and attention to detail, while Aries seeks excitement, spontaneity, and action. They may need to find a balance between these differing needs. Virgo can provide grounding and stability to Aries' ambitions, while Aries can inspire Virgo to be more adventurous and take risks.";
        break;
      case "taurus":
        compatibilityResult.innerHTML = "Virgo and Taurus share a desire for stability, security, and practicality. Both signs value loyalty, hard work, and a well-structured life. They can create a solid and reliable partnership based on mutual respect and shared values. Virgo's attention to detail and Taurus' stability can complement each other well.";
        break;
      case "gemini":
        compatibilityResult.innerHTML = "Virgo and Gemini can have a dynamic and intellectually stimulating relationship. Both signs are analytical, communicative, and enjoy learning new things. They can engage in deep conversations and share a love for knowledge and intellectual pursuits. Virgo's practicality can complement Gemini's versatility and curiosity.";
        break;
      case "cancer":
        compatibilityResult.innerHTML = "Virgo and Cancer can have a nurturing and supportive connection. Virgo's practicality and attention to detail can provide stability to Cancer, while Cancer's sensitivity and emotional depth can make Virgo feel loved and understood. They can create a harmonious and caring partnership based on mutual care and appreciation.";
        break;
      case "leo":
        compatibilityResult.innerHTML = "Virgo and Leo have different needs and approaches to life. Virgo values practicality, organization, and attention to detail, while Leo seeks attention, admiration, and grand gestures. They may need to find a balance between these differing needs. Virgo can provide grounding and stability to Leo's ambitions, while Leo can bring excitement and warmth to Virgo's life.";
        break;
      case "virgo":
        compatibilityResult.innerHTML = "Virgo and Virgo can have a harmonious and well-organized relationship. Both signs value practicality, organization, and attention to detail. They can understand and appreciate each other's need for stability and reliability. However, they may need to be mindful of being overly critical or perfectionistic towards each other.";
        break;
      case "libra":
        compatibilityResult.innerHTML = "Virgo and Libra can have a balanced and harmonious relationship. Virgo's practicality and attention to detail can complement Libra's charm and diplomacy. They can create a partnership based on mutual respect, cooperation, and shared interests. Virgo's analytical skills can provide valuable insights to Libra's decision-making process.";
        break;
      case "scorpio":
        compatibilityResult.innerHTML = "Virgo and Scorpio have different needs and approaches to life. Virgo values practicality, organization, and attention to detail, while Scorpio seeks intensity, depth, and transformation. They may need to find a balance between these differing needs. Virgo can provide stability and practical support to Scorpio, while Scorpio can inspire Virgo to explore their emotional depths.";
        break;
      case "sagittarius":
        compatibilityResult.innerHTML = "Virgo and Sagittarius have contrasting needs and approaches to life. Virgo values practicality, organization, and attention to detail, while Sagittarius seeks adventure, freedom, and new experiences. They may need to find a balance between these differing needs. Virgo can provide grounding and stability to Sagittarius' ambitions, while Sagittarius can encourage Virgo to embrace spontaneity and broaden their horizons.";
        break;
      case "capricorn":
        compatibilityResult.innerHTML = "Virgo and Capricorn share a practical and ambitious nature. Both signs value hard work, responsibility, and a well-structured life. They can create a solid and reliable partnership based on mutual respect, shared goals, and a strong work ethic. Virgo's attention to detail and Capricorn's determination can complement each other well.";
        break;
      case "aquarius":
        compatibilityResult.innerHTML = "Virgo and Aquarius have different needs and approaches to life. Virgo values practicality, organization, and attention to detail, while Aquarius values independence, freedom, and intellectual pursuits. They may need to find a balance between these differing needs. Virgo can provide stability and practical support to Aquarius, while Aquarius can teach Virgo the value of individuality and encourage them to think outside the box.";
        break;
      case "pisces":
        compatibilityResult.innerHTML = "Virgo and Pisces can have a complementary and nurturing relationship. Virgo's practicality and attention to detail can provide stability to Pisces, while Pisces' sensitivity and intuition can make Virgo feel loved and understood. They can create a harmonious and supportive partnership based on mutual care and appreciation.";
        break;

      default:
        compatibilityResult.innerHTML = "Please select another zodiac sign.";
        break;
    }
  }
  // Compatibility logic for Libra with other signs
  else if (sign1 === "libra") {
    switch (sign2) {
      case "aries":
        compatibilityResult.innerHTML = "Libra and Aries have contrasting needs and approaches to life. Libra seeks harmony, balance, and cooperation, while Aries seeks excitement, independence, and action. They may need to find a balance between these differing needs. Libra can provide diplomacy and mediation to Aries' assertiveness, while Aries can bring spontaneity and excitement to Libra's life.";
        break;
      case "taurus":
        compatibilityResult.innerHTML = "Libra and Taurus share a love for beauty, harmony, and a well-balanced life. Both signs value stability, loyalty, and sensual pleasures. They can create a harmonious and aesthetically pleasing partnership based on shared values and a mutual appreciation for art, culture, and the finer things in life.";
        break;
      case "gemini":
        compatibilityResult.innerHTML = "Libra and Gemini can have a dynamic and intellectually stimulating relationship. Both signs are sociable, communicative, and enjoy intellectual pursuits. They can engage in lively conversations, share interests, and have a strong mental connection. Libra's charm and diplomacy can complement Gemini's versatility and adaptability.";
        break;
      case "cancer":
        compatibilityResult.innerHTML = "Libra and Cancer have different needs and approaches to life. Libra seeks harmony, balance, and social connections, while Cancer values emotional security, nurturing, and home life. They may need to find a balance between these differing needs. Libra can bring social grace and diplomacy to Cancer's emotional depths, while Cancer can provide a nurturing and caring environment for Libra.";
        break;
      case "leo":
        compatibilityResult.innerHTML = "Libra and Leo share a love for beauty, creativity, and social interactions. Both signs value charm, romance, and attention. They can create a vibrant and harmonious partnership based on mutual admiration, shared interests, and a desire for luxury and enjoyment. Libra's diplomacy and Leo's warmth can complement each other well.";
        break;
      case "virgo":
        compatibilityResult.innerHTML = "Libra and Virgo can have a balanced and practical relationship. Libra's desire for harmony and cooperation can complement Virgo's attention to detail and practicality. They can work well together in various aspects of life, combining Libra's social skills with Virgo's analytical mindset.";
        break;
      case "libra":
        compatibilityResult.innerHTML = "Libra and Libra can have a harmonious and balanced relationship. Both signs value harmony, beauty, and cooperation. They can understand and appreciate each other's need for balance and fairness. However, they may need to be mindful of indecisiveness or over-analyzing situations together.";
        break;
      case "scorpio":
        compatibilityResult.innerHTML = "Libra and Scorpio have different needs and approaches to life. Libra seeks harmony, balance, and social connections, while Scorpio values intensity, emotional depth, and transformation. They may need to find a balance between these differing needs. Libra can provide diplomacy and mediation to Scorpio's intensity, while Scorpio can encourage Libra to explore their emotional depths.";
        break;
      case "sagittarius":
        compatibilityResult.innerHTML = "Libra and Sagittarius can have an exciting and intellectually stimulating relationship. Both signs value freedom, adventure, and expanding their horizons. They can engage in stimulating conversations, share interests in travel and exploring new cultures, and support each other's personal growth. Libra's diplomacy can complement Sagittarius' blunt honesty.";
        break;
      case "capricorn":
        compatibilityResult.innerHTML = "Libra and Capricorn have complementary qualities that can create a balanced and successful partnership. Libra's social skills, diplomacy, and aesthetic sense can complement Capricorn's ambition, determination, and practicality. Together, they can build a solid foundation for both personal and professional aspects of life.";
        break;
      case "aquarius":
        compatibilityResult.innerHTML = "Libra and Aquarius share a love for intellectual pursuits, social interactions, and humanitarian causes. Both signs value fairness, equality, and innovation. They can have a stimulating and intellectually fulfilling partnership based on shared interests, shared values, and a strong mental connection.";
        break;
      case "pisces":
        compatibilityResult.innerHTML = "Libra and Pisces can have a harmonious and compassionate relationship. Libra's desire for harmony and balance can complement Pisces' sensitivity and empathy. They can create a nurturing and supportive partnership based on mutual understanding, compassion, and shared interests in art, spirituality, and romance.";
        break;

      default:
        compatibilityResult.innerHTML = "Please select another zodiac sign.";
        break;
    }
  }
  // Compatibility logic for Scorpio with other signs
  else if (sign1 === "scorpio") {
    switch (sign2) {
      case "aries":
        compatibilityResult.innerHTML = "Scorpio and Aries can have an intense and passionate relationship. Both signs are driven, determined, and can be quite competitive. They can fuel each other's ambition and create a powerful partnership. However, they may need to manage their strong personalities and find a balance between their individual needs and desires.";
        break;
      case "taurus":
        compatibilityResult.innerHTML = "Scorpio and Taurus share a strong physical and emotional connection. Both signs value loyalty, commitment, and sensuality. They can create a deep and intense bond based on mutual trust, shared values, and a strong sense of loyalty. However, they may need to navigate power struggles and possessiveness at times.";
        break;
      case "gemini":
        compatibilityResult.innerHTML = "Scorpio and Gemini have different needs and approaches to life. Scorpio values depth, intensity, and emotional connections, while Gemini seeks variety, intellectual stimulation, and freedom. They may need to find a balance between these differing needs. Scorpio can provide emotional depth and loyalty to Gemini, while Gemini can bring versatility and intellectual stimulation to Scorpio's life.";
        break;
      case "cancer":
        compatibilityResult.innerHTML = "Scorpio and Cancer can have a deeply emotional and nurturing relationship. Both signs value loyalty, emotional connection, and security. They can understand each other's emotional needs, create a safe and supportive environment, and form a strong bond based on trust and shared values.";
        break;
      case "leo":
        compatibilityResult.innerHTML = "Scorpio and Leo have a passionate and intense connection. Both signs are strong-willed, confident, and have a desire for power and recognition. They can share a magnetic attraction and a deep emotional bond. However, they may need to navigate power struggles and ego clashes in the relationship.";
        break;
      case "virgo":
        compatibilityResult.innerHTML = "Scorpio and Virgo can have a complementary and practical relationship. Scorpio's depth and intensity can be balanced by Virgo's practicality and attention to detail. They can work well together in various aspects of life, combining Scorpio's passion with Virgo's reliability.";
        break;
      case "libra":
        compatibilityResult.innerHTML = "Scorpio and Libra have different needs and approaches to life. Scorpio values intensity, emotional depth, and loyalty, while Libra seeks harmony, balance, and social connections. They may need to find a balance between these differing needs. Scorpio can provide emotional depth and loyalty to Libra, while Libra can bring social grace and diplomacy to Scorpio's intensity.";
        break;
      case "scorpio":
        compatibilityResult.innerHTML = "Scorpio and Scorpio can have a deeply intense and passionate relationship. Both signs understand each other's intensity, emotional depths, and desires. They can share a profound connection and create a transformative partnership. However, they may need to manage power struggles and possessiveness within the relationship.";
        break;
      case "sagittarius":
        compatibilityResult.innerHTML = "Scorpio and Sagittarius have contrasting needs and approaches to life. Scorpio values depth, emotional connection, and privacy, while Sagittarius seeks freedom, adventure, and exploration. They may need to find a balance between these differing needs. Scorpio can provide emotional depth and intimacy to Sagittarius, while Sagittarius can bring excitement and spontaneity to Scorpio's life.";
        break;
      case "capricorn":
        compatibilityResult.innerHTML = "Scorpio and Capricorn can have a powerful and successful partnership. Both signs are ambitious, determined, and focused on their goals. They can support each other's aspirations, create a stable and secure foundation, and work towards shared achievements. However, they may need to manage their strong personalities and find a balance between work and personal life.";
        break;
      case "aquarius":
        compatibilityResult.innerHTML = "Scorpio and Aquarius have different needs and approaches to life. Scorpio values depth, emotional connection, and privacy, while Aquarius seeks intellectual stimulation, independence, and social interactions. They may need to find a balance between these differing needs. Scorpio can provide emotional depth and loyalty to Aquarius, while Aquarius can bring intellectual stimulation and innovation to Scorpio's life.";
        break;
      case "pisces":
        compatibilityResult.innerHTML = "Scorpio and Pisces can have a deeply emotional and intuitive relationship. Both signs are sensitive, intuitive, and seek emotional connection. They can understand each other's emotions, share a strong spiritual bond, and support each other's dreams and aspirations.";
        break;

      default:
        compatibilityResult.innerHTML = "Please select another zodiac sign.";
        break;
    }
  }

  // Compatibility logic for Sagittarius with other signs
  else if (sign1 === "sagittarius") {
    switch (sign2) {
      case "aries":
        compatibilityResult.innerHTML = "Sagittarius and Aries share a sense of adventure, enthusiasm, and a love for new experiences. They can have a dynamic and exciting partnership based on mutual exploration and a desire for freedom. Both signs can inspire each other to reach new heights and embrace life's adventures.";
        break;
      case "taurus":
        compatibilityResult.innerHTML = "Sagittarius and Taurus have different needs and approaches to life. Sagittarius seeks freedom, exploration, and intellectual stimulation, while Taurus values stability, routine, and security. They may need to find a balance between these differing needs. Taurus can provide grounding and stability to Sagittarius, while Sagittarius can bring excitement and spontaneity to Taurus's life.";
        break;
      case "gemini":
        compatibilityResult.innerHTML = "Sagittarius and Gemini can have a fun and intellectually stimulating relationship. Both signs are curious, adventurous, and love to socialize. They can engage in lively conversations, share interests in travel and exploration, and support each other's personal growth. However, they may need to manage their different communication styles and find a balance between freedom and commitment.";
        break;
      case "cancer":
        compatibilityResult.innerHTML = "Sagittarius and Cancer have different needs and approaches to life. Sagittarius values freedom, independence, and intellectual pursuits, while Cancer seeks emotional connection, security, and home life. They may need to find a balance between these differing needs. Sagittarius can bring excitement and new experiences to Cancer's life, while Cancer can provide emotional depth and stability to Sagittarius.";
        break;
      case "leo":
        compatibilityResult.innerHTML = "Sagittarius and Leo share a love for adventure, excitement, and social interactions. They can have a dynamic and passionate partnership based on mutual enthusiasm and a desire for growth. Both signs can inspire each other to pursue their passions, take risks, and embrace life to the fullest.";
        break;
      case "virgo":
        compatibilityResult.innerHTML = "Sagittarius and Virgo have different needs and approaches to life. Sagittarius values freedom, exploration, and spontaneity, while Virgo seeks stability, routine, and practicality. They may need to find a balance between these differing needs. Sagittarius can bring excitement and new experiences to Virgo's life, while Virgo can provide grounding and practicality to Sagittarius.";
        break;
      case "libra":
        compatibilityResult.innerHTML = "Sagittarius and Libra share a love for social interactions, intellectual pursuits, and exploring new ideas. They can have a harmonious and intellectually stimulating partnership based on mutual interests and shared values. Both signs appreciate beauty, fairness, and a balanced approach to life.";
        break;
      case "scorpio":
        compatibilityResult.innerHTML = "Sagittarius and Scorpio have contrasting needs and approaches to life. Sagittarius values freedom, exploration, and independence, while Scorpio seeks depth, emotional connection, and intensity. They may need to find a balance between these differing needs. Sagittarius can bring excitement and new experiences to Scorpio's life, while Scorpio can provide emotional depth and loyalty to Sagittarius.";
        break;
      case "sagittarius":
        compatibilityResult.innerHTML = "Sagittarius and Sagittarius can have a dynamic and adventurous relationship. Both signs share a love for freedom, exploration, and new experiences. They can inspire each other to pursue their passions, embrace spontaneity, and live life to the fullest. However, they may need to manage their shared desire for independence and maintain a sense of stability in the relationship.";
        break;
      case "capricorn":
        compatibilityResult.innerHTML = "Sagittarius and Capricorn have contrasting needs and approaches to life. Sagittarius values freedom, exploration, and spontaneity, while Capricorn seeks stability, responsibility, and long-term goals. They may need to find a balance between these differing needs. Sagittarius can bring excitement and new perspectives to Capricorn's life, while Capricorn can provide grounding and practicality to Sagittarius.";
        break;
      case "aquarius":
        compatibilityResult.innerHTML = "Sagittarius and Aquarius share a love for intellectual pursuits, social interactions, and a desire for change. They can have a stimulating and progressive partnership based on shared interests, mutual respect, and a shared vision for the future. Both signs value personal freedom and can support each other's individuality.";
        break;
      case "pisces":
        compatibilityResult.innerHTML = "Sagittarius and Pisces have different needs and approaches to life. Sagittarius values freedom, exploration, and independence, while Pisces seeks emotional connection, sensitivity, and spiritual depth. They may need to find a balance between these differing needs. Sagittarius can bring excitement and new experiences to Pisces's life, while Pisces can provide emotional depth and intuition to Sagittarius.";
        break;

      default:
        compatibilityResult.innerHTML = "Please select another zodiac sign.";
        break;
    }
  }

  // Compatibility logic for Capricorn with other signs
  else if (sign1 === "capricorn") {
    switch (sign2) {
      case "aries":
        compatibilityResult.innerHTML = "Capricorn and Aries have contrasting needs and approaches to life. Capricorn values stability, responsibility, and long-term goals, while Aries seeks freedom, spontaneity, and excitement. They may need to find a balance between these differing needs. Capricorn can provide grounding and structure to Aries's life, while Aries can bring passion and spontaneity to Capricorn's life.";
        break;
      case "taurus":
        compatibilityResult.innerHTML = "Capricorn and Taurus share similar values and approaches to life. Both signs value stability, security, and practicality. They can create a solid and reliable partnership based on shared goals, mutual respect, and a strong work ethic. Together, they can build a secure and comfortable future.";
        break;
      case "gemini":
        compatibilityResult.innerHTML = "Capricorn and Gemini have different needs and approaches to life. Capricorn values stability, responsibility, and long-term goals, while Gemini seeks variety, intellectual stimulation, and social interactions. They may need to find a balance between these differing needs. Capricorn can provide grounding and practicality to Gemini's life, while Gemini can bring versatility and intellectual stimulation to Capricorn's life.";
        break;
      case "cancer":
        compatibilityResult.innerHTML = "Capricorn and Cancer can have a complementary and balanced relationship. Capricorn's practicality and ambition can be balanced by Cancer's emotional depth and nurturing qualities. They can provide each other with stability, security, and emotional support. Together, they can create a harmonious and caring partnership.";
        break;
      case "leo":
        compatibilityResult.innerHTML = "Capricorn and Leo have different needs and approaches to life. Capricorn values stability, responsibility, and long-term goals, while Leo seeks recognition, admiration, and a sense of self-importance. They may need to find a balance between these differing needs. Capricorn can provide grounding and practicality to Leo's life, while Leo can bring passion and enthusiasm to Capricorn's life.";
        break;
      case "virgo":
        compatibilityResult.innerHTML = "Capricorn and Virgo share similar values and approaches to life. Both signs are practical, hardworking, and detail-oriented. They can create a reliable and productive partnership based on shared goals, mutual respect, and a strong sense of responsibility. Together, they can achieve great things and build a stable future.";
        break;
      case "libra":
        compatibilityResult.innerHTML = "Capricorn and Libra have different needs and approaches to life. Capricorn values stability, responsibility, and long-term goals, while Libra seeks balance, harmony, and social interactions. They may need to find a balance between these differing needs. Capricorn can provide grounding and practicality to Libra's life, while Libra can bring a sense of fairness and diplomacy to Capricorn's life.";
        break;
      case "scorpio":
        compatibilityResult.innerHTML = "Capricorn and Scorpio can have a powerful and successful partnership. Both signs are ambitious, determined, and focused on their goals. They can support each other's aspirations, create a stable and secure foundation, and work towards shared achievements. However, they may need to manage their strong personalities and find a balance between work and personal life.";
        break;
      case "sagittarius":
        compatibilityResult.innerHTML = "Capricorn and Sagittarius have contrasting needs and approaches to life. Capricorn values stability, responsibility, and long-term goals, while Sagittarius seeks freedom, exploration, and spontaneity. They may need to find a balance between these differing needs. Capricorn can provide grounding and practicality to Sagittarius's life, while Sagittarius can bring excitement and new perspectives to Capricorn's life.";
        break;
        case "capricorn":
          compatibilityResult.innerHTML = "Capricorn and Capricorn can have a strong and stable relationship. Both signs value ambition, hard work, and practicality. They can support each other's goals, create a secure home life, and strive for long-term success together.";
          break;
      case "aquarius":
        compatibilityResult.innerHTML = "Capricorn and Aquarius have different needs and approaches to life. Capricorn values stability, responsibility, and long-term goals, while Aquarius seeks intellectual stimulation, independence, and social interactions. They may need to find a balance between these differing needs. Capricorn can provide grounding and practicality to Aquarius's life, while Aquarius can bring innovation and a sense of social consciousness to Capricorn's life.";
        break;
      case "pisces":
        compatibilityResult.innerHTML = "Capricorn and Pisces can have a complementary and supportive relationship. Capricorn's practicality and ambition can be balanced by Pisces's intuitive and dreamy nature. They can provide each other with stability, emotional support, and a sense of purpose. Together, they can build a secure and nurturing partnership.";
        break;

      default:
        compatibilityResult.innerHTML = "Please select another zodiac sign.";
        break;
    }
  }

  // Compatibility logic for Aquarius with other signs
  else if (sign1 === "aquarius") {
    switch (sign2) {
      case "aries":
        compatibilityResult.innerHTML = "Aquarius and Aries share a love for intellectual stimulation, social interactions, and a desire for change. They can have a stimulating and progressive partnership based on shared interests, mutual respect, and a shared vision for the future. Both signs value personal freedom and can support each other's individuality.";
        break;
      case "taurus":
        compatibilityResult.innerHTML = "Aquarius and Taurus have different needs and approaches to life. Aquarius seeks intellectual stimulation, social interactions, and a sense of freedom, while Taurus values stability, routine, and security. They may need to find a balance between these differing needs. Aquarius can bring innovation and a sense of social consciousness to Taurus's life, while Taurus can provide grounding and stability to Aquarius's life.";
        break;
      case "gemini":
        compatibilityResult.innerHTML = "Aquarius and Gemini share a love for intellectual pursuits, social interactions, and a desire for variety. They can have a stimulating and mentally engaging partnership based on shared interests, communication, and a sense of curiosity. Both signs value personal freedom and can support each other's need for independence.";
        break;
      case "cancer":
        compatibilityResult.innerHTML = "Aquarius and Cancer have different needs and approaches to life. Aquarius seeks intellectual stimulation, social interactions, and a sense of freedom, while Cancer values emotional connection, security, and home life. They may need to find a balance between these differing needs. Aquarius can bring new ideas and perspectives to Cancer's life, while Cancer can provide emotional depth and stability to Aquarius's life.";
        break;
      case "leo":
        compatibilityResult.innerHTML = "Aquarius and Leo have contrasting needs and approaches to life. Aquarius values intellectual stimulation, social interactions, and a sense of freedom, while Leo seeks recognition, admiration, and a sense of self-importance. They may need to find a balance between these differing needs. Aquarius can bring innovation and a sense of social consciousness to Leo's life, while Leo can bring passion and enthusiasm to Aquarius's life.";
        break;
      case "virgo":
        compatibilityResult.innerHTML = "Aquarius and Virgo have different needs and approaches to life. Aquarius seeks intellectual stimulation, social interactions, and a sense of freedom, while Virgo values stability, routine, and practicality. They may need to find a balance between these differing needs. Aquarius can bring new ideas and perspectives to Virgo's life, while Virgo can provide grounding and practicality to Aquarius's life.";
        break;
      case "libra":
        compatibilityResult.innerHTML = "Aquarius and Libra share a love for intellectual pursuits, social interactions, and a sense of fairness. They can have a harmonious and mentally stimulating partnership based on shared values, mutual respect, and a balanced approach to life. Both signs appreciate beauty, harmony, and a progressive mindset.";
        break;
      case "scorpio":
        compatibilityResult.innerHTML = "Aquarius and Scorpio have contrasting needs and approaches to life. Aquarius values intellectual stimulation, social interactions, and a sense of freedom, while Scorpio seeks depth, emotional connection, and intensity. They may need to find a balance between these differing needs. Aquarius can bring new ideas and perspectives to Scorpio's life, while Scorpio can provide emotional depth and loyalty to Aquarius.";
        break;
      case "sagittarius":
        compatibilityResult.innerHTML = "Aquarius and Sagittarius share a love for intellectual pursuits, social interactions, and a desire for change. They can have a stimulating and progressive partnership based on shared interests, mutual respect, and a shared vision for the future. Both signs value personal freedom and can support each other's individuality.";
        break;
      case "capricorn":
        compatibilityResult.innerHTML = "Aquarius and Capricorn have different needs and approaches to life. Aquarius seeks intellectual stimulation, social interactions, and a sense of freedom, while Capricorn values stability, responsibility, and long-term goals. They may need to find a balance between these differing needs. Aquarius can bring innovation and a sense of social consciousness to Capricorn's life, while Capricorn can provide grounding and practicality to Aquarius's life.";
        break;
      case "aquarius":
        compatibilityResult.innerHTML = "Aquarius and Aquarius can have a unique and intellectually stimulating relationship. Both signs value intellectual pursuits, social interactions, and a sense of freedom. They can have a progressive partnership based on shared interests, innovative ideas, and a mutual desire for personal growth.";
        break;
      case "pisces":
        compatibilityResult.innerHTML = "Aquarius and Pisces can have a complementary and inspiring relationship. Aquarius's innovative and forward-thinking nature can be balanced by Pisces's intuitive and dreamy qualities. They can support each other's aspirations, share creative endeavors, and create a harmonious partnership based on understanding and mutual growth.";
        break;

      default:
        compatibilityResult.innerHTML = "Please select another zodiac sign.";
        break;
    }
  }

  // Compatibility logic for Pisces with other signs
  else if (sign1 === "pisces") {
    switch (sign2) {
      case "aries":
        compatibilityResult.innerHTML = "Pisces and Aries have different needs and approaches to life. Pisces values emotional connection, sensitivity, and spiritual depth, while Aries seeks freedom, excitement, and a sense of self-importance. They may need to find a balance between these differing needs. Pisces can provide emotional depth and intuition to Aries's life, while Aries can bring passion and enthusiasm to Pisces's life.";
        break;
      case "taurus":
        compatibilityResult.innerHTML = "Pisces and Taurus can have a harmonious and emotionally fulfilling relationship. Both signs value emotional connection, stability, and sensuality. They can create a nurturing and supportive partnership based on mutual understanding, shared values, and a deep appreciation for the arts and beauty.";
        break;
      case "gemini":
        compatibilityResult.innerHTML = "Pisces and Gemini have different needs and approaches to life. Pisces values emotional connection, sensitivity, and spiritual depth, while Gemini seeks variety, intellectual stimulation, and social interactions. They may need to find a balance between these differing needs. Pisces can provide emotional depth and intuition to Gemini's life, while Gemini can bring versatility and intellectual stimulation to Pisces's life.";
        break;
      case "cancer":
        compatibilityResult.innerHTML = "Pisces and Cancer share a deep emotional connection and understanding. Both signs value sensitivity, nurturing, and home life. They can have a loving and compassionate partnership based on shared emotional depth, intuition, and a desire to create a safe and nurturing environment.";
        break;
      case "leo":
        compatibilityResult.innerHTML = "Pisces and Leo have different needs and approaches to life. Pisces values emotional connection, sensitivity, and spiritual depth, while Leo seeks recognition, admiration, and a sense of self-importance. They may need to find a balance between these differing needs. Pisces can provide emotional depth and understanding to Leo's life, while Leo can bring passion and enthusiasm to Pisces's life.";
        break;
      case "virgo":
        compatibilityResult.innerHTML = "Pisces and Virgo have different needs and approaches to life. Pisces values emotional connection, sensitivity, and spiritual depth, while Virgo seeks stability, routine, and practicality. They may need to find a balance between these differing needs. Pisces can provide emotional depth and intuition to Virgo's life, while Virgo can bring grounding and practicality to Pisces's life.";
        break;
      case "libra":
        compatibilityResult.innerHTML = "Pisces and Libra share a love for harmony, beauty, and a balanced approach to life. They can have a harmonious and spiritually fulfilling partnership based on shared values, empathy, and a desire to create a peaceful and loving environment.";
        break;
      case "scorpio":
        compatibilityResult.innerHTML = "Pisces and Scorpio can have a deep and intense emotional connection. Both signs value emotional depth, loyalty, and transformation. They can understand each other's needs and provide the support and understanding required for a profound and transformative partnership.";
        break;
      case "sagittarius":
        compatibilityResult.innerHTML = "Pisces and Sagittarius have different needs and approaches to life. Pisces values emotional connection, sensitivity, and spiritual depth, while Sagittarius seeks freedom, exploration, and new experiences. They may need to find a balance between these differing needs. Pisces can provide emotional depth and intuition to Sagittarius's life, while Sagittarius can bring excitement and new perspectives to Pisces's life.";
        break;
      case "capricorn":
        compatibilityResult.innerHTML = "Pisces and Capricorn can have a complementary and supportive relationship. Pisces's emotional depth and intuition can be balanced by Capricorn's practicality and ambition. They can provide each other with stability, emotional support, and a shared vision for the future. Together, they can create a secure and nurturing partnership.";
        break;
      case "aquarius":
        compatibilityResult.innerHTML = "Pisces and Aquarius can have a complementary and inspiring relationship. Pisces's emotional depth and sensitivity can be balanced by Aquarius's innovation and forward-thinking nature. They can support each other's aspirations, share creative endeavors, and create a harmonious partnership based on understanding and mutual growth.";
        break;
        case "pisces":
          compatibilityResult.innerHTML = "Pisces and Pisces can have a deeply empathetic and spiritually connected relationship. Both signs value emotional depth, intuition, and creativity. They can understand each other's emotions and provide the support and understanding needed for a profound and soulful partnership.";
          break;
      default:
        compatibilityResult.innerHTML = "Please select another zodiac sign.";
        break;
    }
  }

  // Reset the compatibility result if signs are changed
  else {
    compatibilityResult.innerHTML = "Please select a valid zodiac sign.";
  }
}
compatibilityResult.innerHTML = "..."; // Replace with the appropriate compatibility description
compatibilityResult.classList.add("fade-in-animation");


