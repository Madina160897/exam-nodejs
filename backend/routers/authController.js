const { EmailModel } = require("../Models");


class authController {
    async regis(req, res) {
        try {
            const { email, password } = req.body;
            const candidate = await EmailModel.findOne({ email });
            if (candidate) {
                return res.status(400).json({ message: "Пользователь с таким именем уже существует" });
            }
            const user = new EmailModel({ email, password })
            await user.save();
            return res.json({ message: "Пользователь успешно зарегистрирован" })
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: "Registration error" })
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await EmailModel.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: `Пользователь ${email} не найден` });
            }
            const passUser = await EmailModel.findOne({ password });
            if (!passUser) {
                return res.status(400).json({ message: `Введен неверный пароль` });
            }
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: "Login error" })
        }
    }

    async getUsers(req, res) {
        try {
            const users = await EmailModel.find()
            res.json(users)
        } catch (e) {

        }
    }

    async getUsersId(req, res) {
        try {
            const id = req.params.id;
            const userId = EmailModel.findById(id);
            res.json(userId)
        } catch (e) {

        }
    }

    async getUsersDel(req, res) {
        try {
            const id = req.params.id;
            EmailModel.findByIdAndDelete(id);
            res.json("deleted")
        } catch (e) {
            console.log(e);
            res.status(500).json(err)
        }
    }

    async getUsersPut (req, res) {
        try {
            const id = req.params.id
            const { email, password, name, surname, age } = req.body;
            await EmailModel.findByIdAndUpdate(id, { email: email, password: password, name: name, surname: surname, age: age, })
            res.json("user updated")
        } catch (e) {

        }
    }
}

module.exports = new authController()