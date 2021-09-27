function megaFriend (friends) {
    if (Array.isArray(friends) == false) {
        return "Please provide an array";
    }

    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}

const friends = ['jalal', 'habibul bashar', 'wasim', 'kuddus', 'asraf', 'arafat'];
const bigBuddy = megaFriend(friends);
console.log(bigBuddy);