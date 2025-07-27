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
        },
        {
            question: "Name a country with green in its flag",
            correctAnswers: [
                "Bangladesh", "Belarus", "Benin", "Bolivia", "Brazil", "Bulgaria", "Burkina Faso", "Burundi", "Cameroon",
                "Central African Republic", "Comoros", "Djibouti", "Dominica", "Equatorial Guinea", "Eritrea", "Ethiopia",
                "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "India", "Iran", "Ireland", "Italy", "Jamaica", "Jordan",
                "Kenya", "Kuwait", "Lebanon", "Lesotho", "Libya", "Lithuania", "Madagascar", "Malawi", "Maldives", "Mali",
                "Mauritania", "Mexico", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Oman", "Pakistan",
                "Palestine", "Portugal", "Rwanda", "San Marino", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone",
                "Slovakia", "Somalia", "South Africa", "South Sudan", "Sri Lanka", "Sudan", "Suriname", "Tanzania", "Togo",
                "Turkmenistan", "Uganda", "United Arab Emirates", "Uzbekistan", "Vanuatu", "Vietnam", "Zambia", "Zimbabwe"
            ]
        },
        {
            question: "Name a country in Europe that is landlocked",
            correctAnswers: [
                "Andorra", "Austria", "Belarus", "Czech Republic", "Hungary", "Kosovo", "Liechtenstein", "Luxembourg",
                "Macedonia", "Moldova", "San Marino", "Serbia", "Slovakia", "Slovenia", "Switzerland", "Vatican City"
            ]
        },
        {
            question: "Name a country in Asia that ends in A",
            correctAnswers: [
                "Armenia", "China", "Georgia", "India", "Indonesia", "Jordan", "Korea", "Laos", "Malaysia", "Mongolia",
                "Nepal", "Pakistan", "Philippines", "Russia", "Saudi Arabia", "Sri Lanka", "Syria", "Thailand", "Vietnam"
            ].filter(country => country.endsWith("a")) // Ensures the ending 'a' condition
        },
        {
            question: "Name a country with stars in its flag",
            correctAnswers: [
                "Australia", "Brazil", "Burkina Faso", "Chile", "China", "Cuba", "Dominica", "European Union", "Grenada",
                "Honduras", "Kosovo", "Malaysia", "Micronesia", "Morocco", "New Zealand", "Panama", "Papua New Guinea",
                "Samoa", "Solomon Islands", "Somalia", "South Sudan", "Syria", "Turkey", "United States", "Uzbekistan",
                "Venezuela", "Vietnam"
            ]
        },
        {
            question: "Name a country that ends in 'stan'",
            correctAnswers: [
                "Afghanistan", "Kazakhstan", "Kyrgyzstan", "Pakistan", "Tajikistan", "Turkmenistan", "Uzbekistan"
            ]
        },
        {
            question: "Name a country in Europe that doesn't use the euro",
            correctAnswers: [
                "Albania", "Andorra", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Czech Republic", "Denmark",
                "Hungary", "Iceland", "Liechtenstein", "Moldova", "Monaco", "North Macedonia", "Norway", "Poland",
                "Romania", "San Marino", "Serbia", "Sweden", "Switzerland", "United Kingdom", "Vatican City"
            ]
        },
        {
            question: "Name a European country starting with 'A'",
            correctAnswers: [
                "Albania", "Andorra", "Austria", "Armenia", "Azerbaijan"
            ]
        },
        {
            question: "Name a country bordering Colombia",
            correctAnswers: [
                "Brazil", "Ecuador", "Panama", "Peru", "Venezuela"
            ]
        },
        {
            question: "Name a country with 4 letters",
            correctAnswers: [
                "Chad", "Cuba", "Fiji", "Iran", "Iraq", "Laos", "Lima", "Mali", "Oman", "Peru", "Togo"
            ]
        },
        {
            question: "Name a European country with only red and white in its flag",
            correctAnswers: [
                "Austria", "Denmark", "Georgia", "Latvia", "Monaco", "Poland", "Switzerland"
            ]
        },
        {
            question: "Name a country starting with 'D'",
            correctAnswers: [
                "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Democratic Republic of the Congo"
            ]
        },
        {
            question: "Name a country with yellow on its flag",
            correctAnswers: [
                "Australia", "Belgium", "Bolivia", "Brazil", "Brunei", "Cameroon", "Chad", "Colombia", "Democratic Republic of the Congo",
                "Ecuador", "Germany", "Ghana", "Grenada", "India", "Jamaica", "Kazakhstan", "Kyrgyzstan", "Lithuania", "Malaysia",
                "Mali", "Mozambique", "North Macedonia", "Peru", "Rwanda", "South Africa", "Spain", "Sri Lanka", "Sweden", "Togo",
                "Trinidad and Tobago", "Uganda", "Ukraine", "Vatican City", "Venezuela", "Vietnam", "Zimbabwe"
            ]
        },
        {
            question: "Name a country that borders China",
            correctAnswers: [
                "Afghanistan", "Bhutan", "India", "Kazakhstan", "Kyrgyzstan", "Laos", "Mongolia", "Myanmar", "Nepal",
                "North Korea", "Pakistan", "Russia", "Tajikistan", "Vietnam"
            ]
        },
        {
            question: "Name a country that starts with 'Tu'",
            correctAnswers: [
                "Tunisia", "Turkey", "Turkmenistan", "Tuvalu"
            ]
        },
        {
            question: "Name a country that starts with 'B'",
            correctAnswers: [
                "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
                "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi"
            ]
        },
        {
            question: "Name a country that starts with 'Pa'",
            correctAnswers: [
                "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru"
            ]
        },
        {
            question: "Name a landlocked country in Africa",
            correctAnswers: [
                "Botswana", "Burkina Faso", "Burundi", "Central African Republic", "Chad", "Ethiopia", "Lesotho",
                "Malawi", "Mali", "Niger", "Rwanda", "South Sudan", "Swaziland", "Uganda", "Zambia", "Zimbabwe"
            ]
        },
        {
            question: "Name a country starting with I",
            correctAnswers: [
                "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy"
            ]
        },
        {
            question: "Name a country with 2 words in its name",
            correctAnswers: [
                "Bosnia and Herzegovina", "Burkina Faso", "Cape Verde", "Central African Republic", "Costa Rica",
                "Czech Republic", "Dominican Republic", "El Salvador", "Equatorial Guinea", "Guinea Bissau",
                "New Zealand", "North Korea", "North Macedonia", "Papua New Guinea", "San Marino", "Saudi Arabia",
                "Sierra Leone", "Solomon Islands", "South Africa", "South Korea", "South Sudan", "Sri Lanka",
                "Trinidad and Tobago", "United Arab Emirates", "United Kingdom", "United States", "Vatican City"
            ]
        },
        {
            question: "Name a country which ends with the letter 'n'",
            correctAnswers: [
                "Afghanistan", "Azerbaijan", "Bahrain", "Bangladesh", "Benin", "Bhutan", "Burma (Myanmar)", "Cameroon",
                "Chad", "Gabon", "Iran", "Iraq", "Japan", "Jordan", "Kazakhstan", "Kyrgyzstan", "Lebanon", "Pakistan",
                "Palestine", "Spain", "Sudan", "Sweden", "Tajikistan", "Turkmenistan", "Uzbekistan", "Yemen"
            ].filter(country => country.endsWith("n"))
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