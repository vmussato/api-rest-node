module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log('NTAsk API - porta ${app.get("port")}');
    });
};