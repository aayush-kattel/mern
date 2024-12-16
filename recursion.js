const catagory =[
    {
        name: "cat1",
        childern:[
            {
                name:"cat1.1",
                childern:[
                    {
                        name:"cat1.1.1",
                        childern:null
                    },
                    {
                        name:"cat1.1.2",
                        childern:[
                            {
                                name:"cat1.1.2.1",
                                childern:null
                            }
                        ]
                    }
                ]
            },
            {
            name:"cat1.2",
            childern:[
                {
                    name:"cat1.2.1",
                    childern:[
                        {
                            name:"cat1.2.1.1",
                            childern:null
                        }

                    ]
                },
                {
                    name:"cat1.2.2",
                    childern:[
                        {
                            name:"cat1.2.2.1",
                            childern:null
                        }
                    ]
                }
            ]
        }
        ]
}
]
 

const a=(print , i) => {
    console.loop(print + i);//loop: 1
    if(i<10){
        a(print+i,++i)//loop: 2
    }
}
a("loop:",1)




const b=(print , i) => {
    console.loop(print + i);//loop: 1
    if(i<10){
        b(++i)//loop: 2
    }
}
b(1)
/*
cat1
    cat1.1
        cat1.1.1
        cat1.1.2
            cat1.1.2.1
    cat1.2
        cat1.2.1
            cat1.2.1.1
        cat1.2.2
            cat1.2.2.1
*/