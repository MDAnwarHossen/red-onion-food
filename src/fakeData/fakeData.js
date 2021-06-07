const fakeData = [
    {
      "id": "1",
      "img": "https://i.ibb.co/v41Pp2g/breakfast1.png",
      "title": "Rhubard and custard cake",
      "shortDescription": "A biting, tangy, tart flavor.",
      "longDescription":
        "A food that becomes moistened by having a flavorful coating dripped or brushed onto its surface. May result in a glossy appearance and thin, crisp outer layer.",
      "price": "9.99",
      "Category": "Breakfast",
      "dataAos": "fade-right",
      "quantity": 1
    },
    {
        "id": "2",
        "img": "https://i.ibb.co/pRmj6NS/breakfast2.png",
        "title": "Sticky toffee pudding",
        "shortDescription": "A tender, juicy texture.",
        "longDescription":
          "Food that is cooked by submerging partially or fully into hot oil. Often results in a crispy or crunchy texture and golden color.",
        "price": "19.99",
        "Category": "Breakfast",
        "dataAos": "fade-down",
        "quantity": 1
      },
      {
        "id": "3",
        "img": "https://i.ibb.co/Qfp6MSn/breakfast3.png",
        "title": "Spence bakery croissant",
        "shortDescription": "A light texture characterized by layers that come apart during eating.",
        "longDescription":
          "A food that is cooked in a small amount of fat until caramelized and then finished by roasting, grilling, or another method. Results in a crisp outer texture and tender interior.",
        "price": "7.99",
        "Category": "Breakfast",
        "dataAos": "fade-left",
        "quantity": 1
      },
      {
        "id": "4",
        "img": "https://i.ibb.co/rMJDXYw/breakfast4.png",
        "title": "Sausage, caramelised onion & mustard",
        "shortDescription": "A firm, robust texture.",
        "longDescription":
          "Food that is grilled, roasted, or broiled and gains a blackened exterior coupled with a smoky flavor. A food that has been cooked slowly until it is browned and becomes sweeter in taste.",
        "price": "11.99",
        "Category": "Breakfast",
        "dataAos": "fade-right",
        "quantity": 1
      },
      {
        "id": "5",
        "img": "https://i.ibb.co/bgZRWxx/breakfast5.png",
        "title": "Maldon rock oysters",
        "shortDescription": "A light texture characterized by layers that come apart during eating.",
        "longDescription":
          "Food that was scalded in boiling water and then moved to cold water to stop cooking. Results in a softened texture. A food that has been cooked slowly until it is browned and becomes sweeter in taste.",
        "price": "14.99",
        "Category": "Breakfast",
        "dataAos": "fade-down",
        "quantity": 1
      },
      {
        "id": "6",
        "img": "https://i.ibb.co/X5Qhmmx/breakfast6.png",
        "title": "Juracon Clos Uroulat, Charles Hours",
        "shortDescription": "A smooth and rich texture that usually comes from the incorporation of dairy.",
        "longDescription":
          "A food that is cooked in a small amount of fat until caramelized and then finished by roasting, grilling, or another method. Results in a crisp outer texture and tender interior.",
        "price": "5.99",
        "Category": "Breakfast",
        "dataAos": "fade-left",
        "quantity": 1
      },
      {
        "id": "7",
        "img": "https://i.ibb.co/ZXJV93v/lunch1.png",
        "title": "Solio de Valdiserre. Isabella della Croce ",
        "shortDescription": "A texture characterized by gluiness in the mouth.",
        "longDescription":
          "Food that is grilled, roasted, or broiled and gains a blackened exterior coupled with a smoky flavor. A food that has been cooked slowly until it is browned and becomes sweeter in taste.",
        "price": "9.99",
        "Category": "Lunch",
        "dataAos": "fade-right",
        "quantity": 1
      },
      {
        "id": "8",
        "img": "https://i.ibb.co/V9bJf9y/lunch2.png",
        "title": "Loazzolo DOC, Piemonte, Italy",
        "shortDescription": "A smooth and creamy texture similar to that of butter.",
        "longDescription":
          "A food (usually meat) that has been soaked in liquid containing flavorful ingredients like herbs, spices, vinegar, and oil. A food that has been cooked slowly until it is browned and becomes sweeter in taste.",
        "price": "11.99",
        "Category": "Lunch",
        "dataAos": "fade-down",
        "quantity": 1
      },
      {
        "id": "9",
        "img": "https://i.ibb.co/gZWFGQk/lunch3.png",
        "title": "Beer battered haddock, triple cooked chips, mushy peas & tartare",
        "shortDescription": "A firm, robust texture.",
        "longDescription":
          "A food that becomes moistened by having a flavorful coating dripped or brushed onto its surface. May result in a glossy appearance and thin, crisp outer layer. A food that has been cooked slowly until it is browned and becomes sweeter in taste.",
        "price": "15.99",
        "Category": "Lunch",
        "dataAos": "fade-left",
        "quantity": 1
      },
      {
        "id": "10",
        "img": "https://i.ibb.co/wsb45Px/lunch4.png",
        "title": "Hermitage Chez Richon 1987, Grande Champagne",
        "shortDescription": "The texture of a food with a hard outer layer and soft interior.",
        "longDescription":
          "Food that has been cooked in nearly boiling liquid. Often results in a tender, moist texture. A food that was cooked in an oven, often resulting in a crispy outer coating. A food that has been cooked slowly until it is browned and becomes sweeter in taste.",
        "price": "5.99",
        "Category": "Lunch",
        "dataAos": "fade-right",
        "quantity": 1
      },
      {
        "id": "11",
        "img": "https://i.ibb.co/hV1y9PT/lunch5.png",
        "title": "GRILLED RADICCHIO",
        "shortDescription": "Raisins, salted walnuts, baked goats cheese",
        "longDescription":
          "Food that has been beaten to incorporate air. Often results in a light, fluffy texture. Results in a seared, crispy exterior coupled with a tender interior texture. A food that was cooked in an oven, often resulting in a crispy outer coating",
        "price": "7.99",
        "Category": "Lunch",
        "dataAos": "fade-down",
        "quantity": 1
      },
      {
        "id": "12",
        "img": "https://i.ibb.co/ZGZnR8K/lunch6.png",
        "title": "HAGGIS SCOTCH EGG",
        "shortDescription": "Bramley apple and whisky sauce",
        "longDescription":
          "A food that was cooked in an oven, often resulting in a crispy outer coating. food that was scalded in boiling water and then moved to cold water to stop cooking. Results in a softened texture.",
        "price": "7.99",
        "Category": "Lunch",
        "dataAos": "fade-left",
        "quantity": 1
      },
      {
        "id": "13",
        "img": "https://i.ibb.co/6Zqb4WD/dinner1.png",
        "title": "DEGREE LAMB NECK FILLET",
        "shortDescription": "Swede confit in lamb dripping, pearl barley, lord of hundreds",
        "longDescription":
          "A food (usually meat) that has been soaked in liquid containing flavorful ingredients like herbs, spices, vinegar, and oil.. food that was scalded in boiling water and then moved to cold water to stop cooking. Results in a softened texture.",
        "price": "15.99",
        "Category": "Dinner",
        "dataAos": "fade-right",
        "quantity": 1
      },
      {
        "id": "14",
        "img": "https://i.ibb.co/mc8pVCV/dinner2.png",
        "title": "FISH AND CHIPS",
        "shortDescription": "Beer battered haddock, minted peas, tartare sauce",
        "longDescription":
          "Food that is cooked or preserved by long exposure to smoke from smoldering wood. Results in a distinctive, bold flavor. food that was scalded in boiling water and then moved to cold water to stop cooking. Results in a softened texture.",
        "price": "15.99",
        "Category": "Dinner",
        "dataAos": "fade-down",
        "quantity": 1
      },
      {
        "id": "15",
        "img": "https://i.ibb.co/JpKT7L0/dinner3.png",
        "title": "ENGLISH BURRATA",
        "shortDescription": "Roasted onion squash, sage, toasted pumpkin seeds",
        "longDescription":
          "A food that becomes moistened by having a flavorful coating dripped or brushed onto its surface. May result in a glossy appearance and thin, crisp outer layer. Food that is cooked by submerging partially or fully into hot oil.",
        "price": "8.99",
        "Category": "Dinner",
        "dataAos": "fade-left",
        "quantity": 1
      },
      {
        "id": "16",
        "img": "https://i.ibb.co/5BKnQpn/dinner4.png",
        "title": "ROASTED CAULIFLOWER FLORETS",
        "shortDescription": "Biffin apple, Colmans English mustard, Binham blue cheese",
        "longDescription":
          "Food that has been beaten to incorporate air. Often results in a light, fluffy texture. May result in a glossy appearance and thin, crisp outer layer. Food that is cooked by submerging partially or fully into hot oil.",
        "price": "7.99",
        "Category": "Dinner",
        "dataAos": "fade-right",
        "quantity": 1
      },
      {
        "id": "17",
        "img": "https://i.ibb.co/CJYbM3Y/dinner5.png",
        "title": "COLD PRESSED JUICES",
        "shortDescription": "BEETROOT, APPLE, GINGER, CARROT",
        "longDescription":
          "Food that has been cooked in nearly boiling liquid. Often results in a tender, moist texture. May result in a glossy appearance and thin, crisp outer layer. Food that is cooked by submerging partially or fully into hot oil.",
        "price": "6.99",
        "Category": "Dinner",
        "dataAos": "fade-down",
        "quantity": 1
      },
      {
        "id": "18",
        "img": "https://i.ibb.co/7gLqvC0/dinner6.png",
        "title": "SMOOTHIES",
        "shortDescription": "BLUEBERRY, RASPBERRY, STRAWBERRY",
        "longDescription":
          "A food that has been steeped in liquid with another ingredient in order to extract the flavor of the ingredient. Often used with herbs. crisp outer layer. Food that is cooked by submerging partially or fully into hot oil.",
        "price": "8.99",
        "Category": "Dinner",
        "dataAos": "fade-left",
        "quantity": 1
      },
    
    
  ];
  
  export default fakeData;