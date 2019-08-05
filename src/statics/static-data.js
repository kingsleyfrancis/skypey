import _ from "lodash";
import uuid from "short-uuid";
import faker from "faker";
import { sentence } from "txtgen";


const users = generateUsers(10);
export const contacts = _.mapKeys(users, "user_id");
export const getMessages = messagePerUser => {
    let messages = {};
    _.forEach(users, user => {
        messages[user.user_id] = {
            ..._.mapKeys(generateMsgs(messagePerUser), "number")
        };
    });
    return messages;
};

export function generateUser(){
    return{
        name: faker.name.lastName(1) + " " + faker.name.firstName(1),
        email: faker.internet.email(),
        profile_pic: faker.internet.avatar(),
        status: sentence(),
        user_id: uuid.generate()
    };
}

export const state = {
    user: generateUser(),
    messages: getMessages(10),
    typing:"",
    contacts,
    activeUserId: null
};

function generateMsg (number) {
    return {
        number,
        text: sentence(),
        is_user_message: faker.random.boolean()
    };
}

function generateUsers(numberOfUsers){
    return Array.from({length: numberOfUsers}, () => generateUser());
}

function generateMsgs(numberOfMessages) {
    return Array.from({length: numberOfMessages}, (val, ind) => generateMsg(ind));
}