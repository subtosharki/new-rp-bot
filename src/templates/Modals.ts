import {
    MessageActionRow,
    Modal,
    ModalActionRowComponent,
    TextInputComponent,
} from 'discord.js';

export const Tweet = new Modal().setCustomId('twt').setTitle('Twitter');

const displayName = new TextInputComponent()
    .setCustomId('name')
    .setLabel('Enter your display name')
    .setStyle('SHORT');

const content = new TextInputComponent()
    .setCustomId('content')
    .setLabel('What would you like to post')
    .setStyle('PARAGRAPH');

const name = new MessageActionRow<ModalActionRowComponent>().addComponents(
    displayName
);
const con = new MessageActionRow<ModalActionRowComponent>().addComponents(
    content
);

Tweet.addComponents(name, con);
