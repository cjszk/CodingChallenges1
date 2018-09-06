function makeUnitedStatesE164 (phoneNumber) {

    let numbersOnly = phoneNumber.split('').filter((item) => {
        if (parseInt(item) < 10) {
            return item;
        }
    }).join('');

    // First check to see if the string includes the country code or not.
    if (numbersOnly[0] === '1' && numbersOnly.length === 11) {
        return '+' + numbersOnly;
    }
    // Check to see if the string isn't exactly 10 digits
    if (numbersOnly.length !== 10) {
        return null;
    }
    return '+1' + numbersOnly;

}

makeUnitedStatesE164 ('(123)333-1234');
makeUnitedStatesE164 ('+14155552671');
makeUnitedStatesE164 ('1(207) 183-8750');
makeUnitedStatesE164 ('(115) 525-6325');
makeUnitedStatesE164 ('1 115 525 6325');

