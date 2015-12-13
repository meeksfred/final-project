
<<<<<<< HEAD
//var express = require('express');
//var app = express();


=======
// var express = require('express');
// var app = express();
>>>>>>> 2b4a66e66f1dacffa5a13c7b24401ea07912d20a

var db = {
  capitolHill: [
    {
      id: 'pinebox',
      name: 'pinebox',
      cost: 2,
      type: 'bar',
      outdoor: false,
      kidfriendly: false,
      url: 'http://www.pineboxbar.com/'
    },
    {
      id: 'lilWoodys',
      name: 'lil woodys',
      cost: 1,
      type: 'restaurant',
      outdoor: false,
      kidfriendly: true,
      url: 'http://lilwoodys.com/'
    },
    {
      id: 'lindas',
      name: 'lindas',
      cost: 1,
      type: 'bar',
      outdoor: true,
      kidfriendly: false,
      url: 'http://lindastavern.com/'
    },
    {
      id: 'montana',
      name: 'montana',
      cost: 1,
      type: 'bar',
      outdoor: true,
      kidfriendly: false,
      url: 'http://montanainseattle.com/'
    },
    {
      id: 'neumos',
      name: 'neumos',
      cost: 1,
      type: 'entertainment',
      outdoor: false,
      kidfriendly: false,
      url: 'http://neumos.com/'
    },
    {
      id: 'barboza',
      name: 'barboza',
      cost: 1,
      type: 'entertainment',
      outdoor: false,
      kidfriendly: false,
      url: 'http://thebarboza.com/'
    },
    {
      id: 'calAndersonPark',
      name: 'cal anderson park',
      cost: 1,
      type: 'park',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.seattle.gov/parks/park_detail.asp?id=3102'
    },
    {
      id: 'garage',
      name: 'garage',
      cost: 2,
      type: 'bar',
      outdoor: true,
      kidfriendly: false,
      url: 'http://www.garagebilliards.com/mambo/'
    },
    {
      id: 'volunteerPark',
      name: 'volunteer park',
      cost: 1,
      type: 'park',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.seattle.gov/PARKS/park_detail.asp?id=399'
    },
    {
      id: 'fryeArtMuseum',
      name: 'frye art museum',
      cost: 1,
      type: 'museum',
      outdoor: false,
      kidfriendly: true,
      url: 'http://fryemuseum.org/'
    },
    {
      id: 'tacosChukis',
      name: 'tacos chukis',
      cost: 1,
      type: 'restaurant',
      outdoor: false,
      kidfriendly: true,
      url: 'https://www.facebook.com/TacosChukis/'
    },
    {
      id: 'dicks',
      name: 'dicks drive-in',
      cost: 1,
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.ddir.com/'
    },
    {
      id: 'soi',
      name: 'soi',
      cost: 2,
      type: 'restaurant',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.soicapitolhill.com/'
    },
    {
      id: 'victrola',
      name: 'victrola coffee roasters',
      cost: 1,
      type: 'cafe',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.victrolacoffee.com/'
    },
    {
      id: 'elliotBayBookStore',
      name: 'elliot bay book company',
      cost: 1,
      type: 'library',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.elliottbaybook.com/'
    },
    {
      id: 'elysianBrewing',
      name: 'elysian brewery',
      cost: 2,
      type: 'bar',
      outdoor: false,
      kidfriendly: false,
      url: 'http://www.elysianbrewing.com/'
    },
    {
      id: 'momiji',
      name: 'momiji',
      cost: 2,
      type: 'restaurant',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.momijiseattle.com/'
    },
    {
      id: 'stumptownCoffee',
      name: 'stumptown coffee roasters',
      cost: 1,
      type: 'cafe',
      outdoor: true,
      kidfriendly: true,
      url: 'https://www.stumptowncoffee.com/'
    },
    {
      id: 'rheinHaus',
      name: 'rhein haus',
      cost: 2,
      type: 'restaurant',
      outdoor: true,
      kidfriendly: false,
      url: 'http://rheinhausseattle.com/'
    },
    {
      id: 'mollyMoons',
      name: 'molly moons',
      cost: 1,
      type: 'cafe',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.mollymoon.com/'
    },
    {
      id: 'everydayMusic',
      name: 'everyday music',
      cost: 1,
      type: 'shopping',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.everydaymusic.com/'
    },
    {
      id: 'adasTechnicalBooksCafe',
      name: 'adas technical books and cafe',
      cost: 1,
      type: 'cafe',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.seattletechnicalbooks.com/'
    },
    {
      id: 'oola',
      name: 'oola distillery',
      cost: 2,
      type: 'bar',
      outdoor: false,
      kidfriendly: false,
      url: 'http://ooladistillery.com/'
    },
    {
      id: 'sunDistillery',
      name: 'sun liquor distillery',
      cost: 2,
      type: 'bar',
      outdoor: true,
      kidfriendly: false,
      url: 'http://www.sunliquor.com/'
    },
    {
<<<<<<< HEAD
      id: 'lostLake',
      name: 'lost lake cafe and lounge',
=======
      id: 'lostLakeCafeAndLounge',
      name: 'Lost Lake Cafe and Lounge',
>>>>>>> 2b4a66e66f1dacffa5a13c7b24401ea07912d20a
      cost: 2,
      type: 'restaurant',
      outdoor: false,
      kidfriendly: false,
      url: 'http://lostlakecafe.com/'
    },
    {
      id: 'bakeryNouveau',
      name: 'bakery nouveau',
      cost: 1,
      type: 'cafe',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.bakerynouveau.com/welcome/'
    }
  ],
  queenAnne: [
    {
      id: 'seattleCenter',
      name: 'Seattle Center',
      cost: 1,
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url:'http://www.seattlecenter.com/'
    },
    {
      id: 'chihulyGlass',
      name: 'Chihuly Garden and Glass',
      cost: 2,
      type: 'museum',
      outdoor: false,
      kidfriendly: true,
      url:'http://www.chihulygardenandglass.com/'
    },
    {
      id: 'keyArena',
      name: 'KeyArena',
      cost: 3,
      type: 'entertainment',
      outdoor: false,
      kidfriendly: true,
      url:'http://www.keyarena.com/'
    },
    {
      id: 'hulaHula',
      name: 'Hula Hula',
      cost: 2,
      type: 'bar',
      outdoor: false,
      kidfriendly: false,
      url:'http://hulahula.org/'
    },
    {
      id: 'spaceNeedle',
      name: 'Space Needle',
      cost: 2,
      type: 'attraction',
      outdoor: false,
      kidfriendly: true,
      url:'http://www.spaceneedle.com/home/'
    },
    {
      id: 'emp',
      name: 'EMP',
      cost: 2,
      type: 'museum',
      outdoor: false,
      kidfriendly: true,
      url:'http://www.empmuseum.org/'
    },
    {
      id: 'pacificScienceCenter',
      name: 'Pacific Science Center',
      cost: 1,
      type: 'museum',
      outdoor: false,
      kidfriendly: true,
      url:'https://www.pacificsciencecenter.org/'
    },
    {
      id: 'kerryPark',
      name: 'Kerry Park',
      cost: 1,
      type: 'park',
      outdoor: true,
      kidfriendly: true,
      url:'http://www.seattle.gov/parks/park_detail.asp?ID=342'
    },
    {
      id: 'qaBeerhall',
      name: 'Queen Anne Beerhall',
      cost: 1,
      type: 'bar',
      outdoor: false,
      kidfriendly: false,
      url:'http://www.queenannebeerhall.com/'
    },
    {
      id: 'uptEspresso',
      name: 'Uptown Espresso',
      cost: 1,
      type: 'cafe',
      outdoor: false,
      kidfriendly: true,
      url:'http://www.velvetfoam.com/'
    },
    {
      id: 'elDiablo',
      name:'El Diablo Coffe Co',
      cost: 1,
      type: 'cafe',
      outdoor: false,
      kidfriendly: true,
      url:'http://www.eldiablocoffee.com/'
    },
    {
      id:'caffeLadro',
      name: 'Caffe Ladro',
      cost: 1,
      type: 'cafe',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.caffeladro.com/'
    },
    {
      id:'toulousePetite',
      name: 'Toulouse Petite',
      cost: 2,
      type: 'restaurant',
      outdoor: false,
      kidfriendly: false,
      url:'http://toulousepetit.com/'
    },
    {
      id:'metMarket',
      name:'Metropolitan Market',
      cost: 2,
      type: 'grocery',
      outdoor: false,
      kidfriendly: true,
      url: 'https://metropolitan-market.com/home.php?'
    },
    {
      id: 'mEdPark',
      name: 'Myrtle Edwards Park',
      cost: 1,
      type: 'park',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.seattle.gov/parks/park_detail.asp?ID=311'
    },
    {
      id: 'qaLibrary',
      name: 'Queen Anne Public Library',
      cost: 1,
      type: 'library',
      outdoor: false,
      kidfriendly: true,
      url:'http://www.spl.org/locations/queen-anne-branch'
    },
    {
      id: 'chocolopolis',
      name: 'Chocolopolis',
      cost: 1,
      type: 'shopping',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.chocolopolis.com/'
    },
    {
      id: 'macrinaBakery',
      name: 'Macrina Bakery',
      cost: 1,
      type: 'restaurant',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.macrinabakery.com/'
    },
    {
      id: 'meccaCafe',
      name: 'The Mecca Cafe',
      cost: 1,
      type: 'restaurant',
      outdoor: false,
      kidfriendly: true,
      url: 'http://mecca-cafe.com/'
    },
    {
      id:'cederbergTeaHouse',
      name: 'Cederberg Tea House',
      cost: 1,
      type: 'cafe',
      outdoor: false,
      kidfriendly: true,
      url:'http://cederbergteahouse.com/'
    },
    {
      id:'howToCookaWolf',
      name: 'How to Cook a Wolf',
      cost: 2,
      type: 'restaurant',
      outdoor: false,
      kidfriendly: false,
      url: 'http://www.ethanstowellrestaurants.com/locations/how-to-cook-a-wolf/'
    },
    {
      id: 'mezcaleriaOaxaca',
      name: 'Mezcaleria Oaxaca',
      cost: 2,
      type: 'restaurant',
      outdoor: false,
      kidfriendly: true,
      url:'http://www.mezcaleriaoaxaca.com/MO_QueenAnne/MO_QAnne_home.html'
    },
    {
      id:'canlis',
      name: 'Canlis',
      cost: 3,
      type: 'restaurant',
      outdoor: false,
      kidfriendly: false,
      url:'http://canlis.com/'
    }
  ],
  downtown: [
    {
      id: 'cinerama',
      name: 'Cinerama',
      cost: 1,
      type: 'entertainment',
      outdoor: false,
      kidfriendly: true,
      url: 'https://www.cinerama.com/'
    },
    {
      id:'steinbrueckGallery',
      name: 'Steinbrueck Native Gallery',
      cost: 3,
      type: 'museum',
      outdoor: false,
      kidfriendly: false,
      url:'http://www.steinbruecknativegallery.com/'
    },
    {
      id: 'westLakeShoppingCenter',
      name: 'Westlake Shopping Center',
      cost: 2,
      type: 'shopping',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.westlakecenter.com/en.html'
    },
    {
      id:'pikePlaceMarket',
      name:'Pike Place Market',
      cost: 1,
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url:'http://pikeplacemarket.org/'
    },
    {
      id: 'olympicSculpturePark',
      name: 'Olympic Sculpture Park',
      cost: 1,
      type: 'park',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.seattleartmuseum.org/visit/olympic-sculpture-park'
    },
    {
      id: 'safeCoField',
      name: 'SafeCo Field',
      cost: 3,
      type: 'entertainment',
      outdoor: true,
      kidfriendly: true,
      url:'http://seattle.mariners.mlb.com/sea/ballpark/'
    },
    {
      id: 'centuryLinkField',
      name: 'CenturyLink Field',
      cost: 3,
      type: 'entertainment',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.centurylinkfield.com/'
    },
    {
      id:'waterFront',
      name: 'The Seattle Waterfront',
      cost: 1,
      type: 'park',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.seattle.gov/TOUR/water.htm'
    },
    {
      id: 'ferrisWheel',
      name: 'Seattle Great Wheel',
      cost: 1,
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'http://seattlegreatwheel.com/'
    },
    {
      id: 'columbiaCenter',
      name: 'Columbia Center',
      cost: 1,
      type: 'attraction',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.skyviewobservatory.com/'
    },
    {
      id: 'ferryTerminal',
      name: 'Seattle Ferry Terminal',
      cost: 1,
      type: 'attraction',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.wsdot.wa.gov/ferries/'
    },
    {
      id: 'benaroyaHall',
      name: 'Benaroya Hall',
      cost: 3,
      type: 'entertainment',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.seattlesymphony.org/benaroyahall'
    },
    {
      id: 'umiSakeHouse',
      name: 'Umi Sake House',
      cost: 2,
      type: 'restaurant',
      outdoor: false,
      kidfriendly: false,
      url: 'http://www.umisakehouse.com/'
    },
    {
      id: 'sam',
      name: 'Seattle Art Museum',
      cost: 1,
      type: 'museum',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.seattleartmuseum.org/'
    },
    {
      id: 'seattleAquarium',
      name: 'Seattle Aquarium',
      cost: 2,
      type: 'attraction',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.seattleaquarium.org/'
    },
    {
      id: 'pikeBrewingCo',
      name: 'The Pike Brewing Company',
      cost: 1,
      type: 'bar',
      outdoor: false,
      kidfriendly: false,
      url: 'http://pikebrewing.com/'
    },
    {
      id: 'steelheadDiner',
      name: 'Steelhead Dinner',
      cost: 2,
      type: 'restaurant',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.steelheaddiner.com/'
    },
    {
      id: 'piroshkyPiroshky',
      name: 'Piroshky Piroshky',
      cost: 1,
      type: 'restaurant',
      outdoor: false,
      kidfriendly: true,
      url: 'https://www.piroshkybakery.com/'
    },
    {
      id: 'showbox',
      name: 'The Showbox',
      cost: 2,
      type: 'entertainment',
      outdoor: false,
      kidfriendly: false,
      url: 'http://www.showboxpresents.com/'
    },
    {
      id: 'paramount',
      name: 'The Paramount Theatre',
      cost: 3,
      type: 'entertainment',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.stgpresents.org/paramount'
    },
    {
      id: 'crocodile',
      name: 'The Crocodile',
      cost: 2,
      type: 'entertainment',
      outdoor: false,
      kidfriendly: false,
      url: 'http://www.thecrocodile.com/'
    },
    {
      id: 'moore',
      name: 'The Moore Theatre',
      cost: 3,
      type: 'entertainment',
      outdoor: false,
      kidfriendly: false,
      url: 'http://www.stgpresents.org/moore'
    },
    {
      id: 'seattlePublicLibrary',
      name: 'Seattle Public Library',
      cost: 1,
      type: 'library',
      outdoor: false,
      kidfriendly: false,
      url: 'https://www.spl.org/locations/central-library'
    },
    {
      id: 'undergroundTour',
      name: 'Underground Tour',
      cost: 1,
      type: 'attraction',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.undergroundtour.com/'
    },
    {
      id: 'pioneerSquare',
      name: 'Pioneer Square',
      cost: 1,
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.pioneersquare.org/'
    },
    {
      id: 'scw',
      name: 'Seattle Coffee Works',
      cost: 1,
      type: 'cafe',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.seattlecoffeeworks.com/'
    },
    {
      id: 'biscuitBitch',
      name: 'Biscuit Bitch',
      cost: 1,
      type: 'restaurant',
      outdoor: false,
      kidfriendly: true,
      url: 'http://biscuitbitch.com/'
    }
  ],
  ballard: [
    {
      id: 'goldenGardens',
      name: 'golden gardens',
      cost: 1,
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.seattle.gov/parks/park_detail.asp?ID=243'
    },
    {
      id: 'populuxe',
      name: 'populuxe brewing',
      cost: 1,
      type: 'bar',
      outdoor: true,
      kidfriendly: true,
      url: 'http://populuxebrewing.com'
    },
    {
      id: 'reubens',
      name: 'reubens brewing',
      cost: 1,
      type: 'bar',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.reubensbrews.com/#on-draft'
    },
    {
      id: 'peddler',
      name: 'peddler brewing',
      cost: 1,
      type: 'bar',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.peddlerbrewing.com'
    },
    {
      id: 'locks',
      name: 'ballard locks',
      cost: 1,
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.seattle.gov/TOUR/locks.htm'
    },
    {
      id: 'shilsholeBay',
      name: 'shilshole bay',
      cost: 1,
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'https://www.portseattle.org/Marinas/Shilshole-Bay-Marina/Pages/default.aspx'
    },
      {
      id: 'tractorTavern',
      name: 'tractor tavern',
      cost: 2,
      type: 'entertainment',
      outdoor: false,
      kidfriendly: false,
      url: 'http://www.tractortavern.com'
    },
      {
      id: 'nordicmuseum',
      name: 'nordic heritage museum',
      cost: 1,
      type: 'museum',
      outdoor: true,
      kidfriendly: true,
      url: 'https://www.nordicmuseum.org'
    },
      {
      id: 'bourbonandbones',
      name: 'Bourbon And Bones',
      cost: 1,
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://bourbonandbones.com'
    },
      {
      id: 'sonicBoom',
      name: 'sonic boom',
      cost: 1,
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'https://www.sonicboomrecords.com'
    },
      {
      id: 'consignmentStore',
      name: 'ballard consignment store',
      cost: 1,
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.ballardconsignment.com'
    },
      {
      id: 'laIsla',
      name: 'la isla',
      cost: 1,
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://laislacuisine.com'
    },
      {
      id: 'walrusAndTheCarpenter',
      name: 'walrus and the carpenter',
      cost: 1,
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.thewalrusbar.com'
    },
      {
      id: 'ballardMarket',
      name: 'ballard market',
      cost: 1,
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'http://townandcountrymarkets.com/ballard-market'
    },
      {
      id: 'ballardPizzaCompany',
      name: 'ballard pizza company',
      cost: 1,
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.ballardpizzacompany.com'
    },
    {
      id: 'majesticBayTheatres',
      name: 'majestic bay theatres',
      cost: 1,
      type: 'entertainment',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.majesticbay.com'
    },
        {
      id: 'stoneGardens',
      name: 'stone gardens',
      cost: 1,
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'https://www.stonegardens.com/seattle/default.aspx'
    },
        {
      id: 'corePowerYoga',
      name: 'core power yoga',
      cost: 1,
      type: 'entertainment',
      outdoor: true,
      kidfriendly: true,
      url: 'https://www.corepoweryoga.com/locations/washington/seattle/ballard'
    },
        {
      id: 'ballardFarmersMarket',
      name: 'ballard farmers market',
      cost: 1,
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.sfmamarkets.com/visit-ballard-farmers-market'

    },
        {
      id: 'hotCakes',
      name: 'hot cakes',
      cost: 1,
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.getyourhotcakes.com'
    },
        {
      id: 'ballardAvenueHistoricDistrict',
      name: 'ballard avenue historic district',
      cost: 1,
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'https://en.wikipedia.org/wiki/Ballard_Avenue_Historic_District'
    },
        {
      id: 'ballardCoffeeWorks',
      name: 'ballard coffee works',
      cost: 1,
      type: 'cafe',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.seattlecoffeeworks.com/find-us/cafe-in-ballard-seattle.htm'
    },
        {
      id: 'fishermansTerminal',
      name: 'fishermans terminal',
      cost: 1,
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'https://www.portseattle.org/Commercial-Marine/Fishermens-Terminal/Pages/default.aspx'
    },
        {
      id: 'stoupBrewing',
      name: 'stoup brewing',
      cost: 1,
      type: 'bar',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.stoupbrewing.com'
    },
         {
      id: 'unBien',
      name: 'un bien',
      cost: 1,
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://unbienseattle.com'
    },
         {
      id: 'ballardBeerCompany',
      name: 'ballard beer company',
      cost: 1,
      type: 'bar',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.ballardbeercompany.com'
    },
    {
      id: 'mightyODonuts',
      name: 'mighty o donuts',
      cost: 1,
      type: 'cafe',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.mightyo.com'
    },
         {
      id: 'burkeGilmanTrail',
      name: 'burke gilman trail',
      cost: 1,
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'https://en.wikipedia.org/wiki/Burke-Gilman_Trail'
    },
         {
      id: 'bauhaus',
      name: 'bauhaus',
      cost: 1,
      type: 'cafe',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.bauhaus.coffee'
    }
    ],
    fremont: [
        {
      id: 'fremontBrewingCompany',
      name: 'fremont brewing company',
      cost: 1,
      type: 'bar',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.fremontbrewing.com'
    },
        {
      id: 'fremontVintageMall',
      name: 'fremont vintage mall',
      cost: 1,
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'http://fremontvintagemall.com'
    },
        {
      id: 'cafeTurko',
      name: 'cafe turko',
      cost: 1,
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://cafe-turko.com/'
    },
        {
      id: 'milsteadCoffeeCompany',
      name: 'milstead coffee company',
      cost: 1,
      type: 'cafe',
      outdoor: true,
      kidfriendly: true,
      url: 'https://www.facebook.com/milsteadandco'
    },
    {
      id: 'jiveTimeRecords',
      name: 'jive time records',
      cost: 1,
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'http://jivetimerecords.com'
    },
         {
      id: 'dustyStrings',
      name: 'dusty strings',
      cost: 1,
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.dustystrings.com'
    },
        {
      id: 'pcc',
      name: 'pcc',
      cost: 1,
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.pccnaturalmarkets.com/locations/fr.html'
    },
        {
      id: 'fremontFarmersMarket',
      name: 'fremont farmers market',
      cost: 1,
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.fremontmarket.com/'
    },
        {
      id: 'norms',
      name: 'norms',
      cost: 1,
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://normseatery.com/'
    },
      {
      id: 'outlanderBrewing',
      name: 'outlanderBrewing',
      cost: 1,
      type: 'bar',
      outdoor: true,
      kidfriendly: true,
      url: 'http://outlanderbrewing.com/'
    },
    {
      id: 'nectarLounge',
      name: 'nectar lounge',
      cost: 1,
      type: 'bar',
      outdoor: true,
      kidfriendly: true,
      url: 'http://nectarlounge.com/'
    },
      {
      id: 'theBallroom',
      name: 'the ballroom',
      cost: 1,
      type: 'bar',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.ballroomfremont.com'
    },
      {
      id: 'statueOfLenin',
      name: 'statue of lenin',
      cost: 1,
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'https://en.wikipedia.org/wiki/Statue_of_Lenin,_Seattle'
    },
      {
      id: 'theoChocolateCompany',
      name: 'theo chocolate company',
      cost: 1,
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'https://www.theochocolate.com/'
    },
      {
      id: 'essentialBakingCompany',
      name: 'essential baking company',
      cost: 1,
      type: 'cafe',
      outdoor: true,
      kidfriendly: true,
      url: 'http://essentialbaking.com/'
    },
      {
      id: 'frellardPizzaCompany',
      name: 'frellard pizza company',
      cost: 1,
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.ballardpizzacompany.com/'
    },
      {
      id: 'gasworks',
      name: 'gasworks',
      cost: 1,
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'https://en.wikipedia.org/wiki/Gas_Works_Park'
    },
      {
      id: 'recycledCycles',
      name: 'recycled cycles',
      cost: 1,
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.recycledcycles.com/'
    },
      {
      id: 'burkeGilmanTrail',
      name: 'burke gilman trail',
      cost: 1,
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'https://en.wikipedia.org/wiki/Burke-Gilman_Trail'
    },
         {
      id: 'fremontTroll',
      name: 'fremont troll',
      cost: 1,
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'http://fremont.com/about/fremonttroll-html/'
    },
    {
      id: 'hotelHotel',
      name: 'hotel hotel',
      cost: 1,
      type: 'bar',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.yelp.com/biz/hotel-hotel-seattle'
    },
      {
      id: 'luckysPho',
      name: 'lucky\'s pho',
      cost: 1,
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.yelp.com/biz/luckys-pho-seattle'
    },
      {
      id: 'revel',
      name: 'revel',
      cost: 1,
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.revelseattle.com/'
    },
      {
      id: 'chisoSushi',
      name: 'chiso sushi',
      cost: 1,
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url:'http://www.chisofremont.com/'
    }
  ]
};


// app.get('/capitolHill', function(req, res) {
//   res.json(db.capitolHill);
// });

// app.get('/queenAnne', function(req, res) {
//   res.json(db.queenAnne);
// });

// app.get('/downtown', function(req, res) {
//   res.json(db.downtown);
// });

// app.get('/ballard', function(req, res) {
//   res.json(db.ballard);
// });

// app.get('/fremont', function(req, res) {
//   res.json(db.fremont);
// });

// app.get('/ballard/:id', function(req, res){
//   var id = req.params.id;
//   db.ballard.forEach(function(thing){
//     if(thing.id === id){
//       res.json(thing);
//     }
//   });
// });

// app.get('/fremont/:id', function(req, res){
//   var id = req.params.id;
//   db.fremont.forEach(function(thing){
//     if(thing.id === id){
//       res.json(thing);
//     }
//   });
// });

// app.get('/downtown/:id', function(req, res){
//   var id = req.params.id;
//   db.downtown.forEach(function(thing){
//     if(thing.id === id){
//       res.json(thing);
//     }
//   });
// });

// app.get('/capitolHill/:id', function(req, res){
//   var id = req.params.id;
//   db.capitolHill.forEach(function(thing){
//     if(thing.id === id){
//       res.json(thing);
//     }
//   });
// });

// app.get('/queenAnne/:id', function(req, res){
//   var id = req.params.id;
//   db.queenAnne.forEach(function(thing){
//     if(thing.id === id){
//       res.json(thing);
//     }
//   });
// });



// // app.listen(3000, function() {
// //   console.log('server started');
// // });

