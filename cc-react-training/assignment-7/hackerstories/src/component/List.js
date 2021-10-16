const stories =[
    {
        title :"react",
        url : " http//react",
        author :"jordan walke",
        num_comments : 3,
        points : 4,
        objectid :0,
    },
    {
        title :"redax",
        url :"http//redax",
        author :"man hattan",
        num_comments : 2,
        points : 5,
        objectid :1,
    }
    
]

function List({stories})  {
    return (
        <div>
            <ul>
                {stories.map(function(item){
                    return (
                        <li>
                            <span>
                                <a href={item.url}>{item.title}</a>
                            </span>
                            <span>{item.author}</span>
                            <span>{item.num_comments}</span>
                            <span> {item.points}</span>
                        </li>
                    );
                })
                }
            </ul>
        </div>
    );
    
}

export default List;