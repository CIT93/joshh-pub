const winterDestinations = [
  { name: "Aspen (Colorado)", cost: 1900, activities: ["skiing", "snowboarding", "winter hiking", "art galleries"], warm: false },
  { name: "Banff (Alberta, Canada)", cost: 1800, activities: ["skiing", "snowshoeing", "ice climbing", "hot springs soaking"], warm: false },
  { name: "Glenwood Springs (Colorado)", cost: 1500, activities: ["snowmobiling", "hot springs soaking", "snowshoeing", "cave tours"], warm: false },
  { name: "Jackson Hole (Wyoming)", cost: 1300, activities: ["backcountry skiing", "snowboarding", "snowshoeing", "wildlife tours"], warm: false },
  { name: "Lake Tahoe (California/Nevada Border)", cost: 1200, activities: ["skiing", "snowboarding", "ice skating"], warm: false },
  { name: "Mont-Tremblant (Quebec, Canada)", cost: 1600, activities: ["skiing", "snowboarding", "dog sledding", "ice fishing"], warm: false },
  { name: "Park City (Utah)", cost: 1400, activities: ["skiing", "snowboarding", "snow tubing", "alpine coaster"], warm: false },
  { name: "Stowe (Vermont)", cost: 1400, activities: ["cross-country skiing", "snowboarding", "ice fishing", "tobogganing"], warm: false },
  { name: "Vail (Colorado)", cost: 1700, activities: ["skiing", "snowboarding", "snowmobiling", "gondola rides"], warm: false },
  { name: "Whistler (British Columbia, Canada)", cost: 1600, activities: ["heli-skiing", "snowboarding", "ice climbing", "ziplining"], warm: false }
];

const warmDestinations = [
  { name: "Charleston (South Carolina)", cost: 1000, activities: ["historic downtown tours", "beach outings at Folly Beach", "culinary tours"], warm: true },
  { name: "Dallas (Texas)", cost: 700, activities: ["kayaking at White Rock Lake", "live music", "Texas State Fair"], warm: true },
  { name: "Gulf Coast (Florida)", cost: 800, activities: ["deep-sea fishing", "shelling", "dolphin watching"], warm: true },
  { name: "Lake Havasu (Arizona)", cost: 900, activities: ["boating", "jet skiing", "London Bridge tour"], warm: true },
  { name: "Miami (Florida)", cost: 1000, activities: ["beach lounging", "jet skiing", "South Beach nightlife"], warm: true },
  { name: "New Orleans (Louisiana)", cost: 950, activities: ["jazz music", "Creole and Cajun cuisine", "French Quarter tours"], warm: true },
  { name: "Phoenix (Arizona)", cost: 850, activities: ["desert hiking", "hot air ballooning", "Desert Botanical Garden tour"], warm: true },
  { name: "San Diego (California)", cost: 900, activities: ["surfing", "beach volleyball", "San Diego Zoo"], warm: true },
  { name: "Tampa (Florida)", cost: 850, activities: ["Busch Gardens", "fishing charters", "Clearwater Beach"], warm: true }
];

const touristyDestinations = [
  { name: "Austin (Texas)", cost: 700, activities: ["live music on Sixth Street", "BBQ tastings", "Lady Bird Lake kayaking"], warm: true },
  { name: "Baton Rouge (Louisiana)", cost: 950, activities: ["live jazz", "seafood dining", "Louisiana State Capitol tour"], warm: true },
  { name: "Hawaii", cost: 1200, activities: ["scenic beach relaxation", "snorkeling", "volcano hiking"], warm: true },
  { name: "Las Vegas (Nevada)", cost: 1100, activities: ["casinos", "Cirque du Soleil shows", "Grand Canyon day trips"], warm: true },
  { name: "Los Angeles (California)", cost: 1100, activities: ["Hollywood tours", "Santa Monica Pier", "Disneyland"], warm: true },
  { name: "Miami (Florida)", cost: 1000, activities: ["South Beach", "Little Havana cultural tours", "Wynwood Art District"], warm: true },
  { name: "Orlando (Florida)", cost: 1000, activities: ["Walt Disney World", "Universal Studios", "airboat tours"], warm: true },
  { name: "San Diego (California)", cost: 900, activities: ["La Jolla Cove", "SeaWorld", "USS Midway Museum"], warm: true },
  { name: "San Francisco (California)", cost: 1200, activities: ["Golden Gate Bridge tours", "Alcatraz Island", "Pier 39"], warm: true },
  { name: "Washington, D.C.", cost: 950, activities: ["Smithsonian museums", "monument tours", "National Mall concerts"], warm: true },

  { name: "Boston (Massachusets)", cost: 1050, activities: ["Freedom Trail", "Boston Tea Party Museum", "Fenway Park tour"], warm: false },
  { name: "Chicago(Illinois)", cost: 900, activities: ["architectural boat tours", "Millennium Park", "Art Institute of Chicago"], warm: false },
  { name: "New York City(New York)", cost: 1000, activities: ["Empire State Building", "Metropolitan Museum of Art", "Broadway shows"], warm: false },
  { name: "Philadelphia(Pennsylvania)", cost: 950, activities: ["Liberty Bell", "Independence Hall", "Reading Terminal Market"], warm: false },
  { name: "Quebec City (Canada)", cost: 1200, activities: ["Old Quebec walking tours", "Montmorency Falls", "Winter Carnival"], warm: false },
  { name: "San Francisco(California)", cost: 1200, activities: ["Golden Gate Bridge", "Alcatraz Island", "Fisherman’s Wharf"], warm: false },
  { name: "Savannah (Georgia)", cost: 900, activities: ["historic district tours", "riverboat cruises", "Forsyth Park"], warm: false },
  { name: "Toronto (Canada)", cost: 1100, activities: ["CN Tower", "Royal Ontario Museum", "Toronto Islands"], warm: false },
  { name: "Vancouver (Canada)", cost: 1400, activities: ["Capilano Suspension Bridge", "Granville Island", "Stanley Park"], warm: false },
  { name: "Washington, D.C.", cost: 950, activities: ["Smithsonian museums", "U.S. Capitol tours", "monument and memorial walks"], warm: false }
];

export { winterDestinations, warmDestinations, touristyDestinations };
