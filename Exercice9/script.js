const checkAge=(age)=> {
    if (!Number.isInteger(age)) {
        throw new Error("L'âge doit être un entier.");
    }

    if (age < 18) {
        return "Vous êtes mineur.";
    } else if (age >= 18 && age < 65) {
        return "Vous êtes majeur.";
    } else {
        return "Vous êtes senior.";
    }
}

export default checkAge;
