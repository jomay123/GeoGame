// Geography Game Questions and Data
const GAME_DATA = {
    // All questions with their correct answers
    questions: [
        {
            question: "Name a country in Europe",
            correctAnswers: ["France", "Germany", "Italy", "Spain", "United Kingdom", "Netherlands", "Belgium", "Switzerland", "Austria", "Poland", "Czech Republic", "Hungary", "Romania", "Bulgaria", "Greece", "Portugal", "Ireland", "Denmark", "Sweden", "Norway", "Finland", "Iceland", "Croatia", "Slovenia", "Slovakia", "Lithuania", "Latvia", "Estonia", "Luxembourg", "Malta", "Cyprus"]
        },
        {
            question: "Name a country in Asia",
            correctAnswers: ["China", "Japan", "India", "South Korea", "North Korea", "Thailand", "Vietnam", "Malaysia", "Singapore", "Indonesia", "Philippines", "Myanmar", "Cambodia", "Laos", "Mongolia", "Kazakhstan", "Uzbekistan", "Kyrgyzstan", "Tajikistan", "Turkmenistan", "Afghanistan", "Pakistan", "Bangladesh", "Sri Lanka", "Nepal", "Bhutan", "Maldives", "Brunei", "East Timor", "Taiwan"]
        },
        {
            question: "Name a country in Africa",
            correctAnswers: ["Egypt", "South Africa", "Nigeria", "Kenya", "Ethiopia", "Morocco", "Algeria", "Tunisia", "Libya", "Sudan", "Chad", "Niger", "Mali", "Burkina Faso", "Senegal", "Guinea", "Sierra Leone", "Liberia", "Ivory Coast", "Ghana", "Togo", "Benin", "Cameroon", "Central African Republic", "Gabon", "Congo", "Democratic Republic of Congo", "Angola", "Zambia", "Zimbabwe", "Botswana", "Namibia", "Mozambique", "Madagascar", "Tanzania", "Uganda", "Rwanda", "Burundi", "Somalia", "Djibouti", "Eritrea", "Comoros", "Seychelles", "Mauritius"]
        },
        {
            question: "Name a country in South America",
            correctAnswers: ["Brazil", "Argentina", "Chile", "Peru", "Colombia", "Venezuela", "Ecuador", "Bolivia", "Paraguay", "Uruguay", "Guyana", "Suriname", "French Guiana"]
        },
        {
            question: "Name a country in North America",
            correctAnswers: ["United States", "Canada", "Mexico", "Guatemala", "Belize", "Honduras", "El Salvador", "Nicaragua", "Costa Rica", "Panama", "Cuba", "Jamaica", "Haiti", "Dominican Republic", "Bahamas", "Barbados", "Trinidad and Tobago", "Grenada", "Saint Vincent and the Grenadines", "Saint Lucia", "Dominica", "Antigua and Barbuda", "Saint Kitts and Nevis"]
        },
        {
            question: "Name a country in Oceania",
            correctAnswers: ["Australia", "New Zealand", "Papua New Guinea", "Fiji", "Solomon Islands", "Vanuatu", "New Caledonia", "Samoa", "Tonga", "Micronesia", "Palau", "Marshall Islands", "Kiribati", "Tuvalu", "Nauru"]
        },
        {
            question: "Name a country in the Middle East",
            correctAnswers: ["Saudi Arabia", "Iran", "Iraq", "Syria", "Lebanon", "Jordan", "Israel", "Palestine", "Yemen", "Oman", "United Arab Emirates", "Qatar", "Bahrain", "Kuwait", "Turkey", "Cyprus"]
        },
        {
            question: "Name a country in the Caribbean",
            correctAnswers: ["Cuba", "Jamaica", "Haiti", "Dominican Republic", "Bahamas", "Barbados", "Trinidad and Tobago", "Grenada", "Saint Vincent and the Grenadines", "Saint Lucia", "Dominica", "Antigua and Barbuda", "Saint Kitts and Nevis", "Puerto Rico", "Guadeloupe", "Martinique"]
        },
        {
            question: "Name a country in Central Asia",
            correctAnswers: ["Kazakhstan", "Uzbekistan", "Kyrgyzstan", "Tajikistan", "Turkmenistan", "Afghanistan", "Mongolia"]
        },
        {
            question: "Name a country in the Balkans",
            correctAnswers: ["Serbia", "Croatia", "Slovenia", "Bosnia and Herzegovina", "Montenegro", "North Macedonia", "Albania", "Bulgaria", "Romania", "Greece", "Turkey"]
        },
        {
            question: "Name a country in Scandinavia",
            correctAnswers: ["Sweden", "Norway", "Denmark", "Finland", "Iceland"]
        },
        {
            question: "Name a country in the Baltic region",
            correctAnswers: ["Estonia", "Latvia", "Lithuania", "Finland", "Poland", "Germany", "Denmark", "Sweden"]
        },
        {
            question: "Name a country in the Caucasus",
            correctAnswers: ["Georgia", "Armenia", "Azerbaijan", "Russia", "Turkey", "Iran"]
        },
        {
            question: "Name a country in the Horn of Africa",
            correctAnswers: ["Somalia", "Ethiopia", "Eritrea", "Djibouti", "Kenya", "Sudan"]
        },
        {
            question: "Name a country in the Sahel region",
            correctAnswers: ["Senegal", "Mauritania", "Mali", "Burkina Faso", "Niger", "Chad", "Sudan", "Eritrea"]
        }
    ],

    // Comprehensive list of all countries for autocomplete
    allCountries: [
        // Europe
        'France', 'Germany', 'Italy', 'Spain', 'United Kingdom', 'Netherlands', 'Belgium', 'Switzerland', 'Austria', 'Poland',
        'Czech Republic', 'Hungary', 'Romania', 'Bulgaria', 'Greece', 'Portugal', 'Ireland', 'Denmark', 'Sweden', 'Norway',
        'Finland', 'Iceland', 'Croatia', 'Slovenia', 'Slovakia', 'Lithuania', 'Latvia', 'Estonia', 'Luxembourg', 'Malta', 'Cyprus',
        
        // Asia
        'China', 'Japan', 'India', 'South Korea', 'North Korea', 'Thailand', 'Vietnam', 'Malaysia', 'Singapore', 'Indonesia',
        'Philippines', 'Myanmar', 'Cambodia', 'Laos', 'Mongolia', 'Kazakhstan', 'Uzbekistan', 'Kyrgyzstan', 'Tajikistan', 'Turkmenistan',
        'Afghanistan', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Nepal', 'Bhutan', 'Maldives', 'Brunei', 'East Timor', 'Taiwan',
        
        // Africa
        'Egypt', 'South Africa', 'Nigeria', 'Kenya', 'Ethiopia', 'Morocco', 'Algeria', 'Tunisia', 'Libya', 'Sudan',
        'Chad', 'Niger', 'Mali', 'Burkina Faso', 'Senegal', 'Guinea', 'Sierra Leone', 'Liberia', 'Ivory Coast', 'Ghana',
        'Togo', 'Benin', 'Cameroon', 'Central African Republic', 'Gabon', 'Congo', 'Democratic Republic of Congo', 'Angola', 'Zambia', 'Zimbabwe',
        'Botswana', 'Namibia', 'Mozambique', 'Madagascar', 'Tanzania', 'Uganda', 'Rwanda', 'Burundi', 'Somalia', 'Djibouti',
        'Eritrea', 'Comoros', 'Seychelles', 'Mauritius',
        
        // South America
        'Brazil', 'Argentina', 'Chile', 'Peru', 'Colombia', 'Venezuela', 'Ecuador', 'Bolivia', 'Paraguay', 'Uruguay',
        'Guyana', 'Suriname', 'French Guiana',
        
        // North America
        'United States', 'Canada', 'Mexico', 'Guatemala', 'Belize', 'Honduras', 'El Salvador', 'Nicaragua', 'Costa Rica', 'Panama',
        'Cuba', 'Jamaica', 'Haiti', 'Dominican Republic', 'Bahamas', 'Barbados', 'Trinidad and Tobago', 'Grenada', 'Saint Vincent and the Grenadines',
        'Saint Lucia', 'Dominica', 'Antigua and Barbuda', 'Saint Kitts and Nevis',
        
        // Oceania
        'Australia', 'New Zealand', 'Papua New Guinea', 'Fiji', 'Solomon Islands', 'Vanuatu', 'New Caledonia', 'Samoa',
        'Tonga', 'Micronesia', 'Palau', 'Marshall Islands', 'Kiribati', 'Tuvalu', 'Nauru',
        
        // Middle East
        'Saudi Arabia', 'Iran', 'Iraq', 'Syria', 'Lebanon', 'Jordan', 'Israel', 'Palestine', 'Yemen', 'Oman',
        'United Arab Emirates', 'Qatar', 'Bahrain', 'Kuwait', 'Turkey',
        
        // Caribbean
        'Puerto Rico', 'Guadeloupe', 'Martinique',
        
        // Central Asia
        'Afghanistan',
        
        // Balkans
        'Serbia', 'Bosnia and Herzegovina', 'Montenegro', 'North Macedonia', 'Albania',
        
        // Baltic region
        'Estonia', 'Latvia', 'Lithuania',
        
        // Caucasus
        'Georgia', 'Armenia', 'Azerbaijan',
        
        // Horn of Africa
        'Somalia', 'Ethiopia', 'Eritrea', 'Djibouti',
        
        // Sahel region
        'Mauritania'
    ],

    // Country flag mappings
    countryFlags: {
        // Europe
        'France': '🇫🇷', 'Germany': '🇩🇪', 'Italy': '🇮🇹', 'Spain': '🇪🇸', 'United Kingdom': '🇬🇧',
        'Netherlands': '🇳🇱', 'Belgium': '🇧🇪', 'Switzerland': '🇨🇭', 'Austria': '🇦🇹', 'Poland': '🇵🇱',
        'Czech Republic': '🇨🇿', 'Hungary': '🇭🇺', 'Romania': '🇷🇴', 'Bulgaria': '🇧🇬', 'Greece': '🇬🇷',
        'Portugal': '🇵🇹', 'Ireland': '🇮🇪', 'Denmark': '🇩🇰', 'Sweden': '🇸🇪', 'Norway': '🇳🇴',
        'Finland': '🇫🇮', 'Iceland': '🇮🇸', 'Croatia': '🇭🇷', 'Slovenia': '🇸🇮', 'Slovakia': '🇸🇰',
        'Lithuania': '🇱🇹', 'Latvia': '🇱🇻', 'Estonia': '🇪🇪', 'Luxembourg': '🇱🇺', 'Malta': '🇲🇹', 'Cyprus': '🇨🇾',
        
        // Asia
        'China': '🇨🇳', 'Japan': '🇯🇵', 'India': '🇮🇳', 'South Korea': '🇰🇷', 'North Korea': '🇰🇵',
        'Thailand': '🇹🇭', 'Vietnam': '🇻🇳', 'Malaysia': '🇲🇾', 'Singapore': '🇸🇬', 'Indonesia': '🇮🇩',
        'Philippines': '🇵🇭', 'Myanmar': '🇲🇲', 'Cambodia': '🇰🇭', 'Laos': '🇱🇦', 'Mongolia': '🇲🇳',
        'Kazakhstan': '🇰🇿', 'Uzbekistan': '🇺🇿', 'Kyrgyzstan': '🇰🇬', 'Tajikistan': '🇹🇯', 'Turkmenistan': '🇹🇲',
        'Afghanistan': '🇦🇫', 'Pakistan': '🇵🇰', 'Bangladesh': '🇧🇩', 'Sri Lanka': '🇱🇰', 'Nepal': '🇳🇵',
        'Bhutan': '🇧🇹', 'Maldives': '🇲🇻', 'Brunei': '🇧🇳', 'East Timor': '🇹🇱', 'Taiwan': '🇹🇼',
        
        // Africa
        'Egypt': '🇪🇬', 'South Africa': '🇿🇦', 'Nigeria': '🇳🇬', 'Kenya': '🇰🇪', 'Ethiopia': '🇪🇹',
        'Morocco': '🇲🇦', 'Algeria': '🇩🇿', 'Tunisia': '🇹🇳', 'Libya': '🇱🇾', 'Sudan': '🇸🇩',
        'Chad': '🇹🇩', 'Niger': '🇳🇪', 'Mali': '🇲🇱', 'Burkina Faso': '🇧🇫', 'Senegal': '🇸🇳',
        'Guinea': '🇬🇳', 'Sierra Leone': '🇸🇱', 'Liberia': '🇱🇷', 'Ivory Coast': '🇨🇮', 'Ghana': '🇬🇭',
        'Togo': '🇹🇬', 'Benin': '🇧🇯', 'Cameroon': '🇨🇲', 'Central African Republic': '🇨🇫', 'Gabon': '🇬🇦',
        'Congo': '🇨🇬', 'Democratic Republic of Congo': '🇨🇩', 'Angola': '🇦🇴', 'Zambia': '🇿🇲', 'Zimbabwe': '🇿🇼',
        'Botswana': '🇧🇼', 'Namibia': '🇳🇦', 'Mozambique': '🇲🇿', 'Madagascar': '🇲🇬', 'Tanzania': '🇹🇿',
        'Uganda': '🇺🇬', 'Rwanda': '🇷🇼', 'Burundi': '🇧🇮', 'Somalia': '🇸🇴', 'Djibouti': '🇩🇯',
        'Eritrea': '🇪🇷', 'Comoros': '🇰🇲', 'Seychelles': '🇸🇨', 'Mauritius': '🇲🇺',
        
        // South America
        'Brazil': '🇧🇷', 'Argentina': '🇦🇷', 'Chile': '🇨🇱', 'Peru': '🇵🇪', 'Colombia': '🇨🇴',
        'Venezuela': '🇻🇪', 'Ecuador': '🇪🇨', 'Bolivia': '🇧🇴', 'Paraguay': '🇵🇾', 'Uruguay': '🇺🇾',
        'Guyana': '🇬🇾', 'Suriname': '🇸🇷', 'French Guiana': '🇬🇫',
        
        // North America
        'United States': '🇺🇸', 'Canada': '🇨🇦', 'Mexico': '🇲🇽', 'Guatemala': '🇬🇹', 'Belize': '🇧🇿',
        'Honduras': '🇭🇳', 'El Salvador': '🇸🇻', 'Nicaragua': '🇳🇮', 'Costa Rica': '🇨🇷', 'Panama': '🇵🇦',
        'Cuba': '🇨🇺', 'Jamaica': '🇯🇲', 'Haiti': '🇭🇹', 'Dominican Republic': '🇩🇴', 'Bahamas': '🇧🇸',
        'Barbados': '🇧🇧', 'Trinidad and Tobago': '🇹🇹', 'Grenada': '🇬🇩', 'Saint Vincent and the Grenadines': '🇻🇨',
        'Saint Lucia': '🇱🇨', 'Dominica': '🇩🇲', 'Antigua and Barbuda': '🇦🇬', 'Saint Kitts and Nevis': '🇰🇳',
        
        // Oceania
        'Australia': '🇦🇺', 'New Zealand': '🇳🇿', 'Papua New Guinea': '🇵🇬', 'Fiji': '🇫🇯',
        'Solomon Islands': '🇸🇧', 'Vanuatu': '🇻🇺', 'New Caledonia': '🇳🇨', 'Samoa': '🇼🇸',
        'Tonga': '🇹🇴', 'Micronesia': '🇫🇲', 'Palau': '🇵🇼', 'Marshall Islands': '🇲🇭',
        'Kiribati': '🇰🇮', 'Tuvalu': '🇹🇻', 'Nauru': '🇳🇷',
        
        // Middle East
        'Saudi Arabia': '🇸🇦', 'Iran': '🇮🇷', 'Iraq': '🇮🇶', 'Syria': '🇸🇾', 'Lebanon': '🇱🇧',
        'Jordan': '🇯🇴', 'Israel': '🇮🇱', 'Palestine': '🇵🇸', 'Yemen': '🇾🇪', 'Oman': '🇴🇲',
        'United Arab Emirates': '🇦🇪', 'Qatar': '🇶🇦', 'Bahrain': '🇧🇭', 'Kuwait': '🇰🇼', 'Turkey': '🇹🇷',
        
        // Caribbean
        'Puerto Rico': '🇵🇷', 'Guadeloupe': '🇬🇵', 'Martinique': '🇲🇶',
        
        // Central Asia
        'Afghanistan': '🇦🇫',
        
        // Balkans
        'Serbia': '🇷🇸', 'Bosnia and Herzegovina': '🇧🇦', 'Montenegro': '🇲🇪', 'North Macedonia': '🇲🇰', 'Albania': '🇦🇱',
        
        // Baltic region
        'Estonia': '🇪🇪', 'Latvia': '🇱🇻', 'Lithuania': '🇱🇹',
        
        // Caucasus
        'Georgia': '🇬🇪', 'Armenia': '🇦🇲', 'Azerbaijan': '🇦🇿',
        
        // Horn of Africa
        'Somalia': '🇸🇴', 'Ethiopia': '🇪🇹', 'Eritrea': '🇪🇷', 'Djibouti': '🇩🇯',
        
        // Sahel region
        'Mauritania': '🇲🇷'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GAME_DATA;
} 