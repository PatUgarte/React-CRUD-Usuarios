const initialList = [
    {
        id: 1,
        name: "Mario Bros",
        mail: "mario@nintendo.com",
        username: "ItsMeMario",
        website: "",
    },
    {
        id: 2,
        name: "Luigi Bros",
        mail: "lbros@nintendo.com",
        username: "MariosTallerBrother",
        website: "http://www.luigi.com",
    },
    {
        id: 3,
        name: "Patricio Ugarte",
        mail: "pat@digitalhouse.com",
        username: "PatUgarte",
        website: "https://www.patugarte.dev",
    }
]

const usersList = {
    get: () => initialList,
    add: (user) => {
        initialList
            .push({
                id: initialList.length + 1,
                ...user
            });
            return usersList.get();
    },
}

export default usersList;