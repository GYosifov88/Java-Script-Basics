function tennisEquipment(input){
    let tennisRocketPrice = Number(input[0]);
    let tennisRocketsCount = Number(input[1]);
    let sneakersPairs = Number(input[2]);

    let sneakersPrice = tennisRocketPrice / 6;

    let totalPrice = (sneakersPairs * sneakersPrice) + (tennisRocketPrice * tennisRocketsCount);
    let otherEquipment = totalPrice * 0.2;

    let totalAmountDue = totalPrice + otherEquipment;
    let djokovichPart = totalAmountDue / 8;
    let sponsorsPart = totalAmountDue - djokovichPart;

    console.log(`Price to be paid by Djokovic ${Math.floor(djokovichPart)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsorsPart)}`);
}

tennisEquipment(["386", "7", "4"])