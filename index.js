//@Caussz
const insta =  require('@androz2091/insta.js');

const client = new insta.Client();

client.on('connected', () => {
    console.log(`Logado na conta ${client.user.username}`)
});

client.on('messageCreate', (message) => {

    message.markSeen()

    if(message.content === "/ping"){
        message.reply("pong!")
    }
});

client.login('Seu usuario', 'Sua senha');