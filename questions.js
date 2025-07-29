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
                "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", 
            ]
        },
        {
            question: "Name a landlocked country in Africa",
            correctAnswers: [
                "Botswana", "Burkina Faso", "Burundi", "Central African Republic", "Chad", "Ethiopia", "Lesotho",
                "Malawi", "Mali", "Niger", "Rwanda", "South Sudan", "Eswatini", "Uganda", "Zambia", "Zimbabwe"
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
        },
        {
            question: "Name a country that begins with the letter 'L'",
            correctAnswers: [
                "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg"
            ]
        },
        {
            question: "Name a country with red and yellow on its flag",
            correctAnswers: [
                "China", "Spain", "Vietnam", "North Macedonia", "Montenegro", "Bhutan", "Germany", "Belgium", "Colombia",
                "Vatican City", "Mozambique", "Uganda", "Zimbabwe", "South Sudan", "Myanmar", "Sri Lanka"
            ]
        },
        {
            question: "Name a country with 5 letters in its name",
            correctAnswers: [
                "Chile", "China", "Egypt", "Gabon", "Ghana", "Haiti", "India", "Italy", "Japan", "Kenya", "Libya",
                "Nepal", "Niger", "Qatar", "Spain", "Sudan", "Syria", "Yemen", "Nauru", "Palau"
            ]
        },
        {
            question: "Name a country that borders France",
            correctAnswers: [
                "Andorra", "Belgium", "Germany", "Italy", "Luxembourg", "Monaco", "Spain", "Switzerland"
            ]
        },
        {
            question: "Name a country that borders India",
            correctAnswers: [
                "Bangladesh", "Bhutan", "China", "Myanmar", "Nepal", "Pakistan"
            ]
        },
        {
            question: "Name a non European country whose name ends in 'ia'",
            correctAnswers: [
                "Algeria", "Australia", "Colombia", "Ethiopia", "India", "Indonesia", "Mauritania", "Malaysia",
                "Namibia", "Saudi Arabia", "Syria", "Tanzania", "Tunisia", "Zambia"
            ]
        },
        {
            question: "Name a country that starts with the letter 'V'",
            correctAnswers: [
                "Vanuatu", "Vatican City", "Venezuela", "Vietnam"
            ]
        },
        {
            question: "Name a country that borders Poland",
            correctAnswers: [
                "Germany", "Czech Republic", "Slovakia", "Ukraine", "Belarus", "Lithuania", "Russia"
            ]
        },
        {
            question: "Name a country whose flag is only Blue and White",
            correctAnswers: [
                "Finland", "Greece", "Guatemala", "Honduras", "Israel", "Nicaragua", "Somalia", "El Salvador", "Argentina"
            ]
        },
        {
            question: "Name a country in Africa that ends with the letter 'a'",
            correctAnswers: [
                "Algeria", "Angola", "Botswana", "Central African Republic", "Eritrea", "Ethiopia", "Gambia", "Ghana",
                "Guinea", "Kenya", "Liberia", "Libya", "Madagascar", "Malawi", "Mauritania", "Mauritius", "Morocco",
                "Namibia", "Nigeria", "Rwanda", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan",
                "Tanzania", "Tunisia", "Uganda", "Zambia"
            ].filter(c => c.endsWith('a'))
        },
        {
            question: "Name a country that starts with the letter 'P'",
            correctAnswers: [
                "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal"
            ]
        },
        {
            question: "Name a country that borders Argentina",
            correctAnswers: [
                "Bolivia", "Brazil", "Chile", "Paraguay", "Uruguay"
            ]
        },
        {
            question: "Name a country in Asia that is an island nation",
            correctAnswers: [
                "Bahrain", "Cyprus", "Indonesia", "Japan", "Maldives", "Philippines", "Sri Lanka", "Taiwan", "Timor-Leste"
            ]
        },
        {
            question: "Name a country that starts with 'Co'",
            correctAnswers: [
                "Colombia", "Comoros", "Congo", "Costa Rica", "Côte d'Ivoire"
            ]
        },
        {
            question: "Name a country that borders Saudi Arabia",
            correctAnswers: [
                "Iraq", "Jordan", "Kuwait", "Oman", "Qatar", "United Arab Emirates", "Yemen"
            ]
        },
        {
            question: "Name a country whose name is exactly 6 letters long",
            correctAnswers: [
                "Brazil", "Canada", "Greece", "Latvia", "Mexico", "Norway", "Poland", "Sweden", "Turkey", "Zambia"
            ]
        },
        {
            question: "Name a country that starts and ends with the same letter",
            correctAnswers: [
                "Albania", "Algeria", "Andorra", "Argentina", "Armenia", "Australia", "Austria", "Angola", "Saint Vincent and the Grenadines", "Czech Republic", "Saint Kitts and Nevis", "Central African Republic", "Solomon Islands", "Seychelles", "Antigua and Barbuda", 
            ]
        },
        {
            question: "Name a country with a flag that has a crescent moon",
            correctAnswers: [
                "Turkey", "Pakistan", "Malaysia", "Algeria", "Tunisia", "Mauritania"
            ]
        },
        {
            question: "Name a country that borders two oceans",
            correctAnswers: [
                "Canada", "Russia", "United States", "South Africa", "Australia"
            ]
        },
        {
            question: "Name a landlocked country in South America",
            correctAnswers: [
                "Bolivia", "Paraguay"
            ]
        },
        {
            question: "Name a country that is an enclave",
            correctAnswers: [
                "San Marino", "Lesotho", "Vatican City", "Eswatini"
            ]
        },
        {
            question: "Name a country that is part of the Horn of Africa",
            correctAnswers: [
                "Ethiopia", "Eritrea", "Djibouti", "Somalia"
            ]
        },
        {
            question: "Name a country with an eagle on its flag or coat of arms",
            correctAnswers: [
                "Albania", "Mexico", "Egypt", "Serbia", "Zambia", "Kazakhstan", "Poland", "United States"
            ]
        },
        {
            question: "Name a country that was part of Yugoslavia",
            correctAnswers: [
                "Slovenia", "Croatia", "Bosnia and Herzegovina", "Montenegro", "North Macedonia", "Serbia", "Kosovo"
            ]
        },
        {
            question: "Name a country that has more than 8 land borders",
            correctAnswers: [
                "China", "Russia", "Brazil", "Germany", "France", "Democratic Republic of the Congo", "Austria", "Turkey", "India", "Sudan"
            ]
        },
        {
            question: "Name a country in Central America",
            correctAnswers: [
                "Belize", "Costa Rica", "El Salvador", "Guatemala", "Honduras", "Nicaragua", "Panama"
            ]
        },
        {
            question: "Name a country where Arabic is an official language",
            correctAnswers: [
                "Algeria", "Bahrain", "Chad", "Egypt", "Iraq", "Jordan", "Kuwait", "Lebanon", "Libya", "Mauritania"
            ]
        },
        {
            question: "Name a country located entirely on an island",
            correctAnswers: [
                "Iceland", "Sri Lanka", "Maldives", "Cyprus", "Madagascar", "Japan"
            ]
        },
        {
            question: "Name a country in the Caribbean",
            correctAnswers: [
                "Barbados", "Cuba", "Dominica", "Haiti", "Jamaica", "Saint Lucia", "Trinidad and Tobago", "Bahamas"
            ]
        },
        {
            question: "Name a country that has 'New' in its name",
            correctAnswers: [
                "New Zealand", "Papua New Guinea"
            ]
        },
        {
            question: "Name a country with territory in both Europe and Asia",
            correctAnswers: [
                "Russia", "Turkey", "Kazakhstan", "Georgia", "Azerbaijan"
            ]
        },
        {
            question: "Name a country whose name ends in 'land'",
            correctAnswers: [
                "Finland", "Iceland", "Ireland", "New Zealand", "Poland", "Switzerland", "Thailand"
            ]
        },
        {
            question: "Name a country with a coastline on the Mediterranean Sea",
            correctAnswers: [
                "Spain", "France", "Monaco", "Italy", "Slovenia", "Croatia", "Bosnia and Herzegovina", "Montenegro", "Albania", "Greece"
            ]
        },
        {
            question: "Name a country with a flag that is a solid color plus a symbol",
            correctAnswers: [
                "Turkey", "Tunisia", "Bangladesh", "Japan", "Palau", "Laos"
            ]
        },
        {
            question: "Name a country in the G7 group",
            correctAnswers: [
                "Canada", "France", "Germany", "Italy", "Japan", "United Kingdom", "United States"
            ]
        },
        {
            question: "Name a country that starts with the letter 'S' and is in Africa",
            correctAnswers: [
                "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan"
            ]
        },
        {
            question: "Name a country in the Southern Hemisphere",
            correctAnswers: [
                "Australia", "New Zealand", "Brazil", "Argentina", "South Africa", "Indonesia", "Papua New Guinea", "Peru"
            ]
        },
        {
            question: "Name a landlocked country in Asia",
            correctAnswers: [
                "Afghanistan", "Armenia", "Azerbaijan", "Bhutan", "Kazakhstan", "Kyrgyzstan", "Laos", "Mongolia", "Nepal", "Uzbekistan"
            ]
        },
        {
            question: "Name a country that has hosted the Olympic Games",
            correctAnswers: [
                "France", "Japan", "United States", "Russia", "Germany", "China", "United Kingdom", "Italy", "Brazil", "Canada"
            ]
        },
        {
            question: "Name a country that has the Union Jack on its flag",
            correctAnswers: [
                "Australia", "New Zealand", "Fiji", "Tuvalu", "United Kingdom"
            ]
        },
        {
            question: "Name a country that is entirely surrounded by another country",
            correctAnswers: [
                "Lesotho", "San Marino", "Vatican City", "Eswatini"
            ]
        },
        {
            question: "Name a country that starts with the letter 'E'",
            correctAnswers: [
                "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia"
            ]
        },
        {
            question: "Name a country where French is an official language",
            correctAnswers: [
                "France", "Belgium", "Switzerland", "Canada", "Mali", "Senegal", "Ivory Coast", "Niger", "Chad", "Cameroon"
            ]
        },
        {
            question: "Name a Nordic country",
            correctAnswers: [
                "Denmark", "Finland", "Iceland", "Norway", "Sweden"
            ]
        },
        {
            question: "Name a country with a lion on its coat of arms or flag",
            correctAnswers: [
                "Sri Lanka", "Netherlands", "United Kingdom", "Norway", "Finland", "Iran", "Ethiopia"
            ]
        },
        {
            question: "Name a country whose capital starts with the letter 'B'",
            correctAnswers: [
                "Thailand (Bangkok)", "Serbia (Belgrade)", "Hungary (Budapest)", "Lebanon (Beirut)", "Iraq (Baghdad)", "Azerbaijan (Baku)", "Brazil (Brasília)"
            ]
        },
        {
            question: "Name a country located on the Equator",
            correctAnswers: [
                "Brazil", "Colombia", "Ecuador", "Gabon", "Indonesia", "Kenya", "Republic of the Congo", "Uganda", "São Tomé and Príncipe"
            ]
        },
        {
            question: "Name a country that has a double-headed eagle on its coat of arms",
            correctAnswers: [
                "Albania", "Serbia", "Russia", "Montenegro"
            ]
        },
        {
            question: "Name a country where Portuguese is an official language",
            correctAnswers: [
                "Portugal", "Brazil", "Angola", "Mozambique", "Cape Verde", "Guinea-Bissau", "East Timor", "Equatorial Guinea", "São Tomé and Príncipe"
            ]
        },
        {
            question: "Name a country with territory in the Arctic Circle",
            correctAnswers: [
                "Canada", "Denmark (Greenland)", "Finland", "Iceland", "Norway", "Russia", "Sweden", "United States"
            ]
        },
        {
            question: "Name a country that starts with 'K'",
            correctAnswers: [
                "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Kosovo"
            ]
        },
        {
            question: "Name a country that starts with 'M' and is in Africa",
            correctAnswers: [
                "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique"
            ]
        },
        {
            question: "Name a country that spans more than one continent",
            correctAnswers: [
                "Russia", "Turkey", "Kazakhstan", "Egypt", "Indonesia"
            ]
        },
        {
            question: "Name a country that has red, green, and white on its flag",
            correctAnswers: [
                "Italy", "Iran", "Mexico", "Belarus", "Bulgaria", "Madagascar", "Oman"
            ]
        },
        {
            question: "Name a country that borders only one other country",
            correctAnswers: [
                "Canada", "Portugal", "Denmark", "South Korea", "Haiti", "Dominican Republic", "Monaco", "Vatican City", "Lesotho", "San Marino"
            ]
        },
        {
            question: "Name a country where Spanish is an official language",
            correctAnswers: [
                "Argentina", "Bolivia", "Chile", "Colombia", "Costa Rica", "Cuba", "Dominican Republic", "Ecuador", "El Salvador", "Spain"
            ]
        },
        {
            question: "Name a country that starts with 'Z'",
            correctAnswers: [
                "Zambia", "Zimbabwe"
            ]
        },
        {
            question: "Name a country with a monarchy",
            correctAnswers: [
                "United Kingdom", "Saudi Arabia", "Sweden", "Thailand", "Norway", "Japan", "Spain", "Jordan", "Netherlands", "Morocco"
            ]
        },
        {
            question: "Name a country with a name made of 3 words",
            correctAnswers: [
                "Central African Republic", "Bosnia and Herzegovina", "Equatorial Guinea", "Papua New Guinea", "Trinidad and Tobago", "United Arab Emirates", "United Kingdom", "United States", "New Zealand", "Dominican Republic"
            ]
        },
        {
            question: "Name a country with 'Islands' in its name",
            correctAnswers: [
                "Solomon Islands", "Marshall Islands", "Federated States of Micronesia", "Cook Islands"
            ]
        },
        {
            question: "Name a country that starts with the letter 'U'",
            correctAnswers: ["Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States"]
        },
        {
            question: "Name a country that borders the Red Sea",
            correctAnswers: ["Egypt", "Sudan", "Eritrea", "Saudi Arabia", "Yemen"]
        },
        {
            question: "Name a country with purple on its national flag",
            correctAnswers: ["Dominica", "Nicaragua"]
        },
        {
            question: "Name a country in Africa that starts with the letter 'T'",
            correctAnswers: ["Tanzania", "Togo", "Tunisia"]
        },
        {
            question: "Name a country with a lion on its flag or coat of arms",
            correctAnswers: ["Sri Lanka", "Netherlands", "Ethiopia", "Norway"]
        },
        {
            question: "Name a country that shares a border with only one other country",
            correctAnswers: ["Canada", "Denmark", "Portugal", "Haiti", "Dominican Republic"]
        },
        {
            question: "Name a country whose name ends in the letter 'y'",
            correctAnswers: ["Germany", "Hungary", "Italy", "Norway"]
        },
        {
            question: "Name a country with a red and black flag",
            correctAnswers: ["Albania", "Angola", "Trinidad and Tobago"]
        },
        {
            question: "Name a country that uses the US dollar as its official currency",
            correctAnswers: ["Ecuador", "El Salvador", "Panama", "Zimbabwe", "United States"]
        },
        {
            question: "Name a country that lies on the Tropic of Capricorn",
            correctAnswers: ["Namibia", "Botswana", "Mozambique", "Madagascar", "Australia"]
        },
        {
            question: "Name a country that begins with 'Ne'",
            correctAnswers: ["Nepal", "Netherlands", "New Zealand"]
        },
        {
            question: "Name a country that borders both the Atlantic and Pacific Oceans",
            correctAnswers: ["Colombia", "Chile", "Panama"]
        },
        {
            question: "Name a landlocked country in Europe that starts with 'S'",
            correctAnswers: ["Switzerland", "Slovakia", "Serbia", "San Marino"]
        },
        {
            question: "Name a country with only green and white on its flag",
            correctAnswers: ["Nigeria", "Pakistan", "Saudi Arabia"]
        },
        {
            question: "Name a country with 'Kingdom' in its official name",
            correctAnswers: ["United Kingdom", "Saudi Arabia", "Thailand", "Eswatini"]
        },
        {
            question: "Name a country located entirely in the Southern Hemisphere",
            correctAnswers: ["New Zealand", "Madagascar", "Lesotho", "Uruguay"]
        },
        {
            question: "Name a country with a double land border (landlocked by landlocked countries)",
            correctAnswers: ["Liechtenstein", "Uzbekistan"]
        },
        {
            question: "Name a country that has 4 official languages or more",
            correctAnswers: ["Switzerland", "South Africa", "Bolivia"]
        },
        {
            question: "Name a country with a predominantly desert climate",
            correctAnswers: ["Saudi Arabia", "Libya", "Niger", "Chad"]
        },
        {
            question: "Name a country that is an archipelago",
            correctAnswers: ["Philippines", "Indonesia", "Maldives", "Japan", "Bahamas"]
        },
        {
            question: "Name a country that is completely surrounded by South Africa",
            correctAnswers: ["Lesotho", "Eswatini"]
        },
        {
            question: "Name a country in Europe that starts with 'L' and is landlocked",
            correctAnswers: ["Liechtenstein", "Luxembourg"]
        },
        {
            question: "Name a country in the Americas that starts with the letter 'S'",
            correctAnswers: ["Suriname", "Saint Lucia"]
        },
        {
            question: "Name a country whose name is also the name of its capital",
            correctAnswers: ["Singapore", "Djibouti, Luxembourg"]
        }
    ],

    // Comprehensive list of all countries for autocomplete
    allCountries: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
        "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
        "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
        "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad",
        "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
        "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala",
        "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran",
        "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
        "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
        "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
        "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
        "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
        "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama",
        "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
        "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
        "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
        "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
        "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
        "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ],

    // Country flag mappings
    countryFlags: {
        "Afghanistan": "🇦🇫", "Albania": "🇦🇱", "Algeria": "🇩🇿", "Andorra": "🇦🇩", "Angola": "🇦🇴", "Antigua and Barbuda": "🇦🇬", "Argentina": "🇦🇷", "Armenia": "🇦🇲",
        "Australia": "🇦🇺", "Austria": "🇦🇹", "Azerbaijan": "🇦🇿", "Bahamas": "🇧🇸", "Bahrain": "🇧🇭", "Bangladesh": "🇧🇩", "Barbados": "🇧🇧", "Belarus": "🇧🇾", "Belgium": "🇧🇪",
        "Belize": "🇧🇿", "Benin": "🇧🇯", "Bhutan": "🇧🇹", "Bolivia": "🇧🇴", "Bosnia and Herzegovina": "🇧🇦", "Botswana": "🇧🇼", "Brazil": "🇧🇷", "Brunei": "🇧🇳", "Bulgaria": "🇧🇬",
        "Burkina Faso": "🇧🇫", "Burundi": "🇧🇮", "Cabo Verde": "🇨🇻", "Cambodia": "🇰🇭", "Cameroon": "🇨🇲", "Canada": "🇨🇦", "Central African Republic": "🇨🇫", "Chad": "🇹🇩",
        "Chile": "🇨🇱", "China": "🇨🇳", "Colombia": "🇨🇴", "Comoros": "🇰🇲", "Congo (Congo-Brazzaville)": "🇨🇬", "Costa Rica": "🇨🇷", "Croatia": "🇭🇷", "Cuba": "🇨🇺", "Cyprus": "🇨🇾",
        "Czech Republic": "🇨🇿", "Democratic Republic of the Congo": "🇨🇩", "Denmark": "🇩🇰", "Djibouti": "🇩🇯", "Dominica": "🇩🇲", "Dominican Republic": "🇩🇴",
        "Ecuador": "🇪🇨", "Egypt": "🇪🇬", "El Salvador": "🇸🇻", "Equatorial Guinea": "🇬🇶", "Eritrea": "🇪🇷", "Estonia": "🇪🇪", "Eswatini": "🇸🇿", "Ethiopia": "🇪🇹", "Fiji": "🇫🇯",
        "Finland": "🇫🇮", "France": "🇫🇷", "Gabon": "🇬🇦", "Gambia": "🇬🇲", "Georgia": "🇬🇪", "Germany": "🇩🇪", "Ghana": "🇬🇭", "Greece": "🇬🇷", "Grenada": "🇬🇩", "Guatemala": "🇬🇹",
        "Guinea": "🇬🇳", "Guinea-Bissau": "🇬🇼", "Guyana": "🇬🇾", "Haiti": "🇭🇹", "Honduras": "🇭🇳", "Hungary": "🇭🇺", "Iceland": "🇮🇸", "India": "🇮🇳", "Indonesia": "🇮🇩", "Iran": "🇮🇷",
        "Iraq": "🇮🇶", "Ireland": "🇮🇪", "Israel": "🇮🇱", "Italy": "🇮🇹", "Jamaica": "🇯🇲", "Japan": "🇯🇵", "Jordan": "🇯🇴", "Kazakhstan": "🇰🇿", "Kenya": "🇰🇪", "Kiribati": "🇰🇮",
        "Kuwait": "🇰🇼", "Kyrgyzstan": "🇰🇬", "Laos": "🇱🇦", "Latvia": "🇱🇻", "Lebanon": "🇱🇧", "Lesotho": "🇱🇸", "Liberia": "🇱🇷", "Libya": "🇱🇾", "Liechtenstein": "🇱🇮",
        "Lithuania": "🇱🇹", "Luxembourg": "🇱🇺", "Madagascar": "🇲🇬", "Malawi": "🇲🇼", "Malaysia": "🇲🇾", "Maldives": "🇲🇻", "Mali": "🇲🇱", "Malta": "🇲🇹", "Marshall Islands": "🇲🇭",
        "Mauritania": "🇲🇷", "Mauritius": "🇲🇺", "Mexico": "🇲🇽", "Micronesia": "🇫🇲", "Moldova": "🇲🇩", "Monaco": "🇲🇨", "Mongolia": "🇲🇳", "Montenegro": "🇲🇪", "Morocco": "🇲🇦",
        "Mozambique": "🇲🇿", "Myanmar": "🇲🇲", "Namibia": "🇳🇦", "Nauru": "🇳🇷", "Nepal": "🇳🇵", "Netherlands": "🇳🇱", "New Zealand": "🇳🇿", "Nicaragua": "🇳🇮", "Niger": "🇳🇪",
        "Nigeria": "🇳🇬", "North Korea": "🇰🇵", "North Macedonia": "🇲🇰", "Norway": "🇳🇴", "Oman": "🇴🇲", "Pakistan": "🇵🇰", "Palau": "🇵🇼", "Palestine": "🇵🇸", "Panama": "🇵🇦",
        "Papua New Guinea": "🇵🇬", "Paraguay": "🇵🇾", "Peru": "🇵🇪", "Philippines": "🇵🇭", "Poland": "🇵🇱", "Portugal": "🇵🇹", "Qatar": "🇶🇦", "Romania": "🇷🇴", "Russia": "🇷🇺",
        "Rwanda": "🇷🇼", "Saint Kitts and Nevis": "🇰🇳", "Saint Lucia": "🇱🇨", "Saint Vincent and the Grenadines": "🇻🇨", "Samoa": "🇼🇸", "San Marino": "🇸🇲",
        "Sao Tome and Principe": "🇸🇹", "Saudi Arabia": "🇸🇦", "Senegal": "🇸🇳", "Serbia": "🇷🇸", "Seychelles": "🇸🇨", "Sierra Leone": "🇸🇱", "Singapore": "🇸🇬",
        "Slovakia": "🇸🇰", "Slovenia": "🇸🇮", "Solomon Islands": "🇸🇧", "Somalia": "🇸🇴", "South Africa": "🇿🇦", "South Korea": "🇰🇷", "South Sudan": "🇸🇸", "Spain": "🇪🇸",
        "Sri Lanka": "🇱🇰", "Sudan": "🇸🇩", "Suriname": "🇸🇷", "Sweden": "🇸🇪", "Switzerland": "🇨🇭", "Syria": "🇸🇾", "Taiwan": "🇹🇼", "Tajikistan": "🇹🇯", "Tanzania": "🇹🇿",
        "Thailand": "🇹🇭", "Timor-Leste": "🇹🇱", "Togo": "🇹🇬", "Tonga": "🇹🇴", "Trinidad and Tobago": "🇹🇹", "Tunisia": "🇹🇳", "Turkey": "🇹🇷", "Turkmenistan": "🇹🇲",
        "Tuvalu": "🇹🇻", "Uganda": "🇺🇬", "Ukraine": "🇺🇦", "United Arab Emirates": "🇦🇪", "United Kingdom": "🇬🇧", "United States": "🇺🇸", "Uruguay": "🇺🇾",
        "Uzbekistan": "🇺🇿", "Vanuatu": "🇻🇺", "Vatican City": "🇻🇦", "Venezuela": "🇻🇪", "Vietnam": "🇻🇳", "Yemen": "🇾🇪", "Zambia": "🇿🇲", "Zimbabwe": "🇿🇼"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GAME_DATA;
} 