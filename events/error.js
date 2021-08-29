module.exports = {
    name: "error",
    execute(message, args) {
    client.on('error', (error) => {
        console.log(error);
        })
    },
};
