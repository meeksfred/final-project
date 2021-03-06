
// var express = require('express');
// var app = express();


var db = {
  capitolHill: [
    {
      id: 'pinebox',
      name: 'Pinebox',
      cost: "$",
      type: 'bar',
      outdoor: false,
      kidfriendly: false,
      url: 'http://www.pineboxbar.com'
    },
    {
      id: 'lilWoodys',
      name: 'Lil Woodys',
      cost: "$",
      type: 'restaurant',
      outdoor: false,
      kidfriendly: true,
      url: 'http://lilwoodys.com'
    },
    {
      id: 'lindas',
      name: 'Lindas',
      cost: "$",
      type: 'bar',
      outdoor: true,
      kidfriendly: false,
      url: 'http://lindastavern.com'
    },
    {
      id: 'montana',
      name: 'Montana',
      cost: "$",
      type: 'bar',
      outdoor: true,
      kidfriendly: false,
      url: 'http://montanainseattle.com'
    },
    {
      id: 'neumos',
      name: 'Neumos',
      cost: "$$",
      type: 'entertainment',
      outdoor: false,
      kidfriendly: false,
      url: 'http://neumos.com'
    },
    {
      id: 'barboza',
      name: 'Barboza',
      cost: "$",
      type: 'entertainment',
      outdoor: false,
      kidfriendly: false,
      url: 'http://thebarboza.com'
    },
    {
      id: 'calAndersonPark',
      name: 'Cal Anderson Park',
      cost: "$",
      type: 'park',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.seattle.gov/parks/park_detail.asp?id=3102'
    },
    {
      id: 'garage',
      name: 'Garage',
      cost: "$$",
      type: 'bar',
      outdoor: true,
      kidfriendly: false,
      url: 'http://www.garagebilliards.com/mambo'
    },
    {
      id: 'volunteerPark',
      name: 'Volunteer Park',
      cost: "$",
      type: 'park',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.seattle.gov/PARKS/park_detail.asp?id=399'
    },
    {
      id: 'fryeArtMuseum',
      name: 'Frye Art Museum',
      cost: "$",
      type: 'museum',
      outdoor: false,
      kidfriendly: true,
      url: 'http://fryemuseum.org'
    },
    {
      id: 'tacosChukis',
      name: 'Tacos Chukis',
      cost: "$",
      type: 'restaurant',
      outdoor: false,
      kidfriendly: true,
      url: 'https://www.facebook.com/TacosChukis'
    },
    {
      id: 'dicks',
      name: 'Dicks Drive-In',
      cost: "$",
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.ddir.com'
    },
    {
      id: 'soi',
      name: 'Soi',
      cost: "$$",
      type: 'restaurant',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.soicapitolhill.com'
    },
    {
      id: 'victrola',
      name: 'Victrola Coffee Roasters',
      cost: "$",
      type: 'cafe',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.victrolacoffee.com'
    },
    {
      id: 'elliotBayBookStore',
      name: 'Elliot Bay Book Company',
      cost: "$",
      type: 'library',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.elliottbaybook.com'
    },
    {
      id: 'elysianBrewing',
      name: 'Elysian Brewery',
      cost: "$$",
      type: 'bar',
      outdoor: false,
      kidfriendly: false,
      url: 'http://www.elysianbrewing.com'
    },
    {
      id: 'momiji',
      name: 'Momiji',
      cost: "$$",
      type: 'restaurant',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.momijiseattle.com'
    },
    {
      id: 'stumptownCoffee',
      name: 'Stumptown Coffee Roasters',
      cost: "$",
      type: 'cafe',
      outdoor: true,
      kidfriendly: true,
      url: 'https://www.stumptowncoffee.com'
    },
    {
      id: 'rheinHaus',
      name: 'Rhein Haus',
      cost: "$$",
      type: 'restaurant',
      outdoor: true,
      kidfriendly: false,
      url: 'http://rheinhausseattle.com'
    },
    {
      id: 'mollyMoons',
      name: 'Molly Moons',
      cost: "$",
      type: 'cafe',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.mollymoon.com'
    },
    {
      id: 'everydayMusic',
      name: 'Everyday Music',
      cost: "$$",
      type: 'shopping',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.everydaymusic.com'
    },
    {
      id: 'adasTechnicalBooksCafe',
      name: 'Adas Technical Books and Cafe',
      cost: "$$",
      type: 'cafe',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.seattletechnicalbooks.com'
    },
    {
      id: 'oola',
      name: 'Oola Distillery',
      cost: "$$$",
      type: 'bar',
      outdoor: false,
      kidfriendly: false,
      url: 'http://ooladistillery.com'
    },
    {
      id: 'sunDistillery',
      name: 'Sun Liquor Distillery',
      cost: "$$",
      type: 'bar',
      outdoor: true,
      kidfriendly: false,
      url: 'http://www.sunliquor.com'
    },
    {
      id: 'lostLake',
      name: 'Lost Lake Cafe and Lounge',
      cost: "$$",
      type: 'restaurant',
      outdoor: false,
      kidfriendly: false,
      url: 'http://lostlakecafe.com'
    },
    {
      id: 'bakeryNouveau',
      name: 'Bakery Nouveau',
      cost: "$",
      type: 'cafe',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.bakerynouveau.com/welcome'
    }
  ],
  queenAnne: [
    {
      id: 'seattleCenter',
      name: 'Seattle Center',
      cost: "$",
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url:'http://www.seattlecenter.com'
    },
    {
      id: 'chihulyGlass',
      name: 'Chihuly Garden and Glass',
      cost: "$$",
      type: 'museum',
      outdoor: false,
      kidfriendly: true,
      url:'http://www.chihulygardenandglass.com'
    },
    {
      id: 'keyArena',
      name: 'KeyArena',
      cost: "$$$",
      type: 'entertainment',
      outdoor: false,
      kidfriendly: true,
      url:'http://www.keyarena.com'
    },
    {
      id: 'hulaHula',
      name: 'Hula Hula',
      cost: "$$",
      type: 'bar',
      outdoor: false,
      kidfriendly: false,
      url:'http://hulahula.org'
    },
    {
      id: 'spaceNeedle',
      name: 'Space Needle',
      cost: "$$",
      type: 'attraction',
      outdoor: false,
      kidfriendly: true,
      url:'http://www.spaceneedle.com/home'
    },
    {
      id: 'emp',
      name: 'EMP',
      cost: "$$",
      type: 'museum',
      outdoor: false,
      kidfriendly: true,
      url:'http://www.empmuseum.org'
    },
    {
      id: 'pacificScienceCenter',
      name: 'Pacific Science Center',
      cost: "$",
      type: 'museum',
      outdoor: false,
      kidfriendly: true,
      url:'https://www.pacificsciencecenter.org'
    },
    {
      id: 'kerryPark',
      name: 'Kerry Park',
      cost: "$",
      type: 'park',
      outdoor: true,
      kidfriendly: true,
      url:'http://www.seattle.gov/parks/park_detail.asp?ID=342'
    },
    {
      id: 'queenAnneBeerhall',
      name: 'Queen Anne Beerhall',
      cost: "$",
      type: 'bar',
      outdoor: false,
      kidfriendly: false,
      url:'http://www.queenannebeerhall.com'
    },
    {
      id: 'uptownEspresso',
      name: 'Uptown Espresso',
      cost: "$",
      type: 'cafe',
      outdoor: false,
      kidfriendly: true,
      url:'http://www.velvetfoam.com'
    },
    {
      id: 'elDiablo',
      name:'El Diablo Coffee Co',
      cost: "$",
      type: 'cafe',
      outdoor: false,
      kidfriendly: true,
      url:'http://www.eldiablocoffee.com'
    },
    {
      id:'caffeLadro',
      name: 'Caffe Ladro',
      cost: "$",
      type: 'cafe',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.caffeladro.com'
    },
    {
      id:'toulousePetite',
      name: 'Toulouse Petite',
      cost: "$$",
      type: 'restaurant',
      outdoor: false,
      kidfriendly: false,
      url:'http://toulousepetit.com'
    },
    {
      id:'metMarket',
      name:'Metropolitan Market',
      cost: "$$",
      type: 'grocery',
      outdoor: false,
      kidfriendly: true,
      url: 'https://metropolitan-market.com/home.php?'
    },
    {
      id: 'myrtleEdwardsPark',
      name: 'Myrtle Edwards Park',
      cost: "$",
      type: 'park',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.seattle.gov/parks/park_detail.asp?ID=311'
    },
    {
      id: 'queenAnnePublicLibrary',
      name: 'Queen Anne Public Library',
      cost: "$",
      type: 'library',
      outdoor: false,
      kidfriendly: true,
      url:'http://www.spl.org/locations/queen-anne-branch'
    },
    {
      id: 'chocolopolis',
      name: 'Chocolopolis',
      cost: "$",
      type: 'shopping',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.chocolopolis.com'
    },
    {
      id: 'macrinaBakery',
      name: 'Macrina Bakery',
      cost: "$",
      type: 'restaurant',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.macrinabakery.com'
    },
    {
      id: 'meccaCafe',
      name: 'The Mecca Cafe',
      cost: "$",
      type: 'restaurant',
      outdoor: false,
      kidfriendly: true,
      url: 'http://mecca-cafe.com'
    },
    {
      id:'cederbergTeaHouse',
      name: 'Cederberg Tea House',
      cost: "$",
      type: 'cafe',
      outdoor: false,
      kidfriendly: true,
      url:'http://cederbergteahouse.com'
    },
    {
      id:'howToCookAWolf',
      name: 'How to Cook a Wolf',
      cost: "$$",
      type: 'restaurant',
      outdoor: false,
      kidfriendly: false,
      url: 'http://www.ethanstowellrestaurants.com/locations/how-to-cook-a-wolf'
    },
    {
      id: 'mezcaleriaOaxaca',
      name: 'Mezcaleria Oaxaca',
      cost: "$$",
      type: 'restaurant',
      outdoor: false,
      kidfriendly: true,
      url:'http://www.mezcaleriaoaxaca.com/MO_QueenAnne/MO_QAnne_home.html'
    },
    {
      id:'canlis',
      name: 'Canlis',
      cost: "$$$",
      type: 'restaurant',
      outdoor: false,
      kidfriendly: false,
      url:'http://canlis.com'
    }
  ],
  downtown: [
    {
      id: 'cinerama',
      name: 'Cinerama',
      cost: "$",
      type: 'entertainment',
      outdoor: false,
      kidfriendly: true,
      url: 'https://www.cinerama.com'
    },
    {
      id:'steinbrueckGallery',
      name: 'Steinbrueck Native Gallery',
      cost: "$$$",
      type: 'museum',
      outdoor: false,
      kidfriendly: false,
      url:'http://www.steinbruecknativegallery.com'
    },
    {
      id: 'westLakeShoppingCenter',
      name: 'Westlake Shopping Center',
      cost: "$$",
      type: 'shopping',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.westlakecenter.com/en.html'
    },
    {
      id:'pikePlaceMarket',
      name:'Pike Place Market',
      cost: "$",
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url:'http://pikeplacemarket.org'
    },
    {
      id: 'olympicSculpturePark',
      name: 'Olympic Sculpture Park',
      cost: "$",
      type: 'park',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.seattleartmuseum.org/visit/olympic-sculpture-park'
    },
    {
      id: 'safeCoField',
      name: 'SafeCo Field',
      cost: "$$$",
      type: 'entertainment',
      outdoor: true,
      kidfriendly: true,
      url:'http://seattle.mariners.mlb.com/sea/ballpark'
    },
    {
      id: 'centuryLinkField',
      name: 'CenturyLink Field',
      cost: "$$$",
      type: 'entertainment',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.centurylinkfield.com'
    },
    {
      id:'waterFront',
      name: 'The Seattle Waterfront',
      cost: "$",
      type: 'park',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.seattle.gov/TOUR/water.htm'
    },
    {
      id: 'ferrisWheel',
      name: 'Seattle Great Wheel',
      cost: "$",
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'http://seattlegreatwheel.com'
    },
    {
      id: 'columbiaCenter',
      name: 'Columbia Center',
      cost: "$",
      type: 'attraction',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.skyviewobservatory.com'
    },
    {
      id: 'ferryTerminal',
      name: 'Seattle Ferry Terminal',
      cost: "$",
      type: 'attraction',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.wsdot.wa.gov/ferries'
    },
    {
      id: 'benaroyaHall',
      name: 'Benaroya Hall',
      cost: "$$$",
      type: 'entertainment',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.seattlesymphony.org/benaroyahall'
    },
    {
      id: 'umiSakeHouse',
      name: 'Umi Sake House',
      cost: "$$",
      type: 'restaurant',
      outdoor: false,
      kidfriendly: false,
      url: 'http://www.umisakehouse.com'
    },
    {
      id: 'sam',
      name: 'Seattle Art Museum',
      cost: "$$",
      type: 'museum',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.seattleartmuseum.org'
    },
    {
      id: 'seattleAquarium',
      name: 'Seattle Aquarium',
      cost: "$$$",
      type: 'attraction',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.seattleaquarium.org'
    },
    {
      id: 'pikeBrewingCo',
      name: 'The Pike Brewing Company',
      cost: "$$",
      type: 'bar',
      outdoor: false,
      kidfriendly: false,
      url: 'http://pikebrewing.com'
    },
    {
      id: 'steelheadDiner',
      name: 'Steelhead Diner',
      cost: "$$",
      type: 'restaurant',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.steelheaddiner.com'
    },
    {
      id: 'piroshkyPiroshky',
      name: 'Piroshky Piroshky',
      cost: "$",
      type: 'restaurant',
      outdoor: false,
      kidfriendly: true,
      url: 'https://www.piroshkybakery.com'
    },
    {
      id: 'showbox',
      name: 'The Showbox',
      cost: "$$",
      type: 'entertainment',
      outdoor: false,
      kidfriendly: false,
      url: 'http://www.showboxpresents.com'
    },
    {
      id: 'paramount',
      name: 'The Paramount Theatre',
      cost: "$$$",
      type: 'entertainment',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.stgpresents.org/paramount'
    },
    {
      id: 'crocodile',
      name: 'The Crocodile',
      cost: "$$",
      type: 'entertainment',
      outdoor: false,
      kidfriendly: false,
      url: 'http://www.thecrocodile.com'
    },
    {
      id: 'moore',
      name: 'The Moore Theatre',
      cost: "$$$",
      type: 'entertainment',
      outdoor: false,
      kidfriendly: false,
      url: 'http://www.stgpresents.org/moore'
    },
    {
      id: 'seattlePublicLibrary',
      name: 'Seattle Public Library',
      cost: "$",
      type: 'library',
      outdoor: false,
      kidfriendly: false,
      url: 'https://www.spl.org/locations/central-library'
    },
    {
      id: 'undergroundTour',
      name: 'Underground Tour',
      cost: "$",
      type: 'attraction',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.undergroundtour.com'
    },
    {
      id: 'pioneerSquare',
      name: 'Pioneer Square',
      cost: "$",
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.pioneersquare.org'
    },
    {
      id: 'seattleCoffeeWorks',
      name: 'Seattle Coffee Works',
      cost: "$",
      type: 'cafe',
      outdoor: false,
      kidfriendly: true,
      url: 'http://www.seattlecoffeeworks.com'
    },
    {
      id: 'biscuitBitch',
      name: 'Biscuit Bitch',
      cost: "$",
      type: 'restaurant',
      outdoor: false,
      kidfriendly: true,
      url: 'http://biscuitbitch.com'
    }
  ],
  ballard: [
    {
      id: 'goldenGardens',
      name: 'Golden Gardens',
      cost: "$",
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.seattle.gov/parks/park_detail.asp?ID=243'
    },
    {
      id: 'populuxe',
      name: 'Populuxe Brewing',
      cost: "$",
      type: 'bar',
      outdoor: true,
      kidfriendly: true,
      url: 'http://populuxebrewing.com'
    },
    {
      id: 'reubens',
      name: 'Reubens Brewing',
      cost: "$",
      type: 'bar',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.reubensbrews.com/#on-draft'
    },
    {
      id: 'peddler',
      name: 'Peddler Brewing',
      cost: "$",
      type: 'bar',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.peddlerbrewing.com'
    },
    {
      id: 'locks',
      name: 'Ballard Locks',
      cost: "$",
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.seattle.gov/TOUR/locks.htm'
    },
    {
      id: 'shilsholeBay',
      name: 'Shilshole Bay',
      cost: "$",
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'https://www.portseattle.org/Marinas/Shilshole-Bay-Marina/Pages/default.aspx'
    },
      {
      id: 'tractorTavern',
      name: 'Tractor Tavern',
      cost: "$$",
      type: 'entertainment',
      outdoor: false,
      kidfriendly: false,
      url: 'http://www.tractortavern.com'
    },
      {
      id: 'nordicmuseum',
      name: 'Nordic Heritage Museum',
      cost: "$",
      type: 'museum',
      outdoor: true,
      kidfriendly: true,
      url: 'https://www.nordicmuseum.org'
    },
      {
      id: 'bourbonandbones',
      name: 'Bourbon And Bones',
      cost: "$$$",
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://bourbonandbones.com'
    },
      {
      id: 'sonicBoom',
      name: 'Sonic Boom',
      cost: "$",
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'https://www.sonicboomrecords.com'
    },
      {
      id: 'consignmentStore',
      name: 'Ballard Consignment Store',
      cost: "$",
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.ballardconsignment.com'
    },
      {
      id: 'laIsla',
      name: 'La Isla',
      cost: "$",
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://laislacuisine.com'
    },
      {
      id: 'walrusAndTheCarpenter',
      name: 'Walrus and the Carpenter',
      cost: "$",
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.thewalrusbar.com'
    },
      {
      id: 'ballardMarket',
      name: 'Ballard Market',
      cost: "$",
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'http://townandcountrymarkets.com/ballard-market'
    },
      {
      id: 'ballardPizzaCompany',
      name: 'Ballard Pizza Company',
      cost: "$",
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.ballardpizzacompany.com'
    },
    {
      id: 'majesticBayTheatres',
      name: 'Majestic Bay Theatres',
      cost: "$",
      type: 'entertainment',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.majesticbay.com'
    },
        {
      id: 'stoneGardens',
      name: 'Stone Gardens',
      cost: "$",
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'https://www.stonegardens.com/seattle/default.aspx'
    },
        {
      id: 'corePowerYoga',
      name: 'Core Power Yoga',
      cost: "$",
      type: 'entertainment',
      outdoor: true,
      kidfriendly: true,
      url: 'https://www.corepoweryoga.com/locations/washington/seattle/ballard'
    },
        {
      id: 'ballardFarmersMarket',
      name: 'Ballard Farmers Market',
      cost: "$",
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.sfmamarkets.com/visit-ballard-farmers-market'

    },
        {
      id: 'hotCakes',
      name: 'Hot Cakes',
      cost: "$",
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.getyourhotcakes.com'
    },
        {
      id: 'ballardAvenueHistoricDistrict',
      name: 'Ballard Avenue Historic District',
      cost: "$",
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'https://en.wikipedia.org/wiki/Ballard_Avenue_Historic_District'
    },
        {
      id: 'ballardCoffeeWorks',
      name: 'Ballard Coffee Works',
      cost: "$",
      type: 'cafe',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.seattlecoffeeworks.com/find-us/cafe-in-ballard-seattle.htm'
    },
        {
      id: 'fishermansTerminal',
      name: 'Fishermans Terminal',
      cost: "$",
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'https://www.portseattle.org/Commercial-Marine/Fishermens-Terminal/Pages/default.aspx'
    },
        {
      id: 'stoupBrewing',
      name: 'Stoup Brewing',
      cost: "$",
      type: 'bar',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.stoupbrewing.com'
    },
         {
      id: 'unBien',
      name: 'Un Bien',
      cost: "$",
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://unbienseattle.com'
    },
         {
      id: 'ballardBeerCompany',
      name: 'Ballard Beer Company',
      cost: "$$",
      type: 'bar',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.ballardbeercompany.com'
    },
    {
      id: 'mightyODonuts',
      name: 'Mighty O Donuts',
      cost: "$",
      type: 'cafe',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.mightyo.com'
    },
         {
      id: 'burkeGilmanTrail',
      name: 'Burke Gilman Trail',
      cost: "$",
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'https://en.wikipedia.org/wiki/Burke-Gilman_Trail'
    },
         {
      id: 'bauhaus',
      name: 'Bauhaus',
      cost: "$",
      type: 'cafe',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.bauhaus.coffee'
    }
    ],
    fremont: [
        {
      id: 'fremontBrewingCompany',
      name: 'Fremont Brewing Company',
      cost: "$",
      type: 'bar',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.fremontbrewing.com'
    },
        {
      id: 'fremontVintageMall',
      name: 'Fremont Vintage Mall',
      cost: "$",
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'http://fremontvintagemall.com'
    },
        {
      id: 'cafeTurko',
      name: 'Cafe Turko',
      cost: "$",
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://cafe-turko.com'
    },
        {
      id: 'milsteadCoffeeCompany',
      name: 'Milstead Coffee Company',
      cost: "$",
      type: 'cafe',
      outdoor: true,
      kidfriendly: true,
      url: 'https://www.facebook.com/milsteadandco'
    },
    {
      id: 'jiveTimeRecords',
      name: 'Jive Time Records',
      cost: "$$",
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'http://jivetimerecords.com'
    },
         {
      id: 'dustyStrings',
      name: 'Dusty Strings',
      cost: "$$",
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.dustystrings.com'
    },
        {
      id: 'pcc',
      name: 'PCC',
      cost: "$$",
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.pccnaturalmarkets.com/locations/fr.html'
    },
        {
      id: 'fremontFarmersMarket',
      name: 'Fremont Farmers Market',
      cost: "$",
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.fremontmarket.com'
    },
        {
      id: 'norms',
      name: 'Norms Eatery and Alehouse',
      cost: "$",
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://normseatery.com'
    },
      {
      id: 'outlanderBrewing',
      name: 'Outlander Brewing',
      cost: "$",
      type: 'bar',
      outdoor: true,
      kidfriendly: true,
      url: 'http://outlanderbrewing.com'
    },
    {
      id: 'nectarLounge',
      name: 'Nectar Lounge',
      cost: "$$",
      type: 'bar',
      outdoor: true,
      kidfriendly: true,
      url: 'http://nectarlounge.com'
    },
      {
      id: 'theBallroom',
      name: 'The Ballroom',
      cost: "$$",
      type: 'bar',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.ballroomfremont.com'
    },
      {
      id: 'statueOfLenin',
      name: 'Statue of Lenin',
      cost: "$",
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'https://en.wikipedia.org/wiki/Statue_of_Lenin,_Seattle'
    },
      {
      id: 'theoChocolateCompany',
      name: 'Theo Chocolate Company',
      cost: "$",
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'https://www.theochocolate.com'
    },
      {
      id: 'essentialBakingCompany',
      name: 'Essential Baking Company',
      cost: "$$",
      type: 'cafe',
      outdoor: true,
      kidfriendly: true,
      url: 'http://essentialbaking.com'
    },
      {
      id: 'frelardPizzaCompany',
      name: 'Frelard Pizza Company',
      cost: "$$",
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.ballardpizzacompany.com'
    },
      {
      id: 'gasworks',
      name: 'Gasworks Park',
      cost: "$",
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'https://en.wikipedia.org/wiki/Gas_Works_Park'
    },
      {
      id: 'recycledCycles',
      name: 'Recycled Cycles',
      cost: "$$$",
      type: 'shopping',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.recycledcycles.com'
    },
      {
      id: 'burkeGilmanTrail',
      name: 'Burke Gilman Trail',
      cost: "$",
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'https://en.wikipedia.org/wiki/Burke-Gilman_Trail'
    },
      {
      id: 'fremontTroll',
      name: 'Fremont Troll',
      cost: "$",
      type: 'attraction',
      outdoor: true,
      kidfriendly: true,
      url: 'http://fremont.com/about/fremonttroll-html'
    },
    {
      id: 'hotelHotel',
      name: 'Hotel Hotel',
      cost: "$",
      type: 'bar',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.yelp.com/biz/hotel-hotel-seattle'
    },
      {
      id: 'luckysPho',
      name: 'Luckys Pho',
      cost: "$",
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.yelp.com/biz/luckys-pho-seattle'
    },
      {
      id: 'revel',
      name: 'Revel',
      cost: "$$$",
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url: 'http://www.revelseattle.com'
    },
      {
      id: 'chisoSushi',
      name: 'Chiso Sushi',
      cost: "$$",
      type: 'restaurant',
      outdoor: true,
      kidfriendly: true,
      url:'http://www.chisofremont.com'
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

