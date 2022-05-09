import db from "../db.js";

export async function getUser(req, res){
    const { user } = req.locals;

    delete user.password;
    res.send(user);
}

export async function updateUser(req, res){
    const newUser = req.body;
    const { user } = req.locals;

    await db.collection("users").updateOne(
        { _id: user.userId }, { $set: newUser }
    );
    res.sendStatus(200);
}