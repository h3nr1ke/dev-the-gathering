class GraphQLObject {
    constructor(){
        this._schema = "";
        this._root = {};
    }
    setSchema(_schema){
        this._schema = _schema;
    }
    set root(root){
        this._root = root;
    } 
    get schema(){
        return this._schema;
    }
    getRoot(){
        return this._root;
    }
}

module.exports = GraphQLObject;