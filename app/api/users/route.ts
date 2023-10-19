import sequelize from '@/db/config/config';
import User from '@/db/Models/User';



export async function GET() {
    try {
        await sequelize.authenticate();
        // If table is not available then create it other wise do nothing.
        await User.sync();
        // Find all users
        const users = await User.findAll();
        // Converting into the readable format.
        const usersArray = JSON.stringify(users, null, 2);

        // console.log(users.every(user => user instanceof User)); // true
        // console.log("All users:", usersArray);
        // console.log('---------------------------------------- Connection has been established successfully.');
        await sequelize.close();
        return Response.json(JSON.parse(usersArray));
    } catch (error) {
        console.error('--------------------------------------- Unable to connect to the database:', error);
        return Response.json([]);
        
    }
}


export async function POST() {
    // const res = await fetch(DATA_SOURCE_URL)
    // const todos: Todo[] = await res.json()

    try {

        // Create a new user
        const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
        // by this point, the user has been saved to the database!
        console.log("Jane's auto-generated ID:", jane);

        return Response.json([]);
    } catch (error) {
        console.error('--------------------------------------- Unable to connect to the database:', error);
        return Response.json([]);
    }
}