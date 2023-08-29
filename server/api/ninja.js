export default defineEventHandler((event)=> {

    //handle query params
     const {name} = useQuery(event)
     
    // handle post data
    const {age} = await useBody()

    return{
        message: `Hello, ${name}! your are ${age} years old.`
    }
})