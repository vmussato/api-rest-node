module.exports = app => {
    app.db.sync().done(() =>{
        app.listen(app.get("port"), () => {
            console.log('NTAsk API - porta ${app.get("port")}');
        });
    });
};