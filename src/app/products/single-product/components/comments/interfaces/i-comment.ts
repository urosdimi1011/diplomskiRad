export interface IComment extends Array<IComment>{
        "id":number,
        "author":string,
        "date":string,
        "desc":string,
        "comment":[IComment]
}
