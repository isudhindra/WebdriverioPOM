var faker = require('faker/locale/en_GB');
const config = require("../config/base.config");
// This is sample test data genertor using faker library to use for different language websites.
// Due to lack of time and login restricted I could not create any test cases using this class.


class testDataGenerator {

    constructor() {
        // console.log(config.randomSeedValue);
        faker.seed(parseInt(config.randomSeedValue));
    }

    setDefaultSeeder() {
        faker.seed(parseInt(config.randomSeedValue));
    }

    setSeeder(seedValue) {
        faker.seed(parseInt(config.randomSeedValue) * seedValue);
    }

    getPreviousFirstName() {
        return faker.name.firstName();
    }

    getPreviousLastName() {
        return faker.name.lastName();
    }

    getPreviousTitle() {
        return faker.random.arrayElement(["Mr", "Mrs", "Miss", "Ms", "Dr", "Master", "Lord", "Lady", "Professor"]);
    }

    getCountry() {
        return faker.random.arrayElement(["United Kingdom", "Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Ascension", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Islands", "Brazil", "Brit Indian Ocean Territory", "British Virgin Islands", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Cambodia", "Canada", "Cape Verde Islands", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Islands", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Dem Peoples Rep Of Korea", "Democratic Rep of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territory", "Gabonese Republic", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadaloupe", "Guam", "Guatamala", "Guinea", "Guinea-Bissau", "Guernsey (Channel Islands)", "Guyana", "Haiti", "Heard and McDonald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Rep", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Martinique", "Marshall Islands", "Mauritania", "Mauritius", "Mayotte", "Metropolitan France", "Mexico", "Micronesia", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Islands", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestinian Authority", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of Burundi", "Republic of Korea", "Republic of Moldova", "Republic of Serbia", "Reunion", "Romania", "Russian Federation", "Rwanda", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "S Georgia/S Sandwich Islands", "Spain", "Sri Lanka", "St Helena", "St Kitts-Nevis", "St Lucia", "St Pierre and Miquelon", "St Vincent and The Grenadines", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tristan da Cunha", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "US Minor Outlying Islands", "US Virgin Islands", "Uganda", "Ukraine", "United Arab Emirates", "United Republic of Cameroon", "United Republic of Tanzania", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zaire", "Zambia", "Zimbabwe", "European Patent Organisation", "Bonaire", " Sint Eustatius & Saba", "Curacao", "Saint Barthelemy", "Saint Martin (French part)", "Sint Maarten (Dutch part)", "South Sudan"]);
    }

    getAddressLine1() {
        return faker.address.streetName();
    }

    getAddressLine2() {
        return faker.address.streetAddress();
    }

    getAddressLine3() {
        return faker.address.state();
    }

    getFlatNumber() {
        return faker.random.number({ min: 1, max: 150 }).toString();
    }

    getHouseNumber() {
        return faker.random.number({ min: 2, max: 150 }).toString();
    }

    getHouseOrBuildingName() {
        return faker.address.streetSuffix() + ' ' + faker.address.secondaryAddress();
    }

    getCity() {
        return faker.address.city();
    }

    getPostCode() {
        return faker.address.zipCode();
    }

    getRandomNumber(minimum, maximum) {
        return faker.random.number({ min: minimum, max: maximum });
    }

    getCompanyPhone() {
        return faker.phone.phoneNumber();
    }

    generateAboutYouTestData() {
        var jsonData = {} // Creating AboutYou data json Object
        jsonData.nameChangedLast12months = this.getNameChangedLast12months();
        jsonData.previousTitle = this.getPreviousTitle();
        jsonData.previousFirstName = this.getPreviousFirstName();
        jsonData.previousLastName = this.getPreviousLastName();
        jsonData.countryOfBirth = this.getCountry();
        this.setDefaultSeeder();
        return jsonData;
    }


}
export default new testDataGenerator();
// const p = new testDataGenerator();

// console.log(p.getMoveInYear());


