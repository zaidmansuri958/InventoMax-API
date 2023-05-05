const userModel = require("../Model/User");
const jsonwebtoken = require("jsonwebtoken")
const SECRET_KEY = "InventoMax"

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJudW1iZXIiOiI3MjAxODA1NDg4IiwiaWQiOiI2NDUzODk5MzM5YTYyNDFjYTc4NTBjYzUiLCJpYXQiOjE2ODMxOTYzMDd9.ZoNwppuxxee8wfopHBIPz3ZT1rODijREWKAZhnVIxJU

const signUp = async function (req, res) {

    //Existing use check
    //Hashed password
    //User craetion
    //Tocken generate

    const {name,businessName, city, number} = req.body;
    try {
        const existingUser = await userModel.findOne({ number: number })
        if (existingUser) {
            return res.status(400).json({ message: "User alrady exists" })
        }
        const result = await userModel.create({
            name: name,
            businessName:businessName,
            city:city,
            number:number
        });

        const token = jsonwebtoken.sign({ number: result.number, id: result._id }, SECRET_KEY)
        res.status(201).json({ user: result, token: token })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Some thing went wrong" })
    }

}

// const signIn = async function (req, res) {
//     const { email, password } = req.body;

//     try {
//         const existingUser = await userModel.findOne({ email: email })
//         if (!existingUser) {
//             return res.status(404).json({ message: "User is not exists" })
//         }
//         const matchPassword = await bcrypt.compare(password, existingUser.password);

//         if (!matchPassword) {
//             return res.status(400).json({ messge: "Invalid Credentials" })
//         }
//         const token = jsonwebtoken.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY)
//         res.status(201).json({ user: existingUser, token: token })
//     }

//     catch (error) {
//         console.log(error)
//         res.status(500).json({ message: "Some thing went wrong" })
//     }


// }

// const getUser = async function (req, res) {
//     try {
//         const user = await userModel.findOne({ "_id": req.userID })
//         res.status(200).json(user)
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "something went wrong" });
//     }
// }

module.exports = {signUp}