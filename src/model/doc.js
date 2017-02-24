class Doc {
    constructor({filename}) 
    {
        this.filename = filename;
    }
    loadFile()
    {

    }
    render() 
    {
        let file = this.loadFile();
    }
    test()
    {
        return 2;
    }
}

export {Doc};
